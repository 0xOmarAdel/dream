import WeeklyCard from "./WeeklyCard";
import { meals } from "../data/fakeProducts";

const Specials = [...meals[0].meal.slice(0, 2), ...meals[1].meal.slice(0, 1)];
const WeeklySpecials = () => {
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
          {Specials.map((special, index) => (
            <WeeklyCard
              key={index}
              image={special.image}
              title={special.title}
              description={special.description}
              price={special.price}
              rating={special.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklySpecials;
