# Trawise.Landing

React 19 + Vite + Tailwind CSS v4. The marketing site at `trawise.org`, browser
only. App root is `src/`, code is under `src/src/`. **It is live and indexed**,
so a copy change is public immediately — nothing else in the product is.

## Instructions

- Branches: Branch names must use one of these prefixes:
  - `feature/...` — new features or functionality
  - `bugfix/...` — bug fixes
  - `chore/...` — maintenance, tooling, refactoring, or other non-feature work
- Commits: Use a single-line commit message. No body or trailer. Never push commits.
- Comments: Avoid comments unless they are absolutely necessary. When a comment is necessary, keep it short and focused on why, not what the code is doing.

## Verify

```bash
cd src && npm run typecheck && npm run build
```

No lint step and no tests, by design. `noUnusedLocals` makes an unused import a
build failure — that is what keeps dead code out.

## Reference

- React 19 <https://react.dev/reference/react> · Vite <https://vite.dev/config/>
- Tailwind v4 theme <https://tailwindcss.com/docs/theme>
- React Router v7, library mode <https://reactrouter.com/start/library/routing>
  (declarative `<BrowserRouter>`, so no loaders or `<ScrollRestoration>`)
- react-i18next <https://react.i18next.com/>
- Consent Mode v2 <https://developers.google.com/tag-platform/security/guides/consent>
- SPA fallback for `404.html` <https://github.com/rafgraph/spa-github-pages>

Commits: one line, no body, no trailer, never push.
