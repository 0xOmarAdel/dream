import { useEffect, useState } from "react";
import MenuSortOrder from "./MenuSortOrder";
import MenuApplyFiltersButton from "./MenuApplyFiltersButton";
import MenuResetFiltersButton from "./MenuResetFiltersButton";
import MenuPriceFilter from "./MenuPriceFilter";
import MenuCategoryFilter from "./MenuCategoryFilter";
import MenuSizeFilter from "./MenuSizeFilter";
import MenuRatingFilter from "./MenuRatingFilter";
import axiosApi from "../../utils/axiosConfig";

const MenuFilters = () => {
  const priceRange = {
    min: 0,
    max: 100,
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosApi
      .get("/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
      });
  }, []);

  const restaurantSizes = [
    { id: 1, name: "regular" },
    { id: 2, name: "small" },
    { id: 3, name: "medium" },
    { id: 4, name: "large" },
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
      <MenuCategoryFilter list={categories} />
      <MenuSizeFilter list={restaurantSizes} />
      <MenuRatingFilter />
    </div>
  );
};

export default MenuFilters;
