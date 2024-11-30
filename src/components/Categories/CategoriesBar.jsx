import React from "react";

function CategoriesBar() {
  return (
    <div className="relative inline-block text-left group">
      {/* Dropdown Button */}
      <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Menu
      </button>

      {/* Dropdown Items */}
      <div className="absolute right-0 hidden bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 group-hover:flex flex-col">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Logout
        </a>
      </div>
    </div>
  );
}

export default CategoriesBar;
