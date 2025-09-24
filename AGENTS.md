# Repository Guidelines

## Project Structure & Module Organization
Source lives under `src/app`, following the Next.js App Router conventions (`layout.tsx` for shared chrome, `page.tsx` for route content, `globals.css` for project-wide styles). Place reusable UI in co-located folders with an `index.tsx` entry, and keep route-specific assets alongside the route. Static files (logos, favicons, mock data) belong in `public/`, which Next serves at the root path. Configuration files (`next.config.ts`, `eslint.config.mjs`, `tsconfig.json`) sit at the repository root—update them in tandem with structural changes.

## Build, Test, and Development Commands
Use Bun for scripting to stay aligned with `bun.lock`:
- `bun install` — install dependencies.
- `bun run dev` — launch the Turbopack dev server on http://localhost:3000.
- `bun run build` — produce an optimized production bundle.
- `bun run start` — serve the production build locally (after `bun run build`).
- `bun run lint` — run ESLint with the Next.js presets; fix issues before opening a PR.

If Bun is unavailable, use `npm install` and `npm run dev` to stay productive, but ensure the Bun lockfile stays the source of truth when you open a PR.

## InstantDB Integration
- Env var: set `NEXT_PUBLIC_INSTANT_APP_ID` in `.env.local` (not committed) to your app id. App id is public; never commit admin tokens.
- SDK init: `src/lib/instant.ts` exports `db = init({ appId })`. This file is not a client component; only files that call `db.useQuery` need `"use client"`.
- Query pattern (used on the homepage):
  - Namespaces: `homepage` (fields: `title`, `accent`, `subtitle`, `ctaPrimary`, `ctaSecondary`) and `features` (fields: `title`, `description`).
  - Example: `const { data } = db.useQuery({ homepage: {}, features: {} });`
- Schema & permissions (recommended):
  - `npx instant-cli@latest login`
  - `npx instant-cli@latest init` (creates `instant.schema.ts` and `instant.perms.ts`)
  - `npx instant-cli@latest push schema` and `npx instant-cli@latest push perms`
- Tips:
  - Keep `src/lib/instant.ts` as the single init. Co-locate queries with components. Use fallbacks in UI for missing data.
  - The Instant Devtool appears on localhost; confirm the app is connected and queries resolve.
  - Seeding: visit `/admin/seed` (dev-only convenience) to write sample homepage, features, news, and events. Requires temporary write perms for anonymous users or be logged in with write access.

## Coding Style & Naming Conventions
Write TypeScript-first functional components with two-space indentation (match existing files). Components and hooks use PascalCase (`SchoolHero.tsx`) and camelCase (`useFetchAdmissions`). Co-locate Tailwind-friendly styles in JSX; reserve `globals.css` for resets and theme tokens. Run `bun run lint` early; the Flat ESLint config extends `next/core-web-vitals` and `next/typescript`, so heed accessibility and typing warnings.

## Testing Guidelines
Automated tests are not yet configured—add them under `src/__tests__/` or co-locate with the component (`Component.test.tsx`) when introducing a framework. Until a runner is wired in, document manual QA steps in the PR description and include reproduction instructions. Prioritize integration coverage for key pages (home, admissions, research sections) and screenshot diffs when touching layout or Tailwind tokens.

## Commit & Pull Request Guidelines
History currently contains only the initial scaffold; adopt Conventional Commit formatting going forward (`feat: add admissions hero copy`). Keep commit scopes small and mention affected routes or modules. Pull requests should link the tracking issue, summarize behavioral changes, list testing evidence (commands + outcomes), and attach before/after screenshots for UI tweaks.
