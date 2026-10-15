// Strukturierte Daten (schema.org, JSON-LD). Alles hier muss zum sichtbaren Seiteninhalt passen.

import { SITE } from '@/lib/content/site';
import { CREDENTIALS } from '@/lib/content/about';
import type { Faq, Industry } from '@/lib/content/types';

type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organisation`;
const PERSON_ID = `${SITE.url}/#marco-gundlach`;
const AREA_SERVED = ['Deutschland', 'Österreich', 'Schweiz'].map((name) => ({ '@type': 'Country', name }));

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
    founder: { '@id': PERSON_ID },
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

export function graph(...nodes: JsonLd[]): JsonLd {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
