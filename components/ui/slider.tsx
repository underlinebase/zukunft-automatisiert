'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowIcon } from './icons';

interface SliderProps {
  /** Zugänglicher Name der Liste, z. B. „Branchen“. */
  label: string;
  /** Listeneinträge (<li>). */
  children: ReactNode;
}

/** Abstand, ab dem ein Ende als erreicht gilt (Rundungsfehler beim Scrollen). */
const EDGE_TOLERANCE = 4;
const CARD_GAP = 24;

/**
 * Horizontaler Slider mit CSS-Scroll-Snap. Pfeile erscheinen nur, wenn es mehr
 * Einträge gibt, als in die Breite passen. Wischen und Tastatur funktionieren nativ.
 */
export default function Slider({ label, children }: SliderProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setEdges({
      start: track.scrollLeft <= EDGE_TOLERANCE,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - EDGE_TOLERANCE,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    track.addEventListener('scroll', updateEdges, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener('scroll', updateEdges);
    };
  }, [updateEdges]);

  const scrollByItem = (direction: 1 | -1) => {
    const track = trackRef.current;
    const item = track?.querySelector(':scope > li');
    if (!track || !item) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({ left: direction * (item.clientWidth + CARD_GAP), behavior: reduce ? 'auto' : 'smooth' });
  };

  const scrollable = !(edges.start && edges.end);

  return (
    <div className="slider">
      {scrollable ? (
        <div className="slider__controls">
          <button type="button" className="slider-btn" onClick={() => scrollByItem(-1)} disabled={edges.start} aria-label="Zurück">
            <ArrowIcon className="slider-btn__icon slider-btn__icon--back" />
          </button>
          <button type="button" className="slider-btn" onClick={() => scrollByItem(1)} disabled={edges.end} aria-label="Weiter">
            <ArrowIcon className="slider-btn__icon" />
          </button>
        </div>
      ) : null}
      <ul className="slider__track" ref={trackRef} aria-label={label}>
        {children}
      </ul>
    </div>
  );
}
