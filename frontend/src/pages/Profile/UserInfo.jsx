import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserInfo = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Add logic to save changes (update API, state, etc.)
    console.log("Saving changes:", editedUser);
    handleEditToggle();
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <div>
                  <div className="mb-4">
                    <div className="menu bg-base-200 text-base-content">
                      <img
                        className="mask mask-circle"
                        src={user.profilePicture}
                        alt={user.name}
                      />
                    </div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="img"
                    >
                      {" "}
                      Change Profile Picture
                    </label>
                    <input
                      type="file"
                      id="img"
                      name="img"
                      onChange={handleInputChange}
                      accept="image/*"
                      value={editedUser.img}
                      className="file-input file-input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={editedUser.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={editedUser.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={editedUser.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={editedUser.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={editedUser.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
