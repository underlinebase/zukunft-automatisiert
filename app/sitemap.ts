import type { MetadataRoute } from 'next';
import { getArticles } from '@/lib/db';
import { INDUSTRIES, industryHref } from '@/lib/content/branchen';
import { SITE, SITE_UPDATED } from '@/lib/content/site';
import { KI_BERATUNG_PATH } from '@/lib/content/ki-beratung';
import { listedPages } from '@/lib/content/pages';
import { ablaufHref, publishedAblaeufe } from '@/lib/content/ablaeufe';
import { freigegebeneVorlagen, vorlageHref } from '@/lib/content/vorlagen';

// Stündlich neu erzeugen, damit geplante Artikel am Erscheinungstag auftauchen.
export const revalidate = 3600;

/** Das spätere von zwei ISO-Daten (JJJJ-MM-TT). */
function laterDate(a: string, b: string): string {
  return a > b ? a : b;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url;
  const articles = await getArticles();
  // Echte Inhaltsdaten statt Build-Zeit: Ein ständig wechselndes Datum ignorieren Suchmaschinen.
  const latestArticle = articles.map((article) => article.dateModified ?? article.datePublished).sort().at(-1);

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}${KI_BERATUNG_PATH}`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ueber-mich`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/wissen`, lastModified: latestArticle, changeFrequency: 'weekly', priority: 0.6 },
  ];

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${base}${industryHref(industry.slug)}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/wissen/${article.slug}`,
    lastModified: article.dateModified ?? article.datePublished,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  const extraPages: MetadataRoute.Sitemap = listedPages().map((page) => ({
    url: `${base}${page.path}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: page.priority,
  }));

  const ablaufPages: MetadataRoute.Sitemap = publishedAblaeufe().map((ablauf) => ({
    url: `${base}${ablaufHref(ablauf.slug)}`,
    // Seitenaufbau und Texte ändern sich für alle Abläufe gemeinsam; später erschienene behalten ihr Erscheinungsdatum.
    lastModified: laterDate(ablauf.datePublished, SITE_UPDATED),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  const vorlagePages: MetadataRoute.Sitemap = freigegebeneVorlagen().map((vorlage) => ({
    url: `${base}${vorlageHref(vorlage.slug)}`,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticPages, ...extraPages, ...industryPages, ...articlePages, ...ablaufPages, ...vorlagePages];
}
