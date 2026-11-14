# AHSK static website recreation

An unofficial Astro reconstruction of the public AHSK reference site. This package is a layout and interaction demo. The published name, portraits, awards, office details, testimonials and editorial copy are represented by labeled placeholders or short independently written summaries. The monochrome imagery is generated placeholder artwork. Use firm copy, branding, photographs or third-party awards material only after obtaining the relevant permission.

## Run locally

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
npm run build
npm run verify
npm run preview
```

Open `http://localhost:4321/ahsk-static-website/` for the default development or preview server. The static output is written to `dist/`. Verification checks the build’s pages, internal navigation, asset paths, fragments, and the demo form’s lack of an external destination or named submission fields.

## Pages

- Home with a five-slide carousel, introduction, testimonial placeholders, and news.
- About Us.
- Lawyers listing and three profile pages.
- Practice Areas overview and both practice detail pages.
- News & Events and seven dated article pages.
- Contact and a custom 404 page.

The main listing and detail paths match the reference where applicable. The Practice Areas overview provides a working destination for the navigation label, which was a dropdown trigger on the reference. Home’s Load More links to the complete static news listing. The original newsletter, social destinations, awards marks, testimonials, article texts, map and contact submission are deferred. The form provides local browser validation only. There are no runtime integrations or tracking requests. Page metadata keeps the public demo out of search indexing where crawlers honor the directive.

## Update content and design

- Edit `src/content.ts` for navigation, partners, practice areas and news. Keep each route slug unique. New records get static detail pages automatically.
- Edit `src/pages/` for main page sections, and `src/components/` for shared UI.
- Put approved image files in `public/assets/` and use the `url()` helper for links and asset URLs so the Pages project prefix is retained.
- Change colors, typography, spacing and the responsive breakpoints in `src/styles/site.css`.
- Run the build and verifier before publishing. Add links or redirects before changing any existing slug.

## Publish on GitHub Pages

1. Create or open the public repository `QuintonPang/ahsk-static-website`.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Push the project, including `.github/workflows/deploy.yml`, to `main`. If the first push happened before Pages was enabled, select **Actions → Deploy Astro to GitHub Pages → Run workflow** using `main`.
4. Confirm the build and deploy jobs finish successfully and open the deployment URL from the `github-pages` environment.
5. Subsequent pushes to `main` rebuild, run the verifier, and deploy automatically. Use the Actions tab to inspect logs or run a manual deployment.

The configured project address is `https://quintonpang.github.io/ahsk-static-website/`. A fork or renamed repository must update `site` and `base` in `astro.config.mjs`.
