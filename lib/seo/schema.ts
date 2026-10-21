// Strukturierte Daten (schema.org, JSON-LD). Alles hier muss zum sichtbaren Seiteninhalt passen.

import { SITE } from '@/lib/content/site';
import { CREDENTIALS } from '@/lib/content/about';
import type { Faq, Industry } from '@/lib/content/types';
import type { Article } from '@/lib/types';

type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organisation`;
const PERSON_ID = `${SITE.url}/#marco-gundlach`;
const WEBSITE_ID = `${SITE.url}/#website`;
/** Betreiber laut Impressum. Bewusst ohne Anschrift: kein Standort in Deutschland, Arbeit remote. */
const LEGAL_NAME = 'SEOLOAD LLC';
const LOGO = { path: '/logo.png', size: 512 };
const PILOT_PRICE = '1999';
/** Platzhalter-Bild für Seiten ohne eigenes OG-Bild. */
const DEFAULT_IMAGE = `${SITE.url}/opengraph-image`;
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
    // OnlineBusiness statt ProfessionalService: Letzteres ist ein LocalBusiness und verlangt eine Anschrift.
    '@type': 'OnlineBusiness',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: LEGAL_NAME,
    url: SITE.url,
    email: SITE.email,
    logo: { '@type': 'ImageObject', url: `${SITE.url}${LOGO.path}`, width: LOGO.size, height: LOGO.size },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE.email,
      availableLanguage: 'de',
      areaServed: 'DE',
    },
    description:
      'Prozessautomatisierung für Inhaber: Der Ablauf, der am meisten Zeit kostet, wird in 4 Wochen automatisiert, zum Festpreis und mit Garantie.',
    areaServed: AREA_SERVED,
    image: DEFAULT_IMAGE,
    knowsAbout: KNOWS_ABOUT,
    founder: { '@id': PERSON_ID },
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    alternateName: ['Zukunft Automatisiert', 'zukunft-automatisiert.de'],
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
    sameAs: [SITE.linkedin, SITE.personalSite],
    worksFor: { '@id': ORG_ID },
    knowsAbout: KNOWS_ABOUT,
    hasCredential: CREDENTIALS.map((credential) => ({
      '@type': 'EducationalOccupationalCredential',
      name: credential.name,
      recognizedBy: { '@type': 'Organization', name: credential.issuer },
    })),
  };
}

export interface ServiceInfo {
  name: string;
  serviceType: string;
  description: string;
  audience: string;
  path: string;
  /** Nur wo der Pilotpreis sichtbar auf der Seite steht. */
  pilotOffer?: boolean;
}

function pilotOfferSchema(url: string): JsonLd {
  return {
    '@type': 'Offer',
    name: 'Pilotpreis (drei Pilotplätze)',
    price: PILOT_PRICE,
    priceCurrency: 'EUR',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: PILOT_PRICE, priceCurrency: 'EUR', valueAddedTaxIncluded: false },
    availability: 'https://schema.org/LimitedAvailability',
    url,
    seller: { '@id': ORG_ID },
  };
}

/** Leistung einer Seite (Hauptseite /ki-beratung oder Landingpage), angeboten von der Organisation. */
export function offerSchema(service: ServiceInfo): JsonLd {
  return {
    '@type': 'Service',
    '@id': `${SITE.url}${service.path}#leistung`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: `${SITE.url}${service.path}`,
    provider: { '@id': ORG_ID },
    areaServed: AREA_SERVED,
    audience: { '@type': 'BusinessAudience', name: service.audience },
    ...(service.pilotOffer ? { offers: pilotOfferSchema(`${SITE.url}${service.path}`) } : {}),
  };
}

