import type { Ablauf } from './types';

export const belegeBenennenZuordnen: Ablauf = {
  id: 2002,
  slug: 'belege-benennen-zuordnen',
  branche: 'steuerberater',
  themen: ['dokumente'],
  title: 'Belege benennen und zuordnen',
  seoTitle: 'Belege automatisch zuordnen',
  lead: 'Belege kommen als Foto, PDF oder ZIP. Der Ablauf benennt sie einheitlich, ordnet sie dem richtigen Mandanten zu und legt sie ab. Ihr Team prüft Zweifelsfälle.',
  datePublished: '2026-10-19',
  problem: [
    'Montagmorgen, das Kanzleipostfach. Ein Mandant schickt zwölf Handyfotos, jedes in einer eigenen E-Mail, Betreff „Belege“. Ein anderer schickt eine ZIP-Datei mit Dateinamen wie scan_0042.pdf. Ein dritter leitet eine Rechnung weiter, die eigentlich an seine Frau ging.',
    'Bevor die eigentliche Buchhaltung beginnt, öffnet jemand jede Datei, schaut nach, worum es geht, benennt sie um und schiebt sie in den richtigen Ordner oder lädt sie für den Mandanten hoch. Pro Sendung sind das ein paar Minuten. Bei vierzig Sendungen pro Woche ist es fast ein halber Arbeitstag.',
    'Die Arbeit ist eintönig und deshalb fehleranfällig. Ein falsch abgelegter Beleg fällt oft erst Wochen später auf, wenn er beim falschen Mandanten in der Buchhaltung auftaucht. Dann sucht man doppelt.',
  ],
  heute: [
    'E-Mail öffnen und Anhänge einzeln speichern.',
    'ZIP-Dateien entpacken, Fotos drehen, unlesbare Scans aussortieren.',
    'Jeden Beleg ansehen und nach dem Schema der Kanzlei umbenennen.',
    'Den Absender einem Mandanten zuordnen, bei unbekannten Adressen nachfragen.',
    'Dateien in den Mandantenordner legen oder hochladen.',
  ],
  danach: [
    'Der Ablauf holt Anhänge aus einem eigenen Belegpostfach, entpackt ZIP-Dateien und trennt mehrseitige Scans.',
    'Über die Absenderadresse ordnet er die Sendung dem Mandanten zu. Unbekannte Absender landen in einer Prüfliste.',
    'Aus jedem Beleg liest er Datum, Aussteller und Betrag und benennt die Datei nach Ihrem Schema, etwa Mandantennummer, Datum, Aussteller.',
    'Die Datei kommt in den richtigen Ordner oder auf den Upload-Weg, den Ihre Kanzlei vorsieht.',
    'Unscharfe Fotos und mögliche Dubletten meldet er, statt sie abzulegen.',
    'Der Mandant bekommt eine kurze Eingangsbestätigung mit der Zahl der erkannten Belege.',
  ],
  mensch:
    'Ihr Team schaut einmal am Tag in die Prüfliste: unbekannte Absender, unsichere Zuordnungen, schlechte Fotos. Das sind meist wenige Fälle. Das Benennschema legen Sie fest, und Sie entscheiden, welche Belegarten der Ablauf allein ablegen darf und welche immer jemand ansieht. Kontieren und Buchen bleibt ohnehin bei Ihnen.',
  ki: 'Beim Lesen der Belege. Ein Foto vom Tankbeleg hat keine Struktur, die ein fester Ablauf erkennen könnte. Ein KI-Modell liest Datum, Aussteller und Betrag heraus und gibt an, wie sicher es sich ist. Unter einer Schwelle, die wir gemeinsam festlegen, geht der Beleg in die Prüfliste. Echte E-Rechnungen brauchen keine KI, dort stehen die Daten schon maschinenlesbar in der Datei.',
  werkzeuge: ['n8n', 'eigenes Belegpostfach in Outlook oder Gmail', 'Claude oder ein OpenAI-Modell zum Auslesen', 'Ihr DMS, ein Ordner oder DATEV Unternehmen online'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 40,
    minutesBefore: 6,
    minutesAfter: 1,
    hourlyRate: 85,
    annahme:
      'Eine Kanzlei mit etwa 40 Belegsendungen pro Woche per E-Mail, oft mit mehreren Belegen je Sendung. Die Minute danach ist der Blick in die Prüfliste. Typische Werte, kein Kundenfall.',
  },
  grenzen: [
    'Handschriftliche Quittungen und stark zerknitterte Kassenzettel liest auch eine KI nicht zuverlässig. Die gehen in die Prüfliste.',
    'Die Zuordnung über die Absenderadresse klappt nur, wenn Mandanten von bekannten Adressen schreiben. Ein eigenes Belegpostfach hilft dabei.',
    'Ob der Ablauf Dateien direkt an Ihre Kanzleisoftware übergeben kann, hängt von deren Schnittstellen ab. Das prüfe ich vorher. Ein Ordner, den Ihr Team abholt, geht immer.',
  ],
  faqs: [
    {
      q: 'Darf eine KI Belege von Mandanten lesen?',
      a: 'Das hängt vom Dienst und vom Vertrag ab. Steuerberater unterliegen der Verschwiegenheit nach § 203 StGB und dem Berufsrecht, eingebundene Dienstleister müssen entsprechend verpflichtet sein. Ich setze nur Dienste ein, die keine Daten zum Training verwenden, und wir klären vor dem Start, welcher Dienst für Ihre Kanzlei in Frage kommt. Geht das nicht, liest der Ablauf nur strukturierte Dateien, und alles andere bleibt bei Ihrem Team.',
    },
    {
      q: 'Was passiert mit Dubletten?',
      a: 'Der Ablauf vergleicht Datum, Betrag und Aussteller mit den Belegen der letzten Wochen. Sieht ein Beleg aus wie einer, der schon da ist, landet er in der Prüfliste statt im Ordner.',
    },
    {
      q: 'Müssen Mandanten etwas umstellen?',
      a: 'Nur eine Kleinigkeit: Belege an eine feste Adresse schicken. Wer lieber direkt in DATEV Unternehmen online oder per App hochlädt, macht das weiter. Der Ablauf kümmert sich um das, was per E-Mail kommt.',
    },
  ],
  related: [
    { label: 'Ablauf: Fehlende Belege anfordern', href: '/ablaeufe/fehlende-belege-anfordern' },
    { label: 'Ablauf: E-Rechnungen im Kanzlei-Eingang', href: '/ablaeufe/e-rechnungen-eingang-kanzlei' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
  ],
};
