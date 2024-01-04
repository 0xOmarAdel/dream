import { IoFilter } from "react-icons/io5";

const MenuApplyFiltersButton = ({ applyFilters }) => {
  return (
    <button className="btn btn-outline btn-primary" onClick={applyFilters}>
      <IoFilter className="text-lg" />
      apply filters
    </button>
  );
};

export default MenuApplyFiltersButton;
