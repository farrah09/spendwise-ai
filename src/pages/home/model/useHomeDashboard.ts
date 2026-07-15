import { useCallback, useEffect, useState } from 'react';

import {
  monthlyExpenses,
  monthlyIncome,
  recentTransactions,
  remainingBalance,
  signedAmount,
  spendingPercentage,
  spentByCategory,
} from '../../../entities/transaction';
import { formatDateLabel } from '../../../shared/lib/formatDateLabel';
import { strings } from '../../../shared/resources/strings';
import {
  fetchHomeDashboard,
  type DashboardScenario,
  type HomeDashboardData,
} from './homeDashboardService';

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
 * Home dashboard view model: owns load state and derives every displayed
 * number through entities/transaction calculations, so the screen only
 * lays things out. Pass a `scenario` ('empty' | 'error') to preview those
 * states while data is still demo-only.
 */
export function useHomeDashboard(scenario: DashboardScenario = 'success') {
  const [status, setStatus] = useState<DashboardStatus>('loading');
  const [data, setData] = useState<HomeDashboardData | null>(null);

  const load = useCallback(() => {
    setStatus('loading');
    fetchHomeDashboard(scenario)
      .then((result) => {
        setData(result);
        setStatus(result ? 'success' : 'empty');
      })
      .catch(() => setStatus('error'));
  }, [scenario]);

  useEffect(load, [load]);

  const transactions = data?.transactions ?? [];

  return {
    status,
    retry: load,
    greeting: greetingForHour(new Date().getHours()),
    balance: remainingBalance(transactions),
    spentThisMonth: monthlyExpenses(transactions),
    incomeThisMonth: monthlyIncome(transactions),
    spentPercentOfIncome: Math.round(spendingPercentage(transactions) * 100),
    budgets: (data?.budgets ?? []).map((budget) => ({
      id: budget.id,
      categoryLabel: strings.categories[budget.category],
      spent: spentByCategory(transactions, budget.category),
      limit: budget.limit,
    })),
    recentTransactions: recentTransactions(
      transactions,
      recentTransactionCount,
    ).map((transaction) => ({
      id: transaction.id,
      title: transaction.title,
      categoryLabel: strings.categories[transaction.category],
      dateLabel: formatDateLabel(transaction.date),
      amount: signedAmount(transaction),
    })),
    insight: data?.insight ?? '',
  };
}
