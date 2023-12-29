import { Link } from "react-router-dom";

const GridImages = () => {
  return (
    <Link to="/menu" className="group hidden lg:block">
      <div className="relative">
        <img
          src="https://template-html.egprojets.com/food-lover/assets/img/demo/offers/01.jpg"
          alt=""
        />
        <span className="absolute top-1/2 left-1/2 z-20 -translate-y-1/2 -translate-x-1/2 bg-white p-4 rounded-lg text-lg text-gray-700 text-center font-medium capitalize transition duration-300 group-hover:text-primary">
          explore <br /> our <br /> menu
        </span>
      </div>
    </Link>
  );
};

export default GridImages;
