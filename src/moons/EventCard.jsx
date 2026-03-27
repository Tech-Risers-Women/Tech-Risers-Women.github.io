import { LuCalendar, LuClock, LuMapPin } from 'react-icons/lu';
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

const getInitiativeClass = (initiative) => {
	switch (initiative) {
		case 'Architects Kata Club':
			return styles.architectsKataClub;
		case 'Bootcamp++':
			return styles.bootcamp;
		case 'Career Corner':
			return styles.careerCorner;
		case 'GCS':
			return styles.gcs;
		default:
			return styles.defaultInitiative;
	}
};

export default function EventCard({ event }) {
	const start = event.start ? toDate(event.start) : null;
	const end = event.end ? toDate(event.end) : null;
	const initiativeClass = getInitiativeClass(event.initiative);

	return (
		<li className={styles.card}>
			<div className={styles.content}>
				{event.initiative && (
					<p className={`${styles.badge} ${initiativeClass}`}>
						{event.initiative}
					</p>
				)}

				<h3 className={styles.title}>{event.title}</h3>

				<div className={styles.meta}>
					{start && (
						<>
							<div className={styles.metaItem}>
								<LuCalendar
									aria-hidden="true"
									className={styles.icon}
								/>
								<time dateTime={event.start}>
									{formatDayDate(start)}
								</time>
							</div>

							<div className={styles.metaItem}>
								<LuClock
									aria-hidden="true"
									className={styles.icon}
								/>
								<div>
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
								</div>
							</div>
						</>
					)}

					{event.location && (
						<div className={styles.metaItem}>
							<LuMapPin
								aria-hidden="true"
								className={styles.icon}
							/>
							{event.locationUrl ? (
								<a href="{event.locationUrl}"></a>
							) : (
								<span className={styles.location}>
									Location: {event.location}
								</span>
							)}
						</div>
					)}
				</div>
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
			</div>
		</li>
	);
}
