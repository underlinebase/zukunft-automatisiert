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
