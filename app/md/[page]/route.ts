import { SITE } from '@/lib/content/site';
import { markdownResponse, notFoundResponse } from '@/lib/seo/markdown';
import { MARKDOWN_PAGES, findMarkdownPage } from '@/lib/seo/page-markdown';

// Erreichbar unter /ki-beratung.md, /garantie.md, /ueber-mich.md und /ki-im-kleinbetrieb.md (Rewrites in next.config.ts).
// Stündlich neu erzeugt wie die übrigen Markdown-Fassungen. Andere Namen ergeben 404.
export const dynamic = 'force-static';
export const revalidate = 3600;
export const dynamicParams = false;

interface RouteProps {
  params: Promise<{ page: string }>;
}

export function generateStaticParams(): { page: string }[] {
  return MARKDOWN_PAGES.map((page) => ({ page: page.path.slice(1) }));
}

export async function GET(_request: Request, { params }: RouteProps): Promise<Response> {
  const { page: slug } = await params;
  const page = findMarkdownPage(slug);
  if (!page) return notFoundResponse();
  return markdownResponse(page.build(), `${SITE.url}${page.path}`);
}
