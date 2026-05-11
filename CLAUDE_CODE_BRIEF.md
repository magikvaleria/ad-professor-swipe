# Project Brief for Claude Code

You're building a personal, public **swipe file** — a browsable archive of great ads, each one analyzed for the psychological mechanisms behind why it works and the reusable template extracted from it. New entry every day.

I've already provided three files you should preserve and build around:
- `src/content/config.ts` — the content schema. Do not change this without asking.
- `src/content/ads/2026-05-10-apple-think-different.md` — example entry that defines the format.
- `README.md` — project overview.

Your job is to build the site around these.

---

## Tech stack

- **Astro** (latest stable) with TypeScript and Content Collections
- **Tailwind CSS** for styling
- **Markdown** for entries (one `.md` per ad in `src/content/ads/`)
- Target deploy: **Vercel** (free tier), with GitHub for source and auto-deploy on push

Run `npm create astro@latest` with the minimal template, TypeScript "strict", and add the Tailwind integration with `npx astro add tailwind`. Keep dependencies minimal — no React, no MDX unless I ask for it later.

## File structure to produce

```
ad-swipe-file/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── tailwind.config.mjs
├── README.md                              (already provided)
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts                      (already provided — do not modify)
│   │   └── ads/
│   │       └── 2026-05-10-apple-think-different.md   (already provided)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── AdCard.astro
│   │   ├── TagPill.astro
│   │   └── MechanismBadge.astro
│   ├── pages/
│   │   ├── index.astro                    # latest 12 entries, grid
│   │   ├── archive.astro                  # full list with filters
│   │   ├── ads/[slug].astro               # entry detail page
│   │   ├── tags/[tag].astro               # filter by tag
│   │   ├── mechanisms/[mechanism].astro   # filter by psych mechanism
│   │   ├── about.astro
│   │   └── rss.xml.ts
│   └── styles/
│       └── global.css
```

## Pages

1. **Home (`/`)** — Site title and one-line tagline at top. Grid of latest 12 entries as cards (brand, year, hook quote, 2–3 mechanism badges). Link to full archive at bottom.
2. **Entry detail (`/ads/[slug]`)** — Full analysis. If `embedUrl` exists, embed at top (YouTube iframe, lazy-loaded). Then dedicated sections, in this order: **Hook**, **Insight**, **Mechanisms** (as badges), **Structure**, **Template**, **Applied Example**. Markdown body below those (optional commentary). Tags at the bottom. Prev/next navigation by date.
3. **Archive (`/archive`)** — Denser table or list of all entries with client-side filters for year, medium, and mechanism. Sortable by date or by brand.
4. **Tag and mechanism pages** — Filtered lists, same layout as archive but pre-filtered.
5. **About** — Short page. Pull copy from `README.md` "How it works" section.
6. **RSS feed** — `/rss.xml` using `@astrojs/rss`.

## Design direction

Editorial and quiet. Think *The New Yorker* archive crossed with *Are.na* and *It's Nice That*. NOT a SaaS blog. Specifics:
- Generous whitespace; one column for entry detail pages, max-width around 680px for prose.
- Body in a serif (Source Serif Pro or EB Garamond via Google Fonts). UI/nav in sans (Inter).
- Neutral palette: off-white background (`#FAFAF7`), near-black text (`#1A1A1A`), one accent (a single warm tone — burnt orange or oxblood). Define as Tailwind theme tokens.
- Cards: image-forward when a `thumbnail` exists, type-forward when not.
- Mechanism badges are small, lowercase, pill-shaped, with a 1px border in the accent color — these are the visual heroes of the site.
- No scroll animations, no popups, no cookie banner unless legally required.
- Mobile-first responsive layout, but desktop should feel composed, not stretched.

## Behavior details

- All dates render as `Month D, YYYY` (e.g. "May 10, 2026").
- The `template` and `appliedExample` fields are multiline strings (in YAML `|` blocks) — render preserving newlines, ideally in a slightly different visual treatment (lighter background block, monospace optional).
- Mechanism badges link to `/mechanisms/[slug]` where slug is the kebab-cased version of the mechanism name.
- Sort entries by `publishedAt` descending everywhere.
- Site title: "Ad Swipe File" (placeholder — I'll change it later). Tagline: "A daily archive of ads that work, and why."

## Deployment

Set up so I can:
1. Run `npm run dev` locally on port 4321.
2. `git init`, make an initial commit, and prepare for me to add a GitHub remote.
3. Include a `vercel.json` if needed, but Astro on Vercel mostly auto-detects.

## First steps for you

1. Initialize the Astro project in this directory, preserving the three files I've already provided.
2. Install dependencies (Astro, Tailwind, `@astrojs/rss`).
3. Build the layouts, components, and pages.
4. Run `npm run dev` and confirm:
   - The home page renders with the Apple "Think Different" example visible as a card.
   - Clicking the card opens the full entry detail page with all six framework sections.
   - The RSS feed at `/rss.xml` includes the example.
5. Show me the result. Don't deploy yet.

## Tone of voice for any UI copy you write

Calm, confident, slightly understated. No exclamation points. The site is for someone studying ads, not pitching them.

## What NOT to do

- Don't add a CMS, database, or auth. Markdown files + git is the whole system.
- Don't add analytics, tracking pixels, or third-party scripts.
- Don't add comments, likes, or social features.
- Don't generate placeholder entries beyond the one I provided.
- Don't restructure the content schema in `config.ts`.
