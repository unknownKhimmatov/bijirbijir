import { configureStore } from "@reduxjs/toolkit";
import currentProduct from "./slice/currentProduct";
export const store = configureStore({
  reducer: {
    currentProduct,
  },
});
