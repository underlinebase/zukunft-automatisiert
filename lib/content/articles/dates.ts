// Datumsangaben für Wissen-Artikel.

const MONTH_FORMAT = new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric', timeZone: 'UTC' });

const DAY_FORMAT = new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

function parseIsoDay(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`);
}

/** Tagesgenaues Datum zu einem ISO-Datum (JJJJ-MM-TT), z. B. „15. Oktober 2026“. */
export function dayLabel(iso: string): string {
  return DAY_FORMAT.format(parseIsoDay(iso));
}

/** Anzeige-Datum zu einem ISO-Datum (JJJJ-MM-TT), z. B. „Oktober 2026“. */
export function monthLabel(iso: string): string {
  return MONTH_FORMAT.format(parseIsoDay(iso));
}

/** Überarbeitungsdatum, wenn es eins gibt und es vom Erscheinungstag abweicht. Sonst undefined. */
export function visibleModifiedDate(article: { datePublished: string; dateModified?: string }): string | undefined {
  const { datePublished, dateModified } = article;
  return dateModified && dateModified !== datePublished ? dateModified : undefined;
}

/** Veröffentlichung der Artikel zum Relaunch. */
export const PUBLISHED_ISO = '2026-10-15';
export const PUBLISHED = monthLabel(PUBLISHED_ISO);
