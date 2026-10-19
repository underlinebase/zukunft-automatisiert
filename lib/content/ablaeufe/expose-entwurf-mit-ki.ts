import type { Ablauf } from './types';

export const exposeEntwurfMitKi: Ablauf = {
  id: 1012,
  slug: 'expose-entwurf-mit-ki',
  branche: 'immobilienmakler',
  themen: ['dokumente'],
  title: 'Exposé-Entwurf mit KI',
  seoTitle: 'Exposé mit KI schreiben: Entwurf aus Objektdaten',
  lead: 'Aus Objektdaten, Notizen und Ihrer Besichtigung entsteht mit KI ein Exposé-Entwurf in Ihrem Stil. Sie prüfen jede Angabe, bevor es online geht.',
  datePublished: '2026-10-19',
  problem: [
    'Der Termin mit dem Eigentümer war gut. Sie haben 60 Fotos, einen Grundriss, den Energieausweis und eine Seite Notizen. Jetzt fehlt nur noch der Text. Der fehlt seit drei Tagen.',
    'Ein gutes Exposé zu schreiben ist Handwerk. Lage, Grundriss, Zustand und das Besondere am Objekt, in einer Sprache, die weder übertreibt noch langweilt. Wer zwei, drei Objekte im Monat neu aufnimmt, sitzt jedes Mal eine Stunde oder länger vor einer leeren Seite oder baut aus einem alten Exposé etwas Neues zusammen, in dem dann noch der Kamin vom letzten Haus steht.',
    'Genau hier helfen Sprachmodelle wirklich. Nicht beim Erfinden, sondern beim ersten Entwurf aus Fakten, die schon da sind. Den Feinschliff und die Verantwortung für jede Angabe behalten Sie.',
  ],
  heute: [
    'Objektdaten werden in die Maklersoftware eingetragen.',
    'Notizen von der Begehung liegen im Block oder im Handy.',
    'Der Text entsteht neu oder wird aus einem alten Exposé kopiert.',
    'Pflichtangaben aus dem Energieausweis werden von Hand übertragen.',
    'Korrekturlesen passiert, wenn überhaupt, am Abend.',
  ],
  danach: [
    'Objektdaten kommen aus Ihrer Maklersoftware, Notizen als Text oder Sprachnachricht.',
    'Ein Sprachmodell schreibt daraus einen Entwurf für Objektbeschreibung, Ausstattung und Lage.',
    'Als Vorbild dienen drei, vier Ihrer besten bisherigen Exposés, damit der Ton passt.',
    'Angaben, die nicht aus den Daten stammen, markiert der Entwurf als offen.',
    'Der Entwurf landet im Objekt Ihrer Maklersoftware oder als Dokument zum Bearbeiten.',
  ],
  mensch:
    'Sie lesen jeden Satz gegen. Stimmt die Wohnfläche, ist der Keller wirklich trocken, ist die Lage ruhig oder nur nachts ruhig? Für die Angaben im Exposé stehen Sie gerade, nicht die KI. Fotos auswählen, den Grundriss prüfen und den Text mit dem Eigentümer abstimmen bleibt bei Ihnen.',
  ki: 'Hier ist KI der Kern des Ablaufs. Ein Sprachmodell wie Claude formuliert aus Stichpunkten zusammenhängende Texte, und zwar in Ihrem Ton, wenn es gute Beispiele bekommt. Ich gebe ihm feste Regeln mit: nur Angaben aus den Daten verwenden, keine Superlative, nichts über die Nachbarschaft erfinden. Trotzdem schleichen sich Fehler ein. Deshalb ist der Ablauf so gebaut, dass nichts ohne Ihre Prüfung veröffentlicht wird.',
  werkzeuge: ['n8n', 'Claude oder OpenAI-Modell', 'onOffice, FLOWFACT oder Propstack (je nach Schnittstelle)', 'Google Docs oder Word für den Entwurf'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 1,
    minutesBefore: 90,
    minutesAfter: 30,
    hourlyRate: 90,
    annahme:
      'Ein neues Objekt pro Woche. Bisher 90 Minuten für den Exposé-Text, danach 30 Minuten zum Prüfen und Feinschliff. Fotos und Grundriss sind nicht eingerechnet.',
  },
  grenzen: [
    'Pflichtangaben aus dem Energieausweis gehören in jede Immobilienanzeige. Der Ablauf übernimmt sie aus den Daten, Sie prüfen, ob sie vollständig sind.',
    'Ein Sprachmodell kann Fakten falsch zusammensetzen oder etwas Plausibles dazudichten. Deshalb gibt es keine Veröffentlichung ohne Ihre Freigabe.',
    'Objektdaten gehen an einen KI-Dienst. Ich setze nur Dienste ein, die die Daten nicht zum Training verwenden, und lasse Namen von Eigentümern und Mietern weg.',
    'Ob der Entwurf direkt ins Objekt Ihrer Maklersoftware geschrieben werden kann, hängt von deren Schnittstelle ab.',
  ],
  faqs: [
    {
      q: 'Kann ChatGPT ein Exposé schreiben?',
      a: 'Einen brauchbaren Entwurf, wenn es gute Daten bekommt. ChatGPT oder Claude im Browser reichen für den Anfang. Der Ablauf hier erspart das Kopieren: Er holt die Daten aus Ihrer Maklersoftware und legt den Entwurf dort wieder ab. Prüfen müssen Sie in beiden Fällen.',
    },
    {
      q: 'Klingen KI-Exposés nicht alle gleich?',
      a: 'Ohne Vorbild ja, dann liest man viel „lichtdurchflutet“ und „Wohlfühloase“. Mit Ihren eigenen Exposés als Beispiel und einer Liste verbotener Wörter kommt der Entwurf deutlich näher an Ihren Stil.',
    },
    {
      q: 'Bearbeitet der Ablauf auch die Fotos?',
      a: 'Nein. Er schreibt Text. Fotos wählen und bearbeiten Sie wie bisher.',
    },
  ],
  related: [
    { label: 'Eigentümer-Reporting automatisch', href: '/ablaeufe/eigentuemer-reporting-automatisch' },
    { label: 'Portal-Anfragen sofort beantworten', href: '/ablaeufe/portal-anfragen-sofort-beantworten' },
    { label: 'Was macht ein KI-Berater?', href: '/wissen/was-macht-ein-ki-berater' },
  ],
};
