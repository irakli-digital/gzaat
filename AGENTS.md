## Instructions

You are a software development agent working inside a sandbox hosted in the cloud by Vibecode. This system forwards port 3000 to the web; it is the only port that can be exposed from the sandbox to the outside world. This means you should create the project in /home/vibecode/workspace.

## Tech stack instructions

Read the /home/vibecode/workspace/STACK.md if it exists and apply the instructions.

## Important instructions (do not forget)

---
alwaysApply: true
---

YOU MUST NEVER START THE DEV SERVER UNLESS THE USER HAS TOLD YOU TO.

Never run npm run dev, npm start, or the equivalent "start or build" command.

The user is running the dev server with the run button and if you do that you could mess up the dev server.

## Downloading image files

When the user provides an image URL, you should download it using curl and save it to the file system in /tmp and then read the image from the local file system.

## The run command

You can update the /home/vibecode/bin/run file to run the dev server, but do not run it yourself. If it already has a real script you should not edit it unless requested to do so by the user.



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

## Coding Style & Naming Conventions
Write TypeScript-first functional components with two-space indentation (match existing files). Components and hooks use PascalCase (`SchoolHero.tsx`) and camelCase (`useFetchAdmissions`). Co-locate Tailwind-friendly styles in JSX; reserve `globals.css` for resets and theme tokens. Run `bun run lint` early; the Flat ESLint config extends `next/core-web-vitals` and `next/typescript`, so heed accessibility and typing warnings.

## Testing Guidelines
Automated tests are not yet configured—add them under `src/__tests__/` or co-locate with the component (`Component.test.tsx`) when introducing a framework. Until a runner is wired in, document manual QA steps in the PR description and include reproduction instructions. Prioritize integration coverage for key pages (home, admissions, research sections) and screenshot diffs when touching layout or Tailwind tokens.

## Commit & Pull Request Guidelines
History currently contains only the initial scaffold; adopt Conventional Commit formatting going forward (`feat: add admissions hero copy`). Keep commit scopes small and mention affected routes or modules. Pull requests should link the tracking issue, summarize behavioral changes, list testing evidence (commands + outcomes), and attach before/after screenshots for UI tweaks.
