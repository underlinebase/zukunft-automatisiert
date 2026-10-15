import { ImageResponse } from 'next/og';
import { getIndustry } from '@/lib/content/branchen';
import { renderOgImage, OG_SIZE } from '@/lib/seo/og-image';

export const alt = 'Zukunft. Automatisiert.: Prozessautomatisierung vom KI-Realisten';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ branche: string }> }): Promise<ImageResponse> {
  const { branche } = await params;
  const industry = getIndustry(branche);
  return renderOgImage({
    kicker: industry?.hero.kicker ?? 'Prozessautomatisierung für Inhaber',
    title: industry?.hero.title ?? 'Den Ablauf, der Sie Stunden kostet, automatisiere ich in 4 Wochen.',
  });
}
