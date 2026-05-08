'use client';
import { useState } from 'react';
import type { ServiceFaq } from '@/lib/types';

export default function FAQ({ items }: { items: ServiceFaq[] }) {
  const [open, setOpen] = useState(-1);
  return (
    <div className="faq">
      {items.map((it, i) => (
        <div key={i} className={`faq__item ${open === i ? 'open' : ''}`} onClick={() => setOpen(open === i ? -1 : i)}>
          <div className="faq__q">
            <span>{it.q}</span>
            <span className="plus" aria-hidden="true">+</span>
          </div>
          <div className="faq__a">{it.a}</div>
        </div>
      ))}
    </div>
  );
}
