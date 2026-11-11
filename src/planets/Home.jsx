import { Link } from 'react-router-dom';
import styles from './home.module.css';
import ui from '../components/ui.module.css';
import { ArrowIcon, ExternalLink, SectionHeading, toneClass } from '../components/ui.jsx';
import NextEventCard from '../moons/NextEventCard.jsx';
import UpcomingEvents from '../moons/UpcomingEvents.jsx';
import { INITIATIVES } from '../data/initiatives';
import { LINKS } from '../data/links';
import sessionPhoto from '../media/session.webp';

const STATS = [
	{ value: '15', label: 'countries and counting' },
	{ value: '1–15+', label: 'years in engineering - every stage welcome' },
	{ value: 'Online', label: 'join from anywhere in the world' },
	{ value: '4', label: 'free programmes to join' }
];

// What members come away with.
const OUTCOMES = [
	'Develop practical, industry-relevant technical skills',
	'Grow your confidence and professional visibility',
	'Prepare for more senior technical responsibilities',
	'Connect with peers who understand your challenges',
	'Learn from experienced engineers and architects',
	'Share your knowledge with the wider women in tech community'
];

// The three pillars of Tech Risers Women, plus how they come together.
const PILLARS = [
	{
		title: 'Technical skills',
		tagline: 'Learn by doing',
		text: 'Coding, Test Driven Development, software architecture, system design, algorithms and technical interview practice.',
		link: { to: '/programmes', label: 'Explore programmes' }
	},
	{
		title: 'Peer community',
		tagline: 'Grow together',
		text: 'Peer learning, knowledge sharing and collaboration, with guidance from industry-experienced engineers and leaders.',
		link: { to: '/join-us', label: 'Join the community' }
	},
	{
		title: 'Career growth',
		tagline: 'Develop your potential',
		text: 'Career planning and progression, technical leadership, and interview and negotiation preparation.',
		link: { to: '/career-corner', label: 'About Career Corner' }
	},
	{
		title: 'Programme events',
		tagline: 'Practise and connect',
		text: 'Regular hands-on online sessions where you solve real technical problems with women who understand your journey.',
		link: { to: '/events', label: 'Discover events' }
	}
];

const EXPERIENCE = [
	{ pct: 19, label: 'not yet in engineering', bg: 'var(--sand)', fg: 'var(--navy)' },
	{ pct: 19, label: 'under 2 years', bg: 'var(--mustard)', fg: 'var(--navy)' },
	{ pct: 29, label: '2–5 years', bg: 'var(--slate)', fg: 'var(--navy-deep)' },
	{ pct: 21, label: '5–10 years', bg: 'var(--navy-mid)', fg: 'var(--cream)' },
	{ pct: 12, label: '10+ years', bg: 'var(--navy-deep)', fg: 'var(--mustard)' }
];

const ROLES = [
	'Software Engineer',
	'Data Engineer',
	'Frontend & Backend Engineer',
	'Lead Architect',
	'iOS Developer',
	'Solution Architect',
	'Enterprise Architect',
	'Tech Lead',
	'Staff Data Engineer',
	'Principal Data Scientist',
	'Cloud Engineer',
	'QA & Test Lead',
	'Security Engineer',
	'Product Manager',
	'Students',
	'Bootcamp grads',
	'Career changers'
];

const COUNTRIES = [
	'United Kingdom',
	'Spain',
	'Germany',
	'Sweden',
	'France',
	'Belgium',
	'India',
	'Malaysia',
	'Azerbaijan',
	'Nigeria',
	'South Africa',
	'United States',
	'Canada',
	'Mexico',
	'Australia'
];

