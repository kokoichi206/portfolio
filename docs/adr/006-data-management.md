# ADR-006: JSON files for data management

## Status

Accepted

## Date

2026-03-11

## Context

The portfolio displays structured data: profile info, skills, certifications, work experience, projects, and blog posts. We need a data management strategy.

Candidates: JSON files in repo, MDX, Headless CMS (Newt/Contentful), Spreadsheet API.

## Decision

Use **JSON files** stored in `/data` within the repository, with RSS feeds fetched at build time for blog content.

## Rationale

- **Data volume is tiny**: All content fits in <100 lines of JSON. A database or CMS is massive overkill.
- **Single author**: Only one person updates the data. A CMS admin UI provides no value.
- **Git history**: Changes are tracked, reviewable, and reversible via git.
- **Type safety**: JSON files can be imported directly in TypeScript with type inference, or validated with schemas.
- **Zero runtime dependencies**: No API calls at runtime, no connection strings, no authentication tokens.
- **Zero cost**: No CMS subscription, no database hosting.

### Blog content via RSS

Hatena Blog and Zenn both provide RSS/Atom feeds. These are fetched at build time and cached. A scheduled rebuild (daily via cron) keeps the displayed articles fresh without ISR complexity.

### Why not MDX

MDX is valuable when content needs embedded interactive components (e.g., a blog with live code demos). Portfolio data is purely structured, making JSON simpler.

### Why not Headless CMS

Adds a dependency, requires authentication setup, and costs money at scale. The benefits (non-technical editing UI, preview) are irrelevant for a solo developer.

### Why not Spreadsheet API

The skill sheet spreadsheet exists, but depending on Google Sheets API for a production site introduces fragility (rate limits, API changes, latency).

## Consequences

- Adding a new project or updating experience requires editing a JSON file and pushing to git.
- No preview URL for draft content. This is acceptable since the author can run `pnpm dev` locally.
- If a non-technical collaborator needs to edit content in the future, migrating to a CMS is straightforward since the JSON structure maps directly to CMS schemas.

## File Structure

```
/data
  profile.json        # hero, about section
  skills.json         # technical skills with categories
  certifications.json # certification list
  experience.json     # work history timeline
  projects.json       # OSS and work projects (tier 1-3)
  writing.json        # featured blog articles (hand-picked)
```
