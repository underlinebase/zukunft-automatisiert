import type { ImageResponse } from 'next/og';
import { HERO } from '@/lib/content/home';
import { renderOgImage, OG_SIZE } from '@/lib/seo/og-image';

export const alt = 'Zukunft. Automatisiert.: Prozessautomatisierung vom KI-Realisten';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image(): ImageResponse {
  return renderOgImage({ kicker: 'Der KI-Realist · Marco Gundlach', title: HERO.title });
}
