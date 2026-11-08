import Initiative from './Initiative';
import styles from './initiative.module.css';

function CodeSample() {
	return (
		<div className={styles.code} aria-hidden="true">
			<div className={styles.codeDots}>
				<span />
				<span />
				<span />
			</div>
			<pre>
				<span className={styles.comment}>// red → green → refactor</span>
				{'\n'}
				<span className={styles.kw}>test</span>(&quot;a rising woman gets promoted&quot;, () =&gt; {'{'}
				{'\n'}  const you = <span className={styles.kw}>join</span>(&quot;Tech Risers&quot;);
				{'\n'}  you.<span className={styles.kw}>practise</span>({'{'} together: true {'}'});
				{'\n'}  expect(you.confidence).toRise();
				{'\n'}
				{'});'}
			</pre>
			<span className={styles.pass}>✓ 1 passing</span>
		</div>
	);
}

const initiative = {
	name: 'Group Coding Sessions',
	eyebrow: 'Initiative · Ad hoc sessions',
	lede: 'A continuous practice group focused on hands-on skill development. We ensemble-code on katas and practice applications, applying Test Driven Development and good coding practices.',
	aside: <CodeSample />,
	heroButton: 'Get notified about the next intake',
	steps: [
		{
			title: 'Sign up',
			text: 'Register interest and we’ll tell you when the next onboarding opens.'
		},
		{
			title: 'Onboarding',
			text: 'Learn how we work: ensemble coding, TDD and how a session runs.'
		},
		{
			title: 'Code together',
			text: 'At each session, rotate between driving and navigating on a shared kata.'
		},
		{
			title: 'Grow',
			text: 'Build habits that carry into your day job — and confidence that shows.'
		}
	],
	faqs: [
		{
			question: 'When and where do the Group Coding Sessions take place?',
			answer: [
				'Sessions are held online on Zoom and are scheduled ad hoc. New dates go on our Events page and are shared with signed-up members, along with the joining links.'
			]
		},
		{
			question: 'Which programming languages do you use?',
			answer: ['We welcome all programming languages.']
		},
		{
			question: 'What do I need to know before attending?',
			answer: [
				'These sessions are suitable for people at all stages of their career, as well as those who are considering a career in tech, and would like to experience coding with others in a friendly environment and to expand their skills and knowledge.',
				'You’ll need to know the basics of at least one programming language before attending - that’s it! The basics include: setting up a project, basic syntax, variables, primitive types, loops and functions.'
			]
		}
	],
	cta: {
		title: 'We onboard new starters a few times a year',
		text: 'Sign up and we’ll let you know when the next intake opens.'
	}
};

function GroupCoding() {
	return <Initiative initiative={initiative} />;
}

export default GroupCoding;
