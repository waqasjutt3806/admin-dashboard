// src/Pages/User.jsx
import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    name: "Muhammad Waqas",
    email: "waqas@example.com",
    phone: "+92 300 1234567",
    address: "Sahiwal, Pakistan",
  });

  const handleEdit = () => {
    alert("Edit profile feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/120"
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* User Info */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-3">
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Phone:</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Address:</span>
            <span>{user.address}</span>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleEdit}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
