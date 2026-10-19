import { findAblauf, publishedAblaeufe } from '@/lib/content/ablaeufe';
import { ablaufMarkdown, ablaufUrl, markdownResponse, notFoundResponse } from '@/lib/seo/markdown';

// Erreichbar unter /ablaeufe/<slug>.md (Rewrite in next.config.ts).
// Stündlich neu erzeugt. Geplante Abläufe liefern bis zu ihrem Erscheinungstag 404.
export const dynamic = 'force-static';
export const revalidate = 3600;

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return publishedAblaeufe().map((ablauf) => ({ slug: ablauf.slug }));
}

export async function GET(_request: Request, { params }: RouteProps): Promise<Response> {
  const { slug } = await params;
  const ablauf = findAblauf(slug);
  if (!ablauf) return notFoundResponse();
  return markdownResponse(ablaufMarkdown(ablauf), ablaufUrl(ablauf));
}
