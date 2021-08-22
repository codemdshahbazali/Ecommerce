import './SingleProductPage.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductData } from '../../services/ecommerceDataService';
import { addToCart } from '../../redux/slices/CartSlice';
// import SPP_Card from './SPP_card';

const slideData = [
  {
    index: 0,
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
  },
  {
    index: 1,
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
  },
  {
    index: 2,
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
  },
  {
    index: 3,
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
  },
  {
    index: 4,
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
  },
];

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleMouseMove(event) {
    const el = this.slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      '--x',
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      '--y',
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  }

  handleMouseLeave(event) {
    this.slide.current.style.setProperty('--x', 0);
    this.slide.current.style.setProperty('--y', 0);
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index);
  }

  imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  render() {
    const { src, index } = this.props.slide;
    const current = this.props.current;
    let classNames = 'SPP_slide';

    if (current === index) classNames += ' SPP_slide--current';
    else if (current - 1 === index) classNames += ' SPP_slide--previous';
    else if (current + 1 === index) classNames += ' SPP_slide--next';

    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}>
        <div className='SPP_slide__image-wrapper'>
          <img
            className='SPP_slide__image'
            alt='carousel_img'
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>
      </li>
    );
  }
}

// const SliderControl = ({ type, title, handleClick }) => {
//   return (
//     <button
//       className={`SPP_btn SPP_btn--${type}`}
//       title={title}
//       onClick={handleClick}>
//       <svg className='SPP_icon' viewBox='0 0 24 24'>
//         <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
//       </svg>
//     </button>
//   );
// };

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { current: 0 };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
  }

  handlePreviousClick() {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous,
    });
  }

  handleNextClick() {
    const next = this.state.current + 1;

    this.setState({
      current: next === this.props.slides.length ? 0 : next,
    });
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      });
    }
  }

  render() {
    const { current, direction } = this.state;
    const { slides, heading } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, '-')
      .toLowerCase()}`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`,
    };

    return (
      <div className='SPP_slider' aria-labelledby={headingId}>
        <ul className='SPP_slider__wrapper' style={wrapperTransform}>
          {slides.map((slide) => {
            return (
              <Slide
                key={slide.index}
                slide={slide}
                current={current}
                handleSlideClick={this.handleSlideClick}
              />
            );
          })}
        </ul>
        {
          // <div className="SPP_slider__controls">
          //   <SliderControl
          //     type="previous"
          //     title="Go to previous slide"
          //     handleClick={this.handlePreviousClick}
          //   />
          //   <div className="SPP_gap_bw_SliderControl"></div>
          //   <SliderControl
          //     type="next"
          //     title="Go to next slide"
          //     handleClick={this.handleNextClick}
          //   />
          // </div>
        }
      </div>
    );
  }
}

export default function ImageCarousel() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => dispatch(getProductData({ id })), [dispatch, id]);

  const { loading, individualProduct, errorMessage } = useSelector(
    (state) => state.individualProductdata
  );

  console.log(individualProduct);

  const [productCount, setProductCount] = useState(1);
  return (
    <div className='SPP_App'>
      <div className='SPP_navbar'></div>
      <Slider heading='Example Slider' slides={slideData} />
      <div className='SPP_details_container'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 SPP_desc'>
              {individualProduct?.description}
            </div>
            <div className='col-2 SPP_temp'></div>
            <div className='col-3 SPP_desc'>
              <div className='product-quantity mb-2'>
                <button
                  className='btn btn-outline-secondary fs-4 ps-3 pe-3'
                  onClick={() => setProductCount((preCount) => preCount - 1)}>
                  -
                </button>
                <button className='btn btn-outline-secondary fs-4 ps-4 pe-4 m-1'>
                  {productCount > 0 ? productCount : setProductCount(1)}
                </button>
                <button
                  className='btn btn-outline-secondary fs-4  ps-3 pe-3'
                  onClick={() => setProductCount((preCount) => preCount + 1)}>
                  +
                </button>
              </div>
              <button
                className='btn btn-dark p-2 ps-3 pe-3 fs-5'
                onClick={() => {
                  const productObj = {
                    ...individualProduct,
                    productQuantity: productCount,
                  };
                  dispatch(addToCart(productObj));
                }}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='SPP_sim_prod_cont'>
        <div className='SPP_sim_prod_heading'>SIMILAR PRODUCTS</div>
        <div className='SPP_sim_prod_body'>
          <div className='container'>
            <div className='row'>
              <div className='col-4'></div>
              <div className='col-4'></div>
              <div className='col-4'></div>
            </div>
            <div className='row'>
              <div className='col-4'></div>
              <div className='col-4'></div>
              <div className='col-4'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='SPP_footer'></div>
    </div>
  );
}
