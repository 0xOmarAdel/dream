import MealImage from "../Meals/MealImage";
import MealTitle from "../Meals/MealTitle";
import Stars from "../../ui/Stars";
const ReviewedMeals = ({ meals }) => {
  console.log(meals);

  return (
    <div
      className={`grid grid-cols-1 ${
        meals.length === 1
          ? "grid-cols-1"
          : meals.length > 1
          ? "sm:grid-cols-2"
          : ""
      } gap-x-10 gap-y-7`}
    >
      {meals.map((meal) => (
        <div
          key={meal._id}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6"
        >
          <MealImage image={meal.image} classes="w-full h-32 object-fill" />
          <div className="flex flex-col gap-2">
            <MealTitle title={meal.title} classes="m-0 text-xl" />
            <Stars
              max={5}
              numberOfStars={meal.rating}
              containerClasses="text-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewedMeals;
