import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './hamburgerMenu.module.css';
import ui from './ui.module.css';

function HamburgerMenu({ items }) {
	const [open, setOpen] = useState(false);
	const ref = useRef();
	const { pathname } = useLocation();

	// Close the menu whenever the route changes.
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!open) return undefined;
		const onPointer = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false);
			}
		};
		const onKey = (event) => {
			if (event.key === 'Escape') setOpen(false);
		};
		document.addEventListener('mousedown', onPointer);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onPointer);
			document.removeEventListener('keydown', onKey);
		};
	}, [open]);

	const linkClass = ({ isActive }) =>
		`${styles.link} ${isActive ? styles.active : ''}`;

	return (
		<div ref={ref}>
			<button
				type="button"
				className={styles.button}
				onClick={() => setOpen((o) => !o)}
				aria-expanded={open}
				aria-controls="mobile-menu"
				aria-label={open ? 'Close menu' : 'Open menu'}
			>
				<span className={`${styles.bar} ${open ? styles.barTopOpen : ''}`} />
				<span className={`${styles.bar} ${open ? styles.barMidOpen : ''}`} />
				<span className={`${styles.bar} ${open ? styles.barBottomOpen : ''}`} />
			</button>

			<div id="mobile-menu" className={styles.panel} hidden={!open}>
				<ul className={styles.list}>
					{items.map((item) =>
						item.children ? (
							<li key={item.title}>
								<span className={styles.groupLabel}>{item.title}</span>
								<ul className={styles.subList}>
									{item.children.map((child) => (
										<li key={child.route}>
											<NavLink to={child.route} className={linkClass}>
												{child.title}
											</NavLink>
										</li>
									))}
								</ul>
							</li>
						) : (
							<li key={item.title}>
								<NavLink to={item.route} className={linkClass}>
									{item.title}
								</NavLink>
							</li>
						)
					)}
				</ul>
				<NavLink
					to="/join-us"
					className={`${ui.btn} ${ui.btnMustard} ${styles.join}`}
				>
					Join us
				</NavLink>
			</div>
		</div>
	);
}

export default HamburgerMenu;
