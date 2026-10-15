import { SITE } from './site';
import type {
  BeforeAfterExample,
  CalculatorDefaults,
  Fact,
  Faq,
  Principle,
  Scene,
  WeekBlockLabel,
  WeekStep,
} from './types';

export const HERO = {
  eyebrow: 'Der KI-Realist · Automatisierung für Inhaber',
  title: 'Den Ablauf, der Sie jede Woche Stunden kostet, automatisiere ich in 4 Wochen.',
  lead: 'Klappt das nicht, arbeite ich kostenlos weiter. Ohne KI-Zauber, ohne Software-Zoo. Sie arbeiten direkt mit mir.',
};

export const FACTS: Fact[] = [
  { label: 'Für wen', value: 'Inhaber, die selbst entscheiden', text: 'Handwerk, Makler und Steuerkanzleien ab etwa 20.000 € Monatsumsatz.' },
  { label: 'Was', value: 'Ein Ablauf', text: 'Der, der in Ihrem Betrieb am meisten Zeit frisst.' },
  { label: 'Wie lange', value: '4 Wochen', text: 'Von der ersten Aufnahme bis zur Übergabe an Ihr Team.' },
  { label: 'Preis', value: 'Festpreis, der sich rechnen muss', text: 'Sie bekommen ihn nach dem Erstgespräch schriftlich. Rechnet er sich nicht im ersten Jahr, rate ich Ihnen ab.' },
  { label: 'Garantie', value: 'Läuft es nicht, arbeite ich weiter', text: 'Kostenlos, bis der Ablauf im Alltag läuft.' },
];

export const SCENES_INTRO = {
  eyebrow: 'Kennen Sie das?',
  title: 'Tagsüber läuft der Betrieb. Abends holt Sie der Papierkram ein.',
  lead: 'Drei Szenen, die ich in Gesprächen mit Inhabern immer wieder höre.',
};

export const SCENES: Scene[] = [
  {
    tag: 'Handwerk · SHK, Elektro, Dach',
    title: 'Sonntag, 19 Uhr. Sie schreiben Angebote.',
    text: 'Aufmaß vom Zettel abtippen, Preise beim Großhändler nachsehen, Textbausteine zusammenkopieren. Bis alle Angebote raus sind, ist das Wochenende vorbei.',
    hours: 'ca. 5 bis 8 Std. pro Woche',
  },
  {
    tag: 'Immobilienmakler',
    title: '21 Uhr. Die Anfragen von heute sind noch offen.',
    text: 'Portal-Anfragen einzeln beantworten, Exposés verschicken, Besichtigungen hin und her schieben. Wer zu spät antwortet, ist beim Interessenten raus.',
    hours: 'ca. 6 bis 10 Std. pro Woche',
  },
  {
    tag: 'Steuerkanzlei',
    title: 'Monatsende. Die Belege fehlen schon wieder.',
    text: 'Mandanten anschreiben, nachtelefonieren, Belege zuordnen. Ihre Fachkräfte verbringen Stunden damit, Unterlagen hinterherzulaufen.',
    hours: 'ca. 7 bis 12 Std. pro Woche',
  },
];

export const PRINCIPLES_INTRO = {
  eyebrow: 'Der KI-Realist',
  title: 'Was ich anders mache.',
  lead: 'Über KI wird viel erzählt. Das meiste davon brauchen Sie nicht. Den kleinen Teil, der wirklich hilft, setze ich ein.',
};

export const PRINCIPLES: Principle[] = [
  {
    title: 'Ich rede Ihnen auch etwas aus.',
    text: 'Wenn sich eine Automatisierung für Sie nicht rechnet, sage ich das im ersten Gespräch. Dann haben Sie nichts bezahlt und wissen trotzdem mehr.',
  },
  {
    title: 'Ein Ablauf, der läuft, ist mehr wert als zehn Ideen.',
    text: 'Wir nehmen uns den einen Ablauf vor, der Sie am meisten Zeit kostet. Erst wenn der zuverlässig läuft, reden wir über den nächsten.',
  },
  {
    title: 'Was ich baue, gehört Ihnen.',
    text: 'Sie bekommen alle Zugänge und eine verständliche Anleitung. Sie sind nicht an mich gebunden. Ich helfe trotzdem gern weiter.',
  },
];

