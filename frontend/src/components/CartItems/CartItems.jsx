import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="py-4 border-gray-200 ">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartItems;
