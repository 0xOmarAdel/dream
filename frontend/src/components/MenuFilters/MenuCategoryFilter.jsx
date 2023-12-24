import { useState } from "react";

const MenuCategoryFilter = ({ list: categories }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      const updatedCategories = { ...prevSelectedCategories };

      if (updatedCategories[category.title]) {
        delete updatedCategories[category.title];
      } else {
        updatedCategories[category.title] = true;
      }

      return updatedCategories;
    });
  };

  return (
    <div className="collapse collapse-arrow border-b border-gray-300 rounded-none">
      <input type="checkbox" />
      <div className="collapse-title px-0 text-xl font-medium">Category</div>
      <div className="collapse-content px-0">
        {categories.map((category) => (
          <div key={category._id} className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                checked={!!selectedCategories[category.title]}
                className="checkbox checkbox-primary checkbox-sm"
                onChange={() => toggleCategory(category)}
              />
              <span className="label-text">{category.title}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryFilter;
