import React from "react";
import { useState } from "react";

const ProfileBar = ({ handleUserInfoClick, handleOrderHistoryClick, user }) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
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
    </>
  );
};

export default ProfileBar;
