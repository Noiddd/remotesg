"use client";

import React, { useState } from "react";
import SalaryDropDown from "../../(filterdropdown)/salarydropdown/page";

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
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
