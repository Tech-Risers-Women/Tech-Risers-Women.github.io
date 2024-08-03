import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const DropdownNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ route: 'group-coding-sessions', title: 'Group coding Sessions' },
		{ route: 'architect-s-club', title: 'Architects Club' },
		{ route: 'bootcamp-plus-plus', title: 'Bootcamp ++' }
	];

	const ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			console.log('the event ref is', ref);
			if (isOpen && ref.current && !ref.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, [isOpen]);

	return (
		<div className={styles.dropdownContainer} ref={ref}>
			<button
				className={styles.dropdownToggle}
				onClick={() => setIsOpen(!isOpen)}
				aria-haspopup="true"
			>
				Initiatives <span></span>
			</button>
			{isOpen && (
				<div>
					<ul className={styles.dropdownMenu}>
						{menuItems.map((item, index) => (
							<li key={index} className={styles.dropdownMenuItem}>
								<NavLink
									to={`/${item.route}`}
									className={({ isActive }) =>
										isActive ? styles.active : ''
									}
									onClick={() => setIsOpen(!isOpen)}
								>
									{item.title}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DropdownNav;
