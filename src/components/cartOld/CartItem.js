import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart, removeFromCart } from './../../redux/slices/CartSlice';

function CartItem({ data }) {
  const dispatch = useDispatch();
  const [productQuant, setProductQuant] = useState(data.productQuantity);

  useEffect(() => {
    dispatch(updateCart({ id: data.id, productQuantity: productQuant }));
  }, [productQuant, dispatch, data.id]);

  return (
    <div className='container product-cart-item'>
      <div className='row'>
        <div className='col-4 product-cart-img'>
          <img src={data.image} alt={data.title} />
        </div>
        <div className='col-1'></div>
        <div className='col-6 product-cart-info'>
          <p className='product-cart-info-title'>{data.title}</p>
          <p
            className='product-cart-info-desc'
            data-toggle='tooltip'
            data-placement='left'
            title={data.description}>
            {data.description}
          </p>
          <p className='product-cart-info-price'>
            <span>Price: ₹ </span>
            {data.price}
          </p>
          <div className='product-quantity mb-2'>
            <button
              className='btn btn-outline-secondary fs-5 ps-3 pe-3'
              onClick={() => {
                setProductQuant((prevData) => prevData - 1);
              }}>
              -
            </button>
            <button className='btn btn-outline-secondary fs-5 ps-4 pe-4 m-1'>
              {productQuant > 0 ? productQuant : setProductQuant(1)}
            </button>
            <button
              className='btn btn-outline-secondary fs-5 ps-3 pe-3'
              onClick={() => {
                setProductQuant((prevData) => prevData + 1);
              }}>
              +
            </button>
          </div>
          <button
            className='btn btn-danger remove-cart-btn'
            onClick={() => {
              dispatch(removeFromCart(data.id));
            }}>
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
