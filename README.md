# Rauhanvillantie 4 — Digital House Manual

A card-based, mobile-first digital house manual for an Airbnb listing. Built as a
static site with no build step or dependencies, so it's easy to host anywhere
(GitHub Pages, Netlify, S3, etc.) and easy for a non-developer to edit later.

## Features

- **Card-based home screen** — each topic (hot tub, fireplaces, kitchen, sauna, …)
  is a tappable card with an icon and one-line teaser.
- **Bilingual** — Finnish and English, toggled with the FI/EN switch in the header.
  The language choice is remembered (`localStorage`) and the browser's language
  is used as the default on first visit.
- **Mobile-first** — single-column cards that expand to a 2-column grid on
  larger screens; detail pages use an app-like slide-in transition.
- **Search** — filters the cards by title/teaser as you type.
- **Highlighted instructions** — the important, must-know instructions from the
  original manual are shown in callout boxes so they aren't missed.
- **Light/dark mode** — follows the guest's system theme automatically.
- **No dependencies** — plain HTML/CSS/JS, no framework, no build step, no
  external icon/font CDN (icons are hand-drawn inline SVG). Works fully offline
  once loaded.

## Project structure

```
index.html        Page shell / markup
css/style.css      Theme, layout, card grid, detail view, light & dark mode
js/content.js       All manual content (Finnish + English), grouped by section
js/icons.js         Inline SVG icon set used by the cards and detail pages
js/app.js           Rendering, routing (#hash per section) and language toggle
```

## Editing the content

All guest-facing text lives in `js/content.js`. Each section looks like this:

```js
{
  id: 'hot-tub',
  icon: 'hotTub',       // key from js/icons.js
  accent: 'coral',      // 'coral' or 'teal'
  image: 'images/hot-tub.jpg',   // optional hero photo shown at the top of the detail view
  title: { fi: 'Palju', en: 'Hot Tub' },
  teaser: { fi: '…', en: '…' },   // shown on the home card
  body: {
    fi: [ /* content blocks, see below */ ],
    en: [ /* … */ ],
  },
},
```

`image` is optional — sections without one just show the icon, as before.

Body blocks (mix and match per section):

| type       | use for                                              |
|------------|-------------------------------------------------------|
| `p`        | a plain paragraph                                     |
| `callout`  | a must-know instruction, highlighted visually         |
| `heading`  | a sub-heading within a section (e.g. two fireplaces)  |
| `steps`    | a numbered how-to list (each item can have a `note`)  |
| `note`     | a secondary, non-critical tip                         |

To add a new section, add an object to the `SECTIONS` array and pick (or add)
an icon key in `js/icons.js`.

### Adding photos

Most sections (hot tub, kitchen, fireplaces, glass terrace, washing machine)
have a hero photo at the top of their detail view, set via the section's
`image` field (see above) and stored under `images/`. To add or replace one:

1. Drop the photo in `images/` (JPEG, roughly 1200px wide is plenty — much
   larger just slows down the page for guests on hotel wifi).
2. Set/point `image: 'images/your-file.jpg'` on the section in `js/content.js`.

The original manual also references a couple of in-step photos (e.g. exact
damper positions on the fireplace) that aren't included yet. To add one of
those, embed it in a `p` block with a normal `<img>` tag instead:

```js
{ type: 'p', text: '<img src="images/damper-open.jpg" alt="Chimney damper in the open position">' }
```

## Running locally

No build step is required — any static file server works:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open the printed URL in a browser (try resizing to a phone width, or open
dev tools' device toolbar, to check the mobile layout).

## Deploying

This is a static site, so GitHub Pages works out of the box:

1. Repository **Settings → Pages**.
2. Source: **Deploy from a branch**, branch: `main`, folder: `/ (root)`.
3. Save — the manual will be published at `https://<user>.github.io/rvilla/`.

Then put that URL (or a QR code pointing to it) in the physical house manual /
welcome book for guests.
