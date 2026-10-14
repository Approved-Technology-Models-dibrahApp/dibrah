# dibrah / دِبــرة — Landing Page

Official bilingual (English / Arabic) marketing site for **dibrah**, a product of **Approved Technology Models LLC** (شركة النماذج التقنية المعتمدة).

The site presents the dibrah merchant and customer apps and collects early-access interest through a pre-order form. It is a static single-page React app with no backend: submissions go directly from the browser to a Google Form.

**Main features**

- One landing page made of seven sections (Hero, Experience, Why dibrah, Dual Apps, Capabilities, Trusted Network, Pre-order).
- `/terms` and `/privacy` legal pages rendered from Markdown files.
- English and Arabic, with full right-to-left layout for Arabic.
- Light and dark themes.
- Pre-order form with client-side validation, submitted to Google Forms.

**Status:** live on GitHub Pages at `/dibrah/`, deployed automatically from the `main` branch (see [Deployment](#deployment)).

## Technology stack

Versions are the ones resolved in `package-lock.json`.

| Area | Technology |
| --- | --- |
| UI library | React 19.3 |
| Language | TypeScript 6.0 |
| Build tool / dev server | Vite 8.3 with `@vitejs/plugin-react` 6.1 |
| Styling | Tailwind CSS 4.3 via `@tailwindcss/vite`, plus a small amount of plain CSS |
| Linting | Oxlint 1.87 |
| Fonts | Google Fonts: Inter, Plus Jakarta Sans, Noto Sans Arabic (loaded in `index.html`) |
| Icons | Google Material Symbols Outlined (icon font loaded in `index.html`) |
| Routing | Small custom router in `src/App.tsx` using the History API (no router library) |
| Forms | Plain React state and custom validation (no form library) |
| Form backend | Google Forms (`formResponse` endpoint) |

There are no runtime dependencies besides `react` and `react-dom`.

## Project structure

```
.
├── index.html                 HTML shell: meta tags, fonts, icon font, pre-render theme/lang script
├── vite.config.ts             Base path (/dibrah/ for build and preview), dev server host/port
├── package.json               Scripts and dependencies
├── .oxlintrc.json             Lint rules
├── tsconfig*.json             TypeScript config (app code and vite.config.ts)
├── .github/workflows/
│   └── deploy.yml             GitHub Pages build and deploy on push to main
├── public/                    Copied as-is into the build
│   ├── favicon.jpg            Favicon and Open Graph image
│   ├── 404.html               GitHub Pages fallback that redirects deep links back into the app
│   └── .nojekyll              Stops GitHub Pages from running Jekyll
└── src/
    ├── main.tsx               Entry point: mounts <App /> and imports index.css
    ├── App.tsx                Router, landing page composition, document titles
    ├── context.tsx            AppProvider + useApp(): language, theme, active copy
    ├── index.css              Tailwind import, design tokens (@theme), global and legal-page styles
    ├── i18n/content.ts        All visible English and Arabic text, company constants
    ├── legal/                 Terms and privacy Markdown (terms.en.md, terms.ar.md, ...)
    ├── assets/                Images imported by components (logo, lifestyle photo)
    ├── lib/
    │   ├── paths.ts           Base-path helpers (withBase, appPath, isHomePath)
    │   ├── scroll.ts          jumpToTop() used when entering a page
    │   ├── countries.ts       Country list, locale-based country detection, phone validation
    │   └── googleForm.ts      Google Form endpoint, entry IDs, and submit logic
    └── components/            One file per section or shared piece (Header, Footer, Hero, PreOrder, LegalPage, Icon, ...)
```

## Prerequisites

- **Node.js** 22 or newer (CI uses Node 22).
- **npm** (the repository uses `package-lock.json`, lockfile version 3).

No other tools, accounts, or services are needed to run the site locally.

## Installation and local development

```bash
npm ci          # install exact versions from package-lock.json (or: npm install)
npm run dev     # start the dev server
```

The dev server listens on `http://127.0.0.1:5173/` (set in `vite.config.ts`). If that port is busy, Vite picks the next free one and prints it. In development the app is served from `/`, not `/dibrah/`.

## Available scripts

| Script | Command | What it does |
| --- | --- | --- |
| `npm run dev` | `vite` | Dev server with hot reload at `http://127.0.0.1:5173/` |
| `npm run build` | `tsc -b && vite build` | Type-checks the project, then writes the production build to `dist/` with base path `/dibrah/` |
| `npm run preview` | `vite preview` | Serves the built `dist/` at `http://127.0.0.1:4173/dibrah/` to check the production build |
| `npm run lint` | `oxlint` | Lints the source with the rules in `.oxlintrc.json` |

There is no automated test suite.

## Architecture and application flow

```mermaid
flowchart TD
  html[index.html] -->|applies saved theme/lang before render| main[src/main.tsx]
  main --> app[App.tsx]
  app --> provider[AppProvider in context.tsx]
  provider --> router[Router]
  router -->|"/"| landing[LandingPage: Header, 7 sections, Footer]
  router -->|"/terms" or "/privacy"| legal[LegalPage: Header, Markdown, Footer]
  landing --> preorder[PreOrder form]
  preorder --> gform[lib/googleForm.ts]
  gform -->|POST| google[(Google Forms)]
```

- **Startup.** An inline script in `index.html` reads `localStorage` (`dibrah-theme`, `dibrah-lang`) and sets the `dark` class, `lang`, and `dir` on `<html>` before React loads, to avoid a flash of the wrong theme or direction. It also restores the URL saved by `public/404.html` (see Deployment).
- **State.** `AppProvider` (`src/context.tsx`) holds the language and theme, persists them to `localStorage`, keeps `<html lang/dir>` and the `dark` class in sync, and exposes `t` (the active copy from `i18n/content.ts`) through `useApp()`. Every component reads its text from `t`.
- **Routing.** `App.tsx` listens for clicks on same-origin links and for `popstate`, updates the path with `history.pushState`, and renders `LandingPage` or `LegalPage`. Paths are normalized with `appPath()` so the `/dibrah/` base is handled automatically. The router also sets `document.title` per page and language.
- **Navigation.** The header links to in-page section IDs (`#why-dibrah`, `#mobile-apps`, `#we-offer`, `#trusted-partners`, `#pre-order`). On legal pages the same links become `/dibrah/#section`. The header highlights the section currently in view while scrolling.
- **Legal pages.** `LegalPage.tsx` imports the Markdown files with `?raw` and renders a small subset (headings, paragraphs, bullet and numbered lists, `**bold**`). The first `#` heading is skipped because the page shows its own title.
- **Pre-order form.** `PreOrder.tsx` validates name (2+ characters), email, phone (international format, `+` then 8–15 digits, capped while typing), gender, and details (10+ characters). On success it calls `submitGoogleForm()`, which posts to Google Forms with `fetch` in `no-cors` mode and falls back to a hidden iframe form if `fetch` throws. Because of `no-cors`, the browser cannot read Google's response, so a successful request is treated as submitted.

## Assets and styling

- **Design tokens** live in the `@theme` block of `src/index.css` (brand salmon scale `salmon-50` … `salmon-950`, `brand-yellow`, dark-mode surfaces `dark-bg` / `dark-card` / `dark-card-soft` / `dark-border`, and font families such as `font-headline-lg`, `font-label-md`). Tailwind turns these into utilities like `bg-salmon-500` or `dark:bg-dark-card`.
- **Component styling** is done with Tailwind classes directly in the JSX. Plain CSS in `index.css` is limited to global base rules, the Material Symbols class, section `scroll-margin`, the country `<select>` chevron (mirrored for RTL), the `.page-shell` width container, and `.legal-doc` typography.
- **Dark mode** uses a class strategy: `@custom-variant dark` matches `.dark` on `<html>`.
- **RTL** relies on `dir="rtl"` on `<html>`, logical Tailwind utilities (`ps-*`, `pe-*`, `text-start`, `start-*`), and `rtl:rotate-180` for directional icons. Arabic text uses Noto Sans Arabic.
- **Images** imported by components are in `src/assets/` (Vite fingerprints them). Files that must keep a fixed URL (favicon, `404.html`) are in `public/`.
- **Icons** are Material Symbols ligatures rendered by `src/components/Icon.tsx`; pass the icon name, for example `<Icon name="verified" />`.

## Environment configuration

The app reads no environment variables and needs no `.env` file. The only build-time value is Vite's built-in `import.meta.env.BASE_URL`, which comes from `base` in `vite.config.ts`.

The Google Form endpoint and field IDs are public constants in `src/lib/googleForm.ts`. If the Google Form is recreated, update `GOOGLE_FORM_ACTION` and `GOOGLE_FORM_ENTRIES`. The option strings in `GOOGLE_FORM_OPTIONS` (for example `ذكر / Male`, `تاجر / Merchant`) must match the Google Form choices exactly.

## Quality checks and production build

```bash
npm run lint      # Oxlint
npm run build     # TypeScript type-check (tsc -b) + production build into dist/
npm run preview   # serve dist/ at http://127.0.0.1:4173/dibrah/
```

A successful build ends with `✓ built in …` and writes `dist/index.html` plus fingerprinted files in `dist/assets/`. Vite currently warns that the JavaScript chunk is slightly over 500 kB. This warning is expected: about 200 kB of it is the legal Markdown, which is bundled into the app. It does not fail the build.

## Code maintenance guidelines

- **Text:** change copy only in `src/i18n/content.ts`, and keep `copy.en` and `copy.ar` keys in sync (the `Copy` type is derived from them). Never mix languages in one string.
- **Components:** one exported function component per file in `src/components/`, named after the file. Components get text from `useApp().t` instead of hard-coding it.
- **Styling:** use Tailwind utilities and the existing tokens. Add plain CSS to `index.css` only for things utilities cannot express. Use logical properties so RTL keeps working.
- **Links:** use `withBase()` from `src/lib/paths.ts` for internal page links so they work under `/dibrah/`. Plain `#section` links are fine within the landing page.
- **Assets:** import images from `src/assets/`. Use `public/` only when a file needs a stable URL.
- **Dependencies:** the runtime footprint is React only. Prefer built-in browser APIs over adding libraries.
- Run `npm run lint` and `npm run build` before committing, and check both languages and both themes in the browser.

## Deployment

Deployment is defined in `.github/workflows/deploy.yml`:

1. On every push to `main`, GitHub Actions runs `npm ci` and `npm run build` on Node 22.
2. `dist/` is uploaded and published to GitHub Pages.

Because the site is a GitHub Pages project site, it is served from `/dibrah/` (`base` in `vite.config.ts`). GitHub Pages has no SPA fallback, so `public/404.html` stores the requested path in `sessionStorage` and redirects to `/dibrah/`. The inline script in `index.html` then restores the original URL, which lets `/dibrah/terms` and `/dibrah/privacy` survive a hard refresh. If the repository name or hosting path changes, update `base` in `vite.config.ts` and the redirect target in `public/404.html` together.

## Troubleshooting

- **Blank page or 404s for `/dibrah/assets/...` on a custom server:** the production build expects to be served from `/dibrah/`. Serve it there, or change `base` in `vite.config.ts`.
- **Port 5173 already in use:** Vite moves to the next free port and prints the URL. Stop old dev servers if you want 5173 back.
- **`npm ci` fails:** make sure you are on Node 22 or newer and that `package-lock.json` is unchanged. Delete `node_modules` and run `npm ci` again.
- **Type errors in `npm run build`:** `tsc -b` runs before Vite, and `noUnusedLocals` / `noUnusedParameters` are enabled, so remove unused imports and variables.
- **Icons appear as words (for example "verified"):** the Material Symbols font failed to load from Google Fonts. Check your network connection.
- **Theme or language seems stuck:** both are saved in `localStorage` (`dibrah-theme`, `dibrah-lang`). Clear them to reset.
- **Form submissions not appearing in Google Forms:** confirm the form still accepts responses and that the entry IDs and option strings in `src/lib/googleForm.ts` match the form.
