import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    localStorage.removeItem("isAdmin");

  
    setTimeout(() => {
      navigate("/login");
    }, 800);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Logging Out...
        </h2>
        <p className="text-gray-500">Please wait a moment.</p>
        <div className="mt-4 w-6 h-6 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};

export default Logout;
