import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticles, getCases } from '@/lib/db';
import WorkflowSVG from '@/components/workflow-svg';
import LiveTicker from '@/components/live-ticker';
import NumberCounter from '@/components/number-counter';
import NewsletterForm from '@/components/newsletter-form';
import RevealLines from '@/components/reveal-lines';
import MethodSketch from '@/components/method-sketch';

export const metadata: Metadata = {
  title: 'Zukunft. Automatisiert. — Prozess-Surgeon für Mittelständler',
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  const [articles, cases] = await Promise.all([getArticles(), getCases()]);
  const topCases = cases.slice(0, 3);

  return (
    <main className="page">
      <RevealLines />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="grid-12 hero__grid">
            <div className="hero__copy col-span-7">
              <div className="eyebrow"><span className="sect">§</span> ZUKUNFT. AUTOMATISIERT.</div>
              <h1 className="tight">
                Wir operieren nicht an Ihrem Unternehmen. <span className="em">Wir verdrahten es neu.</span>
              </h1>
              <p className="hero__lead">
                Prozess&#8209;Diagnose, Automatisierung und Unternehmensgedächtnis für Mittelständler,
                die fertig sind mit Workshops ohne Werkzeug.
              </p>
              <div className="hero__ctas">
                <Link href="/kontakt" className="btn btn--primary">
                  Diagnose-Termin <span className="arr">→</span>
                </Link>
                <a href="#methodik" className="link-mono">
                  Methodik <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="hero__viz col-span-5">
              <div className="hero__viz-meta">
                <span>WORKFLOW · LIVE</span>
                <span>v 4.2.1 / DE</span>
              </div>
              <WorkflowSVG />
              <div className="hero__ticker">
                <LiveTicker items={['SYS_OK', '47 PROZESSE LIVE', 'LETZTE SYNC: VOR 3 MIN']} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EINGRIFFE */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="sect">§</span> 02 — DREI EINGRIFFE</div>
            <div className="grid-12">
              <h2 className="col-span-8 tight">Drei klar abgegrenzte Eingriffe. Kein Bauchladen.</h2>
              <p className="col-span-4 muted" style={{ alignSelf: 'end' }}>
                Sie buchen, was Sie brauchen — Diagnose, Implementation, oder ein laufendes Gedächtnis-System.
                Häufig in dieser Reihenfolge.
              </p>
            </div>
            <div className="reveal-line" />
          </div>
          <div className="eingriffe-grid">
            {[
              { num: '01 / DIAGNOSE', title: 'Prozess-Audit. 2–4 Wochen.', desc: 'Wir messen, kartieren und priorisieren. Ergebnis: ein konkreter Eingriffsplan mit Zahlen.', slug: 'diagnose' },
              { num: '02 / IMPLEMENTATION', title: 'n8n + Custom-Code. 4–12 Wochen.', desc: 'Workflows laufen live. Übergabe an Ihr Team mit Dokumentation und Monitoring.', slug: 'implementation' },
              { num: '03 / GEDÄCHTNIS', title: 'RAG-Systeme. Laufend.', desc: 'Unternehmenswissen wird durchsuchbar. Pgvector + Claude. Wissen verbleibt im Unternehmen.', slug: 'gedaechtnis' },
            ].map((c, i) => (
              <Link key={i} className="eingriff-card" href={`/leistungen/${c.slug}`}>
                <div className="eingriff-card__num">{c.num}</div>
                <h3>{c.title}</h3>
                <p className="muted" style={{ margin: 0 }}>{c.desc}</p>
                <div className="meta">
                  <span className="mono">DETAIL</span>
                  <span className="arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METHODIK */}
      <section className="methodik" id="methodik">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 64 }}>
            <div className="eyebrow"><span className="sect">§</span> 03 — METHODIK</div>
            <div className="reveal-line" />
          </div>
          <div className="methodik__inner">
            <div className="methodik__sticky">
              <h2 className="tight">Wie wir arbeiten.</h2>
              <p>
                Vier Schritte. Keine Workshops, in denen sich Ihr Team selbst beraten muss. Wir bringen
                das Werkzeug — und gehen mit funktionierender Implementation wieder.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link href="/leistungen" className="link-mono">
                  Vollständige Methodik <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="methodik__steps">
              {[
                { n: '01 / KARTIEREN',     h: 'Prozess-Topologie aufnehmen.',      p: 'Wir interviewen, beobachten, messen. Output ist eine vollständige Karte aller IST-Prozesse mit Zeitkosten in Euro pro Jahr.', svg: 'map'   },
                { n: '02 / DIAGNOSTIZIEREN', h: 'Engpässe und Hebel identifizieren.', p: 'Wo verliert Ihr Unternehmen Stunden? Wo ist Wissen einer Person unterstellt? Priorisierung nach Impact und Aufwand.',   svg: 'diag'  },
                { n: '03 / OPERIEREN',      h: 'Implementation in n8n und Code.',    p: 'Wir bauen die Workflows live. Keine Foliensammlung. Übergabe inklusive Monitoring und Eskalations-Pfad.',                 svg: 'op'    },
                { n: '04 / NACHSORGE',      h: 'Übergabe und Optimierung.',          p: 'Ihr Team wird befähigt. Wir bleiben für 90 Tage erreichbar. Optionale Wartung danach pauschal.',                          svg: 'after' },
              ].map((s, i) => (
                <div className="methodik__step" key={i}>
                  <div className="num">{s.n}</div>
                  <div>
                    <h3>{s.h}</h3>
                    <p>{s.p}</p>
                  </div>
                  <div className="draw">
                    <MethodSketch kind={s.svg as 'map' | 'diag' | 'op' | 'after'} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEWEIS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="sect">§</span> 04 — BEWEIS</div>
            <div className="grid-12">
              <h2 className="col-span-8 tight">Drei Eingriffe. Drei Zahlen.</h2>
              <p className="col-span-4 muted" style={{ alignSelf: 'end' }}>
                Anonymisiert, aber konkret. Vollständige Operations-Berichte unter{' '}
                <Link href="/cases" className="link-mono">/cases</Link>.
              </p>
            </div>
            <div className="reveal-line" />
          </div>
          <div className="beweis-grid">
            {topCases.map((c) => (
              <Link key={c.slug} className="beweis-card" href={`/cases/${c.slug}`}>
                <div className="num">
                  <NumberCounter value={parseInt(c.headline.replace(/[^0-9]/g, ''))} suffix={c.headline.replace(/[0-9]/g, '').replace(/[−+]/g, '')} />
                </div>
                <div className="label">{c.headline_label}.</div>
                <div className="industry mono">{c.industry} · {c.size}</div>
                <div className="arrow link-mono">OPERATIONS-BERICHT →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WISSEN */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="sect">§</span> 05 — WISSEN</div>
            <div className="grid-12">
              <h2 className="col-span-8 tight">Operations-Berichte aus der Werkstatt.</h2>
              <p className="col-span-4 muted" style={{ alignSelf: 'end' }}>
                Drei aktuelle Notizen. Vollständiges Magazin:{' '}
                <Link href="/wissen" className="link-mono">/wissen</Link>.
              </p>
            </div>
            <div className="reveal-line" />
          </div>
          <div className="wissen-list">
            {articles.slice(0, 3).map((a, i) => (
              <Link key={a.slug} className="wissen-item" href={`/wissen/${a.slug}`}>
                <div className="idx">№ {String(i + 1).padStart(3, '0')}</div>
                <h3 className="tight">{a.title}</h3>
                <div className="date">{a.date}</div>
                <div className="read">{a.read_minutes} MIN</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="container">
          <div className="grid-12">
            <div className="col-span-7">
              <div className="eyebrow"><span className="sect">§</span> 06 — BERICHT</div>
              <h2 className="tight" style={{ marginTop: 24 }}>
                Sie wollen alle 14 Tage einen Operations-Bericht aus der Werkstatt?
              </h2>
              <NewsletterForm />
              <div className="meta mono">SIE KÖNNEN JEDERZEIT ABBESTELLEN. KEINE WEITERVERWENDUNG.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
