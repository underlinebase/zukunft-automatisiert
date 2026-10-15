// Inhaltstypen für Startseite und Branchenseiten.

export interface Fact {
  label: string;
  value: string;
  text: string;
}

export interface Scene {
  tag: string;
  title: string;
  text: string;
  hours: string;
}

export interface Principle {
  title: string;
  text: string;
}

export interface WeekStep {
  week: string;
  title: string;
  text: string;
  youGet: string;
  yourTime: string;
}

export interface ProcessStep {
  text: string;
  minutesBefore: number;
  /** Minuten, die nach der Automatisierung übrig bleiben. 0 = läuft komplett allein. */
  minutesAfter: number;
  afterText?: string;
  /** Was beim Inhaber bleibt, wenn minutesAfter > 0, z. B. „den Entwurf prüfen und freigeben“. */
  keeps?: string;
}

export interface BeforeAfterExample {
  title: string;
  context: string;
  perWeek: number;
  unit: string;
  steps: ProcessStep[];
}

export interface Faq {
  /** Feste Kennung, um allgemeine Fragen auf Landingpages gezielt einzubinden. */
  id?: string;
  q: string;
  a: string;
}

export interface Routine {
  title: string;
  text: string;
}

export interface TimeSink {
  label: string;
  min: number;
  max: number;
}

export interface RoutineDetail {
  title: string;
  today: string;
  after: string;
}

export interface WeekBlockLabel {
  day: 0 | 1 | 2 | 3 | 4;
  label: string;
}

export interface CalculatorDefaults {
  hoursPerWeek: number;
  hourlyRate: number;
}

export interface Industry {
  slug: string;
  name: string;
  short: string;
  /** z. B. „Handwerksbetriebe“ (für „Was ich für … automatisiere“) */
  audience: string;
  /** z. B. „Handwerksbetrieben“ (für „aus dem Alltag von …“) */
  audienceDative: string;
  trades: string;
  teaser: string;
  routines: Routine[];
  hero: {
    /** Suchbegriff, der als erste Zeile in der H1 steht (SEO), z. B. „Automatisierung für Handwerksbetriebe“. */
    kicker: string;
    title: string;
    lead: string;
  };
  /** Drei kurze Vorteile im Landingpage-Hero. */
  heroBenefits: string[];
  /** Zeitfresser der Branche in Stunden pro Woche (Spanne), für die Hero-Grafik. */
  timeSinks: TimeSink[];
  scenes: Scene[];
  /** Typische Abläufe mit Vergleich „heute“ und „danach“. */
  routineDetails: RoutineDetail[];
  example: BeforeAfterExample;
  calculator: CalculatorDefaults;
  /** Branchenspezifische Fragen; auf der Landingpage vor den allgemeinen Fragen. */
  faqs: Faq[];
  seo: {
    /** Seitentitel ohne Markenzusatz, höchstens etwa 55 Zeichen. */
    title: string;
    /** Meta-Beschreibung, höchstens etwa 155 Zeichen. */
    description: string;
    /** Bezeichnung der Dienstleistung für strukturierte Daten. */
    serviceType: string;
  };
}
