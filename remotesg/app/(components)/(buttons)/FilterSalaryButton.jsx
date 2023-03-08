"use client";

import React, { useState } from "react";
import SalaryDropDown from "../(filterdropdown)/SalaryDropDownButton";

export default function FilterSalaryButton() {
  const [salaryDropDownOpen, setSalaryDropDownOpen] = useState(false);
  return (
    <div>
      <button
        className="text-center inline-flex items-center bg-gray-200 text-primary font-bold py-3 px-5 rounded font-nunito hover:bg-gray-300 transition-colors"
        type="button"
        onClick={() => setSalaryDropDownOpen((prev) => !prev)}
      >
        Filter Salary
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {salaryDropDownOpen && (
        <div className="mt-4">
          <SalaryDropDown />
        </div>
      )}
    </div>
  );
}
