import type { Ablauf } from './types';

export const eRechnungenEingangKanzlei: Ablauf = {
  id: 2006,
  slug: 'e-rechnungen-eingang-kanzlei',
  branche: 'steuerberater',
  themen: ['rechnungen', 'dokumente'],
  title: 'E-Rechnungen im Kanzlei-Eingang',
  lead: 'E-Rechnungen von Mandanten automatisch erkennen, lesbar machen und im Original ablegen. XRechnung und ZUGFeRD ohne Rätselraten am Bildschirm.',
  datePublished: '2026-10-19',
  problem: [
    'Seit dem 1. Januar 2025 müssen Unternehmen in Deutschland E-Rechnungen empfangen können. Bei vielen Mandanten heißt das in der Praxis: Sie leiten eine XML-Datei an die Kanzlei weiter und fragen, was das ist. Öffnet man die Datei, sieht man Zeilen voller Daten, aber keine Rechnung.',
    'Dazu kommen ZUGFeRD-Rechnungen, bei denen in einem gewöhnlichen PDF ein Datensatz steckt, und einfache PDFs, die der Absender „E-Rechnung“ nennt, obwohl sie keine sind. Ihr Team muss jedes Mal herausfinden, was vorliegt, eine lesbare Ansicht erzeugen und darauf achten, dass das Original erhalten bleibt.',
    'Ab 2027 müssen Unternehmen mit mehr als 800.000 € Vorjahresumsatz E-Rechnungen verschicken, ab 2028 alle. Der Anteil im Eingang wird also steigen. Wer jetzt einen sauberen Weg einrichtet, hat später weniger Arbeit damit.',
  ],
  heute: [
    'Weitergeleitete Anhänge öffnen und das Format erraten.',
    'XML-Dateien mit einem Anzeigeprogramm lesbar machen.',
    'Prüfen, ob ein PDF einen Datensatz enthält oder nur ein PDF ist.',
    'Original und lesbare Fassung getrennt ablegen.',
    'Beim Mandanten nachfragen, wenn eine Datei unvollständig oder beschädigt ist.',
  ],
  danach: [
    'Der Ablauf erkennt im Belegpostfach XRechnung, ZUGFeRD und einfache PDFs.',
    'Bei E-Rechnungen liest er die Daten direkt aus der Datei: Aussteller, Nummer, Datum, Beträge, Steuer.',
    'Er prüft das Format auf grobe Fehler und meldet Dateien, die sich nicht lesen lassen.',
    'Für Ihr Team erzeugt er eine lesbare Ansicht, das Original bleibt unverändert.',
    'Beides geht in den Mandantenordner oder auf den Upload-Weg, den Ihre Kanzlei vorsieht.',
    'Einfache PDFs laufen weiter wie bisher und werden als „keine E-Rechnung“ markiert.',
  ],
  mensch:
    'Die steuerliche Würdigung bleibt bei Ihrem Team: Ist die Rechnung ordnungsgemäß, stimmt der Vorsteuerabzug, gehört sie überhaupt zu diesem Mandanten? Der Ablauf nimmt Ihnen die Formatfragen ab, nicht die fachlichen. Ihr Team sieht die gemeldeten Problemfälle und entscheidet, ob beim Mandanten oder beim Rechnungssteller nachgefragt wird.',
  werkzeuge: ['n8n', 'eigenes Belegpostfach', 'Prüfprogramm für XRechnung, z. B. der KoSIT-Validator', 'Ihr DMS oder DATEV Unternehmen online'],
  nutzen: 'mittel',
  aufwand: 'mittel',
  beispiel: {
    perWeek: 50,
    minutesBefore: 5,
    minutesAfter: 1,
    hourlyRate: 85,
    annahme:
      'Eine Kanzlei, bei der pro Woche etwa 50 E-Rechnungen von Mandanten eingehen. Bis 2028 dürfte die Zahl steigen, heute ist sie eine Annahme. Typische Minuten, kein Kundenfall.',
  },
  grenzen: [
    'Der Ablauf prüft Format und Pflichtfelder, keine steuerliche Ordnungsmäßigkeit. Eine formal korrekte Datei kann inhaltlich falsch sein.',
    'Nicht jedes ZUGFeRD-Profil erfüllt die Anforderungen an eine E-Rechnung. Solche Fälle meldet der Ablauf, die Bewertung trifft Ihr Team.',
    'Wie die Dateien in Ihre Kanzleisoftware kommen, hängt von deren Importwegen ab. Das prüfe ich vor dem Start und verspreche keine Schnittstelle, die ich nicht gesehen habe.',
  ],
  faqs: [
    {
      q: 'Ist ein PDF per E-Mail eine E-Rechnung?',
      a: 'Nein. Eine E-Rechnung im Sinne des Gesetzes hat ein strukturiertes Datenformat, etwa XRechnung oder ZUGFeRD. Ein PDF ohne Datensatz ist eine sonstige Rechnung. In der Übergangszeit dürfen viele Unternehmen solche Rechnungen noch verschicken.',
    },
    {
      q: 'Muss die XML-Datei aufbewahrt werden?',
      a: 'Ja. Bei einer E-Rechnung ist die Datei das Original und muss elektronisch aufbewahrt werden. Ein Ausdruck oder ein Bild davon reicht nicht. Deshalb legt der Ablauf das Original immer unverändert ab und die lesbare Ansicht daneben.',
    },
    {
      q: 'Brauchen wir dafür KI?',
      a: 'Nein. E-Rechnungen sind maschinenlesbar, das Auslesen folgt festen Regeln. Das ist günstiger und verlässlicher als ein KI-Modell. KI käme erst ins Spiel, wenn derselbe Ablauf auch Fotos und Scans lesen soll.',
    },
  ],
  related: [
    { label: 'Ablauf: Belege benennen und zuordnen', href: '/ablaeufe/belege-benennen-zuordnen' },
    { label: 'Wann sich Automatisierung lohnt', href: '/wissen/wann-sich-automatisierung-lohnt' },
    { label: 'Erstgespräch vereinbaren', href: '/kontakt' },
  ],
};
