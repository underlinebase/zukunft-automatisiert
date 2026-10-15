import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/content/site';
import InquiryForm from '@/components/sections/inquiry-form';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Schildern Sie Ihren Ablauf in drei Sätzen oder buchen Sie 30 Minuten. Antwort in 24 Stunden.',
  alternates: { canonical: '/kontakt' },
};

const BOOKING_EMBED = `${SITE.calUrl}?embed=true&theme=light&layout=month_view&locale=de`;

export default function KontaktPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <nav className="crumbs" aria-label="Brotkrumen"><Link href="/">Start</Link><span aria-hidden="true">/</span><span>Kontakt</span></nav>
          <span className="label">Kontakt</span>
          <h1>Schildern Sie mir Ihren Ablauf.</h1>
          <p className="lead">
            Drei Sätze reichen. Ich antworte innerhalb von {SITE.responseTime} mit einer ehrlichen Einschätzung. Lieber
            sprechen? Dann buchen Sie direkt 30 Minuten.
          </p>
        </div>
      </section>

      <section className="container contact-page">
        <InquiryForm />
        <div>
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
