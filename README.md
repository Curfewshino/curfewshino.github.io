# curfewshino.github.io

Personal portfolio and blog, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Add content
- Blog post: add `src/content/blog/<slug>.md` (title, description, date, tags, draft)
- Project: add `src/content/projects/<slug>.md` (title, summary, tags, repo, demo, featured, order, status)
- Photos: put them in `src/assets/projects/<slug>/`, set `cover:` in the project file, and add more in the body with `![alt](../../assets/projects/<slug>/photo.jpg)`. Astro resizes and converts them at build time. Anything in `src/assets/_unused/` stays out of git.
- GitHub sync: a project with `repo:` shows its language and last update from GitHub. Other public repos appear under "More on GitHub" on the Projects page automatically; hide any with `githubExclude` in `src/config.ts`. The site rebuilds daily so this stays current.
- Web tool: copy `src/pages/tools/_template.astro` to `src/pages/tools/<slug>.astro`, then add it to `src/tools.ts`
- Name, tagline, email, LinkedIn, résumé: `src/config.ts`

## Deploy (one time)
1. Create a GitHub repo named exactly `curfewshino.github.io` and push this folder to `main`.
2. Repo Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

Design notes: `docs/design-plan.md`. Layout wireframes: `wireframes/index.html`.
