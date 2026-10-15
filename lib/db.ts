import type { Article } from './types';
import { ARTICLES } from './content/articles';

// Die Artikel liegen im Code (lib/content/articles.ts). Die Funktionen bleiben async,
// damit sich später eine externe Quelle (z. B. ein CMS) ohne Änderung der Seiten anbinden lässt.

export async function getArticles(): Promise<Article[]> {
  return ARTICLES;
}

export async function getArticle(slug: string): Promise<Article | null> {
  return ARTICLES.find((article) => article.slug === slug) ?? null;
}
