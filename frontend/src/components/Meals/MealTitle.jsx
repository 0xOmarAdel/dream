import { twMerge } from "tailwind-merge";

const MealTitle = ({ title, classes }) => {
  return (
    <p
      className={twMerge("mt-2 text-lg text-gray-600 leading-6", classes || "")}
    >
      {title}
    </p>
  );
};

export default MealTitle;
