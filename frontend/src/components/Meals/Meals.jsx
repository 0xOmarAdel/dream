import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import MealModal from "./MealModal";
import Meal from "./Meal";

const Meals = () => {
  const { runAxios: fetchMeals, data: meals, loading } = useAxios("/meals");

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const [activeModalData, setActiveModalData] = useState(null);

  const changeActivateModal = (newData) => {
    setActiveModalData(newData);
    document.getElementById("meal_modal").showModal();
  };

  if (loading) return;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <MealModal {...activeModalData} />
      {meals.map((meal) => (
        <Meal
          key={meal._id}
          {...meal}
          changeActivateModal={changeActivateModal}
        />
      ))}
    </div>
  );
};

export default Meals;
