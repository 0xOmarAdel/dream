import { IoCartOutline } from "react-icons/io5";
import useCartActions from "../../hooks/useCartActions";

const MealAddToCartButton = ({ meal, selectedSize }) => {
  const { addMealToCart } = useCartActions();

  const selectedPrice = meal.options.find(
    (option) => option.size === selectedSize
  ).price;

  const newMeal = {
    id: meal.id,
    title: meal.title,
    price: selectedPrice,
    size: selectedSize,
    image: meal.image,
  };

  return (
    <button
      className="btn btn-outline btn-primary w-full min-h-fit h-fit mt-3 py-2"
      onClick={() => addMealToCart(newMeal)}
    >
      <IoCartOutline className="text-lg" />
      Add to cart
    </button>
  );
};

export default MealAddToCartButton;
