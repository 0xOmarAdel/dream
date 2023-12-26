import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} from "../store/slices/cartSlice";

const useCartActions = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const addMealToCart = async (newMeal) => {
    await dispatch(addItemToCart({ cartItems, newMeal }));
  };

  const removeMealFromCart = async (mealToRemove) => {
    await dispatch(removeItemFromCart({ cartItems, mealToRemove }));
  };

  const updateCartItem = async (cartItemId, quantity) => {
    await dispatch(updateItemQuantity({ cartItems, cartItemId, quantity }));
  };

  return { addMealToCart, removeMealFromCart, updateCartItem };
};

export default useCartActions;
