// Weitere Hauptseiten neben Startseite, KI-Beratung, Über mich, Wissen und Kontakt.
// Sitemap, llms.txt und Navigation lesen von hier. `listed: false` = noch nicht öffentlich verlinkt (noindex).

import { freigegebeneVorlagen } from './vorlagen';

export interface SitePage {
  path: string;
  /** Name in Navigation, Brotkrumen und llms.txt. */
  name: string;
  /** Meta-Description, max. 160 Zeichen. */
  description: string;
  priority: number;
  listed: boolean;
}

export const ABLAEUFE_PAGE: SitePage = {
  path: '/ablaeufe',
  name: 'Ablauf-Bibliothek',
  description:
    'Abläufe, die sich in kleinen Betrieben automatisieren lassen, nach Branche sortiert: wie es heute läuft, wie danach, was es an Zeit bringt.',
  priority: 0.8,
  listed: true,
};

export const GARANTIE_PAGE: SitePage = {
  path: '/garantie',
  name: 'Garantie',
  description:
    'Läuft der automatisierte Ablauf nach 4 Wochen nicht, bessere ich im vereinbarten Umfang ohne Aufpreis nach. Was die Garantie genau umfasst und was nicht.',
  priority: 0.7,
  listed: true,
};

export const CHECK_PAGE: SitePage = {
  path: '/automatisierungs-check',
  name: 'Automatisierungs-Check',
  description:
    'Zehn Fragen zu Ihrem Betrieb, drei Minuten. Am Ende sehen Sie, welche Abläufe Sie am meisten Zeit kosten und was sich automatisieren lässt.',
  priority: 0.8,
  listed: true,
};

export const DATEN_PAGE: SitePage = {
  path: '/ki-im-kleinbetrieb',
  name: 'KI im Kleinbetrieb: Zahlen',
  description:
    'Wie viele kleine Betriebe KI 2026 wirklich einsetzen: Studien von Bitkom, Handwerk und Kammern eingeordnet, mit Quellen und Widersprüchen.',
  priority: 0.6,
  listed: true,
};

export const VORLAGEN_PAGE: SitePage = {
  path: '/vorlagen',
  name: 'n8n-Vorlagen',
  description:
    'Kostenlose n8n-Vorlagen auf Deutsch für kleine Betriebe: Rechnungseingang, Anfragen erfassen, Angebote nachfassen. Mit Anleitung.',
  priority: 0.6,
  // Öffentlich, sobald Marco die erste Vorlage in n8n getestet und freigegeben hat.
  listed: freigegebeneVorlagen().length > 0,
};

export const EXTRA_PAGES: readonly SitePage[] = [ABLAEUFE_PAGE, GARANTIE_PAGE, CHECK_PAGE, DATEN_PAGE, VORLAGEN_PAGE];

export function listedPages(): SitePage[] {
  return EXTRA_PAGES.filter((page) => page.listed);
}
