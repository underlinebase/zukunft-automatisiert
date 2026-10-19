import type { Ablauf } from './types';

export const googleBewertungNachAuftrag: Ablauf = {
  id: 1007,
  slug: 'google-bewertung-nach-auftrag',
  branche: 'handwerk',
  themen: ['bewertungen', 'kommunikation'],
  title: 'Google-Bewertung nach dem Auftrag',
  seoTitle: 'Google-Bewertungen im Handwerk automatisch anfragen',
  lead: 'Nach jedem abgeschlossenen Auftrag bekommt der Kunde eine kurze Bitte um eine Google-Bewertung. Ohne Gegenleistung, an alle Kunden, nach Googles Regeln.',
  datePublished: '2026-10-19',
  problem: [
    'Zufriedene Kunden sagen es Ihnen am Telefon, an der Haustür, manchmal mit einer Flasche Wein für die Jungs. Bei Google schreiben sie es selten hin. Nicht aus Unwillen. Es fragt einfach keiner, und den Link zu Ihrem Profil haben sie nicht zur Hand.',
    'Wer sich ärgert, findet den Weg zur Bewertung dagegen allein. So kann ein schiefes Bild entstehen: zwölf Bewertungen in acht Jahren, und die neueste ist ein Stern wegen eines verschobenen Termins. Wer Sie noch nicht kennt, sieht genau diese Bewertung zuerst.',
    'Die Lösung ist schlicht: alle Kunden fragen, zeitnah, freundlich, einmal. Von Hand klappt das in der Praxis selten regelmäßig, weil nach Feierabend niemand mehr daran denkt. Die gesparte Zeit ist bei diesem Ablauf übrigens das Kleinste. Es geht darum, dass die Bitte überhaupt rausgeht.',
  ],
  heute: [
    'Der Auftrag ist abgeschlossen, der Kunde zufrieden.',
    'An eine Bitte um Bewertung denkt in dem Moment niemand.',
    'Ab und zu schickt der Chef einem Stammkunden den Link per WhatsApp.',
    'Bewertungen kommen zufällig, häufig von Kunden, die sich geärgert haben.',
  ],
  danach: [
    'Nach der Abnahme oder der bezahlten Rechnung startet der Ablauf für jeden Auftrag.',
    'Zwei, drei Tage später bekommt der Kunde eine kurze Nachricht mit dem direkten Link zu Ihrem Google-Unternehmensprofil.',
    'Gefragt werden alle Kunden, ohne Vorauswahl nach Zufriedenheit.',
    'Es gibt keine Gegenleistung und höchstens eine Erinnerung.',
    'Wer nicht bewerten möchte, bekommt danach keine weitere Nachricht.',
  ],
  mensch:
    'Auf Bewertungen antworten Sie selbst, auch auf die kritischen. Gerade dort lesen künftige Kunden genau mit, und eine sachliche Antwort wirkt oft besser als fünf Sterne ohne Text. Kunden, die keine Mails von Ihnen möchten, nehmen Sie aus dem Ablauf heraus. Den Text der Bitte schreiben Sie einmal selbst, kurz und in Ihrem Ton.',
  werkzeuge: ['n8n', 'Gmail oder Outlook', 'Google-Unternehmensprofil (Bewertungslink)', 'Hero, Craftnote oder Lexware Office als Auslöser'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 8,
    minutesBefore: 4,
    minutesAfter: 0,
    hourlyRate: 70,
    annahme:
      '8 abgeschlossene Aufträge pro Woche. 4 Minuten pro Auftrag, um den Link herauszusuchen und eine Nachricht zu schreiben, wenn man es von Hand täte. Danach entfällt das.',
  },
  grenzen: [
    'Googles Richtlinien verbieten, für Bewertungen etwas anzubieten, etwa Rabatt, Gutschein oder Gewinnspiel. Sie verbieten auch, gezielt nur zufriedene Kunden zu fragen oder Unzufriedene von einer Bewertung abzuhalten. Deshalb gibt es im Ablauf keine Vorabfrage „Waren Sie zufrieden?“, die nur die Zufriedenen weiterleitet.',
    'Eine Bitte um Bewertung per Mail kann rechtlich als Werbung gelten. Holen Sie die Einwilligung am besten schon mit dem Auftrag ein. Wie Sie das formulieren, klären Sie mit Ihrem Anwalt oder Datenschutzberater.',
    'Wie viele Kunden am Ende bewerten, kann Ihnen niemand versprechen. Der Ablauf sorgt nur dafür, dass alle gefragt werden.',
    'Bewertungen kaufen oder von Mitarbeitern und Verwandten schreiben lassen ist tabu. Google kann solche Bewertungen entfernen.',
  ],
  faqs: [
    {
      q: 'Darf ich Kunden um eine Google-Bewertung bitten?',
      a: 'Ja. Google erlaubt, Kunden um Bewertungen zu bitten. Verboten sind Gegenleistungen und die Auswahl nur zufriedener Kunden. Für die Bitte per Mail ist eine Einwilligung des Kunden der sichere Weg.',
    },
    {
      q: 'Wo finde ich den Link für Google-Bewertungen?',
      a: 'Im Google-Unternehmensprofil, wenn Sie angemeldet sind, bei der Funktion zum Anfordern von Rezensionen. Dort gibt es einen Kurzlink, den Sie kopieren und in die Nachricht setzen.',
    },
    {
      q: 'Darf ich für eine Bewertung einen Rabatt geben?',
      a: 'Nein. Das verstößt gegen Googles Richtlinien, auch wenn die Bewertung ehrlich ist. Bedanken dürfen Sie sich, belohnen nicht.',
    },
  ],
  related: [
    { label: 'Rechnung nach Abnahme als Entwurf', href: '/ablaeufe/rechnung-nach-abnahme-entwurf' },
    { label: 'Termine bestätigen und erinnern', href: '/ablaeufe/termine-bestaetigen-erinnern-handwerk' },
    { label: 'Ablauf besprechen', href: '/kontakt' },
  ],
};
