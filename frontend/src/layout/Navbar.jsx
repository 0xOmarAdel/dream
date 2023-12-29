import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userMenu } from "../data/userMenu";
import { guestMenu } from "../data/guestMenu";
import { logout } from "../store/slices/userAuthSlice";
import { emptyCart } from "../store/slices/cartSlice";
import { priceFormatter } from "../utils/priceFormatter";

const Navbar = () => {
  const isLoggedIn = !!useSelector((state) => state.auth.user);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(emptyCart());
    dispatch(logout());
  };

  return (
    <div className="fixed z-40 w-full h-20 bg-black bg-opacity-60 text-white">
      <div className="max-w-7xl h-full mx-auto flex flex-row items-center justify-between">
        <Link to="/" className="text-4xl text-primary font-medium">Dream</Link>
        <ul className="flex flex-row items-center gap-6 text-2xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/menu">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
