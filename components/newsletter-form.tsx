'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <form className="newsletter__form" onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}>
      {!submitted ? (
        <>
          <input type="email" required placeholder="ihre@firma.de" value={email} onChange={e => setEmail(e.target.value)} />
          <button type="submit">EINTRAGEN →</button>
        </>
      ) : (
        <div style={{ padding: '16px 0', color: 'var(--pulse)', fontFamily: 'Geist Mono, monospace', fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          ✓ EINGETRAGEN. NÄCHSTER BERICHT IN 14 TAGEN.
        </div>
      )}
    </form>
  );
}
