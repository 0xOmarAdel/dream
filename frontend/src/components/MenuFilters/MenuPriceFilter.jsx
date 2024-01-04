import ReactSlider from "react-slider";

const MenuPriceFilter = ({
  priceRange,
  selectedMinPrice,
  selectedMaxPrice,
  setSelectedMinPrice,
  setSelectedMaxPrice,
}) => {
  const minPrice = selectedMinPrice || priceRange[0];
  const maxPrice = selectedMaxPrice || priceRange[1];
  const minDistance = Math.ceil((priceRange[1] - priceRange[0]) / 10);

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
          value={[minPrice, maxPrice]}
          onChange={(newValues) => {
            setSelectedMinPrice(newValues[0]);
            setSelectedMaxPrice(newValues[1]);
          }}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          minDistance={minDistance}
          step={1}
        />
        <div className="mt-5 flex flex-row justify-between gap-4">
          <input
            type="number"
            className="w-24 bg-transparent border border-gray-300 rounded-sm text-slate-900 text-center font-semibold tracking-wider transition duration-700 focus:outline-none focus:border-gray-500"
            min={priceRange[0]}
            max={maxPrice - minDistance}
            value={minPrice}
            onChange={(e) => setSelectedMinPrice(e.target.value)}
          />
          <span className="text-lg select-none">-</span>
          <input
            type="number"
            className="w-24 bg-transparent border border-gray-300 rounded-sm text-slate-900 text-center font-semibold tracking-wider transition duration-700 focus:outline-none focus:border-gray-500"
            min={minPrice + minDistance}
            max={priceRange[1]}
            value={maxPrice}
            onChange={(e) => setSelectedMaxPrice(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPriceFilter;
