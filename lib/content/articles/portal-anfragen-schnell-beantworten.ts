import type { Article } from '@/lib/types';
import { PUBLISHED, PUBLISHED_ISO } from './dates';

export const portalAnfragenSchnellBeantworten: Article = {
  id: 7,
  slug: 'portal-anfragen-schnell-beantworten',
  title: 'Portal-Anfragen: Warum die erste Stunde zählt.',
  date: PUBLISHED,
  datePublished: PUBLISHED_ISO,
  read_minutes: 4,
  category: 'Makler',
  lead: 'Wer auf einem Immobilienportal anfragt, fragt selten nur bei Ihnen an. Wer zuerst eine brauchbare Antwort schickt, hat einen Vorsprung.',
  body: [
    { kind: 'h2', text: 'Was Interessenten erwarten' },
    { kind: 'p', text: 'Eine Bestätigung, dass die Anfrage angekommen ist, und das Exposé. Vielleicht noch einen Hinweis, wie es weitergeht. Mehr erwartet in diesem Moment kaum jemand. Trotzdem bleiben viele Anfragen bis zum Abend liegen, weil tagsüber Besichtigungen und Telefonate Vorrang haben.' },
    { kind: 'h2', text: 'Was sich automatisch erledigen lässt' },
    { kind: 'p', text: 'Die Antwort auf eine Portal-Anfrage ist zu großen Teilen immer gleich: Name, Objekt, Exposé, nächster Schritt. Das kann sofort rausgehen, persönlich formuliert und mit Ihrem Namen darunter. Wer es ernst meint, beantwortet gleich ein paar Fragen oder wählt einen Besichtigungstermin.' },
    { kind: 'p', text: 'Was nicht automatisch passieren sollte: Zusagen, Preisgespräche, Absagen an Interessenten mit Rückfragen. Da sind Sie gefragt.' },
    { kind: 'q', text: 'Eine schnelle, freundliche Antwort wirkt persönlicher als eine perfekte, die erst am nächsten Tag kommt.' },
    { kind: 'h2', text: 'Woran Sie merken, ob es funktioniert' },
    { kind: 'p', text: 'Schauen Sie nach ein paar Wochen nach, wie viele Interessenten auf die erste Antwort reagiert haben und wie viele davon zur Besichtigung kamen. Steigt diese Zahl und werden Ihre Abende ruhiger, läuft es.' },
  ],
  notes: [
    'Portal-Anfragen kommen meist per E-Mail an und lassen sich zuverlässig auslesen.',
    'Antwortvorlagen geben Sie selbst frei, bevor sie aktiv werden.',
  ],
  related: [
    { label: 'Ablauf: Portal-Anfragen sofort beantworten', href: '/ablaeufe/portal-anfragen-sofort-beantworten' },
    { label: 'Ablauf: Besichtigungstermine online buchen lassen', href: '/ablaeufe/besichtigungstermine-selbst-buchen' },
    { label: 'Ablauf: Interessenten vorqualifizieren', href: '/ablaeufe/interessenten-vorqualifizieren' },
  ],
};
