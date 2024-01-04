const MenuSizeFilter = ({ list: sizes, selectedSizes, setSelectedSizes }) => {
  const toggleSize = (size) => {
    setSelectedSizes((prevSelectedSizes) => {
      const updatedArray = [...prevSelectedSizes];

      const elementIndex = updatedArray.indexOf(size);

      updatedArray.indexOf(size) !== -1
        ? updatedArray.splice(elementIndex, 1)
        : updatedArray.push(size);

      return updatedArray;
    });
  };

  return (
    <div className="collapse collapse-arrow border-b border-gray-300 rounded-none">
      <input type="checkbox" />
      <div className="collapse-title px-0 text-xl font-medium">Size</div>
      <div className="collapse-content px-0">
        {sizes.map((size) => (
          <div key={size} className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                className="checkbox checkbox-primary checkbox-sm"
                onChange={() => toggleSize(size)}
              />
              <span className="label-text capitalize">{size}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSizeFilter;
