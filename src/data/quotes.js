// Real member quotes. Please don't edit the wording.
//
// `initiative` is the id from src/data/initiatives.js when the quote is
// about a particular initiative, so it also shows on that initiative's page.
// `short` quotes are one-liners, shown as chips on the home page.
export const QUOTES = [
	{
		text: 'This experience not only enriched my technical skills but also boosted my confidence in participating in architectural discussions. Kudos to the entire team for creating such a nurturing community!',
		initiative: 'architects-kata-club'
	},
	{
		// Already quoted in the Architects' Kata Club FAQ, so not tagged.
		text: 'I’m really glad that I woke up that morning and went to participate in that kata. Helped me a ton at system design interview two weeks later.'
	},
	{
		text: 'Kudos to Sarah, Nele and the entire team to organize these TDD coding sessions. They are very well organized and help us learn so much. This has helped me gain confidence while coding.',
		initiative: 'group-coding'
	},
	{
		text: 'The session exceeded my expectations, in that I also expanded my professional network and even gained a potential mentor.'
	},
	{ text: 'It’s a lovely way to practice in a friendly environment.', short: true },
	{
		text: 'A great way to practice system design skills and learn from others.',
		short: true,
		initiative: 'architects-kata-club'
	},
	{ text: 'I learned more about how to ask better questions.', short: true },
	{ text: 'I wish there were more sessions!', short: true }
];

export const quotesFor = (initiativeId) =>
	QUOTES.filter((q) => q.initiative === initiativeId);
