import banner from "../assets/banner.jpg";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
  };

  return (
    <div className="relative bg-cover bg-center pb-28 pt-48" style={bannerStyle}>
      <div className="relative z-20 flex flex-col items-center text-gray-200">
        <h1 className="text-4xl font-bold">Menu Page</h1>
        <div className="breadcrumbs text-xl">
          <ul>
            <li>Home</li>
            <li>Menu</li>
          </ul>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60"></div>
    </div>
  );
};

export default Banner;
