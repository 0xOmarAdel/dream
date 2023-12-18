import ReactSlider from "react-slider";

const MenuPriceFilter = ({ priceRange }) => {
  const minDistance = Math.ceil((priceRange.max - priceRange.min) / 10);

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
          defaultValue={[priceRange.min, priceRange.max]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          minDistance={minDistance}
        />
        <div className="mt-5 flex flex-row justify-between gap-4">
          <input
            type="number"
            min={priceRange.min}
            max={priceRange.max - minDistance}
            className="w-24 bg-transparent border border-gray-300 rounded-sm text-slate-900 text-center font-semibold tracking-wider transition duration-700 focus:outline-none focus:border-gray-500"
            value={priceRange.min}
          />
          <span className="text-lg select-none">-</span>
          <input
            type="number"
            min={priceRange.min + minDistance}
            max={priceRange.max}
            className="w-24 bg-transparent border border-gray-300 rounded-sm text-slate-900 text-center font-semibold tracking-wider transition duration-700 focus:outline-none focus:border-gray-500"
            value={priceRange.max}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPriceFilter;
