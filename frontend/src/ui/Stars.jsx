import { FaStar } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const Stars = ({ max, numberOfStars, containerClasses }) => {
  const numberOfFullStars = Number.isInteger(numberOfStars)
    ? numberOfStars
    : Math.floor(numberOfStars);
  const numberOfEmptyStars =
    numberOfStars && numberOfStars !== Math.floor(numberOfStars)
      ? max - numberOfFullStars - 1
      : max - numberOfFullStars;

  const fullStarsArray = new Array(numberOfFullStars)
    .fill("")
    .map((_, i) => i + 1);
  const emptyStarsArray = new Array(numberOfEmptyStars)
    .fill("")
    .map((_, i) => i + 1);

  const width = parseInt((numberOfStars % 1).toFixed(2).substring(2));

  return (
    <div
      className={twMerge(
        "flex flex-row gap-1 text-primary",
        containerClasses || ""
      )}
    >
      {fullStarsArray?.map((star) => (
        <FaStar key={star} />
      ))}

      {!!(numberOfStars && numberOfStars % 1 !== 0) && (
        <div className="relative">
          <FaStar className="text-gray-400" />
          <span
            className="absolute overflow-hidden top-0 left-0 h-full"
            style={{ width: `${width}%` }}
          >
            <FaStar />
          </span>
        </div>
      )}

      {emptyStarsArray.map((emptyStar) => (
        <FaStar key={emptyStar} className="text-gray-400" />
      ))}
    </div>
  );
};

export default Stars;
