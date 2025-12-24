import React from "react";

const Trending = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      sales: "12,340",
      growth: "+15%",
      img: "/wireless.jpeg",
    },
    {
      id: 2,
      name: "Smart Watch",
      sales: "9,870",
      growth: "+10%",
      img: "/watch.jpeg",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      sales: "7,230",
      growth: "+8%",
      img: "/mouse.jpeg",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      sales: "6,540",
      growth: "+12%",
      img: "/speaker.jpeg",
    },
    {
      id: 5,
      name: "DSLR Camera",
      sales: "5,420",
      growth: "+6%",
      img: "/camera.jpeg",
    },
  ];

  return (
    <div className="p-6 w-full">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-6">Trending Products</h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-xl shadow-lg flex items-center gap-4 hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-lg"
            />

            {/* Product Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">Sales: {product.sales}</p>
              <p
                className={`font-bold ${
                  product.growth.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.growth} growth
              </p>
            </div>

            {/* Action Button */}
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
