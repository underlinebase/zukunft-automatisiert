import type { Ablauf } from './types';

export const feedbackNachCoaching: Ablauf = {
  id: 3007,
  slug: 'feedback-nach-coaching',
  branche: 'coaches',
  themen: ['bewertungen'],
  title: 'Feedback nach dem Coaching',
  seoTitle: 'Coaching-Feedback einholen',
  lead: 'Nach dem letzten Termin kommt automatisch eine kurze Feedback-Umfrage. Danach folgt die Bitte um eine Bewertung, bei Zufriedenen auch um eine Referenz.',
  datePublished: '2026-10-19',
  problem: [
    'Ein Coaching über acht Sitzungen geht zu Ende. Die Klientin bedankt sich herzlich, schreibt sogar, dass sich in ihrem Job etwas Grundlegendes verändert hat. Sie freuen sich und denken: Das wäre eine schöne Referenz für die Website. Dann kommt die nächste Woche, und als Ihnen der Gedanke wieder einfällt, sind drei Monate vergangen. Jetzt nachzufragen fühlt sich komisch an.',
    'So geht es den meisten Coaches. Auf der Website stehen dieselben drei Stimmen seit Jahren. Bei Google gibt es eine Handvoll Bewertungen, obwohl Dutzende Klienten zufrieden waren. Niemand hat sie gefragt, oder nur im falschen Moment.',
    'Und dann ist da das Feedback, das Sie selbst brauchen. Was hat geholfen, was war zu viel? Ohne Fragebogen bekommen Sie das nur von denen, die von sich aus etwas sagen. Das sind selten die, bei denen es nicht so gut lief.',
  ],
  heute: [
    'Nach dem letzten Termin bedanken Sie sich und hoffen auf eine Rückmeldung.',
    'Um eine Referenz bitten Sie, wenn es Ihnen einfällt.',
    'Feedback kommt nur von denen, die von sich aus schreiben.',
    'Was Klienten gesagt haben, steht verstreut in E-Mails.',
  ],
  danach: [
    'Ist die letzte Sitzung eines Pakets vorbei, geht nach drei Tagen eine kurze Umfrage raus.',
    'Fünf Fragen, zwei davon offen, in zwei Minuten beantwortet.',
    'Danach kommt an alle die Bitte um eine Google-Bewertung, bei hoher Zufriedenheit auch die Frage nach einem Zitat für die Website.',
    'Ein Zitat erscheint erst, wenn der Klient es schriftlich freigegeben hat.',
    'Einmal im Quartal fasst eine KI alle offenen Antworten zusammen.',
  ],
  mensch:
    'Die Fragen legen Sie fest. Kritisches Feedback lesen Sie selbst, dafür gibt es keine Zusammenfassung, die das abfedert. Bei unzufriedenen Klienten entscheiden Sie, ob Sie persönlich nachfragen. Und welche Zitate auf die Website kommen, entscheiden auch Sie.',
  ki:
    'Einmal im Quartal liest die KI alle offenen Antworten und sortiert: Was wird oft gelobt, was taucht als Kritik mehrfach auf, welche Wünsche gibt es? Bei zehn Antworten lesen Sie das schneller selbst. Bei fünfzig wird die Übersicht hilfreich. Für die einzelnen Rückmeldungen nach jedem Coaching braucht es keine KI.',
  werkzeuge: ['Tally oder Typeform', 'cal.com oder Calendly', 'n8n', 'Claude oder OpenAI-Modell', 'Google-Unternehmensprofil'],
  nutzen: 'klein',
  aufwand: 'klein',
  beispiel: {
    perWeek: 2,
    minutesBefore: 15,
    minutesAfter: 2,
    hourlyRate: 100,
    annahme:
      'Eine Coachin, bei der pro Woche zwei Coachings enden. Feedback erfragen, nachhaken und um eine Referenz bitten kosten heute rund 15 Minuten pro Klient, wenn sie es überhaupt tut. 100 Euro pro Stunde sind ein angenommener Wert.',
  },
  grenzen: [
    'Bewertungen dürfen Sie erbitten, aber nicht kaufen. Ein Rabatt gegen eine gute Bewertung ist tabu. Der Ablauf fragt nur.',
    'Google untersagt, gezielt nur zufriedene Kunden um Bewertungen zu bitten. Deshalb geht diese Bitte an alle. Nur die Frage nach einem Zitat für Ihre Website hängt an der Zufriedenheit.',
    'Bei wenigen abgeschlossenen Coachings im Jahr lohnt sich der Aufwand kaum. Dann reicht eine Vorlage, die Sie selbst verschicken.',
  ],
  faqs: [
    {
      q: 'Ist es in Ordnung, nur Zufriedene nach einer Bewertung zu fragen?',
      a: 'Für Google nicht. Die Richtlinien von Google untersagen, gezielt nur zufriedene Kunden um Bewertungen zu bitten. Deshalb bekommen alle die Bitte, unabhängig von der Umfrage. Bei Zitaten auf Ihrer eigenen Website ist das anders: Die wählen Sie ohnehin selbst aus, immer mit Freigabe des Klienten.',
    },
    {
      q: 'Wie viele Fragen sollte die Umfrage haben?',
      a: 'So wenige wie möglich. Eine Zahl von eins bis zehn, was am meisten geholfen hat, was Sie besser machen könnten. Mehr als fünf Fragen beantworten nur noch die Geduldigen.',
    },
  ],
  related: [
    { label: 'Unterlagen nach der Sitzung', href: '/ablaeufe/unterlagen-nach-sitzung' },
    { label: 'Rechnung nach jeder Sitzung', href: '/ablaeufe/rechnung-nach-sitzung' },
    { label: 'KI im Betrieb ohne Hype', href: '/wissen/ki-im-betrieb-ohne-hype' },
  ],
};
