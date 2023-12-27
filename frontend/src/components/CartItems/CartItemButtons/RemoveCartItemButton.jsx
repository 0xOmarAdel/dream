import { FaRegTrashAlt } from "react-icons/fa";
import useCartActions from "../../../hooks/useCartActions";

const RemoveCartItemButton = ({ meal }) => {
  const { removeMealFromCart } = useCartActions();

  return (
    <FaRegTrashAlt
      className="cursor-pointer"
      onClick={() => removeMealFromCart(meal)}
    />
  );
};

export default RemoveCartItemButton;
