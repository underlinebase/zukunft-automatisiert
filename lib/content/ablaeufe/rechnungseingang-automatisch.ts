import type { Ablauf } from './types';

export const rechnungseingangAutomatisch: Ablauf = {
  id: 3008,
  slug: 'rechnungseingang-automatisch',
  branche: 'alle',
  themen: ['rechnungen', 'dokumente'],
  title: 'Rechnungseingang automatisieren',
  lead: 'Eingangsrechnungen und E-Rechnungen landen automatisch in der Buchhaltung, mit Lieferant, Betrag und Fälligkeit. Sie geben nur noch frei.',
  datePublished: '2026-10-19',
  problem: [
    'Die Rechnung vom Großhändler kommt an die Info-Adresse, die vom Softwareanbieter an Ihr persönliches Postfach, die vom Steuerberater per Post. Eine Mitarbeiterin leitet weiter, was sie findet. Am Monatsende fehlen trotzdem drei Belege, und die Buchhaltung fragt nach. Sie suchen im Postfach nach „Rechnung“ und finden 400 Treffer.',
    'Dazu kommt die E-Rechnung. Seit dem 1. Januar 2025 muss jedes Unternehmen in Deutschland E-Rechnungen von anderen Unternehmen empfangen können. Viele Lieferanten schicken schon eine XRechnung oder eine ZUGFeRD-Datei. Die XRechnung ist eine reine XML-Datei, mit der ohne passendes Programm niemand etwas anfangen kann. Wer nur einen Ausdruck oder eine PDF-Ansicht ablegt, hat das Original nicht aufbewahrt.',
    'Und dann die Fristen. Skonto verpasst, weil die Rechnung zwei Wochen im falschen Postfach lag. Eine Mahnung, weil niemand gemerkt hat, dass die Lastschrift nicht ging. Kleine Beträge, aber sie summieren sich, und jedes Mal kostet die Klärung mehr Zeit als die Rechnung selbst.',
  ],
  heute: [
    'Rechnungen kommen an verschiedene Adressen, per Post und als Download im Kundenportal.',
    'Jemand leitet weiter, druckt aus oder lädt von Hand hoch.',
    'Lieferant, Betrag und Fälligkeit werden abgetippt oder gar nicht erfasst.',
    'Fehlende Belege fallen erst bei der Buchhaltung auf.',
    'Skontofristen kennt nur, wer die Rechnung zufällig gelesen hat.',
  ],
  danach: [
    'Alle Rechnungen gehen an eine feste Adresse, etwa rechnung@ihrbetrieb.de. Papier wird per Handy fotografiert.',
    'E-Rechnungen werden direkt ausgelesen, die Originaldatei wird mit abgelegt.',
    'Bei PDF-Rechnungen liest eine KI Lieferant, Betrag, Datum und Fälligkeit heraus.',
    'Der Beleg landet in Lexware Office, sevDesk oder dem Belegfach Ihrer Kanzlei.',
    'Doppelte Rechnungen werden erkannt, Beträge über einer Grenze gehen zur Freigabe.',
    'Vor Ablauf einer Skontofrist bekommen Sie eine Erinnerung.',
  ],
  mensch:
    'Sie prüfen, ob die Rechnung inhaltlich stimmt: Wurde das wirklich bestellt und geliefert? Das kann kein Programm wissen. Rechnungen über einer Grenze, die Sie festlegen, geben Sie ausdrücklich frei. Und Sie bezahlen. Das automatische Überweisen baue ich bewusst nicht ein, auch wenn es technisch ginge.',
  ki:
    'Bei E-Rechnungen braucht es keine KI, die Daten stehen sauber in der Datei. Die KI kommt bei allem anderen ins Spiel: PDF-Rechnungen, fotografierte Papierbelege, Rechnungen aus dem Ausland. Sie liest die wichtigsten Angaben heraus und schlägt eine Zuordnung vor. Bei unsicheren Werten markiert der Ablauf den Beleg zur Prüfung, statt zu raten.',
  werkzeuge: ['Gmail oder Outlook', 'n8n', 'Lexware Office, sevDesk oder DATEV Unternehmen online', 'Claude oder OpenAI-Modell'],
  nutzen: 'gross',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 25,
    minutesBefore: 4,
    minutesAfter: 1,
    hourlyRate: 60,
    annahme:
      'Ein Betrieb mit 25 Eingangsrechnungen pro Woche. Weiterleiten, hochladen und erfassen kosten heute rund 4 Minuten pro Rechnung, danach bleibt die Prüfung. 60 Euro pro Stunde sind ein angenommener Wert für eine Arbeitsstunde im Betrieb.',
  },
  grenzen: [
    'Die E-Rechnung muss im Originalformat aufbewahrt werden, also die XML-Datei oder die ZUGFeRD-Datei mit dem eingebetteten XML. Eine bloße PDF-Ansicht reicht nicht. Der Ablauf legt beides ab, die Aufbewahrung selbst übernimmt Ihr Buchhaltungsprogramm oder Ihre Kanzlei.',
    'Rechnungen aus Kundenportalen, die nur zum Download bereitliegen, kommen nicht von selbst. Manche Portale lassen sich anbinden, manche nicht.',
    'Die KI liest gut, aber nicht fehlerfrei. Deshalb prüfen Sie Beträge, bevor sie bezahlt werden.',
    'Was gebucht wird und wie, bleibt Sache Ihrer Buchhaltung. Der Ablauf liefert Belege, er bucht nicht.',
  ],
  faqs: [
    {
      q: 'Muss ich E-Rechnungen wirklich schon empfangen können?',
      a: 'Ja. Seit dem 1. Januar 2025 gilt das für alle Unternehmen in Deutschland, die Rechnungen von anderen Unternehmen bekommen, auch für kleine Betriebe. Ein E-Mail-Postfach reicht als Empfangsweg. Die Pflicht zum Ausstellen kommt erst 2027 und 2028, je nach Umsatz.',
    },
    {
      q: 'Wie lese ich eine XRechnung überhaupt?',
      a: 'Mit einem passenden Programm. Lexware Office, sevDesk und DATEV können E-Rechnungen einlesen und lesbar anzeigen. Im Ablauf wird die Datei automatisch dorthin geschickt, Sie müssen sie nie selbst öffnen.',
    },
    {
      q: 'Was passiert mit Papierrechnungen?',
      a: 'Sie fotografieren sie mit dem Handy, etwa mit der App Ihres Buchhaltungsprogramms, oder schicken das Foto an die Rechnungsadresse. Ab da läuft alles wie bei einer PDF-Rechnung. Ob Sie das Papier danach aufheben müssen, klären Sie mit Ihrer Steuerberatung.',
    },
  ],
  related: [
    { label: 'Dokumente automatisch ablegen', href: '/ablaeufe/dokumente-ablegen-umbenennen' },
    { label: 'E-Mail-Postfach sortieren mit KI', href: '/ablaeufe/e-mail-postfach-sortieren' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
  ],
};
