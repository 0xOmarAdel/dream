import ReactSlider from "react-slider";

const MenuPriceFilter = () => {
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
          defaultValue={[0, 100]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          minDistance={10}
        />
        <div className="mt-5 flex flex-row justify-between gap-4">
          <input
            type="number"
            min={0}
            max={100 - 10}
            className="w-24 bg-transparent border border-gray-300 rounded-sm text-slate-900 text-center font-semibold tracking-wider transition duration-700 focus:outline-none focus:border-gray-500"
            value={0}
          />
          <span className="text-lg select-none">-</span>
          <input
            type="number"
            min={0 + 10}
            max={100}
            className="w-24 bg-transparent border border-gray-300 rounded-sm text-slate-900 text-center font-semibold tracking-wider transition duration-700 focus:outline-none focus:border-gray-500"
            value={100}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPriceFilter;
