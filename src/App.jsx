import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Impact from './components/Impact';
import Locations from './components/Locations';
import Projects from './components/Projects';
import Home from './Home';
import Logo from './Assets/Logo Components.png';
import SignIn from './sign/SignIn';
import SignUp from './sign/SignUp';
import Welcome from './sign/Welcome';
import ForgetPassword from './sign/ForgetPassword';
import PasswordSent from './sign/PasswordSent';
import Register from './sign/Register';

function App() {
  return (
    <Router>
      <div className='main_container'>
        <header className='header'>
          <div className='logo_container'>
            <Link to='/'>
              <img src={Logo} alt='Logo' />
            </Link>
          </div>

          <nav>
            <ul className='nav_bar'>
              <li>
                <Link to='/AboutUs'>About Us</Link>
              </li>
              <li>
                <Link to='/Impact'>Impact</Link>
              </li>
              <li>
                <Link to='/Locations'>Locations</Link>
              </li>
              <li>
                <Link to='/Projects'>Projects</Link>
              </li>
            </ul>
          </nav>

          <div className='sign_buttons'>
            <Link to='/SignIn'>
              <button className='sign_in'>Sign in</button>
            </Link>
            <Link to='/SignUp'>
              <button className='sign_up'>Sign up</button>
            </Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Impact' element={<Impact />} />
            <Route path='/Locations' element={<Locations />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/welcome/:username' element={<Welcome />} />
            <Route path='/forgetPassword' element={<ForgetPassword />} />
            <Route path='/PasswordSent' element={<PasswordSent />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
