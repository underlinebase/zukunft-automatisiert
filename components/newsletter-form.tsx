'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <div style={{ padding: '16px 0', color: 'var(--pulse)', fontFamily: 'Geist Mono, monospace', fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
        ✓ EINGETRAGEN. NÄCHSTER BERICHT IN 14 TAGEN.
      </div>
    );
  }

  return (
    <form className="newsletter__form" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="ihre@firma.de"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={state === 'loading'}
      />
      <button type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? '...' : 'EINTRAGEN →'}
      </button>
      {state === 'error' && (
        <p style={{ color: '#e53e3e', fontSize: 13, margin: '8px 0 0', fontFamily: 'Geist Mono, monospace' }}>
          Fehler - bitte nochmal versuchen.
        </p>
      )}
    </form>
  );
}
