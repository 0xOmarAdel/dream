import { twMerge } from "tailwind-merge";

const MealDescription = ({ description, classes }) => {
  return (
    <p className={twMerge("mt-2 text-gray-600", classes || "")}>
      {description}
    </p>
  );
};

export default MealDescription;
