'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Article } from '@/lib/types';

const ALL = 'Alle';

export default function WissenTabs({ articles }: { articles: Article[] }) {
  const categories = [ALL, ...Array.from(new Set(articles.map((article) => article.category)))];
  const [active, setActive] = useState(ALL);
  const filtered = active === ALL ? articles : articles.filter((article) => article.category === active);

  return (
    <>
      <div className="tabs" role="group" aria-label="Nach Thema filtern">
        {categories.map((category) => (
          <button key={category} type="button" aria-pressed={active === category} onClick={() => setActive(category)}>
            {category}
          </button>
        ))}
      </div>
      <ul className="article-list">
        {filtered.map((article) => (
          <li key={article.slug}>
            <Link href={`/wissen/${article.slug}`}>
              <h2>{article.title}</h2>
              <span className="article-list__meta">{article.category} · {article.read_minutes} Min.</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
