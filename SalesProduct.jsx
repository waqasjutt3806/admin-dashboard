import React from "react";

const SalesProduct = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Sales Product</h1>
      <p className="text-gray-600 mb-6">3 Sales Found</p>

      {/* Example Card */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-bold">Smart Watch</h2>
          <p className="text-gray-500">150 Sales</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-bold">DSL Camera</h2>
          <p className="text-gray-500">120 Sales</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-bold">Gaming Mouse</h2>
          <p className="text-gray-500">90 Sales</p>
        </div>
      </div>
    </div>
  );
};

export default SalesProduct;
