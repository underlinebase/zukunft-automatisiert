import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getService, getServices } from '@/lib/db';
import FAQ from '@/components/faq';
import RevealLines from '@/components/reveal-lines';

export async function generateStaticParams() {
  const services = await getServices();
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = await getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.teaser,
    alternates: { canonical: `/leistungen/${slug}` },
  };
}

export default async function LeistungDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = await getService(slug);
  if (!s) notFound();

  return (
    <main className="page">
      <RevealLines />
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">START</Link><span className="sep">/</span>
            <Link href="/leistungen">LEISTUNGEN</Link><span className="sep">/</span>
            <span>{s.title.toUpperCase()}</span>
          </div>
          <div className="eyebrow" style={{ marginTop: 40 }}><span className="sect">§</span> {s.idx} — {s.title.toUpperCase()}</div>
          <h1 className="tight">{s.teaser.split('.')[0]}.</h1>
          <p className="lead">{s.teaser}</p>
          <div style={{ marginTop: 40 }}>
            <Link className="btn btn--primary" href="/kontakt">
              Diagnose-Termin buchen <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="svc-overview">
          <aside className="svc-overview__side">
            <div>INHALT</div>
            <ul>
              <li><a href="#problem">01 — Problem</a></li>
              <li><a href="#vorgehen">02 — Vorgehen</a></li>
              <li><a href="#deliverable">03 — Deliverables</a></li>
              <li><a href="#investment">04 — Investment</a></li>
              <li><a href="#faq">05 — FAQ</a></li>
            </ul>
          </aside>

          <div>
            <div className="svc-block" id="problem">
              <div className="eyebrow"><span className="sect">§</span> 01 — PROBLEM</div>
              <h2 className="tight" style={{ marginTop: 16 }}>{s.problem}</h2>
            </div>

            <div className="svc-block" id="vorgehen">
              <div className="eyebrow"><span className="sect">§</span> 02 — VORGEHEN</div>
              <h2 className="tight" style={{ marginTop: 16 }}>Vier Schritte. Linear, nicht zirkulär.</h2>
              <div className="steps-tech">
                {s.steps.map((step, i) => (
                  <div className="step-tech" key={i}>
                    <div className="num">{step.num}</div>
                    <div><h4>{step.h}</h4><p>{step.p}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="svc-block" id="deliverable">
              <div className="eyebrow"><span className="sect">§</span> 03 — DELIVERABLES</div>
              <h2 className="tight" style={{ marginTop: 16 }}>Was Sie nach Übergabe in der Hand halten.</h2>
              <div className="deliverables" style={{ marginTop: 32 }}>
                {s.delivers.map((d, i) => (
                  <div className="deliverable" key={i}>
                    <div className="meta">{d.meta}</div>
                    <h4>{d.h}</h4>
                    <p>{d.p}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="svc-block" id="investment">
              <div className="eyebrow"><span className="sect">§</span> 04 — INVESTMENT</div>
              <h2 className="tight" style={{ marginTop: 16 }}>Transparent in Euro. Kein „auf Anfrage".</h2>
              <p className="muted" style={{ marginTop: 16 }}>
                Premium signalisiert man durch Transparenz, nicht durch Verschleierung.
              </p>
              <div className="invest-card">
                {s.invest.map((it, i) => (
                  <div key={i}><div className="k">{it.k}</div><div className="v">{it.v}</div></div>
                ))}
              </div>
            </div>

            <div className="svc-block" id="faq">
              <div className="eyebrow"><span className="sect">§</span> 05 — FAQ</div>
              <h2 className="tight" style={{ marginTop: 16, marginBottom: 32 }}>Häufig gestellt.</h2>
              <FAQ items={s.faq} />
            </div>

            <div className="svc-block" style={{ borderBottom: '1px solid var(--hairline)' }}>
              <div className="grid-12">
                <div className="col-span-7">
                  <h2 className="tight">Eingriff buchen.</h2>
                  <p className="muted">30 Minuten Erstgespräch. Anschließend entscheiden Sie, ob eine Diagnose folgt.</p>
                </div>
                <div className="col-span-5" style={{ display: 'flex', alignItems: 'end', gap: 16, flexWrap: 'wrap' }}>
                  <Link className="btn btn--primary" href="/kontakt">Termin buchen <span className="arr">→</span></Link>
                  <Link className="btn" href="/leistungen">Andere Leistungen</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
