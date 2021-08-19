import { configureStore } from '@reduxjs/toolkit';
import ecommerceDataReducer from './slices/EcommerceProductSlice';
import individualProductReducer from './slices/IndividualProductSlice';
import cartDataReducer from './slices/CartSlice';

const store = configureStore({
  reducer: {
    productsData: ecommerceDataReducer,
    individualProductdata: individualProductReducer,
    cartData: cartDataReducer,
  },
});

export default store;
