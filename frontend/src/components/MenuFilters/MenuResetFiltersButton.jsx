import { FaArrowRotateLeft } from "react-icons/fa6";

const MenuResetFiltersButton = ({ resetFilter }) => {
  return (
    <button className="btn btn-outline btn-primary" onClick={resetFilter}>
      <FaArrowRotateLeft />
      reset filters
    </button>
  );
};

export default MenuResetFiltersButton;
