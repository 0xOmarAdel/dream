import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/slices/cartSlice";

const useCartActions = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const addMealToCart = async (newMeal) => {
    await dispatch(addItemToCart({ cartItems, newMeal }));
  };

  return { addMealToCart };
};

export default useCartActions;
