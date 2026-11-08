// Build-time entry point used by scripts/prerender.mjs to render each route
// to static HTML. The browser entry point is main.jsx.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url) {
	return renderToString(
		<React.StrictMode>
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		</React.StrictMode>
	);
}

export { SITE, PAGES, NOT_FOUND } from './data/seo';
