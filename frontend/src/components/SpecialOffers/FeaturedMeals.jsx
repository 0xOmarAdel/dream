import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import FeaturedMeal from "./FeaturedMeal";

const FeaturedMeals = () => {
  const {
    runAxios: fetchFeaturedMeals,
    data: featuredMeals,
    loading,
  } = useAxios("/meals?featured=true");

  useEffect(() => {
    fetchFeaturedMeals();
  }, [fetchFeaturedMeals]);

  if (loading) return;

  return (
    <div className="flex flex-col gap-6">
      {featuredMeals.map((featuredMeal) => (
        <FeaturedMeal key={featuredMeal.id} featuredMeal={featuredMeal} />
      ))}
    </div>
  );
};

export default FeaturedMeals;
