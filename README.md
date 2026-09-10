# Trawise Landing [![Deploy static content to Pages](https://github.com/Trawise/Trawise.Landing/actions/workflows/deploy-to-pages.yaml/badge.svg)](https://github.com/Trawise/Trawise.Landing/actions/workflows/deploy-to-pages.yaml)

The public marketing site at [trawise.org](https://trawise.org) — what Trawise
is, who it is for, and the legal pages the apps link to. React 19 + Vite +
Tailwind CSS v4, in English, Spanish, Italian and Swedish.

## Getting started

```bash
cd src
npm ci
npm run dev
```

## Verifying a change

```bash
npm run typecheck
npm run build
```

CI builds and deploys on every push to `main`. It does not run on pull
requests, so run both yourself before merging.

## Deploy

GitHub Pages, on every push to `main`. Only `src/dist/` is uploaded; the custom
domain comes from the repository's Pages settings, not the root `CNAME`.
`public/404.html` is the SPA fallback, so a deep link resolves rather than
404ing at the CDN.
