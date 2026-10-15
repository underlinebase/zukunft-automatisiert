import { ImageResponse } from 'next/og';
import { getArticle } from '@/lib/db';
import { renderOgImage, OG_SIZE } from '@/lib/seo/og-image';

export const alt = 'Zukunft. Automatisiert.: Wissen-Artikel von Marco Gundlach';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }): Promise<ImageResponse> {
  const { slug } = await params;
  const article = await getArticle(slug);
  return renderOgImage({
    kicker: article ? `Wissen · ${article.category}` : 'Wissen',
    title: article?.title ?? 'Notizen aus der Praxis.',
  });
}
