import type { Article } from '@/lib/types';
import { PUBLISHED, PUBLISHED_ISO } from './dates';

export const warumIchNachVierWochenGehe: Article = {
  id: 12,
  slug: 'warum-ich-nach-vier-wochen-gehe',
  title: 'Warum ich nach vier Wochen gehe.',
  date: PUBLISHED,
  datePublished: PUBLISHED_ISO,
  read_minutes: 4,
  category: 'Methodik',
  seoDescription:
    'Viele Dienstleister leben davon, dass man sie nicht mehr loswird. Ich übergebe nach vier Wochen Zugänge, Anleitung und Video. Die Betreuung ist freiwillig.',
  lead: 'Viele Dienstleister verdienen ihr Geld damit, dass man sie nicht mehr loswird. Ich halte das für den falschen Weg.',
  body: [
    { kind: 'h2', text: 'Abhängigkeit ist kein Geschäftsmodell' },
    { kind: 'p', text: 'Läuft eine Automatisierung nur, solange ihr Erbauer sie pflegt, haben Sie ein Problem. Spätestens wenn er krank ist oder die Preise erhöht. Deshalb baue ich so, dass jemand anderes es verstehen und übernehmen kann.' },
    { kind: 'h2', text: 'Was zur Übergabe gehört' },
    { kind: 'p', text: 'Alle Zugänge. Eine Anleitung zum Nachlesen, in normaler Sprache. Ein kurzes Video, das zeigt, was zu tun ist, wenn etwas hakt. Und eine Einweisung für die Leute, die täglich damit arbeiten.' },
    { kind: 'q', text: 'Eine gute Automatisierung erkennt man daran, dass man sie nach drei Monaten vergessen hat.' },
    { kind: 'h2', text: 'Und wenn Sie doch Hilfe brauchen?' },
    { kind: 'p', text: 'Dann bin ich da. Die Betreuung ist freiwillig und monatlich kündbar. Viele Betriebe nehmen sich nach dem ersten Ablauf den zweiten vor, und das ist mir lieber als ein Wartungsvertrag, den niemand braucht.' },
  ],
  notes: [],
  related: [
    { label: 'Was meine Garantie genau umfasst', href: '/garantie' },
    { label: 'So arbeite ich als KI-Berater', href: '/ki-beratung' },
    { label: 'Wenn der Mitarbeiter geht, der alles weiß', href: '/wissen/wenn-der-mitarbeiter-geht' },
  ],
};
