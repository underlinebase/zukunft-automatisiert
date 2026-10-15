'use client';

import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import { INQUIRY_LIMITS, validateInquiry } from '@/lib/inquiry';
import type { InquiryField } from '@/lib/inquiry';
import { SITE } from '@/lib/content/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type FieldErrors = Partial<Record<InquiryField, string>>;

interface ApiReply {
  success: boolean;
  error?: string;
  errors?: FieldErrors;
}

const NETWORK_ERROR = `Die Anfrage ist nicht angekommen. Bitte versuchen Sie es noch einmal oder schreiben Sie an ${SITE.email}.`;

async function submitInquiry(payload: Record<string, string>): Promise<ApiReply> {
  const response = await fetch('/api/anfrage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const body = (await response.json().catch(() => null)) as ApiReply | null;
  if (!body) return { success: false, error: NETWORK_ERROR };
  return body;
}

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState('');
  const id = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get('name') ?? ''),
      email: String(form.get('email') ?? ''),
      ablauf: String(form.get('ablauf') ?? ''),
      website: String(form.get('website') ?? ''),
    };

    const check = validateInquiry(payload);
    if (!check.ok && !check.spam) {
      setErrors(check.errors);
      setStatus('idle');
      return;
    }

    setErrors({});
    setStatus('sending');
    try {
      const reply = await submitInquiry(payload);
      if (reply.success) {
        setStatus('sent');
        return;
      }
      setErrors(reply.errors ?? {});
      setMessage(reply.error ?? NETWORK_ERROR);
      setStatus('error');
    } catch {
      setMessage(NETWORK_ERROR);
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="inquiry inquiry--sent" role="status">
        <h3>Danke, Ihre Schilderung ist da.</h3>
        <p>Ich melde mich innerhalb von {SITE.responseTime} persönlich bei Ihnen.</p>
      </div>
    );
  }

  const fieldError = (field: InquiryField) =>
    errors[field] ? <p className="form-error" id={`${id}-${field}-error`}>{errors[field]}</p> : null;
  const describedBy = (field: InquiryField) => (errors[field] ? `${id}-${field}-error` : undefined);

  return (
    <form className="inquiry" onSubmit={handleSubmit} noValidate>
      <h3 className="inquiry__title">Ablauf in 3 Sätzen schildern</h3>
      <div className="field">
        <label htmlFor={`${id}-name`}>Ihr Name</label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={INQUIRY_LIMITS.nameMax}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy('name')}
        />
        {fieldError('name')}
      </div>
      <div className="field">
        <label htmlFor={`${id}-email`}>E-Mail</label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={INQUIRY_LIMITS.emailMax}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy('email')}
        />
        {fieldError('email')}
      </div>
      <div className="field">
        <label htmlFor={`${id}-ablauf`}>Welcher Ablauf kostet Sie am meisten Zeit?</label>
        <textarea
          id={`${id}-ablauf`}
          name="ablauf"
          required
          maxLength={INQUIRY_LIMITS.ablaufMax}
          placeholder="Zum Beispiel: Jede Woche schreiben wir 15 Angebote von Hand und fassen per Telefon nach."
          aria-invalid={Boolean(errors.ablauf)}
          aria-describedby={describedBy('ablauf')}
        />
        {fieldError('ablauf')}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status === 'error' ? <p className="form-error" role="alert">{message}</p> : null}
      <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Wird gesendet …' : 'Ablauf schicken'}
      </button>
      <p className="form-note">
        Antwort in {SITE.responseTime}. Ihre Angaben nutze ich nur für die Antwort. Mehr dazu in der{' '}
        <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>
    </form>
  );
}
