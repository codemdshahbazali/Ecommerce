import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartDetail from "./cart-detail/CartDetail";
import "./productcart.css";

function ProductCart() {
  const cartData = useSelector((state) => state.cartData);
  return (
    <div className="rabbit ">
      <div className="r-productcart-mainDiv">
        <div className="productlisting">
          {cartData
            .map((data, index) => {
              return <CartItem data={data} key={index} />;
            })
            .reverse()}
        </div>
        <div className="subtotal">
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
        <div className="cart-detail">
          <CartDetail />
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
