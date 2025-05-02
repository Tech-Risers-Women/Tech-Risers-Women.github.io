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
								title: 'About Us'
							},
							{
								route: 'code-of-conduct',
								title: 'Code Of Conduct'
							},
							{
								route: 'work-with-us',
								title: 'Work With Us'
							},
							{
								route: 'events',
								title: 'Events'
							}
						]}
					/>
				</li>

				<li>
					<DropdownNav
						name={'Initiatives'}
						menuItems={[
							{
								route: 'group-coding-sessions',
								title: 'Group Coding Sessions'
							},
							{
								route: 'architect-s-club',
								title: "Architects' Kata Club"
							},
							{
								route: 'bootcamp-plus-plus',
								title: 'Bootcamp ++'
							}
						]}
						inHamburger={false}
					/>
				</li>
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
