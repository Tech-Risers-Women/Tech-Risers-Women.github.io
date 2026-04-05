import React, { useEffect, useState } from 'react';
import styles from './events.module.css';
import Banner from '../moons/Banner';
import EventCard from '../moons/EventCard';

function Events() {
	const [isLoading, setIsLoading] = useState(true);
	const [events, setEvents] = useState([]);
	const [error, setError] = useState(null);
	const [showPastEvents, setShowPastEvents] = useState(false);

	const now = new Date();

	useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				const res = await fetch(
					`${import.meta.env.BASE_URL}events.json`,
					{ cache: 'no-store' }
				);
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				const data = await res.json();
				if (!cancelled) {
					setEvents(data);
					setIsLoading(false);
				}
			} catch (e) {
				if (!cancelled) {
					setError(e.message || 'Failed to load events');
					setIsLoading(false);
				}
			}
		})();
		return () => {
			cancelled = true;
		};
	}, []);

	const upcomingEvents = events.filter(
		(event) => new Date(event.start) >= now
	);
	const pastEvents = events.filter((event) => new Date(event.start) < now);

	const sortedUpcomingEvents = [...upcomingEvents].sort(
		(a, b) => new Date(a.start) - new Date(b.start)
	);
	const sortedPastEvents = [...pastEvents].sort(
		(a, b) => new Date(b.start) - new Date(a.start)
	);

	return (
		<div className={styles.events}>
			<Banner name={' Events'} />
			<div className={styles.eventsText}>
				<h2>Upcoming events...</h2>

				{error && <p role="alert">Could not load events: {error}</p>}
				{isLoading && !error && <p>Loading events…</p>}

				{sortedUpcomingEvents.length === 0 && (
					<p>No upcoming events right now.</p>
				)}

				{sortedUpcomingEvents.length > 0 && (
					<ul className={styles.grid}>
						{sortedUpcomingEvents.map((e) => (
							<EventCard key={e.id} event={e} />
						))}
					</ul>
				)}

				{sortedPastEvents.length > 0 && (
					<button onClick={() => setShowPastEvents((prev) => !prev)}>
						{showPastEvents
							? 'Hide Past Events'
							: 'View Past Events'}
					</button>
				)}

				{showPastEvents && sortedPastEvents.length > 0 && (
					<ul className={styles.grid}>
						{sortedPastEvents.map((e) => (
							<EventCard key={e.id} event={e} />
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default Events;
