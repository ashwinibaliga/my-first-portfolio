# Testing

---

## Available Testing Tools

No automated test runner (Jest, Vitest, Playwright, Cypress) is configured in this project. The following checks were performed manually or via the TypeScript compiler and Vite build tool.

---

## Build & Type Check Results

| Check | Command | Result | Date |
|---|---|---|---|
| TypeScript compilation | `npx tsc --noEmit` | ✅ **Passed — 0 errors** | 2026-10-22 |
| Production build | `npx vite build` | ✅ **Passed — built in ~550ms** | 2026-10-22 |
| Dev server startup | `npx vite --port 5173` | ✅ **Running — ready in 388ms** | 2026-10-22 |

**Build output (production):**
```
dist/index.html                   1.57 kB │ gzip:  0.75 kB
dist/assets/index-B3lZMUvF.css   19.09 kB │ gzip:  4.91 kB
dist/assets/index-CJ51mjX2.js   262.86 kB │ gzip: 80.90 kB
```

---

## Functional Test Cases

The following cases were specified but NOT run with an automated tool. They represent the manual test checklist a developer should execute when previewing the site.

### Navigation

| Test | Expected | Status |
|---|---|---|
| Click "Home" nav link | Scrolls to `#hero` with offset | ⬜ Not verified in browser |
| Click "About" nav link | Scrolls to `#about` with offset | ⬜ Not verified in browser |
| Click each nav link | Scrolls to correct section | ⬜ Not verified in browser |
| Scroll down | Navbar becomes sticky with backdrop blur | ⬜ Not verified in browser |
| Scroll to each section | Active section highlighted in nav | ⬜ Not verified in browser |
| Mobile: hamburger opens menu | Menu appears | ⬜ Not verified in browser |
| Mobile: menu link click | Scrolls and closes menu | ⬜ Not verified in browser |
| Keyboard: Tab through nav links | Each link receives focus ring | ⬜ Not verified in browser |

### Theme Toggle

| Test | Expected | Status |
|---|---|---|
| Click toggle in dark mode | Switches to light mode | ⬜ Not verified in browser |
| Click toggle in light mode | Switches back to dark mode | ⬜ Not verified in browser |
| Reload page | Theme preference is remembered | ⬜ Not verified in browser |
| First load (dark OS pref) | Dark theme applied without flash | ⬜ Not verified in browser |
| Keyboard: focus toggle, press Enter | Toggles theme | ⬜ Not verified in browser |

### Contact Form

| Test | Expected | Status |
|---|---|---|
| Submit with all fields empty | Errors shown for all fields | ⬜ Not verified in browser |
| Submit with invalid email format | Email error shown | ⬜ Not verified in browser |
| Submit with message < 10 chars | Message error shown | ⬜ Not verified in browser |
| Submit with valid data | mailto: URI opens email client | ⬜ Not verified in browser |
| Post-submit state | Confirmation message shown; no "sent" claim | ⬜ Not verified in browser |
| "Send another message" button | Resets form | ⬜ Not verified in browser |

### Resume Download

| Test | Expected | Status |
|---|---|---|
| `resume.available === false` | Download button not rendered | ⬜ Not verified in browser |
| Set `resume.available = true` + add PDF | Button appears and downloads file | ⬜ Not verified (PDF not provided) |

### Links

| Test | Expected | Status |
|---|---|---|
| GitHub icon/link in hero | Opens https://github.com/ashwinibaliga in new tab | ⬜ Not verified in browser |
| LinkedIn icon/link in hero | Opens https://www.linkedin.com/in/ashwini-baliga-bb48b3416/ in new tab | ⬜ Not verified in browser |
| Email link | Opens mail client with correct address | ⬜ Not verified in browser |
| GitHub in footer | Correct URL, new tab | ⬜ Not verified in browser |
| LinkedIn in footer | Correct URL, new tab | ⬜ Not verified in browser |

### Responsive Checks

| Viewport | Check | Status |
|---|---|---|
| 375px (mobile) | Layout stacks, nav hamburger shown | ⬜ Not verified |
| 768px (tablet) | 2-column grid in projects/about | ⬜ Not verified |
| 1280px (desktop) | Full desktop layout | ⬜ Not verified |

### Keyboard & Accessibility

| Test | Expected | Status |
|---|---|---|
| Tab through all interactive elements | Each receives visible focus outline | ⬜ Not verified |
| Screen reader: section headings | Logical heading hierarchy (h1 → h2) | ⬜ Not verified |
| Icon-only buttons have labels | Confirmed in code review | ✅ Verified in code |
| Error messages accessible | `role="alert"`, `aria-describedby` confirmed | ✅ Verified in code |

### Reduced Motion

| Test | Expected | Status |
|---|---|---|
| `prefers-reduced-motion: reduce` set | All transitions effectively disabled | ✅ CSS rule confirmed in code |

---

## Known Issues

1. No automated browser, accessibility audit (axe/Lighthouse), or visual regression tests have been run.
2. Cross-browser testing (Safari, Firefox) has not been performed.
3. The project would benefit from adding Vitest + React Testing Library for unit tests.

---

## Recommended Next Steps for Testing

1. Run `npm run preview` and manually test all checklist items above.
2. Install and run `axe-core` or use the browser DevTools accessibility panel.
3. Run a Lighthouse audit in Chrome DevTools.
4. Add Vitest: `npm install -D vitest @testing-library/react @testing-library/user-event`.
5. Write unit tests for form validation logic and theme toggle behaviour.
