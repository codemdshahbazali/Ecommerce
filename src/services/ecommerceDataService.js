import { createAsyncThunk } from '@reduxjs/toolkit';

export const getEcommerceData = createAsyncThunk(
  'ecommerceData/getEcommerceData',
  async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  }
);

export const getProductData = createAsyncThunk(
  'individualProductData/getProductData',
  async (dataObject) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${dataObject.id}`
      );
      const data = await response.json();
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  }
);

export const getProductCategoryData = createAsyncThunk(
  'allProductsCategory/getProductCategoryData',
  async (dataObject) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${dataObject.category}`
      );
      const data = await response.json();
      return {
        data,
        category: dataObject.category,
      };
    } catch (e) {
      throw new Error(e.message);
    }
  }
);
