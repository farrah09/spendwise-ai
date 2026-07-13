# Design system

Reusable UI foundation for SpendWise AI. Everything visual is built from the
tokens and primitives below — screens never invent their own colors, spacing,
or copy.

## Theme tokens (`src/app/theme/`)

| File | Tokens |
| --- | --- |
| `colors.ts` | Light + dark palettes behind one `ThemeColors` contract. Semantic roles (`primary`, `success`, `danger`, …) each with a `*Soft` tint for badge/insight surfaces. |
| `typography.ts` | `display`, `title`, `headline`, `body`, `bodyStrong`, `label`, `caption` |
| `spacing.ts` | `xs 4 · sm 8 · md 12 · lg 16 · xl 24 · xxl 32 · xxxl 48` |
| `radius.ts` | `sm 8 · md 12 · lg 16 · xl 24 · pill` |
| `shadows.ts` | `card` (resting) and `raised` (prominent) elevation |
| `motion.ts` | Durations, easing curves, pressed scale, entrance offset |

Components read tokens via `useTheme()`. Raw hex values and magic numbers in
components fail review.

## Primitives (`src/shared/ui/`)

| Component | Purpose |
| --- | --- |
| `AppScreen` | Safe-area screen shell; optional `scroll`, configurable `edges` |
| `AppText` | Typography-variant text with semantic `color` prop |
| `AppCard` | Soft rounded surface card; optional `onPress` with press feedback |
| `PrimaryButton` / `SecondaryButton` | The two button styles; disabled state, a11y props, press feedback |
| `AmountText` | SAR-formatted amount with `neutral / positive / negative` tone |
| `EmptyState` | Title + body + optional action for empty content |
| `LoadingState` | Spinner + label, announced to screen readers as a progress bar |
| `SectionHeader` | Section title with optional action link |
| `StatusBadge` | Small tinted pill (`neutral / accent / success / warning / danger`) |
| `PlaceholderView` | Temporary "coming soon" state for skeleton screens |

Rules of thumb: a primitive earns its existence by being used in two or more
places or encoding a real product rule (e.g. `AmountText` owns SAR formatting).
Prefer composition over adding props.

## Fintech components (`src/widgets/`)

Props-driven presentation blocks with no data fetching or business logic:

- `BalanceCard` — label + prominent SAR balance
- `BudgetProgressCard` — category, progress bar (danger tint when over), spent/limit caption, `Over budget` badge
- `InsightPreviewCard` — `AI insight` badge + message body
- `TransactionListItem` — title, category · date, tone-colored amount

## Resource strings

- Visible copy lives in `src/shared/resources/strings.ts` (including template
  functions like `budget.progress(spent, limit)`), never in components.
- Screen-reader labels/hints live in `src/shared/resources/accessibility.ts`.
  Composite widgets set one composed `accessibilityLabel` (e.g. a transaction
  row reads "Careem ride, Transport, Today, ‑SAR 34.50" as a single element).
- Route names (`src/app/navigation/routes.ts`) are identifiers, never labels.

## Accessibility approach

- Every interactive element has `accessibilityRole`, a label, and a hint when
  the outcome isn't obvious from the label.
- Buttons expose `accessibilityState.disabled`.
- Text colors are checked against both palettes for readable contrast;
  secondary text is never used for essential amounts.

## Animation rules

Animations must support **usability, state change, or feedback** — decorative
motion is rejected. Foundations live in `src/shared/ui/animations.ts`:

- `useEntranceAnimation` — fade + slide-up for content arriving on screen
- `usePressFeedback` — subtle scale confirming a touch registered (built into
  buttons and pressable cards)

Both consume `motion` tokens; ad-hoc durations/easings are not allowed. Heavier
animations (count-up, shimmer, progress) land with their features per
`docs/roadmap.md`.

## Component gallery (dev only)

`Settings → Open component gallery` renders every primitive and fintech
component with realistic SAR preview data. The route is registered only when
`__DEV__` is true, so production navigation is untouched.
