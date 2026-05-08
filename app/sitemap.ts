import type { MetadataRoute } from 'next';
import { getServices, getCases, getArticles } from '@/lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://zukunft-automatisiert.de';
  const [services, cases, articles] = await Promise.all([getServices(), getCases(), getArticles()]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/leistungen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cases`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/wissen`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/ueber-mich`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/leistungen/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const casePages: MetadataRoute.Sitemap = cases.map(c => ({
    url: `${base}/cases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map(a => ({
    url: `${base}/wissen/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...casePages, ...articlePages];
}
