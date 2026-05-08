'use client';
import { useEffect, useState } from 'react';

export default function LiveTicker({ items }: { items: string[] }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="ticker" aria-live="polite" data-tick={tick}>
      <span className="live-dot" aria-hidden="true" />
      {items.map((it, i) => (
        <span key={i}>
          {it}
          {i < items.length - 1 && <span className="sep" aria-hidden="true" style={{ margin: '0 7px' }} />}
        </span>
      ))}
    </div>
  );
}
