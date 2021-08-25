import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <footer className='new_footer_area bg_color'>
        <div className='new_footer_top'>
          <div className='container' style={{ height: '330px' }}>
            <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='f_widget company_widget wow fadeInLeft'
                  data-wow-delay='0.2s'
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.2s',
                    animationName: 'fadeInLeft',
                  }}>
                  <h3 className='f-title f_600 t_color f_size_18'>
                    Get in Touch
                  </h3>
                  <p>Don’t miss any updates of our new products.!</p>
                  <form className='f_subscribe_two mailchimp'>
                    <input
                      type='text'
                      name='EMAIL'
                      className='form-control memail'
                      placeholder='Email'
                    />
                    <button className='btn btn_get btn_get_two' type='submit'>
                      Subscribe
                    </button>
                    <p
                      className='mchimp-errmessage'
                      style={{ display: 'none' }}></p>
                    <p
                      className='mchimp-sucmessage'
                      style={{ display: 'none' }}></p>
                  </form>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='f_widget about-widget pl_70 wow fadeInLeft'
                  data-wow-delay='0.4s'
                  style={{
                    visibility: 'visible',
                    animationDelay: ' 0.4s',
                    animationName: 'fadeInLeft',
                  }}>
                  <h3 className='f-title f_600 t_color f_size_18'>Enigma</h3>
                  <ul className='list-unstyled f_list'>
                    <li>
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/'>Category</NavLink>
                    </li>
                    <li>
                      <NavLink to='/'>Testimonial</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='f_widget about-widget pl_70 wow fadeInLeft'
                  data-wow-delay='0.6s'
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.6s',
                    animatioName: 'fadeInLeft',
                  }}>
                  <h3 className='f-title f_600 t_color f_size_18'>
                    Categories
                  </h3>
                  <ul className='list-unstyled f_list'>
                    <li>
                      <NavLink to='/category/electronics'>Electronics</NavLink>
                    </li>
                    <li>
                      <NavLink to='/category/jewelery'>Jewellery</NavLink>
                    </li>
                    <li>
                      <NavLink to="/category/men's clothing">
                        Men's Wear
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/category/women's clothing">
                        Women's Wear
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div
                  className='f_widget social-widget pl_70 wow fadeInLeft'
                  data-wow-delay='0.8s'
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.8s',
                    animatioName: 'fadeInLeft',
                  }}>
                  <h3 className='f-title f_600 t_color f_size_18'>
                    Team Solutions
                  </h3>
                  <div className='f_social_icon'>
                    <a
                      href='https://www.facebook.com/mdshahbaz1/'
                      target='_blank'
                      rel='noreferrer'
                      className='fab fa-facebook'
                      style={{ textDecoration: 'none' }}>
                      .
                    </a>
                    <a
                      href='https://twitter.com/alishahbaz4u'
                      target='_blank'
                      rel='noreferrer'
                      className='fab fa-twitter'
                      style={{ textDecoration: 'none' }}>
                      .
                    </a>
                    <a
                      href='https://www.linkedin.com/in/md-shahbaz-ali-03238645/'
                      target='_blank'
                      rel='noreferrer'
                      className='fab fa-linkedin'
                      style={{ textDecoration: 'none' }}>
                      .
                    </a>
                    <a
                      href='https://www.instagram.com/mdshahbaz1/'
                      target='_blank'
                      rel='noreferrer'
                      className='fab fa-instagram'
                      style={{ textDecoration: 'none' }}>
                      .
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer_bg'>
            <div className='footer_bg_one'></div>
            <div className='footer_bg_two'></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
