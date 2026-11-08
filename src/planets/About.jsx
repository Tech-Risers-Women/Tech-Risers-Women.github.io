import { Link } from 'react-router-dom';
import styles from './page.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import { ArrowIcon } from '../components/ui.jsx';
import webbImage from '../media/BettyWebb.png';
import lamarrImage from '../media/hedyLamarr.png';
import shawImage from '../media/carolShaw.png';

const PILLARS = [
	{
		title: 'Community-driven',
		image: webbImage,
		alt: 'Betty Webb at Bletchley Park',
		text: 'Tech Risers Women emphasises the creation of a supportive and collaborative community and we specifically cover topics pertinent to our members. We aim to build confidence, increase skills and knowledge, share experiences, insights, and opportunities, as well as ensure that the women in our community feel heard, and are empowered to thrive in tech with a sense of belonging they may not have yet in the work environment.'
	},
	{
		title: 'Practical skills',
		image: lamarrImage,
		alt: 'Hedy Lamarr, the mind behind secure WiFi, GPS and Bluetooth',
		text: 'We focus on providing tangible, hands-on skills that are directly applicable in software architecture, development and testing. Workshops, training sessions, and collaborative projects are designed to equip women with the practical knowledge and experience needed to navigate various technical and socio-political challenges in tech. The goal is to ensure that participants not only gain theoretical knowledge but also develop the skills necessary for real-world scenarios, and to raise confidence and competence in their roles.'
	},
	{
		title: 'Professional growth',
		image: shawImage,
		alt: 'Carol Shaw, the first female video game developer, sitting at her desk',
		text: 'We create a space that supports continuous learning and career status reflection, to foster the professional development of each woman in the community. This involves providing resources, guidance, and opportunities to grow professionally. By emphasising professional and personal growth, the initiative aims to empower women to achieve their goals, ultimately contributing to their career progression in the tech sector.'
	}
];

function About() {
	return (
		<div>
			<PageHero
				eyebrow="About us"
				title="Pillars of Tech Risers Women"
				lede="Explore the cornerstones that define our mission and commitment to advancing women in tech. Tech Risers Women is a community-driven space that concentrates on acquiring practical skills and continuous professional growth. Together, we’re shaping an inclusive and dynamic environment where women excel in the tech world."
			/>
			<section className={styles.body}>
				<div className={styles.inner}>
					<ol className={styles.cards} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
						{PILLARS.map((p, idx) => (
							<li key={p.title} className={`${ui.card} ${styles.card} ${styles.cardMedia}`}>
								<img src={p.image} alt={p.alt} />
								<div className={styles.cardMediaBody}>
									<span className={styles.num} aria-hidden="true">
										0{idx + 1}
									</span>
									<h2 className={styles.h2} style={{ fontSize: 28 }}>
										{p.title}
									</h2>
									<p>{p.text}</p>
								</div>
							</li>
						))}
					</ol>
					<div className={ui.btnRow}>
						<Link to="/#initiatives" className={`${ui.btn} ${ui.btnNavy}`}>
							Explore our initiatives <ArrowIcon />
						</Link>
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
