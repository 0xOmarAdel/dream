import MealPrice from "./MealPrice";
import MealTitle from "./MealTitle";
import MealSizes from "./MealSizes";
import MealImage from "./MealImage";
import MealRating from "./MealRating";
import MealAddToCartButton from "./MealAddToCartButton";
import { meals } from "../../data/fakeProducts";
import { useState } from "react";

const Meal = ({
  _id,
  title,
  description,
  options,
  image,
  rating,
  changeActivateModal,
}) => {
  const [selectedSize, setSelectedSize] = useState(options[0].size);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const showModal = () => {
    changeActivateModal({ _id, title, description, image, rating });
  };

  return (
    <div className="col-span-1 flex flex-col items-center p-3 shadow-md rounded-md text-center">
      {meals.map((category) =>
        category.meal.map((meal) => (
          <>
            <MealImage image={meal.image} showModal={showModal} />
            <MealTitle title={meal.title} showModal={showModal} />
            <MealPrice
              price={meal.price}
              options={options}
              selectedSize={selectedSize}
            />
            <MealRating
              rating={rating}
              showModal={showModal}
              starsContainerClasses="mt-1.5"
            />
            <MealSizes options={options} onSizeClick={handleSizeClick} />
            <MealAddToCartButton
              meal={{
                id: _id,
                title,
                options,
                image,
              }}
              selectedSize={selectedSize}
            />
          </>
        ))
      )}
    </div>
  );
};

export default Meal;
