import MealPrice from "./MealPrice";
import MealTitle from "./MealTitle";
import MealSizes from "./MealSizes";
import MealImage from "./MealImage";
import MealRating from "./MealRating";
import MealAddToCartButton from "./MealAddToCartButton";

const Product = () => {
  return (
    <div className="col-span-1 flex flex-col items-center p-5 shadow-md rounded-md text-center">
      <MealImage />
      <MealRating />
      <MealTitle />
      <MealPrice />
      <MealSizes />
      <MealAddToCartButton />
    </div>
  );
};

export default Product;
