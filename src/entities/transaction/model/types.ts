export type TransactionType = 'income' | 'expense';

/**
 * Category identifiers, not labels — display names live in
 * src/shared/resources/strings.ts (strings.categories).
 */
export type TransactionCategory =
  | 'salary'
  | 'groceries'
  | 'transport'
  | 'coffee'
  | 'pharmacy'
  | 'subscriptions'
  | 'shopping'
  | 'utilities';

export interface Transaction {
  id: string;
  /** Merchant or source, e.g. "Danube", "Salary deposit". */
  title: string;
  category: TransactionCategory;
  type: TransactionType;
  /**
   * Always positive, in SAR. Direction comes from `type`; use
   * signedAmount() when a display value with sign is needed.
   */
  amount: number;
  /** ISO 8601 timestamp. */
  date: string;
  note?: string;
}
