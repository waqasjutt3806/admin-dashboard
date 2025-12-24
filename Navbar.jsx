import React, { useState } from "react";
import { Search, Bell } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const {user} = useAuth();

  const notifications = [
    { id: 1, text: "New user registered" },
    { id: 2, text: "Product XYZ is trending" },
    { id: 3, text: "Sales report available" },
  ];

  return (
    <div className="fixed top-0 left-64 right-0 z-50 flex justify-between items-center bg-gray-100 px-6 py-3 ">
      {/* ✅ Left Side → Search Bar */}
      <div className="relative w-80">
        <span className="absolute left-3 top-3 text-gray-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border-2 rounded-full outline-none transition
                     focus:ring-2 focus:ring-purple-400 focus:border-purple-400
                     hover:bg-gray-50"
        />
      </div>

      {/* ✅ Right Side → Bell + Profile */}
      <div className="flex items-center gap-6">
        {/* Bell Icon */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-full hover:bg-gray-100"
          >
            <Bell size={22} className="text-yellow-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border z-50">
              <div className="p-3 font-semibold border-b">Notifications</div>
              <ul className="max-h-60 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((n) => (
                    <li
                      key={n.id}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {n.text}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-sm text-gray-500 text-center">
                    No notifications
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Profile */}
     {user && (
         <div className="flex items-center gap-3 cursor-pointer">
         <img src="/women.jpg" alt="profile" className="w-10 h-10 rounded-full" />
         <div className="hidden sm:block text-right">
           <h1 className="text-sm font-bold">{user.name}</h1>
           {/* <p className="text-xs text-gray-400">{user.password}</p> */}
         </div>
       </div>
     )}
      </div>
    </div>
  );
};

export default Navbar;
