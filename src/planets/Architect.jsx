import Banner from '../moons/Banner';
import Initiative from './Initiative';
import InitiativePhoto from '../moons/InitiativePhoto';
import hamiltonImage from '../media/MargeretHamilton.avif';

function Architect() {
	const initiative = {
		initiativeName: "Architects' Kata Club",
		initiativeText: `The Architects Kata Club is where we practice designing systems for various domains and technical problems. What better way to improve your architecture skills than to practice them and gain exposure, beyond what you get to do at work. Share and grow your knowledge of architectural patterns and design principles. In small groups, participants tackle different katas in a collaborative environment, moderated to ensure smooth progress and skill application.`,
		initiativeLink:
			'https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true',
		initiativeImage: hamiltonImage,
		initiativeImageAlt:
			'Margeret Hamilton standing next to the printout of her Apollo program.',
		initiativeFAQs: [
			{
				summary: 'What do I need to know before attending?',
				details:
					'Participants should have experience in deploying features to production systems.'
			}
		]
	};
	return (
		<Initiative
			initiative={{
				initiativeFAQs: initiative.initiativeFAQs,
				initiativeLink: initiative.initiativeLink,
				initiativeText: initiative.initiativeText
			}}
		>
			<Banner name={initiative.initiativeName} />
			<InitiativePhoto
				src={initiative.initiativeImage}
				alt={initiative.initiativeImageAlt}
			/>
		</Initiative>
	);
}

export default Architect;
