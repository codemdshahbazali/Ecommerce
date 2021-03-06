import { createSlice } from '@reduxjs/toolkit';
import { getProductData } from '../../services/ecommerceDataService';

const individualProductDataSlice = createSlice({
  name: 'individualProductData',
  initialState: {
    loading: null,
    individualProduct: null,
    errorMessage: null,
  },
  extraReducers: (cases) => {
    cases
      .addCase(getProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.individualProduct = action.payload;
        state.errorMessage = null;
      })
      .addCase(getProductData.rejected, (state) => {
        state.loading = false;
        state.errorMessage =
          'Something went wrong while fetching individual data. Please refresh!!!';
      });
  },
});

export default individualProductDataSlice.reducer;
