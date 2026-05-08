import type { Metadata } from 'next';
import Link from 'next/link';
import { getServices } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Drei klar abgegrenzte Eingriffe: Prozess-Diagnose, Automatisierung mit n8n und Unternehmensgedächtnis.',
  alternates: { canonical: '/leistungen' },
};

export default async function LeistungenPage() {
  const services = await getServices();
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">START</Link>
            <span className="sep">/</span>
            <span>LEISTUNGEN</span>
          </div>
          <div className="eyebrow" style={{ marginTop: 40 }}><span className="sect">§</span> LEISTUNGEN</div>
          <h1 className="tight">Drei Eingriffe. Klar abgegrenzt. Häufig in dieser Reihenfolge.</h1>
          <p className="lead">
            Sie buchen, was Sie brauchen — Diagnose, Implementation, oder ein laufendes Gedächtnis-Mandat.
            Jeder Eingriff hat eine eigene Sub-Page mit Vorgehen, Deliverables und Investment-Range.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-overview-list">
            {services.map((s) => (
              <Link key={s.slug} className="svc-overview-row" href={`/leistungen/${s.slug}`}>
                <div className="idx">{s.idx} /</div>
                <div>
                  <h2 className="tight">{s.title}</h2>
                  <p>{s.teaser}</p>
                </div>
                <div className="meta">
                  <div>DAUER · {s.duration.toUpperCase()}</div>
                  <div>INVESTMENT · {s.investment.toUpperCase()}</div>
                  <div>OUTPUT · {s.deliverables.toUpperCase()}</div>
                </div>
                <div className="arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="grid-12">
            <div className="col-span-7">
              <div className="eyebrow"><span className="sect">§</span> EMPFOHLENE REIHENFOLGE</div>
              <h2 className="tight" style={{ marginTop: 24 }}>
                Diagnose zuerst. Implementation, wenn der Plan steht. Gedächtnis, wenn das Wissen wachsen soll.
              </h2>
            </div>
            <div className="col-span-5 muted" style={{ alignSelf: 'end' }}>
              <p>
                Wir empfehlen, ohne abgeschlossene Diagnose nicht direkt in eine Implementation zu gehen. Der häufigste
                Grund für gescheiterte Automatisierung ist nicht die Technik — es ist der falsch priorisierte Eingriff.
              </p>
              <Link className="link-mono" href="/kontakt">
                Diagnose buchen <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
