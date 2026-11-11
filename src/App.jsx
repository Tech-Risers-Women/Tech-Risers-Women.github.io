import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Error';
import Layout from './components/Layout';
import About from './planets/About';
import Architect from './planets/Architect';
import Bootcamp from './planets/Bootcamp';
import CareerCorner from './planets/CareerCorner';
import Conduct from './planets/Conduct';
import JoinUs from './planets/JoinUs';
import Faq from './planets/Faq';
import Programmes from './planets/Programmes';
import Contact from './planets/Contact';
// Donate page hidden until there's a real donation link
// import Donate from './planets/Donate';
import GroupCoding from './planets/GroupCoding';
import Home from './planets/Home';
import Events from './planets/Events';
import ScrollToTop from './utils/ScrollToTop';
import { REDIRECTS } from './data/seo';

function App() {
	return (
		<div className="App">
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route
						path="group-coding-sessions"
						element={<GroupCoding />}
					/>
					<Route path="/code-of-conduct" element={<Conduct />} />
					<Route path="/join-us" element={<JoinUs />} />
					<Route path="/programmes" element={<Programmes />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/events" element={<Events />} />
					<Route path="/bootcamp-plus-plus" element={<Bootcamp />} />
					<Route path="/architect-s-club" element={<Architect />} />
					<Route path="/career-corner" element={<CareerCorner />} />
					{/* <Route path="/donate" element={<Donate />} /> */}
					<Route path="/contact" element={<Contact />} />
					{Object.entries(REDIRECTS).map(([from, to]) => (
						<Route key={from} path={from} element={<Navigate to={to} replace />} />
					))}
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
