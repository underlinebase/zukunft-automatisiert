import type { Metadata } from 'next';
import Link from 'next/link';
import { getCases } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Cases',
  description: 'Operations-Berichte aus laufenden und abgeschlossenen Mandaten. Anonymisiert, aber konkret.',
  alternates: { canonical: '/cases' },
};

export default async function CasesPage() {
  const cases = await getCases();
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">START</Link><span className="sep">/</span><span>CASES</span>
          </div>
          <div className="eyebrow" style={{ marginTop: 40 }}><span className="sect">§</span> CASES</div>
          <h1 className="tight">Was wir gebaut haben. Anonymisiert, aber konkret.</h1>
          <p className="lead">
            Operations-Berichte aus laufenden und abgeschlossenen Mandaten. Branche, Größe, Diagnose,
            Eingriff, Ergebnis. Alle Zahlen sind belegt und vor Veröffentlichung mit dem Mandanten freigegeben.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cases-list">
            {cases.map((c) => (
              <Link key={c.slug} className="case-row" href={`/cases/${c.slug}`}>
                <div className="idx">№ {c.idx}</div>
                <div className="branch">{c.industry.toUpperCase()} · {c.size}</div>
                <div className="head">{c.headline_label}</div>
                <div className="num">{c.headline}</div>
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
              <div className="eyebrow"><span className="sect">§</span> WAS NICHT HIER STEHT</div>
              <h2 className="tight" style={{ marginTop: 24 }}>
                Wir veröffentlichen nicht alles. Mandate mit kritischer Wettbewerbslage bleiben unter Verschluss.
              </h2>
            </div>
            <div className="col-span-5 muted" style={{ alignSelf: 'end' }}>
              <p>
                Auf Anfrage zeigen wir vergleichbare Cases im Erstgespräch unter NDA.
              </p>
              <Link className="link-mono" href="/kontakt">Erstgespräch buchen <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
