import { twMerge } from "tailwind-merge";

const MealImage = ({ image, classes, showModal }) => {
  return (
    <img
      src={image}
      alt=""
      className={twMerge(
        `w-full bg-gray-200 rounded-md ${showModal ? "cursor-pointer" : ""}`,
        classes || ""
      )}
      onClick={showModal || (() => {})}
    />
  );
};

export default MealImage;
