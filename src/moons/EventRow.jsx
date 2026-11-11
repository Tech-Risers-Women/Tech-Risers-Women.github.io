import { Link } from 'react-router-dom';
import styles from './eventRow.module.css';
import ui from '../components/ui.module.css';
import { getInitiativeByEventKey } from '../data/initiatives';
import { LINKS } from '../data/links';
import { ExternalLink } from '../components/ui.jsx';
import {
	dayOfMonth,
	longDate,
	monthShort,
	timeRange,
	weekdayShort
} from '../utils/formatEvent';

// One upcoming event: date block, title and description, and a Register
// button. Used on the Events page, the home page and each programme page.
function EventRow({ event, headingLevel = 'h3' }) {
	const initiative = getInitiativeByEventKey(event.initiative);
	const mustard = initiative?.dateStyle === 'mustard';
	const Heading = headingLevel;

	return (
		<article className={`${styles.row} ${ui.card}`}>
			<div
				className={`${styles.date} ${mustard ? styles.dateMustard : ''}`}
				aria-hidden="true"
			>
				<span className={styles.dateDay}>{weekdayShort(event.start)}</span>
				<span className={styles.dateNum}>{dayOfMonth(event.start)}</span>
				<span className={styles.dateMonth}>{monthShort(event.start)}</span>
			</div>
			<div className={styles.body}>
				<div className={styles.tags}>
					{initiative ? (
						<Link to={initiative.route} className={`${ui.tag} ${styles.tagLink}`}>
							{initiative.shortName}
						</Link>
					) : (
						event.initiative && <span className={ui.tag}>{event.initiative}</span>
					)}
				</div>
				<Heading className={styles.title}>{event.title}</Heading>
				{event.description && <p className={styles.description}>{event.description}</p>}
			</div>
			<div className={styles.action}>
				<time className={styles.time} dateTime={event.start}>
					<span className={styles.fullDate}>{longDate(event.start)}</span>
					{timeRange(event)}
				</time>
				<ExternalLink
					href={LINKS.joinForm}
					className={`${ui.btn} ${ui.btnMustard} ${ui.btnSmall}`}
					aria-label={`Register: ${event.title}`}
				>
					Register
				</ExternalLink>
			</div>
		</article>
	);
}

export default EventRow;
