import type { MetadataRoute } from 'next';
import { getArticles } from '@/lib/db';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';
import { SITE } from '@/lib/content/site';
import { KI_BERATUNG_PATH } from '@/lib/content/ki-beratung';

// Stündlich neu erzeugen, damit geplante Artikel am Erscheinungstag auftauchen.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url;
  const articles = await getArticles();
  // Echte Inhaltsdaten statt Build-Zeit: Ein ständig wechselndes Datum ignorieren Suchmaschinen.
  const latestArticle = articles.map((article) => article.dateModified ?? article.datePublished).sort().at(-1);

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}${KI_BERATUNG_PATH}`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ueber-mich`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/kontakt`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/wissen`, lastModified: latestArticle, changeFrequency: 'weekly', priority: 0.6 },
  ];

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${base}${industryHref(industry.slug)}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/wissen/${article.slug}`,
    lastModified: article.dateModified ?? article.datePublished,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticPages, ...industryPages, ...articlePages];
}
