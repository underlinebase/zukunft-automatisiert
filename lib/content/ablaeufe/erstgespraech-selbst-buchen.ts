import type { Ablauf } from './types';

export const erstgespraechSelbstBuchen: Ablauf = {
  id: 3001,
  slug: 'erstgespraech-selbst-buchen',
  branche: 'coaches',
  themen: ['termine', 'anfragen'],
  title: 'Erstgespräch online buchen lassen',
  lead: 'Interessenten buchen ihr Erstgespräch selbst aus Ihren freien Zeiten und bekommen sofort Videolink und Erinnerung. Ohne E-Mail-Pingpong.',
  datePublished: '2026-10-19',
  problem: [
    'Eine Interessentin schreibt Ihnen am Dienstagabend über LinkedIn. Sie antworten am Mittwoch zwischen zwei Sitzungen und schlagen drei Termine vor. Am Donnerstag kommt die Antwort: Keiner passt, ob es auch nächste Woche ginge. Sie schauen wieder in den Kalender und schlagen neu vor. Bis der Termin steht, sind vier Nachrichten hin- und hergegangen und eine Woche ist vorbei.',
    'Jede einzelne Nachricht dauert nur ein paar Minuten. Teuer wird die Wartezeit. Wer einen Coach sucht, hat oft noch zwei andere angeschrieben. Wer zuerst einen festen Termin anbietet, hat gute Chancen, auch das Gespräch zu führen.',
    'Dazu kommen die kleinen Pannen. Ein Termin, der nie im Kalender gelandet ist. Ein Videolink in der falschen E-Mail. Eine Interessentin, die den Termin vergisst, weil keine Erinnerung kam. Nichts davon ist schlimm. Es kostet nur jedes Mal ein Stück Vertrauen, bevor das erste Wort gesprochen ist.',
  ],
  heute: [
    'Die Anfrage kommt per E-Mail, Instagram oder LinkedIn.',
    'Sie suchen freie Zeiten im Kalender und schlagen zwei oder drei vor.',
    'Oft passt keiner davon, die Abstimmung geht in die zweite Runde.',
    'Sie tragen den Termin ein und erstellen von Hand einen Zoom-Link.',
    'Eine Erinnerung schicken Sie, wenn Sie daran denken.',
  ],
  danach: [
    'Auf Ihrer Website und in jeder Antwort steht ein Buchungslink.',
    'Interessenten sehen nur die Zeiten, die Sie für Erstgespräche freigegeben haben.',
    'Nach der Buchung steht der Termin im Kalender, der Videolink ist schon dabei.',
    'Die Bestätigung geht sofort raus, die Erinnerung am Vortag.',
    'Der neue Kontakt landet mit Name und E-Mail in Ihrer Kundenliste.',
  ],
  mensch:
    'Sie legen fest, wann Erstgespräche überhaupt möglich sind, wie lang sie dauern und wie viel Puffer zwischen zwei Terminen bleibt. Auf Anfragen antworten Sie weiter persönlich, nur eben mit einem Satz und dem Link statt mit einer Liste von Uhrzeiten. Und Sie führen das Gespräch. Das nimmt Ihnen niemand ab.',
  werkzeuge: ['Calendly oder cal.com', 'Google Kalender oder Outlook', 'Zoom oder Google Meet', 'n8n für die Kundenliste'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 5,
    minutesBefore: 15,
    minutesAfter: 2,
    hourlyRate: 100,
    annahme:
      'Eine Coachin mit fünf Anfragen für ein Erstgespräch pro Woche. Heute kostet jede rund 15 Minuten Abstimmung über mehrere Nachrichten. 100 Euro pro Stunde sind ein angenommener Wert.',
  },
  grenzen: [
    'Der Kalender muss stimmen. Stehen private Termine nur auf einem Zettel, bucht jemand genau in Ihren Zahnarzttermin.',
    'Manche Menschen buchen ungern über einen Link und wollen erst schreiben. Für sie bleibt der persönliche Weg offen.',
    'Buchungstools speichern Namen und E-Mail-Adressen. Sie brauchen einen Vertrag zur Auftragsverarbeitung und einen Hinweis in der Datenschutzerklärung.',
    'Ein freier Termin im Kalender heißt nicht, dass Sie Lust auf ein Erstgespräch um 19 Uhr haben. Die Regeln dafür legen Sie einmal fest und passen sie an, wenn es nicht mehr passt.',
  ],
  faqs: [
    {
      q: 'Wirkt ein Buchungslink nicht unpersönlich?',
      a: 'Das hängt davon ab, wie Sie ihn anbieten. Ein Satz wie „Suchen Sie sich gern direkt einen Termin aus“ unter einer persönlichen Antwort wirkt freundlich und schnell. Unpersönlich wird es, wenn auf eine ausführliche Nachricht nur der nackte Link zurückkommt.',
    },
    {
      q: 'Calendly oder cal.com, was ist besser?',
      a: 'Beide erledigen die Aufgabe. Calendly ist verbreiteter und schnell eingerichtet. Bei cal.com lässt sich mehr selbst einstellen, und man kann es auf eigenen Servern betreiben. Ich schaue mir an, mit welchem Kalender und welchem Videotool Sie arbeiten, und empfehle dann eins.',
    },
    {
      q: 'Kann ich Erstgespräche auf bestimmte Tage beschränken?',
      a: 'Ja. Sie geben zum Beispiel nur Dienstag- und Donnerstagnachmittag frei, legen eine Höchstzahl pro Tag fest und einen Mindestvorlauf von 24 Stunden. Der Rest Ihres Kalenders bleibt für Interessenten unsichtbar.',
    },
  ],
  related: [
    { label: 'Vorab-Fragebogen auswerten', href: '/ablaeufe/vorab-fragebogen-auswerten' },
    { label: 'Terminerinnerung mit Ausfallregel', href: '/ablaeufe/termin-erinnerung-ausfallregel' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
  ],
};
