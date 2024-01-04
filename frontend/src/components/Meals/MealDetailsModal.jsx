import { motion } from "framer-motion";
import MealDescription from "./MealDescription";
import MealImage from "./MealImage";
import MealTitle from "./MealTitle";
import MealRating from "./MealRating";
import EditableMeal from "../Admin/EditableMeal";

const MealDetailsModal = ({
  _id,
  title,
  description,
  image,
  rating,
  showReviews,
  options,
  isAdminMeals,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className={`grid ${
          isAdminMeals ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        } gap-7`}
      >
        {!isAdminMeals && (
          <div className="col-span-1">
            <MealImage image={image} />
          </div>
        )}

        <div className="col-span-1 flex flex-col gap-1">
          {isAdminMeals && (
            <EditableMeal
              title={title}
              options={options}
              description={description}
              image={image}
              id={_id}
            />
          )}
          {!isAdminMeals && (
            <MealTitle
              title={title}
              classes="m-0 text-2xl"
              isAdminMeals={isAdminMeals}
            />
          )}

          {!isAdminMeals && (
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <MealRating
                rating={rating || 0}
                starsContainerClasses="mt-1 text-xl"
              />

              <motion.span
                className="text-[15px] text-gray-600 font-medium translate-y-0.5 cursor-pointer"
                role="btn"
                onClick={showReviews}
              >
                View reviews
              </motion.span>
            </div>
          )}

          {!isAdminMeals && <MealDescription description={description} />}
        </div>
      </div>

      <form method="dialog" className="flex flex-row-reverse gap-3">
        <button className="btn">Close</button>
      </form>
    </motion.div>
  );
};

export default MealDetailsModal;
