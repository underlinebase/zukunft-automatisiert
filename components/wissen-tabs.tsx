'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { Article } from '@/lib/types';

export default function WissenTabs({ articles }: { articles: Article[] }) {
  const cats = ['ALLE', ...Array.from(new Set(articles.map(a => a.category)))];
  const [tab, setTab] = useState('ALLE');
  const filtered = tab === 'ALLE' ? articles : articles.filter(a => a.category === tab);

  return (
    <>
      <div className="tabs">
        {cats.map(t => (
          <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <div className="wissen-list mag-list">
        {filtered.map((a, i) => (
          <Link key={a.slug} className="wissen-item" href={`/wissen/${a.slug}`}>
            <div className="idx">№ {String(i + 1).padStart(3, '0')}</div>
            <div>
              <h3 className="tight">{a.title}</h3>
              <div className="mono muted" style={{ marginTop: 8, fontSize: 11, letterSpacing: '0.14em' }}>{a.category}</div>
            </div>
            <div className="date">{a.date}</div>
            <div className="read">{a.read_minutes} MIN</div>
          </Link>
        ))}
      </div>
    </>
  );
}
