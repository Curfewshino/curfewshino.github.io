# Design plan — Mayo's portfolio & blog

**Goal:** a minimal, calm personal site at `https://curfewshino.github.io` with a project showcase and a blog.
**Stack:** Astro 5 (static output) + Markdown content collections, deployed by GitHub Actions to GitHub Pages.
**Tone:** minimal and clean, editorial. Explicitly not terminal / hacker.
**Positioning:** engineering student whose main interest is electronics (PCBs, firmware, microcontrollers); game controllers are where many projects come from, not the whole identity. Only name games that are officially released in Thailand. Based in Thailand.

## Visual direction
- Type: Fraunces (serif) for headings, Instrument Sans for UI and body. One reading column (~66ch).
- Colour (light): paper `#f6f1e7`, ink `#1f1b16`, muted `#6e665a`, accent terracotta `#b4532a`.
- Colour (dark): `#17140f` / `#ece4d4` / accent `#e08a5f`. Follows system preference, with a manual toggle.
- Layout: single column, generous whitespace, hairline rules instead of boxes, projects as a list (not a card grid).
- Motion: one orchestrated load (header rule draws across, then page blocks settle in sequence); page-to-page crossfade via CSS view transitions; responsive motion only otherwise (underlines draw in on hover, accent rule grows over the hovered list row, theme toggle rotates, filtered lists re-settle). All off under `prefers-reduced-motion`.
- Header brand reads "Mayo's" (`SITE.brand`); greeting still uses `SITE.name`.
- Mobile (≤640px): 16px gutters, brand + toggle on one row and nav spread across a second, horizontally scrolling tag filters, full-bleed code blocks, stacked footer.

## Pages (see `wireframes/index.html`)
Home, Projects, Project detail, Blog index (tag filter), Blog post, Tools (`/tools`, browser utilities, empty for now), About + Contact (`/about`, Contact is `#contact`).

## Content model
- `src/content/projects/*.md`: title, summary, tags, repo, demo, featured, order, status (`in progress` | `paused` | `done`, optional), cover + coverAlt (image in `src/assets/projects/<slug>/`, path relative to the .md). Extra photos go in the Markdown body; an italic line right after an image is styled as its caption.
- `src/content/blog/*.md`: title, description, date, tags, draft
- Tools: one page per tool in `src/pages/tools/<slug>.astro` (start from `_template.astro`), listed via `src/tools.ts`.
- GitHub sync (`src/lib/github.ts`): fetched once per build from the public GitHub API. Write-ups with `repo:` get language and last-updated; other public non-fork repos list under "More on GitHub". Fails soft (site builds without it). Deploy workflow runs daily to refresh.
- Site-wide details (name, tagline, links) live in `src/config.ts`.

## Out of scope for now
Comments, analytics, search, i18n, custom domain (can be added later).
