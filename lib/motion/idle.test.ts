import { describe, expect, test, vi } from 'vitest';
import { IDLE_TIMEOUT_MS, onIdle } from './idle';

function fakeScheduler(withIdle: boolean) {
  return {
    requestIdleCallback: withIdle ? vi.fn(() => 7) : undefined,
    cancelIdleCallback: withIdle ? vi.fn() : undefined,
    setTimeout: vi.fn(() => 3),
    clearTimeout: vi.fn(),
  };
}

describe('onIdle', () => {
  test('nutzt requestIdleCallback mit Zeitlimit und kann abbrechen', () => {
    const scheduler = fakeScheduler(true);
    const callback = vi.fn();
    const cancel = onIdle(callback, undefined, scheduler);
    expect(scheduler.requestIdleCallback).toHaveBeenCalledWith(callback, { timeout: IDLE_TIMEOUT_MS });
    cancel();
    expect(scheduler.cancelIdleCallback).toHaveBeenCalledWith(7);
    expect(scheduler.setTimeout).not.toHaveBeenCalled();
  });

  test('weicht ohne requestIdleCallback auf setTimeout aus', () => {
    const scheduler = fakeScheduler(false);
    const cancel = onIdle(vi.fn(), 500, scheduler);
    expect(scheduler.setTimeout).toHaveBeenCalledOnce();
    cancel();
    expect(scheduler.clearTimeout).toHaveBeenCalledWith(3);
  });
});
