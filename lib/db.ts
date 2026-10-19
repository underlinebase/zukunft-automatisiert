import type { Article } from './types';
import { ARTICLES } from './content/articles';
import { publishedArticles } from './content/publishing';

// Die Artikel liegen im Code (lib/content/articles/). Die Funktionen bleiben async,
// damit sich später eine externe Quelle (z. B. ein CMS) ohne Änderung der Seiten anbinden lässt.
// Geplante Artikel (datePublished in der Zukunft) liefern sie nicht aus.

export async function getArticles(): Promise<Article[]> {
  return publishedArticles(ARTICLES);
}

export async function getArticle(slug: string): Promise<Article | null> {
  return publishedArticles(ARTICLES).find((article) => article.slug === slug) ?? null;
}