// Real member quotes. Please don't edit them.
const QUOTES = [
	'This experience not only enriched my technical skills but also boosted my confidence in participating in architectural discussions. Kudos to the entire team for creating such a nurturing community!',
	'I’m really glad that I woke up that morning and went to participate in that kata. Helped me a ton at system design interview two weeks later.',
	'Kudos to Sarah, Nele and the entire team to organize these TDD coding sessions. They are very well organized and help us learn so much. This has helped me gain confidence while coding.',
	'The session exceeded my expectations, in that I also expanded my professional network and even gained a potential mentor.'
];

const SHORT_QUOTES = [
	'It’s a lovely way to practice in a friendly environment.',
	'A great way to practice system design skills and learn from others.',
	'I learned more about how to ask better questions.',
	'I wish there were more sessions!'
];

function QuoteMark() {
	return (
		<svg width="34" height="26" viewBox="0 0 34 26" aria-hidden="true">
			<path
				d="M0 26V14C0 6 4 1 12 0l1 4c-4 1-6 4-6 8h6v14H0zm20 0V14c0-8 4-13 12-14l1 4c-4 1-6 4-6 8h6v14H20z"
				fill="var(--mustard)"
			/>
		</svg>
	);
}

function Home() {
	return (
		<div className={styles.home}>
			{/* Hero */}
			<section className={styles.hero}>
				<div className={styles.heroInner}>
					<div className={styles.heroMain}>
						<div className={styles.heroEyebrow}>
							&gt; Online · Global · Free
						</div>
						<h1 className={styles.heroTitle}>
							Grow your technical confidence. Strengthen your skills.{' '}
							<span className={styles.highlight}>Rise together.</span>
						</h1>
						<p className={styles.heroLede}>
							A peer-to-peer community for women in software
							engineering and data. Practise, learn and solve real
							technical problems alongside women who understand your
							journey.
						</p>
						<div className={ui.btnRow}>
							<ExternalLink
								href={LINKS.joinForm}
								className={`${ui.btn} ${ui.btnMustard}`}
							>
								Join the community <ArrowIcon />
							</ExternalLink>
							<Link
								to="/programmes"
								className={`${ui.btn} ${ui.btnOutlineLight}`}
							>
								Explore programmes
							</Link>
							<Link to="/events" className={`${ui.btn} ${ui.btnOutlineLight}`}>
								Discover events
							</Link>
						</div>
					</div>
					<NextEventCard />
				</div>
			</section>

			{/* Stats */}
			<section className={styles.statsWrap} aria-label="Tech Risers Women in numbers">
				<dl className={styles.stats}>
					{STATS.map((s) => (
						<div key={s.value} className={styles.stat}>
							<dt className={styles.statLabel}>{s.label}</dt>
							<dd className={styles.statValue}>{s.value}</dd>
						</div>
					))}
				</dl>
			</section>

			{/* What we are */}
			<section id="about" className={ui.section}>
				<div className={`${ui.container} ${styles.split}`}>
					<div className={styles.splitText}>
						<SectionHeading
							eyebrow="01 / Who we are"
							title="Your technical growth doesn’t have to happen alone."
							lede="Tech Risers Women is a peer-to-peer professional development community that helps women in software engineering and data grow their technical expertise through practical learning and problem-solving. That builds confidence, and supports real career progression through peer collaboration and shared experience."
						/>
						<p className={styles.callout}>
							We’re not just another networking community. We’re an
							online place to practise, learn, solve real technical
							problems, and grow alongside women who understand your
							journey.
						</p>
						<Link to="/about" className={styles.textLink}>
							More about us <ArrowIcon size={16} />
						</Link>
					</div>
					<div className={styles.splitMedia}>
						<div className={styles.photoFrame}>
							<img
								src={sessionPhoto}
								alt="Six Tech Risers Women members smiling on a Zoom call during one of our online sessions"
								width="1200"
								height="1018"
							/>
						</div>
					</div>
				</div>
				<div className={`${ui.container} ${styles.outcomes}`}>
					<h3 className={styles.h3}>Here, you can:</h3>
					<ul className={styles.outcomeList}>
						{OUTCOMES.map((o) => (
							<li key={o}>{o}</li>
						))}
					</ul>
				</div>
			</section>

			{/* Pillars */}
			<section id="pillars" className={`${ui.section} ${ui.white} ${styles.ruled}`}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="02 / What you can achieve"
						title="Explore what you can achieve"
						lede="Practical technical development for professional women, built on three pillars and brought together in hands-on sessions."
					/>
					<ol className={styles.pillarGrid}>
						{PILLARS.map((p, idx) => (
							<li key={p.title} className={`${ui.card} ${styles.pillarCard}`}>
								<span className={styles.pillarNum} aria-hidden="true">
									0{idx + 1}
								</span>
								<h3 className={styles.pillarTitle}>
									{p.title}
									<span className={styles.pillarTagline}>{p.tagline}</span>
								</h3>
								<p className={styles.pillarText}>{p.text}</p>
								<Link to={p.link.to} className={styles.learnMore}>
									{p.link.label} <ArrowIcon size={16} />
								</Link>
							</li>
						))}
					</ol>
				</div>
			</section>

			{/* Programmes */}
			<section id="programmes" className={`${ui.section} ${ui.dots}`}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="03 / Programmes"
						title="Find your way in"
						lede="Hands-on programmes for every stage, from writing cleaner code to designing systems and planning your next promotion. All free, all online."
					/>
					<div className={styles.initiativeGrid}>
						{INITIATIVES.map((i) => (
							<Link
								key={i.id}
								to={i.route}
								className={`${ui.card} ${ui.cardHover} ${styles.initiativeCard}`}
							>
								<div className={styles.initiativeTop}>
									<span
										className={`${styles.glyph} ${
											i.glyphStyle === 'mustard' ? styles.glyphMustard : ''
										}`}
										aria-hidden="true"
									>
										{i.glyph}
									</span>
									<span className={`${ui.tag} ${toneClass[i.tone]}`}>
										{i.frequency}
									</span>
								</div>
								<h3 className={styles.initiativeName}>{i.name}</h3>
								<p className={styles.initiativeSummary}>{i.summary}</p>
								<span className={styles.learnMore}>
									Learn more <ArrowIcon size={16} />
								</span>
							</Link>
						))}
					</div>
					<Link to="/programmes" className={styles.textLink}>
						Not sure where to start? See which programme fits your career
						stage <ArrowIcon size={16} />
					</Link>
				</div>
			</section>

			{/* Upcoming events */}
			<section id="events" className={`${ui.section} ${ui.white} ${styles.ruled}`}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="04 / Coming up"
						title="Upcoming events"
						lede="Pick a session and register. Times are shown in your time zone."
					/>
					<UpcomingEvents limit={3} />
					<Link to="/events" className={`${ui.btn} ${ui.btnOutline} ${styles.selfStart}`}>
						See all events <ArrowIcon size={16} />
					</Link>
				</div>
			</section>

			{/* Who you'll meet */}
			<section id="community" className={`${ui.section} ${ui.dots}`}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="05 / Who you’ll meet"
						title="Career changers to principal engineers, across five continents"
						lede="Our members are software and data engineers, students, bootcamp grads, architects and tech leads. Wherever you are on the ladder, you’ll find people who’ve been where you are and people figuring it out with you."
					/>

					<div className={`${ui.card} ${styles.experience}`}>
						<div className={styles.experienceHead}>
							<h3 className={styles.h3}>Years working in engineering</h3>
							<span className={styles.small}>Current experience range</span>
						</div>
						<div
							className={styles.bar}
							role="img"
							aria-label="Members by experience: not yet in engineering 19%, under 2 years 19%, 2 to 5 years 29%, 5 to 10 years 21%, 10 years or more 12%"
						>
							{EXPERIENCE.map((e) => (
								<div
									key={e.label}
									className={styles.barSegment}
									style={{ flex: `${e.pct} 1 0`, background: e.bg, color: e.fg }}
								>
									{e.pct}%
								</div>
							))}
						</div>
						<ul className={styles.legend}>
							{EXPERIENCE.map((e) => (
								<li key={e.label}>
									<span
										className={styles.swatch}
										style={{ background: e.bg }}
										aria-hidden="true"
									/>
									<span>
										<strong>{e.pct}%</strong> {e.label}
									</span>
								</li>
							))}
						</ul>
					</div>

					<div className={styles.twoUp}>
						<div className={`${ui.card} ${styles.tagPanel}`}>
							<h3 className={styles.h3Small}>Some of the roles in the room</h3>
							<ul className={styles.chips}>
								{ROLES.map((r) => (
									<li key={r} className={styles.chip}>
										{r}
									</li>
								))}
							</ul>
						</div>
						<div className={`${styles.tagPanel} ${styles.tagPanelNavy}`}>
							<h3 className={styles.h3Small}>Joining from 15 countries and counting</h3>
							<ul className={styles.chips}>
								{COUNTRIES.map((c) => (
									<li key={c} className={`${styles.chip} ${styles.chipOnNavy}`}>
										{c}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Member voices */}
			<section className={`${ui.section} ${ui.white} ${ui.bordered}`}>
				<div className={`${ui.container} ${styles.voices}`}>
					<SectionHeading
						eyebrow="06 / Member voices"
						title="In their words"
						lede="What members told us after their sessions."
					/>
					<div className={styles.quoteGrid}>
						{QUOTES.map((q) => (
							<figure key={q.slice(0, 20)} className={`${ui.card} ${styles.quote}`}>
								<QuoteMark />
								<blockquote>{q}</blockquote>
							</figure>
						))}
					</div>
					<ul className={styles.shortQuotes}>
						{SHORT_QUOTES.map((q) => (
							<li key={q}>“{q}”</li>
						))}
					</ul>
				</div>
			</section>

			{/* Get started */}
			<section id="join" className={`${ui.section} ${ui.dotsDark}`}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="07 / Get started"
						title="Get started and grow with us"
						onNavy
					/>
					<div className={styles.joinGrid}>
						<div className={`${styles.panel} ${styles.panelMustard} light-surface`}>
							<h2 className={styles.panelTitle}>Join the community</h2>
							<p>
								Membership is free. Tell us a little about yourself
								and we’ll send you everything you need to take part.
							</p>
							<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnNavy}`}>
								Fill in the join form
							</ExternalLink>
						</div>
						<div id="newsletter" className={`${styles.panel} ${ui.card}`}>
							<h2 className={styles.panelTitle}>Get the newsletter</h2>
							<p className={styles.muted}>
								Session recaps, new programmes and opportunities from
								across the community, on LinkedIn.
							</p>
							<ExternalLink href={LINKS.newsletter} className={`${ui.btn} ${ui.btnOutline}`}>
								Subscribe on LinkedIn
							</ExternalLink>
						</div>
						<div className={`${styles.panel} ${ui.card}`}>
							<h2 className={styles.panelTitle}>Got questions?</h2>
							<p className={styles.muted}>
								Find quick answers in our FAQs, or send us your
								question and we’ll get back to you.
							</p>
							<div className={ui.btnRow}>
								<Link to="/faq" className={`${ui.btn} ${ui.btnOutline}`}>
									Read the FAQs
								</Link>
								<Link to="/contact" className={`${ui.btn} ${ui.btnOutline}`}>
									Contact us
								</Link>
							</div>
						</div>
					</div>
					<p className={styles.giveBack}>
						Experienced engineer? Grow your own leadership as a{' '}
						<Link to="/join-us#volunteer">mentor, organiser or lead</Link>.
						Company or community?{' '}
						<Link to="/join-us#partner">Partner with us</Link>.
					</p>
				</div>
			</section>
		</div>
	);
}

export default Home;
