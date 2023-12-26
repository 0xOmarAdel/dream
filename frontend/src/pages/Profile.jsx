import React, { useState } from "react";
import UserInfo from "../components/Profile/UserInfo";
import OrderHistory from "../components/Profile/OrderHistory";
import { Link } from "react-router-dom";

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  profilePicture:
    "https://imgix.bustle.com/uploads/image/2023/6/12/ba491d0c-00fb-48c8-be45-1edf99930180-1297317.jpg?w=400&h=300&fit=crop&crop=faces&auto=format%2Ccompress",
};

const Profile = () => {
  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);
  const [isOrderHistoryVisible, setIsOrderHistoryVisible] = useState(false);

  const handleOrderHistoryClick = () => {
    setIsOrderHistoryVisible(!isOrderHistoryVisible);
    setIsUserInfoVisible(false);
  };

  const handleUserInfoClick = () => {
    setIsUserInfoVisible(!isUserInfoVisible);
    setIsOrderHistoryVisible(false);
  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          {isUserInfoVisible && <UserInfo user={user} />}
          {isOrderHistoryVisible && <OrderHistory />}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar content here */}
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="menu bg-base-200 text-base-content">
              <img
                className="mask mask-circle"
                src={user.profilePicture}
                alt={user.name}
              />
              <h1 className="text-3xl">{user.name}</h1>
              <h2 className="text-xl">{user.email}</h2>
              <div className="divider"></div>
            </div>
            <li>
              <button className="text-xl" onClick={handleUserInfoClick}>
                Personal Information
              </button>
            </li>
            <li>
              <button className="text-xl" onClick={handleOrderHistoryClick}>
                Order History
              </button>
            </li>
            <li>
              <button className="text-xl">Reservations History</button>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="hero-overlay bg-opacity-60">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center"> */}
      {/* Page content here */}
      {/* {isUserInfoVisible && <UserInfo user={user} />}
            {isOrderHistoryVisible && <OrderHistory />}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label> */}
      {/* </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {/* Sidebar content here */}
      {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"> */}
      {/* <div className="menu bg-base-200 text-base-content">
                <img
                  className="mask mask-circle"
                  src={user.profilePicture}
                  alt={user.name}
                />
                <h1 className="text-3xl">{user.name}</h1>
                <h2 className="text-xl">{user.email}</h2>
                <div className="divider"></div>
              </div>
              <li>
                <button className="text-xl" onClick={handleUserInfoClick}>
                  Personal Information
                </button>
              </li>
              <li>
                <button className="text-xl" onClick={handleOrderHistoryClick}>
                  Order History
                </button>
              </li>
              <li>
                <button className="text-xl">Reservations History</button>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Profile;
