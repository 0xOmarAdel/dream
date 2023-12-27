import { HiPlus } from "react-icons/hi";
import useCartActions from "../../../hooks/useCartActions";

const IncreaseCartItemButton = ({ cartItemId }) => {
  const { updateCartItem } = useCartActions();

  return (
    <button
      className="text-lg text-gray-500 hover:text-primary cursor-pointer transition duration-500"
      onClick={() => updateCartItem(cartItemId, 1)}
    >
      <HiPlus />
    </button>
  );
};

export default IncreaseCartItemButton;
