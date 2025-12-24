import Sidebar from "../components/Sidebar";
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar Fixed */}
      <div className="fixed left-0 top-0 h-full w-64">
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-100 min-h-screen ml-64">
        <Navbar />
        <div className="p-6 pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
