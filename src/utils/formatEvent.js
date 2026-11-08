// All event times are shown in UK time, whatever the visitor's timezone.
const UK = 'Europe/London';

const fmt = (iso, options) =>
	new Date(iso).toLocaleString('en-GB', { timeZone: UK, ...options });

export const weekdayShort = (iso) =>
	fmt(iso, { weekday: 'short' }).toUpperCase();
export const dayOfMonth = (iso) => fmt(iso, { day: '2-digit' });
export const monthShort = (iso) => fmt(iso, { month: 'short' });
export const monthYear = (iso) =>
	fmt(iso, { month: 'long', year: 'numeric' }).toUpperCase();
export const longDate = (iso) =>
	fmt(iso, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
export const time = (iso) =>
	fmt(iso, { hour: '2-digit', minute: '2-digit', hour12: false });

export const timeRange = (event) =>
	event.end ? `${time(event.start)} – ${time(event.end)}` : time(event.start);
