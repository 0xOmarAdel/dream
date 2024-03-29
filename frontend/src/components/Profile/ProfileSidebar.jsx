import { NavLink } from "react-router-dom";
import { MdCalendarToday, MdFastfood, MdLogout } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/userAuthSlice";

const ProfileSidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <aside className="shadow-md w-64 min-h-[70vh] hidden lg:block">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 group"
                  : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-600 group"
              }
            >
              <FaUserEdit />
              <span className="ms-3">Personal Info</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 hover:text-white group"
                  : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-600 hover:text-white group"
              }
            >
              <MdFastfood />
              <span className="ms-3">Order History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive
                  ? " flex items-center p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 hover:text-white group"
                  : " flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-600 hover:text-white group"
              }
            >
              <IoMdTime />
              <span className="ms-3">Reviews History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservations"
              className={({ isActive }) =>
                isActive
                  ? " flex items-center p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 hover:text-white group"
                  : " flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-600 hover:text-white group"
              }
            >
              <MdCalendarToday />
              <span className="ms-3">Reservations History</span>
            </NavLink>
          </li>
          <li onClick={handleLogout}>
            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-600 hover:text-white cursor-pointer group">
              <MdLogout />
              <span className="ms-3">Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
