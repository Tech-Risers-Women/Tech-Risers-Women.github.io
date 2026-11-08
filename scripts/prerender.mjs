// Runs after `vite build`. Renders every route in src/data/seo.js to its own
// static HTML file so that GitHub Pages serves real pages (HTTP 200) with
// content, titles and social-preview tags in the raw HTML. React then
// hydrates the page in the browser as normal.
//
// /about is written to dist/about.html, which GitHub Pages serves at /about
// without a redirect. Unknown URLs get dist/404.html (the "Page not found"
// page, still with HTTP 404).

import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDist = path.join(root, 'dist-ssr');

const { render, SITE, PAGES, NOT_FOUND } = await import(
	pathToFileURL(path.join(ssrDist, 'entry-server.mjs')).href
);

const template = await readFile(path.join(dist, 'index.html'), 'utf-8');

const escape = (s) =>
	String(s)
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');

function headTags(route, page) {
	const url = route ? `${SITE.url}${route === '/' ? '/' : route}` : null;
	const image = `${SITE.url}${SITE.image}`;
	const tags = [
		`<title>${escape(page.title)}</title>`,
		`<meta name="description" content="${escape(page.description)}" />`
	];
	if (page.noindex) {
		tags.push('<meta name="robots" content="noindex" />');
	}
	if (url) {
		tags.push(`<link rel="canonical" href="${url}" />`);
	}
	tags.push(
		`<meta property="og:type" content="website" />`,
		`<meta property="og:site_name" content="${escape(SITE.name)}" />`,
		`<meta property="og:title" content="${escape(page.title)}" />`,
		`<meta property="og:description" content="${escape(page.description)}" />`,
		...(url ? [`<meta property="og:url" content="${url}" />`] : []),
		`<meta property="og:image" content="${image}" />`,
		`<meta property="og:image:width" content="1200" />`,
		`<meta property="og:image:height" content="630" />`,
		`<meta property="og:image:alt" content="${escape(SITE.imageAlt)}" />`,
		`<meta name="twitter:card" content="summary_large_image" />`,
		`<meta name="twitter:title" content="${escape(page.title)}" />`,
		`<meta name="twitter:description" content="${escape(page.description)}" />`,
		`<meta name="twitter:image" content="${image}" />`,
		`<meta name="twitter:image:alt" content="${escape(SITE.imageAlt)}" />`
	);
	return tags.join('\n    ');
}

function buildPage(route, page, renderUrl) {
	return template
		.replace(/<title>.*?<\/title>\s*/s, '')
		.replace('<!--app-head-->', headTags(route, page))
		.replace('<!--app-html-->', () => render(renderUrl));
}

const fileFor = (route) =>
	route === '/' ? 'index.html' : `${route.replace(/^\//, '')}.html`;

for (const [route, page] of Object.entries(PAGES)) {
	const file = fileFor(route);
	await writeFile(path.join(dist, file), buildPage(route, page, route));
	console.log(`prerendered ${route} -> dist/${file}`);
}

await writeFile(
	path.join(dist, '404.html'),
	buildPage(null, NOT_FOUND, '/404')
);
console.log('prerendered not-found page -> dist/404.html');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(PAGES)
	.filter(([, page]) => !page.noindex)
	.map(([route]) => `  <url><loc>${SITE.url}${route}</loc></url>`)
	.join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);
console.log('wrote dist/sitemap.xml');

await rm(ssrDist, { recursive: true, force: true });
