// Stilregeln gegen typische KI-Muster für alle Website-Texte.
// Quelle: Wikipedia „Anzeichen für KI-generierte Inhalte“ und die Stilregeln aus dem Briefing.
export const FORBIDDEN: RegExp[] = [
  /—/,
  /\bnahtlos/i, /ganzheitlich/i, /holistisch/i, /maßgeschneidert/i, /essenziell/i, /\bzentral/i,
  /tiefgreifend/i, /transformativ/i, /optimier/i, /\bnutz(e|en|t|te|ten)?\b/i, /ermöglich/i, /landschaft/i,
  /in der heutigen/i, /es ist wichtig/i, /zusammenfassend/i, /abschließend/i, /tauchen wir/i,
  /kein geheimnis/i, /nicht nur\b/i, /darüber hinaus/i, /\bzudem\b/i, /des weiteren/i, /\brobust/i,
  /umfassend/i, /maximier/i, /\bförder(n|t|te|ten)\b/i, /entscheidend/i, /bahnbrechend/i, /nächste level/i, /unterm strich/i,
];

export function aiPatternHits(text: string): string[] {
  return FORBIDDEN.filter((pattern) => pattern.test(text)).map(String);
}
