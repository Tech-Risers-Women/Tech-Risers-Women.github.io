import Initiative, { HeroPhoto } from './Initiative';
import hamiltonImage from '../media/MargeretHamilton.avif';

const initiative = {
	id: 'architects-kata-club',
	name: 'Architects’ Kata Club',
	eyebrow: 'Programme · Quarterly sessions',
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
		title: 'Learn software architecture by doing',
		paragraphs: [
			'An architecture kata is a practical exercise: you’re given a real-world domain and a set of requirements, and design a system that meets them, weighing up the trade-offs as you go.',
			'In small groups, participants tackle different katas in a collaborative environment, moderated to ensure smooth progress and skill application. Share and grow your knowledge of architectural patterns and design principles.',
			'Some sessions are interview-style: we walk through an existing system and practise how to assess it, ask the right questions and talk through our thinking, just as you would in a system design interview.'
		]
	},
	faqs: [
		{
			question: 'What do I need to know before attending?',
			answer: [
				'Participants should have experience in deploying features to production systems.'
			]
		},
		{
			question: 'Will this help me prepare for a system design interview?',
			answer: [
				'Yes. Katas give you practice designing systems and explaining your thinking out loud, with others, which is what a system design interview asks of you. One member told us a kata “helped me a ton at system design interview two weeks later.”'
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
