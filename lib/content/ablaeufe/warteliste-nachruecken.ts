import type { Ablauf } from './types';

export const wartelisteNachruecken: Ablauf = {
  id: 3006,
  slug: 'warteliste-nachruecken',
  branche: 'coaches',
  themen: ['termine'],
  title: 'Warteliste: freie Termine füllen',
  lead: 'Sagt jemand ab, bekommen Klienten auf der Warteliste sofort Bescheid. Wer zuerst bucht, bekommt den Termin. Sie müssen niemanden abtelefonieren.',
  datePublished: '2026-10-19',
  problem: [
    'Donnerstag, 8:15 Uhr. Ein Klient sagt den Termin um elf ab, rechtzeitig nach Ihrer Regel, also ohne Ausfallhonorar. Auf Ihrem Zettel stehen drei Leute, die gern früher einen Termin hätten. Sie schreiben der Ersten. Keine Antwort. Um halb zehn schreiben Sie dem Zweiten. Der kann nur nachmittags. Um zehn geben Sie auf. Die Stunde bleibt leer.',
    'Eine leere Stunde bei einem ausgebuchten Kalender ist doppelt ärgerlich. Sie verdienen nichts, und gleichzeitig wartet jemand seit Wochen auf einen Platz. Die Warteliste existiert, aber sie lebt in Ihrem Kopf, auf einem Zettel oder in einer Notiz-App, und sie abzuarbeiten dauert länger als die Vorlaufzeit.',
    'Wer gut gebucht ist, kennt das: Die Warteliste ist der Teil des Geschäfts, um den sich niemand kümmert, weil er nur in Stresssituationen gebraucht wird.',
  ],
  heute: [
    'Wartende Klienten stehen auf einem Zettel oder in einer Notiz.',
    'Nach einer Absage schreiben Sie einen nach dem anderen an.',
    'Bis jemand antwortet, ist der Termin oft vorbei.',
    'Wer schon wie lange wartet, wissen Sie nur ungefähr.',
  ],
  danach: [
    'Interessenten tragen sich über ein kurzes Formular auf die Warteliste ein, mit Wunschzeiten.',
    'Wird ein Termin frei, prüft der Ablauf, wer zu der Uhrzeit kann.',
    'Diese Klienten bekommen gleichzeitig eine Nachricht mit Buchungslink.',
    'Wer zuerst klickt, hat den Termin. Alle anderen sehen, dass er vergeben ist.',
    'Sie bekommen eine kurze Meldung, wer nachgerückt ist.',
  ],
  mensch:
    'Sie entscheiden, wer überhaupt auf die Warteliste darf und ob bestehende Klienten Vorrang vor neuen haben. Bei kurzfristigen Lücken unter zwei Stunden sagen Sie, ob noch jemand benachrichtigt werden soll oder ob Sie die Stunde lieber für sich behalten. Auch eine freie Stunde kann ein Gewinn sein.',
  werkzeuge: ['cal.com oder Calendly', 'Google Kalender', 'Tally', 'n8n', 'E-Mail oder SMS'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 2,
    minutesBefore: 20,
    minutesAfter: 2,
    hourlyRate: 100,
    annahme:
      'Ein Coach mit zwei rechtzeitigen Absagen pro Woche. Wartende anschreiben und abstimmen kostet heute rund 20 Minuten pro Absage. Der Umsatz aus Sitzungen, die sonst leer geblieben wären, ist nicht eingerechnet. 100 Euro pro Stunde sind ein angenommener Wert.',
  },
  grenzen: [
    'Das lohnt sich nur, wenn Ihr Kalender wirklich voll ist und regelmäßig Leute warten. Bei freien Kapazitäten reicht der normale Buchungslink.',
    'Wer gleichzeitig benachrichtigt wird, will auch schnell sein. Wer zu spät klickt, ist enttäuscht. Eine ehrliche Formulierung in der Nachricht hilft.',
    'Die Daten auf der Warteliste werden nach einer festen Frist gelöscht, wenn niemand nachrückt. Das gehört zur Datenschutzerklärung.',
    'Wer mehrere Benachrichtigungen ignoriert, fliegt nicht automatisch von der Liste. Ob Sie nachfragen oder aufräumen, entscheiden Sie beim Blick auf die Liste, etwa einmal im Monat.',
  ],
  faqs: [
    {
      q: 'Warum alle gleichzeitig benachrichtigen statt der Reihe nach?',
      a: 'Weil der Reihe nach zu lange dauert. Wenn jeder eine Stunde Zeit zum Antworten hat, ist ein kurzfristiger Termin vorbei, bevor der Dritte gefragt wurde. Wer lieber eine feste Reihenfolge will, kann das trotzdem haben. Dann bekommt jeder eine kurze Frist.',
    },
    {
      q: 'Kann ich bestehenden Klienten Vorrang geben?',
      a: 'Ja. Die bekommen die Nachricht zum Beispiel 30 Minuten vor allen anderen. Wer dann nicht bucht, gibt den Platz frei.',
    },
    {
      q: 'Funktioniert das auch mit Gruppenterminen?',
      a: 'Ja, sogar einfacher. Bei Workshops mit festen Plätzen rückt bei jeder Absage automatisch der Nächste nach und bekommt eine Bestätigung.',
    },
  ],
  related: [
    { label: 'Terminerinnerung mit Ausfallregel', href: '/ablaeufe/termin-erinnerung-ausfallregel' },
    { label: 'Erstgespräch online buchen lassen', href: '/ablaeufe/erstgespraech-selbst-buchen' },
    { label: 'Excel ist nicht das Problem', href: '/wissen/excel-ist-nicht-das-problem' },
  ],
};
