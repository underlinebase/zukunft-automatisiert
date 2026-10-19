// Datumsangaben für Wissen-Artikel.

const MONTH_FORMAT = new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric', timeZone: 'UTC' });

/** Anzeige-Datum zu einem ISO-Datum (JJJJ-MM-TT), z. B. „Oktober 2026“. */
export function monthLabel(iso: string): string {
  return MONTH_FORMAT.format(new Date(`${iso}T00:00:00Z`));
}

/** Veröffentlichung der Artikel zum Relaunch. */
export const PUBLISHED_ISO = '2026-10-15';
export const PUBLISHED = monthLabel(PUBLISHED_ISO);
