import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="hero !min-h-[60vh]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/blur-coffee-cafe-shop-restaurant-with-bokeh-background_1421-472.jpg?w=740&t=st=1698614210~exp=1698614810~hmac=3583ba6df599e2c6a4bf501ada68b2eb04f304a65e7db95118d83ceaffc4a180)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Dream</h1>
          <p className="mb-5 text-4xl">Your Favorite Restaurant.</p>
          <div className="flex justify-center gap-2">
            <Link to="/menu">
              <button className="bg-primary px-4 py-2 rounded-lg font-semibold text-white">
                Menu
              </button>
            </Link>
            <Link to="/reservations">
              <button className="bg-gray-900 px-4 py-2 rounded-lg font-semibold text-white">
                Book a table
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
