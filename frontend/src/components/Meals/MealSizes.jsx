import React, { useState } from "react";

const MealSizes = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="mt-2 flex flex-row gap-1.5 text-sm">
      <button
        className={`${
          activeButton === 0 ? "text-sky-500" : "text-gray-600"
        } hover:bg-sky-500`}
        onClick={() => handleButtonClick(0)}
      >
        <span className="border px-1 py-0.5">S</span>
      </button>
      <button
        className={`${
          activeButton === 1 ? "text-sky-500" : "text-gray-600"
        } hover:bg-sky-500`}
        onClick={() => handleButtonClick(1)}
      >
        <span className="border px-1 py-0.5">M</span>
      </button>
      <button
        className={`${
          activeButton === 2 ? "text-sky-500" : "text-gray-600"
        } hover:bg-sky-500`}
        onClick={() => handleButtonClick(2)}
      >
        <span className="border px-1 py-0.5">L</span>
      </button>
    </div>
  );
};

export default MealSizes;
