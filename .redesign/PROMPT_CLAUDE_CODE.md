# Prompt for Claude Code — Portfolio remaster (V2)

Copy everything below the line into Claude Code, opened in the `Portfolio` folder.

---

Rebuild my portfolio (`index.html` + `styles.css`) so the live site matches the approved design **exactly**: same structure, same copy, same styles, same behavior. Do not redesign, "improve", shorten or rewrite anything.

## Source of truth

The approved design is in `.redesign/reference/`:

- `approved-design.dc.html`: the approved page (markup, French copy, icons, interactive logic). It was exported from a design tool and uses that tool's template syntax: `<x-dc>`, `<helmet>`, `{{…}}` bindings, `<sc-if>`, `<sc-for>`, `<script src="./support.js">` and a `class Component extends DCLogic` script. Image paths already point to the real files in this repo.
- `approved-styles.css`: the approved stylesheet.

Read both files completely before writing any code. Where this prompt and the reference disagree, the reference wins, except for the explicit conversions listed below.

## What to build

A plain static site: HTML + CSS + vanilla JS. No framework, no bundler, no build step. It is deployed as-is on Firebase Hosting (`public: "."`).

1. **`styles.css`**: replace its content with `approved-styles.css`, unchanged: same class names, CSS variables, values, gradients and `@container` queries. Only add what a real page needs and the design tool provided implicitly:
   - `html{scroll-behavior:smooth}` and `body{margin:0}`
   - `.pf{min-height:100vh}`
   - `[hidden]{display:none !important}`
   - visible `:focus-visible` outlines in the accent colour
   - a `prefers-reduced-motion` block that disables transitions and smooth scrolling
   - the certificate modal styles (see 6), using the existing variables (`--surface-solid`, `--line`, `--ink`, `--accent`…)
   - scroll offset for anchors under the sticky nav (`scroll-margin-top` on sections)

2. **`index.html`**: rebuild it from `approved-design.dc.html`.
   - Copy the French text **verbatim**, including typographic apostrophes (’), `−85 %`, `→`, `×` and em dashes. Keep every section in the same order: nav → hero (avatar + name, h1, lead, CTAs, socials, "Impact mesuré" card) → clients strip → 01 Expérience → 02 Projets → 03 Compétences → 04 Parcours → 05 Contact band/footer.
   - Keep the inline SVG icons exactly as they are. Remove Font Awesome.
   - Root wrapper: `<body>` contains `<div class="pf theme-dark" id="top" style="--accent:#3B82F6">…</div>` wrapping everything, as in the reference.
   - `<head>`:
     - `<html lang="fr">` and the viewport meta
     - `<title>Mohamed Amine Mrabet — Data & AI Engineer</title>`
     - a French meta description built from the hero lead, and `<meta name="theme-color" content="#0F172A">`
     - preconnect to fonts.googleapis.com and fonts.gstatic.com, then exactly this font link: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap`
     - `styles.css`
   - Remove the old site entirely: AOS (CSS, JS and every `data-aos`), the typing text, blob shapes, all old inline styles, and old sections that aren't in the reference.

3. **Template conversion** (put the JS in a new `script.js`, loaded with `defer`):
   - Drop `<x-dc>`, `<helmet>`, `support.js` and the `data-dc-script` block. Port the logic of `renderVals()` / `allProjects()` to vanilla JS.
   - **Experience accordion** (rows `x0`–`x3`):
     - Only one row is open at a time. Row 0 (IT-PEAC, Janv. 2026) is open on load. Clicking the open row closes it.
     - The content inside each `<sc-if value="{{xN.open}}">` becomes a container with the `hidden` attribute when closed.
     - The button swaps the "−" and "+" SVGs and updates `aria-expanded`. Add `aria-controls` pointing to the panel's id.
   - **Project filters and cards:**
     - Render the 10 projects from `allProjects()` as **static HTML** (good for SEO), in the same order and with exactly the same text, using the `.pcard` markup from the `<sc-for>`. Add `data-filter="vision|mlops|ml|gen"` and `data-extra="true|false"` to each card.
     - Only the PFE card shows the trophy badge "Meilleur projet de l’année".
     - Filter buttons, in order: Tous (10), Data & MLOps (1), Machine Learning (4), Vision (4), IA générative (1). The counts come from the data. The active button gets `.on` and `aria-pressed="true"`; "Tous" is active on load.
     - Cards with `extra: true` stay hidden until the "more" button is clicked. Its label follows the same rule as the reference: `'Afficher ' + hidden + ' projet' + (hidden > 1 ? 's' : '') + ' de plus'` when collapsed, `Afficher moins` when expanded. Hide the button when the current filter has no hidden extras and the list isn't expanded. Filtering and expanding work together exactly like `renderVals()`.
   - **Theme toggle:**
     - Swaps `theme-dark` ↔ `theme-light` on the root div. Dark is the default.
     - The moon icon shows in light mode and the sun icon in dark mode, as in the reference.
     - Save the choice in `localStorage` (`pf-theme`) and apply it before first paint (a tiny inline script in `<head>` that sets the class early) so there's no flash.
   - **FR/EN switch:**
     - FR is the reference copy. Implement EN with a translations dictionary in `script.js` and `data-i18n` keys on every translatable text node, including project data, filter labels, the more button and aria-labels.
     - Write faithful English translations of the exact French copy. Don't add, remove or embellish content.
     - Update `<html lang>`, the active `.on` state on the switch, and save the choice in `localStorage` (`pf-lang`).
   - **Mobile menu button** (`.nav-menu`, visible under 980px): open a simple dropdown or panel with the same 5 nav links. Close it on link click or Esc, and keep `aria-expanded` in sync. Style it with the existing variables so it fits the nav.

4. **Images:** paths in the reference are already correct (`IMG_7163.jpeg`, `logo/…`, `Badges/…`). Keep the `alt` texts, and add `width`/`height` attributes and `loading="lazy"` on everything below the hero. Don't rename, move or recompress any asset.

5. **Links:**
   - LinkedIn, GitHub, mailto and tel: as in the reference.
   - Project cards point to `https://github.com/AmineMrabet12` (as in the reference). External links get `target="_blank" rel="noopener"`.
   - **CV button**: point it to `CV_Mohamed_Amine_Mrabet.pdf` at the repo root with the `download` attribute. If that file doesn't exist, keep the link, add an HTML `<!-- TODO -->` comment, and tell me at the end.
   - **"Voir la démo"** (featured BI Agent project): link it to `https://bi-agent.it-peac.com` with `target="_blank" rel="noopener"`.

