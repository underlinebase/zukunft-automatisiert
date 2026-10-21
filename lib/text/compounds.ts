// Kurze Bindestrich-Wörter wie „KI-Berater“ oder „E-Mail“ sollen in Überschriften nicht nach dem
// Bindestrich umbrechen. Lange Wörter bleiben trennbar, sonst ragen sie auf dem Handy über den Rand.

export interface TextPart {
  text: string;
  /** true = als Einheit setzen, kein Umbruch am Bindestrich. */
  keep: boolean;
}

/** Abkürzung mit 1–3 Großbuchstaben, Bindestrich, danach höchstens 10 Buchstaben. */
const SHORT_COMPOUND = /(?<![\p{L}-])\p{Lu}{1,3}-\p{L}{1,10}(?![\p{L}])/gu;

export function splitCompounds(text: string): TextPart[] {
  const parts: TextPart[] = [];
  let last = 0;
  for (const match of text.matchAll(SHORT_COMPOUND)) {
    const start = match.index ?? 0;
    if (start > last) parts.push({ text: text.slice(last, start), keep: false });
    parts.push({ text: match[0], keep: true });
    last = start + match[0].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last), keep: false });
  return parts;
}
