import type { Ablauf } from './types';

export const wochenberichtKennzahlen: Ablauf = {
  id: 3014,
  slug: 'wochenbericht-kennzahlen',
  branche: 'alle',
  themen: ['reporting'],
  title: 'Wochenbericht mit Kennzahlen',
  seoTitle: 'Kennzahlen-Wochenbericht per Mail',
  lead: 'Jeden Montag um 7 Uhr kommt eine E-Mail mit Ihren wichtigsten Zahlen: Umsatz, offene Rechnungen, neue Anfragen, Termine. Ohne Login in vier Programme.',
  datePublished: '2026-10-19',
  problem: [
    'Wie lief die letzte Woche? Die ehrliche Antwort vieler Inhaber: gefühlt gut. Wie viele Anfragen reinkamen, wie viele Angebote noch offen sind und welche Rechnungen seit vier Wochen nicht bezahlt wurden, erfahren sie erst, wenn sie in vier Programmen nachsehen. Oder wenn die BWA von der Steuerkanzlei kommt, sechs Wochen später.',
    'Manche bauen sich eine Excel-Tabelle und tragen sonntagabends die Zahlen ein. Das hält drei Wochen. Dann kommt eine volle Woche, der Sonntag fällt aus, und die Tabelle ist veraltet. Ab da schaut niemand mehr rein.',
    'Dabei geht es nicht um große Auswertungen. Es geht um fünf, sechs Zahlen, die Ihnen am Montagmorgen sagen, ob Sie sich um Akquise kümmern müssen, ob jemand gemahnt werden sollte oder ob die Woche schon jetzt zu voll ist.',
  ],
  heute: [
    'Umsatz und offene Rechnungen stehen im Rechnungsprogramm.',
    'Anfragen und Angebote stehen im CRM, im Postfach oder in einer Tabelle.',
    'Termine stehen im Kalender.',
    'Ein Überblick entsteht nur, wenn Sie sich durch alle Programme klicken.',
    'Eine Tabelle mit Wochenzahlen gibt es, aber sie ist nicht aktuell.',
  ],
  danach: [
    'Jeden Montag um 7 Uhr holt der Ablauf die Zahlen aus Rechnungsprogramm, CRM und Kalender.',
    'Er rechnet sie zusammen und vergleicht mit der Vorwoche und dem Schnitt der letzten Wochen.',
    'Sie bekommen eine kurze E-Mail: sechs Zahlen, jeweils mit Pfeil nach oben oder unten.',
    'Darunter stehen überfällige Rechnungen mit Namen und Betrag.',
    'Die Werte werden in einer Tabelle gesammelt, damit Sie auch über Monate vergleichen können.',
  ],
  mensch:
    'Sie entscheiden, welche Zahlen Sie wirklich sehen wollen. Weniger ist hier mehr. Sie lesen die E-Mail und ziehen daraus Schlüsse: nachfassen, mahnen, Akquise machen oder einfach zufrieden sein. Der Bericht sagt Ihnen, was passiert ist. Was zu tun ist, entscheiden Sie.',
  werkzeuge: ['Lexware Office oder sevDesk', 'HubSpot, Pipedrive oder eine Kundentabelle', 'Google Kalender oder Outlook', 'n8n', 'Google Sheets oder Excel'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 1,
    minutesBefore: 60,
    minutesAfter: 5,
    hourlyRate: 60,
    annahme:
      'Ein Inhaber, der einmal pro Woche seine Zahlen aus mehreren Programmen zusammensucht. Das kostet heute rund eine Stunde, danach bleiben fünf Minuten zum Lesen der E-Mail. 60 Euro pro Stunde sind ein angenommener Wert für eine Arbeitsstunde im Betrieb.',
  },
  grenzen: [
    'Die Zahlen sind so gut wie die Daten. Werden Anfragen nicht im CRM erfasst, zeigt der Bericht null Anfragen.',
    'Nicht jedes Programm hat eine Schnittstelle. Branchensoftware, die keine Daten herausgibt, bleibt außen vor oder liefert einen Export, den jemand ablegt.',
    'Ein Wochenbericht ersetzt keine Buchhaltung. Umsatz im Bericht heißt geschriebene Rechnungen, nicht verbuchter Erlös.',
    'Umsatzzahlen in einer E-Mail sind manchen Inhabern unangenehm. Dann landet der Bericht in einem geschützten Ordner, und per E-Mail kommt nur der Hinweis, dass er da ist.',
  ],
  faqs: [
    {
      q: 'Welche Kennzahlen sollten in den Wochenbericht?',
      a: 'Das hängt vom Betrieb ab. Ein guter Anfang sind neue Anfragen, offene Angebote, geschriebene Rechnungen, überfällige Beträge und die Auslastung der kommenden Woche. Wenn Sie eine Zahl drei Wochen lang ignorieren, fliegt sie raus.',
    },
    {
      q: 'Wäre ein Dashboard nicht besser?',
      a: 'Kann man bauen, wird aber selten geöffnet. Eine E-Mail kommt zu Ihnen, ein Dashboard müssen Sie aufrufen. Ich fange fast immer mit der E-Mail an.',
    },
    {
      q: 'Steckt da KI drin?',
      a: 'Nein. Zahlen holen, rechnen und vergleichen sind feste Regeln. Eine KI würde hier nur Fehler einbauen, die man schwer findet.',
    },
  ],
  related: [
    { label: 'Rechnungseingang automatisieren', href: '/ablaeufe/rechnungseingang-automatisch' },
    { label: 'Kontaktformular direkt ins CRM', href: '/ablaeufe/kontaktformular-ins-crm' },
    { label: 'Excel ist nicht das Problem', href: '/wissen/excel-ist-nicht-das-problem' },
  ],
};
