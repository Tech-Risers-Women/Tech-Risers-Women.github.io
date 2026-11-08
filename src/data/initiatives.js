// One entry per initiative. `eventKey` is the value used for "initiative"
// in public/events.json.
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
		summary:
			'A continuous practice group. We ensemble-code katas and practice apps using Test Driven Development and good coding habits.'
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
		summary:
			'Practise designing systems for real-world domains in small, moderated groups, and grow your knowledge of architectural patterns beyond what you get to do at work.'
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
		summary:
			'Finished a bootcamp but feel you’ve barely scratched the surface? Deep-dive into computer science and software engineering topics with peers. Sign up to hear about the next session.'
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
		summary:
			'Pause, reflect and plan. Practise negotiation, career planning and self-advocacy alongside women doing the same.'
	}
];

export const getInitiativeByEventKey = (key) =>
	INITIATIVES.find((i) => i.eventKey === key);
