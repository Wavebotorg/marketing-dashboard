"use client";
import { FaSlidersH } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import React, { useState, useEffect, useRef } from "react";

const Filter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = () => {
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div>
      <div ref={dropdownRef} className="dropdown-container relative">
        <button
          className="flex items-center justify-center px-2 border rounded-full dropdown-toggle focus:outline-none"
          onClick={toggleDropdown}
        >
          <FaSlidersH className="mx-2" />
          Filter
          <MdKeyboardArrowDown className="mx-2" />
        </button>

        <div
          className={`overflow-hidden ${
            showDropdown ? " py-2" : "h-0"
          } dropdown transition-all ease-in-out duration-300 absolute bg-gray-800 rounded-lg mt-1 w-full md:min-w-fit z-10 p-`}
        >
          <div className="">
            <div className="px-4 mt-6">By Current Liquidity($) </div>
            <div className="flex border-b-2 py-5 px-4 ">
              <div>
                <input
                  type="text "
                  size="10"
                  className="rounded-full bg-transparent border border-gray-400 hover:border-gray-600 text-white"
                />
              </div>
              <span className="px-4">to</span>
              <div>
                <input
                  type="text"
                  size="10"
                  className="rounded-full  bg-transparent border border-gray-400 hover:border-gray-600  text-white"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-4 mt-6">By Current Liquidity($) </div>
            <div className="flex border-b-2 py-5 px-4 ">
              <div>
                <input
                  type="text "
                  size="10"
                  className="rounded-full bg-transparent border border-gray-400 hover:border-gray-600 text-white"
                />
              </div>
              <span className="px-4">to</span>
              <div>
                <input
                  type="text"
                  size="10"
                  className="rounded-full  bg-transparent border border-gray-400 hover:border-gray-600  text-white"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-4 mt-6">By Current Liquidity($) </div>
            <div className="flex border-b-2 py-5 px-4 ">
              <div>
                <input
                  type="text "
                  size="10"
                  className="rounded-full bg-transparent border border-gray-400 hover:border-gray-600 text-white"
                />
              </div>
              <span className="px-4">to</span>
              <div>
                <input
                  type="text"
                  size="10"
                  className="rounded-full  bg-transparent border border-gray-400 hover:border-gray-600  text-white"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-4 mt-6">By Current Liquidity($) </div>
            <div className="flex  py-5 px-4 ">
              <div>
                <input
                  type="text "
                  size="10"
                  className="rounded-full bg-transparent border border-gray-400 hover:border-gray-600 text-white"
                />
              </div>
              <span className="px-4">to</span>
              <div>
                <input
                  type="text"
                  size="10"
                  className="rounded-full  bg-transparent border border-gray-400 hover:border-gray-600  text-white"
                />
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Filter;
