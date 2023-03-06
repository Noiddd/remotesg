import React from "react";

export default function FilterSalaryButton() {
  return (
    <div>
      <button
        id="dropdownSalaryButton"
        className="text-center inline-flex items-center bg-gray-200 text-primary font-bold py-3 px-5 rounded font-nunito hover:bg-gray-300 transition-colors group"
        type="button"
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

      <div
        id="dropdownSalary"
        className="hidden group-focus:block: z-10 w-48 mt-3 bg-white divide-y divide-gray-100 rounded-lg shadow"
      >
        <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <div class="flex items-center">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value=""
                class="w-4 h-4 accent-primary text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-1"
              />
              <label
                for="checkbox-item-1"
                class="ml-2 text-sm font-medium text-primary"
              >
                testtesttest
              </label>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <input
                id="checkbox-item-2"
                type="checkbox"
                value=""
                class="w-4 h-4 accent-primary text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-1"
              />
              <label
                for="checkbox-item-2"
                class="ml-2 text-sm font-medium text-primary"
              >
                test2
              </label>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                class="w-4 h-4 accent-primary text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-1"
              />
              <label
                for="checkbox-item-3"
                class="ml-2 text-sm font-medium text-primary"
              >
                test3
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
