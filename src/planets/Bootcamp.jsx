import Initiative, { HeroPhoto } from './Initiative';
import moutonImage from '../media/melbaMouton.png';

const initiative = {
	name: 'Bootcamp++',
	eyebrow: 'Initiative · Ad hoc sessions',
	lede: 'Have you completed a bootcamp and started working, but feel you’ve barely scratched the surface? Are you looking for a friendly place to structure your learning journey and build knowledge in a community-driven environment?',
	aside: (
		<HeroPhoto
			src={moutonImage}
			alt="Melba Roy Mouton, mathematician and computer programmer in NASA’s Trajectory and Geodynamics Division"
		/>
	),
	heroButton: 'Get notified about the next session',
	about: {
		title: 'What to expect',
		paragraphs: [
			'Bootcamp++ might be what you are looking for. Together, we deep-dive into various computer science and software engineering topics which are relevant to our careers. We’ll complete practical exercises with peer-reviews, along with occasional workshops from experienced engineers.',
			'This is not a course, but rather a pathway you can walk with others, while we rise in our careers together.'
		]
	},
	faqs: [
		{
			question: 'What do I need to know before attending?',
			answer: [
				'You should have completed a Bootcamp, and are looking for work, or are now working in tech.',
				'Sessions are not suitable for beginner coders - please sign up for Group Coding Sessions if you are new to coding or completing your Bootcamp.',
				'Self-taught engineers are welcome, but you should know: 1 programming language, and have completed at least 3 portfolio items.',
				'Sessions are not intended to replace courses. If you would prefer taking a course, please email us and we can send you suggestions based on what you want to cover.'
			]
		}
	],
	cta: {
		title: 'Sessions are added as they’re scheduled',
		text: 'Sign up and we’ll let you know about the next Bootcamp++ session.'
	}
};

function Bootcamp() {
	return <Initiative initiative={initiative} />;
}

export default Bootcamp;
