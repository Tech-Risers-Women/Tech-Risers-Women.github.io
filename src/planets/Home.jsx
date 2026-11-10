import { Link } from 'react-router-dom';
import styles from './home.module.css';
import ui from '../components/ui.module.css';
import { ArrowIcon, ExternalLink, SectionHeading, toneClass } from '../components/ui.jsx';
import NextEventCard from '../moons/NextEventCard.jsx';
import { INITIATIVES } from '../data/initiatives';
import { LINKS } from '../data/links';
import sessionPhoto from '../media/session.jpg';

const STATS = [
	{ value: '15', label: 'countries and counting' },
	{ value: '1–15+', label: 'years in engineering - every stage welcome' },
	{ value: 'Online', label: 'join from anywhere in the world' },
	{ value: '4', label: 'initiatives to join' }
];

const PILLARS = [
	{
		title: 'A supportive community',
		text: 'Share experiences, insights and opportunities with women who get it.'
	},
	{
		title: 'Practical, hands-on skills',
		text: 'Workshops and collaborative projects in architecture, development and testing.'
	},
	{
		title: 'Continuous growth',
		text: 'Space to reflect on where you are, and guidance for where you want to go.'
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

const ROLES_TO_FILL = [
	{
		title: 'Lead / Co-Lead',
		text: 'Plan sessions, cover hosting and run onboarding. We’re looking for Bootcamp++ leads and a Group Coding co-lead.'
	},
	{
		title: 'Organiser',
		text: 'Join the core team: plan initiatives, create events and LinkedIn posts, and support the leads.'
	},
	{
		title: 'Mentor',
		text: 'Drop in when you can. Python, Java or JavaScript proficiency; TDD or architecture experience a plus.'
	},
	{
		title: 'Partner',
		text: 'Communities and companies who want to see more women promoted on the IC career track.'
	}
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
							&gt; Online · Global · Community-run
						</div>
						<h1 className={styles.heroTitle}>
							Practical skills for women{' '}
							<span className={styles.highlight}>rising</span> in tech.
						</h1>
						<p className={styles.heroLede}>
							Hands-on sessions in coding, architecture and career
							growth, supporting more women to climb the technical
							ladder, get promoted, and lead. Run by women in tech,
							for women in tech, wherever you are.
						</p>
						<div className={ui.btnRow}>
							<a href="#join" className={`${ui.btn} ${ui.btnMustard}`}>
								Join the community <ArrowIcon />
							</a>
							<ExternalLink
								href={LINKS.newsletter}
								className={`${ui.btn} ${ui.btnOutlineLight}`}
							>
								Read the newsletter
							</ExternalLink>
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

			{/* Initiatives */}
			<section id="initiatives" className={`${ui.section} ${ui.dots}`}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="01 / Initiatives"
						title="Find your way in"
						lede="Hands-on programmes for every stage — from writing cleaner code to designing systems and planning your next promotion."
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
				</div>
			</section>

			{/* Why we exist */}
			<section id="about" className={`${ui.section} ${ui.white} ${styles.ruled}`}>
				<div className={`${ui.container} ${styles.split}`}>
					<div className={styles.splitText}>
						<SectionHeading
							eyebrow="02 / Why we exist"
							title="A sense of belonging you may not have at work - yet."
							lede="Tech Risers Women is a community-driven space focused on practical skills and continuous professional growth. We build confidence, share experiences and opportunities, and make sure every woman here feels heard."
						/>
						<ol className={styles.pillars}>
							{PILLARS.map((p, idx) => (
								<li key={p.title} className={styles.pillar}>
									<span className={styles.pillarNum} aria-hidden="true">
										0{idx + 1}
									</span>
									<div>
										<div className={styles.pillarTitle}>{p.title}</div>
										<div className={styles.pillarText}>{p.text}</div>
									</div>
								</li>
							))}
						</ol>
						<Link to="/about" className={styles.textLink}>
							More about us <ArrowIcon size={16} />
						</Link>
					</div>
					<div className={styles.splitMedia}>
						<div className={styles.photoFrame}>
							<img
								src={sessionPhoto}
								alt="Six Tech Risers Women members smiling on a Zoom call during one of our online sessions"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Who you'll meet */}
			<section id="community" className={`${ui.section} ${ui.dots}`}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="03 / Who you’ll meet"
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
						eyebrow="04 / Member voices"
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

			{/* Get involved */}
			<section id="get-involved" className={`${ui.section} ${ui.dotsDark}`}>
				<div className={`${ui.container} ${styles.voices}`}>
					<SectionHeading
						eyebrow="05 / Get involved"
						title="Help more women stay, grow and lead"
						lede="Share your skills, practise your own mentoring and facilitation, and build a global network of women engineers."
						onNavy
					/>
					<div className={styles.roleGrid}>
						{ROLES_TO_FILL.map((r) => (
							<div key={r.title} className={styles.role}>
								<h3 className={styles.roleTitle}>{r.title}</h3>
								<p>{r.text}</p>
							</div>
						))}
					</div>
					<div className={ui.btnRow}>
						<Link to="/work-with-us" className={`${ui.btn} ${ui.btnMustard}`}>
							Volunteer with us
						</Link>
						<Link to="/work-with-us" className={`${ui.btn} ${ui.btnOutlineLight}`}>
							Partner with us
						</Link>
					</div>
				</div>
			</section>

			{/* Join + newsletter */}
			<section id="join" className={ui.section}>
				<div className={`${ui.container} ${styles.joinGrid}`}>
					<div className={`${styles.panel} ${styles.panelMustard} light-surface`}>
						<h2 className={styles.panelTitle}>Join the community</h2>
						<p>
							Curious? Come along to one of our sessions. Tell us a
							little about yourself and we’ll send you everything you
							need.
						</p>
						<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnNavy}`}>
							Fill in the join form
						</ExternalLink>
					</div>
					<div id="newsletter" className={`${styles.panel} ${ui.card}`}>
						<h2 className={styles.panelTitle}>Get the newsletter</h2>
						<p className={styles.muted}>
							Session recaps, new initiatives and opportunities from
							across the community — on LinkedIn.
						</p>
						<ExternalLink href={LINKS.newsletter} className={`${ui.btn} ${ui.btnOutline}`}>
							Subscribe on LinkedIn
						</ExternalLink>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
