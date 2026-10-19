import type { Ablauf } from './types';

export const terminErinnerungAusfallregel: Ablauf = {
  id: 3003,
  slug: 'termin-erinnerung-ausfallregel',
  branche: 'coaches',
  themen: ['termine'],
  title: 'Terminerinnerung mit Ausfallregel',
  lead: 'Klienten werden automatisch an ihre Sitzung erinnert. Wer zu spät absagt, bekommt Ihre Ausfallregel freundlich erklärt, ohne dass Sie es tun müssen.',
  datePublished: '2026-10-19',
  problem: [
    'Sonntagabend, 21:40 Uhr. Eine Nachricht: „Sorry, ich schaffe es morgen leider nicht.“ Der Termin um neun war seit drei Wochen gebucht. Für den Montagmorgen finden Sie so kurzfristig niemanden mehr, die Stunde bleibt leer. In Ihren Bedingungen steht, dass Absagen unter 24 Stunden berechnet werden. Aber schreiben Sie das jetzt einem Klienten, mit dem Sie seit Monaten gut arbeiten?',
    'Die meisten Coaches drücken in solchen Fällen ein Auge zu. Einmal ist kein Problem. Beim dritten Mal ärgern Sie sich, und dann ist die Regel plötzlich ein heikles Gespräch. Dazu kommen die Termine, die schlicht vergessen werden. Niemand sagt ab, niemand kommt, und Sie sitzen vor einem leeren Zoom-Raum.',
    'Erinnerungen von Hand verschicken klappt in ruhigen Wochen. In vollen Wochen fällt es als Erstes weg, also genau dann, wenn jeder Ausfall am meisten wehtut.',
  ],
  heute: [
    'Sie schicken Erinnerungen von Hand, wenn Zeit ist.',
    'Absagen kommen per WhatsApp, E-Mail oder Anruf.',
    'Ob die Absage rechtzeitig war, rechnen Sie selbst nach.',
    'Die Ausfallregel sprechen Sie an oder lassen es lieber.',
    'Ein Ausfallhonorar tragen Sie von Hand in die nächste Rechnung ein.',
  ],
  danach: [
    'Zwei Tage vorher kommt eine Erinnerung mit Link zum Verschieben, am Vortag eine kurze zweite.',
    'Verschieben und Absagen laufen über den Link, nicht über Ihr Handy.',
    'Ist die Frist noch offen, wird einfach ein neuer Termin gebucht.',
    'Ist die Frist vorbei, erklärt die Antwort freundlich Ihre Regel.',
    'Ein fälliges Ausfallhonorar landet als Vorschlag in Ihrer Rechnungsliste, Sie entscheiden.',
  ],
  mensch:
    'Ob ein Ausfallhonorar wirklich berechnet wird, entscheiden Sie im Einzelfall. Ein Klient mit krankem Kind wird anders behandelt als jemand, der zum dritten Mal kurzfristig absagt. Der Ablauf schreibt keine Rechnung von selbst. Er sorgt nur dafür, dass Sie es mitbekommen und die Regel einmal klar erklärt wurde, bevor es Streit gibt.',
  werkzeuge: ['Calendly oder cal.com', 'Google Kalender', 'n8n', 'Lexware Office oder sevDesk', 'E-Mail oder SMS'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 12,
    minutesBefore: 5,
    minutesAfter: 1,
    hourlyRate: 100,
    annahme:
      'Eine Coachin mit zwölf Sitzungen pro Woche. Erinnern, Absagen beantworten und Verschiebungen abstimmen kosten heute rund 5 Minuten pro Sitzung. Ausfälle, die durch Erinnerungen wegfallen, sind nicht eingerechnet. 100 Euro pro Stunde sind ein angenommener Wert.',
  },
  grenzen: [
    'Ein Ausfallhonorar können Sie nur verlangen, wenn es vorher vereinbart war, etwa im Coachingvertrag oder in Ihren Bedingungen. Die Formulierung klären Sie mit Ihrem Anwalt. Ich baue nur den Ablauf.',
    'Wer per WhatsApp absagt, umgeht den Link. Solche Absagen tragen Sie weiter selbst ein, sonst stimmt die Frist nicht.',
    'Erinnerungen per SMS kosten beim Anbieter pro Nachricht extra. E-Mail reicht in den meisten Fällen.',
  ],
  faqs: [
    {
      q: 'Wie viele Erinnerungen sind sinnvoll?',
      a: 'Meist zwei. Eine zwei Tage vorher, damit noch Zeit zum Verschieben bleibt, und eine kurze am Vortag. Mehr wirkt schnell aufdringlich. Bei Paketen mit wöchentlichen Terminen reicht oft eine.',
    },
    {
      q: 'Muss die Ausfallregel in jeder Erinnerung stehen?',
      a: 'Nein. Ein kurzer Satz in der ersten Erinnerung genügt, etwa „Verschieben ist bis 24 Stunden vorher kostenlos möglich“. Ausführlich wird es nur, wenn jemand zu spät absagt.',
    },
    {
      q: 'Kann ich freie Termine nach einer Absage sofort neu vergeben?',
      a: 'Ja, das lässt sich koppeln. Wie das mit einer Warteliste funktioniert, beschreibe ich im Ablauf zur Warteliste.',
    },
  ],
  related: [
    { label: 'Warteliste: freie Termine füllen', href: '/ablaeufe/warteliste-nachruecken' },
    { label: 'Rechnung nach jeder Sitzung', href: '/ablaeufe/rechnung-nach-sitzung' },
    { label: 'Wann sich Automatisierung lohnt', href: '/wissen/wann-sich-automatisierung-lohnt' },
  ],
};
