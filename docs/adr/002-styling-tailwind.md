# ADR-002: Use Tailwind CSS v4 for styling

## Status

Accepted

## Date

2026-03-11

## Context

The portfolio uses a Bento Grid layout with dark/light mode support and responsive design (mobile-first). We need a styling solution that makes these patterns easy to implement.

Candidates: Tailwind CSS, CSS Modules, vanilla-extract, styled-components.

## Decision

Use **Tailwind CSS v4** via `@tailwindcss/vite`.

## Rationale

- **Bento Grid**: `grid-cols-*`, `col-span-*`, `row-span-*` utilities make grid layouts intuitive without writing custom CSS.
- **Dark mode**: The `dark:` variant prefix handles dark/light theming with zero config beyond setting `darkMode: 'class'`.
- **Responsive**: `sm:`, `md:`, `lg:` breakpoint prefixes align with mobile-first design.
- **Tailwind v4**: Uses CSS-native `@theme` for configuration instead of `tailwind.config.js`. Lighter, faster, and supports CSS-first workflows.
- **Custom color palette**: We define a `sakura` color scale (based on #F19DB5) directly in the CSS `@theme` block.
- **De facto standard**: Tailwind is the most common choice for portfolio sites, meaning abundant examples and community resources.

### Why not CSS Modules

More boilerplate for responsive + dark mode. Every component needs a separate `.module.css` file with manually defined CSS variables for theming.

### Why not vanilla-extract / styled-components

Over-engineered for a static site. Both add runtime or build complexity without proportional benefit.

## Consequences

- HTML has many utility classes, which some consider less readable. This is acceptable for a solo project.
- Custom components (e.g., complex animations) may still need small amounts of plain CSS alongside Tailwind.
