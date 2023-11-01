import { Link } from "react-router-dom";
import img from "../assets/restaurantFood.jpg";
import restaurant from "../assets/restaurant.jpg";
import Card from "../components/Card";
const Home = () => {
  return [<Hero />, <Specials />, <Testimonials />, <About />];
};

const Hero = () => {
  return (
    <div className="container mx-auto mt-2">
      <section className="mt-1 md:mt-0 relative bg-[url('https://img.freepik.com/free-photo/blur-coffee-cafe-shop-restaurant-with-bokeh-background_1421-472.jpg?w=740&t=st=1698614210~exp=1698614810~hmac=3583ba6df599e2c6a4bf501ada68b2eb04f304a65e7db95118d83ceaffc4a180')] bg-cover bg-center h-96 bg-no-repeat">
        <div className="relative mx-auto max-w-screen-xl h-full sm:px-6 items-center flex lg:px-8">
          <div className="max-w-xl md:ml-4 ml-0 text-left px-6 md:px-0">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-sky-500">
              Dream
              <strong className="block font-extrabold text-white">
                Your Favourite Restaurant.
              </strong>
            </h1>

            <div className="mt-8 flex flex-wrap gap-2 text-center">
              <Link to="/shop">
                <p className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-sky-500 hover:text-white focus:outline-none focus:ring active:bg-yello-500 sm:w-auto">
                  Order Now
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
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
          <div className="card w-64 bg-sky-500 shadow-xl">
            <h2 className="card-title">Rating</h2>
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
export default Home;
