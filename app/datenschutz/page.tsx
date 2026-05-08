import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <div className="crumbs"><Link href="/">START</Link><span className="sep">/</span><span>DATENSCHUTZ</span></div>
          <div className="eyebrow" style={{ marginTop: 40 }}><span className="sect">§</span> DATENSCHUTZ</div>
          <h1 className="tight">Datenschutzerklärung.</h1>
        </div>
      </section>
      <section className="container">
        <div className="legal">
          <h2>1 — Verantwortlicher</h2>
          <p>Marco Gundlach, Anschrift siehe Impressum. E-Mail: marco@zukunft-automatisiert.de</p>
          <h2>2 — Server-Logs</h2>
          <p>Beim Aufruf dieser Website werden vom Hosting-Provider (Vercel Inc.) folgende Daten verarbeitet: IP-Adresse (gekürzt nach 24 Stunden), Zeitstempel, aufgerufene URL, Referrer, User-Agent. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: 14 Tage.</p>
          <h2>3 — Cookies</h2>
          <p>Diese Website verwendet keine Tracking-Cookies. Kein Banner, weil keine Einwilligung erforderlich.</p>
          <h2>4 — Newsletter</h2>
          <p>Wenn Sie sich für den Operations-Bericht eintragen, verarbeiten wir Ihre E-Mail-Adresse. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können jederzeit widerrufen.</p>
          <h2>5 — Cal.com-Embed</h2>
          <p>Auf der Kontakt-Seite ist eine Buchungsoberfläche von Cal.com Inc. eingebunden. Datenschutz-Erklärung Cal.com: cal.com/privacy.</p>
          <h2>6 — Ihre Rechte</h2>
          <p>Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Widerspruch (Art. 21), Datenübertragbarkeit (Art. 20). Beschwerderecht beim Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit.</p>
        </div>
      </section>
    </main>
  );
}
