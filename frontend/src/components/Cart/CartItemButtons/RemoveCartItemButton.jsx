import useCartActions from "../../../hooks/useCartActions";

const RemoveCartItemButton = ({ meal }) => {
  const { removeMealFromCart } = useCartActions();

  return (
    <button onClick={() => removeMealFromCart(meal)}>
      Remove
    </button>
  );
};

export default RemoveCartItemButton;
