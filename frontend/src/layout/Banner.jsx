import banner from "../assets/banner.png";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
  };

  return (
    <div
      className="bg-cover bg-center py-20 flex flex-col items-center text-gray-100"
      style={bannerStyle}
    >
      <h1 className="text-3xl font-bold">Menu Page</h1>
      <div className="breadcrumbs text-lg">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>All Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
