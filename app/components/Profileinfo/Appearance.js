import React from "react";

const Appearance = () => {
  return (
    <div className="bg-[#1C1C1C] shadow-2xl rounded-lg mt-10 p-5">
      <div className="flex justify-between items-center">
        <div className="text-[25px] font-normal">Theme</div>
        <div className="flex gap-2 justify-end items-center">
          <p className="font-normal text-[18px] ">Dark Mode</p>
          <label className="cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
