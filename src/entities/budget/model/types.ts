import type { TransactionCategory } from '../../transaction';

export interface Budget {
  id: string;
  category: TransactionCategory;
  /** Monthly limit in SAR. Spent is derived from transactions, never stored. */
  limit: number;
}
