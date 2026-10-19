// Wissen-Artikel, je Artikel eine Datei. Ich-Form, Ansprache mit „Sie“, keine erfundenen Zahlen oder Zitate.
// Stilregeln gegen typische KI-Muster prüft lib/content/content.test.ts.
// ARTICLES enthält auch geplante Artikel. Was öffentlich ist, entscheidet lib/content/publishing.ts.

import type { Article } from '@/lib/types';
import { BESTAND } from './bestand';
import { RATGEBER } from './neu-ratgeber';
import { PRAXIS } from './neu-praxis';
import { FALLBEISPIELE } from './neu-fallbeispiele';
import { FOERDERUNG } from './neu-foerderung';
import { DEZEMBER } from './neu-dezember';

/** Neueste zuerst. Bei gleichem Datum bleibt die Reihenfolge der Listen erhalten. */
export const ARTICLES: Article[] = [...RATGEBER, ...PRAXIS, ...FALLBEISPIELE, ...FOERDERUNG, ...DEZEMBER, ...BESTAND].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);
