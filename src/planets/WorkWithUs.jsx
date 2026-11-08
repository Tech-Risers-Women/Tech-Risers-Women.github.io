import styles from './page.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import { ExternalLink } from '../components/ui.jsx';
import { LINKS } from '../data/links';

const ROLES = [
	{
		title: 'Lead / Co-Lead',
		text: 'This role involves ensuring sessions are planned, hosting is covered, onboarding & learning sessions are run and creating and running our ad hoc coding sessions. We are looking for leads for our upcoming Bootcamp++ initiative and for another co-lead for Group Coding sessions.'
	},
	{
		title: 'Organiser',
		text: 'We are looking for folks to assist on the core organising team. Work here involves planning for all initiatives, creating events, LinkedIn posts and supporting the Initiative Leads.'
	},
	{
		title: 'Mentor',
		text: 'Coding mentors who provide their expertise during our sessions. Mentors need to be proficient in either Python, Java or JavaScript and ideally are experienced in TDD, or are experienced engineers or architects who can review code and architecture design. This is ad hoc and perfect for those with little time but who want to share their skills when they can.'
	},
	{
		title: 'Partner',
		text: 'We would love to partner with other communities and share across our audiences. We are open to partnering with companies who are looking to see more women promoted on the IC career track.'
	}
];

function WorkWithUs() {
	return (
		<div>
			<PageHero
				eyebrow="Get involved"
				title="Work With Us"
				lede="Explore an opportunity with us, to share your skills, grow yourself and others, and give back to the community."
			>
				<div className={ui.btnRow}>
					<ExternalLink href={LINKS.volunteerForm} className={`${ui.btn} ${ui.btnMustard}`}>
						Volunteer with us
					</ExternalLink>
					<ExternalLink href={LINKS.partnerForm} className={`${ui.btn} ${ui.btnOutlineLight}`}>
						Partner with us
					</ExternalLink>
				</div>
			</PageHero>

			<section className={styles.body}>
				<div className={styles.inner}>
					<div className={styles.cards}>
						{ROLES.map((r) => (
							<div key={r.title} className={`${ui.card} ${styles.card}`}>
								<h3>{r.title}</h3>
								<p>{r.text}</p>
							</div>
						))}
					</div>

					<article className={`${ui.card} ${styles.prose}`}>
						<h2>Why volunteer or partner with us</h2>
						<p>
							Our community focuses on practise and applying skills.
							You’ll be able to help an upcoming mid/senior/staff
							engineer improve their technical skills, grow their
							confidence, and see them move up the career ladder,
							making sure more women stay in technical roles, and
							rise.
						</p>
						<p>
							You’ll also practise your own teaching, mentorship,
							communication and facilitation skills in the process.
							As a partner, you’ll reach an audience of aspiring women
							engineering leaders and be able to contribute to their
							growth.
						</p>
						<p>
							You will also be able to build a network of women
							engineers and meet folks from across the globe.
						</p>
						<p>
							If you haven’t worked in events before, you’ll learn how
							to run events online.
						</p>
						<h3>We want to see:</h3>
						<ul>
							<li>more women stay in tech</li>
							<li>more women get promoted</li>
							<li>more women Technical Leaders</li>
						</ul>
						<p className={styles.callout}>Join us as we make it happen.</p>
						<div className={ui.btnRow}>
							<ExternalLink href={LINKS.volunteerForm} className={`${ui.btn} ${ui.btnMustard}`}>
								Volunteer with us
							</ExternalLink>
							<ExternalLink href={LINKS.partnerForm} className={`${ui.btn} ${ui.btnOutline}`}>
								Partner with us
							</ExternalLink>
						</div>
					</article>
				</div>
			</section>
		</div>
	);
}

export default WorkWithUs;