6. **Certificates:** every "Voir" button opens the matching PDF in a modal (reuse the idea of the current `openCertPreview`/`closeCertPreview`, restyled with the new design):
   - AI Model Deployment on AWS → `certifs/CC-23F2A2B30E.pdf`
   - Power BI → `certifs/CC-E099A50CAC.pdf`
   - Deep Learning with TensorFlow & Keras → `certifs/Udemy Deep Learning.pdf` (URL-encode the spaces)
   - Microsoft Certified Trainer → `certifs/MCT.pdf`
   - Databases & SQL for Data Science with Python → `certifs/IBM-Python-SQL.pdf`

   Make the "Voir" links real `<button>`s. The modal:
   - has `role="dialog"`, `aria-modal="true"` and a label
   - has a 44px close button
   - closes on overlay click and on Esc
   - moves focus into the modal and back to the triggering button on close
   - locks body scroll while open
   - clears the iframe `src` on close

   Certificates without a PDF have no button, as in the reference.

7. **Don't touch:** `404.html`, `firebase.json`, `.firebaserc`, `.github/`, `certifs/`, `Badges/`, `logo/`, `IMG_7163.jpeg`, `.redesign/`. The `.redesign/` folder is excluded from deploys by the `**/.*` ignore rule; leave it in place.

## Verification (required before you say you're done)

1. Serve locally (`python3 -m http.server 8080`). With Playwright, screenshot the page at 1440px, 980px and 390px wide, in both dark and light themes.
2. Check that:
   - the browser console has no errors
   - no image, font or PDF request returns 404
   - there's no horizontal scroll at 390px
   - the accordion, filters plus "Afficher plus", theme toggle (and its persistence), FR/EN switch (and its persistence), mobile menu and certificate modal all work, including with the keyboard (Tab, Enter, Esc)
3. Compare the 1440px dark screenshot against the reference section by section (spacing, font sizes, colours, the round 152px avatar beside the name, the impact card on the right of the hero) and fix any difference.
4. Diff the visible French text of the new `index.html` against `approved-design.dc.html` and confirm it's identical, apart from the project texts that now live as static HTML.

## Git

- Create a branch `redesign-v2` and commit there with a clear message.
- Don't push, don't merge into the main branch, and don't run `firebase deploy`.
- At the end, give me a short report: files changed, the TODOs (CV file), and the screenshots' paths.
