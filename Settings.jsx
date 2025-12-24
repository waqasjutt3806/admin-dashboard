import React from "react";

const Settings = () => {
  return (
    <div className="w-full h-auto bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-8">
        
        {/* Page Title */}
        <div className="border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">⚙️ Settings</h1>
          <p className="text-gray-500 text-sm">
            Manage your account preferences and application settings.
          </p>
        </div>

        {/* Profile Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">👤 Profile Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">🌐 Preferences</h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Dark Mode</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Email Notifications</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Two Factor Authentication</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
