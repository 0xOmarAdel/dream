import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar lg:px-12 px-4 items-center font-medium py-5">
      <div className="flex-1">
        <Link to="/" className="normal-case text-2xl text-sky-500">
          Dream
        </Link>
      </div>
      <ul className="text-xl hidden lg:flex lg:space-x-4">
        <NavItem to="/" text="Home" />
        <NavItem to="/menu" text="Menu" />
        <NavItem to="/reservations" text="Reservations" />
        <NavItem to="/about" text="About" />
        <NavItem to="/SignIn" text="Sign in" />
      </ul>
      {/* React Icon Menu here */}
      <div className="lg:hidden block cursor-pointer">Menu</div>
    </nav>
  );
};

const NavItem = ({ to, text }) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-sky-500" : "text-gray-600"
      }
      to={to}
    >
      {text}
    </NavLink>
  </li>
);

export default Navbar;
