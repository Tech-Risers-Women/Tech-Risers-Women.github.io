// One entry per programme. `eventKey` is the value used for "initiative"
// in public/events.json.
//
// The "at a glance" fields (audience, learn, solves, format) are shown on
// the Programmes page and at the top of each programme's own page.
export const INITIATIVES = [
	{
		id: 'group-coding',
		eventKey: 'Group Coding Sessions',
		name: 'Group Coding Sessions',
		shortName: 'Group Coding',
		route: '/group-coding-sessions',
		frequency: 'Ad hoc',
		tone: 'grey',
		glyph: '{ }',
		glyphStyle: 'navy',
		dateStyle: 'navy',
		pillar: 'Coding · TDD · Clean code',
		summary:
			'A continuous practice group. We ensemble-code katas and practice apps using Test Driven Development and good coding habits.',
		audience:
			'Anyone who knows the basics of one programming language, from career changers and students to experienced engineers.',
		learn: [
			'Test Driven Development (red, green, refactor)',
			'Ensemble (mob) programming',
			'Clean, readable code and good habits',
			'Thinking out loud and coding in front of others'
		],
		solves:
			'You want to practise TDD or pair programming but don’t get the chance at work, or you’re learning alone with no one to review your code.',
		format: 'Online on Zoom. Onboarding first, then ad hoc sessions. Any language.'
	},
	{
		id: 'architects-kata-club',
		eventKey: 'Architects Kata Club',
		name: 'Architects’ Kata Club',
		shortName: 'Architects’ Kata Club',
		route: '/architect-s-club',
		frequency: 'Quarterly',
		tone: 'amber',
		glyph: '/\\',
		glyphStyle: 'mustard',
		dateStyle: 'navy',
		pillar: 'System design · Architecture',
		summary:
			'Practise designing systems for real-world domains in small, moderated groups, and grow your knowledge of architectural patterns beyond what you get to do at work.',
		audience:
			'Engineers who have deployed features to production and want to grow into architecture and system design.',
		learn: [
			'Software architecture and system design',
			'Architectural patterns and trade-offs',
			'Scalability and evolving existing systems',
			'System design interview practice'
		],
		solves:
			'You don’t get to design systems at work yet, you’re preparing for a system design interview, or you want to speak up with confidence in architecture discussions.',
		format: 'Online, in small moderated groups. At least once a quarter.'
	},
	{
		id: 'bootcamp-plus-plus',
		eventKey: 'Bootcamp++',
		name: 'Bootcamp++',
		shortName: 'Bootcamp++',
		route: '/bootcamp-plus-plus',
		frequency: 'Ad hoc',
		tone: 'grey',
		glyph: '++',
		glyphStyle: 'navy',
		dateStyle: 'mustard',
		pillar: 'CS fundamentals · Software engineering',
		summary:
			'Finished a bootcamp but feel you’ve barely scratched the surface? Deep-dive into computer science and software engineering topics with peers. Sign up to hear about the next session.',
		audience:
			'Bootcamp graduates who are job-seeking or working in tech, and self-taught engineers with one language and a few portfolio projects.',
		learn: [
			'Computer science and software engineering fundamentals',
			'Practical exercises with peer review',
			'Workshops from experienced engineers',
			'A structured path for your learning'
		],
		solves:
			'You finished a bootcamp but feel you’ve barely scratched the surface, and want structure and peers rather than another course.',
		format: 'Online. Sessions added as they’re scheduled.'
	},
	{
		id: 'career-corner',
		eventKey: 'Career Corner',
		name: 'Career Corner',
		shortName: 'Career Corner',
		route: '/career-corner',
		frequency: 'Quarterly',
		tone: 'green',
		glyph: '↗',
		glyphStyle: 'mustard',
		dateStyle: 'mustard',
		pillar: 'Career growth · Promotion',
		summary:
			'Pause, reflect and plan. Practise negotiation, career planning and self-advocacy alongside women doing the same.',
		audience:
			'Working engineers, especially on the individual contributor (IC) track. Managers are welcome too.',
		learn: [
			'Career planning and progression',
			'Salary negotiation and self-advocacy',
			'Preparing for promotion and senior roles',
			'Reflecting on your progress each quarter'
		],
		solves:
			'You’re working towards a promotion, returning from a break or settling into a new role, and want time and support to plan your next step.',
		format: 'Online reflection sessions and skills workshops. At least once a quarter.'
	}
];

export const getInitiativeByEventKey = (key) =>
	INITIATIVES.find((i) => i.eventKey === key);

export const getInitiativeById = (id) => INITIATIVES.find((i) => i.id === id);

// Where each stage of career tends to start. Used on the Programmes page.
// `extra` is an optional extra link shown under the programmes.
export const AUDIENCES = [
	{
		title: 'Junior developers',
		need: 'Looking for skills, confidence and guidance.',
		promise: 'Find your community, build strong foundations and start climbing the career ladder.',
		programmes: ['group-coding', 'bootcamp-plus-plus']
	},
	{
		title: 'Mid-level engineers',
		need: 'Looking for technical growth and progression.',
		promise: 'Become a stronger engineer, and get ready for more senior technical responsibility.',
		programmes: ['group-coding', 'architects-kata-club', 'career-corner']
	},
	{
		title: 'Senior engineers',
		need: 'Looking for broader technical impact.',
		promise: 'Sharpen your system design and architecture skills, and prepare for staff-level responsibility.',
		programmes: ['architects-kata-club', 'career-corner']
	},
	{
		title: 'Staff, principal and architects',
		need: 'Looking for influence, leadership and a way to give back.',
		promise: 'Keep your design skills sharp, plan your next step on the IC track, and help other women rise as a mentor or programme lead.',
		programmes: ['architects-kata-club', 'career-corner'],
		extra: { to: '/join-us#volunteer', label: 'Mentor or lead' }
	}
];
