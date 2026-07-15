/**
 * DEMO DATA ONLY. Realistic SAR sample values so the dashboard reads like a
 * real account until storage and AI land (see docs/roadmap.md). Merchant
 * names and date labels are data, not UI copy, so they live here rather
 * than strings.ts — same convention as the gallery preview data.
 */

export interface DemoTransaction {
  id: string;
  title: string;
  category: string;
  dateLabel: string;
  /** Negative = expense, positive = income. */
  amount: number;
}

export interface DemoBudget {
  id: string;
  category: string;
  spent: number;
  limit: number;
}

export interface DashboardData {
  balance: number;
  /** Newest first. */
  transactions: DemoTransaction[];
  budgets: DemoBudget[];
  /** Clearly mocked local preview — no real AI behind it yet. */
  insight: string;
}

export const demoDashboardData: DashboardData = {
  balance: 8420.5,
  transactions: [
    {
      id: 'txn-1',
      title: 'Danube',
      category: 'Groceries',
      dateLabel: 'Today',
      amount: -212.4,
    },
    {
      id: 'txn-2',
      title: 'Barn’s Café',
      category: 'Coffee',
      dateLabel: 'Today',
      amount: -18,
    },
    {
      id: 'txn-3',
      title: 'Careem ride',
      category: 'Transport',
      dateLabel: 'Yesterday',
      amount: -34.5,
    },
    {
      id: 'txn-4',
      title: 'Nahdi Pharmacy',
      category: 'Pharmacy',
      dateLabel: 'Yesterday',
      amount: -86.75,
    },
    {
      id: 'txn-5',
      title: 'Netflix',
      category: 'Subscriptions',
      dateLabel: '12 Jul',
      amount: -54.99,
    },
    {
      id: 'txn-6',
      title: 'Salary deposit',
      category: 'Income',
      dateLabel: '1 Jul',
      amount: 14500,
    },
  ],
  budgets: [
    { id: 'bud-1', category: 'Groceries', spent: 830.2, limit: 1200 },
    { id: 'bud-2', category: 'Transport', spent: 310.5, limit: 400 },
    { id: 'bud-3', category: 'Coffee', spent: 168, limit: 150 },
  ],
  insight:
    'Coffee is 12% over budget with a week left in July. Skipping four café visits would bring it back on track.',
};

export type DashboardScenario = 'success' | 'empty' | 'error';

const demoLatencyMs = 650;

/**
 * Simulates a network load so the loading, empty, and error states are
 * exercised for real instead of being faked in the UI. `null` = no data yet
 * (empty account).
 */
export function fetchDemoDashboard(
  scenario: DashboardScenario = 'success',
): Promise<DashboardData | null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (scenario === 'error') {
        reject(new Error('Demo dashboard load failure'));
      } else {
        resolve(scenario === 'empty' ? null : demoDashboardData);
      }
    }, demoLatencyMs);
  });
}
