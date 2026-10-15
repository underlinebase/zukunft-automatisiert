import { describe, expect, test } from 'vitest';
import { validateInquiry } from './inquiry';

const valid = {
  name: 'Petra Muster',
  email: 'petra@example.de',
  ablauf: 'Wir schreiben jede Woche zwanzig Angebote von Hand.',
  website: '',
};

describe('validateInquiry', () => {
  test('accepts a complete inquiry and trims the values', () => {
    const result = validateInquiry({ ...valid, name: '  Petra Muster  ' });
    expect(result).toEqual({
      ok: true,
      data: { name: 'Petra Muster', email: 'petra@example.de', ablauf: valid.ablauf },
    });
  });

  test('returns field errors for missing values', () => {
    const result = validateInquiry({ name: '', email: 'kein-at', ablauf: 'kurz', website: '' });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(Object.keys(result.errors).sort()).toEqual(['ablauf', 'email', 'name']);
  });

  test('flags a filled honeypot as spam', () => {
    const result = validateInquiry({ ...valid, website: 'https://spam.example' });
    expect(result).toEqual({ ok: false, errors: {}, spam: true });
  });

  test('rejects non-object input', () => {
    expect(validateInquiry(null).ok).toBe(false);
    expect(validateInquiry('text').ok).toBe(false);
  });

  test('rejects overly long descriptions', () => {
    const result = validateInquiry({ ...valid, ablauf: 'x'.repeat(2001) });
    expect(result.ok).toBe(false);
  });

  test('rejects line breaks in name and email', () => {
    expect(validateInquiry({ ...valid, name: 'Petra\nBcc: x@y.de' }).ok).toBe(false);
    expect(validateInquiry({ ...valid, email: 'a@b.de\nx' }).ok).toBe(false);
  });
});
