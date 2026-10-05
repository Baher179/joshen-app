# Joshen — Premium Beauty App (جوشن)

Interactive Arabic (RTL) prototype of three apps: the customer app (العميلة), the service-provider app (مقدّمة الخدمة) and the driver app (المندوب).

## Folder contents

- `Joshen App.dc.html` — the editable source (screens, data and logic).
- `support.js` — the runtime that renders the page (loads React automatically).
- `_ds/` — the design system: components, colours, fonts.
- `art/` — images and illustrations (`onb-1..3.svg` = the animated onboarding illustrations).
- `brand/` — Joshen logos (`mark-w.svg` white mark, `mark-p.svg` purple mark, `logo-h-w.png` white wordmark).
- `uploads/` — the original logo source files.
- `dist/index.html` — a ready-to-run single-file build (everything embedded).

## Running

**Quickest:** open `dist/index.html` directly in a browser (needs internet to load React).

**Source version:** serve it from a local server (double-clicking the file won't load its assets):

    cd joshen-app
    python -m http.server 8000

Then open http://localhost:8000/Joshen%20App.dc.html — edit `Joshen App.dc.html` and refresh to see changes.
