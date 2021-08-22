import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEcommerceData } from './../../services/ecommerceDataService';
import Crousel from './crousel/Crousel';
import Category from './category/Category';
import CategoryOverview from './categoryOverview/CategoryOverview';
import Testimonials from './testimonial/testimonial/Testimmonials';
// import Testimonials from './testimonials/testimmonials';

function EcommerceLandingPage() {
  const [categories, setCategories] = useState(null);
  const dispatch = useDispatch();
  const { productCategory } = useSelector((state) => state.categoryProductData);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    dispatch(getEcommerceData());
  }, [dispatch]);

  return (
    <div>
      <Crousel />
      {!categories ? (
        <div className='d-flex justify-content-center mt-3'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <h2
            className='section-header'
            style={{ textAlign: 'center', marginTop: '30px' }}>
            Categories we offer
          </h2>
          <div className='container-fluid product-container'>
            {categories && <Category categories={categories} />}
          </div>
          <h2
            className='section-header'
            style={{ textAlign: 'center', marginTop: '30px' }}>
            {productCategory.toUpperCase()}
          </h2>
          <CategoryOverview />
          <Testimonials />
        </>
      )}
    </div>
  );
}

export default EcommerceLandingPage;
