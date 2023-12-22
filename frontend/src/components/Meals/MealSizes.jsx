import React, { useState } from "react";

const MealSizes = ({ options }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="mt-2 flex flex-row gap-1.5 text-sm">
      {options.map((option, index) => (
        <button
          key={index}
          className={`${
            activeButton === index ? "text-sky-500" : "text-gray-600"
          } hover:bg-sky-500`}
          onClick={() => handleButtonClick(index)}
        >
          <span className="border px-1 py-0.5">{option.size}</span>
        </button>
      ))}
    </div>
  );
};

export default MealSizes;
