import { twMerge } from "tailwind-merge";

const MealTitle = ({ title, classes, showModal }) => {
  return (
    <p
      className={twMerge(
        `mt-2 text-lg text-gray-600 leading-6 ${
          showModal ? "cursor-pointer" : ""
        }`,
        classes || ""
      )}
      onClick={showModal || (() => {})}
    >
      {title}
    </p>
  );
};

export default MealTitle;
