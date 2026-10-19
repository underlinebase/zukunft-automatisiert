import { buildLlmsTxt } from '@/lib/seo/llms';

// Statisch ausgeliefert und stündlich neu erzeugt, damit geplante Artikel am Erscheinungstag auftauchen.
export const dynamic = 'force-static';
export const revalidate = 3600;

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
