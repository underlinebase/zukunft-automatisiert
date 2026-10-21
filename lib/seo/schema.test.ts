import { describe, expect, test } from 'vitest';
import { SITE } from '@/lib/content/site';
import { ARTICLES } from '@/lib/content/articles';
import {
  ablaufSchema,
  articleSchema,
  breadcrumbSchema,
  graph,
  offerSchema,
  organizationSchema,
  personSchema,
  webPageSchema,
  websiteSchema,
} from './schema';

type Node = Record<string, unknown>;

const WEBSITE_ID = `${SITE.url}/#website`;
const ORG_ID = `${SITE.url}/#organisation`;
const PERSON_ID = `${SITE.url}/#marco-gundlach`;

function nodesOf(data: Node): Node[] {
  return data['@graph'] as Node[];
}

describe('graph', () => {
  test('always contains website, organisation and person exactly once', () => {
    const nodes = nodesOf(graph(organizationSchema(), personSchema(), breadcrumbSchema([{ name: 'Start', path: '/' }])));
    const ids = nodes.map((node) => node['@id']);
    [WEBSITE_ID, ORG_ID, PERSON_ID].forEach((id) => expect(ids.filter((value) => value === id)).toHaveLength(1));
  });
});

describe('organizationSchema', () => {
  test('is an online business with legal name, logo and contact point, without street address', () => {
    const org = organizationSchema();
    expect(org['@type']).toBe('OnlineBusiness');
    expect(org.legalName).toBe('SEOLOAD LLC');
    expect(org.logo).toMatchObject({ '@type': 'ImageObject', url: `${SITE.url}/logo.png` });
    expect(org.contactPoint).toMatchObject({ email: SITE.email });
    expect(org).not.toHaveProperty('address');
  });

  test('keeps the personal LinkedIn profile on the person, not on the business', () => {
    expect(organizationSchema()).not.toHaveProperty('sameAs');
    expect(personSchema().sameAs).toContain(SITE.linkedin);
  });
});

describe('websiteSchema', () => {
  test('names alternate spellings for the site name', () => {
    expect(websiteSchema().alternateName).toContain('Zukunft Automatisiert');
  });
});

describe('breadcrumbSchema', () => {
  test('gets an id derived from the current page', () => {
    const crumbs = breadcrumbSchema([{ name: 'Start', path: '/' }, { name: 'Garantie', path: '/garantie' }]);
    expect(crumbs['@id']).toBe(`${SITE.url}/garantie#breadcrumb`);
  });
});

describe('webPageSchema', () => {
  test('links page, website, breadcrumb and main entity', () => {
    const page = webPageSchema({ path: '/ki-beratung', name: 'KI-Beratung', description: 'Text', mainEntity: `${SITE.url}/ki-beratung#leistung` });
    expect(page).toMatchObject({
      '@type': 'WebPage',
      '@id': `${SITE.url}/ki-beratung#seite`,
      url: `${SITE.url}/ki-beratung`,
      isPartOf: { '@id': WEBSITE_ID },
      breadcrumb: { '@id': `${SITE.url}/ki-beratung#breadcrumb` },
      mainEntity: { '@id': `${SITE.url}/ki-beratung#leistung` },
      inLanguage: 'de-DE',
    });
  });

  test('leaves out the breadcrumb on the homepage', () => {
    const page = webPageSchema({ path: '/', name: 'Start', description: 'Text', about: ORG_ID, breadcrumb: false });
    expect(page).not.toHaveProperty('breadcrumb');
    expect(page.about).toEqual({ '@id': ORG_ID });
  });
});

describe('articles and Abläufe', () => {
  test('articles point to their page and the website by id', () => {
    const article = articleSchema(ARTICLES[0]);
    const url = `${SITE.url}/wissen/${ARTICLES[0].slug}`;
    expect(article.mainEntityOfPage).toEqual({ '@id': `${url}#seite` });
    expect(article.isPartOf).toEqual({ '@id': WEBSITE_ID });
  });

  test('Abläufe carry an image and point to their page', () => {
    const ablauf = ablaufSchema({ slug: 'x', title: 'X', lead: 'Y', datePublished: '2026-10-19' }, '/ablaeufe/x');
    expect(typeof ablauf.image).toBe('string');
    expect(ablauf.mainEntityOfPage).toEqual({ '@id': `${SITE.url}/ablaeufe/x#seite` });
  });
});

describe('offerSchema', () => {
  test('adds the visible pilot price only when asked to', () => {
    const base = { name: 'KI-Beratung', serviceType: 'KI-Beratung', description: 'Text', audience: 'Inhaber', path: '/ki-beratung' };
    expect(offerSchema(base)).not.toHaveProperty('offers');
    expect(offerSchema({ ...base, pilotOffer: true }).offers).toMatchObject({ price: '1999', priceCurrency: 'EUR' });
  });
});
