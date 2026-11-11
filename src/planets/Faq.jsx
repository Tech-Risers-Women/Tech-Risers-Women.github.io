import { Link } from 'react-router-dom';
import styles from './faq.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import FaqList from '../components/FaqList';
import { ArrowIcon, ExternalLink } from '../components/ui.jsx';
import { FAQ_GROUPS } from '../data/faqs';
import { LINKS } from '../data/links';

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function Faq() {
	return (
		<div>
			<PageHero
				eyebrow="FAQs"
				title="Frequently asked questions"
				lede="Everything you need to know about Tech Risers Women: who it’s for, how to join, how our programmes work and how to get involved."
			>
				<nav aria-label="Question topics" className={styles.topics}>
					{FAQ_GROUPS.map((g) => (
						<a key={g.title} href={`#${slug(g.title)}`} className={styles.topic}>
							{g.title}
						</a>
					))}
				</nav>
			</PageHero>

			<section className={styles.body}>
				<div className={`${ui.narrow} ${styles.groups}`}>
					{FAQ_GROUPS.map((g) => (
						<div key={g.title} id={slug(g.title)} className={styles.group}>
							<h2 className={ui.h2Small}>{g.title}</h2>
							<FaqList faqs={g.faqs} />
						</div>
					))}

					<div className={`${styles.cta} light-surface`}>
						<h2 className={ui.h2Small}>Still have a question?</h2>
						<p>
							Send it our way and we’ll get back to you. Or jump straight
							in and join the community.
						</p>
						<div className={ui.btnRow}>
							<Link to="/contact" className={`${ui.btn} ${ui.btnNavy}`}>
								Contact us <ArrowIcon size={16} />
							</Link>
							<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnOutline}`}>
								Join the community
							</ExternalLink>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Faq;
