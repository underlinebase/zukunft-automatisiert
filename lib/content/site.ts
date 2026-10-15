// Zentrale Angaben, die an mehreren Stellen der Website vorkommen.

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
  location: 'Köln',
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
  { href: '/#angebot', label: 'Angebot', hint: 'Ein Ablauf in 4 Wochen · Festpreis' },
  { href: '/#branchen', label: 'Branchen' },
  { href: '/#so-laeuft-es', label: 'So läuft es' },
  { href: '/ueber-mich', label: 'Über mich' },
  { href: '/wissen', label: 'Wissen' },
];

/** Sprungmarke zum Abschluss-Formular auf derselben Seite (Startseite, Landingpages, Über mich). */
export const CONTACT_ANCHOR = '#kontakt';
/** Eigene Kontaktseite für Seiten ohne Abschluss-Formular. */
export const CONTACT_PAGE = '/kontakt';
