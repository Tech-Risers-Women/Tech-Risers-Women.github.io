import { useEffect, useState } from 'react';

// Loads public/events.json and splits it into upcoming (soonest first)
// and past (most recent first) events.
export default function useEvents() {
	const [state, setState] = useState({
		isLoading: true,
		error: null,
		events: []
	});

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
					setState({ isLoading: false, error: null, events: data });
				}
			} catch (e) {
				if (!cancelled) {
					setState({
						isLoading: false,
						error: e.message || 'Failed to load events',
						events: []
					});
				}
			}
		})();
		return () => {
			cancelled = true;
		};
	}, []);

	const now = new Date();
	const byStart = (a, b) => new Date(a.start) - new Date(b.start);
	const upcoming = state.events
		.filter((e) => new Date(e.end || e.start) >= now)
		.sort(byStart);
	const past = state.events
		.filter((e) => new Date(e.end || e.start) < now)
		.sort((a, b) => byStart(b, a));

	return { ...state, upcoming, past };
}

// Events can share an id (repeat sessions), so key on id + start.
export const eventKey = (event) => `${event.id}-${event.start}`;
