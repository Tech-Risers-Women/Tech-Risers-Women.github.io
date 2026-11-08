import ui from './ui.module.css';

export const toneClass = {
	green: ui.tagGreen,
	amber: ui.tagAmber,
	grey: ui.tagGrey
};

export function ArrowIcon({ size = 18 }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2.2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M5 12h14M13 6l6 6-6 6" />
		</svg>
	);
}

export function SectionHeading({ eyebrow, title, lede, onNavy = false, as = 'h2' }) {
	const Heading = as;
	return (
		<div className={ui.heading}>
			{eyebrow && (
				<div
					className={`${ui.eyebrow} ${onNavy ? ui.eyebrowOnNavy : ''}`}
				>
					{eyebrow}
				</div>
			)}
			<Heading className={ui.h2}>{title}</Heading>
			{lede && (
				<p className={`${ui.lede} ${onNavy ? ui.ledeOnNavy : ''}`}>
					{lede}
				</p>
			)}
		</div>
	);
}

// External link that opens in a new tab.
export function ExternalLink({ href, className, children, ...rest }) {
	return (
		<a
			href={href}
			className={className}
			target="_blank"
			rel="noreferrer"
			{...rest}
		>
			{children}
		</a>
	);
}
