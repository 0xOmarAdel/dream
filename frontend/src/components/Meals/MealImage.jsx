const MealImage = ({ showModal }) => {
  return (
    <img
      src="https://cafeu.vercel.app/img/product/12.png"
      alt=""
      className={`w-full bg-gray-200 rounded-md ${
        showModal ? "cursor-pointer" : ""
      }`}
      onClick={showModal || (() => {})}
    />
  );
};

export default MealImage;
