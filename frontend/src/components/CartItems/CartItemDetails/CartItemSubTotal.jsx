const CartItemSubTotal = ({ price, quantity }) => {
  return (
    <p className="text-lg font-bold  text-gray-800 ">${price * quantity}</p>
  );
};

export default CartItemSubTotal;
