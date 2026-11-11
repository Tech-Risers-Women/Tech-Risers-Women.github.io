// Page titles and descriptions. Used at build time (scripts/prerender.mjs)
// to write each page's <title>, description and social-preview tags, and in
// the browser to update the tab title when navigating between pages.
//
// When you add a route to App.jsx, add it here too so it gets pre-rendered.
//
// Titles and descriptions are written around the searches we want to be
// found for, e.g. "technical community for women software developers",
// "software architecture learning for women engineers", "system design
// interview preparation" and "career development for women engineers".
// Aim for titles under ~65 characters and descriptions under ~160.

export const SITE = {
	name: 'Tech Risers Women',
	alternateName: 'TRW',
	url: 'https://www.techriserswomen.com',
	image: '/og-image.png',
	imageAlt:
		'Tech Risers Women: practical skills for women rising in tech. Online, global, community-run.',
	description:
		'A peer-to-peer professional development community helping women in software engineering and data grow their technical expertise, confidence and careers through practical learning.'
};

export const PAGES = {
	'/': {
		title: 'Tech Risers Women | Technical community for women in software',
		description:
			'Grow your technical confidence, strengthen your skills and rise together. Free online coding, architecture and career sessions for women in software and data.'
	},
	'/about': {
		title: 'About us: peer learning for women in tech | Tech Risers Women',
		description:
			'Our mission: help women in software engineering and data grow their technical expertise, confidence and careers through practical, peer-to-peer learning.'
	},
	'/programmes': {
		title: 'Programmes for women software engineers | Tech Risers Women',
		description:
			'Free, hands-on programmes: Group Coding (TDD), Architects’ Kata Club (system design), Bootcamp++ and Career Corner. Find the right place to start.'
	},
	'/events': {
		title: 'Upcoming events for women in tech | Tech Risers Women',
		description:
			'Register for free online sessions: architecture katas, system design interview practice, group coding and career development for women in software and data.'
	},
	'/group-coding-sessions': {
		title: 'Group Coding Sessions: practise TDD together | Tech Risers Women',
		description:
			'A continuous practice group for women in tech. Ensemble-code katas and practice apps using Test Driven Development and good coding habits. Any language.'
	},
	'/architect-s-club': {
		title: 'Architecture katas & system design practice | Tech Risers Women',
		description:
			'Software architecture learning for women engineers. Practise system design and interview-style reviews in small, moderated groups. Free and online.'
	},
	'/bootcamp-plus-plus': {
		title: 'Bootcamp++: grow beyond your bootcamp | Tech Risers Women',
		description:
			'Finished a coding bootcamp but feel you’ve barely scratched the surface? Deep-dive into computer science and software engineering topics with peers.'
	},
	'/career-corner': {
		title: 'Career Corner: career growth for women engineers | Tech Risers Women',
		description:
			'Career development for women software engineers. Practise negotiation, career planning and self-advocacy, and prepare for senior IC roles with peers.'
	},
	'/join-us': {
		title: 'Join us: membership, mentoring & partnerships | Tech Risers Women',
		description:
			'Join a free community for women in software and data. Become a member, mentor or volunteer, or partner with and sponsor Tech Risers Women.'
	},
	'/faq': {
		title: 'FAQs | Tech Risers Women',
		description:
			'Who Tech Risers Women is for, what it costs, how to join and register for events, system design interview practice, and how to volunteer or partner.'
	},
	'/code-of-conduct': {
		title: 'Code of Conduct | Tech Risers Women',
		description:
			'The code of conduct that all attendees, organisers, facilitators, mentors, volunteers and hosts at Tech Risers Women events agree to.'
	},
	'/contact': {
		title: 'Contact us | Tech Risers Women',
		description:
			'Questions about Tech Risers Women, our programmes, membership or partnerships? Get in touch, or find quick answers in our FAQs.'
	}
	// Donate page hidden until there's a real donation link. Uncomment along
	// with the route in App.jsx.
	// '/donate': {
	// 	title: 'Support us | Tech Risers Women',
	// 	description:
	// 		'Help empower women in tech. Donations support skill-building, training and networking opportunities for the Tech Risers Women community.'
	// }
};

// Old URLs that now live elsewhere. Each gets a small HTML page that
// redirects (and tells search engines the new URL), and App.jsx redirects
// in the browser.
export const REDIRECTS = {
	'/work-with-us': '/join-us'
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
