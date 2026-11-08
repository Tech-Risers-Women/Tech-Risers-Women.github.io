import { Link } from 'react-router-dom';
import ui from './components/ui.module.css';
import PageHero from './moons/PageHero';

function Error() {
	return (
		<PageHero
			eyebrow="404"
			title="Page not found"
			lede="Sorry, we couldn’t find that page. Head back to the home page, or use the menu to find a page that does exist."
		>
			<div className={ui.btnRow}>
				<Link to="/" className={`${ui.btn} ${ui.btnMustard}`}>
					Go to the home page
				</Link>
			</div>
		</PageHero>
	);
}

export default Error;
