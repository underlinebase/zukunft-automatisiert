'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Ablauf, Branche } from '@/lib/content/ablaeufe/types';
import { BRANCHEN, STUFEN } from '@/lib/content/ablaeufe/types';
import { ablaufSavings } from '@/lib/content/ablaeufe/savings';
import { formatHours } from '@/lib/calculator';

type Filter = Branche | 'alle-anzeigen';

interface AblaufFilterProps {
  groups: { branche: Branche; items: Ablauf[] }[];
}

/** Übersicht der Ablauf-Bibliothek mit Filter nach Branche. Ohne JavaScript sind alle Gruppen sichtbar. */
export default function AblaufFilter({ groups }: AblaufFilterProps) {
  const [active, setActive] = useState<Filter>('alle-anzeigen');
  const visible = active === 'alle-anzeigen' ? groups : groups.filter((group) => group.branche === active);

  return (
    <>
      <div className="tabs" role="group" aria-label="Nach Branche filtern">
        <button type="button" aria-pressed={active === 'alle-anzeigen'} onClick={() => setActive('alle-anzeigen')}>
          Alle
        </button>
        {groups.map((group) => (
          <button key={group.branche} type="button" aria-pressed={active === group.branche} onClick={() => setActive(group.branche)}>
            {BRANCHEN[group.branche]}
          </button>
        ))}
      </div>
      {visible.map((group) => (
        <section key={group.branche} className="ablauf-group" aria-labelledby={`gruppe-${group.branche}`}>
          <h2 id={`gruppe-${group.branche}`} className="ablauf-group__title">{BRANCHEN[group.branche]}</h2>
          <ul className="ablauf-grid">
            {group.items.map((ablauf) => {
              const savings = ablaufSavings(ablauf.beispiel);
              return (
                <li key={ablauf.slug} className="card card--hover ablauf-card">
                  <Link href={`/ablaeufe/${ablauf.slug}`} className="ablauf-card__link">
                    <h3>{ablauf.title}</h3>
                    <p className="muted">{ablauf.lead}</p>
                    <dl className="ablauf-card__facts">
                      <div><dt>Im Beispiel gespart</dt><dd>{formatHours(savings.minutesPerWeek)} pro Woche</dd></div>
                      <div><dt>Nutzen</dt><dd>{STUFEN[ablauf.nutzen]}</dd></div>
                      <div><dt>Aufwand</dt><dd>{STUFEN[ablauf.aufwand]}</dd></div>
                    </dl>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </>
  );
}
