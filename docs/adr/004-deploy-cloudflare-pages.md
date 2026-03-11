# ADR-004: Deploy to Cloudflare Pages

## Status

Accepted

## Date

2026-03-11

## Context

The site domain `kokoichi0206.work` is managed on Cloudflare. We need a hosting platform for a static Astro site with periodic rebuilds (for RSS feed updates).

Candidates: Cloudflare Pages, Vercel, Netlify.

## Decision

Use **Cloudflare Pages** for deployment.

## Rationale

- **Domain already on Cloudflare**: Zero DNS configuration needed. The domain connects to Pages with a single click.
- **Astro native support**: Astro has first-class Cloudflare Pages support. No adapter needed for static output.
- **Generous free tier**: 500 builds/month, unlimited bandwidth. More than sufficient for a portfolio site.
- **Global CDN**: Cloudflare's edge network ensures fast load times worldwide.
- **Cron triggers**: Cloudflare Workers cron can trigger periodic rebuilds for RSS feed freshness, or we use GitHub Actions scheduled workflows.
- **Security headers**: `_headers` file support for CSP, HSTS, etc.

### Why not Vercel

Vercel has the best Next.js DX, but since we chose Astro, that advantage disappears. Vercel would require DNS configuration to point the Cloudflare-managed domain, adding unnecessary complexity.

### Why not Netlify

Similar capabilities to Cloudflare Pages, but no existing relationship with the domain registrar. No compelling advantage.

## Consequences

- If we ever need server-side rendering, Cloudflare Workers can handle it, though that is not currently planned.
- Build previews for PRs are available out of the box via Cloudflare Pages branch deploys.
