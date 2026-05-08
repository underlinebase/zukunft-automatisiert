export interface ServiceStep {
  num: string;
  h: string;
  p: string;
}

export interface ServiceDeliverable {
  meta: string;
  h: string;
  p: string;
}

export interface ServiceInvest {
  k: string;
  v: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  id: number;
  slug: string;
  idx: string;
  title: string;
  teaser: string;
  duration: string;
  investment: string;
  deliverables: string;
  problem: string;
  steps: ServiceStep[];
  delivers: ServiceDeliverable[];
  invest: ServiceInvest[];
  faq: ServiceFaq[];
}

export interface Case {
  id: number;
  slug: string;
  idx: string;
  industry: string;
  size: string;
  headline: string;
  headline_label: string;
  diagnose: string;
  eingriff: string[];
  ergebnis: string[];
  quote: string;
  source: string;
}

export interface ArticleBlock {
  kind: 'p' | 'h2' | 'q';
  text: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  date: string;
  read_minutes: number;
  category: string;
  lead: string;
  body: ArticleBlock[];
  notes: string[];
}

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  body: string;
}
