// Hilfen für Seitentitel, Meta-Beschreibungen und Vorschaudaten (Open Graph, Twitter).

import type { Metadata } from 'next';
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

/** Der Titel, wie er im Browser-Tab und in den Suchergebnissen steht (samt Template-Anhang). */
export function renderedTitle(title: string): string {
  const result = seoTitle(title);
  return typeof result === 'string' ? `${result}${TITLE_SEPARATOR}${SITE.name}` : result.absolute;
}

interface OgImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

/** Zusatzangaben für Artikelseiten (article:published_time usw.). */
export interface ArticleMeta {
  publishedTime: string;
  modifiedTime?: string;
  authors: readonly string[];
  section: string;
}

export interface PageMetaInput {
  /** Titel für die Suchergebnisse; läuft durch seoTitle(). */
  title: string;
  description: string;
  /** Pfad ab der Domain, z. B. „/kontakt“. Wird kanonische Adresse und og:url. */
  path: string;
  /** Titel für geteilte Links, falls er vom Suchtitel abweichen soll (z. B. die Überschrift der Seite). */
  ogTitle?: string;
  type?: 'website' | 'article';
  /**
   * Vorschaubilder. Ohne Angabe gilt DEFAULT_OG_IMAGE.
   * `'route'`: Die Route hat eine eigene opengraph-image-Datei. Dann bleibt `images` frei, sonst würde es die Datei verdrängen.
   */
  images?: readonly OgImage[] | 'route';
  /** Gesetzt bei Artikeln; macht die Seite zu og:type „article“. */
  article?: ArticleMeta;
  /** Pfad der Markdown-Fassung (z. B. „/garantie.md“), wird als <link rel="alternate"> angeboten. */
  markdown?: string;
}

function articleFields(article?: ArticleMeta) {
  if (!article) return {};
  return {
    publishedTime: article.publishedTime,
    modifiedTime: article.modifiedTime,
    authors: [...article.authors],
    section: article.section,
  };
}

/**
 * Metadaten einer Seite samt eigenen Open-Graph- und Twitter-Angaben.
 * Next.js führt `openGraph` und `twitter` nur flach zusammen: Wer sie nicht setzt, erbt die Werte der Startseite.
 */
export function pageMetadata({ title, description, path, ogTitle, type = 'website', images, article, markdown }: PageMetaInput): Metadata {
  const shareTitle = ogTitle ?? title.trim().replace(/\.$/, '');
  const imageField = images === 'route' ? {} : { images: [...(images ?? [DEFAULT_OG_IMAGE])] };
  return {
    title: seoTitle(title),
    description,
    alternates: { canonical: path, ...(markdown ? { types: { 'text/markdown': markdown } } : {}) },
    openGraph: {
      type: article ? 'article' : type,
      url: path,
      title: shareTitle,
      description,
      locale: 'de_DE',
      siteName: SITE.name,
      ...imageField,
      ...articleFields(article),
    },
    // Ohne eigenes `images` übernimmt Next.js das Bild aus openGraph, auch das aus einer opengraph-image-Datei.
    twitter: { card: 'summary_large_image', title: shareTitle, description },
  };
}
