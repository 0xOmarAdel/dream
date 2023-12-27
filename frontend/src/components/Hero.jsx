import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="z-[2] bg-sky-500 lg:bg-sky-50">
      <div className="container m-auto pt-20 py-6 lg:py-0 lg:pt-4 px-6 md:px-12 lg:px-7">
        <div className="flex items-start flex-wrap px-2 md:px-0">
          <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
            <h1 className="font-bold text-4xl text-white lg:text-sky-500 md:text-5xl lg:w-10/12">
              Your favorite dishes, right at your service
            </h1>

            <div className="mt-8">
              <Link
                to="/menu"
                className="bg-black font-medium text-white px-4 py-2 mr-4 rounded"
              >
                Menu
              </Link>
              <Link
                to="/reservations"
                className="bg-white text-black lg:bg-sky-500 font-medium capitalize lg:text-white px-4 py-2 rounded"
              >
                Book a Table
              </Link>
            </div>
          </div>
          <div className="ml-auto lg:-mb-52 lg:block hidden lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
              className="relative drop-shadow-xl float"
              alt="food illustration"
              loading="lazy"
              width="4500"
              height="4500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
