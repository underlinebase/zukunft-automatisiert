export interface ArticleBlock {
  kind: 'p' | 'h2' | 'q';
  text: string;
}

/** Kategorien liegen in den Altdaten in Versalien vor („METHODIK“). Für die Anzeige normal schreiben. */
export function formatCategory(category: string): string {
  const lower = category.toLocaleLowerCase('de-DE');
  return lower.charAt(0).toLocaleUpperCase('de-DE') + lower.slice(1);
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
