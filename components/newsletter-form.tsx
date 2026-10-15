'use client';

import { useId, useState } from 'react';
import type { FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'done' | 'error';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const id = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus(response.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return <p className="newsletter-done" role="status">Eingetragen. Danke!</p>;
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor={`${id}-email`} className="visually-hidden">E-Mail-Adresse</label>
        <input
          id={`${id}-email`}
          type="email"
          required
          autoComplete="email"
          placeholder="ihre@firma.de"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === 'loading'}
        />
      </div>
      <button type="submit" className="btn btn--primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Wird eingetragen …' : 'Eintragen'}
      </button>
      {status === 'error' ? <p className="form-error" role="alert">Das hat nicht geklappt. Bitte versuchen Sie es noch einmal.</p> : null}
    </form>
  );
}
