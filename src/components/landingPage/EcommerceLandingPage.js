import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { getEcommerceData } from './../../services/ecommerceDataService';

function EcommerceLandingPage() {
  const dispatch = useDispatch();
  const { loading, productData, errorMessage } = useSelector(
    (state) => state.productsData
  );

  useEffect(() => {
    dispatch(getEcommerceData());
  }, [dispatch]);

  return (
    <div>
      <div className='container-fluid product-container'>
        {loading ? (
          <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        ) : !errorMessage ? (
          productData?.map((data, index) => <Product data={data} key={index} />)
        ) : (
          <div className='alert alert-danger' role='alert'>
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default EcommerceLandingPage;
