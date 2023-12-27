const CartItemImage = ({ image, title }) => {
  return <img src={image} alt={title} className="w-28 h-28 object-cover rounded-md" />;
};

export default CartItemImage;
