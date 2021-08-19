import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const findBol = state.every((data) => {
        return data.id !== action.payload.id;
      });

      console.log(findBol);
      if (findBol) {
        state.push(action.payload);
      } else {
        return state.map((data) => {
          if (data.id === action.payload.id) {
            return { ...data, ...action.payload };
          }
          return data;
        });
      }
    },

    removeFromCart: (state, action) => {
      console.log(action.payload);
      return state.filter((data) => {
        console.log(data.id);
        return data.id !== action.payload;
      });
    },

    updateCart: (state, action) => {
      return state.map((data) => {
        if (data.id === action.payload.id) {
          return { ...data, ...action.payload };
        }
        return data;
      });
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
