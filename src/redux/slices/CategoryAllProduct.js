import { createSlice } from '@reduxjs/toolkit';
import { getProductCategoryData } from './../../services/ecommerceDataService';

const categoryGetAllProductSlice = createSlice({
  name: 'allProductsCategory',
  initialState: {
    loading: null,
    productCategoryData: null,
    productCategory: 'Electronics',
    errorMessage: null,
  },
  extraReducers: {
    [getProductCategoryData.pending]: (state) => {
      state.loading = true;
    },
    [getProductCategoryData.fulfilled]: (state, action) => {
      state.loading = false;
      state.productCategoryData = action.payload.data;
      state.productCategory = action.payload.category;
    },
    [getProductCategoryData.rejected]: (state) => {
      state.loading = false;
      state.errorMessage = 'Something went wrong fetching product categpry';
    },
  },
});

export default categoryGetAllProductSlice.reducer;
