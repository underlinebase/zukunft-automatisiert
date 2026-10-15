'use client';

export default function KontaktBooking() {
  return (
    <div className="kontakt__embed">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
        <h4>CAL.COM · DIAGNOSE-TERMIN</h4>
        <span className="mono" style={{ fontSize: 10, color: 'var(--steel)' }}>30 MIN · GMT+1</span>
      </div>
      <iframe
        src="https://cal.eu/marco-g-ppa25o/30min?embed=true&theme=dark&layout=month_view&locale=de"
        style={{ width: '100%', height: 600, border: 'none' }}
        loading="lazy"
        title="Diagnose-Termin buchen"
      />
    </div>
  );
}
