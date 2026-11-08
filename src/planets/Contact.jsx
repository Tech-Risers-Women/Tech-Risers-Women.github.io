import styles from './page.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import { LuMail, LuHeartHandshake } from 'react-icons/lu';
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
		icon: <LuHeartHandshake />,
		title: 'Join us',
		text: 'Sign up as a member and choose the initiatives you’d like to take part in.',
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
				lede="If you have any questions or would like to learn more about Tech Risers Women, please don’t hesitate to contact us. We also welcome curious women to come along to our sessions."
			/>
			<section className={styles.body}>
				<div className={styles.inner}>
					<div className={styles.cards}>
						{OPTIONS.map((o) => (
							<a
								key={o.title}
								href={o.href}
								className={`${ui.card} ${ui.cardHover} ${styles.card} ${styles.linkCard}`}
								{...(o.external === false
									? {}
									: { target: '_blank', rel: 'noreferrer' })}
							>
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
							</a>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
