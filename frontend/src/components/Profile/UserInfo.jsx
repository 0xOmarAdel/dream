import React, { useState } from "react";
import { Link } from "react-router-dom";

const userInfo = ({ user }) => {
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
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="min-h-screen bg-gray-200 flex items-center justify-center">
              <div className="max-w-2xl bg-white p-8 shadow-lg rounded-md w-full mx-4 md:mx-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img
                      src={user.profilePicture}
                      alt="Profile"
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h2 className="text-2xl font-semibold">{user.name}</h2>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                    onClick={handleEditToggle}
                  >
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </button>
                </div>

                {isEditing && (
                  <div>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default userInfo;
