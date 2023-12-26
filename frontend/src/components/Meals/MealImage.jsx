const MealImage = ({ image, showModal }) => {
  return (
    <img
      src={image}
      alt=""
      className={`w-full bg-gray-200 rounded-md ${
        showModal ? "cursor-pointer" : ""
      }`}
      onClick={showModal || (() => {})}
    />
  );
};

export default MealImage;
