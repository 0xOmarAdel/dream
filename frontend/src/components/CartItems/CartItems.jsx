import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div
      className={`grid grid-cols-1 ${
        cartItems.length === 1
          ? "grid-cols-1"
          : cartItems.length > 1
          ? "lg:grid-cols-2"
          : ""
      } gap-x-10 gap-y-7`}
    >
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500">
          Your cart is empty. Add meals to your cart from our{" "}
          <Link to="/menu" className="text-primary font-medium">
            menu
          </Link>{" "}
          to be able to make an order!
        </p>
      ) : (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      )}
    </div>
  );
};

export default CartItems;