export const WEEKS_INTRO = {
  eyebrow: 'So läuft es',
  title: 'So laufen die 4 Wochen.',
  lead: 'Ihr Tagesgeschäft läuft weiter. Ich brauche Sie nur zu wenigen, festen Terminen.',
  total: 'Ihr Aufwand insgesamt: rund 5 Stunden',
};

export const WEEKS: WeekStep[] = [
  {
    week: 'Woche 1',
    title: 'Ablauf gemeinsam aufnehmen',
    text: 'Sie zeigen mir, wie der Ablauf heute läuft. Am Bildschirm, am Telefon oder bei Ihnen vor Ort. Ich schreibe mit und frage nach.',
    youGet: 'Eine Beschreibung des Ablaufs und einen Plan, was automatisiert wird.',
    yourTime: 'ca. 2 Std.',
  },
  {
    week: 'Woche 2',
    title: 'Bauen',
    text: 'Ich baue die Lösung. Sie arbeiten in dieser Zeit ganz normal weiter.',
    youGet: 'Einen kurzen Zwischenstand am Ende der Woche.',
    yourTime: 'ca. 15 Min.',
  },
  {
    week: 'Woche 3',
    title: 'Im Alltag testen',
    text: 'Die Lösung läuft neben Ihrem gewohnten Ablauf mit. Wir prüfen sie an echten Fällen und an den Sonderfällen.',
    youGet: 'Eine Lösung, die Ihre echten Fälle kennt.',
    yourTime: 'ca. 1 Std.',
  },
  {
    week: 'Woche 4',
    title: 'Übergeben und einweisen',
    text: 'Ich zeige Ihnen und Ihrem Team, wie alles funktioniert. Danach läuft der Ablauf ohne Sie.',
    youGet: 'Alle Zugänge, eine Anleitung zum Nachlesen und ein kurzes Erklärvideo.',
    yourTime: 'ca. 1,5 Std.',
  },
];

export const HOME_EXAMPLE: BeforeAfterExample = {
  title: 'Eine Angebotsanfrage im Handwerksbetrieb.',
  context: 'Beispielablauf mit typischen Minutenwerten, kein Kundenfall. Was sich bei Ihnen automatisieren lässt, hängt von Ihrer Software ab. Das prüfe ich vorher.',
  perWeek: 10,
  unit: 'Anfragen pro Woche',
  steps: [
    { text: 'Anfrage aus E-Mail und Kontaktformular zusammensuchen', minutesBefore: 5, minutesAfter: 0, afterText: 'Anfragen landen gesammelt an einer Stelle' },
    { text: 'Kundendaten in die Handwerkersoftware abtippen', minutesBefore: 6, minutesAfter: 0, afterText: 'Kundendaten werden übernommen' },
    { text: 'Fotos und Aufmaß vom Handy in den Kundenordner sortieren', minutesBefore: 8, minutesAfter: 0, afterText: 'Fotos landen im richtigen Kundenordner' },
    { text: 'Angebot aus Textbausteinen zusammensetzen', minutesBefore: 15, minutesAfter: 8, afterText: 'Entwurf liegt bereit. Sie prüfen, ergänzen und geben frei', keeps: 'den Angebotsentwurf prüfen und freigeben' },
    { text: 'Angebot als PDF verschicken', minutesBefore: 3, minutesAfter: 0, afterText: 'Geht nach Ihrer Freigabe automatisch raus' },
    { text: 'Nach einer Woche nachfassen', minutesBefore: 5, minutesAfter: 0, afterText: 'Freundliche Erinnerung geht automatisch raus' },
  ],
};

export const GUARANTEE = {
  eyebrow: 'Garantie',
  title: 'Läuft der Ablauf nach 4 Wochen nicht, arbeite ich kostenlos weiter.',
  lead: 'Das Risiko liegt bei mir. Damit klar ist, worüber wir reden:',
  points: [
    { label: 'Was „läuft“ heißt', text: 'Der vereinbarte Ablauf erledigt seine Aufgabe im Alltag, mit Ihren echten Daten, ohne dass Sie nachhelfen müssen.' },
    { label: 'Woran wir das messen', text: 'Wir halten zu Beginn schriftlich fest, was der Ablauf können soll. Daran messen wir am Ende.' },
    { label: 'Was ich nicht zusage', text: 'Mehr Umsatz. Ich verspreche Ihnen Zeit, keine Umsatzzahlen.' },
  ],
};

