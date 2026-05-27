# aishanisingh.github.io — v2

Editorial / academic redesign of the personal site. Drop-in replacement for
the existing GitHub Pages repo.

## Files
- `index.html`   — single-page site
- `style.css`    — all styles (tokens, layout, components, responsive)
- `script.js`    — tabs, mobile nav, smooth scroll (no blob/cursor effects)
- `favicon.svg`  — italic `a` mark
- `robots.txt`, `sitemap.xml` — unchanged from previous version
- `images/`      — profile photo + research figures

## Design system (in case you want to extend it)

**Type**
- Display: Instrument Serif (Google Fonts)
- Body:    IBM Plex Sans (Google Fonts)
- Meta:    IBM Plex Mono (Google Fonts)

**Color** (defined as CSS custom properties in `:root`)
- `--paper` `#f3efe6` — background
- `--ink` `#181613`   — primary text
- `--accent` `#8a3a28` — oxblood (all load-bearing accent work)
- `--ink-2/3/4` — text greys for hierarchy

**Rules**
- Italics from Instrument Serif handle all emphasis. No bold-italic.
- Monospace is for metadata only (dates, tags, labels).
- Hairline rules separate sections; no boxes / shadows / gradients.
- One CTA per screen.

## Deploying
Copy the contents of this folder into the root of your `aishanisingh.github.io`
repo, commit, push. GitHub Pages serves it directly.

If you want to keep both versions while you decide, push to a branch and use
the GitHub Pages "deploy from branch" option.
