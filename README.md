# A.P Asociados website

Next.js App Router project intended for Vercel. The former Astro project and
standalone product HTML pages have been converted into Next.js routes.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Before deploying, run `npm run typecheck` and
`npm run build`. Deploy the repository to Vercel as a Next.js project; no
Vercel-specific settings are required.

## Where to edit

| Goal | File or folder |
| --- | --- |
| Home headline and photo | `components/home/Hero.tsx`; photo in `public/images/` |
| Three representation cards on home | `data/representations/index.ts` |
| Nosotros story copy/photos | `data/about.ts` |
| Projects copy, photo order and descriptions | `data/projects.ts` (photos in `public/images/`) |
| Service chapters, all brochure lists, sectors and capacity | `data/services.ts` (titles also used on Contacto) |
| Contact emails and EmailJS IDs | `data/contact.ts` |
| Contact form fields and submission | `components/contact/ContactForm.tsx` |
| Chesterton product pages | `data/representations/chesterton.ts` |
| Orange product pages | `data/representations/orange.ts` |
| WorldFluid product pages | `data/representations/worldfluid.ts` |
| Product page structure | `components/representations/` |
| Site navigation/footer | `components/site/Header.tsx`, `Footer.tsx` |
| Colors and sizing | `styles/06-palette.css`, `styles/07-current.css` |
| Projects and Services page styles | `styles/10-projects-services.css` |

## Project layout

```text
app/                     Next.js routes and root layout
  [slug]/page.tsx         3 brand and 17 product routes from the data files
  nosotros/page.tsx       About page
  proyectos/page.tsx      Project gallery, with large alternating photo panels
  servicios/page.tsx      Image-led service chapters and documented work
  contacto/page.tsx       Contact page
components/              Reusable JSX grouped by home, about, projects,
                         services, contact, representations, and site-wide behavior
data/                    Text, image paths, navigation, and product page data
styles/                  CSS in original cascade order plus new page rules
public/images/           All images referenced by Next.js pages
public/font/             Local DM Serif font files
```

`styles/01-base.css` through `07-current.css` preserve the original style
layering. Rules in later files take precedence over earlier rules with the same
specificity. `08-representations.css` handles the converted product blocks and
`09-interactions.css` handles the mobile menu and reduced-motion behavior.
`10-projects-services.css` contains the two page designs and the side entrance
animations. The photo gallery formerly shown under Nosotros is now on Proyectos;
edit its descriptions and order in `data/projects.ts`. Servicios alternates five
photographic chapters with two complete work lists under the original brochure
headings. Its final spread includes the other brochure's specialty list, sectors,
and capacity figures. Edit them in `data/services.ts`; the components are in
`components/services/`. Some original company photos appear on more than one
page. The fifth chapter highlights the petroleum sector with a documented job;
all five service titles also appear on Contacto.

The brand pages are `/chesterton`, `/orange-technologies`, and `/worldfluid`.
Each category links to a product route such as `/chesterton-arc` or
`/orange-nrx`. The old `.html` URLs redirect to their corresponding Next.js
routes in `next.config.ts`. Unknown product slugs return a 404.

To add a product page, add a page object to the relevant brand data file,
include its `slug` in a brand's `categories`, and put its images in
`public/images/`. Supported detail blocks are defined in
`data/representations/types.ts` and rendered by
`components/representations/DetailBlocks.tsx`. Inline HTML in paragraph/list
data is trusted repository content; do not populate those fields from user
input. The CSS-visible cards are revealed on every route visit by
`components/site/RevealOnScroll.tsx`.

## Contact form

The contact form loads the EmailJS browser SDK on `/contacto`. Its public key,
service ID, and template ID are in `data/contact.ts`. Test a submission after
deploying to confirm the EmailJS account allows the production domain.
