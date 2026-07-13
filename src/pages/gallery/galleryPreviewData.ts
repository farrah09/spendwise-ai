/**
 * Realistic preview data for the dev-only component gallery.
 * Not shipped behavior — the gallery route is gated behind __DEV__.
 */
export const galleryPreviewData = {
  balance: 12450.75,
  budget: { category: 'Dining', spent: 1240, limit: 1500 },
  budgetOver: { category: 'Transport', spent: 640, limit: 500 },
  insight: 'You spent 18% less on dining this month compared to June.',
  transactions: [
    {
      id: 't1',
      title: 'Careem ride',
      category: 'Transport',
      dateLabel: 'Today',
      amount: -34.5,
    },
    {
      id: 't2',
      title: 'Panda groceries',
      category: 'Groceries',
      dateLabel: 'Yesterday',
      amount: -212.8,
    },
    {
      id: 't3',
      title: 'Salary deposit',
      category: 'Income',
      dateLabel: '1 Jul',
      amount: 16500,
    },
  ],
  emptyState: {
    title: 'No transactions yet',
    body: 'Expenses you add will show up here.',
    actionLabel: 'Add an expense',
  },
  textSample: 'Track spending with confidence',
} as const;
