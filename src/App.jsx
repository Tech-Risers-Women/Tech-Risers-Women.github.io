import {Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './planets/Home';
import About from './planets/About';
import Donate from './planets/Donate';
import Contact from './planets/Contact';
import Error from './Error';
import GroupCoding from './planets/GroupCoding';
import Architect from './planets/Architect';
import Bootcamp from './planets/Bootcamp';
import Join from './planets/Join';
import Conduct from './planets/Conduct';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path=''
          element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='group-coding-sessions'
            element={<GroupCoding />}
          />
          <Route
            path='join'
            element={<Join />}
          />
          <Route
            path='code-of-conduct'
            element={<Conduct />}
          />
          <Route
            path='bootcamp-plus-plus'
            element={<Bootcamp />}
          />
          <Route
            path='architect-s-club'
            element={<Architect />}
          />               
          <Route
            path='donate'
            element={<Donate />}
          />
          <Route
            path='contact'
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
