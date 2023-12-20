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
          <Link to="/menu">
            <button className="btn btn-primary">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
    // <div className="container mx-auto mt-2">
    //   <section className="mt-1 md:mt-0 relative bg-[url('https://img.freepik.com/free-photo/blur-coffee-cafe-shop-restaurant-with-bokeh-background_1421-472.jpg?w=740&t=st=1698614210~exp=1698614810~hmac=3583ba6df599e2c6a4bf501ada68b2eb04f304a65e7db95118d83ceaffc4a180')] bg-cover bg-center h-96 bg-no-repeat">
    //     <div className="relative mx-auto max-w-screen-xl h-full sm:px-6 items-center flex lg:px-8">
    //       <div className="max-w-xl md:ml-4 ml-0 text-left px-6 md:px-0">
    //         <h1 className="text-3xl font-extrabold sm:text-5xl text-sky-500">
    //           Dream
    //           <strong className="block font-extrabold text-white">
    //             Your Favorite Restaurant.
    //           </strong>
    //         </h1>

    //         <div className="mt-8 flex flex-wrap gap-2 text-center">
    //           <Link to="/shop">
    //             <p className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-sky-500 hover:text-white focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto">
    //               Order Now
    //             </p>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Hero;
