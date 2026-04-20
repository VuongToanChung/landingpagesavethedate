# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wedding "Save The Date" landing page for a Vietnamese couple (Minh & Hoa), wedding date May 1, 2026. Static single-page React app deployed on Vercel.

## Commands

All commands run from `app/` directory:

```bash
cd app
npm run dev      # Dev server at http://localhost:5173
npm run build    # Production build → app/dist/
npm run preview  # Preview production build
npm run lint     # ESLint
```

Vercel build (from repo root): `cd app && npm install && npm run build`

## Tech Stack

- **Vite 8** + **React 19** (JSX, no TypeScript)
- **Tailwind CSS v4** — uses `@theme` directive in `index.css` for design tokens (not `tailwind.config.js`)
- **vite-plugin-image-optimizer** — auto-compresses images in `public/` during build (sharp + svgo)
- No router, no state management, no backend — purely static sections rendered in sequence

## Architecture

**App.jsx** renders all sections in order: Hero → CalendarSection → FamilySection → VenueSchedule → LoveStoryGallery → CountdownQR → Footer → MusicPlayer

All page sections live in `app/src/components/`. Each is a self-contained section component with its own layout and styling via Tailwind utility classes.

### Design System (defined in `app/src/index.css`)

Custom Tailwind v4 theme tokens via `@theme {}`:
- Colors: `surface-primary`, `on-surface`, `inverse-surface`, `primary-brand`, `primary-container`, `outline-variant`, etc.
- Fonts: `font-headline` (Noto Serif) for headings, `font-body` (Plus Jakarta Sans) for body text
- Design philosophy from `DESIGN.md`: no hard 1px borders ("No-Line Rule"), use subtle background/color differences for separation, soft wide shadows

### Static Assets (`app/public/`)

- `header/` — hero header images
- `slide/` — gallery photos (DSC*.jpg)
- `qr/` — bank QR codes for wedding gifts
- Images are auto-optimized at build time (JPEG/PNG quality 80, WebP 80, AVIF 70)

## Key Conventions

- All UI text is in Vietnamese
- Use existing Tailwind theme tokens (e.g., `bg-surface-primary`, `text-primary-brand`) rather than hardcoded hex colors
- Headings use `font-headline`, body text uses `font-body`
- Mobile-first responsive design; images use `loading="lazy"`
- ESLint rule: unused vars starting with uppercase or underscore are ignored (`varsIgnorePattern: '^[A-Z_]'`)
