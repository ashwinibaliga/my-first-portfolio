# Component Specification

---

## App

**File:** `src/App.tsx`

**Purpose:** Root application component. Manages theme state and composes the page layout.

**Responsibilities:**
- Initialise theme from `localStorage` or `prefers-color-scheme`.
- Apply `.dark` / `.light` class to `<html>` on theme change.
- Persist theme to `localStorage`.
- Render `Navbar`, all page sections, and `Footer`.

**Props:** None (root component).

**State:**
- `theme: 'dark' | 'light'`

**Dependencies:** All section and component files, `portfolio.ts` (indirectly via children).

---

## Navbar

**File:** `src/components/Navbar.tsx`

**Purpose:** Fixed top navigation bar with logo, section links, theme toggle, and optional resume download.

**Responsibilities:**
- Render all navigation links defined in the local `NAV_LINKS` array.
- Highlight the currently visible section using a scroll listener.
- Show a backdrop blur and border when the user has scrolled past 24px.
- Render a mobile hamburger menu (below `md` breakpoint).
- Provide a "Download Resume" link when `resume.available` is `true`.

**Props:**
| Prop | Type | Description |
|---|---|---|
| `theme` | `'dark' \| 'light'` | Current theme |
| `onToggleTheme` | `() => void` | Theme toggle callback |

**State:**
- `menuOpen: boolean` — mobile menu visibility
- `scrolled: boolean` — sticky state
- `activeSection: string` — current section ID

**Accessibility:**
- `<header role="banner">`, `<nav aria-label="Main navigation">`
- Active link: `aria-current="page"`
- Mobile button: `aria-expanded`, `aria-controls`, `aria-label`
- Mobile menu: `role="dialog"`, `aria-label`

**Responsive:** Mobile hamburger below `md`; desktop links above `md`.

---

## ThemeToggle

**File:** `src/components/ThemeToggle.tsx`

**Purpose:** Icon button to toggle between dark and light theme.

**Props:**
| Prop | Type | Description |
|---|---|---|
| `theme` | `'dark' \| 'light'` | Current theme |
| `onToggle` | `() => void` | Toggle callback |

**Accessibility:** `aria-label` updates to reflect current state ("Switch to light mode" / "Switch to dark mode").

---

## SectionHeading

**File:** `src/components/SectionHeading.tsx`

**Purpose:** Consistent section heading block used at the top of every section.

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Small uppercase eyebrow label |
| `title` | `string` | — | Main `<h2>` heading |
| `description` | `string?` | — | Optional descriptive paragraph |
| `centered` | `boolean?` | `false` | Centres all text |

**Visual:** Eyebrow label → `<h2>` → 3px gradient divider → optional description.

---

## ProjectCard

**File:** `src/components/ProjectCard.tsx`

**Purpose:** Card component displaying a single project's metadata.

**Props:**
| Prop | Type | Description |
|---|---|---|
| `project` | `Project` | Project data object from `portfolio.ts` |

**Visual behaviour:**
- Shows a top gradient border line when `highlight === true`.
- Shows a "HackAce Winner" badge when `highlight === true`.
- Lists tech stack as `tech-badge` chips.
- Shows "Project details available on request." when no `repoUrl` or `demoUrl` is present.
- Does NOT show fake buttons for unavailable URLs.

**Hover:** Card lifts and border brightens (`.card` utility).

**Accessibility:** `<article aria-label="Project: {name}">`.

---

## BrandIcons

**File:** `src/components/BrandIcons.tsx`

**Purpose:** Custom SVG components for GitHub and LinkedIn brand icons (not available in lucide-react v1.61).

**Exports:**
- `GithubIcon` — GitHub octocat SVG
- `LinkedinIcon` — LinkedIn "in" logo SVG

**Props (both):**
| Prop | Type | Default |
|---|---|---|
| `size` | `number?` | 20 |
| `className` | `string?` | — |
| `aria-hidden` | `'true'?` | — |

---

## Footer

**File:** `src/components/Footer.tsx`

**Purpose:** Site-wide footer with name, closing line, dynamic copyright year, and social links.

**Props:** None.

**Content:** Name, "Crafted with curiosity and code.", dynamic `© {year}`, GitHub, LinkedIn, and email icons.

**Accessibility:** `<footer role="contentinfo">`, descriptive `aria-label` on each icon link.

---

## HeroSection

**File:** `src/sections/HeroSection.tsx`

**Purpose:** Full-screen first impression with name, role, tagline, intro, CTA buttons, social links, and scroll indicator.

**Content sources:** `person`, `contact`, `resume` from `portfolio.ts`.

**Visual elements:**
- CSS grid overlay with radial mask
- Two ambient violet blur orbs
- `animate-bounce` scroll indicator

**Accessible scroll:** CTA buttons use `window.scrollTo` with a 72px navbar offset; no anchor-only navigation.

---

## AboutSection

**File:** `src/sections/AboutSection.tsx`

**Purpose:** Presents Ashwini's verified introduction and education in a two-column layout.

**Content sources:** `person` from `portfolio.ts`.

**Visual:** Text column + 2×2 grid of highlight cards (Education, Focus, Interests, Beyond Code).

---

## SkillsSection

**File:** `src/sections/SkillsSection.tsx`

**Purpose:** Displays skills grouped by category as icon cards with `tech-badge` chips.

**Content sources:** `skillCategories` from `portfolio.ts`.

**Notes:** No skill percentages or proficiency bars. A small disclaimer notes that skills are areas of knowledge, not formal ratings.

---

## ProjectsSection

**File:** `src/sections/ProjectsSection.tsx`

**Purpose:** Renders the projects grid using `ProjectCard`.

**Content sources:** `projects` from `portfolio.ts`.

**Layout:** 2-column grid on `md`+, single column on mobile.

---

## AchievementsSection

**File:** `src/sections/AchievementsSection.tsx`

**Purpose:** Displays three hackathon results with visual emphasis on the HackAce win.

**Content sources:** `achievements` from `portfolio.ts`.

**Visual:** HackAce card has a top gradient line, a radial glow, a larger icon, and a stronger border.

---

## ExperienceSection

**File:** `src/sections/ExperienceSection.tsx`

**Purpose:** Timeline of extracurricular and volunteering activities.

**Content sources:** `experiences` from `portfolio.ts`.

**Layout:** Vertical timeline with icon node, connecting line, and card content.

**Accessibility:** `role="list"` and `role="listitem"`.

---

## LearningSection

**File:** `src/sections/LearningSection.tsx`

**Purpose:** Placeholder for AI course information and continuous learning narrative.

**Notes:** Specific course names and credentials are not available; the section acknowledges this honestly with a pending note.

---

## ContactSection

**File:** `src/sections/ContactSection.tsx`

**Purpose:** Contact links and an honest frontend-only contact form.

**Content sources:** `contact` from `portfolio.ts`.

**Form behaviour:**
- Client-side validation (name, email format, message length).
- On valid submit: opens `mailto:` URI with pre-filled subject and body.
- A visible disclaimer informs the user that the form opens their email client.
- Post-submit: shows a confirmation state explaining what happened.
- No "message sent successfully" displayed for a non-existent server submission.

**Accessibility:**
- `<form aria-label="Contact form">`
- All inputs have `<label>`, `aria-required`, `aria-invalid`, `aria-describedby`
- Errors use `role="alert"`
- Disclaimer uses `role="note"`
