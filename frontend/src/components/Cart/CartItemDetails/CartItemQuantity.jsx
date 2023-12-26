const CartItemQuantity = ({ quantity }) => {
  return (
    <input
      type="number"
      className="w-12 px-2 py-4 text-center border-0 rounded-md  bg-gray-50 md:text-right placeholder-gray-800"
      value={quantity}
      disabled
    />
  );
};

export default CartItemQuantity;
