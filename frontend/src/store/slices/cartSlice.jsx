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

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ cartItems, newMeal }) => {
    try {
      const existingCartItem = cartItems.find(
        (cartItem) =>
          cartItem.mealId === newMeal.id && cartItem.size === newMeal.size
      );

      if (!existingCartItem) {
        const response = await axios.post(
          `http://localhost:5000/api/v1/cart/add/${newMeal.id}`,
          { option: newMeal.size }
        );

        const updatedCartItems = [
          {
            id: response.data.cartItemId,
            mealId: newMeal.id,
            title: newMeal.title,
            price: newMeal.price,
            size: newMeal.size,
            image: newMeal.image,
            quantity: 1,
          },
          ...cartItems,
        ];

        return {
          cartItems: updatedCartItems,
          additionalQuantity: 1,
          additionalPrice: newMeal.price,
        };
      } else {
        console.log("Product is already in cart!");
      }
    } catch (error) {
      console.log("You need to log in first!");
    }
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async ({ cartItems, mealToRemove }) => {
    try {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === mealToRemove.id
      );

      if (existingCartItem) {
        const response = await axios.delete(
          `http://localhost:5000/api/v1/cart/delete/${mealToRemove.id}`
        );

        const updatedCartItems = cartItems.filter(
          (cartItem) => cartItem.id !== mealToRemove.id
        );

        console.log(response.data.message);

        return {
          cartItems: updatedCartItems,
          subtractedQuantity: 1,
          subtractedPrice: mealToRemove.price,
        };
      } else {
        console.log("Product is not in cart!");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.items = action.payload.cartItems;
        state.totalQuantity = action.payload.totalQuantity;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        if (action.payload) {
          state.items = action.payload.cartItems;
          state.totalQuantity += action.payload.additionalQuantity;
          state.totalPrice += action.payload.additionalPrice;
        }
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        if (action.payload) {
          state.items = action.payload.cartItems;
          state.totalQuantity -= action.payload.subtractedQuantity;
          state.totalPrice -= action.payload.subtractedPrice;
        }
      });
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
