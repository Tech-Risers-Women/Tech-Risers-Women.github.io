import { Link } from 'react-router-dom';
import styles from './page.module.css';
import own from './joinUs.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import { ArrowIcon, ExternalLink, SectionHeading } from '../components/ui.jsx';
import { LINKS } from '../data/links';

const BENEFITS = [
	'Develop practical, industry-relevant technical skills',
	'Improve your confidence and professional visibility',
	'Prepare for more senior technical responsibilities',
	'Connect with peers who understand your professional challenges',
	'Learn from experienced engineers, architects and leaders',
	'Share your knowledge and contribute to the women in tech community'
];

const STEPS = [
	{
		title: 'Fill in the join form',
		text: 'Tell us a little about yourself and which programmes interest you. It takes a few minutes.'
	},
	{
		title: 'Get the details',
		text: 'We’ll send you everything you need, including how sessions run and the joining links.'
	},
	{
		title: 'Take part',
		text: 'Register for sessions on the Events page, practise with peers, and grow at your own pace.'
	}
];

const WAYS = [
	{
		title: 'Attend sessions',
		text: 'Code, design systems and plan your career in hands-on programme sessions.',
		link: { to: '/programmes', label: 'Explore programmes' }
	},
	{
		title: 'Share and discuss',
		text: 'Join the conversation on LinkedIn: share what you learned, repost sessions and help other women find us.',
		link: { href: LINKS.linkedin, label: 'Follow us on LinkedIn' }
	},
	{
		title: 'Refer a friend',
		text: 'Know a woman in software or data who would love this? Send her our way.',
		link: { href: LINKS.joinForm, label: 'Share the join form' }
	},
	{
		title: 'Contribute',
		text: 'Speak, run a workshop or share your knowledge with the community. Get in touch with your idea.',
		link: { href: LINKS.email, label: 'Email us your idea', sameTab: true }
	}
];

const ROLES = [
	{
		title: 'Lead / Co-Lead',
		text: 'Make sure sessions are planned and hosting is covered, run onboarding and learning sessions, and create ad hoc coding sessions. We’re looking for Bootcamp++ leads and another Group Coding co-lead.',
		gain: 'Experience owning a programme end to end, and leading a team of volunteers.'
	},
	{
		title: 'Organiser',
		text: 'Join the core organising team: plan initiatives, create events and LinkedIn posts, and support the programme leads.',
		gain: 'Experience planning, promoting and running online events for a global audience.'
	},
	{
		title: 'Mentor',
		text: 'Share your expertise during sessions. Mentors are proficient in Python, Java or JavaScript, ideally with TDD experience, or are experienced engineers or architects who can review code and designs. Ad hoc, so perfect if you have little time.',
		gain: 'Coaching and review practice, and a reputation as someone others learn from.'
	}
];

// What volunteers get out of leading, mentoring and organising.
const GAINS = [
	{
		title: 'Practise leadership safely',
		text: 'Facilitate sessions, guide discussions and make calls in a supportive space, before you have to do it at work.'
	},
	{
		title: 'Build evidence for promotion',
		text: 'Mentoring, facilitation and technical influence are what senior IC roles ask for. You’ll have real examples to point to.'
	},
	{
		title: 'Deepen your own expertise',
		text: 'Explaining a design or reviewing someone else’s code is one of the best ways to sharpen your own understanding.'
	},
	{
		title: 'Grow your visibility and network',
		text: 'Get known across a global network of women engineers, from career changers to principal engineers.'
	}
];

function WayLink({ link }) {
	const content = (
		<>
			{link.label} <ArrowIcon size={16} />
		</>
	);
	if (link.to) {
		return (
			<Link to={link.to} className={own.wayLink}>
				{content}
			</Link>
		);
	}
	if (link.sameTab) {
		return (
			<a href={link.href} className={own.wayLink}>
				{content}
			</a>
		);
	}
	return (
		<ExternalLink href={link.href} className={own.wayLink}>
			{content}
		</ExternalLink>
	);
}

