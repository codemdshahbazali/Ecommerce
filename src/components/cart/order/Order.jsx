import React, { useState } from "react";
import "./Order.css";
const Order = () => {
  const [state, setstate] = useState(false);
  return (
    <div>
      <button
        class={`order ${state ? "animate" : ""}`}
        onClick={() => {
          return setstate(true);
        }}
      >
        <span class="default">Complete Order</span>
        <span class="success">
          Order Placed
          <svg viewbox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <div class="box"></div>
        <div class="truck">
          <div class="back"></div>
          <div class="front">
            <div class="window"></div>
          </div>
          <div class="light top"></div>
          <div class="light bottom"></div>
        </div>
        <div class="lines"></div>
      </button>
      <a
        class="dribbble"
        href="https://dribbble.com/shots/7112021-Order-confirm-animation"
        target="_blank"
      >
        <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" />
      </a>
    </div>
  );
};

export default Order;
