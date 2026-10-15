import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Über mich',
  description: 'Marco Gundlach - Prozess-Surgeon, n8n-Engineer. 14+ Jahre Digitalisierung im Mittelstand.',
  alternates: { canonical: '/ueber-mich' },
};

const VITA = [
  { y: '2026', s: 'Zukunft. Automatisiert. - eigenes Mandat für Premium-Engagements.' },
  { y: '2024', s: 'FlowResults - Automatisierungs-Marke für mittelständische Operations.' },
  { y: '2022', s: 'Lawsearch24 - Aufbau einer juristischen Such-Infrastruktur.' },
  { y: '2018', s: 'Zertifizierter Product Owner und Scrum Master.' },
  { y: '2014', s: 'Wechsel von Konzern zu Beratung. Schwerpunkt Digitalisierung Mittelstand.' },
  { y: '2010', s: 'Erste Programmier-Mandate parallel zum Studium. Schwerpunkt Workflow-Automatisierung.' },
];

export default function AboutPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">START</Link><span className="sep">/</span><span>ÜBER MICH</span>
          </div>
          <div className="eyebrow" style={{ marginTop: 40 }}><span className="sect">§</span> ÜBER MICH</div>
          <h1 className="tight">Marco Gundlach. Prozess-Surgeon, n8n-Engineer.</h1>
        </div>
      </section>

      <section className="container">
        <div className="about-grid">
          <div>
            <div className="about-grid__photo">
              <Image
                src="/marco-gundlach.jpg"
                alt="Marco Gundlach"
                width={800}
                height={1000}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
            <div className="vita">
              <div className="eyebrow" style={{ padding: '14px 0', borderBottom: '1px solid var(--hairline)' }}>
                <span className="sect">§</span> VITA
              </div>
              {VITA.map((v, i) => (
                <div className="vita__row" key={i}>
                  <div className="y">{v.y}</div>
                  <div>{v.s}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-essay">
            <p>Ich bin nicht in die Beratung gegangen, um zu beraten. Ich bin gegangen, weil ich gesehen habe, was passiert, wenn Beratung ohne Werkzeug aufhört.</p>
            <p>Vierzehn Jahre Digitalisierung im Mittelstand haben mir eine einfache Erkenntnis hinterlassen: Der Wert eines externen Eingriffs entsteht in der Implementation, nicht im Workshop.</p>
            <p>Mein Werkzeug ist n8n, weil es das einzige Werkzeug ist, das im Mittelstand drei Bedingungen gleichzeitig erfüllt: es läuft auf Ihrer Infrastruktur, es ist erweiterbar mit Code, und es ist verständlich für Operatoren ohne Engineering-Hintergrund.</p>
            <p>Ich arbeite alleine, mit ausgewählten Implementations-Partnern. Ich nehme drei bis sechs Mandate pro Jahr an. Ich gehe nicht zu Pitch-Terminen, in denen ich gegen drei andere auftrete.</p>
            <p>Ich operiere remote aus dem DACH-Raum, mit Vor-Ort-Terminen für Kick-off und Übergabe. Ich bin per E-Mail erreichbar, nicht per Slack. Ich antworte innerhalb von 48 Stunden, außer ich bin in einem Eingriff.</p>
            <div style={{ marginTop: 48 }}>
              <Link className="btn btn--primary" href="/kontakt">Termin buchen <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
