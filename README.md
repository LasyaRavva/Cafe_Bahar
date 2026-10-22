# Cafe Bahar — independent website concept

A responsive React, Vite, and JavaScript portfolio demo with dedicated Home, Story, Menu, Gallery, Updates, and Contact pages. This is an independent concept and is not the official Cafe Bahar website. Business identity, public-listing details, menu data, and supplied artwork are reference content awaiting owner approval.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production build with `npm run build`; preview it using `npm run preview`.
Run the data and menu behavior checks with `npm test`.

## Customize after owner consultation

- Confirm the business name, address, and phone in `src/data.js`. The supplied address and phone remain marked as unverified references.
- Update the menu transcription and categories in `src/menu-data.js`. Displayed prices are transcribed from the fuller menu pages supplied for this concept; other supplied photos show different amounts, so confirm all current prices and availability with the restaurant before publication. The page has no ordering or payment flow.
- Gallery and dining photos load from Unsplash and are explicitly illustrative, not photos of Cafe Bahar. Replace them with owner-approved photography. Maps-derived photos and supplied post artwork are kept out of the public build and GitHub repository pending permission.
- The Updates section uses original SVG concept illustrations, not the supplied Cafe Bahar post artwork. Captions are adapted from user-supplied post screenshots and still need restaurant approval; source and status are recorded in `src/data.js`.
- Hero and featured images use remote illustrative Unsplash photography. Check current usage terms and availability before production. Failed images use the neutral `public/images/image-unavailable.svg` asset; they never substitute a different dish.
- Update approved concept and story copy in `src/pages.jsx` after consulting the owner.
- `index.html` currently applies `noindex, nofollow`. Keep it while the proposal is unpublished. Remove or revise it only when the owner approves a production launch.
- Pages use `/`, `/story`, `/menu`, `/gallery`, `/updates`, and `/contact`. Vercel rewrites those known routes to the Vite app; the built `404.html` provides the branded not-found page for unknown URLs.

## Deploy a concept preview to Vercel

Import this project into Vercel from a Git repository, or deploy it with the Vercel CLI from the project root. The included `vercel.json` sets the Vite framework, `npm run build`, the `dist` output directory, and known page rewrites. The build copies `public/404.html` into `dist/404.html`, which Vercel serves with a 404 response for unmatched static routes. Keep `noindex, nofollow` enabled for the proposal preview. After deployment, check each deep link and an unknown URL on the actual Vercel preview; local tests cannot verify platform routing or HTTPS behavior.

## Collect before production

- Confirm Cafe Bahar name, logo usage, and brand wording.
- Verify the address and phone; collect opening hours and confirmed branch details.
- Collect the current menu, prices, item availability, and any approved descriptions or allergen/dietary details.
- Approve the story copy and any claims about the restaurant.
- Confirm commercial-use permission for each photograph and post artwork.
- Provide verified social links and WhatsApp only if those channels should be linked.
- Decide whether reservations, delivery, or online ordering are supported and what systems they require.
- Approve publication, domain, hosting, and search indexing.

This concept includes route navigation, mobile menu, category filters, a keyboard-accessible gallery dialog, and an embedded map with an external map-reference fallback. The phone remains non-clickable until verified. Local automated browser QA covers the listed routes and responsive widths; final testing on the chosen production host and real devices remains outstanding. No ordering, reservation, payments, review claims, or business schema are represented as operational. Image permissions and business facts are not represented as approved.
