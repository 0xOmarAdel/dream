import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import FeaturedMeal from "./FeaturedMeal";

const FeaturedMeals = ({ isInView }) => {
  const {
    runAxios: fetchFeaturedMeals,
    data,
    loading,
  } = useAxios("/meals?featured=true");

  useEffect(() => {
    fetchFeaturedMeals();
  }, [fetchFeaturedMeals]);

  if (loading) return;

  return (
    <div className="flex flex-col gap-6">
      {data?.meals?.map((featuredMeal, index) => (
        <FeaturedMeal
          key={featuredMeal.id}
          featuredMeal={featuredMeal}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
};

export default FeaturedMeals;
