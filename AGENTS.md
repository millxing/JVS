# JVS — John VanScoyoc Campaign Website

## Overview

Campaign website for John VanScoyoc running for re-election to the Brookline Select Board (May 5, 2026). Currently a single-page site with plans to add subpages later.

## Tech Stack

- **Next.js 16** (App Router) with static export
- **Tailwind CSS v4** for styling
- **TypeScript**
- **GitHub Pages** for hosting

## Design Direction

Warm & community-focused. The palette is:
- **Navy** (`#1B3A5C`) — primary, used for headers, nav, hero background
- **Gold** (`#C8952E`) — accent, used for CTAs, badges, highlights
- **Cream** (`#FAF7F2`) — page background
- **Sage** (`#7A9E7E`) — secondary accent, bullet points
- **Warm gray** (`#6B6560`) — body text

Typography: `Merriweather` (serif) for headings, `Inter` (sans) for body text. Loaded via Google Fonts in `layout.tsx`.

## Project Structure

```
src/app/
├── layout.tsx           # Root layout, fonts, metadata
├── page.tsx             # Homepage — assembles all sections
├── globals.css          # Tailwind imports, custom colors, animations
└── components/
    ├── Navbar.tsx        # Sticky nav, scroll behavior, mobile menu
    ├── Hero.tsx          # Photo, headline, tagline, CTAs
    ├── Platform.tsx      # Two-point message cards
    ├── Endorsements.tsx  # Featured + expandable community endorsers
    ├── CallToAction.tsx  # "Join the Campaign" with 4 action cards
    ├── About.tsx         # Bio, family photo, credential tags
    └── Footer.tsx        # Contact info, links, disclaimer
```

Images live in `public/` and are referenced with the `/JVS/` prefix (due to `basePath`).

## Configuration

- `next.config.ts` — static export (`output: "export"`) and base path (`basePath: "/JVS"`) for GitHub Pages
- `postcss.config.mjs` — Tailwind CSS PostCSS plugin
- `tsconfig.json` — TypeScript config with `@/*` path alias

## Local Development

```bash
npm run dev
```

Visit `http://localhost:3000/JVS` (the `/JVS` prefix is required due to `basePath`).

## Deployment

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`).

**To deploy:** just push to `main`.

```bash
git add <files>
git commit -m "description of change"
git push
```

The Action will:
1. Install dependencies
2. Run `npm run build` (generates static `out/` folder)
3. Deploy to GitHub Pages

The site is live at: `https://millxing.github.io/JVS/`

## Editing Content

All content lives in `src/app/components/`. Edit the text directly in the relevant component file:

| File | Content |
|------|---------|
| `Hero.tsx` | Headline, tagline, election date, CTA buttons |
| `Platform.tsx` | "Experience Counts" and "I'm Independent" bullet points |
| `Endorsements.tsx` | Endorser names and titles |
| `CallToAction.tsx` | "Join the Campaign Today" action cards |
| `About.tsx` | Bio paragraphs and family section |
| `Navbar.tsx` | Navigation links |
| `Footer.tsx` | Contact info, address, phone, email |

## Key Links

- **Donate URL:** https://secure.actblue.com/donate/committee-to-elect-john-vanscoyoc-1
- **Contact email:** jvanscoyoc0@gmail.com
- **Phone:** 617 888-1663
