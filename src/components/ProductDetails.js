import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductData } from './../services/ecommerceDataService';

import { addToCart } from './../redux/slices/CartSlice';
import { useState } from 'react';

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => dispatch(getProductData({ id })), [dispatch, id]);

  const { loading, individualProduct, errorMessage } = useSelector(
    (state) => state.individualProductdata
  );

  console.log(individualProduct);

  const [productCount, setProductCount] = useState(1);

  return (
    <div className='container-fluid mt-4'>
      {loading ? (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      ) : !errorMessage ? (
        <>
          <div className='row align-items-center'>
            <div className='col-6 product-card-img-toolkit text-center'>
              <img
                src={individualProduct?.image}
                alt={individualProduct?.title}
              />
            </div>
            <div className='col-4 product-card-info-toolkit'>
              <p className='product-card-info-title-toolkit h4'>
                {individualProduct?.title}
              </p>
              <p className='product-card-info-desc-toolkit'>
                {individualProduct?.description}
              </p>
              <p className='product-card-info-price-toolkit h4'>
                <span>Price: ₹ </span>
                {individualProduct?.price}
              </p>
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
        </>
      ) : (
        <div className='alert alert-danger' role='alert'>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
