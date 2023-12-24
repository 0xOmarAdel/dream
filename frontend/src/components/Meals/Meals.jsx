import Meal from "./Meal";
import { useEffect, useState } from "react";
import axiosApi from "../../utils/axiosConfig";
import MealModal from "./MealModal";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axiosApi
      .get("/meals")
      .then((response) => {
        setMeals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
      });
  }, []);

  const [activeModalData, setActiveModalData] = useState(null);

  const changeActivateModal = (newData) => {
    setActiveModalData(newData);
    document.getElementById("meal_modal").showModal();
  };

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
