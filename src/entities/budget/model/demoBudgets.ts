import type { Budget } from './types';

/**
 * DEMO DATA ONLY. Monthly limits in SAR; spent amounts are always derived
 * from the transaction list. The shopping limit sits below this month's
 * demo shopping spend so the over-budget state stays visible.
 */
export const demoBudgets: Budget[] = [
  { id: 'bud-groceries', category: 'groceries', limit: 1200 },
  { id: 'bud-transport', category: 'transport', limit: 400 },
  { id: 'bud-shopping', category: 'shopping', limit: 800 },
  { id: 'bud-coffee', category: 'coffee', limit: 150 },
];
