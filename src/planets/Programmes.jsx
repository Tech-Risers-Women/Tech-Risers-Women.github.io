import { Link } from 'react-router-dom';
import styles from './programmes.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import { ArrowIcon, ExternalLink, SectionHeading, toneClass } from '../components/ui.jsx';
import { AUDIENCES, INITIATIVES, getInitiativeById } from '../data/initiatives';
import { LINKS } from '../data/links';

export function AudienceCards() {
	return (
		<div className={styles.audiences}>
			{AUDIENCES.map((a) => (
				<div key={a.title} className={`${ui.card} ${styles.audience}`}>
					<h3 className={styles.audienceTitle}>{a.title}</h3>
					<p className={styles.need}>{a.need}</p>
					<p>{a.promise}</p>
					<div className={styles.startWith}>
						<span className={styles.label}>Start with</span>
						<ul>
							{a.programmes.map((id) => {
								const p = getInitiativeById(id);
								return (
									<li key={id}>
										<Link to={p.route}>
											{p.name} <ArrowIcon size={14} />
										</Link>
									</li>
								);
							})}
							{a.extra && (
								<li>
									<Link to={a.extra.to}>
										{a.extra.label} <ArrowIcon size={14} />
									</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
}

function Programmes() {
	return (
		<div>
			<PageHero
				eyebrow="Programmes · Free · Online"
				title="Learn by doing, alongside women who get it"
				lede="Our programmes help women in software and data build practical, industry-relevant skills: coding, system design, software architecture and career growth. Every session is hands-on, peer-led and free."
			>
				<div className={ui.btnRow}>
					<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnMustard}`}>
						Join the community <ArrowIcon />
					</ExternalLink>
					<Link to="/events" className={`${ui.btn} ${ui.btnOutlineLight}`}>
						Discover events
					</Link>
				</div>
			</PageHero>

			<section className={styles.section}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="01 / Where to start"
						title="Wherever you are in your career"
						lede="Not sure which programme is for you? Here’s where members at each stage usually begin. You can join as many as you like."
					/>
					<AudienceCards />
				</div>
			</section>

			<section className={`${ui.section} ${ui.dots} ${ui.bordered}`}>
				<div className={`${ui.container} ${ui.stack}`}>
					<SectionHeading
						eyebrow="02 / Programmes"
						title="Four ways to grow"
					/>
					<div className={styles.list}>
						{INITIATIVES.map((i) => (
							<article key={i.id} className={`${ui.card} ${styles.programme}`}>
								<header className={styles.programmeHead}>
									<span
										className={`${styles.glyph} ${
											i.glyphStyle === 'mustard' ? styles.glyphMustard : ''
										}`}
										aria-hidden="true"
									>
										{i.glyph}
									</span>
									<div className={styles.programmeTitle}>
										<h3 className={styles.name}>
											<Link to={i.route}>{i.name}</Link>
										</h3>
										<div className={styles.tags}>
											<span className={ui.tag}>{i.pillar}</span>
											<span className={`${ui.tag} ${toneClass[i.tone]}`}>
												{i.frequency}
											</span>
											<span className={`${ui.tag} ${ui.tagGreen}`}>Free</span>
										</div>
									</div>
								</header>
								<dl className={styles.facts}>
									<div>
										<dt>Who it’s for</dt>
										<dd>{i.audience}</dd>
									</div>
									<div>
										<dt>What you’ll learn</dt>
										<dd>
											<ul>
												{i.learn.map((l) => (
													<li key={l}>{l}</li>
												))}
											</ul>
										</dd>
									</div>
									<div>
										<dt>It helps when</dt>
										<dd>{i.solves}</dd>
									</div>
									<div>
										<dt>How it works</dt>
										<dd>{i.format}</dd>
									</div>
								</dl>
								<div className={ui.btnRow}>
									<Link to={i.route} className={`${ui.btn} ${ui.btnNavy} ${ui.btnSmall}`}>
										More about {i.shortName} <ArrowIcon size={16} />
									</Link>
									<Link
										to={`${i.route}#sessions`}
										className={`${ui.btn} ${ui.btnOutline} ${ui.btnSmall}`}
									>
										Upcoming sessions
									</Link>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.ctaWrap}>
				<div className={`${ui.container} ${styles.cta} light-surface`}>
					<div className={styles.ctaText}>
						<h2 className={ui.h2Small}>Ready to start?</h2>
						<p>
							Join the community and choose the programmes you’d like to
							take part in. We’ll send you everything you need, including
							the joining links for sessions.
						</p>
					</div>
					<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnNavy}`}>
						Join the community
					</ExternalLink>
				</div>
			</section>
		</div>
	);
}

export default Programmes;
