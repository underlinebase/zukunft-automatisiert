import type { Ablauf } from './types';

export const fehlendeBelegeAnfordern: Ablauf = {
  id: 2001,
  slug: 'fehlende-belege-anfordern',
  branche: 'steuerberater',
  themen: ['dokumente', 'nachfassen', 'kommunikation'],
  title: 'Fehlende Belege anfordern',
  seoTitle: 'Belege automatisch anfordern',
  lead: 'Fehlende Belege automatisch anfordern: Mandanten bekommen eine genaue Liste und freundliche Erinnerungen. Ihr Team kümmert sich nur noch um Ausnahmen.',
  datePublished: '2026-10-19',
  problem: [
    'Monatsanfang in der Kanzlei. Die Kontoumsätze sind da, die Belege nur zum Teil. Eine Fachkraft legt Umsätze und vorhandene Belege nebeneinander, hakt ab, schreibt auf, was fehlt, und tippt daraus eine E-Mail. Beim nächsten Mandanten fängt sie von vorn an.',
    'Die Antwort kommt selten sofort. Manche Mandanten schicken die Hälfte, andere gar nichts, einige rufen an und fragen, welche Belege genau gemeint sind. Nach einer Woche müsste jemand erinnern. Das rutscht oft durch, weil schon der nächste Mandant wartet.',
    'Das Ergebnis kennen Sie: Die Buchhaltung wird später fertig, Rückfragen stapeln sich, und Ihre Fachkräfte verbringen Stunden mit Botendiensten. Fachlich anspruchsvoll ist daran wenig. Genau deshalb eignet sich dieser Ablauf gut für eine Automatisierung.',
  ],
  heute: [
    'Kontoumsätze und vorhandene Belege von Hand abgleichen.',
    'Fehlende Posten mit Datum und Betrag abtippen.',
    'E-Mail an den Mandanten formulieren und verschicken.',
    'Im Kalender oder auf einem Zettel notieren, wann man erinnern will.',
    'Nach einer Woche nachsehen, was gekommen ist, und erneut schreiben.',
    'Bei den Hartnäckigen zum Telefon greifen.',
  ],
  danach: [
    'Die offenen Posten kommen aus Ihrer Kanzleisoftware, als Export oder über eine erlaubte Schnittstelle.',
    'Der Ablauf erstellt je Mandant eine Liste mit Datum, Betrag und Empfänger.',
    'Ihr Team sieht die Liste kurz durch und gibt sie frei.',
    'Der Mandant bekommt eine E-Mail mit der Liste und einem Weg zum Hochladen, auch vom Handy.',
    'Nach sieben und nach vierzehn Tagen geht eine Erinnerung raus, nur mit den Posten, die noch fehlen.',
    'Wer nach zwei Erinnerungen nicht reagiert, landet auf einer kurzen Anrufliste.',
  ],
  mensch:
    'Ihr Team gibt jede Liste frei, bevor sie rausgeht. Es entscheidet, ob ein Posten wirklich einen Beleg braucht oder ob es sich um eine Privatentnahme oder eine Dauerbuchung handelt. Und es ruft die wenigen Mandanten an, die auf zwei Erinnerungen nicht reagieren. Den Ton der E-Mails legen Sie einmal fest, gern so, wie Ihre Kanzlei heute schon schreibt.',
  ki: 'An einer Stelle. Kommen Belege als Foto oder eingescanntes PDF zurück, liest ein KI-Modell Datum, Betrag und Aussteller aus, damit der Ablauf sie dem offenen Posten zuordnen kann. Unsichere Treffer markiert er für Ihr Team. Für Mandantendaten setze ich nur Dienste ein, die keine Daten zum Training verwenden, und kläre vorher mit Ihnen, ob der Dienst nach Ihrem Berufsrecht in Frage kommt. Wollen Sie das nicht, ordnet Ihr Team diese Belege selbst zu, und der Rest läuft trotzdem.',
  werkzeuge: ['n8n', 'Export oder Schnittstelle Ihrer Kanzleisoftware', 'Outlook oder Gmail', 'Upload-Weg Ihrer Kanzlei, z. B. DATEV Unternehmen online'],
  nutzen: 'gross',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 15,
    minutesBefore: 33,
    minutesAfter: 6,
    hourlyRate: 85,
    annahme:
      'Eine Kanzlei, die pro Woche bei etwa 15 Mandanten Belege nachfordert. Die Minuten verteilen sich auf Abgleich, Liste, E-Mail, Erinnerung, Zuordnen und Nachtelefonieren. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Der Abgleich ist nur so gut wie die Daten, die er bekommt. Ohne aktuelle Kontoumsätze gibt es keine Liste.',
    'Ob und wie der Ablauf an Ihre Kanzleisoftware angebunden wird, prüfe ich vor dem Start. Eine direkte Schnittstelle verspreche ich nicht, bevor ich sie gesehen habe. Ein Export reicht oft.',
    'Mandanten, die grundsätzlich nichts hochladen, ändert auch die beste Erinnerung nicht. Für sie bleibt das Telefon.',
    'Mitten in der Abgabesaison einzuführen ist keine gute Idee. Besser in einem ruhigeren Monat.',
  ],
  faqs: [
    {
      q: 'Wirkt eine automatische Erinnerung nicht unpersönlich?',
      a: 'Weniger als eine Erinnerung, die nie kommt. Die E-Mails gehen in Ihrem Namen raus, in Ihrem Ton und mit einer konkreten Liste. Viele Mandanten finden das angenehmer als den allgemeinen Satz „Bitte reichen Sie die fehlenden Unterlagen nach“, weil sie nicht selbst suchen müssen.',
    },
    {
      q: 'Was passiert mit Belegen, die per Post kommen?',
      a: 'Die scannt Ihr Team wie bisher. Sobald der Beleg im System ist, verschwindet der Posten von der Liste, und die nächste Erinnerung enthält ihn nicht mehr.',
    },
    {
      q: 'Wo liegen die Daten?',
      a: 'Der Ablauf läuft mit n8n auf einem Server in einem Rechenzentrum in der EU, mit Vertrag zur Auftragsverarbeitung. Vor dem Start verpflichte ich mich schriftlich zur Verschwiegenheit. Steuerberater sind Berufsgeheimnisträger im Sinne von § 203 StGB. Deshalb stimme ich jeden eingebundenen Dienst vorher mit Ihnen ab.',
    },
  ],
  related: [
    { label: 'Belege einsammeln, ohne zum Bittsteller zu werden', href: '/wissen/belege-einsammeln-ohne-nachlaufen' },
    { label: 'Ablauf: Belege benennen und zuordnen', href: '/ablaeufe/belege-benennen-zuordnen' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
    { label: 'Ablauf: Mandantenanfragen vorsortieren', href: '/ablaeufe/mandantenanfragen-vorsortieren' },
  ],
};
