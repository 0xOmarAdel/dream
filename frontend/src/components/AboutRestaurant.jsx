import restaurant from "/assets/restaurant.jpg";
const About = () => {
  return (
    <section className="hero min-h-screen bg-gray-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={restaurant} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl text-sky-500 font-bold">Dream </h1>
          <h2 className="text-2xl text-sky-500 font-medium">New York</h2>
          <p className="py-6 text-sky-600 font-normal">
            One of America's most beloved restaurants, Dream has welcomed guests
            to enjoy its contemporary American cuisine, warm hospitality, and
            unparalleled service in New York City for over two decades. Chef
            Michael Anthony's ever-evolving seasonal menu showcases the
            restaurant's relationships with local farms and purveyors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
