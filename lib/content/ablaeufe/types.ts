// Datenmodell der Ablauf-Bibliothek: ein Ablauf je Seite, immer gleich aufgebaut
// (Problem, heute, danach, was der Mensch macht, wo KI hilft, Rechenbeispiel, Grenzen, FAQ).

import type { ArticleLink } from '@/lib/types';
import type { Faq } from '@/lib/content/types';

export type Branche = 'handwerk' | 'immobilienmakler' | 'steuerberater' | 'agenturen' | 'coaches' | 'alle';

/** Themen verbinden Abläufe mit dem Automatisierungs-Check. */
export type Thema =
  | 'anfragen'
  | 'angebote'
  | 'nachfassen'
  | 'termine'
  | 'dokumente'
  | 'rechnungen'
  | 'kommunikation'
  | 'reporting'
  | 'onboarding'
  | 'bewertungen'
  | 'wissen';

export type Stufe = 'klein' | 'mittel' | 'gross';

/** Rechenbeispiel. Alle Werte sind Annahmen und werden auf der Seite als solche genannt. */
export interface AblaufBeispiel {
  perWeek: number;
  minutesBefore: number;
  minutesAfter: number;
  hourlyRate: number;
  /** Ein Satz, woher die Annahme kommt, z. B. „ein Betrieb mit 8 Angeboten pro Woche“. */
  annahme: string;
}

export interface Ablauf {
  id: number;
  slug: string;
  branche: Branche;
  themen: Thema[];
  /** Kurz und konkret, z. B. „Angebote automatisch nachfassen“. */
  title: string;
  /** Max. 60 Zeichen inkl. Marke, nur wenn der Titel dafür zu lang ist oder der Suchbegriff fehlt. */
  seoTitle?: string;
  /** 1–2 Sätze, wird Meta-Description (max. 160 Zeichen). */
  lead: string;
  datePublished: string;
  /** Absätze: Wie es heute läuft und was es kostet. */
  problem: string[];
  /** Schritte heute, je ein kurzer Satz. */
  heute: string[];
  /** Schritte mit Automatisierung, je ein kurzer Satz. */
  danach: string[];
  /** Was der Mensch weiter selbst macht (Prüfen, Freigeben …). */
  mensch: string;
  /** Wo KI hilft. Fehlt das Feld, läuft der Ablauf mit festen Regeln ohne KI. */
  ki?: string;
  /** Werkzeuge, z. B. „n8n“, „Gmail oder Outlook“, „Lexware Office“. */
  werkzeuge: string[];
  nutzen: Stufe;
  aufwand: Stufe;
  beispiel: AblaufBeispiel;
  /** Was nicht geht, Risiken, Voraussetzungen. */
  grenzen: string[];
  faqs: Faq[];
  related?: ArticleLink[];
}

export const BRANCHEN: Record<Branche, string> = {
  handwerk: 'Handwerk',
  immobilienmakler: 'Immobilienmakler',
  steuerberater: 'Steuerkanzleien',
  agenturen: 'Agenturen',
  coaches: 'Coaches',
  alle: 'Für alle Betriebe',
};

export const BRANCHEN_ORDER: readonly Branche[] = ['handwerk', 'immobilienmakler', 'steuerberater', 'agenturen', 'coaches', 'alle'];

export const STUFEN: Record<Stufe, string> = { klein: 'gering', mittel: 'mittel', gross: 'hoch' };
