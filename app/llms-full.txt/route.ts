import { getArticles } from '@/lib/db';
import { publishedAblaeufe } from '@/lib/content/ablaeufe';
import { buildLlmsFullTxt } from '@/lib/seo/markdown';

// Alle veröffentlichten Artikel und Abläufe im Volltext. Stündlich neu erzeugt,
// damit geplante Inhalte am Erscheinungstag auftauchen.
export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET(): Promise<Response> {
  const articles = await getArticles();
  return new Response(buildLlmsFullTxt(articles, publishedAblaeufe()), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
