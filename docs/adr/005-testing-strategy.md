# ADR-005: Testing strategy

## Status

Accepted

## Date

2026-03-11

## Context

We need to define the testing approach for a portfolio site with:

- Static Astro pages (`.astro` components)
- Interactive React island components (theme toggle, animated cards, etc.)
- Build-time data fetching (JSON files, RSS)

## Decision

- **Unit tests**: Vitest + Testing Library for React components
- **Component catalog**: Storybook for React island components
- **E2E tests**: Not included
- **Visual regression**: Not included (may add later via Chromatic)

## Rationale

### Unit tests (Vitest + Testing Library)

React island components contain the only testable logic: theme toggling, conditional rendering based on props, interaction handlers. Vitest is fast, Vite-native, and pairs well with Astro's Vite-based build.

### Storybook

React islands (BentoCard, ThemeToggle, SkillBadge, ProjectCard, TimelineItem, etc.) benefit from isolated visual development and documentation. Storybook interaction tests supplement unit tests for UI behavior.

### No E2E

The site has no forms, no authentication, no multi-step user flows, and only 2-3 pages. E2E testing (Playwright/Cypress) would add CI time with negligible bug-catching value. A manual check across browsers covers the risk.

### No visual regression (for now)

The site is developed by one person with full design control. Chromatic or Percy adds value when multiple contributors might accidentally break visual consistency, which is not the case here.

## Consequences

- `.astro` components are not unit-tested directly. Their correctness is verified by the build succeeding and manual visual review.
- If the site grows (e.g., blog CMS, dynamic features), E2E tests should be reconsidered.
- Storybook serves as living documentation for the component library.
