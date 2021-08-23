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
                  This website is really super cool. It fulfilled my shopping
                  worries. I get best products at cheap price from here. I find
                  it difficult at time to get proper sizes of shoes for me I
                  found it here. Thank you for creating such a wonderful
                  shopping website
                </p>
                <p className='overview'>
                  <b>Jennifer Smith</b>, Certified User
                </p>
              </div>
              <div className='item carousel-item'>
                <div className='img-box'>
                  <img src='https://i.ibb.co/5FF1vqz/img2.jpg' alt='' />
                </div>
                <p className='testimonial'>
                  I used to browse through the internet to find best dresses for
                  me and i was so much confused with the products which was best
                  for me but your website has helped me in my shopping, I will
                  highly recommend purchasing from here. The products are well
                  organised in categories.
                </p>
                <p className='overview'>
                  <b>Dauglas McNun</b>, Certified User
                </p>
              </div>
              <div className='item carousel-item'>
                <div className='img-box'>
                  <img src='https://i.ibb.co/Trv7hDv/img3.jpg' alt='' />
                </div>
                <p className='testimonial'>
                  Jewellery are generally expensive and need to be spent wisely.
                  I took a risk buying from you and what i saw surprised me. The
                  products are so elegant and the quality i recieved at that
                  cost in unimaginable. I will surely look forward buying from
                  products from you
                </p>
                <p className='overview'>
                  <b>Hellen Wright</b>, Certified User
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
