import type { Ablauf } from './types';

export const angeboteAutomatischNachfassen: Ablauf = {
  id: 1003,
  slug: 'angebote-automatisch-nachfassen',
  branche: 'handwerk',
  themen: ['nachfassen', 'angebote'],
  title: 'Angebote automatisch nachfassen',
  lead: 'Angebote automatisch nachfassen: Nach einer Woche bekommt der Kunde eine freundliche Erinnerung von Ihrer Adresse, und Sie sehen, wer geantwortet hat.',
  datePublished: '2026-10-19',
  problem: [
    'Fragen Sie einen Handwerker, wie viele Angebote gerade offen sind. Oft kommt ein Schulterzucken. Ein Teil ist längst vergeben, an ihn oder an einen anderen Betrieb. Ein anderer Teil wartet nur darauf, dass jemand kurz anruft.',
    'Nachfassen ist keine schwere Arbeit. Es ist Arbeit, die nie dringend ist. Heute brennt eine Baustelle, morgen fällt ein Geselle aus, und das Angebot für die neue Heizung vom Montag rutscht nach unten. Nach drei Wochen fühlt sich der Anruf peinlich an, also lässt man ihn ganz.',
    'Beim Kunden kommt das als Desinteresse an. Dabei warten viele selbst auf einen Anstoß. Sie haben eine Frage zur Ausführung, wollen wissen, wann Sie anfangen könnten, oder haben das PDF schlicht vergessen. Eine kurze Nachricht zur richtigen Zeit reicht oft, damit aus einem offenen Angebot ein Auftrag oder eine klare Absage wird. Beides ist besser als Funkstille.',
  ],
  heute: [
    'Das Angebot geht raus, ein Termin zum Nachfassen wird nirgends notiert.',
    'Offene Angebote stehen bestenfalls in einer Liste, die keiner pflegt.',
    'Wer Zeit hat, ruft ein paar Kunden an, meist die mit dem größten Auftrag.',
    'Der Rest bleibt liegen, bis der Kunde absagt oder sich nie wieder meldet.',
  ],
  danach: [
    'Mit dem Versand wird das Angebot als offen vermerkt, samt Datum.',
    'Nach sieben Tagen ohne Antwort geht eine kurze, persönliche Erinnerung raus.',
    'Antwortet der Kunde, stoppt der Ablauf für dieses Angebot sofort.',
    'Nach weiteren sieben Tagen folgt höchstens eine zweite Nachricht, dann ist Schluss.',
    'Einmal pro Woche sehen Sie eine Liste: offen, beantwortet, angenommen, abgesagt.',
  ],
  mensch:
    'Sie schreiben die Texte einmal, in Ihrer Sprache, und legen die Abstände fest. Bei der Wochenliste entscheiden Sie, wen Sie persönlich anrufen, etwa bei großen Aufträgen oder bei Stammkunden. Meldet sich ein Kunde mit Rückfragen, führen Sie das Gespräch. Der Ablauf erinnert. Verhandeln tut er nicht, und Rabatte bietet er auch keine an.',
  werkzeuge: ['n8n', 'Gmail oder Outlook', 'Hero, Craftnote oder Plancraft (je nach Schnittstelle)', 'Google Tabellen als einfache Liste'],
  nutzen: 'gross',
  aufwand: 'klein',
  beispiel: {
    perWeek: 10,
    minutesBefore: 5,
    minutesAfter: 1,
    hourlyRate: 70,
    annahme:
      '10 Angebote pro Woche wie im Rechenbeispiel auf meiner Startseite. 5 Minuten Nachfassen pro Angebot, danach 1 Minute für den Blick auf die Wochenliste.',
  },
  grenzen: [
    'Der Ablauf muss wissen, wann ein Angebot raus ist und ob der Kunde geantwortet hat. Kommt das Angebot aus Ihrer Handwerkersoftware, hängt das von deren Schnittstelle ab. Notfalls reicht eine Kopie jedes Angebots an ein eigenes Postfach.',
    'Ruft der Kunde an, statt zu mailen, merkt der Ablauf das nicht. Dafür gibt es eine kurze Mail oder einen Klick, der das Angebot als erledigt markiert.',
    'Mehr als zwei Erinnerungen schicke ich nicht raus. Wer dreimal nachgefragt wird, fühlt sich bedrängt.',
    'Die gesparten Minuten sind hier der kleinere Teil. Der eigentliche Wert liegt in Aufträgen, die sonst still verloren gegangen wären. Wie viele das bei Ihnen sind, kann Ihnen vorher niemand seriös sagen.',
  ],
  faqs: [
    {
      q: 'Wann sollte man bei einem Angebot nachfassen?',
      a: 'Ich empfehle etwa eine Woche nach dem Versand. Früher wirkt drängelnd, später hat der Kunde oft schon entschieden. Bei kleinen Reparaturen dürfen es auch drei Tage sein. Die Abstände legen Sie fest.',
    },
    {
      q: 'Wie formuliere ich eine Nachfass-Mail zu einem Angebot?',
      a: 'Kurz und mit einer echten Frage. Etwa so: „Haben Sie unser Angebot für den Heizungstausch bekommen? Wenn etwas offen ist, rufen Sie mich gern an.“ Kein Druck, kein Rabatt, keine Frist, die Sie nicht ernst meinen.',
    },
    {
      q: 'Wirkt eine automatische Erinnerung nicht unpersönlich?',
      a: 'Nicht, wenn sie von Ihrer Adresse kommt, Ihren Namen trägt und das konkrete Angebot nennt. Für den Kunden sieht sie aus wie eine Mail, die Sie selbst geschrieben haben. Im Grunde ist sie das auch, nur eben einmal statt fünfzigmal.',
    },
  ],
  related: [
    { label: 'Angebot aus dem Aufmaß als Entwurf', href: '/ablaeufe/angebot-aus-aufmass-entwurf' },
    { label: 'Rechenbeispiel: Angebote im Handwerk', href: '/wissen/rechenbeispiel-handwerk-angebote' },
    { label: 'Wann sich Automatisierung lohnt', href: '/wissen/wann-sich-automatisierung-lohnt' },
  ],
};
