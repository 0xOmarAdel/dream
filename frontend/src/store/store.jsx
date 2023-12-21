import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/userAuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
