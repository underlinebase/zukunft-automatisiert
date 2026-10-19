import type { Ablauf } from './types';

export const angebotAusAufmassEntwurf: Ablauf = {
  id: 1002,
  slug: 'angebot-aus-aufmass-entwurf',
  branche: 'handwerk',
  themen: ['angebote'],
  title: 'Angebot aus dem Aufmaß als Entwurf',
  seoTitle: 'Angebote im Handwerk aus dem Aufmaß automatisch entwerfen',
  lead: 'Aus Aufmaß, Fotos und Ihren Standardpositionen entsteht automatisch ein Angebotsentwurf. Sie prüfen, ergänzen und geben frei. Für Handwerksbetriebe.',
  datePublished: '2026-10-19',
  problem: [
    'Das Aufmaß ist fertig, bevor der Monteur wieder im Auto sitzt. 4,20 Meter Wand, zwei Fenster, ein Heizkörper wird versetzt. Auf dem Block steht alles. Ins Angebot kommt es frühestens am Abend, oft erst am Wochenende, weil tagsüber niemand Zeit hat, Positionen herauszusuchen.',
    'Dabei ist der größte Teil eines Angebots kein Kopfzerbrechen. Es sind Positionen, die Sie schon hundertmal geschrieben haben: Anfahrt, Baustelleneinrichtung, Demontage, Entsorgung. Das Besondere an diesem einen Auftrag macht vielleicht ein Fünftel aus. Trotzdem beginnt jedes Angebot mit einer leeren Vorlage oder mit dem Kopieren eines alten.',
    'Und je länger ein Angebot liegt, desto kühler wird der Kunde. Wer nach zwei Wochen ein Angebot bekommt, hat womöglich schon woanders unterschrieben. Das Schreiben selbst ist also nur die halbe Rechnung. Die andere Hälfte ist die Zeit, die zwischen Aufmaß und Versand vergeht.',
  ],
  heute: [
    'Das Aufmaß steht auf Papier oder als Notiz im Handy.',
    'Im Büro wird es abgetippt und den Leistungen zugeordnet.',
    'Positionen werden aus alten Angeboten zusammenkopiert.',
    'Preise werden in der Preisliste oder beim Großhandel nachgesehen.',
    'Text anpassen, PDF erzeugen, verschicken.',
  ],
  danach: [
    'Der Monteur fotografiert das Aufmaß oder spricht es als Sprachnachricht ein.',
    'Maße und Leistungen werden ausgelesen und Ihren Standardpositionen zugeordnet.',
    'Es entsteht ein Angebotsentwurf mit Mengen und Ihren Preisen.',
    'Unklare Stellen sind markiert, statt geraten zu werden.',
    'Sie prüfen, ergänzen das Besondere und geben frei.',
    'Nach der Freigabe geht das Angebot als PDF an den Kunden.',
  ],
  mensch:
    'Sie prüfen jeden Entwurf, bevor er rausgeht. Mengen, Sonderwünsche, der Satz zum schwierigen Zugang über den Hinterhof: Das bleibt Ihre Arbeit. Die Preise stammen aus Ihrer Preisliste. Wenn Sie immer wieder dieselbe Stelle ändern, passen wir die Standardpositionen an, damit der nächste Entwurf näher dran ist.',
  ki: 'Beim Lesen und Zuordnen. Ein handgeschriebener Aufmaßzettel oder eine eingesprochene Notiz wie „Bad komplett, Wanne raus, bodengleiche Dusche, Fliesen bis 1,20 Meter“ muss in Positionen und Mengen übersetzt werden. Dafür setze ich ein Sprachmodell ein, zum Beispiel Claude. Es wählt aus Ihren vorhandenen Positionen und legt keine neuen an. Gerechnet wird nicht von der KI, sondern von Ihrer Software mit Ihrer Preisliste. Was das Modell nicht sicher zuordnen kann, markiert es für Sie.',
  werkzeuge: ['n8n', 'Claude oder OpenAI-Modell', 'Hero, Plancraft oder Label (je nach Schnittstelle)', 'Gmail oder Outlook'],
  nutzen: 'gross',
  aufwand: 'gross',
  beispiel: {
    perWeek: 10,
    minutesBefore: 23,
    minutesAfter: 8,
    hourlyRate: 70,
    annahme:
      '10 Angebote pro Woche wie im Beispiel auf meiner Startseite. 8 Minuten für das Aufmaß und 15 Minuten fürs Zusammensetzen, danach 8 Minuten fürs Prüfen und Ergänzen.',
  },
  grenzen: [
    'Ohne gepflegte Standardpositionen gibt es nichts, woraus ein Entwurf entstehen kann. Die erste Woche geht oft dafür drauf, Ihre Positionen aufzuräumen.',
    'Ob der Entwurf direkt in Ihrer Handwerkersoftware landet, hängt von deren Schnittstelle ab. Sonst entsteht er als Datei, die Sie importieren.',
    'Bei sehr eigenen Aufträgen, etwa einer Altbausanierung mit vielen Unbekannten, spart der Entwurf wenig. Dort hilft er bei den Standardteilen.',
    'Schlecht lesbare Zettel bleiben schlecht lesbar. Ein Foto bei Tageslicht bringt mehr als jede Technik.',
  ],
  faqs: [
    {
      q: 'Kann KI Angebote für Handwerker schreiben?',
      a: 'Einen Entwurf ja, ein fertiges Angebot nein. Die KI ordnet Aufmaß und Notizen Ihren eigenen Positionen zu. Preise, Prüfung und Freigabe bleiben bei Ihnen.',
    },
    {
      q: 'Welche Handwerkersoftware lässt sich anbinden?',
      a: 'Programme mit offener Schnittstelle lassen sich direkt anbinden. Hero und Plancraft gehören zu den Kandidaten, aber was genau geht, hängt vom Programm, vom Tarif und vom aktuellen Stand der Schnittstelle ab. Das prüfe ich, bevor Sie etwas bezahlen.',
    },
    {
      q: 'Wie lange dauert es, bis die Entwürfe gut sind?',
      a: 'Die ersten Entwürfe brauchen spürbar Korrektur. Mit Ihren echten Aufträgen und angepassten Positionen wird es von Woche zu Woche weniger. Fertig umgesetzt ist der Ablauf in 4 Wochen.',
    },
  ],
  related: [
    { label: 'Angebote automatisch nachfassen', href: '/ablaeufe/angebote-automatisch-nachfassen' },
    { label: 'Angebote schneller schreiben', href: '/wissen/angebote-schneller-schreiben' },
    { label: 'Rechenbeispiel: Angebote im Handwerk', href: '/wissen/rechenbeispiel-handwerk-angebote' },
  ],
};
