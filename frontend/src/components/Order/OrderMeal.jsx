import { priceFormatter } from "../../utils/priceFormatter";
import MealImage from "../Meals/MealImage";
import MealTitle from "../Meals/MealTitle";

const OrderMeal = ({ meal }) => {
  return (
    <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
      <MealImage image={meal.image} classes="mb-4 md:mb-8 w-full md:w-40" />
      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-4">
          <MealTitle
            title={meal.title}
            classes="mt-0 text-xl xl:text-2xl text-gray-800 font-semibold"
          />
          <div className="flex justify-start items-start flex-col">
            <p className="text-sm leading-none text-gray-800 capitalize">
              <span className="text-gray-700 font-bold">Size: </span>
              {meal.size}
            </p>
          </div>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base xl:text-lg leading-6">
            {priceFormatter(meal.price.toFixed(2))}
          </p>
          <p className="text-base xl:text-lg leading-6 text-gray-800">
            {meal.quantity}
          </p>
          <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
            {priceFormatter(meal.price * meal.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderMeal;
