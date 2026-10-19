// Strukturierte Daten für /garantie: Die Seite beschreibt die Garantie zum Angebot von /ki-beratung.

import { GARANTIE_FAQS, GARANTIE_HERO } from '@/lib/content/garantie';
import { GUARANTEE } from '@/lib/content/home';
import { KI_BERATUNG_PATH, KI_BERATUNG_SEO } from '@/lib/content/ki-beratung';
import { GARANTIE_PAGE } from '@/lib/content/pages';
import { SITE } from '@/lib/content/site';
import { breadcrumbSchema, faqSchema, graph, offerSchema, organizationSchema, personSchema } from '@/lib/seo/schema';

type JsonLd = Record<string, unknown>;

const PAGE_URL = `${SITE.url}${GARANTIE_PAGE.path}`;
const SERVICE_ID = `${SITE.url}${KI_BERATUNG_PATH}#leistung`;
const ORG_ID = `${SITE.url}/#organisation`;

function garantiePageSchema(): JsonLd {
  return {
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#seite`,
    url: PAGE_URL,
    name: GARANTIE_HERO.title,
    description: GARANTIE_PAGE.description,
    inLanguage: 'de-DE',
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${PAGE_URL}#angebot` },
  };
}

/** Angebot mit Garantieversprechen. Ohne Preis: Der Festpreis wird nach dem Erstgespräch schriftlich genannt. */
function guaranteeOfferSchema(): JsonLd {
  return {
    '@type': 'Offer',
    '@id': `${PAGE_URL}#angebot`,
    url: PAGE_URL,
    itemOffered: { '@id': SERVICE_ID },
    offeredBy: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Deutschland' },
    warranty: {
      '@type': 'WarrantyPromise',
      name: GUARANTEE.title,
      description: GUARANTEE.points.map((point) => `${point.label}: ${point.text}`).join(' '),
    },
  };
}

export function garantieSchema(): JsonLd {
  return graph(
    garantiePageSchema(),
    guaranteeOfferSchema(),
    offerSchema({
      name: KI_BERATUNG_SEO.serviceName,
      serviceType: KI_BERATUNG_SEO.serviceType,
      description: KI_BERATUNG_SEO.description,
      audience: KI_BERATUNG_SEO.audience,
      path: KI_BERATUNG_PATH,
    }),
    organizationSchema(),
    personSchema(),
    breadcrumbSchema([
      { name: 'Start', path: '/' },
      { name: GARANTIE_PAGE.name, path: GARANTIE_PAGE.path },
    ]),
    faqSchema(GARANTIE_FAQS),
  );
}
