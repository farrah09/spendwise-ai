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
} as const;
