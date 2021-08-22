import React from 'react';
import { useDispatch } from 'react-redux';
import { getProductCategoryData } from '../../../services/ecommerceDataService';

function CategoryItem({ category }) {
  const dispatch = useDispatch();
  let imgPath = '';
  switch (category) {
    case "women's clothing":
      imgPath = '/assets/images/women.jpg';
      break;
    case 'electronics':
      imgPath = '/assets/images/electronics.jpg';
      break;
    case 'jewelery':
      imgPath = '/assets/images/jwellery.jpg';
      break;
    case "men's clothing":
      imgPath = '/assets/images/mens.jpg';
      break;
    default:
      imgPath = '/assets/images/card-smartphones.jpg';
  }
  return (
    <div className='category-item-container'>
      <img src={imgPath} alt='moble phones' />
      <button
        className='btn btn-light'
        onClick={() => {
          dispatch(getProductCategoryData({ category }));
        }}>
        {category.toUpperCase()}
      </button>
    </div>
  );
}

export default CategoryItem;
