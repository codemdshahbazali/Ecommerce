import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Crousel.css';

function Crousel() {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          // className='d-block w-100'
          src='/assets/images/electronicGadgets.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Electronics Gadgets</h3>
          <p>
            The one stop electronic online store for Premium lifestyle gadgets
            from across the globe.
          </p>
          <button className='btn btn-danger'>Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          // className='d-block w-100'
          src='/assets/images/mensCrousel.jpg'
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Men's Wear</h3>
          <p>
            Choose from a variety of clothing for men online in India at best
            rates.
          </p>
          <button className='btn btn-danger'>Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          // className='d-block w-100'
          src='/assets/images/womenCrousel.jpg'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Women's Wear</h3>
          <p>
            Choose from a variety of clothing for women online in India at best
            rates.
          </p>
          <button className='btn btn-danger'>Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          // className='d-block w-100'
          src='/assets/images/jwelleryCrousel.jpg'
          alt='Forth slide'
        />
        <Carousel.Caption>
          <h3>Jewellery</h3>
          <p>
            Visit our website to choose from our wide range of latest Rings,
            Earrings, Pendants, Bangles, Bracelets, Necklaces. Assured Purity,
            Free Shipping.
          </p>
          <button className='btn btn-danger'>Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel;
