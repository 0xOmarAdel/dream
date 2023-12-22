import MealPrice from "./MealPrice";
import MealTitle from "./MealTitle";
import MealSizes from "./MealSizes";
import MealImage from "./MealImage";
import MealRating from "./MealRating";
import MealAddToCartButton from "./MealAddToCartButton";

const Meal = ({ title, description, options, image, _id, categoryId }) => {
  const handleSizeClick = (selectedSize) => {
    console.log("Selected Size:", selectedSize);
  };
  return (
    <div className="col-span-1 flex flex-col items-center p-5 shadow-md rounded-md text-center">
      <MealImage image={image} />
      <MealTitle title={title} />
      <MealRating />
      <MealPrice options={options} />
      <MealSizes options={options} onSizeClick={handleSizeClick} />
      <MealAddToCartButton />
    </div>
  );
};

export default Meal;
