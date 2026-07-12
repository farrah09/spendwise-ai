# Roadmap

Small, reviewable commits. Each commit ships something demonstrably working.

## Commit 1 — Project structure (this commit)

- Expo + TypeScript scaffold, feature-sliced folders
- Navigation skeleton (onboarding → tabs), five empty screens
- Theme tokens (colors, typography, spacing, radius, shadows, motion)
- Resource files (strings, accessibility), docs, README

## Commit 2 — Expense entity + add-expense flow

- `entities/expense` model with SAR amounts
- `features/add-expense` form with validation and success feedback
- Local persistence decision (ADR)

## Commit 3 — Home dashboard widgets

- `widgets/balance-card`, `widgets/transaction-list` with realistic mock data
- Loading / empty / error / success states per screen

## Commit 4 — Budgets

- `entities/budget`, `widgets/budget-progress`

## Commit 5 — AI categorization & insights

- `features/categorize-expense`, `features/ai-insights` behind a provider
  interface (no vendor lock; no real API keys in the repo)

## Commit 6 — Analytics & polish

- Charts, Arabic localization pass, accessibility audit

## Animation plan

Foundations (duration/easing tokens in `src/app/theme/motion.ts`) ship in
Commit 1. Implementations land with their owning feature:

| Animation | Lands with | Purpose |
| --- | --- | --- |
| Onboarding slide transition | Commit 2+ | Orientation between steps |
| Balance number count-up | Commit 3 | Draws eye to the key number changing |
| Card entrance animation | Commit 3 | Communicates content arrival order |
| Budget progress animation | Commit 4 | Shows state change toward the limit |
| AI insight loading shimmer | Commit 5 | Honest loading feedback |
| Transaction list item transition | Commit 3 | Anchors add/remove changes |
| Success animation after adding expense | Commit 2 | Confirms the save happened |

**Rule:** animations must support usability, state change, or feedback.
Decorative animation is rejected in review.
