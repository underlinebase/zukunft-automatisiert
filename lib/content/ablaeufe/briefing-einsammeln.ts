import type { Ablauf } from './types';

export const briefingEinsammeln: Ablauf = {
  id: 2012,
  slug: 'briefing-einsammeln',
  branche: 'agenturen',
  themen: ['onboarding', 'kommunikation', 'dokumente'],
  title: 'Briefings vollständig einsammeln',
  lead: 'Briefings für Agenturen vollständig einsammeln: ein Formular je Projektart, Rückfragen als Entwurf, Aufgabe im Projekttool. Weniger Schleifen danach.',
  datePublished: '2026-10-19',
  problem: [
    'Der Kunde schreibt: „Wir brauchen bis Ende des Monats eine Kampagne für die neue Produktlinie.“ Zielgruppe, Budget, Kanäle, Freigabeweg, Tonalität, vorhandenes Material: Das steht nirgends. Die Projektleitung ruft an, macht Notizen, schickt Fragen hinterher. Ein Teil der Antworten kommt per E-Mail, ein anderer im Telefonat mit jemand ganz anderem.',
    'Fehlende Angaben fallen oft erst auf, wenn das Team schon arbeitet. Dann werden Entwürfe verworfen, weil die Zielgruppe eine andere war oder die Farbe nicht zur Markenrichtlinie passt. Diese Schleifen bezahlt am Ende meistens die Agentur.',
    'Gute Briefings sind kein Glück. Sie entstehen, wenn jemand konsequent dieselben Fragen stellt, auch an einem vollen Tag. Genau das kann ein Ablauf verlässlich.',
  ],
  heute: [
    'Anfrage per E-Mail oder Telefon aufnehmen.',
    'Fragen nachschicken, je nach Erfahrung der Projektleitung.',
    'Antworten aus E-Mails, Notizen und Anhängen zusammensetzen.',
    'Briefing-Dokument schreiben und ins Projekttool legen.',
    'Lücken während der Arbeit nachfragen.',
  ],
  danach: [
    'Der Kunde bekommt einen Link zu einem Briefing-Formular, passend zur Projektart: Website, Kampagne oder Social Media.',
    'Pflichtfelder sorgen für die Grundangaben, Uploads für Material und Markenrichtlinie.',
    'Ein KI-Modell liest die Antworten und markiert Lücken und Widersprüche.',
    'Daraus entsteht ein Entwurf mit Rückfragen, den die Projektleitung prüft und verschickt.',
    'Ist alles beantwortet, legt der Ablauf die Aufgabe mit vollständigem Briefing in Asana, ClickUp oder Trello an.',
  ],
  mensch:
    'Die Projektleitung prüft das Briefing und entscheidet, ob Rückfragen per E-Mail reichen oder ein kurzes Gespräch besser ist. Die Fragen im Formular legen Sie fest, aus Ihrer Erfahrung, welche Angaben später regelmäßig fehlen. Ob ein Auftrag angenommen wird und zu welchen Bedingungen, bleibt ohnehin Ihre Sache.',
  ki: 'Beim Lesen der Antworten. Ein Formular prüft, ob ein Feld ausgefüllt ist. Ob „junge Familien“ als Zielgruppe und ein sehr kleines Budget zu einer bundesweiten Kampagne passen, prüft es nicht. Ein KI-Modell erkennt solche Widersprüche und vage Angaben und schlägt konkrete Rückfragen vor. Verschickt werden sie erst, wenn die Projektleitung sie freigegeben hat.',
  werkzeuge: ['n8n', 'Formular auf Ihrer Website oder ein Formulardienst', 'Claude oder ein OpenAI-Modell', 'Asana, ClickUp oder Trello'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 4,
    minutesBefore: 60,
    minutesAfter: 20,
    hourlyRate: 80,
    annahme:
      'Eine Agentur mit etwa vier neuen Projekten oder Kampagnen pro Woche. Gerechnet sind Nachfragen, Zusammensetzen und Aufschreiben, nicht die Schleifen durch fehlende Angaben. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Ein Formular ersetzt bei großen oder unklaren Projekten kein Gespräch. Es macht das Gespräch kürzer, weil die Grundlagen schon da sind.',
    'Manche Kunden füllen keine Formulare aus. Dann trägt die Projektleitung das Telefonat ins Formular ein, und der Rest läuft gleich.',
    'Die KI kennt Ihre Kunden nicht. Ihre Rückfragen sind Vorschläge, keine Prüfung.',
  ],
  faqs: [
    {
      q: 'Wie lang darf so ein Formular sein?',
      a: 'So kurz wie möglich. Lieber zehn Fragen, die wirklich gebraucht werden, als dreißig, die der Kunde überspringt. Den Rest holt die Rückfrage, und die ist dann gezielt.',
    },
    {
      q: 'Kann der Kunde sein Briefing auch als Dokument schicken?',
      a: 'Ja. Er lädt es im Formular hoch, und das KI-Modell gleicht es mit Ihren Fragen ab. Was im Dokument fehlt, landet im Entwurf für die Rückfrage.',
    },
    {
      q: 'Gehen Kundendaten dabei an eine KI?',
      a: 'Die Briefing-Antworten ja, soweit Sie das freigeben. Ich setze nur Dienste ein, die keine Daten zum Training verwenden. Vertrauliches wie Umsatzzahlen kann der Kunde in Felder schreiben, die nicht an die KI gehen.',
    },
  ],
  related: [
    { label: 'Ablauf: Kunden-Onboarding in der Agentur', href: '/ablaeufe/kunden-onboarding-agentur' },
    { label: 'Ablauf: Kundenfreigaben einholen', href: '/ablaeufe/freigaben-einholen' },
    { label: 'Was macht ein KI-Berater?', href: '/wissen/was-macht-ein-ki-berater' },
  ],
};
