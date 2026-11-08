import { Link } from 'react-router-dom';
import styles from './pageHero.module.css';

// Navy hero with dot grid and slanted bottom edge, used at the top of every
// page except Home. `aside` renders in a right-hand column on wide screens.
function PageHero({ eyebrow, title, lede, back, aside, children }) {
	return (
		<section className={styles.hero}>
			<div className={`${styles.inner} ${aside ? styles.withAside : ''}`}>
				<div className={styles.main}>
					{back && (
						<Link to={back.to} className={styles.back}>
							← {back.label}
						</Link>
					)}
					{eyebrow && <div className={styles.eyebrow}>&gt; {eyebrow}</div>}
					<h1 className={styles.title}>{title}</h1>
					{lede && <p className={styles.lede}>{lede}</p>}
					{children}
				</div>
				{aside && <div className={styles.aside}>{aside}</div>}
			</div>
		</section>
	);
}

export default PageHero;
