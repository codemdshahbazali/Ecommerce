import { createSlice } from '@reduxjs/toolkit';
import { getEcommerceData } from '../../services/ecommerceDataService';

const ecommerceProductDataSlice = createSlice({
  name: 'ecommerceData',
  initialState: {
    loading: null,
    productData: null,
    errorMessage: null,
  },
  extraReducers: (cases) => {
    cases
      .addCase(getEcommerceData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEcommerceData.rejected, (state) => {
        state.loading = false;
        state.errorMessage = 'Something went wrong';
      })
      .addCase(getEcommerceData.fulfilled, (state, action) => {
        state.loading = false;
        state.productData = action.payload;
      });
    // [getEcommerceData.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getEcommerceData.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.productData = action.payload;
    // },
    // [getEcommerceData.rejected]: (state) => {
    //   state.loading = false;
    //   state.errorMessage = 'Something went wrong';
    // },
  },
});

export default ecommerceProductDataSlice.reducer;
