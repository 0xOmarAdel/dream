import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import MealRating from "./MealRating";

const MealReviewsModal = ({ hideReviews, rating }) => {
  // api call here to get the meal reviews

  const productReviews = 21;
  const ratings = [
    {
      value: 5,
      rating: 12,
    },
    {
      value: 4,
      rating: 6,
    },
    {
      value: 3,
      rating: 2,
    },
    {
      value: 2,
      rating: 0,
    },
    {
      value: 1,
      rating: 3,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FaArrowLeftLong
        onClick={hideReviews}
        className="text-2xl text-gray-600 cursor-pointer"
      />
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center gap-2 mb-3">
          <span className="text-2xl">
            <span className="font-semibold">{rating}</span>
            /5
          </span>
          <MealRating rating={rating || 0} starsContainerClasses="text-2xl" />
          <span>{productReviews} customer reviews</span>
        </div>
        <div className="">
          {ratings.map((rating) => (
            <div
              key={rating.value}
              className="flex flex-row items-center justify-start gap-1 h-fit"
            >
              <span className="w-3">{rating.value}</span>
              <FaStar className="text-primary" />
              <div className="w-44 h-4 relative bg-gray-300">
                <div
                  className="absolute h-full z-10 bg-primary"
                  style={{
                    width: `${(rating.rating / productReviews) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm">({rating.rating})</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MealReviewsModal;
