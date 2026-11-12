'use client';

import { useId, useState } from 'react';
import type { NavLink } from '@/lib/content/site';
import type { Faq } from '@/lib/content/types';
import { PlusIcon } from '@/components/ui/icons';
import SectionHead from '@/components/ui/section-head';
import LinkList from '@/components/ui/link-list';

interface FaqSectionProps {
  intro: { title: string };
  items: readonly Faq[];
  /** Weiterführende Links unter der Überschrift (Startseite). */
  reading?: { title: string; links: readonly NavLink[] };
  tone?: 'white' | 'gray';
}

export default function FaqSection({ intro, items, reading, tone = 'white' }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className={`section tone-${tone}`} id="fragen" aria-labelledby="faq-title">
      <div className="container faq">
        <div className="faq__aside">
          <SectionHead title={intro.title} id="faq-title" />
          {reading ? (
            <nav className="faq__reading" aria-labelledby="weiterlesen-title">
              <h3 id="weiterlesen-title" className="faq__reading-title">{reading.title}</h3>
              <LinkList links={reading.links} />
            </nav>
          ) : null}
        </div>
        <div className="faq__list">
          {items.map((item, index) => {
            const isOpen = open === index;
            const buttonId = `${baseId}-q${index}`;
            const panelId = `${baseId}-a${index}`;
            return (
              <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <h3 className="faq__heading">
                  <button
                    id={buttonId}
                    type="button"
                    className="faq__button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <PlusIcon className="faq__icon" />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} className="faq__panel" hidden={!isOpen}>
                  <div className="faq__panel-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
