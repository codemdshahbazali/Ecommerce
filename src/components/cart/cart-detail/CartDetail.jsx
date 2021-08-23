import React from "react";
import { useSelector } from "react-redux";
import Order from "../order/Order";

import "./CartDetail.css";

const CartDetail = () => {
  // const cartData = useSelector((state) => state.cartData);
  return (
    <div className="cart-detail-main-div">
      <div className="cart-detail-heading ">CART DETAIL</div>
      <div className="cart-detail-address">
        <h3 className="title">ADDRESS DETAIL </h3>
        <hr />
        <div className="overflow-manage">
          <div className="form-group">
            <input
              type="street"
              className="form-control"
              id="autocomplete"
              placeholder="Street"
            />

            <input
              type="city"
              className="form-control"
              id="inputCity"
              placeholder="City"
            />

            <input
              type="zip"
              className="form-control"
              id="inputZip"
              placeholder="Zip"
            />

            <input
              type="state"
              className="form-control"
              id="inputState"
              placeholder="State"
            />

            <input
              type="county"
              className="form-control"
              id="inputCounty"
              placeholder="County"
            />
          </div>
        </div>
      </div>
      <div className="cart-detail-payment-method">
        <form className="credit-card">
          <div className="form-header">
            <h4 className="title">PAYMENT DETAIL</h4>
            <hr />
          </div>

          <div className="form-body">
            {/* <!-- Card Number --> */}
            <input
              type="integer"
              className="card-number payment-styling"
              placeholder="Card Number"
            />
            <input
              type="text"
              class="card-owner payment-styling"
              placeholder="Card Owner"
            />
            {/* <!-- Date Field --> */}
            <div className="date-field">
              <div style={{ position: "relative", top: "4px", color: "black" }}>
                expdata:{" "}
              </div>
              <div className="month payment-styling">
                <select name="Month">
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
              </div>
              <div className="year payment-styling">
                <select name="Year">
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
            </div>

            {/* <!-- Card Verification Field --> */}
            <div className="card-verification">
              <div className="cvv-input">
                <input
                  className="cvv-input payment-styling"
                  type="text"
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="subtotal-detail">
        <Order />
      </div>
    </div>
  );
};

export default CartDetail;
