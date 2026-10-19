// Neue Artikel (ratgeber). Jeder Eintrag erscheint erst ab seinem datePublished.

import type { Article } from '@/lib/types';
import { wasMachtEinKiBerater } from './was-macht-ein-ki-berater';
import { wasKostetKiAutomatisierung } from './was-kostet-ki-automatisierung';
import { n8nMakeOderZapier } from './n8n-make-oder-zapier';
import { kiAgentenImBetrieb } from './ki-agenten-im-betrieb';
import { wasIstProzessautomatisierung } from './was-ist-prozessautomatisierung';
import { kiOderFesterAblauf } from './ki-oder-fester-ablauf';

export const RATGEBER: Article[] = [
  kiOderFesterAblauf,
  wasIstProzessautomatisierung,
  kiAgentenImBetrieb,
  n8nMakeOderZapier,
  wasMachtEinKiBerater,
  wasKostetKiAutomatisierung,
];
