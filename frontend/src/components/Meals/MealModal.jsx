import { AnimatePresence } from "framer-motion";
import MealDetailsModal from "./MealDetailsModal";
import MealReviewsModal from "./MealReviewsModal";

const MealModal = ({ mealData, showReviews, setShowReviews }) => {
  return (
    <dialog id="meal_modal" className="modal modal-middle">
      <div className="modal-box max-w-[40rem]">
        <AnimatePresence>
          {showReviews ? (
            <MealReviewsModal
              hideReviews={() => setShowReviews(false)}
              id={mealData._id}
              rating={mealData.rating}
            />
          ) : (
            <MealDetailsModal
              {...mealData}
              showReviews={() => setShowReviews(true)}
            />
          )}
        </AnimatePresence>
      </div>
    </dialog>
  );
};

export default MealModal;
