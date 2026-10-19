// Zuordnung von Check-Ergebnis und Ablauf-Bibliothek.

import type { Ablauf, Branche, Thema } from '@/lib/content/ablaeufe/types';
import type { CheckAblauf, CheckBranche } from './types';

/** So viele Abläufe zeigt das Ergebnis je Zeitfresser höchstens. */
export const MATCHES_PER_THEMA = 3;

export function libraryBranche(branche: CheckBranche): Branche {
  return branche === 'andere' ? 'alle' : branche;
}

/** Nur die Felder, die der Check braucht. Hält die Daten für den Browser klein. */
export function toCheckAblauf(ablauf: Pick<Ablauf, 'slug' | 'title' | 'branche' | 'themen'>, href: string): CheckAblauf {
  return { slug: ablauf.slug, title: ablauf.title, href, branche: ablauf.branche, themen: [...ablauf.themen] };
}

/**
 * Abläufe zu einem Thema: zuerst die der eigenen Branche, danach die für alle Betriebe.
 * Abläufe anderer Branchen bleiben außen vor.
 */
export function matchAblaeufe(
  items: readonly CheckAblauf[],
  branche: CheckBranche,
  thema: Thema,
  limit: number = MATCHES_PER_THEMA,
): CheckAblauf[] {
  const own = libraryBranche(branche);
  const fitting = items.filter((item) => item.themen.includes(thema));
  const ownFirst = [...fitting.filter((item) => item.branche === own), ...fitting.filter((item) => item.branche === 'alle' && own !== 'alle')];
  return ownFirst.slice(0, limit);
}
