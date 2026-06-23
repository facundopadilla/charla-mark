# Marketing Digital & Fidelización 2026 — Charla

Interactive slide deck (React + Vite) for a 3-hour workshop on digital marketing
and customer retention for entrepreneurs, focused on Argentina & LATAM.

Built with **React**, **Tailwind CSS**, **framer-motion** (transitions &
reveals), **Recharts** (data viz) and **lucide-react** (icons). No presentation
framework — a small custom deck engine handles navigation, so the bundle stays
lean and the design is fully controlled.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Presenting

Keyboard shortcuts (also under the `?` button):

| Key | Action |
|-----|--------|
| `→` · `Space` · `L` | Next slide |
| `←` · `H` | Previous slide |
| `Home` / `End` | First / last slide |
| `O` · `G` | Overview grid (jump to any slide) |
| `T` | Presenter timer (start / pause) — budgeted to 3:00:00 |
| `R` | Reset timer |
| `F` | Fullscreen |
| `?` | Shortcuts help |

The current slide is synced to the URL hash (`#12`), so a refresh resumes where
you left off. Touch swipe works on tablets.

## Deploy to Vercel

This is a standard Vite app — Vercel auto-detects it (Framework preset: **Vite**,
build `npm run build`, output `dist`). No extra config needed.

```bash
git init
git add -A
git commit -m "feat: marketing & fidelización 2026 deck"
git branch -M main
git remote add origin git@github.com:facundopadilla/charla-mark.git
git push -u origin main
```

Then import the repo at [vercel.com/new](https://vercel.com/new) — or run `npx
vercel` from the project root.

## Structure

```
src/
  components/   Deck engine, Slide canvas, UI primitives, chart wrappers
  lib/          framer-motion variants
  slides/       one file per slide, grouped by section; index.js = order
```

To reorder, retitle, add or remove slides, edit `src/slides/index.js` — it is
the single source of truth for the deck.

---

Las cifras de casos auto-reportados son ilustrativas. Verificá precios y
funcionalidades de las herramientas antes de decidir.