function JoinUs() {
	return (
		<div>
			<PageHero
				eyebrow="Join us · Free"
				title="Your technical growth doesn’t have to happen alone"
				lede="Join a peer-to-peer community of women in software engineering and data who practise, learn and solve real technical problems together. Become a member, share your expertise, or partner with us."
			>
				<div className={ui.btnRow}>
					<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnMustard}`}>
						Become a member <ArrowIcon />
					</ExternalLink>
					<a href="#volunteer" className={`${ui.btn} ${ui.btnOutlineLight}`}>
						Volunteer or mentor
					</a>
					<a href="#partner" className={`${ui.btn} ${ui.btnOutlineLight}`}>
						Partner with us
					</a>
				</div>
			</PageHero>

			{/* Membership */}
			<section id="membership" className={own.section}>
				<div className={`${ui.container} ${own.split}`}>
					<div className={own.splitText}>
						<SectionHeading
							eyebrow="01 / Membership"
							title="What you get as a member"
							lede="Membership is free. As a member you can take part in any of our programmes and hear about new sessions first."
						/>
						<ul className={own.benefits}>
							{BENEFITS.map((b) => (
								<li key={b}>{b}</li>
							))}
						</ul>
					</div>
					<div className={`${ui.card} ${own.steps}`}>
						<h3 className={own.stepsTitle}>How to join</h3>
						<ol>
							{STEPS.map((s, idx) => (
								<li key={s.title}>
									<span className={own.stepNum} aria-hidden="true">
										0{idx + 1}
									</span>
									<div>
										<div className={own.stepTitle}>{s.title}</div>
										<p>{s.text}</p>
									</div>
								</li>
							))}
						</ol>
						<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnMustard}`}>
							Fill in the join form
						</ExternalLink>
					</div>
				</div>
			</section>

			{/* Participation */}
			<section className={`${ui.section} ${ui.dots} ${ui.bordered}`}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="02 / Participate"
						title="Ways to take part"
						lede="The more you put in, the more you grow, and the more you help other women rise too."
					/>
					<div className={styles.cards}>
						{WAYS.map((w) => (
							<div key={w.title} className={`${ui.card} ${styles.card}`}>
								<h3>{w.title}</h3>
								<p>{w.text}</p>
								<WayLink link={w.link} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Volunteer */}
			<section id="volunteer" className={`${ui.section} ${ui.dotsDark}`}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="03 / Volunteer and mentor"
						title="Grow as a leader by helping others rise"
						lede="Leading, mentoring or organising with Tech Risers Women is a place to practise the skills senior technical roles ask for, while you help more women stay, grow and lead. New to this? We’re here to support you."
						onNavy
					/>
					<ul className={own.gains}>
						{GAINS.map((g) => (
							<li key={g.title}>
								<span className={own.gainTitle}>{g.title}</span>
								<span>{g.text}</span>
							</li>
						))}
					</ul>
					<h3 className={own.rolesHeading}>Roles we’re looking for</h3>
					<div className={own.roleGrid}>
						{ROLES.map((r) => (
							<div key={r.title} className={own.role}>
								<h4 className={own.roleTitle}>{r.title}</h4>
								<p>{r.text}</p>
								<p className={own.roleGain}>
									<strong>You’ll gain:</strong> {r.gain}
								</p>
							</div>
						))}
					</div>
					<div className={ui.btnRow}>
						<ExternalLink href={LINKS.volunteerForm} className={`${ui.btn} ${ui.btnMustard}`}>
							Volunteer with us
						</ExternalLink>
					</div>
				</div>
			</section>

			{/* Partner and sponsor */}
			<section id="partner" className={ui.section}>
				<div className={`${ui.container} ${own.split}`}>
					<div className={own.splitText}>
						<SectionHeading
							eyebrow="04 / Partner and sponsor"
							title="Invest in technical talent development"
							lede="We partner with communities and companies who want to see more women promoted on the individual contributor career track."
						/>
						<p className={own.text}>
							As a partner or sponsor, you’ll reach an audience of women
							software and data engineers, from early career to principal
							level, who are actively developing their technical and
							leadership skills, and you’ll contribute directly to their
							growth.
						</p>
						<h3 className={own.h3}>Together, we want to see:</h3>
						<ul className={own.benefits}>
							<li>more women stay in tech</li>
							<li>more women get promoted</li>
							<li>more women technical leaders</li>
						</ul>
					</div>
					<div className={`${own.partnerPanel} light-surface`}>
						<h3 className={own.stepsTitle}>Let’s talk</h3>
						<p>
							Tell us about your community or company and how you’d like
							to work together, whether that’s sharing across our
							audiences, hosting a session or sponsoring a programme.
						</p>
						<div className={ui.btnRow}>
							<ExternalLink href={LINKS.partnerForm} className={`${ui.btn} ${ui.btnNavy}`}>
								Partner with us
							</ExternalLink>
							<Link to="/contact" className={`${ui.btn} ${ui.btnOutline}`}>
								Contact us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default JoinUs;
