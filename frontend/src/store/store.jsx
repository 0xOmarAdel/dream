import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/userAuthSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartSlice,
  },
});
