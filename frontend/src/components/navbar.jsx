import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl text-sky-500">Dream</a>
      </div>
      <ul className="menu menu-vertical lg:menu-horizontal text-sky-500 rounded-box text-xl">
        <Navitem className="bg-sky-500" to="/" text="Home" />
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
    <NavLink to={to}>{text}</NavLink>
  </li>
);

export default Navbar;
