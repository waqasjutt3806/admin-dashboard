import React from "react";
// import Slidebar from "../components/Slidebar";

const Home = () => {
  return (
    
    <div className="p-6 w-full">
      
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Total Sales</h2>
          <p className="text-2xl font-bold mt-2">$25,400</p>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Orders</h2>
          <p className="text-2xl font-bold mt-2">1,250</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Customers</h2>
          <p className="text-2xl font-bold mt-2">890</p>
        </div>
      </div>

      {/* Charts + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Placeholder Chart Box */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <div className="h-64 flex items-center justify-center text-gray-500">
            📊 Chart will go here
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <ul className="divide-y">
            <li className="py-2 flex justify-between">
              <span>Order #1234</span>
              <span className="text-green-600 font-medium">$250</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Order #1235</span>
              <span className="text-green-600 font-medium">$180</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Order #1236</span>
              <span className="text-green-600 font-medium">$320</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
