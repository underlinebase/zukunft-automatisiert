import type { Metadata } from 'next';
import Link from 'next/link';
import KontaktBooking from '@/components/kontakt-booking';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Erstgespräch buchen. 30 Minuten. Keine Folien. Direkt über Kalender, E-Mail oder LinkedIn.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">START</Link><span className="sep">/</span><span>KONTAKT</span>
          </div>
          <div className="eyebrow" style={{ marginTop: 40 }}><span className="sect">§</span> KONTAKT</div>
          <h1 className="tight">Erstgespräch. 30 Minuten. Keine Folien.</h1>
          <p className="lead">
            Wir sprechen über Ihren Engpass. Sie entscheiden danach, ob eine Diagnose folgt.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="kontakt">
          <div className="kontakt__alt">
            <div className="eyebrow"><span className="sect">§</span> KANÄLE</div>
            <h2 className="tight">Drei Wege. Empfohlen ist Kalender.</h2>
            <div className="channels">
              {[
                { k: 'KALENDER', v: 'cal.com/marco-g-ppa25o', href: 'https://cal.com/marco-g-ppa25o' },
                { k: 'E-MAIL', v: 'marco@zukunft-automatisiert.de' },
                { k: 'LINKEDIN', v: 'linkedin.com/in/marcogundlach', href: 'https://www.linkedin.com/in/marcogundlach/' },
                { k: 'POST', v: 'M. Gundlach · Postfach 12 04 · 22769 Hamburg' },
                { k: 'REAKTION', v: '≤ 48 Std. Werktags.' },
              ].map((c, i) => (
                <div className="channel" key={i}>
                  <div className="k">{c.k}</div>
                  <div className="v">
                    {(c as { k: string; v: string; href?: string }).href
                      ? <a href={(c as { href: string }).href} target="_blank" rel="noreferrer">{c.v}</a>
                      : c.v}
                  </div>
                </div>
              ))}
            </div>
            <p className="muted" style={{ marginTop: 16, fontSize: 14 }}>Kein Kontaktformular. Niemand füllt das aus, der nicht muss.</p>
          </div>
          <KontaktBooking />
        </div>
      </section>
    </main>
  );
}
