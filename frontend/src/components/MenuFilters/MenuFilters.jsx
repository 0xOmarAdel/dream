import { useState } from "react";
import MenuSortOrder from "./MenuSortOrder";
import MenuApplyFiltersButton from "./MenuApplyFiltersButton";
import MenuResetFiltersButton from "./MenuResetFiltersButton";
import MenuPriceFilter from "./MenuPriceFilter";
import MenuCategoryFilter from "./MenuCategoryFilter";
import MenuSizeFilter from "./MenuSizeFilter";
import MenuRatingFilter from "./MenuRatingFilter";

const MenuFilters = () => {
  const priceRange = {
    min: 0,
    max: 100,
  };

  const restaurantCategories = [
    { id: 1, name: "Appetizers" },
    { id: 2, name: "Main Courses" },
    { id: 3, name: "Desserts" },
    { id: 4, name: "Beverages" },
    { id: 5, name: "Salads" },
    { id: 6, name: "Seafood" },
    { id: 7, name: "Vegetarian" },
    { id: 8, name: "Grilled Specialties" },
    { id: 9, name: "Pasta and Noodles" },
    { id: 10, name: "Breakfast Delights" },
    { id: 11, name: "Sushi Rolls" },
    { id: 12, name: "Smoothies and Juices" },
    { id: 13, name: "Steakhouse Classics" },
    { id: 14, name: "Mexican Cuisine" },
    { id: 15, name: "International Flavors" },
  ];

  const restaurantSizes = [
    { id: 1, name: "small" },
    { id: 2, name: "medium" },
    { id: 3, name: "large" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="sticky top-8 hidden lg:flex flex-col gap-5">
      <MenuApplyFiltersButton />
      <MenuResetFiltersButton />
      <MenuSortOrder
        selectedOption={selectedOption}
        onChange={(selectedOption) => setSelectedOption(selectedOption)}
      />
      <MenuPriceFilter priceRange={priceRange} />
      <MenuCategoryFilter list={restaurantCategories} />
      <MenuSizeFilter list={restaurantSizes} />
      <MenuRatingFilter />
    </div>
  );
};

export default MenuFilters;
