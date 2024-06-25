import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import ProfileInfo from './components/ProfileInfo';
import ProfileSettings from './components/ProfileSettings';

const App = () => {
  return (
    <div className='container'>
<Router>
      <nav className='menu'>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/profile" activeClassName="active">Profile</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="info" element={<ProfileInfo />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;
