# Progress

**Last updated:** 2026-10-22

---

## Current Status

✅ **Phase 1–6 complete.** The portfolio is fully implemented, TypeScript-clean, and production-build passing.

---

## Completed Milestones

| Milestone | Status | Notes |
|---|---|---|
| Workspace inspection | ✅ | Scratch dir was empty; Node 22.14, npm 10.9 |
| Project scaffold | ✅ | Vite + React + TypeScript |
| Dependencies installed | ✅ | React 19, Tailwind 4, lucide-react, framer-motion |
| Content inventory documented | ✅ | `docs/CONTENT_INVENTORY.md` |
| Design tokens defined | ✅ | CSS custom properties in `globals.css` |
| Dark/light theme toggle | ✅ | localStorage persistence, OS pref, anti-FOUC |
| All sections implemented | ✅ | Hero, About, Skills, Projects, Achievements, Experience, Learning, Contact, Footer |
| Honest contact form | ✅ | Validated, mailto action, transparent disclosure |
| Resume placeholder | ✅ | Button hidden; activates with one flag + PDF |
| Missing project URLs | ✅ | No fake links; "available on request" note |
| TypeScript typecheck | ✅ | `tsc --noEmit` — 0 errors |
| Production build | ✅ | `vite build` — success, dist generated |
| Dev server verified | ✅ | Running at localhost:5173 |
| All 10 docs files created | ✅ | `docs/*.md` complete |
| README.md | ✅ | Setup, build, structure documented |

---

## Remaining Work

| Task | Priority | Notes |
|---|---|---|
| Add real resume PDF | High | Place at `public/assets/Ashwini_Baliga_Resume.pdf`; set `resume.available = true` |
| Add AI course details | Medium | Course titles, providers, credentials — update `learningItems` in `portfolio.ts` |
| Add project repo/demo URLs | Medium | Update `repoUrl` / `demoUrl` fields in `portfolio.ts` projects |
| Manual browser QA | High | Run checklist in `docs/TESTING.md` |
| Lighthouse accessibility audit | Medium | Run from Chrome DevTools |
| Deploy to hosting | High | Netlify / Vercel recommended — see `docs/DEPLOYMENT.md` |
| Add scroll-reveal animations | Low | Framer Motion is installed; can add `motion.div` wrappers |
| Set up automated tests | Low | Add Vitest + React Testing Library |

---

## Missing Assets

| Asset | Required For | Action |
|---|---|---|
| `public/assets/Ashwini_Baliga_Resume.pdf` | Resume download button | Ashwini to provide |
| Profile photograph | Hero portrait (currently absent by design) | Optional — provide if desired |
| AI course credential screenshots/links | Learning section | Ashwini to provide titles and providers |
| Project repository URLs | ProjectCard links | Ashwini to confirm if repos are public |
| Project demo URLs | ProjectCard links | Ashwini to provide if deployed |

---

## Decisions Made

| Decision | Rationale |
|---|---|
| Custom `BrandIcons.tsx` for GitHub/LinkedIn | lucide-react v1.61 lacks brand icons |
| `mailto:` for contact form | No backend available; disclosed honestly |
| Resume button hidden (not broken) | Resume file not provided; prevents broken UX |
| CSS custom properties over CSS-in-JS | Clean theming, zero runtime overhead |
| No skill percentages or bars | Avoids misleading proficiency claims |
| Framer Motion installed but not yet used | Available for future enhancement |

---

## Errors Encountered & Resolved

| Error | Cause | Resolution |
|---|---|---|
| `tsc` errors: `Github`, `Linkedin` not in lucide-react | lucide-react v1.61 lacks brand icons | Created `BrandIcons.tsx` with custom SVGs |
| `tsc` errors: old template files (`counter.ts`, `style.css`, etc.) | Vite vanilla-TS template files left in `src/` | Deleted old files |
| `tsc` error: CSS side-effect import not typed | Missing ambient `.d.ts` declaration | Added `vite-env.d.ts` with `declare module '*.css'` |

---

## Build & Test Results (2026-10-22)

| Check | Result |
|---|---|
| `tsc --noEmit` | ✅ Passed — 0 errors |
| `vite build` | ✅ Passed — dist built in ~550ms |
| Dev server | ✅ Running at localhost:5173 |
| Browser visual testing | ⬜ Not performed (no automated browser tool available) |

---

## Recommended Next Steps

1. **Run `npm run preview`** and manually test every item in `docs/TESTING.md`.
2. **Provide the resume PDF** and activate the download button.
3. **Deploy** using Netlify or Vercel — instructions in `docs/DEPLOYMENT.md`.
4. **Update `learningItems`** in `portfolio.ts` when course details are confirmed.
5. **Add repo/demo URLs** to the project entries in `portfolio.ts` when available.
