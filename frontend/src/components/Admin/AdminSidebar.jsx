import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/userAuthSlice";
import {
  MdCalendarToday,
  MdDashboard,
  MdFastfood,
  MdLogout,
  MdOutlineChecklist,
} from "react-icons/md";

const AdminSidebar = () => {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user && user.role === "admin";

  if (!isAdmin) {
    return null;
  }

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };
  return (
    <>
      <aside className="fixed top-0 left-0 shadow-md z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden lg:block">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 group"
                    : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-600 group"
                }
              >
                <MdDashboard />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/meals"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 hover:text-white group"
                    : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-600 hover:text-white group"
                }
              >
                <MdFastfood />
                <span className="ms-3">Meals</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/orders"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 hover:text-white group"
                    : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-600 hover:text-white group"
                }
              >
                <MdOutlineChecklist />
                <span className="ms-3">Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/reservations"
                className={({ isActive }) =>
                  isActive
                    ? " flex items-center p-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 hover:text-white group"
                    : " flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-600 hover:text-white group"
                }
              >
                <MdCalendarToday />
                <span className="ms-3">Reservations</span>
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
    </>
  );
};

export default AdminSidebar;
