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
}

export interface BeforeAfterExample {
  title: string;
  context: string;
  perWeek: number;
  unit: string;
  steps: ProcessStep[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface Routine {
  title: string;
  text: string;
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
    eyebrow: string;
    title: string;
    lead: string;
  };
  scenes: Scene[];
  moreRoutines: Routine[];
  example: BeforeAfterExample;
  weekBlocks: WeekBlockLabel[];
  calculator: CalculatorDefaults;
  metaDescription: string;
}
