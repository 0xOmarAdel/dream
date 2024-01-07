import Stars from "../../ui/Stars";
import MealImage from "../Meals/MealImage";
import MealTitle from "../Meals/MealTitle";

const PendingReview = ({ meal }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
      <MealImage image={meal.image} classes="w-full h-32 object-fill" />
      <div className="flex flex-col gap-2">
        <MealTitle title={meal.title} classes="m-0 text-xl" />
        <Stars max={5} numberOfStars={meal.rating} containerClasses="text-lg" />
      </div>
    </div>
  );
};

export default PendingReview;
