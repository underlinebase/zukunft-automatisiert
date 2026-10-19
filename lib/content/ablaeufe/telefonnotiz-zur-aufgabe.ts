import type { Ablauf } from './types';

export const telefonnotizZurAufgabe: Ablauf = {
  id: 3011,
  slug: 'telefonnotiz-zur-aufgabe',
  branche: 'alle',
  themen: ['kommunikation', 'anfragen'],
  title: 'Telefonnotiz wird zur Aufgabe',
  seoTitle: 'Telefonnotiz automatisch erfassen',
  lead: 'Nach dem Anruf sprechen Sie 20 Sekunden ins Handy. Daraus wird eine Aufgabe mit Name, Nummer, Anliegen und Frist. Verpasste Anrufe landen gleich mit.',
  datePublished: '2026-10-19',
  problem: [
    'Sie stehen beim Kunden, das Handy klingelt. Ein Herr Becker, wegen des Angebots von letzter Woche, ob man noch etwas an der Menge ändern könne, er sei bis Donnerstag erreichbar. Sie sagen: „Ich melde mich.“ Dann geht das Gespräch mit dem Kunden weiter. Am Abend wissen Sie noch, dass jemand angerufen hat. Wie er hieß und was er wollte, nur noch ungefähr.',
    'Im Büro ist es kaum besser. Telefonnotizen stehen auf gelben Zetteln, auf der Rückseite eines Lieferscheins oder in einem Block, den nur eine Person führt. Wer zurückruft, wann und ob überhaupt, steht nirgends. Geht der Zettel verloren, ist der Anruf nie passiert.',
    'Verpasste Anrufe sind die dritte Lücke. Die Nummer steht im Handy, aber ohne Namen. Wer sie zwei Tage später zurückruft, hört oft: „Hat sich erledigt.“ Manchmal heißt das, dass der Auftrag jetzt bei jemand anderem liegt.',
  ],
  heute: [
    'Notizen landen auf Zetteln, im Kopf oder gar nicht.',
    'Wer zurückruft, wird mündlich abgesprochen.',
    'Verpasste Anrufe sehen Sie nur in der Anrufliste des Handys.',
    'Fristen wie „bis Donnerstag“ merkt sich niemand zuverlässig.',
  ],
  danach: [
    'Nach dem Anruf tippen Sie auf eine Verknüpfung am Handy und sprechen kurz, was war.',
    'Die Sprachnotiz wird in Text umgewandelt und in Felder sortiert: Name, Nummer, Anliegen, Frist.',
    'Daraus entsteht eine Aufgabe in Ihrem Aufgaben-Tool oder CRM, mit der richtigen Person als zuständig.',
    'Verpasste Anrufe aus der Telefonanlage werden automatisch zur Rückruf-Aufgabe.',
    'Ist die Frist erreicht und die Aufgabe offen, kommt eine Erinnerung.',
  ],
  mensch:
    'Sie sprechen die Notiz, denn nur Sie wissen, was im Gespräch gesagt wurde. Sie rufen zurück und haken die Aufgabe ab. Wer im Team welche Anrufe übernimmt, legen Sie fest. Und wenn die Spracherkennung einen Namen falsch versteht, korrigieren Sie ihn mit einem Tippen.',
  ki:
    'Die KI macht zwei Dinge. Sie wandelt Ihre Sprachnotiz in Text um, und sie zieht daraus die Angaben heraus, die eine Aufgabe braucht. Aus „Herr Becker wegen Angebot Dachrinne, will Menge ändern, bis Donnerstag“ wird eine Aufgabe mit Titel, Kontakt und Fälligkeit am Donnerstag. Dafür setze ich eine Spracherkennung von OpenAI und Claude oder ein OpenAI-Modell ein. Die Aufnahme wird nach dem Umwandeln gelöscht.',
  werkzeuge: ['Handy (Kurzbefehl oder kleine Web-App)', 'n8n', 'OpenAI-Spracherkennung', 'Microsoft To Do, Asana, Trello oder Ihr CRM', 'Telefonanlage mit Schnittstelle'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 20,
    minutesBefore: 4,
    minutesAfter: 1,
    hourlyRate: 60,
    annahme:
      'Ein Betrieb mit 20 Anrufen pro Woche, die eine Nachbereitung brauchen. Notieren, weitergeben und nachhalten kosten heute rund 4 Minuten pro Anruf. Aufträge, die durch vergessene Rückrufe verloren gehen, sind nicht eingerechnet. 60 Euro pro Stunde sind ein angenommener Wert für eine Arbeitsstunde im Betrieb.',
  },
  grenzen: [
    'Das Telefonat selbst wird nicht aufgezeichnet. Das wäre ohne Zustimmung des Anrufers strafbar. Aufgenommen wird nur Ihre eigene Notiz danach.',
    'Namen und Straßen versteht die Spracherkennung nicht immer richtig, vor allem bei Lärm auf der Baustelle. Ein kurzer Blick auf die Aufgabe gehört dazu.',
    'Verpasste Anrufe lassen sich nur übernehmen, wenn Ihre Telefonanlage oder Ihr Anbieter eine Schnittstelle hat. Bei vielen Cloud-Telefonanlagen geht das, beim alten Festnetzanschluss meist nicht.',
  ],
  faqs: [
    {
      q: 'Muss ich mir dafür eine neue App installieren?',
      a: 'Meist nicht. Auf dem iPhone reicht ein Kurzbefehl, auf Android eine kleine Web-App als Symbol auf dem Startbildschirm. Ein Tippen, sprechen, fertig.',
    },
    {
      q: 'Kann ich die Notiz auch tippen statt sprechen?',
      a: 'Ja. Dann gibt es ein kurzes Formular mit den Feldern Name, Nummer, Anliegen und Frist. Im Büro ist das oft schneller, unterwegs ist Sprechen bequemer.',
    },
    {
      q: 'Wo landet die Aufgabe, wenn ich kein Aufgaben-Tool habe?',
      a: 'Zum Beispiel in Microsoft To Do oder Google Tasks, die sind oft schon da. Oder in einer gemeinsamen Tabelle. Ein neues Werkzeug führe ich nur ein, wenn das Team es auch aufmachen wird.',
    },
  ],
  related: [
    { label: 'Kontaktformular direkt ins CRM', href: '/ablaeufe/kontaktformular-ins-crm' },
    { label: 'Wochenbericht mit Kennzahlen', href: '/ablaeufe/wochenbericht-kennzahlen' },
    { label: 'Wenn der Mitarbeiter geht', href: '/wissen/wenn-der-mitarbeiter-geht' },
  ],
};
