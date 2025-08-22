import styles from './eventCard.module.css';
const toDate = (iso) => new Date(iso);
const formatDate = (d) =>
	d.toLocaleString('en-GB', {
		weekday: 'short',
		day: '2-digit',
		month: 'short',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'Europe/London'
	});

export default function EventCard({ event }) {
	const start = event.start ? toDate(event.start) : null;
	const end = event.end ? toDate(event.end) : null;

	return (
		<li className={styles.card}>
			<h3 className="text-xl font-semibold">{event.title}</h3>

			{(start || end) && (
				<p className="mt-1">
					{start && (
						<time dateTime={event.start}>{formatDate(start)}</time>
					)}
					{end && (
						<>
							{' '}
							–{' '}
							<time dateTime={event.end}>{formatDate(end)}</time>
						</>
					)}
				</p>
			)}

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
