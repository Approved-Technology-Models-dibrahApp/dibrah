# Dibrah Landing Page — Technical Roadmap

Pushes to `main` are deployed to GitHub Pages by `.github/workflows/deploy.yml` (see `README.md`). Do not change DNS or publish the site to Squarespace / Google Workspace from this folder.

## What this project is

A bilingual (English / Arabic) marketing site for **dibrah / دِبــرة**, built as a single-page React app. Language and theme stay in the browser (`localStorage`). The early-access form submits in the background to the official Google Form.

## Languages used

| Layer | Language | Where |
| --- | --- | --- |
| Page structure | HTML | `index.html` |
| App logic | TypeScript + React | `src/` |
| Styling | CSS + Tailwind utility classes | `src/index.css` and `className` in components |
| Copy | English and Arabic strings | `src/i18n/content.ts` |

You do **not** need a backend language (no PHP, Python, or Node server) to edit the site.

## Frameworks and tools

| Tool | Version in this project | Role |
| --- | --- | --- |
| React | 19 | UI components |
| TypeScript | 6 | Typed JavaScript |
| Vite | 8 | Local dev server and production build |
| Tailwind CSS | 4 | Colors, spacing, layout utilities |
| Google Fonts | Plus Jakarta Sans, Inter, Noto Sans Arabic | Typography |
| Material Symbols | Outlined icons | Icons in buttons and cards |

Useful commands (run in the project folder):

```bash
npm install          # first time only
npm run dev          # local preview at http://127.0.0.1:5173
npm run build        # check that the project compiles
```

## File map — what to edit

```
Dibrah_Web/
├── index.html                 Browser title, favicon, default meta tags
├── vite.config.ts             Local server host/port (keep 127.0.0.1)
├── package.json               Scripts and dependencies
├── public/
│   └── favicon.jpg            Browser tab icon
└── src/
    ├── main.tsx               App start
    ├── App.tsx                Page sections in order
    ├── context.tsx            Language + dark/light theme
    ├── index.css              Brand colors, fonts, page width
    ├── assets/                Logo and lifestyle photo
    ├── i18n/content.ts        ALL visible text (EN + AR)
    ├── legal/                 Terms and privacy Markdown (EN + AR)
    ├── lib/googleForm.ts      Google Form field IDs and submit
    ├── lib/countries.ts       Country list and phone validation
    ├── lib/paths.ts           /dibrah/ base-path helpers
    ├── lib/scroll.ts          Scroll-to-top helper for page changes
    └── components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── Experience.tsx
        ├── WhyDibrah.tsx
        ├── DualApps.tsx
        ├── Capabilities.tsx
        ├── TrustedNetwork.tsx
        ├── PreOrder.tsx
        ├── LegalPage.tsx
        ├── Footer.tsx
        └── Icon.tsx
```

## Where to change common things

### 1. Text (headlines, buttons, form labels)

Edit `src/i18n/content.ts`.

- `copy.en` = English only
- `copy.ar` = Arabic only
- Change the matching key in **both** languages if the meaning should stay aligned

Company constants at the top of the same file:

- `CONTACT_EMAIL`
- `COMPANY_EN` / `COMPANY_AR`
- `COMPANY_ADDRESS`
- `COMMERCIAL_REGISTRY`

### 2. Colors

Edit the `@theme` block in `src/index.css`.

Current brand palette from the attached swatch:

| Token | Hex | Use |
| --- | --- | --- |
| Salmon (primary) | `#F27468` | Buttons, links, borders, glows |
| Yellow (accent) | `#F8C63B` | Headline accent, `--color-brand-yellow` |
| White | `#FFFFFF` | Cards and light background |

Useful tokens:

- `--color-salmon-500` / `--color-primary-container` = salmon
- `--color-brand-yellow` = yellow
- `--color-salmon-50` … `--color-salmon-950` = lighter/darker salmon

Component classes use names like `bg-salmon-500`, `text-salmon-600`, `border-salmon-400`. After changing a token in `src/index.css`, refresh the local page.

### 3. Section order

Edit `src/App.tsx`. Each section is one component. Reorder the JSX to move blocks up or down.

### 4. Images

- Logo: `src/assets/dibrah-logo.jpg`
- Lifestyle banner: `src/assets/lifestyle-retail.jpg`
- Favicon: `public/favicon.jpg`

Replace the file (same name) or update the `import` path in the component.

### 5. Early-access form

- Visible labels and placeholders: `src/i18n/content.ts` → `preorder`
- Layout: `src/components/PreOrder.tsx`
- Where data is sent: `src/lib/googleForm.ts`

Google Form option values (`ذكر / Male`, `تاجر / Merchant`, and so on) must stay exactly as the official form expects. The website can show English or Arabic labels; the hidden submit values stay bilingual so Google Forms still accepts them.

### 6. Language and theme behavior

`src/context.tsx` stores:

- `dibrah-lang` = `en` or `ar` (also sets `dir="rtl"` for Arabic)
- `dibrah-theme` = `light` or `dark`

The language switcher in the header only changes this setting. It does not mix both languages on the page.

## How a page request flows

1. `index.html` loads `src/main.tsx`
2. `AppProvider` in `src/context.tsx` picks language and theme
3. `App.tsx` renders Header → sections → Footer
4. Every component reads `t` from `useApp()` so it shows the active language
5. Pre-order submit posts to Google Forms in the background and stays on this page

## Safe editing checklist

1. Change text in `src/i18n/content.ts` first
2. Change colors only in `src/index.css` unless a specific button needs a one-off class
3. Keep English and Arabic strings separate
4. Run `npm run dev` and check both languages and both themes
5. Do not change Squarespace, DNS, or hosting settings from this folder
