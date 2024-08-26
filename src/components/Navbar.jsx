import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import Logo from '../media/logodark.png';
import MobileMenu from './HamburgerMenu.jsx';
import DropdownNav from './DropdownNav.jsx';

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.mobileMenu}>
				<MobileMenu />
			</div>
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? styles.homeLogo : '')}
			>
				<img src={Logo} alt="Tech Risers Women Logo" />
			</NavLink>
			<ul className={styles.desktopMenu}>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? styles.active : ''
						}
					>
						Home
					</NavLink>
				</li>

				<li>
					<DropdownNav
						name={'About'}
						menuItems={[
							{
								route: 'about',
								title: 'About us'
							},
							{
								route: 'code-of-conduct',
								title: 'Code of Conduct'
							}
						]}
						closeNavbar={() => null}

					/>
				</li>

				<li>
					<DropdownNav
						name={'Initiatives'}
						menuItems={[
							{
								route: 'group-coding-sessions',
								title: 'Group coding Sessions'
							},
							{
								route: 'architect-s-club',
								title: 'Architects Kata Club'
							},
							{
								route: 'bootcamp-plus-plus',
								title: 'Bootcamp ++'
							}
						]}
						inHamburger={false}
						closeNavbar={() => null}

					/>
				</li>
				{/* <li>
          <NavLink
            to="/donate"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Donate
          </NavLink>
        </li> */}
				<li>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							isActive ? styles.active : ''
						}
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
export default Navbar;
