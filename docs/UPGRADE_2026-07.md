# Dependency and Build Upgrade

## Current stack

- React and React DOM: 19.2.7
- Vite: 8.1.5 with `@vitejs/plugin-react` 6.0.3
- React Router: 7.18.1
- Redux Toolkit / React Redux: 2.12.0 / 9.3.0
- MUI: 9.2.0, with MUI X 9.10.0
- Tailwind CSS: 4.3.3 through `@tailwindcss/postcss`
- ESLint: 10.7.0 with flat configuration in `eslint.config.mjs`

All installable direct dependencies were updated to their latest registry releases on 2026-07-21. `npm-check-updates` reports `apexcharts@6.5.0`, but npm currently returns `ETARGET` for that tarball; the manifest intentionally retains the latest installable version, 6.4.0.

## Workflow

Use Node.js 20.19 or newer and npm 10 or newer.

```bash
npm install
npm start
npm run build
npm run lint
npm test
```

Vite starts on its configured default port (normally `http://localhost:5173`) and writes production output to `dist/`. `npm test` currently reports that no test files are configured.

## Migration details

- CRA, `react-app-rewired`, and the webpack alias override were replaced with Vite. Source aliases now live in `vite.config.js`.
- The project stores JSX in `.js` files. `vite.config.js` contains a pre-transform that supports this legacy convention without renaming source files.
- React Redux now imports `Provider` from its public API.
- MUI's removed `Hidden` component is replaced by `src/@fuse/core/Hidden/Hidden.js`, which covers the existing `lgUp` and `lgDown` usages.
- Tailwind's v3 directives and incompatible custom configuration were migrated for Tailwind 4. The obsolete, unused `icon-size` plugin and `print` breakpoint were removed.
- Browser-exposed variables use Vite's `VITE_` prefix. The dormant Microsoft setting is now `VITE_MICROSOFT_CLIENT_ID`.

## Notes

- `@editorjs/embed@2.8.0` declares Node.js 24 or later. It is not used by the currently reachable application, and npm's non-strict engine setting permits installation under the verified Node 20 environment.
- The production JavaScript bundle is about 1.25 MB before gzip (about 409 kB gzip). Vite warns that it exceeds its 500 kB chunk guideline; introduce route/component lazy loading before expanding the app further.
