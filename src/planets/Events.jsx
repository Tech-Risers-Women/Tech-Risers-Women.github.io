import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './events.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import useEvents, { eventKey } from '../hooks/useEvents';
import { INITIATIVES, getInitiativeByEventKey } from '../data/initiatives';
import { LINKS } from '../data/links';
import { ExternalLink } from '../components/ui.jsx';
import {
	dayOfMonth,
	longDate,
	monthShort,
	monthYear,
	timeRange,
	weekdayShort
} from '../utils/formatEvent';

const PAST_PREVIEW = 6;
const FILTER_ORDER = ['career-corner', 'architects-kata-club', 'group-coding', 'bootcamp-plus-plus'];

function EventRow({ event }) {
	const initiative = getInitiativeByEventKey(event.initiative);
	const mustard = initiative?.dateStyle === 'mustard';

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
				<h3 className={styles.title}>{event.title}</h3>
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
					aria-label={`Sign up: ${event.title}`}
				>
					Sign up
				</ExternalLink>
			</div>
		</article>
	);
}

function PastEventCard({ event }) {
	const initiative = getInitiativeByEventKey(event.initiative);
	const mustard = initiative?.dateStyle === 'mustard';

	return (
		<article className={`${ui.card} ${styles.pastCard}`}>
			<div className={`${styles.pastBand} ${mustard ? styles.pastBandMustard : ''}`}>
				<span className={styles.pastGlyph} aria-hidden="true">
					{initiative?.glyph}
				</span>
				<span className={styles.pastInitiative}>
					{initiative?.shortName ?? event.initiative}
				</span>
			</div>
			<div className={styles.pastBody}>
				<time className={styles.pastDate} dateTime={event.start}>
					{monthYear(event.start)}
				</time>
				<h3 className={styles.pastTitle}>{event.title}</h3>
			</div>
		</article>
	);
}

function Events() {
	const { isLoading, error, upcoming, past } = useEvents();
	const [filter, setFilter] = useState('all');
	const [showAllPast, setShowAllPast] = useState(false);

	const filters = [
		{ key: 'all', label: 'All' },
		...FILTER_ORDER.map((id) => INITIATIVES.find((i) => i.id === id)).map((i) => ({
			key: i.eventKey,
			label: i.shortName
		}))
	];
	const shown =
		filter === 'all' ? upcoming : upcoming.filter((e) => e.initiative === filter);
	const pastShown = showAllPast ? past : past.slice(0, PAST_PREVIEW);

	return (
		<div>
			<PageHero
				eyebrow="All events are online"
				title="Events"
				lede="Career Corner and Architects’ Kata Club each meet at least once a quarter. Group Coding and Bootcamp++ sessions are added here as they’re scheduled."
			/>

			<section className={styles.upcoming}>
				<div className={`${ui.container} ${styles.upcomingInner}`}>
					<div className={styles.upcomingHead}>
						<h2 className={ui.h2Small}>Coming up</h2>
						<div role="group" aria-label="Filter events" className={styles.filters}>
							{filters.map((f) => (
								<button
									key={f.key}
									type="button"
									aria-pressed={filter === f.key}
									className={`${styles.filter} ${filter === f.key ? styles.filterOn : ''}`}
									onClick={() => setFilter(f.key)}
								>
									{f.label}
								</button>
							))}
						</div>
					</div>

					{error && (
						<p role="alert" className={styles.empty}>
							Sorry, we couldn’t load events right now. Please try
							again later.
						</p>
					)}
					{isLoading && <p className={styles.empty}>Loading events…</p>}

					{!isLoading && !error && shown.length > 0 && (
						<div className={styles.rows}>
							{shown.map((e) => (
								<EventRow key={eventKey(e)} event={e} />
							))}
						</div>
					)}

					{!isLoading && !error && shown.length === 0 && (
						<p className={styles.empty}>
							Nothing scheduled
							{filter === 'all' ? '' : ' in this series'} right now.{' '}
							<ExternalLink href={LINKS.joinForm}>Sign up as a member</ExternalLink>{' '}
							to hear about new dates first.
						</p>
					)}
				</div>
			</section>

			{past.length > 0 && (
				<section className={`${ui.sectionTight} ${ui.dots} ${ui.bordered}`}>
					<div className={`${ui.container} ${styles.pastInner}`}>
						<div className={ui.heading}>
							<div className={ui.eyebrow}>Recently</div>
							<h2 className={ui.h2Small}>Past events</h2>
						</div>
						<div className={styles.pastGrid}>
							{pastShown.map((e) => (
								<PastEventCard key={eventKey(e)} event={e} />
							))}
						</div>
						{past.length > PAST_PREVIEW && (
							<button
								type="button"
								className={`${ui.btn} ${ui.btnOutline} ${styles.more}`}
								onClick={() => setShowAllPast((v) => !v)}
								aria-expanded={showAllPast}
							>
								{showAllPast
									? 'Show fewer past events'
									: `Show all ${past.length} past events`}
							</button>
						)}
					</div>
				</section>
			)}
		</div>
	);
}

export default Events;
