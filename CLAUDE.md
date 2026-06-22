# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # local dev server (http://localhost:4321)
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
```

No linter or test suite is configured.

## Architecture

**Stack:** Astro 4 + Tailwind CSS 3 + TypeScript. Deployed to Netlify via `netlify-data` forms (contact page).

### Content model — no CMS

All content is hardcoded TypeScript data files in `src/data/`:

- `productions.ts` — The dominant file (390 KB+). Imports every production image at the top, defines the full `ProductionRecord` interface, and exports the canonical `productions` array. Records are authored as lightweight `ProductionSeed` objects and hydrated by an internal builder function that fills defaults, derives slugs, computes `yearSpan`/`decadeLabel`/`eraLabel`, and stitches in images. **Never edit slugs directly**; they are auto-derived from `title` by the `slugify()` function.
- `credits.ts` — Flat `CreditGroup[]` list used on `/credits`.
- `timeline.ts` — Chronological `TimelineEntry[]` used on `/timeline`.
- `press.ts`, `awards.ts` — Similar flat arrays for their respective pages.

`productions.ts` imports `creditGroups` and `timelineEntries` to cross-link data — it is the integration hub.

### Production page modes

Each production has `pageMode: 'featured' | 'archive'`:
- `'featured'` — rich editorial page with gallery, press quotes, collaborators, watch links, etc.
- `'archive'` — minimal type-led page; only title, summary, quick facts, and staging history.

The dynamic route `src/pages/productions/[slug].astro` branches on `pageMode` to render the appropriate template. The `priorityFeaturedSlugs` export (a `Set`) drives the featured rail on the productions index page.

### Path aliases (tsconfig.json)

| Alias | Resolves to |
|-------|-------------|
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@data/*` | `src/data/*` |
| `@styles/*` | `src/styles/*` |

### Design system

**Fonts** (loaded via `@fontsource` in `BaseLayout.astro`):
- `font-display` — Big Shoulders Display (headings, nav labels, display numbers)
- `font-serif` / `font-sans` — Newsreader (body copy, italic quotes)

**Brand color tokens** (all in `tailwind.config.mjs` as `brand.*`):
- `ink` / `inkDeep` — near-black backgrounds
- `oxblood` / `oxbloodDeep` / `oxbloodBright` — primary accent (CTAs, active states)
- `gold` / `goldBright` — secondary accent (eyebrows, nav active state, dark-section highlights)
- `cream` / `creamDim` — light backgrounds and body text on dark sections

**Shared utility classes** (defined in `src/styles/global.css` with `@layer components`):
- `.section-container` — max-width + padding for page sections
- `.section-eyebrow` — small oxblood uppercase label above headings
- `.section-heading` — large display heading
- `.btn-primary` / `.btn-outline` — the two CTA button styles
- `.grain-overlay` — film-grain texture layer used on dark sections (add as a sibling `<div>` inside `position: relative` wrappers)

Page-scoped styles using `@apply` inside `<style>` blocks are common for component-specific class names (e.g., archive card classes in `productions/index.astro`).

### Images

Source images live in `src/images/`, organized by production title in subdirectories (e.g., `src/images/king-lear/`). Some web-sourced images are grouped under `src/images/web-sourced/`. All production images are statically imported at the top of `productions.ts` — adding a new image requires both dropping the file in `src/images/` and adding the import there. Astro's `<Image>` component handles optimization; always pass `widths` and `sizes`.

### Homepage sections

The homepage (`src/pages/index.astro`) curates content via two hardcoded slug arrays at the top of the frontmatter:
- `gallerySlugs` (8 items) — drives the "Selected Productions" photo grid
- `goodmanHighlightSlugs` (4 items) — drives the production links inside the "Goodman Years" narrative section
- `nowAndUpcoming` (3 items) — drives the "Now & Upcoming" cards

These must reference valid slugs that exist in `productions`. The `getProductionBySlug()` helper returns `undefined` for unknown slugs; the `.filter()` call silently drops them.

### Navigation

`src/components/Navigation.astro` owns the primary nav. The `navLinks` array is the single source of truth — edit it there to add, remove, or reorder menu items. The component renders both a desktop inline list and a mobile hamburger-toggled menu from the same array.
