import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Navitem to="/" text="Home" />
        <Navitem to="/menu" text="Menu" />
        <Navitem to="/reservations" text="Reservations" />
        <Navitem to="/about" text="About" />
        <Navitem to="/contact" text="Contact" />
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
