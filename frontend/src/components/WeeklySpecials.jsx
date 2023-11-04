import Card from "../components/Card";

const Specials = [
  {
    imageSrc: "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Steak",
    description: "Grilled beef steak and potatoes on plate.",
  },
  {
    imageSrc: "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Steak",
    description: "Grilled beef steak and potatoes on plate.",
  },
  {
    imageSrc: "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Steak",
    description: "Grilled beef steak and potatoes on plate.",
  },
];
const WeeklySpecials = () => {
  return (
    <section className="hero min-h-screen bg-gray-50">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-sky-500">Weekly Specials!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Specials.map((special, index) => (
              <Card
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
