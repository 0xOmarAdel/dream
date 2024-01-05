import { useState } from "react";

const MealSizes = ({ options, onSizeClick }) => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    onSizeClick(options[index].size);
  };

  return (
    <div className="mt-2 flex flex-row gap-1.5 text-sm">
      {options.map((option, index) => (
        <button
          key={index}
          className={`${
            activeButton === index ? "text-sky-500" : "text-gray-600"
          } transition duration-300 hover:bg-sky-500 hover:text-white`}
          onClick={() => handleButtonClick(index)}
        >
          <span className="capitalize border px-1 py-0.5">{option.size}</span>
        </button>
      ))}
    </div>
  );
};

export default MealSizes;
