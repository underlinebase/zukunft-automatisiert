// Zentrale Angaben, die an mehreren Stellen der Website vorkommen.
// Platzhalter in eckigen Klammern sind bewusst sichtbar, bis sie ersetzt werden.

export const SITE = {
  name: 'Zukunft. Automatisiert.',
  url: 'https://zukunft-automatisiert.de',
  owner: 'Marco Gundlach',
  email: 'marco@zukunft-automatisiert.de',
  linkedin: 'https://linkedin.com/in/marcogundlach',
  calUrl: 'https://cal.eu/marco-g-ppa25o/30min',
  price: '[PREIS]',
  carePrice: '[PREIS]',
  responseTime: '24 Stunden',
} as const;

export interface NavItem {
  href: string;
  label: string;
  hint?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/#angebot', label: 'Angebot', hint: `Ein Ablauf in 4 Wochen · ${SITE.price}` },
  { href: '/#branchen', label: 'Branchen' },
  { href: '/#so-laeuft-es', label: 'So läuft es' },
  { href: '/ueber-mich', label: 'Über mich' },
  { href: '/#fragen', label: 'Fragen' },
];

export const CONTACT_ANCHOR = '/#kontakt';
