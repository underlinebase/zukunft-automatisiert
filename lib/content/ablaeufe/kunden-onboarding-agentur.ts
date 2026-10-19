import type { Ablauf } from './types';

export const kundenOnboardingAgentur: Ablauf = {
  id: 2008,
  slug: 'kunden-onboarding-agentur',
  branche: 'agenturen',
  themen: ['onboarding', 'dokumente'],
  title: 'Kunden-Onboarding in der Agentur',
  lead: 'Kunden-Onboarding für Agenturen automatisieren: Briefing, Logos und Zugänge über ein Formular, Projekt und Ordner legt der Ablauf selbst an.',
  datePublished: '2026-10-19',
  problem: [
    'Der Vertrag ist unterschrieben, das Kick-off steht im Kalender. Jetzt fehlen das Logo als Vektordatei, die Zugänge zu Website und Werbekonten, die Ansprechpartner und die Rechnungsadresse. Die Projektleitung schreibt eine E-Mail mit der Liste. Der Kunde antwortet auf die Hälfte.',
    'Parallel legt jemand das Projekt im Projekttool an, kopiert die Vorlage, erstellt einen Ordner in Google Drive, legt den Kunden in der Buchhaltung an und lädt ihn in den Slack-Kanal ein. Nichts davon ist schwer. Aber es sind zwanzig Handgriffe, und jeder im Team vergisst einen anderen.',
    'Besonders unangenehm sind Zugangsdaten. Sie kommen per E-Mail, im Chat oder auf einem Zettel im Meeting und liegen danach irgendwo, wo sie nicht hingehören. Spätestens wenn ein Mitarbeiter geht, fragt sich jemand, wer eigentlich worauf Zugriff hat.',
  ],
  heute: [
    'Liste der benötigten Dinge per E-Mail schicken.',
    'Logos, Texte und Zugänge aus mehreren E-Mails zusammensuchen.',
    'Projekt im Projekttool aus einer Vorlage anlegen.',
    'Ordner anlegen und Dateien hineinziehen.',
    'Kunden in der Buchhaltung anlegen.',
    'Nachfragen, was fehlt, oft bis nach dem Kick-off.',
  ],
  danach: [
    'Nach der Unterschrift bekommt der Kunde einen Link zu einem Onboarding-Formular.',
    'Dort lädt er Logos und Unterlagen hoch und trägt Ansprechpartner und Rechnungsdaten ein.',
    'Für Werbekonten und Analytics bekommt er eine kurze Anleitung, wie er Ihrer Agentur Zugriff gibt, ohne ein Passwort zu verschicken.',
    'Der Ablauf legt das Projekt aus Ihrer Vorlage in Asana, ClickUp oder Trello an, dazu den Kundenordner.',
    'Sobald die Rechnungsdaten vollständig sind, legt er den Kunden in Lexware Office oder sevDesk an.',
    'Fehlt etwas, erinnert der Ablauf den Kunden, und die Projektleitung sieht den Stand im Projekt.',
  ],
  mensch:
    'Die Projektleitung prüft, was hereinkommt, und führt das Kick-off. Sie entscheidet, welche Vorlage zum Auftrag passt, und kümmert sich um alles, was im Formular keinen Platz hat. Zugänge prüft ein Mensch, bevor jemand damit arbeitet. Der Ablauf übernimmt das Anlegen und das Nachhaken, die Beziehung zum Kunden bleibt bei Ihnen.',
  werkzeuge: ['n8n', 'Formular auf Ihrer Website oder ein Formulardienst', 'Asana, ClickUp oder Trello', 'Google Drive oder SharePoint', 'Lexware Office oder sevDesk'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 1,
    minutesBefore: 150,
    minutesAfter: 30,
    hourlyRate: 80,
    annahme:
      'Eine Agentur, die im Schnitt einen neuen Kunden pro Woche aufnimmt. Die 150 Minuten umfassen Nachfragen, Zusammensuchen und das Anlegen in allen Programmen. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Passwörter gehören nicht in ein Formular. Wo die Plattformen eigene Freigaben haben, laufen Zugriffe darüber, alles andere über Ihren Passwort-Manager.',
    'Der Ablauf braucht eine Projektvorlage. Läuft jedes Projekt anders, wird erst die Vorlage gebaut, dann der Ablauf.',
    'Größere Kunden mit eigener IT und eigenem Einkauf haben oft feste Vorgaben. Für sie bleibt ein Teil Handarbeit.',
  ],
  faqs: [
    {
      q: 'Wie kommen wir an die Werbekonten, ohne dass Passwörter verschickt werden?',
      a: 'Über die Freigaben der Plattformen. Bei Google Ads verknüpft der Kunde sein Konto mit dem Verwaltungskonto Ihrer Agentur, in Google Analytics fügt er Ihre Adresse mit den nötigen Rechten hinzu, bei Meta gibt er Ihrer Agentur Partnerzugriff. Der Ablauf schickt die passende Anleitung und prüft, soweit die Plattform das zulässt, ob der Zugriff angekommen ist.',
    },
    {
      q: 'Funktioniert das mit unserem Projekttool?',
      a: 'Asana, ClickUp, Trello, Monday und die meisten anderen Programme haben eine Schnittstelle, über die sich Projekte aus Vorlagen anlegen lassen. Welche Anbindung bei Ihnen passt, prüfe ich im ersten Gespräch.',
    },
    {
      q: 'Wirkt ein Formular nicht kühl, gerade am Anfang?',
      a: 'Eher im Gegenteil. Der Kunde sieht auf einer Seite, was gebraucht wird, und muss nicht drei E-Mails durchsuchen. Das persönliche Kick-off bleibt. Es wird nur besser, wenn vorher alles da ist.',
    },
  ],
  related: [
    { label: 'Ablauf: Briefings vollständig einsammeln', href: '/ablaeufe/briefing-einsammeln' },
    { label: 'Ablauf: Statusbericht als fertiger Entwurf', href: '/ablaeufe/statusbericht-entwurf' },
    { label: 'KI-Beratung für kleine Betriebe', href: '/ki-beratung' },
  ],
};
