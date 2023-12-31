import { NavLink } from "react-router-dom";

const NavItem = ({ path, text }) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        `text-xl capitalize transition duration-300 hover:!text-primary hover:bg-transparent focus:!bg-transparent active:!text-gray-600 active:!bg-transparent ${
          isActive ? "!text-primary" : "!text-gray-600"
        }`
      }
      to={path}
    >
      {text}
    </NavLink>
  </li>
);

export default NavItem;
