import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function ProductCart() {
  const cartData = useSelector((state) => state.cartData);
  return (
    <div>
      <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-8'>
            {cartData
              .map((data, index) => {
                return <CartItem data={data} key={index} />;
              })
              .reverse()}
          </div>
          <div className='col-2 subtotal-card'>
            <span>Subtotal: ({cartData.length} items): ₹ </span>
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
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
