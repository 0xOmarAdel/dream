const MenuCategoryFilter = ({
  list: categories,
  selectedCategories,
  setSelectedCategories,
}) => {
  const toggleCategory = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      const updatedArray = [...prevSelectedCategories];

      const elementIndex = updatedArray.indexOf(category);

      updatedArray.indexOf(category) !== -1
        ? updatedArray.splice(elementIndex, 1)
        : updatedArray.push(category);

      return updatedArray;
    });
  };

  return (
    <div className="collapse collapse-arrow border-b border-gray-300 rounded-none">
      <input type="checkbox" />
      <div className="collapse-title px-0 text-xl font-medium">Category</div>
      <div className="collapse-content px-0">
        {categories.map((category) => (
          <div key={category} className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                className="checkbox checkbox-primary checkbox-sm"
                onChange={() => toggleCategory(category)}
              />
              <span className="label-text">{category}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryFilter;
