import { FaArrowRotateLeft } from "react-icons/fa6";
import Button from "../../ui/Button";

const MenuResetFiltersButton = ({ resetFilter }) => {
  return <Button onClick={resetFilter} text="reset" icon={FaArrowRotateLeft} />;
};

export default MenuResetFiltersButton;
