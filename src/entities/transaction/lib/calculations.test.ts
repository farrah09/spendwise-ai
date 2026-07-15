import { describe, expect, it } from '@jest/globals';

import type { Transaction } from '../model/types';
import {
  monthlyExpenses,
  monthlyIncome,
  recentTransactions,
  remainingBalance,
  signedAmount,
  spendingPercentage,
  spentByCategory,
  topSpendingCategory,
} from './calculations';

const JULY = new Date('2026-07-15T12:00:00.000Z');

let nextId = 0;
function transaction(overrides: Partial<Transaction>): Transaction {
  nextId += 1;
  return {
    id: `test-${nextId}`,
    title: 'Test merchant',
    category: 'groceries',
    type: 'expense',
    amount: 100,
    date: '2026-07-10T12:00:00.000Z',
    ...overrides,
  };
}

describe('monthlyIncome', () => {
  it('sums only income inside the given month', () => {
    const transactions = [
      transaction({ type: 'income', category: 'salary', amount: 14500 }),
      transaction({ type: 'income', amount: 500, date: '2026-06-28T12:00:00.000Z' }),
      transaction({ type: 'expense', amount: 200 }),
    ];
    expect(monthlyIncome(transactions, JULY)).toBe(14500);
  });

  it('returns 0 for an empty list', () => {
    expect(monthlyIncome([], JULY)).toBe(0);
  });
});

describe('monthlyExpenses', () => {
  it('sums only expenses inside the given month', () => {
    const transactions = [
      transaction({ amount: 212.4 }),
      transaction({ amount: 34.5 }),
      transaction({ amount: 999, date: '2026-06-15T12:00:00.000Z' }),
      transaction({ type: 'income', category: 'salary', amount: 14500 }),
    ];
    expect(monthlyExpenses(transactions, JULY)).toBeCloseTo(246.9);
  });

  it('returns 0 for an empty list', () => {
    expect(monthlyExpenses([], JULY)).toBe(0);
  });
});

describe('remainingBalance', () => {
  it('is monthly income minus monthly expenses', () => {
    const transactions = [
      transaction({ type: 'income', category: 'salary', amount: 14500 }),
      transaction({ amount: 1930.74 }),
    ];
    expect(remainingBalance(transactions, JULY)).toBeCloseTo(12569.26);
  });

  it('goes negative when spending exceeds income', () => {
    const transactions = [
      transaction({ type: 'income', category: 'salary', amount: 100 }),
      transaction({ amount: 150 }),
    ];
    expect(remainingBalance(transactions, JULY)).toBe(-50);
  });
});

describe('spendingPercentage', () => {
  it('is the spent share of income', () => {
    const transactions = [
      transaction({ type: 'income', category: 'salary', amount: 10000 }),
      transaction({ amount: 2500 }),
    ];
    expect(spendingPercentage(transactions, JULY)).toBeCloseTo(0.25);
  });

  it('returns 0 when there is no income (no divide-by-zero)', () => {
    expect(spendingPercentage([transaction({ amount: 500 })], JULY)).toBe(0);
    expect(spendingPercentage([], JULY)).toBe(0);
  });
});

describe('spentByCategory', () => {
  it('sums expenses for one category in the month, ignoring income of that category', () => {
    const transactions = [
      transaction({ category: 'coffee', amount: 18 }),
      transaction({ category: 'coffee', amount: 22 }),
      transaction({ category: 'coffee', amount: 30, date: '2026-06-15T12:00:00.000Z' }),
      transaction({ category: 'groceries', amount: 200 }),
    ];
    expect(spentByCategory(transactions, 'coffee', JULY)).toBe(40);
  });
});

describe('signedAmount', () => {
  it('separates expense and income direction', () => {
    expect(signedAmount(transaction({ amount: 34.5 }))).toBe(-34.5);
    expect(
      signedAmount(transaction({ type: 'income', category: 'salary', amount: 14500 })),
    ).toBe(14500);
  });
});

describe('recentTransactions', () => {
  it('orders newest first and limits the count', () => {
    const oldest = transaction({ date: '2026-07-01T09:00:00.000Z' });
    const middle = transaction({ date: '2026-07-10T09:00:00.000Z' });
    const newest = transaction({ date: '2026-07-15T09:00:00.000Z' });
    const result = recentTransactions([oldest, newest, middle], 2);
    expect(result.map((t) => t.id)).toEqual([newest.id, middle.id]);
  });

  it('does not mutate the input list', () => {
    const input = [
      transaction({ date: '2026-07-01T09:00:00.000Z' }),
      transaction({ date: '2026-07-15T09:00:00.000Z' }),
    ];
    const firstIdBefore = input[0].id;
    recentTransactions(input, 2);
    expect(input[0].id).toBe(firstIdBefore);
  });

  it('returns an empty list for empty input', () => {
    expect(recentTransactions([], 5)).toEqual([]);
  });
});

describe('topSpendingCategory', () => {
  it('returns the category with the highest expense total this month', () => {
    const transactions = [
      transaction({ category: 'shopping', amount: 545 }),
      transaction({ category: 'shopping', amount: 329 }),
      transaction({ category: 'utilities', amount: 385.6 }),
      transaction({ type: 'income', category: 'salary', amount: 14500 }),
    ];
    expect(topSpendingCategory(transactions, JULY)).toBe('shopping');
  });

  it('returns null when there are no expenses', () => {
    const onlyIncome = [
      transaction({ type: 'income', category: 'salary', amount: 14500 }),
    ];
    expect(topSpendingCategory(onlyIncome, JULY)).toBeNull();
    expect(topSpendingCategory([], JULY)).toBeNull();
  });
});
