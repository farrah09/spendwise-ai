/**
 * All user-visible text lives here. Screens and components must not
 * hardcode UI copy. Accessibility labels/hints live in accessibility.ts,
 * route names in src/app/navigation/routes.ts.
 */
export const strings = {
  common: {
    appName: 'SpendWise AI',
    currencyCode: 'SAR',
    comingSoon: 'Coming soon',
    loading: 'Loading…',
  },
  widgets: {
    balance: {
      label: 'Total balance',
    },
    budget: {
      progress: (spent: string, limit: string) => `${spent} of ${limit}`,
      overBudget: 'Over budget',
    },
    insight: {
      badge: 'AI insight',
    },
    transaction: {
      subtitle: (category: string, date: string) => `${category} · ${date}`,
    },
  },
  gallery: {
    title: 'Design system',
    open: 'Open component gallery',
    sections: {
      typography: 'Typography',
      buttons: 'Buttons',
      badges: 'Status badges',
      states: 'States',
      fintech: 'Fintech components',
    },
  },
  tabs: {
    home: 'Home',
    transactions: 'Transactions',
    analytics: 'Analytics',
    settings: 'Settings',
  },
  onboarding: {
    title: 'Know where your money goes',
    subtitle:
      'Track spending in SAR, set budgets that hold, and get AI insights that actually help.',
    getStarted: 'Get started',
  },
  home: {
    greetingMorning: 'Good morning',
    greetingAfternoon: 'Good afternoon',
    greetingEvening: 'Good evening',
    subtitle: 'Here’s where your money stands.',
    demoBadge: 'Demo data',
    spentThisMonth: 'Spent this month',
    incomeThisMonth: 'Income this month',
    sections: {
      budgets: 'Budgets',
      recentTransactions: 'Recent transactions',
    },
    seeAll: 'See all',
    quickActions: {
      addExpense: 'Add expense',
      viewAnalytics: 'View analytics',
      viewTransactions: 'View transactions',
    },
    addExpenseSoon:
      'Fast expense entry with AI category suggestions lands in the next update.',
    empty: {
      title: 'No activity yet',
      body: 'Your balance, budgets, and AI insights appear once your first expenses are in.',
    },
    error: {
      title: 'Couldn’t load your dashboard',
      body: 'Something went wrong while loading your money overview.',
      retry: 'Try again',
    },
  },
  transactions: {
    placeholderTitle: 'Every expense, in order',
    placeholderBody:
      'Your full transaction history with smart categories will appear here.',
  },
  analytics: {
    placeholderTitle: 'Spending, explained',
    placeholderBody:
      'Trends, category breakdowns, and AI insights will appear here.',
  },
  settings: {
    placeholderTitle: 'Make it yours',
    placeholderBody:
      'Preferences, appearance, and data controls will appear here.',
  },
} as const;
