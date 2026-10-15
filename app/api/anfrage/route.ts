import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateInquiry } from '@/lib/inquiry';
import type { InquiryData } from '@/lib/inquiry';

const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';
const DEFAULT_RECIPIENT = 'marco@zukunft-automatisiert.de';
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_REQUESTS = 5;
const FALLBACK_MESSAGE = `Das Formular ist gerade nicht erreichbar. Bitte schreiben Sie direkt an ${DEFAULT_RECIPIENT}.`;

// Einfache Drosselung pro Instanz. Schützt vor versehentlichem Mehrfachsenden und simplen Bots.
let recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string, now: number): boolean {
  const windowStart = now - RATE_WINDOW_MS;
  const previous = (recentRequests.get(ip) ?? []).filter((time) => time > windowStart);
  const next = new Map(recentRequests);
  next.set(ip, [...previous, now]);
  recentRequests = next;
  return previous.length >= RATE_MAX_REQUESTS;
}

function reply(status: number, body: { success: boolean; error?: string; errors?: Record<string, string> }) {
  return NextResponse.json(body, { status });
}

async function sendMail(data: InquiryData, apiKey: string, sender: string, recipient: string): Promise<boolean> {
  const response = await fetch(BREVO_URL, {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { email: sender, name: 'Website Zukunft. Automatisiert.' },
      to: [{ email: recipient }],
      replyTo: { email: data.email, name: data.name },
      subject: `Neue Ablauf-Anfrage von ${data.name}`,
      textContent: `Name: ${data.name}\nE-Mail: ${data.email}\n\nWelcher Ablauf kostet am meisten Zeit?\n${data.ablauf}`,
    }),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    console.error('Kontaktformular: Brevo-Versand fehlgeschlagen', response.status, detail.slice(0, 500));
  }
  return response.ok;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unbekannt';
  if (isRateLimited(ip, Date.now())) {
    return reply(429, { success: false, error: 'Sie haben gerade mehrere Anfragen geschickt. Bitte versuchen Sie es in ein paar Minuten noch einmal.' });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return reply(400, { success: false, error: 'Die Anfrage konnte nicht gelesen werden.' });
  }

  const result = validateInquiry(body);
  if (!result.ok) {
    // Bots bekommen eine scheinbar erfolgreiche Antwort, damit sie nicht weiter probieren.
    if (result.spam) return reply(200, { success: true });
    return reply(400, { success: false, error: 'Bitte prüfen Sie Ihre Angaben.', errors: result.errors });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.BREVO_SENDER_EMAIL;
  const recipient = process.env.KONTAKT_EMPFAENGER || DEFAULT_RECIPIENT;
  if (!apiKey || !sender) {
    console.error('Kontaktformular: BREVO_API_KEY oder BREVO_SENDER_EMAIL ist nicht gesetzt.');
    return reply(503, { success: false, error: FALLBACK_MESSAGE });
  }

  try {
    const sent = await sendMail(result.data, apiKey, sender, recipient);
    if (!sent) return reply(502, { success: false, error: FALLBACK_MESSAGE });
  } catch (error: unknown) {
    console.error('Kontaktformular: Netzwerkfehler beim Versand', error instanceof Error ? error.message : error);
    return reply(502, { success: false, error: FALLBACK_MESSAGE });
  }

  return reply(200, { success: true });
}
