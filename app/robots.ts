import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/content/site';

/** Bereiche ohne Inhalt für Suchmaschinen (Formular-Endpunkte). */
const DISALLOW = ['/api/'];

/**
 * Such- und Antwortdienste, die ausdrücklich zugelassen sind. Ein eigener Block je Bot macht die Freigabe eindeutig,
 * auch für Crawler, die den Sternchen-Block nicht auswerten.
 */
const ALLOWED_BOTS = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      ...ALLOWED_BOTS.map((bot) => ({ userAgent: bot, allow: '/', disallow: DISALLOW })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
