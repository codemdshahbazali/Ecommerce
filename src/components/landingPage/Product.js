import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart } from '../../redux/slices/CartSlice';

function Product({ data }) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className='product-card'>
      <div
        className='product-card-img'
        onClick={() => {
          history.push(`/productDetails/${data.id}`);
        }}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className='product-card-info'>
        <p
          className='product-card-info-title'
          data-toggle='tooltip'
          data-placement='bottom'
          title={data.title}>
          {data.title}
        </p>
        <p className='product-card-info-price'>
          <span>Price: ₹ </span>
          {data.price}
        </p>
        <button
          className='btn  btn-light text-center'
          onClick={() => {
            const productObj = {
              ...data,
              productQuantity: 1,
            };
            dispatch(addToCart(productObj));
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
