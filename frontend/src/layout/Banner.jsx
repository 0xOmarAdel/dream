import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";

const Banner = ({ title, breadcrumbs }) => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
  };

  return (
    <div className="relative bg-cover bg-center py-28" style={bannerStyle}>
      <div className="relative z-20 flex flex-col items-center text-gray-200">
        <h1 className="text-4xl font-bold capitalize">{title}</h1>
        <div className="breadcrumbs text-xl">
          <ul>
            {breadcrumbs.map((breadcrumb) => (
              <>
                {breadcrumb.path ? (
                  <li
                    key={breadcrumb}
                    className="text-gray-300 capitalize before:!opacity-100"
                  >
                    <Link
                      to={breadcrumb.path}
                      className="transition duration-300 hover:!no-underline hover:text-primary"
                    >
                      {breadcrumb.text}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={breadcrumb}
                    className="text-gray-300 capitalize before:!opacity-100"
                  >
                    {breadcrumb.text}
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60"></div>
    </div>
  );
};

export default Banner;
