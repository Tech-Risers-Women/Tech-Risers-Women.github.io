import { Link } from 'react-router-dom';
import styles from './nextEventCard.module.css';
import ui from '../components/ui.module.css';
import useEvents from '../hooks/useEvents';
import { getInitiativeByEventKey } from '../data/initiatives';
import { longDate, timeRange } from '../utils/formatEvent';
import { ExternalLink, toneClass } from '../components/ui.jsx';
import { LINKS } from '../data/links';

function CalendarIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
			<rect x="3" y="5" width="18" height="16" rx="1" />
			<path d="M3 10h18M8 3v4M16 3v4" />
		</svg>
	);
}

function ClockIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
			<circle cx="12" cy="12" r="9" />
			<path d="M12 7v5l3 2" />
		</svg>
	);
}

function NextEventCard() {
	const { isLoading, upcoming } = useEvents();
	const next = upcoming[0];
	const initiative = next && getInitiativeByEventKey(next.initiative);

	return (
		<aside className={styles.card} aria-label="Next event">
			<div className={styles.top}>
				<span className={styles.label}>Next event</span>
				{initiative && (
					<span className={`${ui.tag} ${toneClass[initiative.tone]}`}>
						{initiative.shortName}
					</span>
				)}
			</div>

			{isLoading && <p className={styles.note}>Loading the next event…</p>}

			{!isLoading && next && (
				<>
					<div className={styles.title}>{next.title}</div>
					<div className={styles.meta}>
						<div className={styles.metaItem}>
							<CalendarIcon />
							<time dateTime={next.start}>{longDate(next.start)}</time>
						</div>
						<div className={styles.metaItem}>
							<ClockIcon />
							<span>{timeRange(next)}</span>
						</div>
					</div>
				</>
			)}

			{!isLoading && !next && (
				<p className={styles.note}>
					Nothing is scheduled right now.{' '}
					<ExternalLink href={LINKS.joinForm}>Join the community</ExternalLink>{' '}
					to hear about new dates first.
				</p>
			)}

			<Link to="/events" className={`${ui.btn} ${ui.btnNavy}`}>
				See all upcoming events
			</Link>
		</aside>
	);
}

export default NextEventCard;
