import React from 'react';
import styles from './events.module.css';
import Banner from '../moons/Banner';

function Events() {
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
