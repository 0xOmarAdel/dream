import { AnimatePresence } from "framer-motion";
import MealDetailsModal from "./MealDetailsModal";
import { useState } from "react";
import MealReviewsModal from "./MealReviewsModal";

const MealModal = (props) => {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <dialog id="meal_modal" className="modal modal-middle">
      <div className="modal-box max-w-[40rem]">
        <AnimatePresence>
          {showReviews ? (
            <MealReviewsModal
              hideReviews={() => setShowReviews(false)}
              rating={props.rating}
            />
          ) : (
            <MealDetailsModal
              {...props}
              showReviews={() => setShowReviews(true)}
            />
          )}
        </AnimatePresence>
      </div>
    </dialog>
  );
};

export default MealModal;
