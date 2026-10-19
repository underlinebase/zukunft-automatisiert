import type { Ablauf } from './types';

export const dokumenteAblegenUmbenennen: Ablauf = {
  id: 3012,
  slug: 'dokumente-ablegen-umbenennen',
  branche: 'alle',
  themen: ['dokumente'],
  title: 'Dokumente automatisch ablegen',
  lead: 'Scans, Anhänge und Downloads bekommen automatisch einen sprechenden Namen und landen im richtigen Ordner. Schluss mit „Scan_0047.pdf“.',
  datePublished: '2026-10-19',
  problem: [
    'Im Ordner „Eingang“ auf dem Server liegen 312 Dateien. Scan_0047.pdf, Scan_0048.pdf, Dokument (3).pdf, IMG_2231.jpg. Irgendwo dazwischen ist der Mietvertrag für das Lager, die Kündigungsbestätigung der Versicherung und die Bauabnahme vom März. Wer etwas sucht, öffnet Datei für Datei.',
    'Jeder im Betrieb legt anders ab. Die eine nach Kunde, der andere nach Jahr, die dritte gar nicht, weil sie nicht weiß, wohin. Umbenennen kostet bei jeder Datei nur eine halbe Minute. Weil es aber hundertmal im Monat anfällt, macht es irgendwann keiner mehr.',
    'Teuer wird es selten durch die Ablage selbst. Teuer wird die Suche. Der Kunde ruft an und will wissen, was im Vertrag steht. Die Prüferin vom Finanzamt will einen Beleg von vor drei Jahren. Und die eine Kollegin, die wusste, wo alles liegt, ist im Urlaub.',
  ],
  heute: [
    'Scanner und E-Mail-Anhänge landen in einem Sammelordner.',
    'Dateien behalten ihren automatischen Namen.',
    'Wer Zeit hat, benennt um und verschiebt in Unterordner.',
    'Jeder sortiert nach eigener Logik.',
    'Gesucht wird durch Öffnen und Durchklicken.',
  ],
  danach: [
    'Neue Dateien im Eingangsordner oder im Scan-Postfach werden automatisch geöffnet und gelesen.',
    'Die KI erkennt die Art des Dokuments, das Datum und den Absender oder Kunden.',
    'Die Datei bekommt einen Namen nach festem Muster, etwa „2026-03-14_Bauabnahme_Müller“.',
    'Sie landet im passenden Ordner, zum Beispiel unter Kunde und Jahr.',
    'Ist sich die KI unsicher, bleibt die Datei im Ordner „Bitte prüfen“.',
  ],
  mensch:
    'Sie legen einmal fest, wie Ihre Ordner aussehen und wie Dateien heißen sollen. Das ist die eigentliche Arbeit, und die nimmt Ihnen keine Software ab. Danach schauen Sie ab und zu in den Ordner „Bitte prüfen“ und ordnen zu, was die KI nicht sicher erkannt hat. Was gelöscht werden darf, entscheiden Sie. Der Ablauf löscht nichts.',
  ki:
    'Die KI liest den Text des Dokuments, auch bei Scans und Fotos, und beantwortet drei Fragen: Was ist das, von wann ist es, zu wem gehört es? Eine feste Regel reicht dafür nicht, weil ein Vertrag, eine Abnahme und ein Mahnschreiben völlig unterschiedlich aussehen. Ich setze Claude oder ein OpenAI-Modell ein. Die Ordnerstruktur und das Namensmuster bleiben feste Regeln, damit die Ablage nicht jeden Tag anders aussieht.',
  werkzeuge: ['Google Drive, OneDrive oder SharePoint', 'Netzwerkscanner mit Scan-to-Mail oder Scan-to-Ordner', 'n8n', 'Claude oder OpenAI-Modell'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 40,
    minutesBefore: 3,
    minutesAfter: 1,
    hourlyRate: 60,
    annahme:
      'Ein Betrieb mit 40 Dokumenten pro Woche. Öffnen, umbenennen und einsortieren kosten heute rund 3 Minuten pro Datei, danach bleibt im Schnitt eine Minute für Stichproben und den Prüfordner. Die Zeit für spätere Suchen ist nicht eingerechnet. 60 Euro pro Stunde sind ein angenommener Wert für eine Arbeitsstunde im Betrieb.',
  },
  grenzen: [
    'Steuerlich relevante Belege unterliegen eigenen Aufbewahrungsregeln. Ob Ihre Ablage dafür reicht oder ob ein Buchhaltungsprogramm das übernimmt, klären Sie mit Ihrer Steuerberatung.',
    'Ein lokaler Server ohne Internetzugang lässt sich schwerer anbinden als ein Cloud-Speicher. Es geht, ist aber mehr Arbeit.',
    'Bei sehr sensiblen Unterlagen, etwa Personalakten, lassen wir die KI außen vor oder bauen einen eigenen Ordner ohne automatische Verarbeitung.',
    'Der alte Stapel im Eingangsordner wird nicht von selbst sortiert. Den arbeiten wir auf Wunsch einmal gemeinsam ab, mit Prüfung.',
  ],
  faqs: [
    {
      q: 'Funktioniert das auch mit handschriftlichen Dokumenten?',
      a: 'Mit sauberer Handschrift oft ja, mit krakeliger Notiz eher nicht. Gedruckte Dokumente erkennt die KI in aller Regel gut. Alles, was unsicher ist, landet im Prüfordner statt falsch abgelegt zu werden.',
    },
    {
      q: 'Kann ich meine bestehende Ordnerstruktur behalten?',
      a: 'Wenn sie eine erkennbare Logik hat, ja. Oft lohnt es sich, sie bei der Gelegenheit zu vereinfachen. Drei Ebenen sind meist genug, etwa Bereich, Kunde und Jahr.',
    },
    {
      q: 'Werden meine Dokumente dabei irgendwohin hochgeladen?',
      a: 'Der Text wird zum Lesen an das KI-Modell geschickt, über eine Schnittstelle mit Vertrag zur Auftragsverarbeitung und ohne Training auf Ihren Daten. Die Datei selbst bleibt in Ihrem Speicher. n8n läuft auf einem Server in der EU.',
    },
  ],
  related: [
    { label: 'Rechnungseingang automatisieren', href: '/ablaeufe/rechnungseingang-automatisch' },
    { label: 'Interne Wissenssuche mit KI', href: '/ablaeufe/team-wissen-fragen-ki' },
    { label: 'Wenn der Mitarbeiter geht', href: '/wissen/wenn-der-mitarbeiter-geht' },
  ],
};
