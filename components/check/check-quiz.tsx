'use client';

import { useRef, useState } from 'react';
import { CHECK_BRANCHEN, CHECK_QUESTIONS, CHECK_UI } from '@/lib/content/check';
import { evaluateCheck, textFor } from '@/lib/check/evaluate';
import type { CheckAblauf, CheckBranche } from '@/lib/check/types';
import CheckProgress from './check-progress';
import CheckStep from './check-step';
import CheckResultView from './check-result';
import { useStepTransition } from './use-step-transition';
import type { StepDirection } from './use-step-transition';

interface CheckQuizProps {
  /** Veröffentlichte Abläufe der Bibliothek, schon auf die nötigen Felder reduziert. */
  ablaeufe: readonly CheckAblauf[];
}

/** Schritt 0 ist die Branche, danach je eine Frage, zuletzt das Ergebnis. */
const TOTAL_STEPS = CHECK_QUESTIONS.length + 1;
const RESULT_STEP = TOTAL_STEPS;
/** Solange keine Branche gewählt ist (nur bei Sprung über die Schritte möglich), gelten die allgemeinen Texte. */
const FALLBACK_BRANCHE: CheckBranche = 'andere';

type Choices = Readonly<Record<string, string>>;

function progressLabel(step: number): string {
  return CHECK_UI.progress.replace('{current}', String(step + 1)).replace('{total}', String(TOTAL_STEPS));
}

/**
 * Der Automatisierungs-Check: eine Frage pro Schritt, Antworten per Klick.
 * Alles bleibt im Zustand dieser Komponente. Nichts wird gespeichert oder verschickt.
 */
export default function CheckQuiz({ ablaeufe }: CheckQuizProps) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<StepDirection>(1);
  const [branche, setBranche] = useState<CheckBranche | null>(null);
  const [choices, setChoices] = useState<Choices>({});
  const panelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useStepTransition(panelRef, headingRef, step, direction);

  const goTo = (next: number) => {
    setDirection(next >= step ? 1 : -1);
    setStep(Math.max(0, Math.min(RESULT_STEP, next)));
  };

  const chooseBranche = (id: string) => {
    const match = CHECK_BRANCHEN.find((option) => option.id === id);
    if (!match) return;
    setBranche(match.id);
    goTo(1);
  };

  const chooseAnswer = (questionId: string, optionId: string) => {
    setChoices((previous) => ({ ...previous, [questionId]: optionId }));
    goTo(step + 1);
  };

  const restart = () => {
    setBranche(null);
    setChoices({});
    goTo(0);
  };

  const activeBranche = branche ?? FALLBACK_BRANCHE;
  const isResult = step === RESULT_STEP;
  const question = step > 0 && !isResult ? CHECK_QUESTIONS[step - 1] : null;
  const isAnswered = step === 0 ? branche !== null : question ? choices[question.id] !== undefined : false;
  const announcement = isResult ? CHECK_UI.resultReady : progressLabel(step);

  const renderStep = () => {
    if (isResult) {
      return (
        <CheckResultView
          result={evaluateCheck({ branche: activeBranche, choices })}
          branche={activeBranche}
          ablaeufe={ablaeufe}
          headingRef={headingRef}
          onRestart={restart}
        />
      );
    }
    if (question) {
      return (
        <CheckStep
          key={question.id}
          id={`check-${question.id}`}
          title={textFor(question.title, activeBranche)}
          hint={question.hint ? textFor(question.hint, activeBranche) : undefined}
          options={question.options}
          selected={choices[question.id]}
          headingRef={headingRef}
          onSelect={(optionId) => chooseAnswer(question.id, optionId)}
        />
      );
    }
    return (
      <CheckStep
        id="check-branche"
        title={CHECK_UI.brancheTitle}
        hint={CHECK_UI.brancheHint}
        options={CHECK_BRANCHEN}
        selected={branche ?? undefined}
        grid
        headingRef={headingRef}
        onSelect={chooseBranche}
      />
    );
  };

  return (
    <div className="check-quiz" role="region" aria-label={CHECK_UI.quizLabel}>
      <CheckProgress done={isResult ? TOTAL_STEPS : step} total={TOTAL_STEPS} label={isResult ? CHECK_UI.resultLabel : progressLabel(step)} />
      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
      <div className="check-panel" ref={panelRef}>
        {renderStep()}
      </div>
      {isResult ? null : (
        <div className="check-nav">
          {step > 0 ? (
            <button type="button" className="check-nav__back" onClick={() => goTo(step - 1)}>
              <span aria-hidden="true">←</span> {CHECK_UI.back}
            </button>
          ) : (
            <span />
          )}
          {isAnswered ? (
            <button type="button" className="btn btn--outline check-nav__next" onClick={() => goTo(step + 1)}>
              {CHECK_UI.next}
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
