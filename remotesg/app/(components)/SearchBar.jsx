import React from "react";

export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search for jobs..."
      className="bg-gray-200 border-2 border-gray-400 text-primary font-nunito text-base rounded focus:ring-primary focus:outline-none focus:border-primary block w-full pl-10 p-2.5"
    />
  );
}
