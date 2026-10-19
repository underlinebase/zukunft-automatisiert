'use client';

import { useRef } from 'react';
import type { RefObject } from 'react';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ui/icons';
import { CHECK_RESULT, THEMA_IDEEN, THEMA_LABELS } from '@/lib/content/check';
import { ABLAEUFE_PAGE } from '@/lib/content/pages';
import { CONTACT_PAGE } from '@/lib/content/site';
import { estimateParts, formatEstimate, formatValue } from '@/lib/check/evaluate';
import { matchAblaeufe } from '@/lib/check/library';
import type { CheckAblauf, CheckBranche, CheckResult as Result, ThemaResult } from '@/lib/check/types';
import { useMotion } from '@/lib/motion/use-motion';

interface CheckResultProps {
  result: Result;
  branche: CheckBranche;
  ablaeufe: readonly CheckAblauf[];
  headingRef: RefObject<HTMLHeadingElement | null>;
  onRestart: () => void;
}

const COUNT_DURATION = 0.9;
const STAGGER = 0.15;
const START = 0.2;

function readDecimals(element: HTMLElement): 0 | 1 {
  return element.dataset.decimals === '1' ? 1 : 0;
}

/** Gerundete Zahl, die beim Erscheinen hochzählt. Screenreader lesen den fertigen Wert aus dem versteckten Text. */
function Estimate({ minutes }: { minutes: number }) {
  const parts = estimateParts(minutes);
  return (
    <>
      <span className="visually-hidden">{`${CHECK_RESULT.approx} ${formatEstimate(minutes)} ${CHECK_RESULT.perWeek}`}</span>
      <span aria-hidden="true">
        {CHECK_RESULT.approx}{' '}
        <span className="check-count" data-count={parts.value} data-decimals={parts.decimals}>
          {formatValue(parts.value, parts.decimals)}
        </span>{' '}
        {parts.unit} {CHECK_RESULT.perWeek}
      </span>
    </>
  );
}

interface SinkProps {
  item: ThemaResult;
  rank: number;
  share: number;
  matches: readonly CheckAblauf[];
  showFallback: boolean;
}

function Sink({ item, rank, share, matches, showFallback }: SinkProps) {
  return (
    <li className="check-sink">
      <div className="check-sink__head">
        <h3 className="check-sink__title">
          <span className="check-sink__rank" aria-hidden="true">{rank}</span>
          {THEMA_LABELS[item.thema]}
        </h3>
        <p className="check-sink__value">
          <Estimate minutes={item.minutesPerWeek} />
        </p>
      </div>
      <div className="check-bar" aria-hidden="true">
        <span className="check-bar__fill" style={{ width: `${Math.round(share * 100)}%` }} />
      </div>
      <p className="check-sink__idea">
        <strong>{CHECK_RESULT.ideaLabel}: </strong>
        {THEMA_IDEEN[item.thema]}
      </p>
      <details className="check-sink__calc">
        <summary>{CHECK_RESULT.rechenwegLabel}</summary>
        <ul>
          {item.lines.map((line) => (
            <li key={`${line.questionId}-${line.text}`}>{line.text}</li>
          ))}
        </ul>
        <p className="muted">{CHECK_RESULT.rechenwegNote}</p>
      </details>
      {matches.length > 0 ? (
        <div className="check-sink__library">
          <p className="check-sink__label">{CHECK_RESULT.libraryLabel}</p>
          <ul>
            {matches.map((ablauf) => (
              <li key={ablauf.slug}>
                <Link href={ablauf.href}>{ablauf.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {showFallback ? (
        <p className="check-sink__library muted">
          {CHECK_RESULT.libraryFallback} <Link href={ABLAEUFE_PAGE.path}>{CHECK_RESULT.libraryLink}</Link>
        </p>
      ) : null}
    </li>
  );
}

/**
 * Ergebnis des Checks. Beim Erscheinen wachsen die Balken, die Stundenzahlen zählen hoch.
 * Bei „Bewegung reduzieren“ steht alles sofort fertig da.
 */
export default function CheckResultView({ result, branche, ablaeufe, headingRef, onRestart }: CheckResultProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const maxMinutes = result.top[0]?.minutesPerWeek ?? 0;
  const matchesByThema = result.top.map((item) => matchAblaeufe(ablaeufe, branche, item.thema));
  const anyMatches = matchesByThema.some((matches) => matches.length > 0);

  useMotion(rootRef, ({ gsap }) => {
    const root = rootRef.current;
    if (!root) return undefined;
    const counters = Array.from(root.querySelectorAll<HTMLElement>('[data-count]'));
    const timeline = gsap.timeline();
    timeline
      .from(root.querySelectorAll('.check-sink'), { opacity: 0, y: 16, duration: 0.45, stagger: STAGGER, ease: 'power2.out' })
      .from(root.querySelectorAll('.check-bar__fill'), { scaleX: 0, transformOrigin: '0% 50%', duration: COUNT_DURATION, stagger: STAGGER, ease: 'power3.out' }, START);
    counters.forEach((element, index) => {
      const decimals = readDecimals(element);
      const state = { value: 0 };
      timeline.to(
        state,
        {
          value: Number(element.dataset.count),
          duration: COUNT_DURATION,
          ease: 'power2.out',
          onUpdate: () => {
            element.textContent = formatValue(state.value, decimals);
          },
        },
        START + index * STAGGER,
      );
    });
    return () => {
      timeline.kill();
      counters.forEach((element) => {
        element.textContent = formatValue(Number(element.dataset.count), readDecimals(element));
      });
    };
  });

  return (
    <div className="check-result" ref={rootRef}>
      <span className="label">{CHECK_RESULT.eyebrow}</span>
      <h2 ref={headingRef} tabIndex={-1} className="check-step__title">
        {result.top.length > 0 ? CHECK_RESULT.title : CHECK_RESULT.emptyTitle}
      </h2>
      {result.top.length > 0 ? (
        <>
          <p className="check-result__note muted">{CHECK_RESULT.estimateNote}</p>
          <ol className="check-result__list">
            {result.top.map((item, index) => (
              <Sink
                key={item.thema}
                item={item}
                rank={index + 1}
                share={maxMinutes > 0 ? item.minutesPerWeek / maxMinutes : 0}
                matches={matchesByThema[index]}
                showFallback={anyMatches && matchesByThema[index].length === 0}
              />
            ))}
          </ol>
          <p className="check-result__total">
            {CHECK_RESULT.totalLabel} <strong>{formatEstimate(result.totalTopMinutes)}</strong> {CHECK_RESULT.perWeek}.
          </p>
          {anyMatches ? null : (
            <p className="check-result__library">
              {CHECK_RESULT.libraryGeneral} <Link href={ABLAEUFE_PAGE.path}>{CHECK_RESULT.libraryLink}</Link>
            </p>
          )}
        </>
      ) : (
        <p>{CHECK_RESULT.emptyText}</p>
      )}
      {result.owner ? <p className="check-result__owner">{CHECK_RESULT.ownerNote}</p> : null}
      <div className="check-result__cta">
        <h3>{CHECK_RESULT.ctaTitle}</h3>
        <p className="muted">{CHECK_RESULT.ctaText}</p>
        <div className="check-result__actions">
          <Link className="btn btn--primary" href={CONTACT_PAGE}>
            {CHECK_RESULT.cta} <ArrowIcon />
          </Link>
          <button type="button" className="btn btn--outline" onClick={onRestart}>
            {CHECK_RESULT.restart}
          </button>
        </div>
      </div>
      <p className="check-result__privacy muted">{CHECK_RESULT.privacy}</p>
    </div>
  );
}
