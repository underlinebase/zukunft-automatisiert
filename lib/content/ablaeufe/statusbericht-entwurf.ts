import type { Ablauf } from './types';

export const statusberichtEntwurf: Ablauf = {
  id: 2009,
  slug: 'statusbericht-entwurf',
  branche: 'agenturen',
  themen: ['reporting', 'kommunikation'],
  title: 'Statusbericht als fertiger Entwurf',
  seoTitle: 'Statusberichte automatisieren',
  lead: 'Statusberichte für Kunden automatisieren: Der Entwurf entsteht aus Projekttool und Zahlen. Die Projektleitung ergänzt ein paar Sätze und schickt ab.',
  datePublished: '2026-10-19',
  problem: [
    'Freitag, 16 Uhr. Fünf Kunden erwarten ihr Update. Die Projektleitung öffnet das Projekttool, klickt sich durch die erledigten Aufgaben der Woche, schaut nach, was hängt, holt ein paar Zahlen aus den Werbekonten und schreibt daraus eine E-Mail. Dann kommt der nächste Kunde.',
    'Jeder Bericht dauert eine gute halbe Stunde, und keiner ist schwer. Trotzdem sind es zwei bis drei Stunden am Ende der Woche, wenn die Konzentration ohnehin nachlässt. Manche Berichte werden deshalb kürzer, manche kommen erst am Montag.',
    'Kunden merken das. Ein regelmäßiger, klarer Bericht schafft Vertrauen, ein unregelmäßiger kostet es. Der Inhalt steckt längst in Ihren Systemen. Er muss nur jede Woche jemand zusammenschreiben.',
  ],
  heute: [
    'Erledigte und offene Aufgaben im Projekttool durchsehen.',
    'Zahlen aus Werbekonten oder Analytics holen.',
    'Bericht schreiben und formatieren.',
    'Offene Fragen an den Kunden sammeln.',
    'E-Mail verschicken und Bericht ablegen.',
  ],
  danach: [
    'Am Freitagmittag liest der Ablauf je Kunde die Aufgaben der Woche aus Asana, ClickUp oder Trello.',
    'Er holt die Kennzahlen, die Sie für diesen Kunden festgelegt haben.',
    'Daraus entsteht ein Entwurf: was erledigt ist, was als Nächstes kommt, wo der Kunde etwas liefern muss.',
    'Der Entwurf liegt als E-Mail-Entwurf oder als Kommentar im Projekt bereit.',
    'Die Projektleitung liest, ergänzt ein paar Sätze und schickt ab.',
    'Der Bericht wird im Kundenordner abgelegt.',
  ],
  mensch:
    'Die Projektleitung bleibt Absenderin. Sie liest jeden Entwurf, streicht, was der Kunde nicht wissen muss, und schreibt die Sätze, die nur ein Mensch schreiben kann: warum sich etwas verzögert und was sie empfiehlt. Kein Bericht geht ohne ihre Freigabe raus.',
  ki: 'Beim Formulieren. Aus „Landingpage V2, Feedback eingearbeitet, Status erledigt“ macht ein KI-Modell einen lesbaren Satz für den Kunden. Es fasst auch zusammen, was hängt und warum, soweit das in den Kommentaren steht. Erfinden darf es nichts: Die Anweisung verbietet Aussagen, die nicht aus den Daten kommen, und die Projektleitung prüft jeden Entwurf.',
  werkzeuge: ['n8n', 'Asana, ClickUp oder Trello', 'Google Ads, Meta und GA4 über die offiziellen Schnittstellen', 'Claude oder ein OpenAI-Modell', 'Gmail oder Outlook'],
  nutzen: 'gross',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 8,
    minutesBefore: 32,
    minutesAfter: 3,
    hourlyRate: 80,
    annahme:
      'Eine Agentur mit acht Statusberichten pro Woche. Die drei Minuten danach sind Lesen, Ergänzen und Abschicken. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Der Bericht ist nur so gut wie die Pflege im Projekttool. Wer Aufgaben nicht abhakt, bekommt einen Bericht, in dem nichts passiert ist.',
    'Eine KI kann bei Formulierungen danebengreifen. Deshalb gibt es keinen automatischen Versand.',
    'Für Kunden, die einen ausführlichen Monatsbericht mit Analyse wollen, ist der Wochenbericht kein Ersatz.',
  ],
  faqs: [
    {
      q: 'Merken Kunden, dass der Bericht automatisch entsteht?',
      a: 'Sie merken vor allem, dass er pünktlich kommt. Den Ton stimmen wir an echten Berichten Ihrer Agentur ab, und die Projektleitung ergänzt jede Woche eigene Sätze. Verstecken müssen Sie nichts. Viele Kunden finden es gut, wenn die Zeit ins Projekt geht statt ins Berichteschreiben.',
    },
    {
      q: 'Was passiert mit internen Kommentaren im Projekttool?',
      a: 'Die lassen sich ausschließen, etwa über ein Schlagwort oder einen eigenen Bereich. Was nicht für den Kunden gedacht ist, kommt nicht in den Entwurf. Die Freigabe durch die Projektleitung ist die zweite Sicherung.',
    },
    {
      q: 'Brauchen wir dafür ein Reporting-Tool?',
      a: 'Nein. Der Ablauf liest Aufgaben und Zahlen direkt über die Schnittstellen. Wer schon Dashboards hat, kann den Link in den Bericht setzen.',
    },
  ],
  related: [
    { label: 'Ablauf: Monatsreport aus den Werbekonten', href: '/ablaeufe/monatsreport-werbekonten' },
    { label: 'Ablauf: Kundenfreigaben einholen', href: '/ablaeufe/freigaben-einholen' },
    { label: 'ChatGPT im Betrieb', href: '/wissen/chatgpt-im-betrieb' },
  ],
};
