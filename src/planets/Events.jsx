import React, { useEffect, useState } from 'react';
import styles from './events.module.css';
import Banner from '../moons/Banner';

function Events() {
	const [events, setEvents] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				const res = await fetch('/events.json', { cache: 'no-store' });
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
			</div>
		</div>
	);
}

export default Events;
