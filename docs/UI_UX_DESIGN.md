# UI/UX Design Reference

---

## Visual Concept

A **premium dark developer portfolio** with a futuristic, editorial quality. The design draws on:

- Modern developer and AI company interfaces
- Dark editorial layouts with high typographic contrast
- Subtle glass-like card surfaces
- Atmospheric violet ambient lighting
- Clean, structured whitespace

Purple/violet is used as an accent, not the dominant colour of every element. Restraint is key.

---

## Color Palette

### Design Tokens

All colours are defined as CSS custom properties in `src/styles/globals.css`.

#### Dark Theme (default)

| Token | Hex | Purpose |
|---|---|---|
| `--bg-main` | `#0B0B12` | Page background |
| `--bg-secondary` | `#12121D` | Section alternating background |
| `--bg-card` | `#181827` | Card backgrounds |
| `--bg-card-hover` | `#1E1E30` | Card hover state |
| `--text-main` | `#F5F3FF` | Primary text |
| `--text-secondary` | `#B8B4C9` | Body copy, secondary labels |
| `--text-muted` | `#7C789A` | Timestamps, small labels, disclaimers |
| `--border` | `#2B2840` | Card and input borders |
| `--border-hover` | `#4C4870` | Hover border state |
| `--accent-primary` | `#A78BFA` | Main violet accent |
| `--accent-secondary` | `#8B5CF6` | Deeper violet, gradients |
| `--accent-glow` | `rgba(167,139,250,0.15)` | Icon backgrounds, tag backgrounds |

#### Light Theme

| Token | Hex | Purpose |
|---|---|---|
| `--bg-main` | `#F5F3FF` | Page background |
| `--bg-secondary` | `#EDE9FE` | Section alternating background |
| `--bg-card` | `#FFFFFF` | Card backgrounds |
| `--bg-card-hover` | `#FAF8FF` | Card hover state |
| `--text-main` | `#1A1730` | Primary text |
| `--text-secondary` | `#4B4668` | Body copy |
| `--text-muted` | `#7C789A` | Small labels |
| `--border` | `#DDD8F5` | Borders |
| `--border-hover` | `#C4BCEA` | Hover borders |

The accent colours (`#A78BFA`, `#8B5CF6`) are shared between themes.

---

## Typography

| Role | Style |
|---|---|
| Font stack | `Inter, Segoe UI, system-ui, -apple-system, sans-serif` |
| Hero heading | `clamp(2.5rem, 7vw, 4.5rem)`, bold, 700 |
| Section heading | `clamp(1.75rem, 4vw, 2.5rem)`, bold, 700 |
| Project title | `1.25rem`, semibold, 600 |
| Body text | `1.0625rem`, regular, line-height 1.75–1.8 |
| Small labels / badges | `0.8125rem–0.875rem` |
| Eyebrow label | `0.8125rem`, uppercase, letter-spacing 0.12em, 600 |

Gradient text (`gradient-text` utility) is used on the hero heading and logo only — not overused.

---

## Spacing System

Spacing follows Tailwind's default 4px-base grid. Notable sizes:

| Purpose | Value |
|---|---|
| Section vertical padding | `5rem` (80px) |
| Section horizontal padding | `1.5rem` → `2rem` → `4rem` (responsive) |
| Card padding | `1.25rem`–`1.75rem` |
| Gap between cards | `1.5rem` |
| Max content width | `1100px` |

---

## Layout Principles

- Single-column on mobile, 2–4 column grids on larger screens.
- Alternating section backgrounds (`--bg-main` / `--bg-secondary`) to visually separate content.
- Sticky navigation occupies ~72px; section scroll is offset by this amount.
- Cards use rounded corners (`border-radius: 1rem`) — not excessively pill-shaped.
- Generous whitespace between sections.

---

## Card Styling

```css
background: var(--bg-card)
border: 1px solid var(--border)
border-radius: 1rem
box-shadow: 0 4px 32px rgba(0,0,0,0.5)
transition: transform 0.2s, box-shadow 0.2s
```

**On hover:**
```css
background: var(--bg-card-hover)
border-color: var(--border-hover)
transform: translateY(-2px)
box-shadow: var(--shadow-card), var(--shadow-glow)
```

---

## Button Styles

### Primary Button (`btn-primary`)
- Background: `linear-gradient(135deg, #A78BFA, #8B5CF6)`
- Text: white
- Border-radius: `0.625rem`
- Hover: slight lift, stronger glow shadow
- Focus: `outline: 2px solid #A78BFA`, offset 3px

### Secondary Button (`btn-secondary`)
- Background: transparent
- Border: `1.5px solid #A78BFA`
- Text: `#A78BFA`
- Hover: subtle violet background tint

---

## Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile (default) | < 640px |
| `sm` | ≥ 640px |
| `md` | ≥ 768px |
| `lg` | ≥ 1024px |

---

## Animation Principles

- Animations are subtle and purposeful.
- CSS transitions are used for theme changes, card hovers, and link colour changes.
- `animate-bounce` on the hero scroll indicator (Tailwind utility).
- `prefers-reduced-motion` is respected via a global CSS rule that reduces all durations to near-zero.
- Heavy particle systems or full-page parallax are intentionally excluded.

---

## Ambient Decorative Elements

- **Hero background:** faint CSS grid overlay with a radial mask + two large blurred violet orbs.
- **Achievements section:** centred radial glow orb behind the cards.
- **Contact section:** a subtle violet orb in the lower-right corner.
- All decorative elements have `pointer-events: none` and `aria-hidden="true"`.

---

## Hover & Focus Behaviour

- All interactive elements have visible `:focus-visible` styles (2px violet outline, 3px offset).
- Cards lift (`translateY(-2px)`) on hover.
- Nav links and social icons transition colour to `--accent-primary` on hover.
- Buttons lift and increase glow on hover.

---

## Reduced-Motion Handling

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

This global rule ensures all CSS transitions and animations are effectively disabled for users who prefer reduced motion.

---

## Accessibility Considerations

- Colour contrast meets WCAG AA for text on card and section backgrounds.
- Purple accent (`#A78BFA`) on dark background (`#0B0B12`) — contrast ratio ≈ 5.4:1 (passes AA for text).
- All icon-only buttons have `aria-label`.
- Navigation uses `role="navigation"` and `aria-label`.
- Active nav link has `aria-current="page"`.
- Form fields have associated `<label>`, `aria-required`, `aria-invalid`, and `aria-describedby`.
- Error messages use `role="alert"`.
- External links include `(opens in new tab)` in accessible labels.
