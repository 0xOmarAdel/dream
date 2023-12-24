import { motion } from "framer-motion";
import MealDescription from "./MealDescription";
import MealImage from "./MealImage";
import MealTitle from "./MealTitle";
import MealRating from "./MealRating";

const MealDetailsModal = ({
  title,
  description,
  image,
  rating,
  showReviews,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid grid-cols-2 gap-7">
        <div className="col-span-1">
          <MealImage image={image} />
        </div>
        <div className="col-span-1 flex flex-col gap-1">
          <MealTitle title={title} classes="m-0 text-2xl" />
          <div className="flex flex-row items-center gap-2">
            <MealRating rating={rating || 0} starsContainerClasses="mt-1 text-xl" />
            <motion.span
              className="text-[15px] text-gray-600 font-medium translate-y-0.5 cursor-pointer"
              role="btn"
              onClick={showReviews}
            >
              View reviews
            </motion.span>
          </div>
          <MealDescription description={description} />
        </div>
      </div>

      <form method="dialog" className="flex flex-row-reverse">
        <button className="btn">Close</button>
      </form>
    </motion.div>
  );
};

export default MealDetailsModal;
