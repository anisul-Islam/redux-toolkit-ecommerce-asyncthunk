import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';

export const store = configureStore({
  reducer: {
    productsR: productReducer,
  },
});
