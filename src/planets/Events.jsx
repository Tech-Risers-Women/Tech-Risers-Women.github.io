import React, { useEffect, useState } from 'react';
import styles from './events.module.css';
import Banner from '../moons/Banner';
import EventCard from '../moons/EventCard';

function Events() {
	const [events, setEvents] = useState(null);
	const [error, setError] = useState(null);

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
				if (!cancelled) setEvents(data);
			} catch (e) {
				if (!cancelled) setError(e.message || 'Failed to load events');
			}
		})();
		return () => {
			cancelled = true;
		};
	}, []);

	console.log('events are:', events);

	return (
		<div className={styles.events}>
			<Banner name={' Events'} />
			<div className={styles.eventsText}>
				<h2>Upcoming events...</h2>

				{error && <p role="alert">Could not load events: {error}</p>}
				{!events && !error && <p>Loading events…</p>}

				{events && events.length === 0 && (
					<p>No upcoming events right now.</p>
				)}

				{events && events.length > 0 && (
					<ul className={styles.grid}>
						{events.map((e) => (
							<EventCard
								key={e.id}
								event={e}
								variant="horizontal"
							/>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default Events;
