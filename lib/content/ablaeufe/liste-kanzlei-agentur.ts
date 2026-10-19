// Abläufe (kanzlei-agentur). Eine Datei je Ablauf, hier nur registrieren.

import type { Ablauf } from './types';
import { fehlendeBelegeAnfordern } from './fehlende-belege-anfordern';
import { belegeBenennenZuordnen } from './belege-benennen-zuordnen';
import { mandantenOnboardingFormular } from './mandanten-onboarding-formular';
import { fristenErinnerungenMandanten } from './fristen-erinnerungen-mandanten';
import { mandantenanfragenVorsortieren } from './mandantenanfragen-vorsortieren';
import { eRechnungenEingangKanzlei } from './e-rechnungen-eingang-kanzlei';
import { jahresabschlussUnterlagenCheckliste } from './jahresabschluss-unterlagen-checkliste';
import { kundenOnboardingAgentur } from './kunden-onboarding-agentur';
import { statusberichtEntwurf } from './statusbericht-entwurf';
import { zeiterfassungErinnerung } from './zeiterfassung-erinnerung';
import { rechnungsentwurfAusZeiten } from './rechnungsentwurf-aus-zeiten';
import { briefingEinsammeln } from './briefing-einsammeln';
import { freigabenEinholen } from './freigaben-einholen';
import { monatsreportWerbekonten } from './monatsreport-werbekonten';

export const KANZLEI_AGENTUR: Ablauf[] = [
  fehlendeBelegeAnfordern,
  belegeBenennenZuordnen,
  mandantenOnboardingFormular,
  fristenErinnerungenMandanten,
  mandantenanfragenVorsortieren,
  eRechnungenEingangKanzlei,
  jahresabschlussUnterlagenCheckliste,
  kundenOnboardingAgentur,
  statusberichtEntwurf,
  zeiterfassungErinnerung,
  rechnungsentwurfAusZeiten,
  briefingEinsammeln,
  freigabenEinholen,
  monatsreportWerbekonten,
];
