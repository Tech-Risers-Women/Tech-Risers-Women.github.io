import Initiative, { HeroPhoto } from './Initiative';
import hamiltonImage from '../media/MargeretHamilton.avif';

const initiative = {
	name: 'Architects’ Kata Club',
	eyebrow: 'Initiative · Quarterly sessions',
	lede: 'The Architects’ Kata Club is where we practise designing systems for various domains and technical problems. What better way to improve your architecture skills than to practise them and gain exposure, beyond what you get to do at work?',
	aside: (
		<HeroPhoto
			src={hamiltonImage}
			alt="Margaret Hamilton standing next to the printout of her Apollo program"
			uncropped
		/>
	),
	heroButton: 'Get notified about the next kata',
	about: {
		title: 'How it works',
		paragraphs: [
			'Share and grow your knowledge of architectural patterns and design principles.',
			'In small groups, participants tackle different katas in a collaborative environment, moderated to ensure smooth progress and skill application.'
		]
	},
	faqs: [
		{
			question: 'What do I need to know before attending?',
			answer: [
				'Participants should have experience in deploying features to production systems.'
			]
		}
	],
	cta: {
		title: 'A new kata every quarter',
		text: 'Sign up and we’ll let you know when the next Architects’ Kata Club session is scheduled.'
	}
};

function Architect() {
	return <Initiative initiative={initiative} />;
}

export default Architect;
