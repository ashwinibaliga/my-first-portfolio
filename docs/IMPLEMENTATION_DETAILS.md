# Implementation Details

---

## Implemented Features

| Feature | File(s) | Notes |
|---|---|---|
| Theme toggle (dark/light) | `App.tsx`, `ThemeToggle.tsx`, `globals.css` | CSS custom property tokens, `localStorage` persistence |
| Anti-FOUC | `index.html` inline `<script>` | Applies class to `<html>` before first paint |
| Sticky navbar | `Navbar.tsx` | Backdrop blur, active section detection via scroll |
| Mobile navigation | `Navbar.tsx` | Hamburger menu, `role="dialog"` |
| Resume placeholder | `Navbar.tsx`, `HeroSection.tsx`, `portfolio.ts` | Button hidden when `resume.available === false` |
| Hero section | `HeroSection.tsx` | CSS grid bg, glow orbs, CTAs, social links |
| About section | `AboutSection.tsx` | Two-column layout, 4 highlight cards |
| Skills section | `SkillsSection.tsx` | 4 category cards, tech-badge chips |
| Projects section | `ProjectsSection.tsx`, `ProjectCard.tsx` | Winner badge, no fake links |
| Achievements section | `AchievementsSection.tsx` | HackAce visual emphasis |
| Experience section | `ExperienceSection.tsx` | Vertical timeline |
| Learning section | `LearningSection.tsx` | AI course placeholder with honest note |
| Contact section | `ContactSection.tsx` | Validated mailto form, disclaimer |
| Footer | `Footer.tsx` | Dynamic year, social links |
| Brand icons | `BrandIcons.tsx` | Custom SVGs for GitHub, LinkedIn |
| Design tokens | `globals.css` | CSS custom properties for both themes |

---

## Key Source Files

| File | Responsibility |
|---|---|
| `src/data/portfolio.ts` | All personal content — projects, skills, contact, achievements |
| `src/styles/globals.css` | Design tokens, utility classes, base styles, reduced-motion rule |
| `src/App.tsx` | Theme state, layout composition |
| `index.html` | Anti-FOUC script, meta tags, page title |
| `vite.config.ts` | React + Tailwind v4 plugin configuration |
| `tsconfig.json` | Strict TypeScript, JSX react-jsx transform |

---

## Component Implementation Decisions

### BrandIcons.tsx
lucide-react v1.61 does not include `Github` or `Linkedin` brand icons. Rather than downgrade the library or add a separate brand icon package, two lightweight inline SVG components were created. This avoids extra dependencies and keeps file sizes minimal.

### Navbar active section detection
Intersection Observer was not used to keep the implementation simple. Instead, a passive `scroll` listener iterates sections in reverse order and checks `getBoundingClientRect().top <= 100` to find the current section. This is sufficiently accurate for a single-page portfolio.

### Contact form — mailto approach
No backend is available. The form builds a `mailto:` URI using `encodeURIComponent` on the subject and body, then sets `window.location.href`. A visible disclaimer is shown before submission, and the post-submit state explicitly says the email client opened (not "sent successfully").

### ProjectCard — no CTA when URLs are missing
The requirement is clear: do not show fake functional buttons. Cards display a small italic note ("Project details available on request.") instead. When `repoUrl` or `demoUrl` are added to `portfolio.ts`, the card renders proper anchor links.

### Resume download — hidden state
`resume.available` is `false` in `portfolio.ts`. The download button is conditionally rendered only when `true`, so no broken link exists. Updating this requires one field change and a PDF placed in `public/assets/`.

---

## Styling and Design Token Strategy

Tailwind CSS v4 is used via the `@tailwindcss/vite` plugin. The `@theme` block in `globals.css` maps CSS custom properties to Tailwind colour utilities:

```css
@theme {
  --color-bg-main: var(--bg-main);
  --color-text-main: var(--text-main);
  /* ... */
}
```

This means `bg-bg-main`, `text-text-secondary`, etc., are valid Tailwind utilities that resolve through the CSS custom property layer — enabling the dark/light switch with zero JavaScript class manipulation per-element.

---

## Theme-Switching Implementation

1. `App.tsx` initialises `theme` state from `localStorage` or OS preference.
2. A `useEffect` sets `.dark` / `.light` on `<html>` and saves to `localStorage`.
3. The inline `<script>` in `index.html` performs the same check synchronously (no React) so the correct class is present before the first paint, preventing flash of incorrect colour scheme (FOUC).

---

## Animation Implementation

- **CSS transitions** — all hover effects, theme transitions, and colour changes use `transition` properties.
- **`animate-bounce`** — Tailwind's built-in utility on the hero scroll indicator.
- **Framer Motion** — installed but not currently used. Available for future scroll-reveal animations without adding a new dependency.
- **`prefers-reduced-motion`** — a global CSS rule overrides all animation/transition durations to `0.01ms` for users who opt out.

---

## Contact Form Behaviour (Detailed)

1. User fills name, email, and message fields.
2. On submit, `validate()` runs synchronous checks.
3. If errors exist, they are set in state and displayed below each field with `role="alert"`.
4. If valid, a `mailto:` URI is constructed:
   ```
   mailto:ashwinibaliga08@gmail.com?subject=...&body=...
   ```
5. `window.location.href` is set to this URI, triggering the OS email client.
6. `submitted` state is set to `true`.
7. The form is replaced by a confirmation panel that explains what happened and provides a direct email link fallback.

---

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | 19.x | UI framework |
| `react-dom` | 19.x | DOM rendering |
| `@vitejs/plugin-react` | 4.x | Vite React JSX transform |
| `tailwindcss` | 4.x | CSS utilities |
| `@tailwindcss/vite` | 4.x | Tailwind Vite integration |
| `lucide-react` | 1.61 | Icon components |
| `framer-motion` | 14.x | Animation library (available) |
| `typescript` | ~6.0 | Type checking (devDependency) |
| `vite` | 8.x | Build tool (devDependency) |
| `@types/react` | 19.x | React types |
| `@types/react-dom` | 19.x | ReactDOM types |

---

## Known Limitations

1. **Resume not available** — button is hidden; PDF must be added manually.
2. **Project URLs not provided** — cards show a text note instead of links.
3. **Course credentials not available** — Learning section uses a placeholder note.
4. **No Formspree / EmailJS** — contact form relies on `mailto:`; messages are sent only if the visitor's email client opens.
5. **No automated browser testing** — visual checks were not run with a headless browser in this environment.
6. **Brand icons** — GitHub and LinkedIn icons are custom SVGs; they are functionally equivalent but may render slightly differently than library versions.

---

## Decisions Future Developers Should Understand

- **Content lives in `src/data/portfolio.ts`** — never scatter content strings across components.
- **Design tokens in `globals.css`** — never hardcode colour hex values inside components; always use CSS custom properties.
- **`resume.available` flag** — adding a resume requires one boolean change and a PDF; no component changes needed.
- **No backend** — do not add form submission logic without a real endpoint and proper secret management.
- **Strict TypeScript** — all new components and data should be typed; do not use `any`.
