import { useState } from "react";

const MenuSizeFilter = ({ list: sizes }) => {
  const [selectedSizes, setSelectedCategories] = useState([]);

  const toggleSize = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      const updatedCategories = { ...prevSelectedCategories };

      if (updatedCategories[category.name]) {
        delete updatedCategories[category.name];
      } else {
        updatedCategories[category.name] = true;
      }

      return updatedCategories;
    });
  };

  return (
    <div className="collapse collapse-arrow border-b border-gray-300 rounded-none">
      <input type="checkbox" />
      <div className="collapse-title px-0 text-xl font-medium">Size</div>
      <div className="collapse-content px-0">
        {sizes.map((category) => (
          <div key={category.id} className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                checked={!!selectedSizes[category.name]}
                className="checkbox checkbox-primary checkbox-sm"
                onChange={() => toggleSize(category)}
              />
              <span className="label-text capitalize">{category.name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSizeFilter;
