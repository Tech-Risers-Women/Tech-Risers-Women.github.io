import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { INITIATIVES } from '../data/initiatives';
import { LINKS } from '../data/links';
import { ExternalLink } from './ui.jsx';

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.top}>
					<div className={styles.mission}>
						<div className={styles.name}>Tech Risers Women</div>
						<p>
							An initiative to empower women in tech through
							collaborative learning, skill-building, and career
							reflection sessions. Online, for everyone, everywhere.
						</p>
					</div>
					<div className={styles.columns}>
						<div className={styles.column}>
							<span className={styles.label}>Community</span>
							<Link to="/about">About us</Link>
							<Link to="/events">Events</Link>
							<Link to="/code-of-conduct">Code of conduct</Link>
							<Link to="/work-with-us">Work with us</Link>
						</div>
						<div className={styles.column}>
							<span className={styles.label}>Initiatives</span>
							{INITIATIVES.map((i) => (
								<Link key={i.id} to={i.route}>
									{i.name}
								</Link>
							))}
						</div>
						<div className={styles.column}>
							<span className={styles.label}>Say hello</span>
							<a href={LINKS.email}>{LINKS.emailAddress}</a>
							<ExternalLink href={LINKS.linkedin}>LinkedIn</ExternalLink>
							<ExternalLink href={LINKS.newsletter}>Newsletter</ExternalLink>
						</div>
					</div>
				</div>
				<div className={styles.bottom}>
					<span>© {year} Tech Risers Women</span>
					<span>
						This website is{' '}
						<ExternalLink href={LINKS.github}>open source</ExternalLink>.
						Original developed by{' '}
						<ExternalLink href={LINKS.evaNagengast}>Eva Nagengast</ExternalLink>.
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
