import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCase, getCases } from '@/lib/db';

export async function generateStaticParams() {
  const cases = await getCases();
  return cases.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCase(slug);
  if (!c) return {};
  return {
    title: `Operations-Bericht № ${c.idx} - ${c.headline_label}`,
    description: c.diagnose.slice(0, 160),
    alternates: { canonical: `/cases/${slug}` },
  };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [c, allCases] = await Promise.all([getCase(slug), getCases()]);
  if (!c) notFound();
  const idx = allCases.findIndex(x => x.slug === slug);
  const next = allCases[(idx + 1) % allCases.length];

  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">START</Link><span className="sep">/</span>
            <Link href="/cases">CASES</Link><span className="sep">/</span>
            <span>№ {c.idx}</span>
          </div>
          <div className="eyebrow" style={{ marginTop: 40 }}>
            <span className="sect">§</span> OPERATIONS-BERICHT № {c.idx}
          </div>
          <h1 className="tight">{c.headline_label}.</h1>
          <div style={{ display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap', alignItems: 'baseline' }}>
            <span className="mono" style={{ fontSize: 14 }}>BRANCHE · {c.industry.toUpperCase()}</span>
            <span className="mono" style={{ fontSize: 14, color: 'var(--steel)' }}>GRÖSSE · {c.size}</span>
            <span className="mono" style={{ fontSize: 14, color: 'var(--steel)' }}>STATUS · ÜBERGEBEN</span>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="bericht">
          <div className="bericht__label">PATIENT</div>
          <p className="muted" style={{ margin: 0 }}>
            {c.industry}, {c.size}. Anonymisiert auf Wunsch des Mandanten.
          </p>
        </div>
        <div className="bericht__row">
          <div className="bericht__label">DIAGNOSE</div>
          <div><h3>Was wir vorgefunden haben.</h3><p style={{ marginTop: 16 }}>{c.diagnose}</p></div>
        </div>
        <div className="bericht__row">
          <div className="bericht__label">EINGRIFF</div>
          <div>
            <h3>Was wir verändert haben.</h3>
            <ul style={{ marginTop: 16 }}>{c.eingriff.map((e, i) => <li key={i}>{e}</li>)}</ul>
          </div>
        </div>
        <div className="bericht__row">
          <div className="bericht__label">ERGEBNIS</div>
          <div>
            <h3>Was messbar geblieben ist.</h3>
            <div style={{ margin: '24px 0', fontFamily: 'Geist Mono, monospace', fontSize: 'clamp(48px, 6vw, 96px)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--surgical)' }}>
              {c.headline}
            </div>
            <ul>{c.ergebnis.map((e, i) => <li key={i}>{e}</li>)}</ul>
          </div>
        </div>
        <div className="bericht__row">
          <div className="bericht__label">ZITAT</div>
          <blockquote className="bericht__quote" style={{ margin: 0, padding: 0, border: 0 }}>
            {c.quote}
            <cite className="source">{c.source}</cite>
          </blockquote>
        </div>
      </section>

      <section className="section section--alt" style={{ marginTop: 64 }}>
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'end' }}>
            <div className="col-span-6">
              <div className="eyebrow"><span className="sect">§</span> NÄCHSTER BERICHT</div>
              <Link href={`/cases/${next.slug}`} style={{ display: 'block', marginTop: 24 }}>
                <h2 className="tight">{next.headline_label}</h2>
                <div className="mono muted" style={{ marginTop: 16 }}>№ {next.idx} · {next.industry.toUpperCase()} · {next.size}</div>
              </Link>
            </div>
            <div className="col-span-6" style={{ textAlign: 'right' }}>
              <Link className="btn btn--primary" href="/kontakt">Eigenen Bericht starten <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
