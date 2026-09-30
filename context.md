# Project Context: Personal Portfolio (`my-portfolio`)

## 1. Summary

Personal portfolio for **Giovanni August**, CS student at Bina Nusantara University (AI / ML / Computer Vision focus). Dark, quiet, typographic design with a code-repository metaphor expressed through structure — file-path navigation (`~/`, `./`), monospace labels, flat surfaces — rather than decorative effects.

**Stack**: Next.js 16 (App Router, React Compiler) · React 19 · Tailwind CSS v4 (`@theme inline`) · TypeScript 5 · Geist fonts.

---

## 2. Directory Structure

```
my-portfolio/
├── public/
│   ├── avatar.png              # Portrait
│   ├── cv.pdf                  # Downloadable CV
│   └── projects/               # SVG preview images per project
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme tokens, base styles (no decorative textures)
│   │   ├── layout.tsx          # Root layout (fonts, metadata, Nav, Footer)
│   │   ├── page.tsx            # Home: hero, projects, about with skills 2x2, education, CV band
│   │   ├── projects/page.tsx   # All projects in row layout
│   │   └── resume/page.tsx     # PDF embed + structured text fallback
│   ├── components/
│   │   ├── ActionButton.tsx    # Link styled as button (solid/outline, rounded-lg)
│   │   ├── CVBand.tsx          # Minimal CV call-to-action section
│   │   ├── CVDocument.tsx      # HTML-rendered CV (light paper sheet in modal)
│   │   ├── CVModal.tsx         # Accessible fullscreen CV preview dialog
│   │   ├── Footer.tsx          # Terminal-style footer with handle, contact, and socials
│   │   ├── Hero.tsx            # Name, role, links, avatar — no animations
│   │   ├── Nav.tsx             # Sticky header: ~/handle + ./section links
│   │   ├── ProjectCard.tsx     # Flat project card (grid/row variants)
│   │   ├── SectionHeading.tsx  # ~/path label + title + optional action
│   │   ├── SocialLinks.tsx     # Icon links (GitHub, LinkedIn, Instagram, Email)
│   │   ├── StudyList.tsx       # Education summary cards
│   │   └── icons.tsx           # Inline SVG brand icons
│   └── data/
│       ├── projects.ts         # Project entries (slug, description, hard part, stack)
│       └── site.ts             # All personal content (profile, education, experience, skills)
```

---

## 3. Design System

All tokens defined via `@theme inline` in `globals.css`. No `tailwind.config.js`.

### Colors
| Token | Value | Usage |
|---|---|---|
| `bg` | `#0a0a0b` | Page background |
| `surface` | `#111113` | Cards, raised areas |
| `elevated` | `#19191c` | Buttons, modal chrome |
| `border` | `#222225` | All borders |
| `text` | `#b4b4bd` | Body copy |
| `heading` | `#e0e0e6` | Headings, emphasis |
| `muted` | `#5c5c66` | Captions, labels, secondary |
| `accent` | `#e0e0e6` | Cohesive neutral accent (matches headings/monochrome palette) |

### Design Principles
- **No decorative textures**: no grain, dot grids, radial glows, or background patterns
- **No scroll animations**: no Reveal/IntersectionObserver wrappers
- **No hover transforms**: no scale, translate, or bounce effects on cards
- **Flat surfaces**: minimal border, no shadows on cards
- **Monospace as structure**: `~/path`, `./section`, `font-mono` for labels and metadata
- **Content density**: tighter spacing, less padding than typical templates

---

## 4. Content Model

Edit `src/data/` to change content. Don't hardcode text in components.

- **`site.ts`**: profile (`site`), bio (`about`), skills, education, experience
- **`projects.ts`**: project entries with `Project` type. `featured: true` shows on homepage (max 3).

---

## 5. Routes

| Route | Description |
|---|---|
| `/` | Hero + featured projects + about (with 2x2 skills) + education + CV band |
| `/projects` | All projects in row layout with "hard part" callout |
| `/resume` | PDF embed with structured text fallback below |

---

## 6. Guidelines

- Next.js 16 with React Compiler — use `"use client"` only when state/effects are needed
- Tailwind v4 — no `tailwind.config.js`, use `@theme inline` tokens
- `next/image` for all images — add `unoptimized` for SVGs
- Content changes go in `src/data/`, layout changes in components/pages
- `npm run dev` / `npm run build` / `npm run lint`
