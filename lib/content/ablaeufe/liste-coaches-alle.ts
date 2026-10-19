// Abläufe (coaches-alle). Eine Datei je Ablauf, hier nur registrieren.

import type { Ablauf } from './types';
import { erstgespraechSelbstBuchen } from './erstgespraech-selbst-buchen';
import { vorabFragebogenAuswerten } from './vorab-fragebogen-auswerten';
import { terminErinnerungAusfallregel } from './termin-erinnerung-ausfallregel';
import { unterlagenNachSitzung } from './unterlagen-nach-sitzung';
import { rechnungNachSitzung } from './rechnung-nach-sitzung';
import { wartelisteNachruecken } from './warteliste-nachruecken';
import { feedbackNachCoaching } from './feedback-nach-coaching';
import { rechnungseingangAutomatisch } from './rechnungseingang-automatisch';
import { eMailPostfachSortieren } from './e-mail-postfach-sortieren';
import { kontaktformularInsCrm } from './kontaktformular-ins-crm';
import { telefonnotizZurAufgabe } from './telefonnotiz-zur-aufgabe';
import { dokumenteAblegenUmbenennen } from './dokumente-ablegen-umbenennen';
import { teamWissenFragenKi } from './team-wissen-fragen-ki';
import { wochenberichtKennzahlen } from './wochenbericht-kennzahlen';

export const COACHES_ALLE: Ablauf[] = [
  erstgespraechSelbstBuchen,
  vorabFragebogenAuswerten,
  terminErinnerungAusfallregel,
  unterlagenNachSitzung,
  rechnungNachSitzung,
  wartelisteNachruecken,
  feedbackNachCoaching,
  rechnungseingangAutomatisch,
  eMailPostfachSortieren,
  kontaktformularInsCrm,
  telefonnotizZurAufgabe,
  dokumenteAblegenUmbenennen,
  teamWissenFragenKi,
  wochenberichtKennzahlen,
];
