import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateCart, removeFromCart } from './../../redux/slices/CartSlice';

function CartItem({ data }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [productQuant, setProductQuant] = useState(data.productQuantity);

  useEffect(() => {
    dispatch(updateCart({ id: data.id, productQuantity: productQuant }));
  }, [productQuant, dispatch, data.id]);

  return (
    <div className='container product-cart-item'>
      <div className='row product-cart-item-row'>
        <div
          className='col-md-4 col-sm-10 product-cart-img'
          onClick={() => {
            history.push(`/productDetails/${data.id}`);
          }}>
          <img src={data.image} alt={data.title} />
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-6 col-sm-10 product-cart-info'>
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
