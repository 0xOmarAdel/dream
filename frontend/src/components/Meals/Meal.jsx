import MealPrice from "./MealPrice";
import MealTitle from "./MealTitle";
import MealSizes from "./MealSizes";
import MealImage from "./MealImage";
import MealRating from "./MealRating";
import MealAddToCartButton from "./MealAddToCartButton";
import { useState } from "react";

const Meal = ({
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
    changeActivateModal({ title, description, image, rating });
  };

  return (
    <div className="col-span-1 flex flex-col items-center p-3 shadow-md rounded-md text-center">
      <button className="btn" onClick={showModal}>
        open modal
      </button>
      <MealImage image={image} showModal={showModal} />
      <MealTitle title={title} showModal={showModal} />
      <MealRating
        rating={rating}
        showModal={showModal}
        starsContainerClasses="mt-1.5"
      />
      <MealPrice options={options} selectedSize={selectedSize} />
      <MealSizes options={options} onSizeClick={handleSizeClick} />
      <MealAddToCartButton />
    </div>
  );
};

export default Meal;
