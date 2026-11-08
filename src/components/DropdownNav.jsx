import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './dropdown.module.css';

const DropdownNav = ({ name, menuItems }) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef();
	const { pathname } = useLocation();
	const isSectionActive = menuItems.some((item) => item.route === pathname);

	useEffect(() => {
		if (!isOpen) return undefined;
		const onPointer = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		const onKey = (event) => {
			if (event.key === 'Escape') setIsOpen(false);
		};
		document.addEventListener('mousedown', onPointer);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onPointer);
			document.removeEventListener('keydown', onKey);
		};
	}, [isOpen]);

	return (
		<div className={styles.dropdown} ref={ref}>
			<button
				type="button"
				className={`${styles.toggle} ${isSectionActive ? styles.toggleActive : ''}`}
				onClick={() => setIsOpen((open) => !open)}
				aria-expanded={isOpen}
			>
				{name}
				<svg
					className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2.4"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M6 9l6 6 6-6" />
				</svg>
			</button>
			{isOpen && (
				<ul className={styles.menu}>
					{menuItems.map((item) => (
						<li key={item.route}>
							<NavLink
								to={item.route}
								className={({ isActive }) =>
									`${styles.item} ${isActive ? styles.itemActive : ''}`
								}
								onClick={() => setIsOpen(false)}
							>
								{item.title}
							</NavLink>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DropdownNav;
