// Rechenbeispiel einer Ablaufseite: gesparte Zeit und ihr Wert, mit 46 Arbeitswochen wie im Zeitrechner.

import { WORK_WEEKS_PER_YEAR } from '@/lib/calculator';
import type { AblaufBeispiel } from './types';

export interface AblaufSavings {
  minutesPerCase: number;
  minutesPerWeek: number;
  hoursPerYear: number;
  euroPerYear: number;
}

export function ablaufSavings(beispiel: AblaufBeispiel): AblaufSavings {
  const minutesPerCase = Math.max(0, beispiel.minutesBefore - beispiel.minutesAfter);
  const minutesPerWeek = minutesPerCase * beispiel.perWeek;
  const hoursPerYear = Math.round((minutesPerWeek * WORK_WEEKS_PER_YEAR) / 60);
  return { minutesPerCase, minutesPerWeek, hoursPerYear, euroPerYear: Math.round(hoursPerYear * beispiel.hourlyRate) };
}
