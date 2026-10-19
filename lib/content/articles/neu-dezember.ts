// Neue Artikel (Dezember 2026 bis Januar 2027). Jeder Eintrag erscheint erst ab seinem datePublished.

import type { Article } from '@/lib/types';
import { kiVerordnungKleineBetriebe } from './ki-verordnung-kleine-betriebe';
import { kiSchulungspflichtNachweis } from './ki-schulungspflicht-nachweis';
import { eRechnungOhneNeueSoftware } from './e-rechnung-ohne-neue-software';
import { automatisierungFuerCoaches } from './automatisierung-fuer-coaches';
import { kiTelefonassistentHandwerk } from './ki-telefonassistent-handwerk';
import { agenturReportingOhneAbo } from './agentur-reporting-ohne-abo';
import { copilotImKleinenBetrieb } from './copilot-im-kleinen-betrieb';
import { kiFuerImmobilienmakler } from './ki-fuer-immobilienmakler';
import { handwerksbueroAutomatisieren } from './handwerksbuero-automatisieren';
import { datevLexwareN8n } from './datev-lexware-n8n';

export const DEZEMBER: Article[] = [
  datevLexwareN8n,
  handwerksbueroAutomatisieren,
  kiFuerImmobilienmakler,
  copilotImKleinenBetrieb,
  agenturReportingOhneAbo,
  kiTelefonassistentHandwerk,
  automatisierungFuerCoaches,
  eRechnungOhneNeueSoftware,
  kiSchulungspflichtNachweis,
  kiVerordnungKleineBetriebe,
];
