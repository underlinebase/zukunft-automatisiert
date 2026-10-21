import type { Ablauf } from './types';

export const rechnungNachAbnahmeEntwurf: Ablauf = {
  id: 1006,
  slug: 'rechnung-nach-abnahme-entwurf',
  branche: 'handwerk',
  themen: ['rechnungen', 'dokumente'],
  title: 'Rechnung nach Abnahme als Entwurf',
  seoTitle: 'Rechnung nach der Abnahme automatisch vorbereiten',
  lead: 'Ist der Auftrag abgenommen, liegt der Rechnungsentwurf mit Angebot, Nachträgen und Stunden bereit. Sie prüfen und schicken ihn ab. Für Handwerksbetriebe.',
  datePublished: '2026-10-19',
  problem: [
    'Die Baustelle ist seit zwei Wochen fertig. Die Rechnung nicht. Der Stundenzettel liegt noch im Transporter, ein Lieferschein vom Großhandel fehlt, und der Nachtrag für die zusätzliche Steckdosenreihe wurde nur mündlich vereinbart.',
    'Rechnungen schreiben ist im Handwerk oft die Aufgabe, die am weitesten nach hinten rutscht. Sie bringt keinen neuen Auftrag, sie braucht Ruhe und alle Unterlagen auf einem Tisch. Beides ist selten gleichzeitig da, schon gar nicht unter der Woche.',
    'Jeder Tag Verzug ist Geld, das Ihnen fehlt, während das Material längst bezahlt ist. Und je später die Rechnung kommt, desto eher fragt der Kunde nach Positionen, an die er sich nicht mehr erinnert. Dann beginnt das Erklären, und die Zahlung verschiebt sich noch einmal.',
  ],
  heute: [
    'Nach der Abnahme wartet der Auftrag, bis jemand Zeit fürs Büro hat.',
    'Stundenzettel, Lieferscheine und Nachträge werden zusammengesucht.',
    'Das Angebot wird geöffnet, Positionen übernommen, Mengen angepasst.',
    'Material aus Lieferscheinen wird abgetippt, Stunden werden addiert.',
    'Rechnung schreiben, prüfen, verschicken, wenn es endlich passt.',
  ],
  danach: [
    'Mit dem unterschriebenen Abnahmeprotokoll startet der Ablauf.',
    'Er holt Angebot und Nachträge aus Ihrer Handwerkersoftware.',
    'Stundenzettel und Lieferscheine als Foto oder PDF werden ausgelesen und dem Auftrag zugeordnet.',
    'Daraus entsteht ein Rechnungsentwurf in Ihrem Rechnungsprogramm, Abweichungen zum Angebot sind markiert.',
    'Sie bekommen eine Nachricht, dass der Entwurf bereitliegt.',
    'Nach Ihrer Freigabe geht die Rechnung an den Kunden.',
  ],
  mensch:
    'Sie prüfen jeden Entwurf, vor allem die markierten Stellen: mehr Stunden als angeboten, Material, das nicht im Angebot stand, ein Nachtrag ohne Unterschrift. Was davon berechnet wird, entscheiden Sie. Kulanz, Rundungen, ein Nachlass für den Stammkunden bleiben Ihre Sache. Ohne Ihre Freigabe verlässt keine Rechnung den Betrieb.',
  ki: 'An einer Stelle: beim Auslesen von Stundenzetteln und Lieferscheinen. Handschrift, unterschiedliche Formulare der Großhändler, im Transporter abfotografiert. Ein Sprachmodell holt Datum, Stunden, Artikel und Mengen heraus. Jede ausgelesene Zahl steht im Entwurf mit Verweis auf das Foto, damit Sie sie schnell gegenprüfen können. Zusammenrechnen und Übertragen ins Rechnungsprogramm laufen mit festen Regeln.',
  werkzeuge: ['n8n', 'Lexware Office oder sevDesk', 'Hero, Plancraft oder Label (je nach Schnittstelle)', 'Claude oder OpenAI-Modell'],
  nutzen: 'gross',
  aufwand: 'gross',
  beispiel: {
    perWeek: 6,
    minutesBefore: 30,
    minutesAfter: 10,
    hourlyRate: 70,
    annahme:
      '6 Rechnungen pro Woche, die auf einem Angebot aufbauen. Bisher 30 Minuten pro Rechnung, danach 10 Minuten fürs Prüfen der markierten Stellen.',
  },
  grenzen: [
    'Schreiben Sie Rechnungen direkt in Ihrer Handwerkersoftware, muss der Entwurf dort entstehen. Ob das geht, hängt von deren Schnittstelle ab. Lexware Office und sevDesk bieten dafür offene Schnittstellen.',
    'Mündliche Nachträge kennt der Ablauf nicht. Was nicht aufgeschrieben ist, fehlt im Entwurf.',
    'Bei Geschäftskunden wird die E-Rechnung schrittweise Pflicht. Das Format erzeugt Ihr Rechnungsprogramm, der Ablauf liefert nur den Inhalt. Prüfen Sie, ob Ihr Programm E-Rechnungen kann.',
    'Abschlags- und Schlussrechnungen mit Verrechnung brauchen eigene Regeln. Die richten wir ein, wenn Sie so abrechnen.',
  ],
  faqs: [
    {
      q: 'Wie schnell sollte ein Handwerker nach der Abnahme die Rechnung schreiben?',
      a: 'So schnell wie möglich, am besten in derselben Woche. Mit der Abnahme wird die Vergütung in der Regel fällig. Jede Woche Liegezeit verlängert nur die Zeit, bis das Geld auf dem Konto ist.',
    },
    {
      q: 'Kann ich eine Rechnung automatisch aus dem Angebot erstellen?',
      a: 'Liegen Angebot und Rechnung im selben Programm, kann das Programm das meist schon selbst. Dieser Ablauf geht weiter: Er holt Stunden, Material und Nachträge dazu, die sonst jemand von Hand abtippt.',
    },
    {
      q: 'Schickt der Ablauf Rechnungen ohne meine Freigabe raus?',
      a: 'Nein. Er bereitet den Entwurf vor und meldet sich. Verschickt wird erst, wenn Sie freigegeben haben.',
    },
  ],
  related: [
    { label: 'Angebot aus dem Aufmaß als Entwurf', href: '/ablaeufe/angebot-aus-aufmass-entwurf' },
    { label: 'Baustellenfotos automatisch ablegen', href: '/ablaeufe/baustellenfotos-automatisch-ablegen' },
    { label: 'Wann sich Automatisierung lohnt', href: '/wissen/wann-sich-automatisierung-lohnt' },
    { label: 'Google-Bewertung nach dem Auftrag anfragen', href: '/ablaeufe/google-bewertung-nach-auftrag' },
  ],
};
