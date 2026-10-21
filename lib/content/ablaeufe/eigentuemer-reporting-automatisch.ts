import type { Ablauf } from './types';

export const eigentuemerReportingAutomatisch: Ablauf = {
  id: 1013,
  slug: 'eigentuemer-reporting-automatisch',
  branche: 'immobilienmakler',
  themen: ['reporting', 'kommunikation'],
  title: 'Eigentümer-Reporting automatisch',
  seoTitle: 'Eigentümer-Reporting für Makler automatisch erstellen',
  lead: 'Eigentümer bekommen regelmäßig einen kurzen Bericht über die Vermarktung: Anfragen, Besichtigungen, Rückmeldungen. Automatisch erstellt, von Ihnen freigegeben.',
  datePublished: '2026-10-19',
  problem: [
    '„Und, wie läuft es?“ Der Eigentümer ruft zum dritten Mal in zwei Wochen an. Er hat nichts gehört und fürchtet, dass sein Haus in einer Schublade liegt. Dabei gab es 30 Anfragen und sechs Besichtigungen.',
    'Aus Sicht des Eigentümers ist Funkstille das schlechteste Zeichen. Er sieht nicht, was hinter den Kulissen passiert, und beginnt zu zweifeln, am Preis oder am Makler. Ein guter Bericht beantwortet die Frage, bevor sie gestellt wird. Er ist das, woran sich der Eigentümer später erinnert, wenn ihn ein Nachbar nach einer Empfehlung fragt.',
    'Nur heißt Bericht schreiben: Zahlen aus der Maklersoftware ziehen, Notizen von Besichtigungen durchgehen und alles in eine lesbare Mail bringen. Bei acht Objekten auf einmal ist das schnell ein halber Vormittag, und er kommt alle zwei Wochen wieder.',
  ],
  heute: [
    'Eigentümer rufen an und fragen nach dem Stand.',
    'Sie suchen Anfragen und Termine in der Maklersoftware zusammen.',
    'Rückmeldungen aus Besichtigungen stehen in Notizen oder im Kopf.',
    'Ein Bericht entsteht vor allem dann, wenn der Eigentümer drängt.',
  ],
  danach: [
    'Alle zwei Wochen sammelt der Ablauf je Objekt die Zahlen aus Ihrer Maklersoftware.',
    'Anfragen, Besichtigungen und Absagen stehen als kurze Übersicht im Bericht.',
    'Rückmeldungen aus Besichtigungen werden zu wenigen Sätzen zusammengefasst.',
    'Sie bekommen den Entwurf, ergänzen Ihre Einschätzung und geben frei.',
    'Der Eigentümer bekommt den Bericht per Mail, jedes Mal im selben Aufbau.',
  ],
  mensch:
    'Die Einschätzung schreiben Sie selbst: was die Zahlen bedeuten, ob der Preis noch passt, was Sie als Nächstes vorschlagen. Das ist der Teil, für den der Eigentümer Sie beauftragt hat. Auch das Gespräch über eine Preisanpassung führt kein Bericht für Sie. Er liefert nur die Zahlen, auf die Sie sich dabei stützen.',
  ki: 'Beim Zusammenfassen der Rückmeldungen. Nach sechs Besichtigungen stehen in Ihren Notizen Sätze wie „Küche zu alt“, „Garten super, aber Straße laut“, „Preis zu hoch für den Sanierungsbedarf“. Ein Sprachmodell macht daraus zwei, drei sachliche Sätze, ohne Namen der Interessenten. Zahlen zählt es nicht, die kommen direkt aus der Software.',
  werkzeuge: ['n8n', 'onOffice, FLOWFACT oder Propstack (je nach Schnittstelle)', 'Claude oder OpenAI-Modell', 'Gmail oder Outlook'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 4,
    minutesBefore: 25,
    minutesAfter: 5,
    hourlyRate: 90,
    annahme:
      '8 Objekte in der Vermarktung mit einem Bericht alle zwei Wochen, also 4 Berichte pro Woche. Bisher 25 Minuten pro Bericht, danach 5 Minuten für Ihre Einschätzung und die Freigabe.',
  },
  grenzen: [
    'Der Bericht ist nur so gut wie die Daten. Werden Besichtigungen und Rückmeldungen nicht in der Maklersoftware erfasst, fehlen sie im Bericht.',
    'Aufrufzahlen von ImmoScout24 oder Immowelt stehen im Anbieterbereich der Portale. Ob sie sich automatisch abrufen lassen, hängt von Portal und Vertrag ab. Sonst bleiben sie draußen, oder Sie tragen sie selbst ein.',
    'Manche Maklerprogramme bieten selbst Eigentümerberichte oder einen Zugang für Eigentümer. Dann prüfe ich zuerst, ob das schon reicht.',
  ],
  faqs: [
    {
      q: 'Was gehört in einen Vermarktungsbericht für Eigentümer?',
      a: 'Die Zahl der Anfragen und Besichtigungen im Zeitraum, die wichtigsten Rückmeldungen der Interessenten, Ihre Einschätzung und der nächste Schritt. Kurz genug, dass der Eigentümer ihn auf dem Handy liest.',
    },
    {
      q: 'Wie oft sollte ein Makler dem Eigentümer berichten?',
      a: 'Ich empfehle alle zwei Wochen, in den ersten Wochen der Vermarktung gern wöchentlich. Wichtiger als der Abstand ist, dass der Bericht verlässlich kommt.',
    },
    {
      q: 'Sehen Eigentümer die Namen der Interessenten?',
      a: 'Im Bericht nicht. Die Zusammenfassung läuft ohne Namen. Wen Sie wann nennen, entscheiden Sie im Gespräch.',
    },
  ],
  related: [
    { label: 'Nachfassen nach der Besichtigung', href: '/ablaeufe/nachfassen-nach-besichtigung' },
    { label: 'Exposé-Entwurf mit KI', href: '/ablaeufe/expose-entwurf-mit-ki' },
    { label: 'KI-Berater für Prozessautomatisierung', href: '/ki-beratung' },
  ],
};
