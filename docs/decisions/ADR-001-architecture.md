# ADR-001: Expo + Feature-Sliced structure

- **Status:** accepted
- **Date:** 2026-07-12

## Context

SpendWise is a portfolio-grade fintech expense tracker (React Native +
TypeScript, SAR currency, AI-assisted categorization/insights planned). It
needs to read like a production codebase: clear module boundaries, themable
UI, localizable copy, and small reviewable commits. No custom native modules
are on the roadmap.

## Decision 1: Expo (managed) instead of bare React Native CLI

**Why Expo:**

- No custom native code is planned, so the managed workflow removes the
  Xcode/Gradle maintenance cost without giving anything up. If native code
  becomes necessary, `npx expo prebuild` generates the native projects —
  the door stays open.
- `npx expo install` resolves native-dependency versions against the SDK,
  eliminating the most common RN breakage (mismatched native module versions).
- Reviewers can run the app on a device via Expo Go in under a minute, which
  matters for a portfolio project.

**Why not bare CLI:** it only pays off when custom native modules or
fine-grained native build control are required. Neither applies here.

## Decision 2: Feature-Sliced layering

`app / pages / widgets / features / entities / shared` with a strict
downward-only import rule (see `docs/architecture.md`).

**Why:** feature work stays local to a slice, screens stay thin, and domain
logic (`entities`) stays testable without UI. A flat `components/ + screens/`
layout was rejected because fintech features (budgets, AI insights) grow
cross-cutting quickly and flat structures rot into grab-bag folders.

**Deliberate deviation:** theme tokens live in `app/theme` (not `shared`) so
the tokens and provider sit together; `shared/ui` consuming `useTheme` is the
one allowed upward import. Revisit if it spreads.

## Decision 3: Minimal dependency policy

Every dependency must solve a problem a built-in cannot. Commit 1 adds only
React Navigation (native-stack + bottom-tabs) and its two required peer
libraries. Notably **not** added yet, with the built-in used instead:

- Animation library — `react-native` `Animated`/`Easing` cover the planned
  foundations; a dedicated library (e.g. Reanimated) is evaluated when the
  first gesture-driven animation lands.
- Icon set — tabs use text labels in the skeleton; icons arrive with the
  real visual design.
- State management — no app state exists yet; decided in a future ADR.
- Currency formatting — built-in `Intl.NumberFormat` (Hermes ships full
  Intl) handles SAR.

## Consequences

- Upgrades follow Expo SDK cadence (acceptable: this is a greenfield app).
- The import-direction rule is enforced by review for now; a lint rule can be
  added if violations appear.
