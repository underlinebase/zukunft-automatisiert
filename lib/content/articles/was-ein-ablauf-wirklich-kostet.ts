import type { Article } from '@/lib/types';
import { PUBLISHED, PUBLISHED_ISO } from './dates';

export const wasEinAblaufWirklichKostet: Article = {
  id: 5,
  slug: 'was-ein-ablauf-wirklich-kostet',
  title: 'Was ein Ablauf kostet, den niemand misst.',
  date: PUBLISHED,
  datePublished: PUBLISHED_ISO,
  read_minutes: 5,
  category: 'Methodik',
  lead: 'Die meisten Betriebe wissen genau, was die neue Maschine gekostet hat. Was der Papierkram jede Woche kostet, weiß kaum jemand. Dabei ist die Rechnung einfach.',
  body: [
    { kind: 'h2', text: 'Die sichtbaren Minuten' },
    { kind: 'p', text: 'Fangen Sie mit dem an, was Sie sehen. Wie oft kommt der Ablauf in der Woche vor, und wie lange dauert er? Zehn Angebote zu je 30 Minuten sind fünf Stunden. Das ist schnell notiert.' },
    { kind: 'h2', text: 'Die Minuten, die man übersieht' },
    { kind: 'p', text: 'Schwieriger sind die Unterbrechungen. Wer mitten in einer Aufgabe kurz eine Anfrage beantwortet, braucht danach eine Weile, bis er wieder drin ist. Dazu kommen Rückfragen, weil etwas falsch abgetippt wurde, und die Suche nach der einen E-Mail von letzter Woche. Diese Zeit steht in keiner Liste. Schätzen Sie sie ruhig großzügig, sie ist fast immer da.' },
    { kind: 'p', text: 'Manche Kosten sehen gar nicht nach Zeit aus. Ein Angebot, das drei Tage zu spät rausgeht. Ein Interessent, der in der Zwischenzeit woanders unterschrieben hat. Das lässt sich schwer beziffern, deshalb lasse ich es in meiner Rechnung meistens weg. Die Zahl wird dadurch kleiner, aber ehrlicher.' },
    { kind: 'h2', text: 'Die Rechnung' },
    { kind: 'p', text: 'Stunden pro Woche mal Stundensatz mal rund 46 Arbeitswochen. Als Stundensatz setzen Sie an, was die Stunde der Person kostet, die die Arbeit macht. Erledigen Sie es selbst, nehmen Sie Ihren eigenen Satz.' },
    { kind: 'q', text: 'Wer einmal ausgerechnet hat, was die Angebote am Sonntag im Jahr kosten, schaut anders auf seinen Schreibtisch.' },
    { kind: 'p', text: 'Mit dieser Zahl können Sie jedes Angebot für eine Automatisierung prüfen. Meins auch.' },
  ],
  notes: ['Den Zeitrechner für diese Rechnung finden Sie auf der Startseite.'],
};
