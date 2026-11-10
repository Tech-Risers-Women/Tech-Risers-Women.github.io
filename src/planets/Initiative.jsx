import styles from './initiative.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import { ExternalLink } from '../components/ui.jsx';
import { LINKS } from '../data/links';

function PlusIcon() {
	return (
		<svg className={styles.chev} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
			<path d="M12 5v14M5 12h14" />
		</svg>
	);
}

// Template for every initiative page.
//   name, eyebrow, lede, aside        – hero
//   steps: [{ title, text }]          – optional "How it works" cards
//   about: { title, paragraphs }      – optional longer description
//   faqs:  [{ question, answer: [] }] – answer is a list of paragraphs
//   cta:   { title, text, button }    – closing call to action
function Initiative({ initiative }) {
	const { name, eyebrow, lede, aside, heroButton, steps, about, faqs, cta } = initiative;

	return (
		<div>
			<PageHero
				back={{ to: '/#initiatives', label: 'All initiatives' }}
				eyebrow={eyebrow}
				title={name}
				lede={lede}
				aside={aside}
			>
				<div className={ui.btnRow}>
					<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnMustard}`}>
						{heroButton}
					</ExternalLink>
				</div>
			</PageHero>

			{steps && (
				<section className={styles.intro}>
					<div className={`${ui.container} ${styles.introInner}`}>
						<h2 className={styles.h2}>How it works</h2>
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

			{faqs?.length > 0 && (
				<section className={`${ui.sectionTight} ${ui.dots} ${ui.bordered}`}>
					<div className={`${ui.narrow} ${styles.faqInner}`}>
						<h2 className={styles.h2}>Questions</h2>
						<div className={styles.faqs}>
							{faqs.map((faq) => (
								<details key={faq.question} className={`${ui.card} ${styles.faq}`}>
									<summary>
										{faq.question}
										<PlusIcon />
									</summary>
									<div className={styles.answer}>
										{faq.answer.map((p) => (
											<p key={p.slice(0, 24)}>{p}</p>
										))}
									</div>
								</details>
							))}
						</div>
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
						Sign up
					</ExternalLink>
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
