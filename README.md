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

## Languages and URLs

The URL is the only thing that decides the language — `/sv/terms` is Swedish,
`/terms` is English — so each translation has a URL a crawler can index.

Two rules follow, and both have been broken once. Internal links go through
`LocaleLink`: a bare `<Link>` drops the prefix, which resets the language and
overwrites the visitor's stored preference. And a first segment that is not a
locale is a 404, not the home page — `:lang` matches anything.

## Deploy

GitHub Pages, on every push to `main`. Only `src/dist/` is uploaded; the custom
domain comes from the repository's Pages settings, not the root `CNAME`.
`public/404.html` is the SPA fallback, so a deep link resolves rather than
404ing at the CDN.
