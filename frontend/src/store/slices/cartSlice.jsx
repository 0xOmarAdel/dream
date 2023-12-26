import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/cart");
    const cartItems = response.data;

    let totalQuantity = 0;
    let totalPrice = 0;

    for (const cartItem of cartItems) {
      totalPrice += cartItem.price * cartItem.quantity;
      totalQuantity += cartItem.quantity;
    }

    return {
      cartItems,
      totalQuantity,
      totalPrice,
    };
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.items = action.payload.cartItems;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    });
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
