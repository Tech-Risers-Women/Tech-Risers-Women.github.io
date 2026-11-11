import styles from './page.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import { Link } from 'react-router-dom';
import { LuMail, LuHeartHandshake, LuHelpCircle } from 'react-icons/lu';
import { TbHeartCode } from 'react-icons/tb';
import { FaLinkedin } from 'react-icons/fa6';
import { ArrowIcon } from '../components/ui.jsx';
import { LINKS } from '../data/links';

const OPTIONS = [
	{
		icon: <LuMail />,
		title: 'Send us an email',
		text: LINKS.emailAddress,
		href: LINKS.email,
		external: false
	},
	{
		icon: <LuHelpCircle />,
		title: 'Read the FAQs',
		text: 'Quick answers about joining, our programmes, events and getting involved.',
		to: '/faq'
	},
	{
		icon: <LuHeartHandshake />,
		title: 'Join us',
		text: 'Become a member and choose the programmes you’d like to take part in. It’s free.',
		href: LINKS.joinForm
	},
	{
		icon: <TbHeartCode />,
		title: 'Get updates',
		text: 'Subscribe to our newsletter on LinkedIn. Everyone welcome!',
		href: LINKS.newsletter
	},
	{
		icon: <FaLinkedin />,
		title: 'LinkedIn',
		text: 'Follow Tech Risers Women on LinkedIn.',
		href: LINKS.linkedin
	}
];

function Contact() {
	return (
		<div>
			<PageHero
				eyebrow="Say hello"
				title="Contact us"
				lede="Questions about Tech Risers Women, our programmes, membership, volunteering or partnerships? Send them our way and we’ll get back to you. Curious women are always welcome to come along to a session."
			/>
			<section className={styles.body}>
				<div className={styles.inner}>
					<div className={styles.cards}>
						{OPTIONS.map((o) => {
							const className = `${ui.card} ${ui.cardHover} ${styles.card} ${styles.linkCard}`;
							const content = (
								<>
									<span className={styles.icon} aria-hidden="true">
										{o.icon}
									</span>
									<h2 className={styles.h2} style={{ fontSize: 24 }}>
										{o.title}
									</h2>
									<p>{o.text}</p>
									<span className={styles.cta} aria-hidden="true">
										<ArrowIcon size={16} />
									</span>
								</>
							);
							return o.to ? (
								<Link key={o.title} to={o.to} className={className}>
									{content}
								</Link>
							) : (
								<a
									key={o.title}
									href={o.href}
									className={className}
									{...(o.external === false
										? {}
										: { target: '_blank', rel: 'noreferrer' })}
								>
									{content}
								</a>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
