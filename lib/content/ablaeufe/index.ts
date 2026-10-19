// Ablauf-Bibliothek. ABLAEUFE enthält auch geplante Einträge; öffentlich ist, was publishedItems() liefert.

import { BRANCHEN_ORDER } from './types';
import type { Ablauf, Branche } from './types';
import { HANDWERK_MAKLER } from './liste-handwerk-makler';
import { KANZLEI_AGENTUR } from './liste-kanzlei-agentur';
import { COACHES_ALLE } from './liste-coaches-alle';
import { publishedItems } from '@/lib/content/publishing';

export const ABLAEUFE_PATH = '/ablaeufe';

/** Nach Branche (feste Reihenfolge), innerhalb der Branche wie registriert. */
export const ABLAEUFE: Ablauf[] = [...HANDWERK_MAKLER, ...KANZLEI_AGENTUR, ...COACHES_ALLE].sort(
  (a, b) => BRANCHEN_ORDER.indexOf(a.branche) - BRANCHEN_ORDER.indexOf(b.branche),
);

export function ablaufHref(slug: string): string {
  return `${ABLAEUFE_PATH}/${slug}`;
}

export function publishedAblaeufe(now: Date = new Date()): Ablauf[] {
  return publishedItems(ABLAEUFE, now);
}

export function findAblauf(slug: string, now: Date = new Date()): Ablauf | null {
  return publishedAblaeufe(now).find((ablauf) => ablauf.slug === slug) ?? null;
}

export function ablaeufeByBranche(items: readonly Ablauf[]): { branche: Branche; items: Ablauf[] }[] {
  return BRANCHEN_ORDER.map((branche) => ({ branche, items: items.filter((item) => item.branche === branche) })).filter(
    (group) => group.items.length > 0,
  );
}
