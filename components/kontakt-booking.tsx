'use client';
import { useState } from 'react';

const DAYS = [
  { label: 'MO 12.05.', short: 'MO', slots: ['DISABLED', 'DISABLED', 'DISABLED'] },
  { label: 'DI 13.05.', short: 'DI', slots: ['09:00', '11:00', '14:00'] },
  { label: 'MI 14.05.', short: 'MI', slots: ['09:00', 'DISABLED', '14:00'] },
  { label: 'DO 15.05.', short: 'DO', slots: ['DISABLED', '11:00', 'DISABLED'] },
  { label: 'FR 16.05.', short: 'FR', slots: ['09:00', '11:00', 'DISABLED'] },
];

export default function KontaktBooking() {
  const [selected, setSelected] = useState({ day: 1, slot: 'DI-11:00' });
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="kontakt__embed">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h4>CAL.COM · DIAGNOSE-TERMIN</h4>
        <span className="mono" style={{ fontSize: 10, color: 'var(--steel)' }}>30 MIN · GMT+1</span>
      </div>
      <div className="day"><span>← APR · MAI 2026 · JUN →</span><span>KW 20</span></div>
      {!confirmed ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {DAYS.map((d, di) => (
            <div key={di} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 16, alignItems: 'center' }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--steel)' }}>{d.label}</div>
              <div className="slots">
                {d.slots.map((s, si) => {
                  const id = `${d.short}-${s}`;
                  const isDisabled = s === 'DISABLED';
                  const isActive = selected.day === di && selected.slot === id;
                  return (
                    <button key={si} className={`slot ${isDisabled ? 'disabled' : ''} ${isActive ? 'active' : ''}`}
                      onClick={() => !isDisabled && setSelected({ day: di, slot: id })}>
                      {isDisabled ? '—' : s}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          <button className="btn btn--primary" style={{ marginTop: 16, alignSelf: 'flex-start' }} onClick={() => setConfirmed(true)}>
            Termin bestätigen <span className="arr">→</span>
          </button>
        </div>
      ) : (
        <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="mono" style={{ color: 'var(--pulse)', letterSpacing: '0.14em' }}>✓ TERMIN VORGEMERKT</div>
          <div style={{ fontSize: 22, fontWeight: 300, letterSpacing: '-0.02em' }}>
            {DAYS[selected.day]?.label} · {selected.slot.split('-')[1]} Uhr
          </div>
          <p className="muted" style={{ fontSize: 14, margin: 0 }}>
            Eine Bestätigungsmail mit Kalender-Datei und Vorbereitungs-Fragen geht an Ihre Adresse — drei Fragen, zwei Minuten Aufwand.
          </p>
          <button className="link-mono" onClick={() => setConfirmed(false)} style={{ alignSelf: 'flex-start' }}>
            ← ANDEREN TERMIN WÄHLEN
          </button>
        </div>
      )}
    </div>
  );
}
