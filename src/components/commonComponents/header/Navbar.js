// let { BrowserRouter, Switch, Route, NavLink } = ReactRouterDOM;

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

//Pages
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className='navbar-parent-container'>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <nav className='navbar' onClick={(e) => e.stopPropagation()}>
        <div className='nav-container'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/about'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                Electronics
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/blog'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                Men's Wear
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/contact'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                Women's Wear
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/contact'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                Jewellery
              </NavLink>
            </li>
            {/* <li style={{ fontSize: '35px' }}>
              <i class='fas fa-user-circle'></i>
            </li> */}
            <li className='nav-item' style={{ fontSize: '30px' }}>
              <NavLink
                exact
                to='/cart'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                <i class='bi bi-cart-check-fill'></i>
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
