import WeeklyCard from "./WeeklyCard";
import useAxios from "../hooks/useAxios";
import { useEffect } from "react";

const WeeklySpecials = () => {
  const {
    runAxios: fetchMeals,
    data: meals,
    loading,
  } = useAxios("/meals?featured=true");
  console.log(meals);
  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);
  return (
    <section className="min-h-screen pt-12 lg:pt-42 bg-gray-50">
      <div className="max-w-full">
        <h1 className="text-3xl lg:text-5xl text-center font-bold text-sky-500">
          Weekly Specials
        </h1>
        <p className="py-4 text-center font-medium">
          Embark on a gastronomic journey every week with our handcrafted Weekly
          Specials
        </p>
        <div className="flex px-8 flex-col gap-5 justify-center items-center md:flex md:flex-row md:justify-center">
          {loading
            ? "Loading"
            : meals.map((special) => (
                <WeeklyCard
                  key={special._id}
                  image={special.image}
                  title={special.title}
                  description={special.description}
                  options={special.options}
                  rating={special.rating}
                  categoryName={special.categoryName}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklySpecials;
