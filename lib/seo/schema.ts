// Strukturierte Daten (schema.org, JSON-LD). Alles hier muss zum sichtbaren Seiteninhalt passen.

import { SITE } from '@/lib/content/site';
import { CREDENTIALS } from '@/lib/content/about';
import type { Faq, Industry } from '@/lib/content/types';
import type { Article } from '@/lib/types';

type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organisation`;
const PERSON_ID = `${SITE.url}/#marco-gundlach`;
const AREA_SERVED = ['Deutschland'].map((name) => ({ '@type': 'Country', name }));
const LANGUAGE = 'de-DE';
/** Themen, für die Person und Angebot stehen. Hilft Suchmaschinen und KI-Assistenten bei der Einordnung. */
const KNOWS_ABOUT = [
  'Prozessautomatisierung',
  'Workflow-Automatisierung',
  'n8n',
  'Künstliche Intelligenz im Mittelstand',
  'Digitalisierung kleiner Betriebe',
];

export function organizationSchema(): JsonLd {
  return {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description:
      'Prozessautomatisierung für Inhaber: Der Ablauf, der am meisten Zeit kostet, wird in 4 Wochen automatisiert, zum Festpreis und mit Garantie.',
    areaServed: AREA_SERVED,
    image: `${SITE.url}/opengraph-image`,
    sameAs: [SITE.linkedin],
    knowsAbout: KNOWS_ABOUT,
    founder: { '@id': PERSON_ID },
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: LANGUAGE,
    publisher: { '@id': ORG_ID },
  };
}

export function personSchema(): JsonLd {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.owner,
    jobTitle: 'KI-Berater und Automatisierungs-Architekt',
    description: 'Der KI-Realist: automatisiert Abläufe für Inhaber und sagt offen, wo KI hilft und wo nicht.',
    url: `${SITE.url}/ueber-mich`,
    image: `${SITE.url}/marco-gundlach-portrait.jpg`,
    sameAs: [SITE.linkedin],
    homeLocation: { '@type': 'Place', name: SITE.location },
    worksFor: { '@id': ORG_ID },
    knowsAbout: KNOWS_ABOUT,
    hasCredential: CREDENTIALS.map((credential) => ({
      '@type': 'EducationalOccupationalCredential',
      name: credential.name,
      recognizedBy: { '@type': 'Organization', name: credential.issuer },
    })),
  };
}

export function serviceSchema(industry: Industry, path: string): JsonLd {
  return {
    '@type': 'Service',
    '@id': `${SITE.url}${path}#leistung`,
    name: industry.seo.serviceType,
    serviceType: industry.seo.serviceType,
    description: industry.seo.description,
    url: `${SITE.url}${path}`,
    provider: { '@id': ORG_ID },
    areaServed: AREA_SERVED,
    audience: { '@type': 'BusinessAudience', name: industry.audience },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: readonly Faq[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function articleSchema(article: Article): JsonLd {
  const url = `${SITE.url}/wissen/${article.slug}`;
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#artikel`,
    headline: article.title,
    description: article.lead,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    inLanguage: LANGUAGE,
    articleSection: article.category,
    url,
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
  };
}

/** Übersichtsseite „Wissen“ mit allen Artikeln. */
export function collectionSchema(articles: readonly Article[]): JsonLd {
  return {
    '@type': 'CollectionPage',
    '@id': `${SITE.url}/wissen#seite`,
    name: 'Wissen: Notizen aus der Praxis',
    url: `${SITE.url}/wissen`,
    inLanguage: LANGUAGE,
    author: { '@id': PERSON_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: article.title,
        url: `${SITE.url}/wissen/${article.slug}`,
      })),
    },
  };
}

export function contactPageSchema(): JsonLd {
  return {
    '@type': 'ContactPage',
    '@id': `${SITE.url}/kontakt#seite`,
    name: 'Kontakt',
    url: `${SITE.url}/kontakt`,
    inLanguage: LANGUAGE,
    about: { '@id': ORG_ID },
  };
}

/** „Über mich“ als Profilseite der Person. */
export function profilePageSchema(): JsonLd {
  return {
    '@type': 'ProfilePage',
    '@id': `${SITE.url}/ueber-mich#seite`,
    url: `${SITE.url}/ueber-mich`,
    inLanguage: LANGUAGE,
    mainEntity: { '@id': PERSON_ID },
  };
}

export function graph(...nodes: JsonLd[]): JsonLd {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
