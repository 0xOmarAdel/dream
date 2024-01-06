import MenuApplyFiltersButton from "./MenuApplyFiltersButton";
import MenuResetFiltersButton from "./MenuResetFiltersButton";
import MenuPriceFilter from "./MenuPriceFilter";
import MenuCategoryFilter from "./MenuCategoryFilter";
import MenuSizeFilter from "./MenuSizeFilter";
import MenuRatingFilter from "./MenuRatingFilter";
import { useSearchParams } from "react-router-dom";
import useUpdateQueryParam from "../../hooks/useUpdateQueryParam";
import MenuSearch from "./MenuSearch";
import { menuFilters } from "../../data/menuFilters";

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
        selectedMinPrice !== menuFilters.minPrice &&
        selectedMinPrice
    );
    updateQueryParam(
      "maxPrice",
      selectedMaxPrice !== null &&
        selectedMaxPrice !== menuFilters.maxPrice &&
        selectedMaxPrice
    );
    updateQueryParam(
      "category",
      selectedCategories.length !== menuFilters.categories.length &&
        selectedCategories.length > 0 &&
        selectedCategories.join(",")
    );
    updateQueryParam(
      "size",
      selectedSizes.length !== menuFilters.sizes.length &&
        selectedSizes.length > 0 &&
        selectedSizes.join(",")
    );
    updateQueryParam(
      "rating",
      selectedRatings.length > 0 && selectedRatings.join(",")
    );

    const loweredCaseCategories = selectedCategories.join(",").toLowerCase();
    const loweredCaseSizes = selectedSizes.join(",").toLowerCase();

    const updatedQueryStrings = `${searchValue ? "search=" + searchValue : ""}${
      selectedMinPrice !== null && selectedMinPrice !== menuFilters.minPrice
        ? "&minPrice=" + selectedMinPrice
        : ""
    }${
      selectedMaxPrice !== null && selectedMaxPrice !== menuFilters.maxPrice
        ? "&maxPrice=" + selectedMaxPrice
        : ""
    }${
      selectedCategories.length !== menuFilters.categories.length &&
      selectedCategories.length > 0
        ? "&category=" + loweredCaseCategories
        : ""
    }${
      selectedSizes.length !== menuFilters.sizes.length &&
      selectedSizes.length > 0
        ? "&size=" + loweredCaseSizes
        : ""
    }${selectedRatings.length > 0 ? "&rating=" + selectedRatings : ""}${
      "&page=" + page
    }`;

    setQueryStrings(
      updatedQueryStrings.startsWith("&")
        ? updatedQueryStrings.slice(1)
        : updatedQueryStrings
    );
  };

  return (
    <div className="lg:sticky top-8 flex flex-col gap-5">
      <MenuApplyFiltersButton applyFilters={applyFilters} />
      <MenuResetFiltersButton resetFilter={resetFilter} />
      <MenuSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <MenuPriceFilter
        priceRange={[menuFilters.minPrice, menuFilters.maxPrice]}
        selectedMinPrice={selectedMinPrice}
        selectedMaxPrice={selectedMaxPrice}
        setSelectedMinPrice={setSelectedMinPrice}
        setSelectedMaxPrice={setSelectedMaxPrice}
      />
      <MenuCategoryFilter
        list={menuFilters.categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <MenuSizeFilter
        list={menuFilters.sizes}
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
