# ADR-001: Use Astro as the framework

## Status

Accepted

## Date

2026-03-11

## Context

We need a framework for a portfolio site with the following characteristics:

- All content is statically determinable (no auth, no DB, no user-specific pages)
- Data comes from JSON files and RSS feeds fetched at build time
- Interactive elements are limited (theme toggle, scroll animations, hover effects)
- Performance and Lighthouse scores are important as the site itself is a showcase
- Deploy target is Cloudflare Pages

We considered Next.js (App Router), Astro, and TanStack Start.

## Decision

Use **Astro** with React islands for interactive components.

## Rationale

- **No server-side runtime needed.** The site has no DB, no auth, no API routes. Next.js and TanStack Start are full-stack frameworks whose strengths (ISR, Server Functions, API Routes) provide no value here.
- **Zero JS by default.** Astro ships no JavaScript unless explicitly opted in via islands. This yields near-perfect Lighthouse scores out of the box, which is itself a portfolio talking point.
- **React islands for interactivity.** The ~10% of the site that needs JS (theme toggle, Framer Motion animations, Bento Grid hover effects) uses React components via `client:visible` / `client:load` directives.
- **Native Cloudflare Pages support.** No adapter hacks required, unlike Next.js on Cloudflare which needs `@opennextjs/cloudflare`.
- **Build-time data fetching is sufficient.** Blog RSS and GitHub API data update at most daily. A scheduled rebuild (cron) covers this without ISR complexity.
- **Fast builds.** Astro builds are faster than Next.js for static content, improving CI/CD feedback loops.

### Why not Next.js

The author has 3 years of Next.js experience, but using it for a purely static site is over-engineering. The React runtime (~80KB) would be shipped to every visitor with no benefit.

### Why not TanStack Start

Still in beta as of March 2026. Its strengths (type-safe full-stack, Server Functions) are irrelevant for a static portfolio. The risk of breaking changes outweighs any learning benefit for this project.

## Consequences

- `.astro` components are not testable in Storybook. Only React island components get Storybook stories.
- Team members unfamiliar with Astro's `.astro` template syntax need minimal onboarding (it resembles JSX + HTML).
- If the site later needs dynamic features (e.g., guestbook, contact form with DB), we would add Cloudflare Workers separately rather than migrating frameworks.
