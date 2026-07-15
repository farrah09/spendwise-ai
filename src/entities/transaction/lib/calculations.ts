import type { Transaction, TransactionCategory } from '../model/types';

/**
 * Pure dashboard calculations. Every function takes an optional reference
 * date so "this month" is testable with fixed dates; UI never re-implements
 * any of this arithmetic.
 */

/** Display amount with direction: negative for expenses, positive for income. */
export function signedAmount(transaction: Transaction): number {
  return transaction.type === 'expense'
    ? -transaction.amount
    : transaction.amount;
}

function isInMonth(dateIso: string, month: Date): boolean {
  const date = new Date(dateIso);
  return (
    date.getFullYear() === month.getFullYear() &&
    date.getMonth() === month.getMonth()
  );
}

function sumForMonth(
  transactions: Transaction[],
  type: Transaction['type'],
  month: Date,
): number {
  return transactions
    .filter((t) => t.type === type && isInMonth(t.date, month))
    .reduce((total, t) => total + t.amount, 0);
}

export function monthlyIncome(
  transactions: Transaction[],
  month: Date = new Date(),
): number {
  return sumForMonth(transactions, 'income', month);
}

export function monthlyExpenses(
  transactions: Transaction[],
  month: Date = new Date(),
): number {
  return sumForMonth(transactions, 'expense', month);
}

/** What is left of this month's income after this month's expenses. */
export function remainingBalance(
  transactions: Transaction[],
  month: Date = new Date(),
): number {
  return monthlyIncome(transactions, month) - monthlyExpenses(transactions, month);
}

/**
 * Share of monthly income already spent, 0–1 (may exceed 1 when spending
 * outpaces income). 0 when there is no income to compare against.
 */
export function spendingPercentage(
  transactions: Transaction[],
  month: Date = new Date(),
): number {
  const income = monthlyIncome(transactions, month);
  if (income <= 0) {
    return 0;
  }
  return monthlyExpenses(transactions, month) / income;
}

/** This month's expense total for one category (budget progress input). */
export function spentByCategory(
  transactions: Transaction[],
  category: TransactionCategory,
  month: Date = new Date(),
): number {
  return transactions
    .filter(
      (t) =>
        t.type === 'expense' &&
        t.category === category &&
        isInMonth(t.date, month),
    )
    .reduce((total, t) => total + t.amount, 0);
}

/** Newest first, limited to `count`. Does not mutate the input. */
export function recentTransactions(
  transactions: Transaction[],
  count: number,
): Transaction[] {
  return [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

/** Category with the highest expense total this month; null when no expenses. */
export function topSpendingCategory(
  transactions: Transaction[],
  month: Date = new Date(),
): TransactionCategory | null {
  const totals = new Map<TransactionCategory, number>();
  for (const t of transactions) {
    if (t.type === 'expense' && isInMonth(t.date, month)) {
      totals.set(t.category, (totals.get(t.category) ?? 0) + t.amount);
    }
  }

  let top: TransactionCategory | null = null;
  let topTotal = 0;
  for (const [category, total] of totals) {
    if (total > topTotal) {
      top = category;
      topTotal = total;
    }
  }
  return top;
}
