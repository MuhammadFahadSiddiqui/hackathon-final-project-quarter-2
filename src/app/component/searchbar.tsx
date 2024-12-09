import React from "react";
import { FaSearch } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <div className="flex items-center border border-gray-300 overflow-hidden w-80">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
        />
        {/* Icon Container */}
        <div className="bg-primarycolororg p-2 px-3 flex items-center justify-center">
          <FaSearch className="text-secondarycolorwhite text-lg" />
        </div>
      </div>
    </div>
  );
}
