// Abläufe (handwerk-makler). Eine Datei je Ablauf, hier nur registrieren.

import type { Ablauf } from './types';
import { anfragenZentralErfassenHandwerk } from './anfragen-zentral-erfassen-handwerk';
import { angebotAusAufmassEntwurf } from './angebot-aus-aufmass-entwurf';
import { angeboteAutomatischNachfassen } from './angebote-automatisch-nachfassen';
import { termineBestaetigenErinnernHandwerk } from './termine-bestaetigen-erinnern-handwerk';
import { baustellenfotosAutomatischAblegen } from './baustellenfotos-automatisch-ablegen';
import { rechnungNachAbnahmeEntwurf } from './rechnung-nach-abnahme-entwurf';
import { googleBewertungNachAuftrag } from './google-bewertung-nach-auftrag';
import { portalAnfragenSofortBeantworten } from './portal-anfragen-sofort-beantworten';
import { interessentenVorqualifizieren } from './interessenten-vorqualifizieren';
import { besichtigungstermineSelbstBuchen } from './besichtigungstermine-selbst-buchen';
import { selbstauskunftUnterlagenEinsammeln } from './selbstauskunft-unterlagen-einsammeln';
import { exposeEntwurfMitKi } from './expose-entwurf-mit-ki';
import { eigentuemerReportingAutomatisch } from './eigentuemer-reporting-automatisch';
import { nachfassenNachBesichtigung } from './nachfassen-nach-besichtigung';

export const HANDWERK_MAKLER: Ablauf[] = [
  anfragenZentralErfassenHandwerk,
  angebotAusAufmassEntwurf,
  angeboteAutomatischNachfassen,
  termineBestaetigenErinnernHandwerk,
  baustellenfotosAutomatischAblegen,
  rechnungNachAbnahmeEntwurf,
  googleBewertungNachAuftrag,
  portalAnfragenSofortBeantworten,
  interessentenVorqualifizieren,
  besichtigungstermineSelbstBuchen,
  selbstauskunftUnterlagenEinsammeln,
  exposeEntwurfMitKi,
  eigentuemerReportingAutomatisch,
  nachfassenNachBesichtigung,
];
