import './App.css';
import LandingPage from './components/landingpage';
import About from './components/about';
import Events from './components/events';
import Contact from './components/contact';
import LogIn from './components/login';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Sidebar from './components/sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <LandingPage /> */}
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/events' element={<Events />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/login' element={<LogIn />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
