// Page titles and descriptions. Used at build time (scripts/prerender.mjs)
// to write each page's <title>, description and social-preview tags, and in
// the browser to update the tab title when navigating between pages.
//
// When you add a route to App.jsx, add it here too so it gets pre-rendered.

export const SITE = {
	name: 'Tech Risers Women',
	url: 'https://www.techriserswomen.com',
	image: '/og-image.png',
	imageAlt:
		'Tech Risers Women: practical skills for women rising in tech. Online, global, community-run.'
};

export const PAGES = {
	'/': {
		title: 'Tech Risers Women | Practical skills for women rising in tech',
		description:
			'A community-run initiative empowering women in tech through hands-on sessions in coding, architecture and career growth. Online, for women everywhere.'
	},
	'/about': {
		title: 'About us | Tech Risers Women',
		description:
			'Tech Risers Women is a community-driven space for women in tech, focused on practical skills and continuous professional growth.'
	},
	'/events': {
		title: 'Events | Tech Risers Women',
		description:
			'Upcoming and past online events from Tech Risers Women: Career Corner, Architects’ Kata Club, Group Coding Sessions and Bootcamp++.'
	},
	'/group-coding-sessions': {
		title: 'Group Coding Sessions | Tech Risers Women',
		description:
			'A continuous practice group for women in tech. Ensemble-code katas and practice apps using Test Driven Development and good coding habits.'
	},
	'/architect-s-club': {
		title: 'Architects’ Kata Club | Tech Risers Women',
		description:
			'Practise designing systems for real-world domains in small, moderated groups, and grow your knowledge of architectural patterns.'
	},
	'/bootcamp-plus-plus': {
		title: 'Bootcamp++ | Tech Risers Women',
		description:
			'Finished a bootcamp but feel you’ve barely scratched the surface? Deep-dive into computer science and software engineering topics with peers.'
	},
	'/career-corner': {
		title: 'Career Corner | Tech Risers Women',
		description:
			'Pause, reflect and plan. Practise negotiation, career planning and self-advocacy alongside other women in tech doing the same.'
	},
	'/work-with-us': {
		title: 'Get involved | Tech Risers Women',
		description:
			'Volunteer, facilitate or partner with Tech Risers Women. Share your skills, grow yourself and others, and give back to the community.'
	},
	'/code-of-conduct': {
		title: 'Code of Conduct | Tech Risers Women',
		description:
			'The code of conduct that all attendees, organisers, facilitators, mentors, volunteers and hosts at Tech Risers Women events agree to.'
	},
	'/contact': {
		title: 'Contact us | Tech Risers Women',
		description:
			'Get in touch with Tech Risers Women with any questions, or to find out more about our free online sessions for women in tech.'
	}
	// Donate page hidden until there's a real donation link. Uncomment along
	// with the route in App.jsx.
	// '/donate': {
	// 	title: 'Support us | Tech Risers Women',
	// 	description:
	// 		'Help empower women in tech. Donations support skill-building, training and networking opportunities for the Tech Risers Women community.'
	// }
};

export const NOT_FOUND = {
	title: 'Page not found | Tech Risers Women',
	description: 'Sorry, we couldn’t find that page.',
	noindex: true
};

export const getPage = (pathname) => {
	const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
	return PAGES[path] || NOT_FOUND;
};
