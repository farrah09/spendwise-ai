# SpendWise

Expense tracker for SAR, built with React Native (Expo) and TypeScript.
SpendWise includes AI-powered category suggestions and spending insights.

> **Status:** early scaffold. Navigation skeleton, theme foundation, and project
> structure are in place; features land commit by commit (see
> [docs/roadmap.md](docs/roadmap.md)).

## What it will do

- Track expenses in Saudi Riyal (SAR) with fast, one-handed entry
- Categorize spending automatically with AI
- Surface plain-language insights about spending habits
- Keep budgets visible and honest with clear progress feedback

## Screenshots

Screenshots are added as each screen ships — no mockups, only real captures.

| Screen | Capture |
| --- | --- |
| Onboarding | `docs/screenshots/01-onboarding.png` _(pending)_ |
| Home | `docs/screenshots/02-home.png` _(pending)_ |
| Add expense | `docs/screenshots/03-add-expense.png` _(pending)_ |
| Transactions | `docs/screenshots/04-transactions.png` _(pending)_ |
| Analytics | `docs/screenshots/05-analytics.png` _(pending)_ |
| AI insights | `docs/screenshots/06-ai-insights.png` _(pending)_ |

## Tech stack

- **Expo SDK 57 / React Native 0.86 / TypeScript (strict)**
- **React Navigation 7** — native stack + bottom tabs
- Feature-Sliced architecture — see [docs/architecture.md](docs/architecture.md)
  and [ADR-001](docs/decisions/ADR-001-architecture.md)

## Getting started

```bash
npm install
npm start        # Expo dev server; press i / a, or scan with Expo Go
```

## Project conventions

- User-visible text lives in `src/shared/resources/strings.ts`; accessibility
  labels/hints in `src/shared/resources/accessibility.ts`. No copy hardcoded in
  components.
- Colors, typography, spacing, radius, shadows, and motion are theme tokens
  under `src/app/theme/`. No magic numbers in components.
- Route names (`src/app/navigation/routes.ts`) are identifiers, never UI labels.
- Animations must support usability, state change, or feedback — nothing
  decorative. Planned animations are documented in [docs/roadmap.md](docs/roadmap.md).

## Docs

- [Architecture](docs/architecture.md)
- [Roadmap](docs/roadmap.md)
- [ADR-001: Architecture choices](docs/decisions/ADR-001-architecture.md)
- [UI generation prompt](docs/ui-generation-prompt.md)
