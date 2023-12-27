const CartItemSubTotal = ({ price, quantity }) => {
  return (
    <p className="text-2xl font-medium text-gray-700">${price * quantity}</p>
  );
};

export default CartItemSubTotal;
