import React, { useState } from "react";
import ProfileBar from "../components/Profile/ProfileBar";
import UserInfo from "../components/Profile/UserInfo";
import OrderHistory from "../components/Profile/OrderHistory";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isUserInfoVisible, setUserInfoVisible] = useState(false);
  const [isOrderHistoryVisible, setOrderHistoryVisible] = useState(false);

  const handleUserInfoClick = () => {
    setUserInfoVisible(!isUserInfoVisible);
    setOrderHistoryVisible(false);
  };

  const handleOrderHistoryClick = () => {
    setOrderHistoryVisible(!isOrderHistoryVisible);
    setUserInfoVisible(false);
  };

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture:
      "https://imgix.bustle.com/uploads/image/2023/6/12/ba491d0c-00fb-48c8-be45-1edf99930180-1297317.jpg?w=400&h=300&fit=crop&crop=faces&auto=format%2Ccompress",
  };
  return (
    <>
      <div className="col-span-1 flex flex-col items-center p-3 shadow-md rounded-md text-center">
        <ProfileBar
          handleUserInfoClick={handleUserInfoClick}
          handleOrderHistoryClick={handleOrderHistoryClick}
          user={user}
        />
        <div>
          {isUserInfoVisible && <UserInfo user={user} />}
          {isOrderHistoryVisible && <OrderHistory />}
        </div>
      </div>
    </>
  );
};

export default Profile;
