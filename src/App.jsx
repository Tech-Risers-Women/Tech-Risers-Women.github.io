import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Error';
import Layout from './components/Layout';
import About from './planets/About';
import Architect from './planets/Architect';
import Bootcamp from './planets/Bootcamp';
import Conduct from './planets/Conduct';
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
          path='/TRW-dev/'
          element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/TRW-dev/about'
            element={<About />}
          />
          <Route
            path='group-coding-sessions'
            element={<GroupCoding />}
          />
          <Route
            path='/TRW-dev/join'
            element={<Join />}
          />
          <Route
            path='/TRW-dev/code-of-conduct'
            element={<Conduct />}
          />
          <Route
            path='/TRW-dev/bootcamp-plus-plus'
            element={<Bootcamp />}
          />
          <Route
            path='/TRW-dev/architect-s-club'
            element={<Architect />}
          />               
          <Route
            path='/TRW-dev/donate'
            element={<Donate />}
          />
          <Route
            path='/TRW-dev/contact'
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
