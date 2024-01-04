import { useEffect, useState } from "react";
import ReactSlider from "react-slider";

const MenuPriceFilter = ({
  priceRange,
  selectedMinPrice,
  selectedMaxPrice,
  setSelectedMinPrice,
  setSelectedMaxPrice,
}) => {
  const minPrice = parseInt(selectedMinPrice || priceRange[0]);
  const maxPrice = parseInt(selectedMaxPrice || priceRange[1]);
  const minDistance = Math.ceil((priceRange[1] - priceRange[0]) / 10);

  const [priceValues, setPriceValues] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setSelectedMinPrice(priceValues[0]);
    setSelectedMaxPrice(priceValues[1]);
  }, [priceValues, setSelectedMaxPrice, setSelectedMinPrice]);

  return (
    <div className="collapse collapse-arrow border-b border-gray-300 rounded-none">
      <input type="checkbox" />
      <div className="collapse-title px-0 text-xl font-medium">Price</div>
      <div className="collapse-content px-0">
        <ReactSlider
          className="slider"
          thumbClassName="slider-thumb"
          trackClassName="slider-track"
          pearling
          defaultValue={[priceRange.minPrice, priceRange.maxPrice]}
          value={priceValues}
          onChange={(newValues) => setPriceValues(newValues)}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          minDistance={minDistance}
          step={1}
        />
        <div className="mt-5 flex flex-row justify-between">
          <input
            type="number"
            className="w-fit bg-transparent border border-gray-300 rounded-sm text-slate-900 text-center font-semibold tracking-wider transition duration-700 focus:outline-none focus:border-gray-500"
            min={priceRange[0]}
            max={maxPrice - minDistance}
            value={priceValues[0]}
            onChange={(e) =>
              setPriceValues((prevState) => [+e.target.value, prevState[1]])
            }
          />
          <span className="text-lg select-none">-</span>
          <input
            type="number"
            className="w-fit bg-transparent border border-gray-300 rounded-sm text-slate-900 text-center font-semibold tracking-wider transition duration-700 focus:outline-none focus:border-gray-500"
            min={minPrice + minDistance}
            max={priceRange[1]}
            value={priceValues[1]}
            onChange={(e) =>
              setPriceValues((prevState) => [prevState[0], +e.target.value])
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPriceFilter;
