import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function ProductCart() {
  const cartData = useSelector((state) => state.cartData);

  useEffect(() => {
    document.getElementsByClassName('App')[0].style.overflow = 'inherit';
    return () => {
      document.getElementsByClassName('App')[0].style.overflow = 'hidden';
    };
  }, []);

  return (
    <div style={{ position: 'relative', top: '70px' }}>
      <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-lg-1'></div>
          <div className='col-lg-7 col-md-12 product-cart-orderlist'>
            {cartData.length > 0 ? (
              cartData
                .map((data, index) => {
                  return <CartItem data={data} key={index} />;
                })
                .reverse()
            ) : (
              <h2 className='text-center' style={{ height: '200px' }}>
                No Items in the cart. Please add item to purchase
              </h2>
            )}
          </div>
          <div className='col-lg-3 col-md-8 col-10 subtotal-card'>
            <div>
              <span>
                Subtotal: (
                {cartData.reduce(
                  (accumulator, currentValue) =>
                    accumulator + Number(currentValue.productQuantity),
                  0
                )}{' '}
                items): ₹{' '}
              </span>
              <span>
                {cartData
                  .reduce(
                    (accumulator, currentValue) =>
                      accumulator +
                      Number(currentValue.price) *
                        Number(currentValue.productQuantity),
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
            <div>
              <button className='btn btn-light'>Proceed To Checkout</button>
            </div>
          </div>
          <div className='col-lg-1'></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
