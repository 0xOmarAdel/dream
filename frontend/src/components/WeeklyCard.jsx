import MealTitle from "./Meals/MealTitle";
import MealImage from "./Meals/MealImage";
import { useState } from "react";
import MealSizes from "./Meals/MealSizes";
import MealDescription from "./Meals/MealDescription";

const WeeklyCard = ({ image, title, description, options, categoryName }) => {
  const [selectedSize, setSelectedSize] = useState(options[0].size);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="max-w-md mx-auto">
        <div className="p-4 sm:p-6">
          <MealImage image={image} />
          <MealTitle
            title={title}
            classes="font-bold text-gray-700 text-[22px] leading-7 mb-1"
          />
          <p className="text-[17px] font-bold text-sky-500">{categoryName}</p>
          <MealSizes options={options} onSizeClick={handleSizeClick} />
          <MealDescription description={description} />
          <button className="block mt-6 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-sky-500 rounded-[14px] hover:bg-sky-600 focus:outline-none text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCard;
