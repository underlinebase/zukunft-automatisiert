import type { Article } from '@/lib/types';
import { PUBLISHED, PUBLISHED_ISO } from './dates';

export const belegeEinsammelnOhneNachlaufen: Article = {
  id: 8,
  slug: 'belege-einsammeln-ohne-nachlaufen',
  title: 'Belege einsammeln, ohne zum Bittsteller zu werden.',
  date: PUBLISHED,
  datePublished: PUBLISHED_ISO,
  read_minutes: 5,
  category: 'Kanzlei',
  lead: 'In vielen Kanzleien verbringen Fachkräfte jeden Monat Stunden damit, Mandanten an fehlende Belege zu erinnern. Das ist teuer und für beide Seiten unangenehm.',
  body: [
    { kind: 'h2', text: 'Warum Mandanten nicht reagieren' },
    { kind: 'p', text: 'Selten aus bösem Willen. Meistens ist die Anfrage zu ungenau. „Bitte schicken Sie die fehlenden Belege für März“ klingt klar, ist es aber nicht. Welche Belege? Der Mandant müsste selbst suchen, und das schiebt er auf.' },
    { kind: 'h2', text: 'Eine Liste statt einer Bitte' },
    { kind: 'p', text: 'Besser funktioniert eine konkrete Liste mit Datum und Betrag, dazu der Empfänger, wenn er bekannt ist. Und ein einfacher Weg, den Beleg hochzuladen, am besten direkt vom Handy. Wer genau weiß, was fehlt, erledigt es eher sofort.' },
    { kind: 'p', text: 'Diese Liste lässt sich aus dem Abgleich von Kontoauszug und vorhandenen Belegen erstellen. Ihr Team prüft sie kurz, bevor sie rausgeht. Die Erinnerung nach einer Woche kann dann automatisch folgen, nach zwei Wochen noch einmal, freundlich und ohne dass jemand daran denken muss.' },
    { kind: 'h2', text: 'Was beim Team bleibt' },
    { kind: 'p', text: 'Die Fälle, in denen nach mehreren Erinnerungen immer noch nichts kommt. Das sind meist wenige. Für die lohnt sich dann auch ein Anruf.' },
  ],
  notes: ['Welche Schritte sich vor Ihrer Kanzleisoftware automatisieren lassen, hängt von Ihrer Arbeitsweise ab. Das kläre ich vor dem Start.'],
};
