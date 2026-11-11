# Get running locally
In the project directory, you can run:

### `npm install`

Install all required dependencies.
Requires ``npm``

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the site for production to the `dist` folder, then pre-renders every
page to its own HTML file (`dist/about.html`, `dist/events.html`, …) plus
`dist/404.html` and `dist/sitemap.xml` (see `scripts/prerender.mjs`).

Pre-rendering means GitHub Pages returns HTTP 200 for every page (rather than
serving the 404 page and letting React fill it in), and search engines and
link previews see the real content, title and social-preview tags.

**Adding a page:** add the route in `src/App.jsx` *and* an entry with its
title and description in `src/data/seo.js`. Routes missing from `seo.js` are
not pre-rendered and will return 404 to search engines.

**Moving a page:** add the old path to `REDIRECTS` in `src/data/seo.js`. The
build writes a small page at the old URL that forwards visitors and search
engines to the new one, and the app redirects in the browser too.

**FAQs:** questions live in `src/data/faqs.js` and are also written into the
FAQs page as structured data for Google. Programme details shown on the
Programmes page come from `src/data/initiatives.js`.

**Share image:** `public/og-image.png` is generated from
`scripts/og-image.html`; instructions for regenerating it are at the top of
that file.

### `npm run dev`

Runs the site locally. Displays the URL the site is running at.

# Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Tools

Site is built using React (https://react.dev/) and Vite (https://vite.dev/)