import React, { useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addToCart } from '../../redux/slices/CartSlice';
import { getProductCategoryData } from '../../services/ecommerceDataService';
import './ProductCategory.css';

function ProductCategory() {
  const dispatch = useDispatch();
  const { category } = useParams();
  console.log(category);
  const history = useHistory();

  useEffect(() => {
    dispatch(getProductCategoryData({ category }));
  }, [dispatch, category]);

  const { loading, productCategoryData, errorMessage } = useSelector(
    (state) => state.categoryProductData
  );
  return (
    <div
      className='container1'
      style={{ position: 'relative', top: '70px', marginBottom: '100px' }}>
      {!loading ? (
        productCategoryData?.length > 0 ? (
          productCategoryData.map((el, index) => {
            return (
              <div key={index} className='card1'>
                <div className='imgbx'>
                  <img src={el.image} alt='' />
                  <button
                    className='allprd_btn'
                    onClick={() => {
                      history.push(`/productDetails/${el.id}`);
                    }}>
                    View Details
                  </button>
                </div>
                <div className='content'>
                  <p className='allprd_ttl'> {el.title}</p>
                  <p className='allprd_sttl'>{el.description}</p>
                  <div className='allprd_sb'>
                    <span>Rs .{el.price}</span>
                    <div className='lolo'>
                      <button
                        className=' allprd_add_btn'
                        onClick={() => {
                          const productObj = {
                            ...el,
                            productQuantity: 1,
                          };
                          dispatch(addToCart(productObj));
                        }}>
                        <FaShoppingCart style={{ fontSize: '25px' }} />
                      </button>
                      <p className='allprd_add'>Add to Cart</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className='allprod_none'> No Products Found </div>
        )
      ) : (
        <div className='d-flex justify-content-center mt-3'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCategory;
