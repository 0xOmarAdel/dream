import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import useAxios from "../../hooks/useAxios";
import { motion } from "framer-motion";
import MealRating from "./MealRating";
import { useEffect } from "react";
import Lottie from "lottie-react";
import BurgerAnimation from "../../assets/BurgerAnimation.json";

const MealReviewsModal = ({ hideReviews, rating, id }) => {
  const {
    runAxios: fetchRatings,
    data: ratings,
    loading,
  } = useAxios(`/meals/${id}/rating-info`);

  useEffect(() => {
    fetchRatings();
  }, [fetchRatings]);

  if (loading)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full flex flex-row justify-center items-center"
      >
        <Lottie animationData={BurgerAnimation} loop={true} className="w-28" />
      </motion.div>
    );

  const totalReviews = ratings.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.rating;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FaArrowLeftLong
        onClick={hideReviews}
        className="text-2xl text-gray-500 cursor-pointer transition duration-500 hover:text-primary"
      />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center gap-2 mb-3">
          <span className="text-2xl">
            <span className="font-semibold">{rating}</span>
            /5
          </span>
          <MealRating rating={rating || 0} starsContainerClasses="text-2xl" />
          <span>{totalReviews} customer reviews</span>
        </div>
        <div className="flex flex-col items-center">
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
                    width: `${(rating.rating / totalReviews) * 100}%`,
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
