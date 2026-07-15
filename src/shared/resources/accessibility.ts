/**
 * Accessibility labels and hints. Kept separate from visible copy
 * (strings.ts) because screen-reader text often needs more context
 * than what is rendered on screen.
 */
export const a11y = {
  onboarding: {
    getStarted: {
      label: 'Get started',
      hint: 'Opens the main app',
    },
  },
  tabs: {
    home: { label: 'Home tab' },
    transactions: { label: 'Transactions tab' },
    analytics: { label: 'Analytics tab' },
    settings: { label: 'Settings tab' },
  },
  home: {
    spentThisMonth: {
      label: (amount: string) => `Spent this month ${amount}`,
    },
    incomeThisMonth: {
      label: (amount: string) => `Income this month ${amount}`,
    },
    seeAllTransactions: {
      label: 'See all transactions',
      hint: 'Opens the Transactions tab',
    },
    addExpense: {
      label: 'Add expense',
      hint: 'Expense entry is coming soon',
    },
    viewAnalytics: {
      label: 'View analytics',
      hint: 'Opens the Analytics tab',
    },
    viewTransactions: {
      label: 'View transactions',
      hint: 'Opens the Transactions tab',
    },
  },
  widgets: {
    balance: {
      label: (amount: string) => `Total balance ${amount}`,
    },
    budget: {
      label: (category: string, spent: string, limit: string) =>
        `${category} budget, ${spent} spent of ${limit}`,
    },
    transaction: {
      label: (title: string, category: string, date: string, amount: string) =>
        `${title}, ${category}, ${date}, ${amount}`,
    },
    insight: {
      label: (message: string) => `AI insight: ${message}`,
    },
  },
  gallery: {
    open: {
      label: 'Open component gallery',
      hint: 'Shows the reusable UI components with preview data',
    },
  },
} as const;
