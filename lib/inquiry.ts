// Validierung der Anfrage „Ablauf in 3 Sätzen schildern“.
// Wird im Formular (Client) und in der API-Route (Server) gleich verwendet.

export const INQUIRY_LIMITS = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 200,
  ablaufMin: 10,
  ablaufMax: 2000,
} as const;

export type InquiryField = 'name' | 'email' | 'ablauf';

/** Unauffälliger Name, damit Browser-Autofill das Feld nicht befüllt. */
export const HONEYPOT_FIELD = 'hp_check';

export interface InquiryData {
  name: string;
  email: string;
  ablauf: string;
}

export type InquiryResult =
  | { ok: true; data: InquiryData }
  | { ok: false; errors: Partial<Record<InquiryField, string>>; spam?: boolean };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LINE_BREAK = /[\r\n]/;

const asText = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

export function validateInquiry(raw: unknown): InquiryResult {
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: { ablauf: 'Die Anfrage konnte nicht gelesen werden.' } };
  }
  const input = raw as Record<string, unknown>;

  // Honeypot: Menschen sehen dieses Feld nicht.
  if (asText(input[HONEYPOT_FIELD]) !== '') return { ok: false, errors: {}, spam: true };

  const name = asText(input.name);
  const email = asText(input.email);
  const ablauf = asText(input.ablauf);
  const errors: Partial<Record<InquiryField, string>> = {};

  if (name.length < INQUIRY_LIMITS.nameMin || name.length > INQUIRY_LIMITS.nameMax || LINE_BREAK.test(name)) {
    errors.name = 'Bitte geben Sie Ihren Namen an.';
  }
  if (email.length > INQUIRY_LIMITS.emailMax || !EMAIL_PATTERN.test(email) || LINE_BREAK.test(email)) {
    errors.email = 'Bitte prüfen Sie Ihre E-Mail-Adresse.';
  }
  if (ablauf.length < INQUIRY_LIMITS.ablaufMin) {
    errors.ablauf = 'Ein, zwei Sätze zu Ihrem Ablauf reichen. Etwas mehr als ein Stichwort brauche ich aber.';
  } else if (ablauf.length > INQUIRY_LIMITS.ablaufMax) {
    errors.ablauf = `Bitte fassen Sie sich etwas kürzer (höchstens ${INQUIRY_LIMITS.ablaufMax} Zeichen).`;
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data: { name, email, ablauf } };
}
