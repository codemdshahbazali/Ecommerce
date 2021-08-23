// let { BrowserRouter, Switch, Route, NavLink } = ReactRouterDOM;

import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Navbar.css';

function Navbar() {
  const history = useHistory();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const cartData = useSelector((state) => state.cartData);

  return (
    <div className='navbar-parent-container'>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <nav className='navbar' onClick={(e) => e.stopPropagation()}>
        <div className='nav-container'>
          <div
            className='nav-logo'
            onClick={() => {
              history.push('/');
            }}>
            <img
              src='/assets/images/logo.png'
              className='logo-img'
              alt='logo'
            />
          </div>
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
                to='/category/electronics'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                Electronics
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to="/category/men's clothing"
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                Men's Wear
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to="/category/women's clothing"
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                Women's Wear
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/category/jewelery'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                Jewellery
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
          <div className='nav-item nav-item-cart' style={{ fontSize: '30px' }}>
            <NavLink
              exact
              to='/cart'
              activeClassName='active'
              className='nav-links nav-link-cart'
              onClick={click ? handleClick : null}>
              <i class='bi bi-cart-check-fill'></i>
              <span className='product-cart-item-count'>{cartData.length}</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
