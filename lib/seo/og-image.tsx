// Gemeinsames Layout der Social-Media-Vorschaubilder (Open Graph).
// ImageResponse kann keine CSS-Variablen lesen; die Werte entsprechen den Tokens in app/globals.css.

import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };

const OG_COLORS = {
  brand: '#742D40',
  onBrandMuted: '#EAD3D8',
  white: '#FFFFFF',
} as const;

interface OgImageContent {
  kicker: string;
  title: string;
}

export function renderOgImage({ kicker, title }: OgImageContent): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: OG_COLORS.brand,
          color: OG_COLORS.white,
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: 1, color: OG_COLORS.onBrandMuted }}>{kicker}</div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.12, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: OG_COLORS.onBrandMuted }}>
          <span>Zukunft. Automatisiert.</span>
          <span>Ein Ablauf · 4 Wochen · mit Garantie</span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
