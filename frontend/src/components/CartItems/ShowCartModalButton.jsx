const ShowCartModalButton = ({ children }) => {
  return (
    <button
      className="btn capitalize"
      onClick={() => document.getElementById("cart_modal").showModal()}
    >
      {children}
    </button>
  );
};

export default ShowCartModalButton;
