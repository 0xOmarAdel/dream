import MealTitle from "../Meals/MealTitle";
import MealImage from "../Meals/MealImage";
import MealDescription from "../Meals/MealDescription";

const FeaturedMeal = ({ featuredMeal }) => {
  return (
    <div key={featuredMeal.id} className="flex flex-row gap-4">
      <MealImage image={featuredMeal.image} classes="w-36" />
      <div className="">
        <MealTitle
          title={featuredMeal.title}
          classes="text-2xl text-primary font-medium"
        />
        <MealDescription
          description={featuredMeal.description}
          classes="text-lg"
        />
      </div>
    </div>
  );
};

export default FeaturedMeal;
