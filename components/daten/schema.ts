// Strukturierte Daten für /ki-im-kleinbetrieb: Artikel mit Quellenangaben, FAQ und Brotkrumen.
// Kein Dataset: Die Seite sammelt fremde Zahlen ein, sie veröffentlicht keine eigenen Rohdaten.

import { DATEN_FAQS, DATEN_HERO, DATEN_STAND, SOURCES } from '@/lib/content/daten';
import { DATEN_PAGE } from '@/lib/content/pages';
import { SITE } from '@/lib/content/site';
import { breadcrumbSchema, faqSchema, graph, organizationSchema, personSchema } from '@/lib/seo/schema';

type JsonLd = Record<string, unknown>;

const PAGE_URL = `${SITE.url}${DATEN_PAGE.path}`;

function datenArticleSchema(): JsonLd {
  return {
    '@type': 'Article',
    '@id': `${PAGE_URL}#artikel`,
    headline: DATEN_HERO.title,
    description: DATEN_PAGE.description,
    datePublished: DATEN_STAND.iso,
    dateModified: DATEN_STAND.iso,
    inLanguage: 'de-DE',
    url: PAGE_URL,
    mainEntityOfPage: PAGE_URL,
    image: `${SITE.url}/opengraph-image`,
    author: { '@id': `${SITE.url}/#marco-gundlach` },
    publisher: { '@id': `${SITE.url}/#organisation` },
    about: ['Künstliche Intelligenz', 'Kleine und mittlere Unternehmen', 'Handwerk'],
    citation: SOURCES.map((source) => ({
      '@type': 'CreativeWork',
      name: source.title,
      url: source.url,
      publisher: { '@type': 'Organization', name: source.publisher },
    })),
  };
}

export function datenSchema(): JsonLd {
  return graph(
    datenArticleSchema(),
    personSchema(),
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: 'Wissen', path: '/wissen' },
      { name: DATEN_PAGE.name, path: DATEN_PAGE.path },
    ]),
    faqSchema(DATEN_FAQS),
  );
}
