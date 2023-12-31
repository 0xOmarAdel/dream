import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userAuthSlice";
import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { useState } from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = useSelector(selectUser);

  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <div className="lg:col-span-3">
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <div className="col-span-12 lg:col-span-9">
        <div className="relative flex flex-1 flex-col">
          <div className="w-full mb-20 lg:mb-0">
            <AdminNavbar />
          </div>
        </div>
        <main>
          <div className="max-w-screen-2xl lg:p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
