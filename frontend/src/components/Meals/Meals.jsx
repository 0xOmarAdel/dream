import Meal from "./Meal";
import { useEffect, useState } from "react";
import axiosApi from "../../utils/axiosConfig";

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
  return (
    <div className="grid grid-cols-5 gap-8">
      {meals.map((meal) => (
        <Meal key={meal._id} {...meal} />
      ))}
    </div>
  );
};

export default Meals;
