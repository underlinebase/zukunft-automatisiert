export interface ArticleBlock {
  kind: 'p' | 'h2' | 'q';
  text: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  /** Kürzerer Titel für Suchergebnisse, wenn die Überschrift über 60 Zeichen hat. */
  seoTitle?: string;
  /** Anzeige, z. B. „Oktober 2026“. */
  date: string;
  /** Veröffentlichung im ISO-Format (JJJJ-MM-TT). Liegt es in der Zukunft, bleibt der Artikel bis dahin verborgen. */
  datePublished: string;
  /** Letzte inhaltliche Überarbeitung (JJJJ-MM-TT), falls nach der Veröffentlichung. */
  dateModified?: string;
  read_minutes: number;
  category: string;
  lead: string;
  body: ArticleBlock[];
  notes: string[];
  /** Interne Links unter dem Artikel, z. B. zu passenden Landingpages oder Artikeln. */
  related?: ArticleLink[];
}

export interface ArticleLink {
  label: string;
  href: string;
}
