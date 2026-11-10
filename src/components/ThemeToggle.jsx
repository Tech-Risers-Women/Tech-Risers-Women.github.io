import { FiMoon, FiSun } from 'react-icons/fi';
import styles from './themeToggle.module.css';

// Switches between light and dark mode. Until someone uses it, the site
// follows their system setting. The choice is saved in localStorage and
// applied before first paint by the inline script in index.html.
//
// Both icons are always rendered and CSS shows the right one, so the
// pre-rendered HTML never disagrees with the visitor's theme.
function ThemeToggle() {
	const toggle = () => {
		const root = document.documentElement;
		const current =
			root.dataset.theme ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		const next = current === 'dark' ? 'light' : 'dark';
		root.dataset.theme = next;
		try {
			localStorage.setItem('theme', next);
		} catch {
			// Storage can be unavailable (e.g. private browsing); the toggle still works for this visit.
		}
	};

	return (
		<button
			type="button"
			className={styles.button}
			onClick={toggle}
		>
			<span className={styles.whenLight}>
				<FiMoon aria-hidden="true" /> Dark mode
			</span>
			<span className={styles.whenDark}>
				<FiSun aria-hidden="true" /> Light mode
			</span>
		</button>
	);
}

export default ThemeToggle;
