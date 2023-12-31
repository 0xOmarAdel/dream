import ImagesSlider from "./ImagesSlider";

const Hero = () => {
  return (
    <div
      className="relative min-h-[70vh] bg-center bg-fixed flex"
      style={{
        backgroundImage:
          "url(https://template-html.egprojets.com/food-lover/assets/img/demo/slides/01.jpg)",
      }}
    >
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-3 items-center">
        <h1 className="col-span-2 font-bold text-6xl text-gray-200 leading-snug">
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
