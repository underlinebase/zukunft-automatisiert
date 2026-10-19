// Inhalte des Automatisierungs-Checks (/automatisierungs-check). Auswertung: lib/check/evaluate.ts.
// Alle Zahlen in den Antworten sind Annahmen (Fälle pro Woche mal Minuten je Fall) und werden im Ergebnis so genannt.

import type { Thema } from '@/lib/content/ablaeufe/types';
import type { Faq } from '@/lib/content/types';
import type { CheckBrancheOption, CheckQuestion } from '@/lib/check/types';

export const CHECK_HERO = {
  eyebrow: 'Automatisierungs-Check',
  title: 'Welcher Ablauf kostet Sie jede Woche am meisten Zeit?',
  lead: 'Zehn Fragen, etwa drei Minuten, nur Klicks. Am Ende sehen Sie Ihre drei größten Zeitfresser mit einer groben Stundenschätzung und Beispielen, was sich davon automatisieren lässt.',
  facts: ['10 Fragen, etwa 3 Minuten', 'Ohne Anmeldung, ohne E-Mail'],
} as const;

export const CHECK_INTRO = {
  eyebrow: 'So läuft der Check',
  title: 'Klicken statt schreiben.',
  text: [
    'Zuerst wählen Sie Ihre Branche. Danach folgen neun Fragen zu Anfragen, Angeboten, Terminen, Belegen, Rechnungen und dem, was sonst im Büro hängen bleibt. Sie antworten jeweils mit einem Klick.',
    'Für jede Antwort rechne ich mit einer Annahme: so viele Fälle pro Woche mal so viele Minuten. Das ist eine grobe Schätzung, keine Messung. Den Rechenweg sehen Sie im Ergebnis bei jedem Punkt.',
    'Ihre Antworten verlassen Ihren Browser nicht. Ich sehe sie nicht, und wenn Sie die Seite schließen, sind sie weg.',
  ],
} as const;

export const CHECK_UI = {
  quizLabel: 'Automatisierungs-Check',
  brancheTitle: 'In welcher Branche arbeiten Sie?',
  brancheHint: 'Danach passe ich die Fragen an Ihren Alltag an.',
  /** {current} und {total} werden ersetzt. */
  progress: 'Frage {current} von {total}',
  back: 'Zurück',
  next: 'Weiter',
  resultLabel: 'Auswertung',
  resultReady: 'Auswertung fertig. Ihre drei größten Zeitfresser stehen unten.',
} as const;

export const CHECK_RESULT = {
  eyebrow: 'Ihr Ergebnis',
  title: 'Ihre drei größten Zeitfresser',
  estimateNote: 'Grobe Schätzung aus Ihren Antworten, keine Messung. Ihr Betrieb kann deutlich darüber oder darunter liegen.',
  perWeek: 'pro Woche',
  approx: 'ca.',
  totalLabel: 'Zusammen etwa',
  rechenwegLabel: 'Rechenweg anzeigen',
  rechenwegNote: 'Gerechnet mit einer mittleren Zahl zu Ihrer Antwort und festen Minuten pro Fall. Beides sind Annahmen.',
  ideaLabel: 'Was sich automatisieren lässt',
  libraryLabel: 'Passende Abläufe aus der Bibliothek',
  libraryFallback: 'Zu diesem Punkt steht noch kein Ablauf in der Bibliothek.',
  libraryGeneral: 'Wie solche Abläufe Schritt für Schritt aussehen, zeige ich in der Ablauf-Bibliothek, jeweils mit Rechenbeispiel.',
  libraryLink: 'Zur Ablauf-Bibliothek',
  ownerNote: 'Sie machen vieles davon selbst. Jede Stunde, die hier frei wird, ist Ihre eigene, und die ist im Betrieb meist die teuerste.',
  emptyTitle: 'Kein großer Zeitfresser in Sicht.',
  emptyText: 'Nach Ihren Antworten läuft das Büro schon ziemlich rund. Wenn Ihnen trotzdem ein Ablauf auf die Nerven geht, schildern Sie ihn mir kurz.',
  ctaTitle: 'Wie geht es weiter?',
  ctaText: 'Im Gespräch schauen wir auf den größten Punkt und prüfen, ob er sich in 4 Wochen automatisieren lässt. Notieren Sie sich vorher Ihre drei Punkte, denn Ihr Ergebnis bekomme ich nicht zu sehen.',
  cta: 'Ergebnis besprechen',
  restart: 'Check neu starten',
  privacy: 'Ich speichere nichts. Ihre Antworten bleiben in Ihrem Browser und werden nicht übertragen.',
} as const;

