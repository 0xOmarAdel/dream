import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar lg:px-12 py-5">
      <div className="flex-1">
        <Link to="/" className="normal-case text-2xl text-sky-500">
          Dream
        </Link>
      </div>
      <ul className="text-xl space-x-4">
        <Navitem to="/" text="Home" />
        <Navitem to="/menu" text="Menu" />
        <Navitem to="/reservations" text="Reservations" />
        <Navitem to="/OrderOnline" text="Order Online" />
        <Navitem to="/about" text="About" />
        <Navitem to="/Signin" text="Sign in" />
      </ul>
    </nav>
  );
};

const Navitem = ({ to, text }) => (
  <li>
    <NavLink
      className={({ isActive }) => (isActive ? "text-sky-500" : "")}
      to={to}
    >
      {text}
    </NavLink>
  </li>
);

export default Navbar;
