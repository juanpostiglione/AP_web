# A.P Asociados Website

This site is being migrated from static HTML to Astro. The home, About, and Contact pages use the shared Astro layout; existing product pages remain available at their original `.html` URLs while they are migrated incrementally.

## Commands

```sh
npm run dev
npm run build
npm run preview
```

Use `npm run preview` after a build to review the full deployable site, including the preserved legacy product URLs. The generated deployment output is in `dist/`.

## Structure

- `src/components/`: shared header and footer
- `src/layouts/`: shared Astro document layout
- `src/pages/`: migrated Astro pages and the legacy route generator
- `public/`: images, fonts, styles, vendor scripts, and browser JavaScript