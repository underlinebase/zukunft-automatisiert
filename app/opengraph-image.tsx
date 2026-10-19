import type { ImageResponse } from 'next/og';
import { HERO } from '@/lib/content/home';
import { renderOgImage, OG_SIZE } from '@/lib/seo/og-image';
import { DEFAULT_OG_IMAGE } from '@/lib/seo/meta';

export const alt = DEFAULT_OG_IMAGE.alt;
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image(): ImageResponse {
  return renderOgImage({ kicker: 'Der KI-Realist · Marco Gundlach', title: HERO.title });
}
