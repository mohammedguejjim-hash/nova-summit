# NOVA Summit — Event Landing Page (concept demo)

A minimal, single-page event landing page: typography-led hero with a subtle
AI-generated video backdrop, an **About the Event** section, and a clean
**Schedule / Agenda** timeline. No frameworks, no build step — just HTML + CSS
with a tiny vanilla-JS enhancement. Total assets: ~400 KB.

## Files

| File | What it is |
|---|---|
| `index.html` | All page content. Text marked with `<!-- EDIT: … -->` comments |
| `styles.css` | The single stylesheet. One accent variable re-skins the page |
| `script.js` | Optional: gentle fade-up reveals. Page works without it |
| `assets/` | `hero-bg.mp4` + `hero-poster.webp`, `about-venue.webp`, `about-stage.webp`, `about-networking.webp` |

## Where to update text

Open `index.html` and search for `EDIT:` — every editable block is marked:

- **Event name / tagline / dates** — hero section + `<title>` + top bar
- **Facts block** (date, time, venue) — the three-column row under the hero title
- **About paragraphs & stats** — purpose, location, highlights, key numbers
- **Agenda** — copy/paste an `<li class="slot">` to add a time slot; change the
  `<h3 class="day">` labels for your days
- **Footer** — contact email and meta line

## Where to swap images / video

Drop replacements into `assets/` keeping the same filenames, or update the
`src` paths in `index.html`:

- `hero-bg.mp4` — hero background video (keep it short, muted, abstract;
  compressed to 960p). `hero-poster.webp` is its still fallback.
- `about-venue.webp`, `about-stage.webp`, `about-networking.webp` — content
  images (WebP, 1600px wide max is plenty).

## Re-skin in one line

In `styles.css`, change `--accent` (currently `#e8490f`) — kickers, links,
hover states, and details follow it automatically.

## Performance notes

- System font stack: zero webfont downloads
- Images lazy-load below the fold; hero uses a poster until the video plays
- Video is 223 KB, muted/looping, hidden entirely under
  `prefers-reduced-motion`
- No libraries, no trackers

## Deploy

Any static host works: drag the folder into Netlify Drop, or push to a GitHub
repo with Pages enabled.
