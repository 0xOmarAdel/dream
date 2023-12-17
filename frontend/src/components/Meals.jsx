import Meal from "./Meal";
import { meals } from "../data/fakeProducts";

const Meals = () => {
  return (
    <div className="mt-8 grid grid-cols-5 gap-8">
      {meals.map((meal) => (
        <Meal key={meal.id} {...meal} />
      ))}
    </div>
  );
};

export default Meals;
