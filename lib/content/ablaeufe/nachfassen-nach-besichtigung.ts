import type { Ablauf } from './types';

export const nachfassenNachBesichtigung: Ablauf = {
  id: 1014,
  slug: 'nachfassen-nach-besichtigung',
  branche: 'immobilienmakler',
  themen: ['nachfassen', 'kommunikation'],
  title: 'Nachfassen nach der Besichtigung',
  seoTitle: 'Makler: nach der Besichtigung automatisch nachfassen',
  lead: 'Nach jeder Besichtigung fragt eine kurze Nachricht nach Interesse und Eindruck. Interessierte bekommen den nächsten Schritt, Absagen sind ein Klick.',
  datePublished: '2026-10-19',
  problem: [
    'Die Besichtigung war um 18 Uhr. Das Paar war angetan, hat viel gefragt, die Frau hat schon Möbel gestellt. Dann ging es ins Auto, und seitdem ist Ruhe. Sind die beiden noch dabei? Sollen Sie anrufen? Morgen, übermorgen?',
    'Nachfassen sollte nach jeder Besichtigung passieren. In der Praxis läuft es nach Gefühl: Bei denen, die einen guten Eindruck gemacht haben, sofort, bei den anderen irgendwann oder gar nicht. Deren Rückmeldung fehlt dann auch im Bericht für den Eigentümer, obwohl gerade die Zögerlichen oft sagen, was am Objekt stört.',
    'Viele Interessenten sagen nicht ab, weil Absagen unangenehm ist. Sie werden einfach still. Ein leichter Weg, Nein zu sagen, bringt Ihnen mehr Klarheit als drei Anrufe auf die Mailbox.',
  ],
  heute: [
    'Nach der Besichtigung notieren Sie den Eindruck, wenn Zeit ist.',
    'Am nächsten Tag rufen Sie die an, die vielversprechend wirkten.',
    'Andere hören erst wieder etwas, wenn das Objekt weg ist.',
    'Rückmeldungen stehen verstreut in Notizen und Mails.',
  ],
  danach: [
    'Am Abend nach der Besichtigung bekommt jeder Teilnehmer eine kurze Nachricht.',
    'Darin stehen Antworten zum Anklicken: weiter interessiert, noch unsicher, kein Interesse.',
    'Ein freiwilliges Feld bietet Platz für einen Satz zum Eindruck.',
    'Interessierte bekommen sofort den nächsten Schritt, etwa den Link für die Unterlagen.',
    'Wer nicht antwortet, bekommt nach zwei Tagen eine Erinnerung, danach nichts mehr.',
    'Alle Antworten stehen am Kontakt und fließen in den Bericht für den Eigentümer.',
  ],
  mensch:
    'Sie rufen die Interessierten an, und zwar zuerst. Der Ablauf sagt Ihnen, wer das ist. Bei „noch unsicher“ entscheiden Sie, ob ein Gespräch hilft oder ob Sie lieber abwarten. Preisgespräche und Zusagen bleiben bei Ihnen und dem Eigentümer.',
  werkzeuge: ['n8n', 'Gmail oder Outlook', 'onOffice, FLOWFACT oder Propstack (je nach Schnittstelle)', 'Google Kalender oder Outlook-Kalender'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 12,
    minutesBefore: 6,
    minutesAfter: 1,
    hourlyRate: 90,
    annahme:
      '12 Besichtigungen pro Woche wie beim Ablauf zur Terminbuchung. Bisher 6 Minuten für Anruf oder Mail samt Notiz, danach 1 Minute für den Blick auf die Antworten.',
  },
  grenzen: [
    'Der Ablauf braucht die Teilnehmer aus Kalender oder Maklersoftware. Wer spontan mitkommt und nirgends eingetragen ist, wird nicht gefragt.',
    'Bei Sammelbesichtigungen bekommen alle dieselbe Nachricht. Eine persönliche Zeile schreiben Sie selbst dazu, wenn es sich lohnt.',
    'Die Nachfrage darf kein Werbebrief werden. Weitere Objekte bieten Sie nur Interessenten an, die das ausdrücklich möchten.',
    'Wie die Antworten in Ihre Maklersoftware kommen, hängt von deren Schnittstelle ab. Im einfachsten Fall als Notiz am Kontakt, besser als eigenes Feld, nach dem Sie filtern können.',
  ],
  faqs: [
    {
      q: 'Wann sollte ein Makler nach der Besichtigung nachfassen?',
      a: 'Am selben Abend oder am nächsten Morgen, solange der Eindruck frisch ist. Später haben Interessenten oft schon weitere Objekte gesehen und vergleichen.',
    },
    {
      q: 'Wie frage ich nach einer Besichtigung nach Feedback?',
      a: 'Kurz und leicht zu beantworten. Drei Antworten zum Anklicken und ein freiwilliges Textfeld reichen. Einen langen Fragebogen füllt nach einer Besichtigung kaum jemand aus.',
    },
    {
      q: 'Ersetzt das den Anruf?',
      a: 'Nein. Es sagt Ihnen, wen Sie anrufen sollten. Mit Interessierten telefonieren Sie weiter selbst.',
    },
    {
      q: 'Was schreibe ich Interessenten, die kein Interesse mehr haben?',
      a: 'Einen Satz Dank und das Angebot, sich bei passenden Objekten wieder zu melden, wenn sie das möchten. Der Ablauf schickt diese Antwort, sobald jemand „kein Interesse“ anklickt. Danach wird diese Person zu diesem Objekt nicht mehr erinnert.',
    },
  ],
  related: [
    { label: 'Besichtigungstermine online buchen', href: '/ablaeufe/besichtigungstermine-selbst-buchen' },
    { label: 'Selbstauskunft digital einsammeln', href: '/ablaeufe/selbstauskunft-unterlagen-einsammeln' },
    { label: 'Eigentümer-Reporting automatisch', href: '/ablaeufe/eigentuemer-reporting-automatisch' },
  ],
};
