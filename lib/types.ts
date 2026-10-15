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
  /** Veröffentlichung im ISO-Format (JJJJ-MM-TT), für strukturierte Daten und Sitemap. */
  datePublished: string;
  read_minutes: number;
  category: string;
  lead: string;
  body: ArticleBlock[];
  notes: string[];
}
