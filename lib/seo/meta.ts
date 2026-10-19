// Hilfen für Seitentitel und Meta-Beschreibungen.

import { SITE } from '@/lib/content/site';

/** Suchmaschinen zeigen etwa 60 Zeichen Titel an. */
export const TITLE_MAX = 60;
/** Meta-Beschreibungen werden nach etwa 160 Zeichen abgeschnitten. */
export const DESCRIPTION_MAX = 160;

/** Muss zum Titel-Template im Root-Layout passen. */
export const TITLE_SEPARATOR = ' · ';

type SeoTitle = string | { absolute: string };

/**
 * Vorschaubild der Startseite (app/opengraph-image.tsx, 1200 × 630 wie OG_SIZE).
 * Ein eigenes `openGraph`-Objekt einer Seite ersetzt das des Root-Layouts samt Bild. Solche Seiten geben es hiermit ausdrücklich an.
 */
export const DEFAULT_OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `${SITE.name}: Prozessautomatisierung vom KI-Realisten`,
} as const;

/**
 * Titel für `metadata.title`. Hängt den Markennamen nur an, wenn das Ganze in die Suchergebnisse passt;
 * sonst bleibt der aussagekräftige Teil vollständig stehen. Ein Schlusspunkt (Überschriften-Stil) entfällt.
 */
export function seoTitle(title: string): SeoTitle {
  const clean = title.trim().replace(/\.$/, '');
  const withBrand = `${clean}${TITLE_SEPARATOR}${SITE.name}`;
  return withBrand.length <= TITLE_MAX ? clean : { absolute: clean };
}

/** Kürzt einen Text für die Meta-Beschreibung an einer Wortgrenze. */
export function metaDescription(text: string, max: number = DESCRIPTION_MAX): string {
  const clean = text.trim().replace(/\s+/g, ' ');
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : cut.length).replace(/[,;:.\s]+$/, '')}…`;
}
