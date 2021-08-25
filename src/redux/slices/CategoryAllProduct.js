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
      state.errorMessage = null;
    },
    [getProductCategoryData.rejected]: (state) => {
      state.loading = false;
      state.errorMessage =
        'Something went wrong while fetching product categpry. Please Refresh';
    },
  },
});

export default categoryGetAllProductSlice.reducer;
