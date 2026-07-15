import type { Transaction } from './types';

/**
 * DEMO DATA ONLY. Realistic SAR transactions so the app reads like a real
 * account until storage lands (docs/roadmap.md). Merchant names are data,
 * not UI copy, so they live here rather than strings.ts.
 *
 * Dates are relative to "now" and clamped to the current month, so the
 * demo month always contains the salary and every expense — the monthly
 * calculations stay coherent whenever the app is run.
 */

function daysAgoThisMonth(days: number, hour = 12): string {
  const now = new Date();
  const date = new Date(now);
  date.setDate(now.getDate() - days);
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, hour);
  const clamped = date < startOfMonth ? startOfMonth : date;
  clamped.setHours(hour, 0, 0, 0);
  return clamped.toISOString();
}

/** First day of the current month — where the salary always lands. */
function startOfThisMonth(): string {
  return daysAgoThisMonth(31, 9);
}

export const demoTransactions: Transaction[] = [
  {
    id: 'txn-danube',
    title: 'Danube',
    category: 'groceries',
    type: 'expense',
    amount: 212.4,
    date: daysAgoThisMonth(0, 18),
  },
  {
    id: 'txn-barns-1',
    title: 'Barn’s Café',
    category: 'coffee',
    type: 'expense',
    amount: 18,
    date: daysAgoThisMonth(0, 8),
  },
  {
    id: 'txn-careem',
    title: 'Careem ride',
    category: 'transport',
    type: 'expense',
    amount: 34.5,
    date: daysAgoThisMonth(1, 19),
  },
  {
    id: 'txn-nahdi',
    title: 'Nahdi Pharmacy',
    category: 'pharmacy',
    type: 'expense',
    amount: 86.75,
    date: daysAgoThisMonth(1, 17),
  },
  {
    id: 'txn-half-million',
    title: '½ Half Million',
    category: 'coffee',
    type: 'expense',
    amount: 26.5,
    date: daysAgoThisMonth(4, 16),
  },
  {
    id: 'txn-panda',
    title: 'Panda',
    category: 'groceries',
    type: 'expense',
    amount: 187.25,
    date: daysAgoThisMonth(6, 19),
  },
  {
    id: 'txn-jarir',
    title: 'Jarir Bookstore',
    category: 'shopping',
    type: 'expense',
    amount: 545,
    date: daysAgoThisMonth(7, 15),
    note: 'Birthday gift',
  },
  {
    id: 'txn-barns-2',
    title: 'Barn’s Café',
    category: 'coffee',
    type: 'expense',
    amount: 22,
    date: daysAgoThisMonth(8, 9),
  },
  {
    id: 'txn-namshi',
    title: 'Namshi order',
    category: 'shopping',
    type: 'expense',
    amount: 329,
    date: daysAgoThisMonth(9, 13),
  },
  {
    id: 'txn-uber',
    title: 'Uber',
    category: 'transport',
    type: 'expense',
    amount: 28.75,
    date: daysAgoThisMonth(10, 20),
  },
  {
    id: 'txn-netflix',
    title: 'Netflix',
    category: 'subscriptions',
    type: 'expense',
    amount: 54.99,
    date: daysAgoThisMonth(11, 6),
  },
  {
    id: 'txn-sec',
    title: 'SEC electricity bill',
    category: 'utilities',
    type: 'expense',
    amount: 385.6,
    date: daysAgoThisMonth(12, 10),
  },
  {
    id: 'txn-salary',
    title: 'Salary deposit',
    category: 'salary',
    type: 'income',
    amount: 14500,
    date: startOfThisMonth(),
    note: 'Monthly salary',
  },
];
