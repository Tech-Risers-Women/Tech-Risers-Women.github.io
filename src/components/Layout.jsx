import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { getPage } from '../data/seo';

function Layout() {
	const { pathname } = useLocation();

	// Each page's HTML is pre-rendered with its own title; keep the tab title
	// in step when navigating within the app.
	useEffect(() => {
		document.title = getPage(pathname).title;
	}, [pathname]);

	return (
		<div className="Wrapper">
			<a href="#main" className="skipLink">
				Skip to content
			</a>
			<Navbar />
			<main id="main">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
