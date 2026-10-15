import type { MetadataRoute } from 'next';
import { getArticles } from '@/lib/db';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';
import { SITE } from '@/lib/content/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url;
  const now = new Date();
  const articles = await getArticles();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/ueber-mich`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/wissen`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
  ];

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${base}${industryHref(industry.slug)}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/wissen/${article.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticPages, ...industryPages, ...articlePages];
}
