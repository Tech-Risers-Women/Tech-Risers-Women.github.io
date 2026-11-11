import { Link } from 'react-router-dom';
import styles from './page.module.css';
import own from './about.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import { ArrowIcon, ExternalLink } from '../components/ui.jsx';
import { LINKS } from '../data/links';
import webbImage from '../media/BettyWebb.webp';
import lamarrImage from '../media/hedyLamarr.webp';
import shawImage from '../media/carolShaw.webp';

const PILLARS = [
	{
		title: 'Practical technical skills',
		image: lamarrImage,
		alt: 'Hedy Lamarr, the mind behind secure WiFi, GPS and Bluetooth',
		topics: ['Coding', 'TDD', 'Software architecture', 'System design', 'Algorithms', 'Technical interviews'],
		text: 'We focus on providing tangible, hands-on skills that are directly applicable in software architecture, development and testing. Workshops, training sessions, and collaborative projects are designed to equip women with the practical knowledge and experience needed to navigate various technical and socio-political challenges in tech. The goal is to ensure that participants not only gain theoretical knowledge but also develop the skills necessary for real-world scenarios, and to raise confidence and competence in their roles.'
	},
	{
		title: 'Peer-to-peer community',
		image: webbImage,
		alt: 'Betty Webb at Bletchley Park',
		topics: ['Peer learning', 'Knowledge sharing', 'Experienced guidance', 'Collaboration', 'Networking'],
		text: 'Tech Risers Women emphasises the creation of a supportive and collaborative community and we specifically cover topics pertinent to our members. We aim to build confidence, increase skills and knowledge, share experiences, insights, and opportunities, as well as ensure that the women in our community feel heard, and are empowered to thrive in tech with a sense of belonging they may not have yet in the work environment.'
	},
	{
		title: 'Professional career growth',
		image: shawImage,
		alt: 'Carol Shaw, the first female video game developer, sitting at her desk',
		topics: ['Career planning', 'Progression', 'Technical leadership', 'Interview and negotiation prep'],
		text: 'We create a space that supports continuous learning and career status reflection, to foster the professional development of each woman in the community. This involves providing resources, guidance, and opportunities to grow professionally. By emphasising professional and personal growth, the initiative aims to empower women to achieve their goals, ultimately contributing to their career progression in the tech sector.'
	}
];

function About() {
	return (
		<div>
			<PageHero
				eyebrow="About us"
				title="Helping women in software rise, technically"
				lede="Tech Risers Women is a peer-to-peer professional development community for women in software engineering and data, and especially for individual contributors who want to grow their technical expertise, confidence and careers."
			/>
			<section className={styles.body}>
				<div className={styles.inner}>
					<article className={`${ui.card} ${styles.prose}`}>
						<h2>Our mission</h2>
						<p>
							We help women in software engineering and data grow their
							technical expertise through practical learning and
							problem-solving. That practice builds confidence, and
							supports structured career advancement through peer
							collaboration and shared experience.
						</p>
						<p>
							Many communities for women in tech focus on networking or
							career inspiration. We focus on the technical skills
							themselves: designing systems, writing better code,
							preparing for interviews and planning the next step on the
							individual contributor career track.
						</p>
						<p className={styles.callout}>
							Tech Risers Women is not just another networking community.
							It’s an online place to practise, learn, solve real
							technical problems, and grow alongside women who
							understand your journey.
						</p>
						<h3>We want to see:</h3>
						<ul>
							<li>more women stay in tech</li>
							<li>more women get promoted</li>
							<li>more women technical leaders</li>
						</ul>
					</article>

					<h2 className={styles.h2}>Our pillars</h2>
					<ol className={`${styles.cards} ${own.pillars}`}>
						{PILLARS.map((p, idx) => (
							<li key={p.title} className={`${ui.card} ${styles.card} ${styles.cardMedia}`}>
								<img src={p.image} alt={p.alt} loading="lazy" />
								<div className={styles.cardMediaBody}>
									<span className={styles.num} aria-hidden="true">
										0{idx + 1}
									</span>
									<h3 className={own.pillarTitle}>{p.title}</h3>
									<ul className={own.topics}>
										{p.topics.map((t) => (
											<li key={t} className={ui.tag}>
												{t}
											</li>
										))}
									</ul>
									<p>{p.text}</p>
								</div>
							</li>
						))}
					</ol>
					<div className={ui.btnRow}>
						<Link to="/programmes" className={`${ui.btn} ${ui.btnNavy}`}>
							Explore programmes <ArrowIcon />
						</Link>
						<ExternalLink href={LINKS.joinForm} className={`${ui.btn} ${ui.btnMustard}`}>
							Join the community
						</ExternalLink>
						<Link to="/code-of-conduct" className={`${ui.btn} ${ui.btnOutline}`}>
							Read our code of conduct
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
