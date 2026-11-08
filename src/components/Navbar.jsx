import { Link, NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import ui from './ui.module.css';
import Logo from '../media/logodark.png';
import HamburgerMenu from './HamburgerMenu.jsx';
import DropdownNav from './DropdownNav.jsx';
import { INITIATIVES } from '../data/initiatives';
import { LINKS } from '../data/links';
import { ExternalLink } from './ui.jsx';

export const NAV_ITEMS = [
	{ route: '/about', title: 'About' },
	{ title: 'Initiatives', children: INITIATIVES.map((i) => ({ route: i.route, title: i.name })) },
	{ route: '/events', title: 'Events' },
	{ route: '/work-with-us', title: 'Get involved' },
	{ route: '/contact', title: 'Contact' }
];

const navLinkClass = ({ isActive }) =>
	`${styles.navLink} ${isActive ? styles.active : ''}`;

function Navbar() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav} aria-label="Main">
				<Link to="/" className={styles.brand}>
					<span className={styles.badge}>
						<img src={Logo} alt="" />
					</span>
					<span className={styles.wordmark}>Tech Risers Women</span>
				</Link>

				<ul className={styles.desktopMenu}>
					{NAV_ITEMS.map((item) => (
						<li key={item.title}>
							{item.children ? (
								<DropdownNav name={item.title} menuItems={item.children} />
							) : (
								<NavLink to={item.route} className={navLinkClass}>
									{item.title}
								</NavLink>
							)}
						</li>
					))}
					<li>
						<ExternalLink
							href={LINKS.joinForm}
							className={`${ui.btn} ${ui.btnMustard} ${ui.btnSmall}`}
						>
							Join us
						</ExternalLink>
					</li>
				</ul>

				<div className={styles.mobileMenu}>
					<HamburgerMenu items={NAV_ITEMS} />
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
