import { buildLlmsTxt } from '@/lib/seo/llms';

// Wird beim Build einmal erzeugt und dann als statische Datei ausgeliefert.
export const dynamic = 'force-static';

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
