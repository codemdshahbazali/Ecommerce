import React from 'react';
import { useHistory } from 'react-router-dom';

function Product({ data }) {
  const history = useHistory();
  return (
    <div
      className='product-card'
      onClick={() => {
        history.push(`/${data.id}`);
      }}>
      <div className='product-card-img'>
        <img src={data.image} alt={data.title} />
      </div>
      <div className='product-card-info'>
        <p
          className='product-card-info-title'
          data-toggle='tooltip'
          data-placement='bottom'
          title={data.title}>
          {data.title}
        </p>
        <p className='product-card-info-price'>
          <span>Price: ₹ </span>
          {data.price}
        </p>
      </div>
    </div>
  );
}

export default Product;
