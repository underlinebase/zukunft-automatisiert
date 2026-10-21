import { describe, expect, test } from 'vitest';
import { splitCompounds } from './compounds';

describe('splitCompounds', () => {
  test('marks short compounds like KI-Berater as unbreakable', () => {
    expect(splitCompounds('Was ich als KI-Berater für Sie mache.')).toEqual([
      { text: 'Was ich als ', keep: false },
      { text: 'KI-Berater', keep: true },
      { text: ' für Sie mache.', keep: false },
    ]);
  });

  test('handles several compounds and E-Mail', () => {
    const parts = splitCompounds('KI-Beratung per E-Mail');
    expect(parts.filter((part) => part.keep).map((part) => part.text)).toEqual(['KI-Beratung', 'E-Mail']);
    expect(parts.map((part) => part.text).join('')).toBe('KI-Beratung per E-Mail');
  });

  test('leaves long compounds breakable so they fit on small screens', () => {
    expect(splitCompounds('KI-Telefonassistent im Handwerk')).toEqual([{ text: 'KI-Telefonassistent im Handwerk', keep: false }]);
  });

  test('ignores ordinary hyphenated words with a long first part', () => {
    expect(splitCompounds('Automatisierungs-Check')).toEqual([{ text: 'Automatisierungs-Check', keep: false }]);
  });

  test('returns the text unchanged when there is nothing to keep', () => {
    expect(splitCompounds('Ohne Hype.')).toEqual([{ text: 'Ohne Hype.', keep: false }]);
    expect(splitCompounds('')).toEqual([]);
  });
});
