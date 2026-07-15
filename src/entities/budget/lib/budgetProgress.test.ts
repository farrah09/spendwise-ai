import { describe, expect, it } from '@jest/globals';

import { budgetProgress } from './budgetProgress';

describe('budgetProgress', () => {
  it('reports the spent ratio under the limit', () => {
    const progress = budgetProgress(300, 400);
    expect(progress.ratio).toBeCloseTo(0.75);
    expect(progress.barRatio).toBeCloseTo(0.75);
    expect(progress.isOver).toBe(false);
  });

  it('keeps the true ratio but clamps the bar when over budget', () => {
    const progress = budgetProgress(874, 800);
    expect(progress.ratio).toBeCloseTo(1.0925);
    expect(progress.barRatio).toBe(1);
    expect(progress.isOver).toBe(true);
  });

  it('treats a zero or negative limit as no progress', () => {
    expect(budgetProgress(100, 0)).toEqual({
      ratio: 0,
      barRatio: 0,
      isOver: false,
    });
    expect(budgetProgress(100, -5).ratio).toBe(0);
  });

  it('exactly at the limit is not over budget', () => {
    const progress = budgetProgress(400, 400);
    expect(progress.isOver).toBe(false);
    expect(progress.barRatio).toBe(1);
  });
});
