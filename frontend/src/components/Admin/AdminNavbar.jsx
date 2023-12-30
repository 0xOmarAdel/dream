import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userAuthSlice";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const user = useSelector(selectUser);
  return (
    <nav className="lg:static fixed top-0 right-0 z-30 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 ">
              <FaBarsStaggered />
            </button>
            <Link to="/" className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-sky-500">
                Dream
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden mr-3 -mb-1 sm:block">
              <span></span>
            </div>
            <h1 className="font-medium">
              Welcome, {`${user.firstName} ${user.lastName}`}
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default AdminNavbar;
