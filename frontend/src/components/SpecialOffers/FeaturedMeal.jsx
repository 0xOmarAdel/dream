import { motion } from "framer-motion";
import MealTitle from "../Meals/MealTitle";
import MealImage from "../Meals/MealImage";
import MealDescription from "../Meals/MealDescription";
import { priceFormatter } from "../../utils/priceFormatter";

const FeaturedMeal = ({ featuredMeal, index, isInView }) => {
  return (
    <motion.div
      key={featuredMeal.id}
      className="flex flex-col sm:flex-row justify-between gap-4"
      variants={{
        hidden: {
          x: -100,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 0.5,
            delay: index * 0.2,
          },
        },
      }}
      initial={"hidden"}
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <MealImage image={featuredMeal.image} classes="w-60 sm:w-36" />
        <div className="flex flex-col items-center sm:items-start">
          <MealTitle
            title={featuredMeal.title}
            classes="text-xl text-primary font-medium"
          />
          <MealDescription
            description={featuredMeal.description}
            classes="text-gray-500 font-medium text-center"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center sm:items-end gap-1 text- text-gray-600 font-medium">
        {featuredMeal.options.map((featuredMealOption) => (
          <div key={featuredMealOption._id} className="flex flex-row gap-2">
            <p>{featuredMealOption.size}</p>
            <p>{priceFormatter(featuredMealOption.price)}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedMeal;
