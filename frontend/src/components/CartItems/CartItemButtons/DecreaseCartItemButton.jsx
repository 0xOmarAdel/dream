import { HiMinusSm } from "react-icons/hi";
import useCartActions from "../../../hooks/useCartActions";

const DecreaseCartItemButton = ({ cartItemId, quantity }) => {
  const { updateCartItem } = useCartActions();

  return (
    <button
      className={`text-lg text-gray-500 ${
        quantity !== 1 &&
        "hover:text-primary cursor-pointer transition duration-500"
      }`}
      onClick={() => updateCartItem(cartItemId, -1)}
      disabled={quantity === 1}
    >
      <HiMinusSm />
    </button>
  );
};

export default DecreaseCartItemButton;
