import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div
      className={`grid grid-cols-1 ${
        cartItems.length === 1 ? "grid-cols-1" : "lg:grid-cols-2"
      } gap-x-10 gap-y-7`}
    >
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartItems;
