import React from 'react';
import { useSelector } from 'react-redux';
import Order from '../order/Order';

import './CartDetail.css';

const CartDetail = () => {
  // const cartData = useSelector((state) => state.cartData);
  return (
    <div className='cart-detail-main-div'>
      <div className='cart-detail-heading '>CART DETAIL</div>
      <div className='cart-detail-address'>
        <h3 className='title'>ADDRESS DETAIL </h3>
        <hr />
        <div className='overflow-manage'>
          <div class='form-group'>
            <input
              type='street'
              class='form-control'
              id='autocomplete'
              placeholder='Street'
            />

            <input
              type='city'
              class='form-control'
              id='inputCity'
              placeholder='City'
            />

            <input
              type='zip'
              class='form-control'
              id='inputZip'
              placeholder='Zip'
            />

            <input
              type='state'
              class='form-control'
              id='inputState'
              placeholder='State'
            />

            <input
              type='county'
              class='form-control'
              id='inputCounty'
              placeholder='County'
            />
          </div>
        </div>
      </div>
      <div className='cart-detail-payment-method'>
        <form class='credit-card'>
          <div class='form-header'>
            <h4 class='title'>PAYMENT DETAIL</h4>
            <hr />
          </div>

          <div class='form-body'>
            {/* <!-- Card Number --> */}
            <input
              type='integer'
              class='card-number payment-styling'
              placeholder='Card Number'
            />
            <input
              type='text'
              class='card-owner payment-styling'
              placeholder='Card Owner'
            />
            {/* <!-- Date Field --> */}
            <div class='date-field'>
              <div style={{ position: 'relative', top: '4px', color: 'black' }}>
                expdata:{' '}
              </div>
              <div class='month payment-styling'>
                <select name='Month'>
                  <option value='january'>January</option>
                  <option value='february'>February</option>
                  <option value='march'>March</option>
                  <option value='april'>April</option>
                  <option value='may'>May</option>
                  <option value='june'>June</option>
                  <option value='july'>July</option>
                  <option value='august'>August</option>
                  <option value='september'>September</option>
                  <option value='october'>October</option>
                  <option value='november'>November</option>
                  <option value='december'>December</option>
                </select>
              </div>
              <div class='year payment-styling'>
                <select name='Year'>
                  <option value='2016'>2016</option>
                  <option value='2017'>2017</option>
                  <option value='2018'>2018</option>
                  <option value='2019'>2019</option>
                  <option value='2020'>2020</option>
                  <option value='2021'>2021</option>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                  <option value='2024'>2024</option>
                </select>
              </div>
            </div>

            {/* <!-- Card Verification Field --> */}
            <div class='card-verification'>
              <div class='cvv-input'>
                <input
                  class='cvv-input payment-styling'
                  type='text'
                  placeholder='CVV'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='subtotal-detail'>
        <Order />
      </div>
    </div>
  );
};

export default CartDetail;
