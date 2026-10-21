// Angaben zu Marco Gundlach. Quelle: LinkedIn-Profil (Stand Oktober 2026).

import type { NavLink } from './site';

export interface Station {
  period: string;
  role: string;
  org: string;
  text: string;
}

export interface Credential {
  name: string;
  issuer: string;
  year?: string;
}

export const STATIONS: Station[] = [
  {
    period: 'seit 2026',
    role: 'Inhaber und Trainer',
    org: 'Marco Gundlach Consulting',
    text: 'Zweitägiges KI-Praxistraining: Teams im Mittelstand bauen eigene interne Werkzeuge mit KI.',
  },
  {
    period: 'seit 2024',
    role: 'KI-Berater und Automatisierungs-Architekt',
    org: 'selbstständig, Köln',
    text: 'Automatisierungen, die Ergebnisse liefern, statt Software-Lizenzen, die niemand nutzt.',
  },
  {
    period: '2022 bis 2024',
    role: 'Senior Product Owner, Enterprise Digital Projects',
    org: 'selbstständig',
    text: 'Digitalisierungs- und Plattformprojekte internationaler Marken, darunter Hugo Boss und Fressnapf.',
  },
  {
    period: '2019 bis 2022',
    role: 'E-Commerce Anforderungs- und Projektmanager',
    org: 'Aktion Mensch, Bonn',
    text: 'Anforderungen und Projektsteuerung im Digitalbereich, Schnittstelle zwischen Fachabteilungen und Technik.',
  },
  {
    period: '2015 bis 2019',
    role: 'Head of Project Management',
    org: 'Webmatch GmbH, Köln',
    text: 'Leitung des Projektmanagement-Teams einer Digitalagentur für E-Commerce- und Web-Projekte.',
  },
];

export const CREDENTIALS: Credential[] = [
  { name: 'Claude Academy: AI Capabilities and Limitations', issuer: 'Anthropic', year: '2026' },
  { name: 'Claude Academy: AI Fluency, Framework and Foundations', issuer: 'Anthropic', year: '2026' },
  { name: 'Professional Scrum Master I und II', issuer: 'Scrum.org', year: '2023' },
  { name: 'Professional Scrum Product Owner I und II', issuer: 'Scrum.org', year: '2023' },
  { name: 'Google Projektmanagement', issuer: 'Coursera' },
  { name: 'ITIL 4 Foundation', issuer: 'PeopleCert', year: '2020' },
  { name: 'Geprüfter Ausbilder nach AEVO', issuer: 'IHK' },
];

export const ABOUT_PAGE = {
  title: 'Ich bin Marco Gundlach. Der KI-Realist.',
  lead: 'Seit über 14 Jahren leite ich Digitalisierungsprojekte. Heute arbeite ich als KI-Berater, automatisiere Abläufe für Inhaber und sage dabei offen, wo KI hilft und wo nicht.',
  essay: [
    'Viele Jahre habe ich Digitalprojekte geleitet, in einer Agentur, bei Aktion Mensch und als Product Owner für Marken wie Hugo Boss und Fressnapf. Dort ging es um viele Beteiligte, lange Abstimmungen und große Budgets. Ich habe gelernt, wie man Abläufe sauber aufnimmt und so umsetzt, dass sie im Alltag funktionieren.',
    'Ich habe auch gesehen, wie viel Zeit in Projekte fließt, die am Ende niemand nutzt. Folien, Workshops, Konzepte. Für einen Betrieb mit zehn oder zwanzig Leuten passt das nicht. Dort zählt, ob am Freitag weniger Papierkram auf dem Tisch liegt.',
    'Deshalb arbeite ich heute anders. Ein Ablauf, 4 Wochen, ein Festpreis. Sie sprechen die ganze Zeit mit mir, nicht mit einem Team, das Sie nie sehen.',
    'Warum „der KI-Realist“? Ich arbeite jeden Tag mit KI und habe mich bei Anthropic zu ihren Fähigkeiten und Grenzen zertifizieren lassen. Sie kann Texte lesen, sortieren und Entwürfe schreiben. Sie kann aber längst nicht alles, was gerade versprochen wird. Wenn ein Ablauf ohne KI zuverlässiger läuft, bauen wir ihn ohne.',
    'Ich arbeite remote für Betriebe in ganz Deutschland, meistens per Video. Wenn ein Termin vor Ort hilft, komme ich vorbei. Als geprüfter Ausbilder und KI-Trainer erkläre ich Technik so, dass Ihr Team sie danach selbst versteht und bedienen kann.',
  ],
  links: [
    { label: 'So arbeite ich als KI-Berater', href: '/ki-beratung' },
    { label: 'Was meine Garantie genau umfasst', href: '/garantie' },
  ] satisfies NavLink[],
};