export const CHECK_NOSCRIPT = {
  title: 'Der Check braucht JavaScript.',
  text: 'Ihr Browser führt kein JavaScript aus, deshalb kann der Check nicht rechnen. Typische Abläufe finden Sie direkt in der Ablauf-Bibliothek. Oder Sie schildern mir Ihren Ablauf über die Kontaktseite.',
  library: 'Zur Ablauf-Bibliothek',
  contact: 'Zur Kontaktseite',
} as const;

export const THEMA_LABELS: Record<Thema, string> = {
  anfragen: 'Anfragen beantworten',
  angebote: 'Angebote schreiben',
  nachfassen: 'Nachfassen',
  termine: 'Termine abstimmen',
  dokumente: 'Unterlagen und Belege einsammeln',
  rechnungen: 'Rechnungen und offene Beträge',
  kommunikation: 'Immer gleiche Kundenfragen',
  reporting: 'Auswertungen und Berichte',
  onboarding: 'Neue Kunden aufnehmen',
  bewertungen: 'Bewertungen einholen',
  wissen: 'Wissen, das nur einer hat',
};

export const THEMA_IDEEN: Record<Thema, string> = {
  anfragen:
    'Anfragen aus Telefonnotiz, E-Mail und Formular landen an einem Ort. Die Daten sind eingetragen, ein Antwortentwurf liegt bereit, Sie prüfen und schicken ab.',
  angebote:
    'Aus Ihren Stichworten und Ihren Preisen entsteht ein Entwurf in Ihrer Vorlage. Sie korrigieren und geben frei, statt jedes Mal bei null anzufangen.',
  nachfassen:
    'Kommt nach ein paar Tagen keine Antwort, geht eine freundliche Erinnerung raus. Sie sehen auf einen Blick, welches Angebot noch offen ist.',
  termine:
    'Kunden wählen einen freien Termin selbst, Bestätigung und Erinnerung gehen automatisch raus. Das Hin und Her am Telefon fällt weg.',
  dokumente:
    'Unterlagen kommen über einen Weg rein, werden benannt und abgelegt. Fehlt etwas, geht automatisch eine Erinnerung an den Kunden.',
  rechnungen:
    'Die Rechnung entsteht aus dem erledigten Auftrag, Zahlungseingänge werden abgeglichen, und bei offenen Beträgen kommt die Erinnerung pünktlich.',
  kommunikation:
    'Kunden bekommen den Stand von selbst, bevor sie anrufen. Für die häufigsten Fragen liegt eine Antwort bereit, die Sie nur noch abschicken.',
  reporting:
    'Die Zahlen werden aus Ihren Programmen zusammengezogen, und der Bericht liegt jede Woche zur gleichen Zeit im Postfach.',
  onboarding:
    'Nach der Zusage laufen Vertrag, Datenabfrage, Ordner und Begrüßung in fester Reihenfolge ab. Sie greifen nur ein, wo es Ihre Entscheidung braucht.',
  bewertungen: 'Nach dem Abschluss bekommt der Kunde zum passenden Zeitpunkt eine kurze Bitte um eine Bewertung.',
  wissen:
    'Abläufe und Antworten werden einmal aufgeschrieben und sind dann für alle abrufbar. Fällt jemand aus, steht der Betrieb nicht still.',
};

