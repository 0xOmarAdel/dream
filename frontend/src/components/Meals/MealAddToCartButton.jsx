import { IoCartOutline } from "react-icons/io5";
import useCartActions from "../../hooks/useCartActions";
import Button from "../../ui/Button";

const MealAddToCartButton = ({ meal, selectedSize }) => {
  const { addMealToCart } = useCartActions();

  const selectedPrice = meal.options.find(
    (option) => option.size === selectedSize
  ).price;

  const newMeal = {
    id: meal.id,
    title: meal.title,
    categoryName: meal.categoryName,
    price: selectedPrice,
    size: selectedSize,
    image: meal.image,
  };

  return (
    <Button
      onClick={() => addMealToCart(newMeal)}
      text="add to cart"
      classes="mt-4 py-1.5 text-sm"
      icon={IoCartOutline}
      iconClasses="text-lg"
    />
  );
};

export default MealAddToCartButton;
