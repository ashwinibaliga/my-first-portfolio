# Architecture

---

## Application Architecture

This is a **static single-page application (SPA)** built with React. There is no server-side rendering, no backend API, and no database. All content is embedded in the application bundle via a TypeScript data file.

```
Browser → Vite Dev Server (development)
Browser → Static CDN / Host (production)
```

---

## Framework & Tooling

| Tool | Role | Version |
|---|---|---|
| React | UI framework | 19.x |
| TypeScript | Type-safe JavaScript | ~6.0 |
| Vite | Bundler and dev server | 8.x |
| Tailwind CSS | Utility-first CSS framework (v4) | 4.x |
| `@tailwindcss/vite` | Vite plugin for Tailwind v4 | 4.x |
| `@vitejs/plugin-react` | JSX transform for React | 4.x |
| lucide-react | Icon library | 1.61 |
| framer-motion | Animation library (available) | 14.x |

---

## Folder Structure

```
src/
├── components/       # Reusable presentational components
│   ├── BrandIcons.tsx        # Custom SVG icons for GitHub and LinkedIn
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── SectionHeading.tsx
│   └── ThemeToggle.tsx
├── sections/         # Full-width page sections (one per portfolio section)
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── AchievementsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── LearningSection.tsx
│   └── ContactSection.tsx
├── data/
│   └── portfolio.ts  # Content source of truth — all personal data
├── styles/
│   └── globals.css   # Design tokens (CSS custom properties) + global utilities
├── App.tsx           # Root component, theme state
├── main.tsx          # ReactDOM entry point
└── vite-env.d.ts     # Ambient TypeScript declarations (CSS, SVG, PNG)
```

---

## Component Hierarchy

```
App
├── Navbar (fixed, theme + nav)
│   └── ThemeToggle
└── main
    ├── HeroSection
    ├── AboutSection
    ├── SkillsSection
    ├── ProjectsSection
    │   └── ProjectCard (×2)
    ├── AchievementsSection
    ├── ExperienceSection
    ├── LearningSection
    └── ContactSection
└── Footer
```

---

## Data Organization

All content is in `src/data/portfolio.ts`. Key exports:

| Export | Type | Purpose |
|---|---|---|
| `person` | `const` object | Name, role, tagline, intro, education |
| `contact` | `const` object | Email, GitHub, LinkedIn URLs |
| `skillCategories` | `SkillCategory[]` | Grouped skills with icon name |
| `projects` | `Project[]` | Both hackathon projects |
| `achievements` | `Achievement[]` | HackAce, Hacknima, Hackroberfest results |
| `experiences` | `Experience[]` | Volunteering and extracurricular |
| `learningItems` | `LearningItem[]` | AI course placeholder |
| `resume` | `const` object | `available: boolean`, `path: string` |

---

## Theme Architecture

Theme is a string union `'dark' | 'light'` stored in React state inside `App.tsx`.

**Flow:**
1. On mount, `App.tsx` reads from `localStorage` → falls back to `window.matchMedia('prefers-color-scheme: dark')`.
2. The state initialiser runs once on component mount.
3. A `useEffect` applies `.dark` or `.light` class to `document.documentElement` and saves to `localStorage`.
4. The `ThemeToggle` button toggles state, triggering the effect.
5. An anti-FOUC inline `<script>` in `index.html` applies the class synchronously before first paint.

CSS custom properties scoped to `.dark` / `.light` selectors provide all theme-dependent colour values. Tailwind v4's `@theme` block maps these to Tailwind utility classes.

---

## Styling Strategy

1. **CSS custom properties** — define all colours and shadows as design tokens in `globals.css`.
2. **Tailwind utilities** — layout, flex/grid, spacing, responsive modifiers.
3. **`@theme` block** — maps CSS custom properties to Tailwind colour tokens so `bg-bg-main`, `text-text-secondary`, etc. work as utilities.
4. **Utility classes** — `.card`, `.btn-primary`, `.btn-secondary`, `.tech-badge`, `.gradient-text`, `.section-padding`, etc. defined in `globals.css` for consistent reuse.
5. **Inline `style` props** — used for values that are dynamic or context-specific (e.g., specific glow sizes, active states).

---

## State Management

No external state management library. Only React's built-in `useState` and `useEffect` are used:

- `App.tsx` — theme state (`'dark' | 'light'`)
- `Navbar.tsx` — `menuOpen` (mobile menu toggle), `scrolled` (sticky state), `activeSection` (highlight)
- `ContactSection.tsx` — form values, errors, submitted state

---

## External Integrations

None. This is a fully self-contained static application.

- No analytics (no tracking scripts).
- No form backend (contact form uses `mailto:`).
- No CDN font loading (uses system font stack).
- No external image dependencies.

---

## Important Technical Trade-offs

| Decision | Rationale |
|---|---|
| No framer-motion animations on sections | Keeps bundle focused; CSS transitions handle most effects adequately. Framer Motion is installed and can be added incrementally. |
| Custom brand icon SVGs | lucide-react v1.61 does not export `Github` or `Linkedin` icons; inline SVG components avoid this dependency gap. |
| CSS custom properties over Tailwind-only | Enables clean dark/light token switching without duplicating every utility class. |
| No form backend | No secure API key is available; `mailto:` is honest and transparent about its behaviour. |
| `noUnusedLocals` / `noUnusedParameters` | Enforced in `tsconfig.json` for code quality. |
