# Corexa Docs Site

This directory contains the React-based GitHub Pages website for Corexa.

## Purpose

The site provides a polished public-facing documentation experience that complements the source Markdown docs in the rest of the repository.

It is intended to help:

- new contributors understand the project quickly
- maintainers present architecture and roadmap direction clearly
- enterprise evaluators review the platform shape and operating model

## Stack

- React
- TypeScript
- Vite
- GitHub Pages deployment via GitHub Actions

## Local Commands

Run the docs site locally:

```bash
pnpm docs:dev
```

Build the static site:

```bash
pnpm docs:build
```

Run package-level validation:

```bash
pnpm --filter @corexa/docs-site lint
pnpm --filter @corexa/docs-site typecheck
pnpm --filter @corexa/docs-site build
```

## Deployment

The site is deployed through [.github/workflows/docs-site.yml](../../.github/workflows/docs-site.yml).

Behavior:

- pull requests build the site for validation
- pushes to `main` build and deploy to GitHub Pages

## Customization

The site can target a different repository URL through `VITE_COREXA_REPO_URL`.

Example:

```bash
VITE_COREXA_REPO_URL=https://github.com/your-org/corexa pnpm docs:dev
```
