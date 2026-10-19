import type { Ablauf } from './types';

export const freigabenEinholen: Ablauf = {
  id: 2013,
  slug: 'freigaben-einholen',
  branche: 'agenturen',
  themen: ['kommunikation', 'nachfassen'],
  title: 'Kundenfreigaben einholen',
  lead: 'Kundenfreigaben ohne E-Mail-Pingpong: Entwurf mit Link, Freigabe oder Änderungswunsch per Klick, Erinnerung nach zwei Tagen, alles im Projekt festgehalten.',
  datePublished: '2026-10-19',
  problem: [
    'Der Entwurf für die Startseite ist fertig. Die Projektleitung schickt ihn per E-Mail an den Kunden. Drei Tage nichts. Dann eine Antwort an die falsche Kollegin, mit Änderungen von zwei Personen beim Kunden, die sich widersprechen. Ein Teil steht in der E-Mail, ein Teil in einem PDF mit Kommentaren.',
    'Währenddessen wartet das Team. Der Zeitplan rutscht, und am Ende ist unklar, welche Fassung eigentlich freigegeben wurde. Sagt der Kunde später, das habe er so nie gesehen, sucht jemand im Postfach nach dem Nachweis.',
    'Freigaben sind ein kleiner Schritt mit großer Wirkung auf den Zeitplan. Sie brauchen einen festen Weg, eine klare Frist und eine Erinnerung, die nicht vom Gedächtnis der Projektleitung abhängt.',
  ],
  heute: [
    'Entwurf exportieren und per E-Mail verschicken.',
    'Auf Antwort warten und irgendwann nachhaken.',
    'Änderungswünsche aus E-Mails und PDFs zusammentragen.',
    'Status im Projekttool von Hand ändern.',
    'Im Zweifel im Postfach nach der Freigabe suchen.',
  ],
  danach: [
    'Setzt das Team eine Aufgabe auf „Zur Freigabe“, geht automatisch eine E-Mail an den Kunden.',
    'Darin stehen der Link zum Entwurf, eine Frist und zwei Knöpfe: freigeben oder Änderungen wünschen.',
    'Änderungswünsche trägt der Kunde in ein kurzes Formular ein, sie landen als Kommentar an der Aufgabe.',
    'Kommt nach zwei Werktagen keine Reaktion, folgt eine freundliche Erinnerung.',
    'Jede Freigabe wird mit Datum, Name und Fassung im Projekt festgehalten, der Status ändert sich von selbst.',
  ],
  mensch:
    'Ihr Team entscheidet, wann ein Entwurf reif für die Freigabe ist, und bespricht größere Änderungswünsche persönlich. Wer beim Kunden freigeben darf, legen Sie beim Onboarding fest. Widersprechen sich zwei Ansprechpartner, greift die Projektleitung zum Telefon. Das kann kein Ablauf.',
  werkzeuge: ['n8n', 'Asana, ClickUp oder Trello', 'Gmail oder Outlook', 'Vorschau-Links aus Google Drive, Figma oder Ihrer Testumgebung'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 15,
    minutesBefore: 12,
    minutesAfter: 2,
    hourlyRate: 80,
    annahme:
      'Eine Agentur mit etwa 15 Freigaben pro Woche über alle Projekte. Gerechnet sind Verschicken, Nachhaken, Zusammentragen und Status pflegen. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Ein Klick auf „Freigeben“ hält die Zustimmung fest. Ob er als Abnahme im Sinne Ihres Vertrags gilt, regelt Ihr Vertrag. Das sollten Sie dort klar formulieren.',
    'Kunden, die lieber telefonieren, umgehen jedes System. Die Projektleitung trägt die Freigabe dann selbst ein.',
    'Für Freigaben mit vielen Beteiligten beim Kunden, etwa Rechtsabteilung und Marketing, braucht es eine Reihenfolge. Die lässt sich abbilden, macht den Ablauf aber aufwendiger.',
  ],
  faqs: [
    {
      q: 'Warum nicht einfach ein Freigabe-Tool kaufen?',
      a: 'Kann sinnvoll sein, wenn Sie sehr viel Grafik abstimmen. Viele Agenturen wollen aber kein weiteres Programm, in das sich Kunden einloggen müssen. Dieser Ablauf arbeitet mit E-Mail und Ihrem Projekttool, der Kunde braucht keinen Zugang.',
    },
    {
      q: 'Was, wenn der Kunde direkt auf die E-Mail antwortet?',
      a: 'Dann landet die Antwort bei der Projektleitung wie bisher. Auf Wunsch liest der Ablauf solche Antworten mit und hängt sie an die Aufgabe, damit nichts im Postfach verschwindet.',
    },
    {
      q: 'Lässt sich die Erinnerung abschalten?',
      a: 'Ja, je Kunde oder je Aufgabe. Manche Kunden brauchen keine Erinnerung, andere zwei. Das stellen Sie ein, nicht ich.',
    },
    {
      q: 'Funktioniert das auch für Texte und Social-Media-Beiträge?',
      a: 'Ja. Dem Ablauf ist es egal, ob hinter dem Link ein Layout, ein Textdokument oder ein Redaktionsplan steckt. Bei Social-Media-Beiträgen lohnt sich oft eine Sammelfreigabe: alle Beiträge der nächsten zwei Wochen in einer E-Mail, jeder mit eigenem Knopf.',
    },
  ],
  related: [
    { label: 'Ablauf: Statusbericht als fertiger Entwurf', href: '/ablaeufe/statusbericht-entwurf' },
    { label: 'Ablauf: Briefings vollständig einsammeln', href: '/ablaeufe/briefing-einsammeln' },
    { label: 'Wann sich Automatisierung lohnt', href: '/wissen/wann-sich-automatisierung-lohnt' },
  ],
};