export const HOME_CALCULATOR: CalculatorDefaults = { hoursPerWeek: 6, hourlyRate: 80 };

export const FIT = {
  eyebrow: 'Ehrlich vorab',
  title: 'Passt das zu Ihnen?',
  lead: 'Ich arbeite lieber mit wenigen Betrieben richtig als mit vielen halb.',
  yes: [
    'Sie entscheiden in Ihrem Betrieb selbst.',
    'Es gibt einen Ablauf, der jede Woche wiederkommt und Sie Zeit kostet.',
    'Ihre Daten liegen schon am Computer, etwa in E-Mails, Ihrer Branchensoftware oder in Tabellen.',
    'Sie wollen einen festen Ansprechpartner statt einer Agentur.',
  ],
  no: [
    'Sie suchen eine KI, die Mitarbeiter ersetzt.',
    'Ihre Abläufe sind jedes Mal anders.',
    'Sie möchten erst ein Strategiepapier und dann irgendwann starten.',
    'Bei Ihnen läuft fast alles auf Papier. Dann fangen wir besser dort an, und das sage ich Ihnen auch.',
  ],
};

export const INDUSTRIES_INTRO = {
  eyebrow: 'Branchen',
  title: 'Für diese Betriebe arbeite ich.',
  lead: 'Jede Branche hat ihren eigenen Papierkram. Hier ein paar Abläufe, die ich oft sehe.',
};

export const ABOUT = {
  eyebrow: 'Über mich · Der KI-Realist',
  title: 'Ich bin Marco Gundlach. Sie arbeiten direkt mit mir.',
  text: [
    'Seit über 14 Jahren leite ich Digitalisierungsprojekte, unter anderem für Hugo Boss, Fressnapf und Aktion Mensch. Dort habe ich gelernt, Abläufe sauber aufzusetzen. Ich habe auch gesehen, wie viel Geld in Projekte fließt, die am Ende niemand nutzt.',
    'Heute arbeite ich mit Inhabern, die für so etwas keine Zeit haben. Ich höre zu, baue einen Ablauf, der funktioniert, und gehe erst, wenn er läuft.',
    'Ich nenne mich den KI-Realisten. Ich setze KI jeden Tag ein und habe mich zu ihren Fähigkeiten und Grenzen zertifizieren lassen. Gerade deshalb sage ich Ihnen, wann sie hilft und wann eine einfache Regel besser ist.',
  ],
  photoAlt: 'Marco Gundlach',
};

export const EXPERIENCE = {
  eyebrow: 'Erfahrung',
  title: 'Projekterfahrung aus großen Unternehmen.',
  note: 'Frühere Projekte als IT-Projektleiter. Das sind keine Kunden dieses Angebots.',
  companies: ['Hugo Boss', 'Fressnapf', 'Aktion Mensch', 'APCOA', 'Flughafen Düsseldorf'],
  certificates: [
    'Claude Academy: KI-Fähigkeiten und -Grenzen (Anthropic)',
    'Professional Scrum Master II (Scrum.org)',
    'Professional Scrum Product Owner II (Scrum.org)',
    'ITIL 4 Foundation',
    'Geprüfter Ausbilder (IHK)',
  ],
  pilot: {
    label: 'Pilotkunden gesucht',
    title: 'Sie könnten einer der ersten Betriebe sein.',
    text: 'Dieses Angebot ist neu. Für die ersten Betriebe gibt es [KONDITION FÜR PILOTKUNDEN]. Im Gegenzug darf ich über das Ergebnis berichten, nur mit Ihrem Einverständnis.',
    cta: 'Als Pilotkunde melden',
  },
};

export const FAQ_INTRO = {
  eyebrow: 'Fragen',
  title: 'Was Inhaber mich vorher fragen.',
};

