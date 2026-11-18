# Bilingual Care Blog Template

An Astro starter for a fast French/Spanish editorial blog. It uses static MDX, accessibility-first components and safe preview defaults. It contains demonstration content only.

## Local use

Install Node.js 22+ and run `npm install`, then use `npm run dev`. Commit the generated lockfile before enabling CI. Before publishing, run `npm run check`, `npm run test`, `npm run check:boundaries`, `npm run build`, `node --experimental-strip-types scripts/audit-links.mts dist` and `npm run audit:performance`.

GitHub Actions runs the same checks with `npm ci` after the lockfile is present. The public template has no repository or deployment configured by default.

## Public and private projects

Keep this repository public and generic. Create a separate private production repository for real articles, media, domains, contacts, environment values and analytics. Configure this template as the private repository's `upstream` remote, then selectively bring in reviewed template commits; never push private production work back upstream.

## Safety

Preview builds are not indexable. Set `PUBLIC_DEPLOYMENT_MODE=production` and a verified `PUBLIC_SITE_URL` only in the private production deployment. See `docs/EDITING.md`, `docs/DEPLOYMENT.md`, `docs/MIGRATION.md` and `docs/ANALYTICS.md`.

## Private analytics

The optional private statistics dashboard and scheduled reports are documented in `docs/ANALYTICS.md`. They use aggregate metrics only. Do not configure analytics credentials, owner identities or report data in this public template.
