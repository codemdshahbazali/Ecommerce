import { combineReducers } from '@reduxjs/toolkit';
import ecommerceDataReducer from './EcommerceProductSlice';
import individualProductReducer from './IndividualProductSlice';
import cartDataReducer from './CartSlice';
import categoryProductReducer from './CategoryAllProduct';

const rootReducer = combineReducers({
  productsData: ecommerceDataReducer,
  individualProductdata: individualProductReducer,
  cartData: cartDataReducer,
  categoryProductData: categoryProductReducer,
});

export default rootReducer;
