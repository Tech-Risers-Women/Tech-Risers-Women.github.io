import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
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
