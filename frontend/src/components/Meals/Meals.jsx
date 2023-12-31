import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import MealModal from "./MealModal";
import Meal from "./Meal";
import { useLocation } from "react-router-dom";

const Meals = ({ searchQuery }) => {
  const { runAxios: fetchMeals, data: meals, loading } = useAxios("/meals");

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const location = useLocation();
  const isAdminMeals = location.pathname === "/admin/meals";

  const filteredMeals = isAdminMeals
    ? meals
      ? meals.filter((meal) =>
          meal.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : []
    : meals;
  const Classes = `grid grid-cols-1 ${
    isAdminMeals ? "overflow-y-scroll h-screen" : ""
  } lg:grid-cols-4 gap-8`;

  const [activeModalData, setActiveModalData] = useState(null);
  const [showReviews, setShowReviews] = useState(false);

  const changeActivateModal = (newData) => {
    setActiveModalData(newData);
    setShowReviews(false);
    document.getElementById("meal_modal").showModal();
  };

  if (loading) return;
  return (
    <div className={Classes}>
      <MealModal
        mealData={activeModalData}
        showReviews={showReviews}
        setShowReviews={setShowReviews}
        isAdminMeals={isAdminMeals}
      />
      {filteredMeals.map((meal) => (
        <Meal
          key={meal._id}
          {...meal}
          isAdminMeals={isAdminMeals}
          changeActivateModal={changeActivateModal}
        />
      ))}
    </div>
  );
};

export default Meals;
