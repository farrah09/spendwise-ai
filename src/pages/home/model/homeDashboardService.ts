import { demoBudgets, type Budget } from '../../../entities/budget';
import {
  demoTransactions,
  type Transaction,
} from '../../../entities/transaction';

/**
 * DEMO ONLY. Simulates the async load the real storage layer will provide,
 * so the loading/empty/error states are exercised as real code paths.
 * `null` = an account with no data yet.
 */

export interface HomeDashboardData {
  transactions: Transaction[];
  budgets: Budget[];
  /** Clearly mocked local preview — no real AI behind it yet. */
  insight: string;
}

export type DashboardScenario = 'success' | 'empty' | 'error';

const demoLatencyMs = 650;

const demoInsight =
  'Shopping is 9% over budget this month — the Jarir and Namshi orders together made up most of it.';

export function fetchHomeDashboard(
  scenario: DashboardScenario = 'success',
): Promise<HomeDashboardData | null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (scenario === 'error') {
        reject(new Error('Demo dashboard load failure'));
      } else if (scenario === 'empty') {
        resolve(null);
      } else {
        resolve({
          transactions: demoTransactions,
          budgets: demoBudgets,
          insight: demoInsight,
        });
      }
    }, demoLatencyMs);
  });
}
