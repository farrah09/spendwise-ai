# Architecture

SpendWise AI uses a pragmatic Feature-Sliced structure. Layers are ordered by
how much they know about the product; imports flow **downward only**.

```
src/
  app/        Composition root: navigation, providers, theme tokens
  pages/      One folder per screen; composes widgets/features into a route
  widgets/    Self-contained UI blocks (balance card, transaction list, budget progress)
  features/   User actions that change state (add expense, categorize, AI insights)
  entities/   Domain models and their pure logic (expense, budget, insight)
  shared/     Product-agnostic building blocks: ui primitives, lib, config, resources
```

## Dependency rule

`app → pages → widgets → features → entities → shared`

A layer may import from any layer **below** it, never above. Two slices on the
same layer do not import each other.

**Documented exception:** `shared/ui` reads theme tokens from `app/theme` via
the `useTheme` hook. Strict FSD would place the theme in `shared`, but keeping
tokens next to the provider in `app/theme` makes the theming story easier to
review in a small codebase. If this exception spreads beyond `useTheme`, move
the tokens to `shared/theme`.

## Resources and text

- `shared/resources/strings.ts` — every user-visible string. Screens never
  hardcode copy, so copy review and future localization (Arabic) touch one file.
- `shared/resources/accessibility.ts` — screen-reader labels and hints, kept
  separate because a11y text often needs more context than visible copy.
- `app/navigation/routes.ts` — route identifiers. Never reused as UI labels.

## Theme

All visual constants are tokens in `app/theme/`:

- `colors.ts` — light and dark palettes behind one `ThemeColors` contract
- `typography.ts` — named text styles (display → caption)
- `spacing.ts`, `radius.ts`, `shadows.ts` — layout scales
- `motion.ts` — animation durations and easing curves (foundations only;
  actual animations arrive with their features, see roadmap)

`ThemeProvider` resolves the device color scheme; components consume tokens via
`useTheme()`. Components must not contain raw hex values or magic numbers.

## State (planned)

Commit 1 has no app state beyond navigation. Local UI state stays in screens;
domain state will live in `entities/*` with a thin store layer, decided when
the first real feature lands (see ADR process in `docs/decisions/`).
