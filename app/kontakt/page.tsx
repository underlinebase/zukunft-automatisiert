import type { Metadata } from 'next';
import { SITE } from '@/lib/content/site';
import InquiryForm from '@/components/sections/inquiry-form';
import JsonLd from '@/components/seo/json-ld';
import { pageMetadata } from '@/lib/seo/meta';
import { breadcrumbSchema, contactPageSchema, graph, organizationSchema } from '@/lib/seo/schema';
import Breadcrumbs from '@/components/layout/breadcrumbs';

export const metadata: Metadata = pageMetadata({
  title: 'Kontakt: Ablauf schildern oder 30 Minuten sprechen',
  description:
    'Schildern Sie mir Ihren Ablauf in drei Sätzen oder buchen Sie ein Gespräch über 30 Minuten. Antwort innerhalb von 24 Stunden. Remote in ganz Deutschland.',
  path: '/kontakt',
});

const SCHEMA = graph(
  contactPageSchema(),
  organizationSchema(),
  breadcrumbSchema([
    { name: 'Start', path: '/' },
    { name: 'Kontakt', path: '/kontakt' },
  ]),
);

const BOOKING_EMBED = `${SITE.calUrl}?embed=true&theme=light&layout=month_view&locale=de`;

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <Breadcrumbs items={[{ name: 'Kontakt' }]} />
          <span className="label">Kontakt</span>
          <h1>Schildern Sie mir Ihren Ablauf.</h1>
          <p className="lead">
            Drei Sätze reichen. Ich antworte innerhalb von {SITE.responseTime} mit einer ehrlichen Einschätzung. Lieber
            sprechen? Dann buchen Sie direkt 30 Minuten.
          </p>
        </div>
      </section>

      <section className="container contact-page">
        <InquiryForm headingLevel={2} />
        <div className="contact-page__call">
          <h2>30 Minuten sprechen</h2>
          <p className="muted">Am Telefon oder per Video. Sie erzählen, ich frage nach. Danach wissen Sie, ob sich eine Automatisierung lohnt.</p>
          <dl className="contact-channels">
            <div>
              <dt>E-Mail</dt>
              <dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/marcogundlach</a></dd>
            </div>
            <div>
              <dt>Antwort</dt>
              <dd>Innerhalb von {SITE.responseTime}</dd>
            </div>
          </dl>
          <div className="booking">
            <iframe src={BOOKING_EMBED} loading="lazy" title="30-Minuten-Termin bei Marco Gundlach buchen" />
          </div>
        </div>
      </section>
    </>
  );
}
