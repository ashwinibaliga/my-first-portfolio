# Deployment

---

## Production Build

```bash
cd ashwini-portfolio
npm install
npm run build
```

The `dist/` directory contains the complete static site:

```
dist/
├── index.html
├── assets/
│   ├── index-*.css   (~19 KB, ~4.9 KB gzipped)
│   └── index-*.js    (~263 KB, ~81 KB gzipped)
└── favicon.svg
```

---

## Environment Requirements

- Node.js ≥ 18 (for the build step only)
- No runtime server is required — the output is 100% static HTML/CSS/JS.
- No environment variables are required.

---

## Static Hosting Options

Any static file host works. Recommended options:

### Netlify (Recommended)

**Option A — Drag and drop:**
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder into the browser

**Option B — Git integration:**
1. Push the repository to GitHub
2. Connect the repo in Netlify → "New site from Git"
3. Build command: `npm run build`
4. Publish directory: `dist`

Netlify automatically handles the SPA routing. No `_redirects` file is needed because the app is a true single-page app with anchor-based navigation (no client-side routing library).

---

### Vercel

1. Push to GitHub
2. Import the repository at https://vercel.com/new
3. Vercel auto-detects Vite; no extra configuration needed
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`

---

### GitHub Pages

1. Run `npm run build`
2. Install the deployment helper: `npm install -D gh-pages`
3. Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`

**Important:** If the site is not at the root of a domain (e.g., `username.github.io/repo-name`), set the `base` in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/repo-name/',
  plugins: [react(), tailwindcss()],
})
```

---

## Base Path / Routing Considerations

- The portfolio uses hash-based anchor scrolling (e.g., `#about`, `#projects`), not a client-side router.
- No `404.html` redirect tricks are needed.
- If deployed to a sub-path (e.g., GitHub Pages), update `vite.config.ts` `base` as shown above.

---

## Custom Domain

**Netlify:**
1. Go to Site settings → Domain management → Add custom domain
2. Follow DNS configuration instructions

**Vercel:**
1. Go to Project → Settings → Domains → Add domain
2. Follow DNS configuration instructions

Recommended domain format: `ashwinibaliga.dev` or `ashwini.dev`

---

## Post-Deployment Checks

After deploying, verify:

- [ ] Site loads at the correct URL
- [ ] Dark theme is default; toggle switches to light
- [ ] All navigation links scroll to correct sections
- [ ] GitHub and LinkedIn links open correctly in new tabs
- [ ] Email link triggers the mail client
- [ ] Contact form opens email client on valid submit
- [ ] No 404 errors for assets (check browser DevTools Network tab)
- [ ] Favicon displays correctly in browser tab

---

## Resume Activation (Post-Deployment)

When Ashwini provides her resume PDF:

1. Place the file at `public/assets/Ashwini_Baliga_Resume.pdf`
2. In `src/data/portfolio.ts`, set `resume.available` to `true`
3. Rebuild and redeploy

---

## Contact Form — No Backend Needed

The contact form uses a `mailto:` action and does not require a backend service. If a proper form backend is desired in the future, options include:

- **Netlify Forms** — add `netlify` attribute to the `<form>` element
- **Formspree** — set `action` to a Formspree endpoint
- **EmailJS** — use the EmailJS SDK (requires storing a public key, not a secret)

No deployment configuration changes are needed for any of these services, but code changes in `ContactSection.tsx` would be required.

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Blank page after deploy | Check `base` in `vite.config.ts` matches the deployment sub-path |
| CSS not loading | Confirm `dist/assets/` was uploaded; check that asset hashes match `index.html` references |
| Theme flash on load | Verify the inline `<script>` in `index.html` was not stripped by the host |
| `tsc --noEmit` fails | Run `npm install` to ensure all `@types/*` packages are present |
