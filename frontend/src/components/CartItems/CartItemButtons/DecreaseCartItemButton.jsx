import useCartActions from "../../../hooks/useCartActions";

const DecreaseCartItemButton = ({ cartItemId, quantity }) => {
  const { updateCartItem } = useCartActions();

  return (
    <button
      className="py-2 text-sky-500"
      onClick={() => updateCartItem(cartItemId, -1)}
      disabled={quantity === 1}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-dash"
        viewBox="0 0 16 16"
      >
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
      </svg>
    </button>
  );
};

export default DecreaseCartItemButton;
