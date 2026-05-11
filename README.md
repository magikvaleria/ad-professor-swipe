# Ad Swipe File

A daily archive of ads that work, and why.

Each entry is one ad, broken down into the psychological mechanisms behind why it works and the reusable template extracted from it. New entry every day.

## How it works

Every ad lives in `src/content/ads/` as a single markdown file with structured frontmatter. The site reads those files and generates the index, detail pages, tag pages, mechanism pages, and RSS feed automatically.

## The framework

Every entry follows the same six fields, in this order:

1. **Hook** — what stops the scroll in the first 2 seconds
2. **Insight** — the human truth or tension the ad is built on
3. **Mechanisms** — named psychological principles at play (e.g. loss aversion, identity signaling, peak-end rule)
4. **Structure** — the narrative shape (problem/solution, transformation, manifesto, reveal, juxtaposition)
5. **Template** — the brand-agnostic formula, stripped of this specific brand
6. **Applied example** — the template applied to a totally different product or category, as a test

The applied example is the part most people skip. It's the part that builds the muscle.

## Adding a new entry

1. Create a new file at `src/content/ads/YYYY-MM-DD-brand-name.md`.
2. Copy the frontmatter structure from any existing entry.
3. Fill in the six framework fields plus the metadata (brand, agency, year, medium, links, tags).
4. Optional commentary goes in the markdown body below the frontmatter.
5. Commit and push. The site rebuilds automatically.

## Daily workflow

Aim for one entry per day. The bottleneck is usually finding the ad, not writing it up.

Suggested 30-minute morning routine:
1. Scan **Best Ads on TV**, **Ads of the World**, **LBB Online**, and the **Contagious** newsletter (~10 min).
2. Pick one ad that genuinely stopped you, not just one you "liked."
3. Open a new markdown file. Fill the six fields. Don't overthink.
4. Push.

Slow days: a three-paragraph entry is fine. Consistency beats depth in year one.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Deploy

Pushes to `main` auto-deploy via Vercel.

## Sources for finding entries

- Best Ads on TV — bestadsontv.com
- Ads of the World — adsoftheworld.com
- LBB Online — lbbonline.com
- Contagious newsletter — contagious.com
- Cannes Lions, D&AD, One Show, Effies archives (annual deep dives)
