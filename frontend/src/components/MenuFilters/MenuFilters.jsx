import { IoFilter } from "react-icons/io5";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Select from "react-select";
import MenuCategoryFilter from "./MenuCategoryFilter";
import MenuPriceFilter from "./MenuPriceFilter";
import MenuRatingFilter from "./MenuRatingFilter";
import MenuSizeFilter from "./MenuSizeFilter";
import { useState } from "react";

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

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("Selected Option:", selectedOption);
  };

  const options = [
    { value: "Price (lowest to highest)", label: "Price (lowest to highest)" },
    { value: "Price (highest to lowest)", label: "Price (highest to lowest)" },
    {
      value: "Rating (lowest to highest)",
      label: "Rating (lowest to highest)",
    },
    {
      value: "Rating (highest to lowest)",
      label: "Rating (highest to lowest)",
    },
  ];

  return (
    <div className="sticky top-8 flex flex-col gap-5">
      <button className="btn btn-outline btn-primary">
        <IoFilter className="text-lg" />
        apply filters
      </button>
      <button className="btn btn-outline btn-primary">
        <FaArrowRotateLeft />
        reset filters
      </button>
      <Select
        value={selectedOption}
        onChange={handleChange}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "gray",
            primary: "#0ea5ea",
          },
        })}
        options={options}
      />
      <MenuPriceFilter priceRange={priceRange} />
      <MenuCategoryFilter list={restaurantCategories} />
      <MenuSizeFilter list={restaurantSizes} />
      <MenuRatingFilter />
    </div>
  );
};

export default MenuFilters;
