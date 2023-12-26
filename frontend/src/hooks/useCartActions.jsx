import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/slices/cartSlice";

const useCartActions = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const addMealToCart = async (newMeal) => {
    await dispatch(addItemToCart({ cartItems, newMeal }));
  };

  const removeMealFromCart = async (mealToRemove) => {
    await dispatch(removeItemFromCart({ cartItems, mealToRemove }));
  };

  return { addMealToCart, removeMealFromCart };
};

export default useCartActions;
