import { IoFilter } from "react-icons/io5";
import Button from "../../ui/Button";

const MenuApplyFiltersButton = ({ applyFilters }) => {
  return <Button onClick={applyFilters} text="apply" icon={IoFilter} />;
};

export default MenuApplyFiltersButton;
