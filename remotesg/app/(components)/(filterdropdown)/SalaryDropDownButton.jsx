import React from "react";

export default function SalaryDropDown() {
  return (
    <div
      id="dropdownSalary"
      className="absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow"
    >
      <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <div class="flex items-center">
            <input
              id="checkbox-item-1"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
            />
            <label
              for="checkbox-item-1"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Default checkbox
            </label>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <input
              id="checkbox-item-2"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
            />
            <label
              for="checkbox-item-2"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Checked state
            </label>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <input
              id="checkbox-item-3"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
            />
            <label
              for="checkbox-item-3"
              class="ml-2 text-sm font-medium text-gray-900"
            >
              Default checkbox
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
