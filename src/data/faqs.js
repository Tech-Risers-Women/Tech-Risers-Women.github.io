// Questions for the FAQs page. Also written into the page as FAQPage
// structured data at build time (scripts/prerender.mjs) so Google can show
// them in search results, so keep answers as plain text.
//
// `link` is optional: { to: '/route' } for a page on this site, or
// { href: 'https://…' } for an external link.
import { LINKS } from './links';

export const FAQ_GROUPS = [
	{
		title: 'About Tech Risers Women',
		faqs: [
			{
				question: 'What is Tech Risers Women?',
				answer: [
					'Tech Risers Women is a peer-to-peer professional development community that helps women in software engineering and data grow their technical expertise through practical learning and problem-solving.',
					'That practice builds confidence, and supports structured career advancement through peer collaboration and shared experience.'
				],
				link: { to: '/about', label: 'More about us' }
			},
			{
				question: 'Who is Tech Risers Women for?',
				answer: [
					'Professional women in software engineering and data, particularly individual contributors (ICs) who want to grow their technical expertise and move into more senior technical roles.',
					'Members range from career changers, students and bootcamp graduates to senior, staff and principal engineers, with every stage in between.'
				]
			},
			{
				question: 'How is it different from other women in tech communities?',
				answer: [
					'Tech Risers Women is not just another networking community. It’s an online place to practise, learn and solve real technical problems: coding katas, architecture katas, system design and career planning, alongside women who understand your journey.'
				]
			},
			{
				question: 'Is Tech Risers Women free?',
				answer: [
					'Yes. Joining the community and attending our programme sessions is free.'
				]
			},
			{
				question: 'Where do sessions take place?',
				answer: [
					'All of our sessions are online, so you can join from anywhere. Members currently join from 15 countries across five continents. Event times on our Events page are shown in your own time zone.'
				],
				link: { to: '/events', label: 'See upcoming events' }
			}
		]
	},
	{
		title: 'Joining and events',
		faqs: [
			{
				question: 'How do I join the community?',
				answer: [
					'Fill in our short join form. Tell us a little about yourself and which programmes interest you, and we’ll send you everything you need, including the joining links for sessions.'
				],
				link: { href: LINKS.joinForm, label: 'Fill in the join form' }
			},
			{
				question: 'How do I register for an event?',
				answer: [
					'Find the session on our Events page and select Register. If you’re not a member yet, you’ll be asked to sign up first. Signed-up members receive the joining links.'
				],
				link: { to: '/events', label: 'Browse events' }
			},
			{
				question: 'Which programme should I start with?',
				answer: [
					'If you’re early in your career, Group Coding Sessions and Bootcamp++ build strong foundations. Mid-level engineers often join Group Coding, the Architects’ Kata Club and Career Corner. Senior, staff and principal engineers tend to get the most from the Architects’ Kata Club and Career Corner, and from mentoring others.'
				],
				link: { to: '/programmes', label: 'Compare programmes' }
			},
			{
				question: 'How much experience do I need?',
				answer: [
					'It depends on the programme. Group Coding needs the basics of one programming language. Bootcamp++ is for bootcamp graduates and self-taught engineers. The Architects’ Kata Club is for engineers who have deployed features to production. Career Corner is for working engineers.'
				]
			},
			{
				question: 'How can I stay up to date?',
				answer: [
					'Subscribe to the Tech Risers Women newsletter on LinkedIn for session recaps, new programmes and opportunities, and follow us on LinkedIn.'
				],
				link: { href: LINKS.newsletter, label: 'Subscribe to the newsletter' }
			}
		]
	},
	{
		title: 'Technical learning',
		faqs: [
			{
				question: 'How can I practise software architecture outside of work?',
				answer: [
					'The Architects’ Kata Club runs architecture katas: practical exercises where small, moderated groups design a system for a real-world domain, discuss trade-offs and share architectural patterns. It’s a way to gain design experience beyond what you get to do at work.'
				],
				link: { to: '/architect-s-club', label: 'About the Architects’ Kata Club' }
			},
			{
				question: 'Can Tech Risers Women help me prepare for a system design interview?',
				answer: [
					'Yes. The Architects’ Kata Club includes interview-style sessions where we walk through an existing system and practise how to assess it, ask the right questions and talk through our thinking. Members have told us the katas helped them in system design interviews soon after.'
				],
				link: { to: '/architect-s-club', label: 'Practise system design' }
			},
			{
				question: 'Which programming languages do you use?',
				answer: [
					'All languages are welcome in Group Coding Sessions. You only need the basics of one: setting up a project, syntax, variables, primitive types, loops and functions.'
				]
			},
			{
				question: 'Do I need to know Test Driven Development (TDD)?',
				answer: [
					'No. Group Coding starts with an onboarding session that covers how we work: ensemble coding, TDD and how a session runs.'
				],
				link: { to: '/group-coding-sessions', label: 'About Group Coding Sessions' }
			}
		]
	},
	{
		title: 'Getting involved',
		faqs: [
			{
				question: 'Can I volunteer or mentor?',
				answer: [
					'Yes, and you’ll grow too. Leading, mentoring or organising is a supportive place to practise leadership, facilitation and communication: the skills senior technical roles ask for. We’re looking for programme leads and co-leads, organisers, and mentors who can drop in when they have time.'
				],
				link: { to: '/join-us', label: 'Ways to get involved' }
			},
			{
				question: 'Can my company partner with or sponsor Tech Risers Women?',
				answer: [
					'Yes. We partner with communities and companies who want to see more women grow and get promoted on the individual contributor career track. Get in touch through our partner form.'
				],
				link: { href: LINKS.partnerForm, label: 'Partner with us' }
			},
			{
				question: 'Do you have a code of conduct?',
				answer: [
					'Yes. Everyone who takes part in Tech Risers Women events, including attendees, organisers, facilitators, mentors and hosts, agrees to our code of conduct.'
				],
				link: { to: '/code-of-conduct', label: 'Read the code of conduct' }
			}
		]
	}
];
