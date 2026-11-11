import { Link } from 'react-router-dom';
import styles from './initiative.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import UpcomingEvents from '../moons/UpcomingEvents';
import FaqList from '../components/FaqList';
import { ArrowIcon, ExternalLink } from '../components/ui.jsx';
import { INITIATIVES, getInitiativeById } from '../data/initiatives';
import { LINKS } from '../data/links';

// Template for every programme page.
//   id                                – entry in src/data/initiatives.js
//                                       (at-a-glance facts and events)
//   name, eyebrow, lede, aside        – hero
//   steps: [{ title, text }]          – optional "How it works" cards
//   about: { title, paragraphs }      – optional longer description
//   faqs:  [{ question, answer: [] }] – answer is a list of paragraphs
//   cta:   { title, text, button }    – closing call to action
function Initiative({ initiative }) {
	const { id, name, eyebrow, lede, aside, heroButton, steps, about, faqs, cta } = initiative;
	const data = getInitiativeById(id);
	const others = INITIATIVES.filter((i) => i.id !== id);

	return (
		<div>
			<PageHero
				back={{ to: '/programmes', label: 'All programmes' }}
				eyebrow={eyebrow}
				title={name}
				lede={lede}
				aside={aside}
			>
				<div className={ui.btnRow}>
					<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnMustard}`}>
						{heroButton}
					</ExternalLink>
					<a href="#sessions" className={`${ui.btn} ${ui.btnOutlineLight}`}>
						Upcoming sessions
					</a>
				</div>
			</PageHero>

			<section className={styles.intro}>
				<div className={`${ui.container} ${styles.introInner}`}>
					<h2 className={styles.h2}>At a glance</h2>
					<div className={styles.glance}>
						<div className={`${ui.card} ${styles.fact}`}>
							<span className={styles.factLabel}>Who it’s for</span>
							<p>{data.audience}</p>
						</div>
						<div className={`${ui.card} ${styles.fact}`}>
							<span className={styles.factLabel}>What you’ll learn</span>
							<ul>
								{data.learn.map((l) => (
									<li key={l}>{l}</li>
								))}
							</ul>
						</div>
						<div className={`${ui.card} ${styles.fact}`}>
							<span className={styles.factLabel}>It helps when</span>
							<p>{data.solves}</p>
						</div>
						<div className={`${ui.card} ${styles.fact}`}>
							<span className={styles.factLabel}>How it works</span>
							<p>{data.format}</p>
							<span className={styles.factLabel}>Cost</span>
							<span className={styles.free}>Free</span>
						</div>
					</div>
				</div>
			</section>

			{steps && (
				<section className={styles.intro}>
					<div className={`${ui.container} ${styles.introInner}`}>
						<h2 className={styles.h2}>Your path</h2>
						<ol className={styles.steps}>
							{steps.map((s, idx) => (
								<li key={s.title} className={`${ui.card} ${styles.step}`}>
									<span className={styles.stepNum}>0{idx + 1}</span>
									<span className={styles.stepTitle}>{s.title}</span>
									<p>{s.text}</p>
								</li>
							))}
						</ol>
					</div>
				</section>
			)}

			{about && (
				<section className={styles.intro}>
					<div className={`${ui.container} ${styles.introInner}`}>
						<div className={`${ui.card} ${styles.about}`}>
							<h2 className={styles.h2}>{about.title}</h2>
							{about.paragraphs.map((p) => (
								<p key={p.slice(0, 24)}>{p}</p>
							))}
						</div>
					</div>
				</section>
			)}

			<section
				id="sessions"
				className={`${ui.sectionTight} ${ui.dots} ${ui.bordered}`}
			>
				<div className={`${ui.container} ${styles.faqInner}`}>
					<h2 className={styles.h2}>Upcoming {data.shortName} sessions</h2>
					<UpcomingEvents initiative={data.eventKey} />
					<Link to="/events" className={`${ui.btn} ${ui.btnOutline}`} style={{ alignSelf: 'flex-start' }}>
						All events <ArrowIcon size={16} />
					</Link>
				</div>
			</section>

			{faqs?.length > 0 && (
				<section className={`${ui.sectionTight} ${ui.bordered}`}>
					<div className={`${ui.narrow} ${styles.faqInner}`}>
						<h2 className={styles.h2}>Questions</h2>
						<FaqList faqs={faqs} />
					</div>
				</section>
			)}

			<section className={styles.ctaWrap}>
				<div className={`${ui.container} ${styles.cta} light-surface`}>
					<div className={styles.ctaText}>
						<h2 className={ui.h2Small}>{cta.title}</h2>
						<p>{cta.text}</p>
					</div>
					<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnNavy}`}>
						Join the community
					</ExternalLink>
				</div>
			</section>

			<section className={styles.ctaWrap}>
				<div className={`${ui.container} ${styles.faqInner}`}>
					<h2 className={ui.h2Small}>Explore other programmes</h2>
					<div className={styles.others}>
						{others.map((o) => (
							<Link key={o.id} to={o.route} className={`${ui.btn} ${ui.btnOutline}`}>
								{o.name} <ArrowIcon size={16} />
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

// Historical photo in a framed card, used as the hero aside.
// `uncropped` shows the whole image at its own shape instead of filling
// the landscape frame (for portrait photos that would otherwise lose detail).
export function HeroPhoto({ src, alt, uncropped = false }) {
	return (
		<figure className={`${styles.photo} ${uncropped ? styles.photoUncropped : ''}`}>
			<img src={src} alt={alt} />
		</figure>
	);
}

export default Initiative;
