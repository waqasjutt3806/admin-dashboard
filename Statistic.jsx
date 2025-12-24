import React from "react";

const Statistic = () => {
  return (
    <div className="p-6 w-full">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-6">Statistics</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Total Sales</h2>
          <p className="text-2xl font-bold mt-2">$120,450</p>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Orders</h2>
          <p className="text-2xl font-bold mt-2">8,920</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Customers</h2>
          <p className="text-2xl font-bold mt-2">5,340</p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
        <div className="space-y-4">
          <div>
            <p className="mb-1">Sales Target (80%)</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-purple-600 h-3 rounded-full w-[80%]"></div>
            </div>
          </div>
          <div>
            <p className="mb-1">Orders Fulfilled (65%)</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full w-[65%]"></div>
            </div>
          </div>
          <div>
            <p className="mb-1">Customer Growth (90%)</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-600 h-3 rounded-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales Chart</h2>
        <div className="flex items-center justify-center h-64 text-gray-500 border border-dashed rounded-lg">
          Chart Placeholder
        </div>
      </div>
    </div>
  );
};

export default Statistic;
