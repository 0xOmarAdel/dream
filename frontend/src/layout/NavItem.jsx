import { NavLink } from "react-router-dom";

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

export default NavItem;
