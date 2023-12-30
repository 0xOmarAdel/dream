import { twMerge } from "tailwind-merge";

const MealTitle = ({ title, classes, showModal }) => {
  return (
    <p
      className={twMerge(
        "mt-2 text-lg text-gray-600 cursor-pointer leading-6",
        classes || ""
      )}
      onClick={showModal}
    >
      {title}
    </p>
  );
};

export default MealTitle;
