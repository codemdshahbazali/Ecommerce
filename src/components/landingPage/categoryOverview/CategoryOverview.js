import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product';
import './CategoryOverview.css';

function CategoryOverview() {
  const [inialtData, setInialtData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setInialtData(data);
      });
  }, []);

  const { loading, productCategoryData, errorMessage } = useSelector(
    (state) => state.categoryProductData
  );

  return (
    <div className='category-overview-container'>
      {!productCategoryData &&
        inialtData.map((data, index) => <Product data={data} key={index} />)}
      {loading ? (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      ) : !errorMessage ? (
        productCategoryData?.map((data, index) => (
          <Product data={data} key={index} />
        ))
      ) : (
        <div className='alert alert-danger' role='alert'>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default CategoryOverview;
