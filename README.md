# Trawise Landing [![Deploy static content to Pages](https://github.com/Trawise/Trawise.Landing/actions/workflows/deploy-to-pages.yaml/badge.svg)](https://github.com/Trawise/Trawise.Landing/actions/workflows/deploy-to-pages.yaml)

The public marketing site at [trawise.org](https://trawise.org) — what Trawise
is, who it is for, and the legal pages the apps link to. React 19 + Vite +
Tailwind CSS v4. Browser only, and marketing only: no authentication, no API
calls, no user state beyond a language preference and a cookie decision.

## Getting started

```bash
cd src
npm ci
npm run dev
```

## Verifying a change

There is no lint step and no test suite by design. Both must pass:

```bash
cd src
npm run typecheck
npm run build
```

TypeScript runs with `strict`, `noUnusedLocals` and `noUnusedParameters`, so an
unused import is a build failure rather than a warning — that is what keeps
dead code out.

Run the shared UI audit too, from the directory holding all the repositories:

```bash
python Trawise.Docs/tools/ui-audit.py .
```

## Languages and URLs

The site ships in English, Spanish, Italian and Swedish. **The URL is the only
thing that decides the language** — `/sv/terms` is Swedish, `/terms` is
English — so each translation has a URL a crawler can index.

Two rules follow from that, and both have been broken once:

- Internal links go through `LocaleLink`, never a bare `<Link to="/terms">`. A
  bare link drops the prefix, which resets the language *and* overwrites the
  visitor's stored preference on the way out.
- A first path segment that is not one of the four locales is a 404, not the
  home page. `LocaleRoute` enforces it.

## Deployment

GitHub Pages, on every push to `main`, via
`.github/workflows/deploy-to-pages.yaml`. Only `src/dist/` is uploaded. The
custom domain comes from the repository's Pages settings — the root `CNAME`
file is not part of the published artifact.

`public/404.html` is the SPA fallback trick, so a deep link like
`/sv/privacy-policy` resolves rather than 404ing at the CDN.
