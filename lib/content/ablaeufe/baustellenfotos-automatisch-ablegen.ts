import type { Ablauf } from './types';

export const baustellenfotosAutomatischAblegen: Ablauf = {
  id: 1005,
  slug: 'baustellenfotos-automatisch-ablegen',
  branche: 'handwerk',
  themen: ['dokumente'],
  title: 'Baustellenfotos automatisch ablegen',
  seoTitle: 'Baustellenfotos automatisch im Kundenordner ablegen',
  lead: 'Baustellenfotos vom Handy landen automatisch im richtigen Kundenordner, mit Datum und Auftragsnummer. Schluss mit Sortieren am Freitagnachmittag.',
  datePublished: '2026-10-19',
  problem: [
    'Auf dem Handy eines Gesellen sammeln sich in einem Jahr ein paar tausend Fotos. Rohbau, Leitungsverlauf vor dem Zuputzen, Wasserschaden, Typenschild der alten Therme, dazwischen das Grillfest vom Sommer.',
    'Gebraucht werden die Bilder genau dann, wenn es unangenehm wird. Der Kunde reklamiert, die Versicherung will Belege, oder jemand muss wissen, wo die Leitung hinter der Fliese verläuft. Dann wird gesucht. Auf dem Handy des Gesellen, der inzwischen bei einem anderen Betrieb arbeitet.',
    'Deshalb sitzt in vielen Büros am Ende der Woche jemand und zieht Fotos in Kundenordner. Mühsam, fehleranfällig und nie ganz vollständig, weil die Hälfte der Bilder gar nicht erst im Büro ankommt. Im Rechenbeispiel auf meiner Startseite setze ich dafür 8 Minuten pro Auftrag an.',
  ],
  heute: [
    'Fotos bleiben auf den Handys der Monteure.',
    'Einige schicken Bilder per WhatsApp ans Büro, andere gar nicht.',
    'Im Büro werden Fotos heruntergeladen, umbenannt und in Ordner verschoben.',
    'Welches Foto zu welchem Auftrag gehört, muss jemand erraten oder nachfragen.',
  ],
  danach: [
    'Der Monteur schickt die Fotos an eine feste Mail-Adresse oder lädt sie in einen Eingangsordner.',
    'Im Betreff oder im Ordnernamen steht die Auftragsnummer, mehr muss er nicht tun.',
    'Der Ablauf benennt jedes Foto mit Datum und Auftrag und legt es im Kundenordner ab.',
    'Fehlt die Auftragsnummer, kommt eine kurze Rückfrage aufs Handy des Absenders.',
    'Im Büro sieht man pro Auftrag alle Bilder in zeitlicher Reihenfolge.',
  ],
  mensch:
    'Fotografieren bleibt Handarbeit auf der Baustelle. Und Ihre Leute müssen sich an eine Regel gewöhnen: Fotos mit Auftragsnummer abschicken, am selben Tag. Das ist die eigentliche Umstellung, nicht die Technik. Welche Bilder an den Kunden, den Architekten oder die Versicherung gehen, entscheiden weiter Sie.',
  werkzeuge: ['n8n', 'Google Drive, OneDrive oder Dropbox', 'Gmail oder Outlook als Foto-Eingang', 'Hero oder Craftnote (je nach Schnittstelle)'],
  nutzen: 'mittel',
  aufwand: 'klein',
  beispiel: {
    perWeek: 10,
    minutesBefore: 8,
    minutesAfter: 1,
    hourlyRate: 70,
    annahme:
      '10 Aufträge pro Woche mit Fotos, wie im Rechenbeispiel auf meiner Startseite. 8 Minuten Sortieren pro Auftrag, danach 1 Minute für Rückfragen bei fehlender Auftragsnummer.',
  },
  grenzen: [
    'Fotografiert Ihr Team schon in der App Ihrer Handwerkersoftware, liegen die Bilder dort bereits am Auftrag. Dann brauchen Sie diesen Ablauf vermutlich nicht. Das sage ich Ihnen im Erstgespräch.',
    'Ohne Auftragsnummer oder Kundennamen kann der Ablauf nichts zuordnen. Raten lasse ich ihn nicht.',
    'Fotos aus Wohnungen von Kunden sind personenbezogene Daten. Sie gehören auf einen Firmenspeicher, nicht in private Cloud-Konten der Mitarbeiter.',
    'Eine WhatsApp-Gruppe als Foto-Eingang geht nur über die offizielle Business-Schnittstelle. Eine eigene Mail-Adresse ist meist einfacher.',
    'Videos sind groß. Wer viel filmt, braucht genug Platz in der Ablage, und per Mail scheitern große Dateien oft an der Größe für Anhänge. Dann ist der geteilte Ordner der bessere Weg.',
  ],
  faqs: [
    {
      q: 'Wie organisiere ich Baustellenfotos im Handwerk?',
      a: 'Mit einer festen Regel: ein Ordner pro Auftrag, Dateiname mit Datum und Auftragsnummer, abgelegt am selben Tag. Umbenennen und Verschieben übernimmt der Ablauf. Die Regel selbst muss Ihr Team mittragen.',
    },
    {
      q: 'Brauchen meine Monteure dafür eine neue App?',
      a: 'Nein. Sie schicken Fotos per Mail vom Handy oder laden sie in einen geteilten Ordner. Beides geht mit dem Handy, das sie schon haben.',
    },
    {
      q: 'Wie lange sollte ich Baustellenfotos aufbewahren?',
      a: 'Ich empfehle, sie mindestens so lange zu behalten, wie Mängelansprüche möglich sind. Bei Arbeiten an einem Bauwerk sind das nach BGB in der Regel fünf Jahre ab Abnahme. Was in Ihrem Fall gilt, klären Sie im Zweifel mit Ihrem Anwalt.',
    },
  ],
  related: [
    { label: 'Anfragen an einer Stelle sammeln', href: '/ablaeufe/anfragen-zentral-erfassen-handwerk' },
    { label: 'Rechnung nach Abnahme als Entwurf', href: '/ablaeufe/rechnung-nach-abnahme-entwurf' },
    { label: 'Datenschutz bei Automatisierung', href: '/wissen/datenschutz-bei-automatisierung' },
  ],
};
