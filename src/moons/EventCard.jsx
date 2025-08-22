import { LuCalendar, LuClock } from 'react-icons/lu';
import styles from './eventCard.module.css';

const toDate = (iso) => new Date(iso);
const formatDayDate = (d) =>
	d.toLocaleString('en-GB', {
		weekday: 'short',
		day: '2-digit',
		month: 'short',
		year: 'numeric',
		timeZone: 'Europe/London'
	});

const formatTime = (d) =>
	d.toLocaleString('en-GB', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
		timeZone: 'Europe/London'
	});

const formatTimeZone = (d) =>
	d.toLocaleTimeString('en-GB', {
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'Europe/London',
		timeZoneName: 'short'
	});

export default function EventCard({ event }) {
	const start = event.start ? toDate(event.start) : null;
	const end = event.end ? toDate(event.end) : null;

	return (
		<li className={styles.card}>
			<h3 className={styles.title}>{event.title}</h3>

			<div className={styles.eventDate}>
				{start && (
					<>
						<span className={styles.eventDateItem}>
							<LuCalendar
								aria-hidden="true"
								className={styles.icon}
							/>
							<time dateTime={event.start}>
								{formatDayDate(start)}
							</time>
						</span>

						<span className={styles.eventDateItem}>
							<LuClock
								aria-hidden="true"
								className={styles.icon}
							/>
							<time dateTime={event.start}>
								{formatTimeZone(start)}
							</time>
							{end && (
								<>
									{' — '}
									<time dateTime={event.end}>
										{formatTime(end)}
									</time>
								</>
							)}
						</span>
					</>
				)}
			</div>

			{event.location && (
				<p className={styles.location}>Location: {event.location}</p>
			)}
			{event.description && (
				<p className={styles.description}>{event.description}</p>
			)}

			{event.url && (
				<p className={styles.linkWrap}>
					<a className={styles.link} href={event.url}>
						More details
					</a>
				</p>
			)}
		</li>
	);
}
