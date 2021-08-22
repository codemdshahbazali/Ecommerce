import React from 'react';
import './testimonial.css';

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
      <div className='row'>
        <div className='testi col-md-8 col-center m-auto'>
          <h2 className='h2'>Testimonials</h2>
          {/* carousel */}

          <div id='myCarousel' className='carousel slide' data-ride='carousel'>
            <div className='carousel-indicators'>
              <button
                type='button'
                data-bs-target='#myCarousel'
                data-bs-slide-to='0'
                className='active'
                aria-current='true'
                aria-label='Slide 1'></button>
              <button
                type='button'
                data-bs-target='#myCarousel'
                data-bs-slide-to='1'
                aria-label='Slide 2'></button>
              <button
                type='button'
                data-bs-target='#myCarousel'
                data-bs-slide-to='2'
                aria-label='Slide 3'></button>
            </div>

            <div className='carousel-inner'>
              <div className='item carousel-item active'>
                <div className='img-box'>
                  <img src='https://i.ibb.co/d5DY64w/img1.jpg' alt='' />
                </div>
                <p className='testimonial'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  eu sem tempor, varius quam at, luctus dui. Mauris magna metus,
                  dapibus nec turpis vel, semper malesuada ante. Idac bibendum
                  scelerisque non non purus. Suspendisse varius nibh non
                  aliquet.
                </p>
                <p className='overview'>
                  <b>Jennifer Smith</b>, Office Worker
                </p>
              </div>
              <div className='item carousel-item'>
                <div className='img-box'>
                  <img src='https://i.ibb.co/5FF1vqz/img2.jpg' alt='' />
                </div>
                <p className='testimonial'>
                  Vestibulum quis quam ut magna consequat faucibus. Pellentesque
                  eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                  Pellentesque viverra sagittis quam at mattis. Suspendisse
                  potenti. Aliquam sit amet gravida nibh, facilisis gravida
                  odio.
                </p>
                <p className='overview'>
                  <b>Dauglas McNun</b>, Financial Advisor
                </p>
              </div>
              <div className='item carousel-item'>
                <div className='img-box'>
                  <img src='https://i.ibb.co/Trv7hDv/img3.jpg' alt='' />
                </div>
                <p className='testimonial'>
                  Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                  id lacinia. Etiam faucibus mauris id tempor egestas. Duis
                  luctus turpis at accumsan tincidunt. Phasellus risus risus,
                  volutpat vel tellus ac, tincidunt fringilla massa. Etiam
                  hendrerit dolor eget rutrum.
                </p>
                <p className='overview'>
                  <b>Hellen Wright</b>, Athelete
                </p>
              </div>
            </div>
            {/*
        <!-- Carousel Controls --> */}
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide='prev'>
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide='next'>
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
