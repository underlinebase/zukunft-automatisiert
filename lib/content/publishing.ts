// Zeitgesteuerte Veröffentlichung: Ein Artikel erscheint ab seinem datePublished (Kalendertag in Deutschland).
// Die Seiten unter /wissen, Sitemap und llms.txt werden stündlich neu erzeugt (revalidate) und zeigen ihn dann.

import type { Article } from '@/lib/types';

export const PUBLISH_TIME_ZONE = 'Europe/Berlin';

// Schwedisches Format liefert JJJJ-MM-TT und lässt sich direkt mit datePublished vergleichen.
const ISO_DAY = new Intl.DateTimeFormat('sv-SE', { timeZone: PUBLISH_TIME_ZONE });

/** Heutiges Datum in Deutschland als JJJJ-MM-TT. */
export function todayIso(now: Date = new Date()): string {
  return ISO_DAY.format(now);
}

export function isPublished(article: Pick<Article, 'datePublished'>, now: Date = new Date()): boolean {
  return article.datePublished <= todayIso(now);
}

export function publishedArticles(articles: readonly Article[], now: Date = new Date()): Article[] {
  return publishedItems(articles, now);
}

/** Für alle Inhalte mit datePublished (Artikel, Abläufe). */
export function publishedItems<T extends Pick<Article, 'datePublished'>>(items: readonly T[], now: Date = new Date()): T[] {
  return items.filter((item) => isPublished(item, now));
}
