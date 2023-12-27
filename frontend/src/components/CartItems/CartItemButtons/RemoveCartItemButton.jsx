import useCartActions from "../../../hooks/useCartActions";

const RemoveCartItemButton = ({ meal }) => {
  const { removeMealFromCart } = useCartActions();

  return (
    <button
      className="bg-transparent border border-primary px-4 py-0.5 rounded-md text-sm text-primary capitalize transition duration-300 hover:bg-primary hover:text-gray-100"
      onClick={() => removeMealFromCart(meal)}
    >
      remove
    </button>
  );
};

export default RemoveCartItemButton;
