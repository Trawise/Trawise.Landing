# Trawise Landing

React 19 + Vite 8 + Tailwind CSS v4 marketing site — the public front door at
`trawise.org`. All source lives in `src/` (so the app root is `src/`, and the
code is under `src/src/`).

**Browser only, and marketing only.** This is not an app surface: it has no
authentication, no API calls and no user state beyond a language preference and
a cookie decision. The host dashboard (`../Trawise.Client.Host`) and the
traveller app (`../Trawise.Client.Traveller`) are separate codebases — share
wording and brand decisions with them, never components.

Deployed to GitHub Pages by `.github/workflows/deploy-to-pages.yaml` on every
push to `main`. The custom domain comes from the repo's Pages settings; the
root `CNAME` file is not part of the published artifact (only `src/dist/` is
uploaded).

## Docs — read before writing any code

- React 19: <https://react.dev/reference/react>
- Vite: <https://vite.dev/config/>
- Tailwind CSS v4 theme variables: <https://tailwindcss.com/docs/theme>
  (v4 is CSS-first — there is no `tailwind.config.js`; tokens live in `@theme`
  in `src/src/index.css`, and the old `theme()` function is deprecated in
  favour of plain `var(--color-*)`)
- React Router v7, library mode: <https://reactrouter.com/start/library/routing>
  (this app uses declarative `<BrowserRouter>`, so the data-router APIs —
  loaders, `<ScrollRestoration>` — are not available)
- react-i18next: <https://react.i18next.com/>
- i18next configuration: <https://www.i18next.com/overview/configuration-options>
- Google Consent Mode v2:
  <https://developers.google.com/tag-platform/security/guides/consent>
- SPA fallback trick used by `404.html`:
  <https://github.com/rafgraph/spa-github-pages>
- Structured data Google actually consumes:
  <https://developers.google.com/search/docs/appearance/structured-data/search-gallery>

## Verifying a change

There is no lint step and no test suite by design. Both commands must pass:

```bash
cd src
npm run typecheck
npm run build
```

TypeScript runs with `strict`, `noUnusedLocals` and `noUnusedParameters`, so an
unused import or variable is a build failure rather than a warning — that is what
keeps dead code out. ESLint was removed: it duplicated what the compiler already
catches, and its `typescript-eslint` peer range pinned TypeScript below the
version this project uses.
