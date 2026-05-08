import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <div className="crumbs"><Link href="/">START</Link><span className="sep">/</span><span>IMPRESSUM</span></div>
          <div className="eyebrow" style={{ marginTop: 40 }}><span className="sect">§</span> IMPRESSUM</div>
          <h1 className="tight">Impressum.</h1>
        </div>
      </section>
      <section className="container">
        <div className="legal">
          <h2>Anbieter</h2>
          <p>Marco Gundlach<br />Zukunft. Automatisiert.<br />Postfach 12 04<br />22769 Hamburg<br />Deutschland</p>
          <h2>Kontakt</h2>
          <p>E-Mail: marco@zukunft-automatisiert.de<br />Telefon: +49 (0)40 — auf Anfrage</p>
          <h2>Umsatzsteuer-ID</h2>
          <p>DE 312 — auf Anfrage. Kleinunternehmer-Regelung wird nicht in Anspruch genommen.</p>
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>Marco Gundlach (Anschrift wie oben).</p>
          <h2>Streitschlichtung</h2>
          <p>Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
      </section>
    </main>
  );
}
