import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import "./StarInput.css";

const StarInput = (props) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex flex-row gap-1">
      {[...Array(props.numberOfStars)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={currentRating}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => props.setRating(currentRating)}
            />
            <FaStar
              className={
                currentRating <= (hover || props.rating || 0)
                  ? "text-xl text-gray-300 cursor-pointer transition duration-700 text-primary"
                  : "text-xl text-gray-300 cursor-pointer transition duration-700"
              }
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarInput;
