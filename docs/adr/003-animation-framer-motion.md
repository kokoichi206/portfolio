# ADR-003: Use Framer Motion for animations

## Status

Accepted

## Date

2026-03-11

## Context

The Bento Grid portfolio design requires:

- Scroll-triggered card entrance animations (stagger)
- Hover scale/glow effects on cards
- Theme toggle transitions
- Potential page transition effects

Candidates: Framer Motion, GSAP, CSS-only animations.

## Decision

Use **Framer Motion** within React island components.

## Rationale

- **Native React integration**: `motion.div`, `whileInView`, `whileHover` are declarative and compose naturally with React components.
- **Scroll animations**: `whileInView` with stagger delays handles the Bento card entrance pattern in a few lines of code.
- **Small surface area**: Only React islands need Framer Motion. Astro's static components use CSS transitions where possible, keeping the JS bundle small.
- **MIT license**: No commercial licensing concerns, unlike GSAP's premium plugins.
- **Low learning curve**: The declarative API is straightforward compared to GSAP's imperative timeline model.

### Why not GSAP

GSAP's ScrollTrigger is more powerful for complex scroll-driven animations, but that level of control is unnecessary here. GSAP also has licensing restrictions for some features.

### Why not CSS-only

CSS `@scroll-timeline` is still limited in browser support. `whileInView` stagger patterns would require significant JavaScript regardless, so Framer Motion provides a cleaner abstraction.

## Consequences

- Framer Motion adds ~30KB (gzipped) to the JS bundle, but only for pages/components that use it.
- Astro's built-in View Transitions API will be used for page transitions separately, as it works at the document level without React.
