// Arbeit auf einen ruhigen Moment nach dem Laden verschieben.

/** Spätestens nach dieser Zeit läuft der Callback, auch wenn der Browser nie ruhig wird. */
export const IDLE_TIMEOUT_MS = 2000;

/** Ersatz für Browser ohne requestIdleCallback (z. B. ältere Safari-Versionen). */
const FALLBACK_DELAY_MS = 200;

interface IdleScheduler {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
  setTimeout: (callback: () => void, delay: number) => number;
  clearTimeout: (handle: number) => void;
}

/**
 * Führt `callback` aus, sobald der Browser Zeit hat (höchstens nach `timeout` ms).
 * Gibt eine Funktion zurück, die das Vorhaben abbricht.
 */
export function onIdle(
  callback: () => void,
  timeout: number = IDLE_TIMEOUT_MS,
  scheduler: IdleScheduler = window as unknown as IdleScheduler,
): () => void {
  if (scheduler.requestIdleCallback && scheduler.cancelIdleCallback) {
    const handle = scheduler.requestIdleCallback(callback, { timeout });
    return () => scheduler.cancelIdleCallback?.(handle);
  }
  const handle = scheduler.setTimeout(callback, FALLBACK_DELAY_MS);
  return () => scheduler.clearTimeout(handle);
}
