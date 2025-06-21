import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Error';
import Layout from './components/Layout';
import About from './planets/About';
import Architect from './planets/Architect';
import Bootcamp from './planets/Bootcamp';
import Conduct from './planets/Conduct';
import WorkWithUs from './planets/WorkWithUs';
import Contact from './planets/Contact';
import Donate from './planets/Donate';
import GroupCoding from './planets/GroupCoding';
import Home from './planets/Home';
import Join from './planets/Join';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='group-coding-sessions'
            element={<GroupCoding />}
          />
          <Route
            path='/join'
            element={<Join />}
          />
          <Route
            path='/code-of-conduct'
            element={<Conduct />}
          />
          <Route
            path='/work-with-us'
            element={<WorkWithUs />}
          />
          <Route
            path='/bootcamp-plus-plus'
            element={<Bootcamp />}
          />
          <Route
            path='/architect-s-club'
            element={<Architect />}
          />               
          <Route
            path='/donate'
            element={<Donate />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='*'
            element={<Error />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
