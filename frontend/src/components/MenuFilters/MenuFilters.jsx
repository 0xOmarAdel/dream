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
import MenuSearch from "./MenuSearch";

const MenuFilters = ({
  setShowFilters,
  searchValue,
  setSearchValue,
  selectedMinPrice,
  setSelectedMinPrice,
  selectedMaxPrice,
  setSelectedMaxPrice,
  selectedCategories,
  setSelectedCategories,
  selectedSizes,
  setSelectedSizes,
  selectedRatings,
  setSelectedRatings,
  page,
  setPage,
  setQueryStrings,
}) => {
  const updateQueryParam = useUpdateQueryParam();

  const [, setSearchParams] = useSearchParams();

  const resetFilter = () => {
    setShowFilters(false);

    setSearchValue("");
    setSelectedMinPrice(null);
    setSelectedMaxPrice(null);
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedRatings([]);
    setPage(1);

    setSearchParams({ page: 1 });
    setQueryStrings("page=1");
  };

  const applyFilters = () => {
    setShowFilters(false);

    updateQueryParam("search", searchValue);
    updateQueryParam(
      "minPrice",
      selectedMinPrice !== null &&
        selectedMinPrice !== filters.minPrice &&
        selectedMinPrice
    );
    updateQueryParam(
      "maxPrice",
      selectedMaxPrice !== null &&
        selectedMaxPrice !== filters.maxPrice &&
        selectedMaxPrice
    );
    updateQueryParam(
      "category",
      selectedCategories.length !== filters.categories.length &&
        selectedCategories.length > 0 &&
        selectedCategories.join(",")
    );
    updateQueryParam(
      "size",
      selectedSizes.length !== filters.sizes.length &&
        selectedSizes.length > 0 &&
        selectedSizes.join(",")
    );
    updateQueryParam(
      "rating",
      selectedRatings.length !== 5 &&
        selectedRatings.length > 0 &&
        selectedRatings.join(",")
    );

    const loweredCaseCategories = selectedCategories.join(",").toLowerCase();
    const loweredCaseSizes = selectedSizes.join(",").toLowerCase();

    const updatedQueryStrings = `${searchValue ? "search=" + searchValue : ""}${
      selectedMinPrice !== null && selectedMinPrice !== filters.minPrice
        ? "&minPrice=" + selectedMinPrice
        : ""
    }${
      selectedMaxPrice !== null && selectedMaxPrice !== filters.maxPrice
        ? "&maxPrice=" + selectedMaxPrice
        : ""
    }${
      selectedCategories.length !== filters.categories.length &&
      selectedCategories.length > 0
        ? "&category=" + loweredCaseCategories
        : ""
    }${
      selectedSizes.length !== filters.sizes.length && selectedSizes.length > 0
        ? "&size=" + loweredCaseSizes
        : ""
    }${
      selectedRatings.length !== 5 && selectedRatings.length > 0
        ? "&rating=" + selectedRatings
        : ""
    }${"&page=" + page}`;

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
    <div className="sticky top-8 flex flex-col gap-5">
      <MenuApplyFiltersButton applyFilters={applyFilters} />
      <MenuResetFiltersButton resetFilter={resetFilter} />
      <MenuSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
