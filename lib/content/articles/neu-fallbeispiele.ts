// Neue Artikel (fallbeispiele). Jeder Eintrag erscheint erst ab seinem datePublished.

import type { Article } from '@/lib/types';
import { rechenbeispielHandwerkAngebote } from './rechenbeispiel-handwerk-angebote';
import { rechenbeispielMaklerAnfragen } from './rechenbeispiel-makler-anfragen';

export const FALLBEISPIELE: Article[] = [rechenbeispielHandwerkAngebote, rechenbeispielMaklerAnfragen];