export const CHECK_BRANCHEN: readonly CheckBrancheOption[] = [
  { id: 'handwerk', label: 'Handwerk' },
  { id: 'immobilienmakler', label: 'Immobilienmakler' },
  { id: 'steuerberater', label: 'Steuerkanzlei' },
  { id: 'agenturen', label: 'Agentur' },
  { id: 'coaches', label: 'Coaching' },
  { id: 'andere', label: 'Andere Branche' },
];

export const CHECK_QUESTIONS: readonly CheckQuestion[] = [
  {
    id: 'anfragen',
    title: {
      standard: 'Wie viele Anfragen kommen pro Woche rein, und auf wie vielen Wegen?',
      handwerk: 'Wie viele Kundenanfragen kommen pro Woche rein, und auf wie vielen Wegen?',
      immobilienmakler: 'Wie viele Anfragen zu Ihren Objekten kommen pro Woche rein?',
      steuerberater: 'Wie viele Anfragen von neuen Interessenten kommen pro Woche rein?',
      agenturen: 'Wie viele Anfragen und Briefings kommen pro Woche rein?',
      coaches: 'Wie viele Anfragen für ein Erstgespräch kommen pro Woche rein?',
    },
    hint: {
      standard: 'Telefon, E-Mail, Kontaktformular, WhatsApp: alles zusammen.',
      handwerk: 'Telefon, E-Mail, Website, WhatsApp, Handwerkerportale: alles zusammen.',
      immobilienmakler: 'Immobilienportale, E-Mail, Telefon und Website zusammen.',
    },
    options: [
      { id: 'wenig', label: 'Unter 5, fast alle auf einem Weg', efforts: [{ thema: 'anfragen', count: 3, unit: 'Anfragen', minutes: 8 }] },
      { id: 'einige', label: '5 bis 15, über zwei oder drei Wege', efforts: [{ thema: 'anfragen', count: 10, unit: 'Anfragen', minutes: 10 }] },
      { id: 'viele', label: '15 bis 30, über mehrere Wege', efforts: [{ thema: 'anfragen', count: 22, unit: 'Anfragen', minutes: 10 }] },
      { id: 'sehr-viele', label: 'Mehr als 30, von überall', efforts: [{ thema: 'anfragen', count: 40, unit: 'Anfragen', minutes: 12 }] },
    ],
  },
  {
    id: 'angebote',
    title: {
      standard: 'Wie viele Angebote schreiben Sie, und wie fassen Sie nach?',
      handwerk: 'Wie viele Angebote schreiben Sie, und wie fassen Sie nach?',
      immobilienmakler: 'Wie viele Exposés und Angebote verschicken Sie, und wie fassen Sie bei Interessenten nach?',
      steuerberater: 'Wie viele Angebote oder Mandatsvereinbarungen schreiben Sie, und wie fassen Sie nach?',
      agenturen: 'Wie viele Angebote und Kostenschätzungen schreiben Sie, und wie fassen Sie nach?',
      coaches: 'Wie viele Angebote schicken Sie nach Erstgesprächen raus, und wie fassen Sie nach?',
    },
    options: [
      { id: 'selten', label: 'Selten, ein paar im Monat', efforts: [{ thema: 'angebote', count: 3, unit: 'Angebote', minutes: 40, period: 'monat' }] },
      {
        id: 'wenige',
        label: '1 bis 3 pro Woche, nachfassen nur, wenn ich dran denke',
        efforts: [
          { thema: 'angebote', count: 2, unit: 'Angebote', minutes: 45 },
          { thema: 'nachfassen', count: 2, unit: 'Nachfragen', minutes: 10 },
        ],
      },
      {
        id: 'mittel',
        label: '4 bis 8 pro Woche, nachfassen von Hand',
        efforts: [
          { thema: 'angebote', count: 6, unit: 'Angebote', minutes: 45 },
          { thema: 'nachfassen', count: 6, unit: 'Nachfragen', minutes: 10 },
        ],
      },
      {
        id: 'viele',
        label: 'Mehr als 8 pro Woche, nachfassen bleibt oft liegen',
        efforts: [
          { thema: 'angebote', count: 10, unit: 'Angebote', minutes: 40 },
          { thema: 'nachfassen', count: 10, unit: 'Nachfragen', minutes: 10 },
        ],
      },
    ],
  },
  {
    id: 'termine',
    title: {
      standard: 'Wie vereinbaren Sie Termine mit Kunden?',
      handwerk: 'Wie vereinbaren Sie Termine für Besichtigung, Aufmaß oder Einsatz?',
      immobilienmakler: 'Wie vereinbaren Sie Besichtigungstermine?',
      steuerberater: 'Wie vereinbaren Sie Besprechungstermine mit Mandanten?',
      agenturen: 'Wie vereinbaren Sie Abstimmungstermine mit Kunden?',
      coaches: 'Wie vereinbaren Sie Erstgespräche und Sitzungen?',
    },
    options: [
      { id: 'online', label: 'Kunden buchen selbst online', efforts: [{ thema: 'termine', count: 8, unit: 'Termine', minutes: 2 }] },
      { id: 'mail', label: 'Per E-Mail, ein paar Mal hin und her', efforts: [{ thema: 'termine', count: 8, unit: 'Termine', minutes: 10 }] },
      { id: 'telefon', label: 'Am Telefon, oft mit Rückruf', efforts: [{ thema: 'termine', count: 8, unit: 'Termine', minutes: 12 }] },
      { id: 'kaum', label: 'Termine spielen bei uns kaum eine Rolle', efforts: [] },
    ],
  },
  {
    id: 'dokumente',
    title: {
      standard: 'Wie kommen Unterlagen und Belege zu Ihnen?',
      handwerk: 'Wie kommen Lieferscheine, Fotos und Aufmaße ins Büro?',
      immobilienmakler: 'Wie sammeln Sie Unterlagen zu einem Objekt ein, etwa Grundriss und Energieausweis?',
      steuerberater: 'Wie kommen die Belege Ihrer Mandanten zu Ihnen?',
      agenturen: 'Wie kommen Texte, Bilder und Freigaben vom Kunden zu Ihnen?',
      coaches: 'Wie kommen Verträge, Fragebögen und Belege zu Ihnen?',
    },
    hint: { standard: 'Gerechnet wird mit Vorgängen. Ein Vorgang ist alles, was zu einem Kunden oder Auftrag gehört.' },
    options: [
      { id: 'digital', label: 'Digital an einem Ort, kaum Nacharbeit', efforts: [{ thema: 'dokumente', count: 15, unit: 'Vorgänge', minutes: 1 }] },
      { id: 'mail', label: 'Per E-Mail, ich benenne und sortiere von Hand', efforts: [{ thema: 'dokumente', count: 15, unit: 'Vorgänge', minutes: 4 }] },
      { id: 'gemischt', label: 'Gemischt: Papier, Fotos, E-Mail, WhatsApp', efforts: [{ thema: 'dokumente', count: 15, unit: 'Vorgänge', minutes: 7 }] },
      { id: 'hinterher', label: 'Ich laufe Unterlagen regelmäßig hinterher', efforts: [{ thema: 'dokumente', count: 15, unit: 'Vorgänge', minutes: 10 }] },
    ],
  },
  {
    id: 'rechnungen',
    title: {
      standard: 'Wie entstehen Ihre Rechnungen, und wer behält offene Beträge im Blick?',
      handwerk: 'Wie entsteht nach dem Auftrag die Rechnung, und wer behält offene Beträge im Blick?',
      immobilienmakler: 'Wie entstehen Ihre Provisionsrechnungen, und wer behält offene Beträge im Blick?',
      steuerberater: 'Wie entstehen Ihre Honorarrechnungen, und wer behält offene Beträge im Blick?',
    },
    options: [
      {
        id: 'automatisch',
        label: 'Rechnungsprogramm, Zahlungen werden automatisch abgeglichen',
        efforts: [{ thema: 'rechnungen', count: 10, unit: 'Rechnungen', minutes: 2 }],
      },
      {
        id: 'programm',
        label: 'Rechnungsprogramm, Zahlungen gleiche ich von Hand ab',
        efforts: [{ thema: 'rechnungen', count: 10, unit: 'Rechnungen', minutes: 6 }],
      },
      { id: 'hand', label: 'Word oder Excel, alles von Hand', efforts: [{ thema: 'rechnungen', count: 10, unit: 'Rechnungen', minutes: 12 }] },
      {
        id: 'liegen',
        label: 'Ich schreibe sie gesammelt, oft mit Verzug',
        efforts: [{ thema: 'rechnungen', count: 10, unit: 'Rechnungen', minutes: 15 }],
      },
    ],
  },
  {
    id: 'kommunikation',
    title: { standard: 'Wie oft beantworten Sie dieselben Fragen von Kunden?' },
    hint: {
      standard: 'Etwa: „Wie ist der Stand?“, „Was brauchen Sie noch von mir?“',
      handwerk: 'Etwa: „Wann kommen Sie?“, „Wie weit ist die Baustelle?“',
      immobilienmakler: 'Etwa: „Ist die Wohnung noch frei?“, „Wie ist der Stand beim Verkauf?“',
      steuerberater: 'Etwa: „Was brauchen Sie noch von mir?“, „Wann ist meine Erklärung fertig?“',
      agenturen: 'Etwa: „Wie ist der Stand?“, „Wann kommt der Entwurf?“',
      coaches: 'Etwa: „Wie läuft das ab?“, „Kann ich den Termin verschieben?“',
    },
    options: [
      { id: 'selten', label: 'Selten', efforts: [{ thema: 'kommunikation', count: 3, unit: 'Rückfragen', minutes: 5 }] },
      { id: 'woche', label: 'Ein paar Mal pro Woche', efforts: [{ thema: 'kommunikation', count: 8, unit: 'Rückfragen', minutes: 5 }] },
      { id: 'taeglich', label: 'Jeden Tag', efforts: [{ thema: 'kommunikation', count: 20, unit: 'Rückfragen', minutes: 5 }] },
      { id: 'staendig', label: 'Mehrmals am Tag', efforts: [{ thema: 'kommunikation', count: 40, unit: 'Rückfragen', minutes: 5 }] },
    ],
  },
  {
    id: 'reporting',
    title: {
      standard: 'Wie viel Zeit stecken Sie in Auswertungen und Berichte?',
      handwerk: 'Wie viel Zeit stecken Sie in Stundenzettel, Nachkalkulation und Auswertungen?',
      immobilienmakler: 'Wie viel Zeit stecken Sie in Berichte für Eigentümer und eigene Auswertungen?',
      steuerberater: 'Wie viel Zeit stecken Sie in Auswertungen für Mandanten und eigene Kennzahlen?',
      agenturen: 'Wie viel Zeit stecken Sie in Reports für Kunden?',
      coaches: 'Wie viel Zeit stecken Sie in Auswertungen zu Buchungen und Umsatz?',
    },
    options: [
      { id: 'kaum', label: 'Kaum, das schaue ich mir selten an', efforts: [] },
      {
        id: 'monatlich',
        label: 'Einmal im Monat ein paar Stunden',
        efforts: [{ thema: 'reporting', count: 1, unit: 'Monatsauswertung', minutes: 180, period: 'monat' }],
      },
      { id: 'woechentlich', label: 'Jede Woche etwa eine Stunde', efforts: [{ thema: 'reporting', count: 1, unit: 'Wochenauswertung', minutes: 60 }] },
      { id: 'viel', label: 'Mehrere Berichte pro Woche', efforts: [{ thema: 'reporting', count: 4, unit: 'Berichte', minutes: 45 }] },
    ],
  },
  {
    id: 'onboarding',
    title: {
      standard: 'Was passiert, wenn ein neuer Kunde zusagt?',
      handwerk: 'Was passiert, wenn ein Kunde den Auftrag erteilt?',
      immobilienmakler: 'Was passiert, wenn Sie einen neuen Verkaufsauftrag bekommen?',
      steuerberater: 'Was passiert, wenn ein neues Mandat zustande kommt?',
      agenturen: 'Was passiert, wenn ein neuer Kunde oder ein neues Projekt startet?',
      coaches: 'Was passiert, wenn ein neuer Klient bucht?',
    },
    hint: { standard: 'Vertrag, Kundendaten, Ordner, Zugänge, Begrüßung.' },
    options: [
      { id: 'fest', label: 'Ein fester Ablauf, der größtenteils von selbst läuft', efforts: [{ thema: 'onboarding', count: 2, unit: 'neue Kunden', minutes: 10 }] },
      { id: 'checkliste', label: 'Eine Checkliste, die ich von Hand abarbeite', efforts: [{ thema: 'onboarding', count: 2, unit: 'neue Kunden', minutes: 45 }] },
      { id: 'neu', label: 'Jedes Mal neu zusammengesucht', efforts: [{ thema: 'onboarding', count: 2, unit: 'neue Kunden', minutes: 75 }] },
      { id: 'selten', label: 'Neue Kunden kommen bei uns selten dazu', efforts: [] },
    ],
  },
  {
    id: 'wer',
    title: { standard: 'Wer erledigt diese Büroarbeit heute meistens?' },
    options: [
      { id: 'chef', label: 'Ich selbst, oft abends oder am Wochenende', owner: true, efforts: [] },
      {
        id: 'chef-und-buero',
        label: 'Ich und eine Bürokraft, die vieles im Kopf hat',
        owner: true,
        efforts: [{ thema: 'wissen', count: 10, unit: 'Rückfragen im Team', minutes: 5 }],
      },
      { id: 'team', label: 'Ein Team mit klaren Zuständigkeiten', efforts: [] },
      {
        id: 'wechselnd',
        label: 'Mal der eine, mal die andere',
        efforts: [{ thema: 'wissen', count: 15, unit: 'Rückfragen im Team', minutes: 5 }],
      },
    ],
  },
];

