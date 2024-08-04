import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './hamburgerMenu.module.css';
import DropdownNav from './DropdownNav';

function HamburgerMenu() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const toggleNavbar = () => setNavbarOpen(!navbarOpen);
	const closeNavbar = () => setNavbarOpen(false);

	const ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (
				navbarOpen &&
				ref.current &&
				!ref.current.contains(event.target)
			) {
				setNavbarOpen(false);
			}
		};
		document.addEventListener('mousedown', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, [navbarOpen]);

	return (
		<div className={styles.hamburgerMenu} ref={ref}>
			{/* Hamburger Button */}
			<button className={styles.hamburgerButton} onClick={toggleNavbar}>
				<div
					className={
						navbarOpen
							? styles.hamburgerTopOpen
							: styles.hamburgerTopClosed
					}
				></div>
				<div
					className={
						navbarOpen
							? styles.hamburgerMidOpen
							: styles.hamburgerMidClosed
					}
				></div>
				<div
					className={
						navbarOpen
							? styles.hamburgerBottomOpen
							: styles.hamburgerBottomClosed
					}
				></div>
			</button>

			<div className={navbarOpen ? styles.menu : styles.menuClosed}>
				{/* Menu */}
				<ul className={`${styles.smallScreenMenu} ${styles.open}`}>
					<li className={styles.hamburgerLink}>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? styles.active : ''
							}
							onClick={closeNavbar}
						>
							Home
						</NavLink>{' '}
					</li>
					<li className={styles.hamburgerLink}>
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
							inHamburger={true}
						/>
					</li>
					{/* <li className={styles.hamburgerLink}>
            <NavLink
              to="/donate"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeNavbar}
            >
              Donate
            </NavLink>
          </li> */}
					<li className={styles.hamburgerLink}>
						<DropdownNav
							name={'Initiatives'}
							menuItems={[
								{
									route: 'group-coding-sessions',
									title: 'Group coding Sessions'
								},
								{
									route: 'architect-s-club',
									title: 'Architects Club'
								},
								{
									route: 'bootcamp-plus-plus',
									title: 'Bootcamp ++'
								}
							]}
							inHamburger={true}
						/>
					</li>
					<li className={styles.hamburgerLink}>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? styles.active : ''
							}
							onClick={closeNavbar}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default HamburgerMenu;
