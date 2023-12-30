import MealTitle from "../Meals/MealTitle";
import MealImage from "../Meals/MealImage";
import MealDescription from "../Meals/MealDescription";
import { priceFormatter } from "../../utils/priceFormatter";

const FeaturedMeal = ({ featuredMeal }) => {
  return (
    <div key={featuredMeal.id} className="flex flex-row justify-between gap-4">
      <div className="flex flex-row gap-4">
        <MealImage image={featuredMeal.image} classes="w-36" />
        <div className="">
          <MealTitle
            title={featuredMeal.title}
            classes="text-xl text-primary font-medium"
          />
          <MealDescription
            description={featuredMeal.description}
            classes="text-gray-500 font-medium"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-end gap-1 text- text-gray-600 font-medium">
        {featuredMeal.options.map((featuredMealOption) => (
          <div key={featuredMealOption._id} className="flex flex-row gap-2">
            <p>{featuredMealOption.size}</p>
            <p>{priceFormatter(featuredMealOption.price)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMeal;