export const CHECK_FAQ_INTRO = { eyebrow: 'Fragen zum Check', title: 'Was Sie vorher wissen sollten.' } as const;

export const CHECK_FAQS: Faq[] = [
  {
    q: 'Wie genau ist die Schätzung?',
    a: 'Grob. Zu jeder Antwort rechne ich mit einer mittleren Zahl, bei „5 bis 15 Anfragen“ also mit 10, und mit festen Minuten pro Fall. Beides sind Annahmen und keine Messung in Ihrem Betrieb. Der Check zeigt, wo sich ein genauerer Blick lohnt. Den Rechenweg sehen Sie im Ergebnis.',
  },
  {
    q: 'Werden meine Antworten gespeichert?',
    a: 'Nein. Der Check rechnet komplett in Ihrem Browser. Es gibt keine Anmeldung und keine E-Mail-Abfrage, und an mich wird nichts geschickt. Schließen Sie die Seite, sind die Antworten weg.',
  },
  {
    q: 'Was mache ich mit dem Ergebnis?',
    a: 'Schauen Sie sich die passenden Abläufe in der Ablauf-Bibliothek an. Dort steht, wie es heute läuft, wie danach und was Sie weiter selbst machen. Wollen Sie den größten Punkt angehen, sprechen wir 30 Minuten darüber. Dann sage ich Ihnen offen, ob er sich in 4 Wochen automatisieren lässt und ob sich das für Sie rechnet.',
  },
  {
    q: 'Mein Betrieb passt in keine der Branchen. Lohnt sich der Check trotzdem?',
    a: 'Ja. Wählen Sie „Andere Branche“. Die Fragen sind dann allgemeiner formuliert, die Rechnung bleibt dieselbe. Anfragen, Termine und Rechnungen gibt es in fast jedem Betrieb.',
  },
];
