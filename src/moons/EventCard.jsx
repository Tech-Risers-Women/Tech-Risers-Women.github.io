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
		timeZoneName: 'short' // gives "BST" or "GMT"
	});

export default function EventCard({ event }) {
	const start = event.start ? toDate(event.start) : null;
	const end = event.end ? toDate(event.end) : null;

	return (
		<li className={styles.card}>
			<h3 className="text-xl font-semibold">{event.title}</h3>

			<p className="mt-1">
				{start && (
					<>
						<time dateTime={event.start}>
							{formatDayDate(start)}
						</time>
						{' : '}

						<time dateTime={event.start}>{formatTime(start)}</time>
						{end && (
							<>
								{' — '}
								<time dateTime={event.end}>
									{formatTimeZone(end)}
								</time>
							</>
						)}
					</>
				)}
			</p>

			{event.location && <p className="mt-1">{event.location}</p>}
			{event.description && <p className="mt-2">{event.description}</p>}

			{event.url && (
				<p className="mt-3">
					<a className="underline" href={event.url}>
						More details
					</a>
				</p>
			)}
		</li>
	);
}
