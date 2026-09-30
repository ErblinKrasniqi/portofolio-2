@AGENTS.md

# Portfolio / studio site — Erblin Krasniqi

Fresh build. The previous site lives only in git history; don't reuse its code or look.

## What this site is for

A full-stack developer's portfolio that should read like a small, serious studio.
The flagship case study is the web app built for an Italian eye hospital in Kosovo;
other client websites and web apps follow. The goal is to win new client work, so
every section should help a prospective client trust the work and get in touch.

Content still to collect from the owner (ask, don't invent): project names, client
permissions, real screenshots/recordings, results or numbers, stack per project,
contact details, and whether to present as a person or under a studio name.

## Stack

- Next.js 16 (App Router, `src/`), React 19, TypeScript. Read `node_modules/next/dist/docs/` before using an API you're unsure of (see AGENTS.md).
- Tailwind CSS v4. Design tokens live in `src/app/globals.css` (`:root` + `@theme inline`).
- Motion (`motion/react`): component-level and interaction motion, layout/shared-element transitions.
- GSAP + ScrollTrigger (`@gsap/react` `useGSAP`): scroll-driven timelines and pinned sequences.
- Lenis: smooth scrolling, wired to the GSAP ticker in `src/components/smooth-scroll.tsx`.
- Deploy target: Vercel.

## Skills in `.claude/skills/` (use them)

- `frontend-design` (Anthropic): **load it before any design or UI work.** Design plan first
  (palette, type, layout, principles), check it against the generic defaults it lists, then build.
- `webapp-testing` (Anthropic): Playwright-driven checks of the running app.
- `web-design-guidelines` (Vercel): UI/accessibility audit against the Web Interface Guidelines.
- `react-best-practices`, `composition-patterns`, `react-view-transitions` (Vercel): React/Next code quality, page transitions.
- `deploy-to-vercel` (Vercel): preview deployments.

## Design rules for this project

- No templated look. Avoid the defaults listed in `frontend-design` (cream + terracotta,
  black + acid green, identical rounded cards, ALL-CAPS eyebrows, `01 / 02 / 03` on non-sequences,
  fade-up on every section, `→` on every link).
- Motion has one orchestrated moment per page, plus motion that responds to the visitor's
  actions. Every animation respects `prefers-reduced-motion`.
- Mobile is designed on purpose, not squeezed down: check 390px, 820px and 1440px.
- Real content over lorem ipsum. Real project imagery over mockup gradients.
- Performance counts as part of the design: next/image, next/font, no layout shift, animate
  only transform/opacity, lazy-load heavy media.

## Workflow

1. `npm run dev`
2. After visual changes: `npm run shots` (or `npm run shots -- http://localhost:3000 / /work/x`)
   writes desktop/tablet/phone full-page PNGs to `screenshots/`. Look at them and critique before
   calling anything done.
3. Before committing: `npm run lint && npm run typecheck && npm run build`.
