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
