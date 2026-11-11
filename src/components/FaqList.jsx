import { Link } from 'react-router-dom';
import styles from './faqList.module.css';
import ui from './ui.module.css';
import { ArrowIcon, ExternalLink } from './ui.jsx';

function PlusIcon() {
	return (
		<svg className={styles.chev} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
			<path d="M12 5v14M5 12h14" />
		</svg>
	);
}

// faqs: [{ question, answer: ['paragraph', …], link?: { to | href, label } }]
function FaqList({ faqs }) {
	return (
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
						{faq.link?.to && (
							<Link to={faq.link.to}>
								{faq.link.label} <ArrowIcon size={16} />
							</Link>
						)}
						{faq.link?.href && (
							<ExternalLink href={faq.link.href}>
								{faq.link.label} <ArrowIcon size={16} />
							</ExternalLink>
						)}
					</div>
				</details>
			))}
		</div>
	);
}

export default FaqList;
