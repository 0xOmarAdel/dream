import { Outlet } from "react-router-dom";
import ProfileSidebar from "../../components/Profile/ProfileSidebar";
import { useState } from "react";
import ProfileNavbar from "../../components/Profile/ProfileNavbar";

const ProfileLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <div className="lg:col-span-3">
        <ProfileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <div className="col-span-12 lg:col-span-9">
        <div className="relative flex flex-1 flex-col">
          <div className="w-full mb-20 lg:mb-0">
            <ProfileNavbar />
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

export default ProfileLayout;
