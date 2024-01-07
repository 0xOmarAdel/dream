import { useState } from "react";
import MealImage from "../Meals/MealImage";
import MealTitle from "../Meals/MealTitle";
import StarInput from "../../ui/StarInput";
import Button from "../../ui/Button";

const PendingReview = ({ meal }) => {
  const [rating, setRating] = useState(0);

  const submitHandler = () => {
    console.log(rating);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
      <MealImage image={meal.image} classes="w-full h-32 object-fill" />
      <div className="flex flex-col gap-2">
        <MealTitle title={meal.title} classes="m-0 text-xl" />
        <StarInput numberOfStars={5} rating={rating} setRating={setRating} />
        {rating !== 0 && (
          <Button text="Submit" classes="mt-2 py-1.5" onClick={submitHandler} />
        )}
      </div>
    </div>
  );
};

export default PendingReview;
