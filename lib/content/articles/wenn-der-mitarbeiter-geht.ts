import type { Article } from '@/lib/types';
import { PUBLISHED, PUBLISHED_ISO } from './dates';

export const wennDerMitarbeiterGeht: Article = {
  id: 14,
  slug: 'wenn-der-mitarbeiter-geht',
  title: 'Wenn der Mitarbeiter geht, der alles weiß.',
  date: PUBLISHED,
  datePublished: PUBLISHED_ISO,
  read_minutes: 5,
  category: 'Methodik',
  seoDescription:
    'In fast jedem kleinen Betrieb weiß eine Person, wie alles läuft. Geht sie, geht das Wissen mit. Wer den Ablauf aufnimmt und automatisiert, verliert es nicht.',
  lead: 'In fast jedem kleinen Betrieb gibt es diese eine Person. Sie weiß, wie die Rechnungen raus müssen, welcher Kunde was braucht und wo welche Datei liegt. Solange sie da ist, fällt das niemandem auf.',
  body: [
    { kind: 'h2', text: 'Das Wissen steckt im Ablauf' },
    { kind: 'p', text: 'Oft ist dieses Wissen gar nicht so geheimnisvoll. Es sind Gewohnheiten: erst das eine prüfen, dann das andere eintragen, am Freitag die Liste verschicken. Weil es nirgends aufgeschrieben ist, geht es verloren, wenn die Person in Rente geht oder kündigt.' },
    { kind: 'h2', text: 'Aufschreiben hilft, Automatisieren hilft mehr' },
    { kind: 'p', text: 'Der erste Schritt ist, den Ablauf einmal sauber aufzunehmen. Das mache ich in Woche 1 sowieso, und schon das allein ist für viele Betriebe viel wert.' },
    { kind: 'p', text: 'Läuft der Ablauf danach automatisch, hängt er an keiner einzelnen Person mehr. Die Regeln stehen in der Automatisierung und in der Anleitung dazu. Eine neue Kollegin muss sie nicht mühsam erfragen.' },
    { kind: 'h2', text: 'Ein guter Zeitpunkt' },
    { kind: 'p', text: 'Wissen Sie schon, dass in den nächsten Jahren jemand ausscheidet? Dann fangen Sie jetzt an. Solange die Person noch da ist, kann sie zeigen, wie es läuft. Danach wird es deutlich schwerer.' },
  ],
  notes: ['Bitten Sie die betreffende Person, bei der Aufnahme in Woche 1 dabei zu sein.'],
  related: [
    { label: 'Ablauf: Interne Wissenssuche mit KI', href: '/ablaeufe/team-wissen-fragen-ki' },
    { label: 'Ablauf: Dokumente automatisch ablegen und benennen', href: '/ablaeufe/dokumente-ablegen-umbenennen' },
    { label: 'Warum ich nach vier Wochen gehe', href: '/wissen/warum-ich-nach-vier-wochen-gehe' },
  ],
};
