import type { Ablauf } from './types';

export const rechnungNachSitzung: Ablauf = {
  id: 3005,
  slug: 'rechnung-nach-sitzung',
  branche: 'coaches',
  themen: ['rechnungen'],
  title: 'Rechnung nach jeder Sitzung',
  seoTitle: 'Coaching-Rechnung automatisch',
  lead: 'Nach jeder Sitzung oder für jedes Paket liegt ein Rechnungsentwurf in Lexware Office oder sevDesk bereit. Sie geben frei, offene Beträge werden erinnert.',
  datePublished: '2026-10-19',
  problem: [
    'Letzter Arbeitstag im Monat. Sie öffnen den Kalender, zählen die Sitzungen pro Klient und gleichen mit Ihren Notizen ab. Wer hatte ein Paket, wer zahlt einzeln, wer hat abgesagt und muss trotzdem zahlen? Dann tippen Sie zwölf Rechnungen in Ihr Rechnungsprogramm. Zwei Stunden, mindestens. Meist am Wochenende.',
    'Zwei Wochen später fragen Sie sich, wer eigentlich schon bezahlt hat. Sie öffnen das Online-Banking, suchen die Namen und haken ab. Bei drei Klienten fehlt das Geld. Eine Zahlungserinnerung zu schreiben ist Ihnen unangenehm, also warten Sie noch eine Woche.',
    'Das Ergebnis: Ihr Geld kommt spät, manche Rechnung geht ganz unter, und ausgerechnet Sie, die anderen bei Struktur helfen, haben beim eigenen Papierkram keine.',
  ],
  heute: [
    'Am Monatsende zählen Sie die Sitzungen im Kalender.',
    'Sie schreiben jede Rechnung einzeln im Rechnungsprogramm.',
    'Ob bezahlt wurde, prüfen Sie im Kontoauszug.',
    'Erinnerungen an offene Beträge schreiben Sie spät oder gar nicht.',
    'Wie viele Sitzungen aus einem Paket noch übrig sind, steht in einer Tabelle.',
  ],
  danach: [
    'Nach jeder Sitzung zählt der Ablauf mit, bei Paketen auch die verbleibenden Termine.',
    'Für Einzelsitzungen entsteht direkt danach ein Rechnungsentwurf mit den richtigen Daten.',
    'Pakete werden beim Kauf berechnet, auf Wunsch mit Bezahllink von Stripe oder PayPal.',
    'Sie geben die Entwürfe frei, einzeln oder gesammelt einmal pro Woche.',
    'Zahlungen werden über die Bankverbindung im Rechnungsprogramm abgeglichen.',
    'Nach 14 Tagen ohne Zahlung geht eine freundliche Erinnerung raus.',
  ],
  mensch:
    'Jede Rechnung geben Sie frei, bevor sie verschickt wird. Wenn Sie einem Klienten eine Sitzung schenken oder ein Paket verlängern, ändern Sie den Entwurf. Den Text der Zahlungserinnerung schreiben wir gemeinsam, so freundlich, wie Sie es wollen. Bei der zweiten Erinnerung entscheiden Sie selbst, ob und wie es weitergeht.',
  werkzeuge: ['Lexware Office oder sevDesk', 'Google Kalender oder Calendly', 'Stripe oder PayPal', 'n8n'],
  nutzen: 'gross',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 10,
    minutesBefore: 8,
    minutesAfter: 1,
    hourlyRate: 100,
    annahme:
      'Eine Coachin mit zehn abrechenbaren Sitzungen pro Woche. Rechnung schreiben, Zahlung prüfen und erinnern kosten heute rund 8 Minuten pro Sitzung, danach bleibt die Freigabe. 100 Euro pro Stunde sind ein angenommener Wert.',
  },
  grenzen: [
    'Ihre Preise und Pakete müssen klar sein. Wer jeden Klienten anders abrechnet, braucht erst eine Preisliste, dann die Automatisierung.',
    'Coachen Sie für Firmen, wird die E-Rechnung zum Thema. Die Pflicht zum Ausstellen kommt stufenweise: ab 2027 für Unternehmen mit über 800.000 Euro Vorjahresumsatz, ab 2028 für alle. Lexware Office und sevDesk können E-Rechnungen erstellen. Für Privatkunden ändert sich nichts.',
    'Ob Ihre Leistung umsatzsteuerpflichtig ist und welcher Satz gilt, klärt Ihre Steuerberatung. Der Ablauf übernimmt, was im Rechnungsprogramm eingestellt ist.',
  ],
  faqs: [
    {
      q: 'Warum nicht einfach am Monatsende alles auf einmal?',
      a: 'Geht auch. Dann sammelt der Ablauf die Sitzungen und legt am Monatsende alle Entwürfe auf einmal an. Sie sparen dieselbe Zeit. Rechnungen direkt nach der Sitzung haben zwei Vorteile: Die Sitzung ist beim Klienten noch präsent, und am Monatsende wartet kein Stapel. Das ist Ihre Entscheidung.',
    },
    {
      q: 'Kann ich Vorkasse verlangen?',
      a: 'Ja. Bei Paketen ist das sogar der einfachere Weg: Der Klient zahlt über einen Bezahllink von Stripe oder PayPal, die Rechnung entsteht automatisch, und die Sitzungen werden freigeschaltet.',
    },
    {
      q: 'Mein Rechnungsprogramm ist nicht Lexware Office oder sevDesk. Geht das trotzdem?',
      a: 'Oft ja, wenn es eine Schnittstelle hat. Das prüfe ich im ersten Gespräch, bevor Sie etwas bezahlen. Rechnungen aus Word oder Excel lassen sich auch erzeugen, aber dann empfehle ich eher den Umstieg auf ein Rechnungsprogramm.',
    },
  ],
  related: [
    { label: 'Terminerinnerung mit Ausfallregel', href: '/ablaeufe/termin-erinnerung-ausfallregel' },
    { label: 'Unterlagen nach der Sitzung', href: '/ablaeufe/unterlagen-nach-sitzung' },
    { label: 'Was kostet KI-Automatisierung?', href: '/wissen/was-kostet-ki-automatisierung' },
  ],
};
