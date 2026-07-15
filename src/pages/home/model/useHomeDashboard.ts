import { useCallback, useEffect, useState } from 'react';

import { strings } from '../../../shared/resources/strings';
import {
  fetchDemoDashboard,
  type DashboardData,
  type DashboardScenario,
} from './demoDashboardData';

export type DashboardStatus = 'loading' | 'success' | 'empty' | 'error';

const recentTransactionCount = 5;

/** Picks which greeting string applies; the copy itself stays in strings.ts. */
function greetingForHour(hour: number): string {
  if (hour < 12) {
    return strings.home.greetingMorning;
  }
  if (hour < 18) {
    return strings.home.greetingAfternoon;
  }
  return strings.home.greetingEvening;
}

/**
 * Home dashboard view model: owns load state and every derived number so
 * the screen only lays things out. Pass a `scenario` ('empty' | 'error')
 * to preview those states while data is still demo-only.
 */
export function useHomeDashboard(scenario: DashboardScenario = 'success') {
  const [status, setStatus] = useState<DashboardStatus>('loading');
  const [data, setData] = useState<DashboardData | null>(null);

  const load = useCallback(() => {
    setStatus('loading');
    fetchDemoDashboard(scenario)
      .then((result) => {
        setData(result);
        setStatus(result ? 'success' : 'empty');
      })
      .catch(() => setStatus('error'));
  }, [scenario]);

  useEffect(load, [load]);

  const transactions = data?.transactions ?? [];
  const spentThisMonth = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => total - transaction.amount, 0);
  const incomeThisMonth = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  return {
    status,
    retry: load,
    greeting: greetingForHour(new Date().getHours()),
    balance: data?.balance ?? 0,
    spentThisMonth,
    incomeThisMonth,
    budgets: data?.budgets ?? [],
    recentTransactions: transactions.slice(0, recentTransactionCount),
    insight: data?.insight ?? '',
  };
}
