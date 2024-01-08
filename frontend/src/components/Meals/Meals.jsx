import { useState } from "react";
import { useLocation } from "react-router-dom";
import MealModal from "./MealModal";
import Meal from "./Meal";

const Meals = ({ meals, searchQuery }) => {
  const location = useLocation();
  const isAdminMeals = location.pathname === "/admin/meals";

  const filteredMeals = isAdminMeals
    ? meals
      ? meals.filter((meal) =>
          meal.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : []
    : meals;

  const classes = `w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 ${
    isAdminMeals ? "overflow-y-scroll h-screen" : ""
  } `;

  const [activeModalData, setActiveModalData] = useState(null);
  const [showReviews, setShowReviews] = useState(false);

  const changeActivateModal = (newData) => {
    setActiveModalData(newData);
    setShowReviews(false);
    document.getElementById("meal_modal").showModal();
  };

  return (
    <div className={classes}>
      <MealModal
        mealData={activeModalData}
        showReviews={showReviews}
        setShowReviews={setShowReviews}
        isAdminMeals={isAdminMeals}
      />
      {filteredMeals.length > 0 ? (
        filteredMeals.map((meal) => (
          <Meal
            key={meal._id}
            {...meal}
            isAdminMeals={isAdminMeals}
            changeActivateModal={changeActivateModal}
          />
        ))
      ) : (
        <p className="col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-4 text-xl text-gray-600 flex items-center justify-center">
          Found no results
        </p>
      )}
    </div>
  );
};

export default Meals;
