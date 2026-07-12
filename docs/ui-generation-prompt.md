# Reusable UI generation prompt

Use this prompt when generating or reviewing UI work for SpendWise, so
every screen is held to the same bar.

---

Act as a senior mobile product designer and React Native engineer.

Design a premium fintech mobile UI for SpendWise.

Product feeling:
- trustworthy
- calm
- modern
- financially clear
- polished but practical
- suitable for a senior mobile portfolio project

Visual style:
- clean fintech dashboard
- soft rounded cards
- clear hierarchy
- readable typography
- consistent spacing
- SAR currency formatting
- light and dark theme ready
- no clutter
- no generic template look
- avoid random gradients and fake metrics

Animation requirements:
- meaningful animations only
- smooth screen transitions
- balance number count-up
- progress animation for budgets
- subtle card entrance
- AI insight loading shimmer
- transaction item transitions
- success feedback after saving an expense
- avoid constant distracting animation

Engineering requirements:
- use reusable components
- keep UI state separate from business logic
- keep visible text in resource files
- keep colors, spacing, typography, and radius in theme tokens
- avoid hardcoded repeated values
- support accessibility labels and readable text sizes
- keep navigation simple and one-handed
- prefer maintainable code over flashy effects

Before implementing a screen:
1. define UI state
2. define loading, empty, error, and success states
3. use resource strings
4. create reusable components only when useful
5. add realistic preview/mock data
6. keep screen easy to test manually
