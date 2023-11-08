import WeeklyCard from "./WeeklyCard";

const Specials = [
  {
    imageSrc: "/assets/steak.jpg",
    title: "Steak",
    description: "Grilled beef steak and potatoes on plate.",
  },
  {
    imageSrc: "/assets/steak.jpg",
    title: "Steak",
    description: "Grilled beef steak and potatoes on plate.",
  },
  {
    imageSrc: "/assets/steak.jpg",
    title: "Steak",
    description: "Grilled beef steak and potatoes on plate.",
  },
  {
    imageSrc: "/assets/steak.jpg",
    title: "Steak",
    description: "Grilled beef steak and potatoes on plate.",
  },
];
const WeeklySpecials = () => {
  return (
    <section className="hero min-h-screen bg-gray-50">
      <div className="hero-content   text-center">
        <div className="max-w-full">
          <h1 className="text-5xl font-bold text-sky-500">Weekly Specials!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center md:flex md:flex-row md:justify-center md:flex-wrap">
            {Specials.map((special, index) => (
              <WeeklyCard
                key={index}
                imageSrc={special.imageSrc}
                title={special.title}
                description={special.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklySpecials;
