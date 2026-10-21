import { getArticles } from '@/lib/db';
import { publishedAblaeufe } from '@/lib/content/ablaeufe';
import { buildLlmsFullTxt } from '@/lib/seo/markdown';
import { listedMarkdownPages } from '@/lib/seo/page-markdown';

// Hauptseiten sowie alle veröffentlichten Artikel und Abläufe im Volltext. Stündlich neu erzeugt,
// damit geplante Inhalte am Erscheinungstag auftauchen.
export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET(): Promise<Response> {
  const articles = await getArticles();
  const pages = listedMarkdownPages().map((page) => page.build());
  return new Response(buildLlmsFullTxt(articles, publishedAblaeufe(), pages), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