export const FAQS: Faq[] = [
  {
    id: 'hype',
    q: 'Ist KI nicht nur Hype?',
    a: 'Vieles davon, ja. Für die meisten Abläufe brauchen Sie keine KI, sondern klare Regeln, die zuverlässig abgearbeitet werden. KI setze ich nur dort ein, wo sie wirklich hilft. Zum Beispiel, wenn Text aus E-Mails oder schlecht gescannten Belegen gelesen werden muss.',
  },
  {
    id: 'daten',
    q: 'Was passiert mit meinen Daten?',
    a: 'Ihre Daten bleiben bei Ihnen oder auf Servern in der EU. Wo nötig, schließen wir einen Vertrag zur Auftragsverarbeitung. Ich nutze keine Dienste, die Ihre Daten zum Training von KI-Modellen verwenden. [SERVERSTANDORT UND HOSTING-ANBIETER]',
  },
  {
    id: 'zeit',
    q: 'Wie viel Zeit muss ich investieren?',
    a: 'Rund 5 Stunden, verteilt auf 4 Wochen. Etwa 2 Stunden für die Aufnahme, eine Stunde zum Testen und anderthalb Stunden für die Übergabe. Den Rest erledige ich.',
  },
  {
    id: 'danach',
    q: 'Was passiert nach den 4 Wochen?',
    a: 'Der Ablauf gehört Ihnen und läuft weiter. Sie können ihn selbst betreuen oder mich damit beauftragen. Eine Mindestlaufzeit gibt es nicht. Viele nehmen sich danach den nächsten Ablauf vor.',
  },
  {
    id: 'kosten',
    q: 'Was kostet das?',
    a: 'Einen Festpreis, den Sie nach dem ersten Gespräch schriftlich bekommen. Er richtet sich nach dem Ablauf, nicht nach meinen Stunden. Mein Maßstab: Die Automatisierung muss sich innerhalb eines Jahres bezahlt machen. Was Sie der Ablauf heute kostet, zeigt Ihnen der Zeitrechner. Liegt der Preis darüber, rate ich Ihnen ab.',
  },
  {
    id: 'betreuung',
    q: 'Was kostet die Betreuung danach?',
    a: 'Einen festen Monatsbetrag, den wir vor dem Start vereinbaren. Er hängt davon ab, wie viele Abläufe laufen. Die Betreuung ist freiwillig und monatlich kündbar. Dafür prüfe ich, ob alles läuft, passe Kleinigkeiten an und bin erreichbar, wenn sich an Ihrer Software etwas ändert.',
  },
  {
    id: 'software',
    q: 'Welche Software nutzen Sie?',
    a: 'Meistens n8n. Damit lassen sich Programme verbinden, die Sie schon nutzen, etwa E-Mail, Kalender, Branchensoftware oder Buchhaltung. n8n kann auf einem Server in Deutschland laufen, und Sie zahlen keine Lizenz pro Nutzer. Wo es passt, ergänze ich kleine Programme oder eine KI-Schnittstelle.',
  },
];

export const CLOSING = {
  eyebrow: 'Nächster Schritt',
  title: 'Schildern Sie mir Ihren Ablauf in drei Sätzen.',
  lead: `Ich antworte innerhalb von ${SITE.responseTime} mit einer ehrlichen Einschätzung. Auch wenn sie lautet: Das lohnt sich nicht.`,
  callTitle: 'Lieber sprechen?',
  callText: '30 Minuten am Telefon oder per Video. Sie erzählen, ich frage nach. Danach wissen Sie, ob sich eine Automatisierung lohnt.',
};

export const HOME_WEEK_BLOCKS: WeekBlockLabel[] = [
  { day: 0, label: 'Angebot schreiben' },
  { day: 0, label: 'Beleg nachfordern' },
  { day: 0, label: 'Anfrage nachfassen' },
  { day: 1, label: 'Termin abstimmen' },
  { day: 1, label: 'Rechnung prüfen' },
  { day: 1, label: 'Aufmaß abtippen' },
  { day: 2, label: 'Exposé anpassen' },
  { day: 2, label: 'Angebot schreiben' },
  { day: 2, label: 'Mahnung schreiben' },
  { day: 3, label: 'Anfrage nachfassen' },
  { day: 3, label: 'Beleg nachfordern' },
  { day: 3, label: 'Termin abstimmen' },
  { day: 4, label: 'Rechnung prüfen' },
  { day: 4, label: 'Angebot nachfassen' },
  { day: 4, label: 'Ablage sortieren' },
  { day: 4, label: 'Exposé verschicken' },
];

/** Allgemeine Fragen, die auf jeder Landingpage nach den Branchenfragen stehen. */
const LANDING_FAQ_IDS = ['kosten', 'zeit', 'hype', 'danach', 'software'];
export const LANDING_GENERAL_FAQS: Faq[] = LANDING_FAQ_IDS.map((id) => FAQS.find((faq) => faq.id === id)).filter(
  (faq): faq is Faq => faq !== undefined,
);
