import { useState } from "react";
import MenuSortOrder from "./MenuSortOrder";
import MenuApplyFiltersButton from "./MenuApplyFiltersButton";
import MenuResetFiltersButton from "./MenuResetFiltersButton";
import MenuPriceFilter from "./MenuPriceFilter";
import MenuCategoryFilter from "./MenuCategoryFilter";
import MenuSizeFilter from "./MenuSizeFilter";
import MenuRatingFilter from "./MenuRatingFilter";
import { useSearchParams } from "react-router-dom";
import useUpdateQueryParam from "../../hooks/useUpdateQueryParam";

const MenuFilters = ({
  selectedMinPrice,
  selectedMaxPrice,
  selectedCategories,
  selectedSizes,
  selectedRatings,
  setSelectedMinPrice,
  setSelectedMaxPrice,
  setSelectedCategories,
  setSelectedSizes,
  setSelectedRatings,
  setQueryStrings,
}) => {
  const updateQueryParam = useUpdateQueryParam();

  const [, setSearchParams] = useSearchParams();

  const resetFilter = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedRatings([]);
    setSelectedMinPrice(null);
    setSelectedMaxPrice(null);

    setSearchParams("");
    setQueryStrings("");
  };

  const applyFilters = () => {
    updateQueryParam("minPrice", selectedMinPrice);
    updateQueryParam("maxPrice", selectedMaxPrice);
    updateQueryParam("category", selectedCategories.join(","));
    updateQueryParam("size", selectedSizes.join(","));
    updateQueryParam("rating", selectedRatings.join(","));

    const updatedQueryStrings = `${
      selectedMinPrice !== null && selectedMinPrice !== filters.minPrice
        ? "minPrice=" + selectedMinPrice
        : ""
    }${
      selectedMaxPrice !== null && selectedMaxPrice !== filters.maxPrice
        ? "&maxPrice=" + selectedMaxPrice
        : ""
    }${
      selectedCategories.length !== filters.categories.length &&
      selectedCategories.length > 0
        ? "&category=" + selectedCategories
        : ""
    }${
      selectedSizes.length !== filters.sizes.length && selectedSizes.length > 0
        ? "&size=" + selectedSizes
        : ""
    }${
      selectedRatings.length !== 5 && selectedRatings.length > 0
        ? "&rating=" + selectedRatings
        : ""
    }`;

    setQueryStrings(
      updatedQueryStrings.startsWith("&")
        ? updatedQueryStrings.slice(1)
        : updatedQueryStrings
    );
  };

  const filters = {
    minPrice: 0,
    maxPrice: 100,
    categories: [
      "Beverages",
      "Grilled Specialties",
      "Pasta and Noodles",
      "Pizza",
      "Salads",
      "Seafood",
      "Desserts",
    ],
    sizes: [
      "regular",
      "small",
      "medium",
      "large",
      "slice",
      "whole",
      "can",
      "bottle",
    ],
  };

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="sticky top-8 hidden lg:flex flex-col gap-5">
      <MenuApplyFiltersButton applyFilters={applyFilters} />
      <MenuResetFiltersButton resetFilter={resetFilter} />
      <MenuSortOrder
        selectedOption={selectedOption}
        onChange={(selectedOption) => setSelectedOption(selectedOption)}
      />
      <MenuPriceFilter
        priceRange={[filters.minPrice, filters.maxPrice]}
        selectedMinPrice={selectedMinPrice}
        selectedMaxPrice={selectedMaxPrice}
        setSelectedMinPrice={setSelectedMinPrice}
        setSelectedMaxPrice={setSelectedMaxPrice}
      />
      <MenuCategoryFilter
        list={filters.categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <MenuSizeFilter
        list={filters.sizes}
        selectedSizes={selectedSizes}
        setSelectedSizes={setSelectedSizes}
      />
      <MenuRatingFilter
        selectedRatings={selectedRatings}
        setSelectedRatings={setSelectedRatings}
      />
    </div>
  );
};

export default MenuFilters;
