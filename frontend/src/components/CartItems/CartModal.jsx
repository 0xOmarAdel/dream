import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <dialog id="cart_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="flex flex-row gap-1">
          <IoCartOutline />
          <h3>Cart</h3>
        </div>
        <p>Your cart is empty!</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Cart;
