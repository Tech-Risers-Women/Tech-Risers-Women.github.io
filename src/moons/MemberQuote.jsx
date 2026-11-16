import styles from './memberQuote.module.css';
import ui from '../components/ui.module.css';

export function QuoteMark() {
	return (
		<svg width="34" height="26" viewBox="0 0 34 26" aria-hidden="true">
			<path
				d="M0 26V14C0 6 4 1 12 0l1 4c-4 1-6 4-6 8h6v14H0zm20 0V14c0-8 4-13 12-14l1 4c-4 1-6 4-6 8h6v14H20z"
				fill="var(--mustard)"
			/>
		</svg>
	);
}

// One member quote in a card. `className` adds layout from the caller.
function MemberQuote({ text, className = '' }) {
	return (
		<figure className={`${ui.card} ${styles.quote} ${className}`}>
			<QuoteMark />
			<blockquote>{text}</blockquote>
			<figcaption className={styles.caption}>Tech Risers Women member</figcaption>
		</figure>
	);
}

// A grid of quote cards.
export function MemberQuotes({ quotes }) {
	return (
		<div className={styles.grid}>
			{quotes.map((q) => (
				<MemberQuote key={q.text.slice(0, 24)} text={q.text} />
			))}
		</div>
	);
}

export default MemberQuote;
