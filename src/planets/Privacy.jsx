import styles from './page.module.css';
import ui from '../components/ui.module.css';
import PageHero from '../moons/PageHero';
import { LINKS } from '../data/links';

// Update this when the notice changes.
const LAST_UPDATED = '16 November 2026';

function Privacy() {
	return (
		<div>
			<PageHero
				eyebrow="Community"
				title="Privacy notice"
				lede="How Tech Risers Women collects, uses and looks after your personal information. We’re a volunteer-run, non-profit community with members around the world, so this notice applies wherever you are."
			/>
			<section className={styles.body}>
				<div className={styles.inner}>
					<article className={`${ui.card} ${styles.prose}`}>
						<p>Last updated: {LAST_UPDATED}</p>

						<h2>Who we are</h2>
						<p>
							Tech Risers Women is responsible for the personal
							information described in this notice. If you have any
							questions about it, or want to use any of your rights,
							email us at{' '}
							<a href={LINKS.email}>{LINKS.emailAddress}</a>.
						</p>

						<h2>What we collect</h2>
						<ul>
							<li>
								<strong>When you join the community:</strong> the
								details you give us in our join form, such as your
								name, email address, your role and experience, and
								which initiatives interest you.
							</li>
							<li>
								<strong>When you volunteer or partner with us:</strong>{' '}
								the details you give us in our volunteer or
								partnership forms.
							</li>
							<li>
								<strong>When you email us:</strong> your email address
								and whatever you include in your message.
							</li>
							<li>
								<strong>When you take part in sessions:</strong> your
								name and anything you choose to share during a
								session.
							</li>
						</ul>

						<h2>How we use it</h2>
						<ul>
							<li>to send you joining links and information about sessions</li>
							<li>to organise and run our initiatives and events</li>
							<li>to reply to your questions and messages</li>
							<li>to work with volunteers, trainers and partners</li>
							<li>
								to understand who our community is, for example how many
								countries members join from, using combined figures
								that don’t identify anyone
							</li>
						</ul>
						<p>
							We use your information because you’ve asked to take part,
							and to run the community you’ve joined. You can ask us to
							stop at any time.
						</p>
						<p>
							We never sell your personal information, and we don’t
							share it with anyone for their own marketing.
						</p>

						<h2>Services we use</h2>
						<p>
							We use a small number of trusted services to run the
							community. They handle your information for us, under
							their own privacy policies:
						</p>
						<ul>
							<li>
								<strong>Google</strong> (Forms and Gmail) for our forms and
								email
							</li>
							<li>
								<strong>Zoom</strong> for online sessions
							</li>
							<li>
								<strong>LinkedIn</strong> for our newsletter and company
								page. If you subscribe or follow us there, LinkedIn’s
								privacy policy applies.
							</li>
							<li>
								<strong>GitHub Pages</strong> to host this website
							</li>
						</ul>
						<p>
							Because our members and these services are spread around
							the world, your information may be stored and processed in
							countries other than your own, including the United
							States.
						</p>

						<h2>This website</h2>
						<p>
							This website doesn’t use cookies, analytics or advertising
							trackers. If you switch between light and dark mode, your
							choice is saved in your browser so the site remembers it.
							It never leaves your device.
						</p>
						<p>
							Like most websites, our hosting provider (GitHub) may log
							technical information such as your IP address to keep the
							site secure and running. Our fonts are loaded from Google
							Fonts, which receives your IP address when the page loads.
						</p>

						<h2>How long we keep it</h2>
						<p>
							We keep your information for as long as you’re part of
							the community. If you ask us to remove you, we’ll delete
							your details from our member list.
						</p>

						<h2>Your rights</h2>
						<p>
							Wherever you live, you can ask us to:
						</p>
						<ul>
							<li>tell you what information we hold about you</li>
							<li>correct anything that’s wrong</li>
							<li>delete your information</li>
							<li>stop sending you emails</li>
						</ul>
						<p>
							Email us at{' '}
							<a href={LINKS.email}>{LINKS.emailAddress}</a> and we’ll
							respond as soon as we can. Depending on where you live,
							you may also have further rights under local laws, such as
							the GDPR in the UK and EU, and the right to complain to
							your local data protection authority.
						</p>

						<h2>Changes to this notice</h2>
						<p>
							We’ll update this page if anything changes, and change the
							date at the top.
						</p>
					</article>
				</div>
			</section>
		</div>
	);
}

export default Privacy;
