# Ang and Koh website concept

An Astro concept with original page layouts, CSS, and copy. Practice descriptions are samples. Add approved service details, biographies, contact information, and any documented asset permissions before using the site commercially.

Use Node.js 24. Install with `npm ci`, preview with `npm run dev`, and validate with `npm run build && npm run verify`. The local site uses the `/ahsk-static-website/` path.

Edit services and insights in `src/content.ts`. Page templates are in `src/pages/`, shared elements in `src/components/`, and styles in `src/styles/site.css`.

The demo contact form validates locally. GitHub Pages builds from `main` using `.github/workflows/deploy.yml`.

## Managing events with Decap CMS

The event editor is published at `/ahsk-static-website/admin/`. The public site remains static on GitHub Pages. Editor login requires connecting a Decap Turbo account first.

### One-time account connection

1. Create a free account at https://turbo.decapcms.org/ using the intended editor's email. The free plan has one site and one user, including its owner.
2. Create the Ang & Koh organization. Under Git connection, install the Turbo GitHub App for **only** `QuintonPang/ahsk-static-website`.
3. Create a Turbo site for that repository and the `main` branch. Set the configuration path to `public/admin/config.yml`.
4. Add `https://quintonpang.github.io/ahsk-static-website/admin/` as the admin interface URL.
5. Copy the site UUID from its Overview into `turbo_site_id` in `public/admin/settings.json`, commit, and let GitHub Actions deploy. This site ID is public configuration, not a secret.
6. Open the website's admin URL and choose Login with Turbo.

Account connection is pending until a real site UUID is saved. The admin page shows setup instructions while this value is empty.

### Daily editing

Open the admin URL and choose Events. Use New Event to create an entry, or open an existing event to edit or delete it. Set Published to make an event visible. Turning Published off keeps its content file while removing its public listing and detail page after deployment. Set Sample event only for examples. Lower Display order values appear first.

An event supports a title, summary, date, venue, image with a text description, and description paragraphs. Use the paragraph list to add or reorder paragraphs. Images upload into `public/assets/uploads`. Publishing or deleting commits to `main` and triggers the existing GitHub Pages workflow. Wait for that workflow to finish before checking the public site. Deleting or unpublishing removes the detail URL after deployment.

Events are JSON files in `src/events/`. The filename is the public URL slug. Existing sample URLs are preserved. News articles and practice areas remain in `src/content.ts`. Git history can recover deleted event files.

### Local verification

Run `npm run build` followed by `npm run verify`. Verification calculates the expected page count from published event files so adding or deleting entries does not require editing the check.

The editor loads Decap CMS 3.17.1 from jsDelivr and uses Decap Turbo for authentication and repository access. Public visitors can view events, while editor permissions are managed in Turbo. No authentication secrets are stored in this repository. End-to-end authenticated publishing must be verified after the account connection is complete.

## Managing People

Open the same admin URL and select People. Create, edit, hide, or delete cards using the Name, Role, Biography, Initials, Portrait, Published, Sample profile, and Display order fields. Published controls whether a card appears after deployment. Initials are used when there is no portrait. No individual profile pages or card links are generated. Sample profiles show the example-directory notice when all visible profiles are samples.

People are stored as one JSON file per person in `src/people/`. Existing sample cards were migrated with their names and biographies preserved. The footer's demo social destinations follow the first visible person, or the People page when no profiles are visible, so hiding or deleting a profile does not break deployment.

The News & Events listing uses clickable cards with optional images. The homepage shows up to four published event cards, sorted by event date from newest to oldest. Undated events follow dated ones, with Display order resolving ties. More events opens the complete event listing.
