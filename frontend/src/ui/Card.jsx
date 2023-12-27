import { twMerge } from "tailwind-merge";

const Card = ({ children, classes }) => {
  return (
    <div
      className={twMerge(
        "h-fit p-8 pb-10 border bg-gray-50 rounded-md shadow-md",
        classes || ""
      )}
    >
      {children}
    </div>
  );
};

export default Card;
