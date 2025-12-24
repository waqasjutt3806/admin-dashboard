import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { 
  Home, 
  BarChart2, 
  ShoppingCart, 
  TrendingUp, 
  User, 
  Sun, 
  Moon, 
  Settings,
  LogOut 
} from "lucide-react";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition 
     ${isActive ? "bg-white text-black font-semibold" : "text-gray-300 hover:bg-gray-200/30"}`;

  return (
    <div className="fixed top-0 left-0 bg-purple-800 text-white w-64 h-full flex flex-col justify-between p-4 z-40">
      <div>
        {/*  Replace profile with Logo */}
        <div className="flex mb-5  items-center font-bold">
          <img src="/logo.png" alt="Logo" className="w-[50px]   " />NexaWave
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-3">
          <NavLink to="/dashboard" end className={navLinkStyle}>
            <Home size={18} /> Home
          </NavLink>
          <NavLink to="/dashboard/sales-product" className={navLinkStyle}>
            <ShoppingCart size={18} /> Sales Product
          </NavLink>
          <NavLink to="/dashboard/statistic" className={navLinkStyle}>
            <BarChart2 size={18} /> Statistic
          </NavLink>
          <NavLink to="/dashboard/trending-products" className={navLinkStyle}>
            <TrendingUp size={18} /> Trending Products
          </NavLink>
          <NavLink to="/dashboard/user" className={navLinkStyle}>
            <User size={18} /> User
          </NavLink>
          <NavLink to="/dashboard/settings" className={navLinkStyle}>
            <Settings size={18} /> Settings
          </NavLink>
          <NavLink to="/dashboard/logout" className={navLinkStyle}>
            <User size={18} /> Log Out
          </NavLink>
        </nav>
      </div>

      {/* Light / Dark Mode Toggle */}
      {/* <button
        onClick={toggleTheme}
        className="mt-6 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 rounded-lg py-2 px-3 text-sm"
      >
        {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button> */}
    </div>
  );
};

export default Sidebar;
