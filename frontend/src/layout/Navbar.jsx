import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { userMenu } from "../data/userMenu";
import { guestMenu } from "../data/guestMenu";
import { logout } from "../store/slices/userAuthSlice";
import { emptyCart } from "../store/slices/cartSlice";
import { priceFormatter } from "../utils/priceFormatter";
import { menuLinks } from "../data/menuLinks";

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
    <div className="navbar px-20 bg-base-100">
      <div className="flex-1">
        <Link to="/" className="text-4xl text-primary font-semibold">
          Dream
        </Link>
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {menuLinks.map((menuLink) => (
              <li key={menuLink.id}>
                <Link
                  to={menuLink.path}
                  className="text-xl !text-gray-600 capitalize transition duration-300 hover:!text-primary hover:bg-transparent focus:!bg-transparent active:!text-gray-600 active:!bg-transparent"
                >
                  {menuLink.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {totalQuantity}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-50 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{totalQuantity} Items</span>
              <span className="text-info">
                Subtotal: {priceFormatter(totalPrice)}
              </span>
              <div className="card-actions">
                <Link to="/cart" className="btn btn-primary btn-block">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <AiOutlineUser className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {isLoggedIn
              ? userMenu.map((menuItem) => (
                  <li key={menuItem.id}>
                    <Link to={menuItem.to} className="capitalize">
                      {menuItem.text}
                    </Link>
                  </li>
                ))
              : guestMenu.map((menuItem) => (
                  <li key={menuItem.id}>
                    <Link to={menuItem.to} className="capitalize">
                      {menuItem.text}
                    </Link>
                  </li>
                ))}
            {isLoggedIn && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
