<div className={styles.meta}>
	{start && <div className={styles.metaItem}>📅 date</div>}

	{start && <div className={styles.metaItem}>🕒 time</div>}

	{event.location && <div className={styles.metaItem}>📍 location</div>}
</div>;
