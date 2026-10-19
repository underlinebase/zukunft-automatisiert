import type { Ablauf } from './types';

export const interessentenVorqualifizieren: Ablauf = {
  id: 1009,
  slug: 'interessenten-vorqualifizieren',
  branche: 'immobilienmakler',
  themen: ['anfragen'],
  title: 'Interessenten vorqualifizieren',
  seoTitle: 'Immobilien-Interessenten automatisch vorqualifizieren',
  lead: 'Interessenten vorqualifizieren mit wenigen kurzen Fragen nach der Anfrage. Sie telefonieren nur noch mit denen, für die das Objekt in Frage kommt.',
  datePublished: '2026-10-19',
  problem: [
    'Das dritte Telefonat am Vormittag nimmt dieselbe Wendung. Der Anrufer findet die Doppelhaushälfte toll. Bei der Bank war er noch nicht, und eigentlich muss erst die eigene Wohnung verkauft werden. In zwei Jahren vielleicht.',
    'Solche Gespräche sind freundlich und kosten jedes Mal zehn Minuten. Bei 25 Anfragen pro Woche kommt einiges an Telefonzeit mit Leuten zusammen, für die das Objekt gar nicht in Frage kommt. Und weil keiner gern Nein sagt, bekommen manche trotzdem eine Besichtigung.',
    'Fragen Sie dagegen alles per Mail ab, beginnt ein Hin und Her. Budget? Finanzierung? Zeitpunkt? Jede Antwort kommt einzeln, manche nie. Die Angaben stehen danach in Mails und Notizen, aber nicht dort, wo Sie sie beim nächsten Objekt wiederfinden.',
  ],
  heute: [
    'Jede Anfrage bekommt einen Rückruf oder eine Mail mit Rückfragen.',
    'Budget, Finanzierung und Zeitpunkt werden im Gespräch abgeklopft.',
    'Die Antworten stehen in Notizen, nicht in der Maklersoftware.',
    'Auch Interessenten, die nicht passen, bekommen eine Besichtigung.',
  ],
  danach: [
    'Mit der ersten Antwort bekommt der Interessent einen Link zu wenigen kurzen Fragen.',
    'Gefragt wird nur, was für das Objekt zählt, etwa Finanzierungsstand und gewünschter Zeitpunkt.',
    'Die Antworten landen als Felder am Kontakt in Ihrer Maklersoftware.',
    'Feste Regeln sortieren in passend, unklar und passt nicht.',
    'Passende bekommen direkt den Link zur Terminbuchung, die anderen eine freundliche Nachricht.',
  ],
  mensch:
    'Sie legen die Fragen und die Regeln fest, je Objekt oder Objektart. Die Gruppe „unklar“ sehen Sie selbst durch und rufen an, wo es sich lohnt. Wer nicht passt, kann sich trotzdem jederzeit bei Ihnen melden. Die Regeln bestimmen nur, wer zuerst einen Termin angeboten bekommt. Wer am Ende kauft, entscheiden Sie und der Eigentümer.',
  werkzeuge: ['n8n', 'Online-Formular auf Servern in der EU', 'onOffice, FLOWFACT oder Propstack (je nach Schnittstelle)', 'Gmail oder Outlook'],
  nutzen: 'gross',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 25,
    minutesBefore: 6,
    minutesAfter: 1,
    hourlyRate: 90,
    annahme:
      '25 Anfragen pro Woche. Bisher 3 Minuten Rückfragen plus rund 3 Minuten für Telefonate mit Interessenten, die am Ende nicht passen, danach 1 Minute für die Gruppe „unklar“.',
  },
  grenzen: [
    'Bei Mietwohnungen ist der Spielraum klein. Die Datenschutzbehörden empfehlen, vor der Besichtigung nur Name und Kontaktdaten zu erfragen und Angaben zum Einkommen erst danach. Der Ablauf eignet sich deshalb vor allem für Kaufobjekte.',
    'Fragen nach Herkunft, Religion oder ähnlichem gehören nicht hinein, auch nicht über Umwege. Die Fragen stimmen wir vor dem Start gemeinsam ab.',
    'Lange Formulare schrecken ab. Halten Sie es kurz, bei mir sind es selten mehr als fünf Fragen.',
    'Ob die Antworten als eigene Felder in Ihrer Maklersoftware landen, hängt von deren Schnittstelle ab. Sonst stehen sie als Notiz am Kontakt.',
  ],
  faqs: [
    {
      q: 'Was bedeutet Interessenten vorqualifizieren beim Makler?',
      a: 'Vor der Besichtigung klären, ob Objekt und Interessent zusammenpassen: Budget, Finanzierung, Zeitpunkt, bei Kaufobjekten oft auch, ob erst eine eigene Immobilie verkauft werden muss. Ziel sind Besichtigungen mit Leuten, die tatsächlich kaufen können.',
    },
    {
      q: 'Welche Fragen darf ich Mietinteressenten vor der Besichtigung stellen?',
      a: 'Wenige. Nach Empfehlung der Datenschutzbehörden reichen vor der Besichtigung Name und Kontaktdaten. Fragen zum Einkommen gehören in einen späteren Schritt. Im Zweifel klären Sie das mit Ihrem Datenschutzberater.',
    },
    {
      q: 'Sortiert das nicht zu hart aus?',
      a: 'Die Regeln sortieren nur die Reihenfolge. Wer unklar ist, landet bei Ihnen auf der Liste, nicht im Papierkorb.',
    },
  ],
  related: [
    { label: 'Portal-Anfragen sofort beantworten', href: '/ablaeufe/portal-anfragen-sofort-beantworten' },
    { label: 'Besichtigungstermine online buchen', href: '/ablaeufe/besichtigungstermine-selbst-buchen' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
  ],
};
