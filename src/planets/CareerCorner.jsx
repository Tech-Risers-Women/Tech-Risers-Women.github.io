import React from 'react';
import Banner from '../moons/Banner';
import Initiative from './Initiative';
import InitiativePhoto from '../moons/InitiativePhoto';
import easleyImage from '../media/annieEasley.png';

function CareerCorner() {
	const initiative = {
		initiativeName: 'Career Corner',
		initiativeText: "Coming Soon",
		initiativeLink:
			'https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true',
		initiativeImage: easleyImage,
		initiativeImageAlt:
        	`Annie Easley, Computer Scientist and Mathematician who made critical contributions to NASA's rocket systems and energy technologies.`,
		initiativeFAQs: [
			{
				summary: 'What do I need to know before attending?',
				details: `TBD`
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

export default CareerCorner;
