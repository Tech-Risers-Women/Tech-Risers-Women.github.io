import styles from './eventRow.module.css';
import useEvents, { eventKey } from '../hooks/useEvents';
import { LINKS } from '../data/links';
import { ExternalLink } from '../components/ui.jsx';
import EventRow from './EventRow';

// The next few upcoming events, optionally for one programme only
// (`eventKey` from src/data/initiatives.js).
function UpcomingEvents({ limit = 3, initiative }) {
	const { isLoading, error, upcoming } = useEvents();
	const events = (
		initiative ? upcoming.filter((e) => e.initiative === initiative) : upcoming
	).slice(0, limit);

	if (isLoading) return <p className={styles.empty}>Loading events…</p>;

	if (error) {
		return (
			<p role="alert" className={styles.empty}>
				Sorry, we couldn’t load events right now. Please try again later.
			</p>
		);
	}

	if (events.length === 0) {
		return (
			<p className={styles.empty}>
				Nothing scheduled right now.{' '}
				<ExternalLink href={LINKS.joinForm}>Join the community</ExternalLink> to
				hear about new dates first.
			</p>
		);
	}

	return (
		<div className={styles.rows}>
			{events.map((e) => (
				<EventRow key={eventKey(e)} event={e} />
			))}
		</div>
	);
}

export default UpcomingEvents;
