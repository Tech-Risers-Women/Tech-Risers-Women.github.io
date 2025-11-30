import React from 'react';
import Banner from '../moons/Banner';
import Initiative from './Initiative';
import InitiativePhoto from '../moons/InitiativePhoto';
import easleyImage from '../media/annieEasley.png';

function CareerCorner() {
	const initiative = {
		initiativeName: 'Career Corner',
		initiativeText: `
		When was the last time you negotiated a better salary, mapped out your next promotion with your boss, or simply gave yourself space to think about where you want to go next?
        Career Corner is a space for women in tech to not only pause, reflect, and take intentional steps forward in their careers, but participate in skill building sessions to practice skills that underpin any career.
        We’ll explore negotiation, career planning, self-advocacy and more. We’ll come together to support our peers and make time to reflect and plan our own careers.
        Whether you’re returning from a break, settling into a new role, or looking to level up, this is your opportunity to reconnect with your goals, design the path that fits you best and practice the skills that’ll get you there, along with other women doing the same.
		`,
		initiativeLink:
			'https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true',
		initiativeImage: easleyImage,
		initiativeImageAlt:
        	`Annie Easley, Computer Scientist and Mathematician who made critical contributions to NASA's rocket systems and energy technologies.`,
		initiativeFAQs: [
			{
				summary: 'What do I need to know before attending?',
				details: `This initiative is for already working engineers, mostly focused on those on the IC track, but it's generic enough for managers too.
				          For Reflection Sessions or Career Checkins, you don't need to bring anything in particular, but if you have your brag book, learning plan or 1-1 notes,
				          these might be useful to have on hand.
				          Any Core Skills Workshops will indicate prerequisites for attendance, on the event page.
				         `
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
