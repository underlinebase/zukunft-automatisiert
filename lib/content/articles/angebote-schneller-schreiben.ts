import type { Article } from '@/lib/types';
import { PUBLISHED, PUBLISHED_ISO } from './dates';

export const angeboteSchnellerSchreiben: Article = {
  id: 6,
  slug: 'angebote-schneller-schreiben',
  title: 'Angebote schneller schreiben, ohne dass sie nach Baukasten klingen.',
  seoTitle: 'Angebote schneller schreiben, ohne Baukasten-Texte',
  date: PUBLISHED,
  datePublished: PUBLISHED_ISO,
  read_minutes: 5,
  category: 'Handwerk',
  seoDescription:
    'Viele Handwerker schreiben Angebote abends, weil jedes wieder von vorn beginnt. Mit gepflegten Standardpositionen entsteht der Entwurf schon aus dem Aufmaß.',
  lead: 'Viele Handwerker schreiben Angebote abends oder am Wochenende. Das liegt selten an fehlendem Fleiß. Meistens liegt es daran, dass jedes Angebot wieder von vorn beginnt.',
  body: [
    { kind: 'h2', text: 'Woher die halbe Stunde kommt' },
    { kind: 'p', text: 'Ein typisches Angebot entsteht so: Aufmaß vom Zettel oder aus dem Handy abtippen, passende Positionen suchen, Preise beim Großhändler nachsehen, den Text anpassen, ein PDF erzeugen und verschicken. Jeder Schritt für sich ist kurz. Zusammen sind es schnell 30 Minuten oder mehr, und das bei Angeboten, die sich zu großen Teilen ähneln.' },
    { kind: 'h2', text: 'Was sich vorbereiten lässt' },
    { kind: 'p', text: 'Die meisten Betriebe haben mehr Standard, als sie denken. Heizungswartung, Zählerschrank, Dachrinne, der Tausch einer Armatur: Die Positionen wiederholen sich. Wenn Ihre Standardpositionen sauber gepflegt sind, kann aus dem Aufmaß ein Entwurf entstehen, bevor Sie am Schreibtisch sitzen.' },
    { kind: 'p', text: 'Der Entwurf bleibt ein Entwurf. Sie prüfen ihn, ergänzen das Besondere und geben ihn frei. Das Angebot bleibt Ihres.' },
    { kind: 'h2', text: 'Damit es nicht nach Baukasten klingt' },
    { kind: 'p', text: 'Kunden merken, wenn ein Text aus Bausteinen zusammengeklebt ist. Deshalb lohnt es sich, die Bausteine einmal ordentlich zu formulieren, in Ihrer Sprache. Ein Satz zur Anfahrt, einer dazu, was der Kunde vorbereiten soll. Das schreibt man einmal, danach hilft es bei jedem Angebot.' },
    { kind: 'p', text: 'Der Satz, der nur zu diesem einen Kunden passt, kommt weiter von Ihnen. Den kann Ihnen keine Software abnehmen, und das ist auch gut so.' },
  ],
  notes: ['Ob Ihre Handwerkersoftware Entwürfe von außen annimmt, hängt vom Programm ab. Das prüfe ich vor jedem Projekt.'],
  related: [
    { label: 'Ablauf: Angebot aus dem Aufmaß als Entwurf', href: '/ablaeufe/angebot-aus-aufmass-entwurf' },
    { label: 'Ablauf: Angebote automatisch nachfassen', href: '/ablaeufe/angebote-automatisch-nachfassen' },
    { label: 'Was ein Ablauf wirklich kostet', href: '/wissen/was-ein-ablauf-wirklich-kostet' },
  ],
};
