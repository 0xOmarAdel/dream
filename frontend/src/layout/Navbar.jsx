import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import NavItem from "./NavItem";
import { navLinks } from "../data/navLinks";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar px-20 items-center justify-between font-medium py-5">
      <Link to="/" className="normal-case text-2xl text-sky-500">
        Dream
      </Link>
      <ul className="text-xl hidden lg:flex lg:space-x-4">
        {navLinks.map((navLink) => (
          <NavItem key={navLink.id} to={navLink.to} text={navLink.text} />
        ))}
      </ul>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-1">
          <AiOutlineUser className="text-2xl" />
          <span>Login</span>
        </div>
        <div className="flex flex-row gap-1">
          <IoCartOutline className="text-2xl" />
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
