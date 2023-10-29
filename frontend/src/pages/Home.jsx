import img from "../assets/restauranfood.jpg";
import Card from "../components/card";
const Home = () => {
  return [<Hero />, <Specials />, <Testimonials />, <About />];
};

const Hero = () => {
  return (
    <main className="hero min-h-screen bg-gray-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          className="max-w-sm rounded-lg shadow-2xl sm:display-none"
          alt="restaurant"
        />
        <div>
          <h1 className="text-5xl font-bold text-sky-500">Dream Restaurant</h1>
          <p className="py-6 text-sky-600 text-medium font-serif">
            Welcome to Dream Restaurant, where culinary dreams come true. Our
            menu is carefully crafted to delight your taste buds and transport
            you to a world of flavors.
          </p>
          <button className="btn btn-primary bg-sky-500 btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Reserve a Table
          </button>
        </div>
      </div>
    </main>
  );
};

const Specials = () => {
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
          <Card />
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="hero min-h-screen bg-gray-50">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-sky-500">Testimonials</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="hero min-h-screen bg-gray-50">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-sky-500">About Us</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Home;
