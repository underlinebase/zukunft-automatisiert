import { getArticle, getArticles } from '@/lib/db';
import { articleMarkdown, articleUrl, markdownResponse, notFoundResponse } from '@/lib/seo/markdown';

// Erreichbar unter /wissen/<slug>.md (Rewrite in next.config.ts).
// Stündlich neu erzeugt. Geplante Artikel liefern bis zu ihrem Erscheinungstag 404.
export const dynamic = 'force-static';
export const revalidate = 3600;

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function GET(_request: Request, { params }: RouteProps): Promise<Response> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return notFoundResponse();
  return markdownResponse(articleMarkdown(article), articleUrl(article));
}
