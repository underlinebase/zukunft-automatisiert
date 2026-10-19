import type { Ablauf } from './types';

export const selbstauskunftUnterlagenEinsammeln: Ablauf = {
  id: 1011,
  slug: 'selbstauskunft-unterlagen-einsammeln',
  branche: 'immobilienmakler',
  themen: ['dokumente', 'onboarding'],
  title: 'Selbstauskunft digital einsammeln',
  seoTitle: 'Selbstauskunft und Unterlagen digital einsammeln',
  lead: 'Mietinteressenten und Käufer schicken Selbstauskunft und Nachweise über ein Formular. Fehlt etwas, wird freundlich nachgefragt. Gelöscht wird nach Frist.',
  datePublished: '2026-10-19',
  problem: [
    'Montag kommt die Selbstauskunft als Foto, schief, die zweite Seite fehlt. Dienstag zwei Gehaltsabrechnungen, aber nicht die letzten drei. Mittwoch fragt der Interessent, ob die Bonitätsauskunft auch älter sein darf. Am Freitag will der Eigentümer wissen, wer die Wohnung bekommt.',
    'Unterlagen einsammeln ist mühsam, weil sie über alle Kanäle eintrudeln und weil jede Lücke eine eigene Mail braucht. Dazu kommt ein ungutes Gefühl: Gehaltsabrechnungen fremder Leute liegen im Postfach und im Download-Ordner. Wer räumt die eigentlich wieder weg, wenn die Wohnung vergeben ist?',
    'Beim Verkauf ist es ähnlich, nur mit anderen Papieren. Vom Käufer brauchen Sie die Finanzierungsbestätigung und den Ausweis für die Identifizierung nach Geldwäschegesetz, vom Eigentümer Grundbuchauszug, Energieausweis und bei Wohnungen die Teilungserklärung.',
  ],
  heute: [
    'Sie schicken eine Selbstauskunft als PDF und eine Liste der nötigen Nachweise.',
    'Unterlagen kommen verteilt über Mail, WhatsApp und Papier zurück.',
    'Jemand prüft von Hand, was fehlt, und schreibt hinterher.',
    'Dateien liegen im Postfach und im Download-Ordner, gelöscht wird selten.',
  ],
  danach: [
    'Der Interessent bekommt einen Link zu einem Formular mit Upload für die nötigen Nachweise.',
    'Pflichtfelder und eine Checkliste zeigen sofort, was noch fehlt.',
    'Fehlt nach drei Tagen etwas, geht eine freundliche Erinnerung raus, höchstens zweimal.',
    'Vollständige Unterlagen landen gesammelt am Kontakt in Ihrer Maklersoftware.',
    'Kommt kein Vertrag zustande, werden die Unterlagen nach der festgelegten Frist gelöscht.',
  ],
  mensch:
    'Sie lesen die Unterlagen und wählen zusammen mit dem Eigentümer aus. Das Formular prüft nur, ob etwas da ist, nicht, ob es stimmt. Eine gefälschte Gehaltsabrechnung erkennt der Ablauf nicht. Welche Unterlagen Sie in welchem Schritt verlangen, legen Sie fest, und Sie lösen den Ablauf für jeden Interessenten selbst aus.',
  werkzeuge: ['n8n', 'Formular mit Upload auf Servern in der EU', 'onOffice, FLOWFACT oder Propstack (je nach Schnittstelle)', 'Gmail oder Outlook'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 6,
    minutesBefore: 20,
    minutesAfter: 4,
    hourlyRate: 90,
    annahme:
      '6 Interessenten pro Woche, von denen Sie Unterlagen brauchen. Bisher 20 Minuten für Anfordern, Prüfen und Nachfordern, danach 4 Minuten für den Blick auf das vollständige Paket.',
  },
  grenzen: [
    'Bei Mietwohnungen empfehlen die Datenschutzbehörden, Nachweise wie Gehaltsabrechnungen erst kurz vor dem Vertrag zu verlangen. Deshalb startet der Ablauf erst, wenn Sie ihn für einen bestimmten Interessenten auslösen.',
    'Gehaltsabrechnungen und Ausweiskopien sind sensible Daten. Formular und Ablage gehören auf Server in der EU, mit Vertrag zur Auftragsverarbeitung.',
    'Die Identifizierung nach Geldwäschegesetz bleibt Ihre Pflicht. Der Ablauf sammelt die Unterlagen ein, die Prüfung machen Sie.',
    'Wie lange Sie Unterlagen aufbewahren dürfen oder müssen, klären Sie mit Ihrem Datenschutzberater. Der Ablauf setzt die Frist um, die Sie festlegen.',
  ],
  faqs: [
    {
      q: 'Welche Unterlagen brauche ich von Mietinteressenten?',
      a: 'Üblich sind Selbstauskunft, Einkommensnachweise der letzten Monate, oft eine Bonitätsauskunft und eine Bestätigung des bisherigen Vermieters. Was Sie davon wann verlangen, sollte zum Stand passen: Nachweise erst, wenn jemand die Wohnung wirklich mieten will.',
    },
    {
      q: 'Darf ich Selbstauskünfte per Mail einsammeln?',
      a: 'Unverschlüsselte Mails mit Gehaltsabrechnungen sind keine gute Idee. Ein Formular mit Upload auf einem Server in der EU ist sicherer und lässt sich nach Frist sauber löschen.',
    },
    {
      q: 'Wer erinnert, wenn Unterlagen fehlen?',
      a: 'Der Ablauf, freundlich und mit genauer Liste, was noch fehlt. Nach zwei Erinnerungen hört er auf und meldet Ihnen den Fall.',
    },
    {
      q: 'Geht das auch für Kaufinteressenten?',
      a: 'Ja, mit anderen Feldern. Statt Gehaltsabrechnungen fragt das Formular dann die Finanzierungsbestätigung oder einen Nachweis über das Eigenkapital ab, dazu die Ausweisdaten für die Identifizierung.',
    },
  ],
  related: [
    { label: 'Interessenten vorqualifizieren', href: '/ablaeufe/interessenten-vorqualifizieren' },
    { label: 'Nachfassen nach der Besichtigung', href: '/ablaeufe/nachfassen-nach-besichtigung' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
  ],
};
