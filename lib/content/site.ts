// Zentrale Angaben, die an mehreren Stellen der Website vorkommen.

import { ABLAEUFE_PAGE, CHECK_PAGE, DATEN_PAGE, GARANTIE_PAGE, VORLAGEN_PAGE } from './pages';

export const SITE = {
  name: 'Zukunft. Automatisiert.',
  // Kanonische Adresse: Die Domain ohne www leitet bei Vercel auf www weiter.
  url: 'https://www.zukunft-automatisiert.de',
  owner: 'Marco Gundlach',
  role: 'Der KI-Realist',
  email: 'marco@zukunft-automatisiert.de',
  linkedin: 'https://linkedin.com/in/marcogundlach',
  calUrl: 'https://cal.eu/marco-g-ppa25o/30min',
  responseTime: '24 Stunden',
} as const;

/**
 * Letzte inhaltliche Überarbeitung der festen Seiten (JJJJ-MM-TT) für lastmod in der Sitemap.
 * Von Hand nachziehen, wenn sich Texte auf Startseite, Landingpages, Hauptseiten oder Ablauf-Seiten ändern.
 */
export const SITE_UPDATED = '2026-10-21';

/** Startseite zielt auf „Prozessautomatisierung“, /ki-beratung auf „KI-Berater“. Titel unter 60 Zeichen. */
export const HOME_SEO = {
  title: 'Prozessautomatisierung für kleine Unternehmen · KI-Berater',
  ogTitle: 'Prozessautomatisierung für kleine Unternehmen',
  description:
    'Prozessautomatisierung für kleine Unternehmen: KI-Berater Marco Gundlach automatisiert den Ablauf, der Sie am meisten Zeit kostet. 4 Wochen, Festpreis, remote.',
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export interface NavItem extends NavLink {
  hint?: string;
  children?: NavLink[];
}

/**
 * Hauptnavigation. Landingpages (z. B. /steuerberater) sind bewusst nicht verlinkt;
 * sie werden gezielt über Anzeigen, Mailings oder Suchmaschinen angesteuert.
 */
export const NAV_ITEMS: NavItem[] = [
  {
    href: '/#angebot',
    label: 'Angebot',
    hint: 'Ein Ablauf in 4 Wochen · Festpreis',
    children: [
      { href: GARANTIE_PAGE.path, label: GARANTIE_PAGE.name },
      { href: CHECK_PAGE.path, label: CHECK_PAGE.name },
    ],
  },
  { href: '/ki-beratung', label: 'KI-Beratung' },
  { href: '/#branchen', label: 'Branchen' },
  { href: '/#so-laeuft-es', label: 'So läuft es' },
  { href: '/ueber-mich', label: 'Über mich' },
  {
    href: '/wissen',
    label: 'Wissen',
    children: [
      { href: '/wissen', label: 'Artikel' },
      { href: ABLAEUFE_PAGE.path, label: ABLAEUFE_PAGE.name },
      { href: DATEN_PAGE.path, label: DATEN_PAGE.name },
      ...(VORLAGEN_PAGE.listed ? [{ href: VORLAGEN_PAGE.path, label: VORLAGEN_PAGE.name }] : []),
    ],
  },
];

/** Sprungmarke zum Abschluss-Formular auf derselben Seite (Startseite, Landingpages, Über mich). */
export const CONTACT_ANCHOR = '#kontakt';
/** Eigene Kontaktseite für Seiten ohne Abschluss-Formular. */
export const CONTACT_PAGE = '/kontakt';