export function serviceSchema(industry: Industry, path: string): JsonLd {
  return offerSchema({
    name: industry.seo.serviceType,
    serviceType: industry.seo.serviceType,
    description: industry.seo.description,
    audience: industry.audience,
    path,
  });
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  const current = items.at(-1)?.path ?? '/';
  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE.url}${current}#breadcrumb`,
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
    dateModified: article.dateModified ?? article.datePublished,
    inLanguage: LANGUAGE,
    articleSection: article.category,
    url,
    mainEntityOfPage: { '@id': `${url}#seite` },
    isPartOf: { '@id': WEBSITE_ID },
    image: `${url}/opengraph-image`,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
  };
}

/** Seite eines Ablaufs in der Ablauf-Bibliothek (Anleitung mit Rechenbeispiel). */
export function ablaufSchema(ablauf: { slug: string; title: string; lead: string; datePublished: string }, path: string): JsonLd {
  const url = `${SITE.url}${path}`;
  return {
    '@type': 'TechArticle',
    '@id': `${url}#ablauf`,
    headline: ablauf.title,
    description: ablauf.lead,
    datePublished: ablauf.datePublished,
    dateModified: ablauf.datePublished,
    inLanguage: LANGUAGE,
    url,
    mainEntityOfPage: { '@id': `${url}#seite` },
    isPartOf: { '@id': WEBSITE_ID },
    image: DEFAULT_IMAGE,
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
    description: 'Praxisartikel zu Automatisierung und KI im Kleinbetrieb, ohne Hype.',
    url: `${SITE.url}/wissen`,
    inLanguage: LANGUAGE,
    isPartOf: { '@id': WEBSITE_ID },
    breadcrumb: { '@id': `${SITE.url}/wissen#breadcrumb` },
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
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
    isPartOf: { '@id': WEBSITE_ID },
    breadcrumb: { '@id': `${SITE.url}/kontakt#breadcrumb` },
    about: { '@id': ORG_ID },
  };
}

/** „Über mich“ als Profilseite der Person. */
export function profilePageSchema(): JsonLd {
  return {
    '@type': 'ProfilePage',
    '@id': `${SITE.url}/ueber-mich#seite`,
    url: `${SITE.url}/ueber-mich`,
    name: `Über ${SITE.owner}`,
    inLanguage: LANGUAGE,
    isPartOf: { '@id': WEBSITE_ID },
    breadcrumb: { '@id': `${SITE.url}/ueber-mich#breadcrumb` },
    mainEntity: { '@id': PERSON_ID },
  };
}

export interface WebPageInfo {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'FAQPage';
  /** @id des Hauptinhalts, z. B. die Leistung oder der Artikel. */
  mainEntity?: string;
  /** @id dessen, worum es auf der Seite geht. */
  about?: string;
  /** false auf der Startseite, die keine Brotkrumen hat. */
  breadcrumb?: boolean;
}

/** Die Seite selbst: verbindet Website, Brotkrumen und Hauptinhalt im Graphen. */
export function webPageSchema(page: WebPageInfo): JsonLd {
  const url = page.path === '/' ? `${SITE.url}/` : `${SITE.url}${page.path}`;
  return {
    '@type': page.type ?? 'WebPage',
    '@id': `${url}#seite`,
    url,
    name: page.name,
    description: page.description,
    inLanguage: LANGUAGE,
    isPartOf: { '@id': WEBSITE_ID },
    ...(page.breadcrumb === false ? {} : { breadcrumb: { '@id': `${SITE.url}${page.path}#breadcrumb` } }),
    ...(page.mainEntity ? { mainEntity: { '@id': page.mainEntity } } : {}),
    ...(page.about ? { about: { '@id': page.about } } : {}),
  };
}

/**
 * Ein JSON-LD-Graph je Seite. Website, Organisation und Person stehen immer drin, damit jede Seite
 * für sich vollständig ist: Suchmaschinen lösen @id-Verweise nicht über Seiten hinweg auf.
 */
export function graph(...nodes: JsonLd[]): JsonLd {
  const core = [websiteSchema(), organizationSchema(), personSchema()];
  const ids = new Set(nodes.map((node) => node['@id']));
  const missing = core.filter((node) => !ids.has(node['@id']));
  return { '@context': 'https://schema.org', '@graph': [...nodes, ...missing] };
}
