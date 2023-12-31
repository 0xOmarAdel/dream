import ImagesSlider from "./ImagesSlider";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      className="relative min-h-[70vh] px-8 sm:px-10 md:px-16 lg:px-16 xl:px-22 bg-center bg-fixed flex"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-5 items-center">
        <h1 className="col-span-5 lg:col-span-3 font-bold text-5xl md:text-6xl text-gray-200 leading-[1.3] md:!leading-[1.4] text-center">
          <span className="text-primary">Dream Restaurant,</span> the best food
          you&apos;ll ever <span className="text-primary">dream</span> of.
        </h1>
        <ImagesSlider />
      </div>
      <div className="absolute inset-0 z-10 bg-black bg-opacity-70"></div>
    </div>
  );
};

export default Hero;
