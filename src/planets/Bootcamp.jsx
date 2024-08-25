import React from 'react';
import Banner from '../moons/Banner';
import Initiative from './Initiative';
import InitiativePhoto from '../moons/InitiativePhoto';
import moutonImage from '../media/melbaMouton.png';

function Bootcamp() {
	const initiative = {
		initiativeName: 'Bootcamp ++',
		initiativeText:
			"Have you completed a bootcamp and started working, but feel you've barely scratched the surface? Are you looking for a friendly place to structure your learning journey and build knowledge in a community-driven environment? Then bootcamp++ might be what you are looking for. Together, we deep-dive into various computer science and software engineering topics which are relevant to our careers. We'll complete practical exercises with peer-reviews, along with occasional workshops from experienced engineers. This is not a course, but rather a pathway you can walk with others, while we rise in our careers together.",
		initiativeLink:
			'https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true',
		initiativeImage: moutonImage,
		initiativeImageAlt:
			'Melba Roy Mouton,mathematician and computer programmer in NASA’s Trajectory and Geodynamics Division',
		initiativeFAQs: [
			{
				summary: 'What do I need to know before attending?',
				details: 'tbc'
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

export default Bootcamp;
