// Neue Artikel (praxis). Jeder Eintrag erscheint erst ab seinem datePublished.

import type { Article } from '@/lib/types';
import { eMailPostfachAutomatisieren } from './e-mail-postfach-automatisieren';
import { rechnungseingangAutomatisieren } from './rechnungseingang-automatisieren';
import { kiImHandwerk } from './ki-im-handwerk';
import { kiInDerSteuerkanzlei } from './ki-in-der-steuerkanzlei';
import { automatisierungOhneItAbteilung } from './automatisierung-ohne-it-abteilung';
import { kiBeraterFinden } from './ki-berater-finden';

export const PRAXIS: Article[] = [
  kiBeraterFinden,
  automatisierungOhneItAbteilung,
  kiInDerSteuerkanzlei,
  kiImHandwerk,
  rechnungseingangAutomatisieren,
  eMailPostfachAutomatisieren,
];
