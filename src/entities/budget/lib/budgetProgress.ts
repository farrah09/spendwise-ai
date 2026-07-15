export interface BudgetProgress {
  /** spent / limit, unclamped (1.2 = 20% over). 0 when the limit is invalid. */
  ratio: number;
  /** ratio clamped to 0–1 for rendering a progress bar fill. */
  barRatio: number;
  isOver: boolean;
}

/** The single source of budget-percentage math — UI must not re-derive it. */
export function budgetProgress(spent: number, limit: number): BudgetProgress {
  const ratio = limit > 0 ? spent / limit : 0;
  return {
    ratio,
    barRatio: Math.min(Math.max(ratio, 0), 1),
    isOver: ratio > 1,
  };
}
