import { NavLink } from "react-router-dom";
import { MdCalendarToday, MdFastfood, MdLogout } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const ProfileSidebar = () => {
  return (
    <>
      <aside className="shadow-md z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden lg:block">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/profile/userinfo"
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
                to="/profile/orderhistory"
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
                to="/profile/reservationhistory"
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
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-600 hover:text-white cursor-pointer group">
                <MdLogout />
                <span className="ms-3">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default ProfileSidebar;
