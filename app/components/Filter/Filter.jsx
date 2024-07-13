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
          } dropdown transition-all ease-in-out duration-300 absolute bg-gray-800 rounded-lg mt-1 md:w-full md:min-w-fit z-10 p-`}
        >
          <div className="border-b">
            {" "}
            <div className="mb-4 px-4 mt-6">
              <label className="inline-flex items-center">
                <input
                  id="horizontal-list-vue"
                  type="checkbox"
                  class="  h-4 w-4 "
                />

                <span className="ml-2">Audit results passed</span>
              </label>
            </div>
            <div className="mb-4 px-4 mt-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="  h-4 w-4" />
                <span className="ml-2">With at least 1 social</span>
              </label>
            </div>
            <div className="mb-4 px-4 mt-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className=" text-blue-600  h-4 w-4" />
                <span className="ml-2">Avoid low sell limit</span>
              </label>
            </div>
            <div className="mb-4 px-4 mt-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className=" text-blue-600  h-4 w-4" />
                <span className="ml-2">Liquidity Added</span>
              </label>
            </div>
          </div>
          <div className="">
            <div className="px-4 mt-6">By Current Liquidity($) </div>
            <div className="flex border-b py-5 px-4 ">
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
            <div className="px-4 mt-6">By Volume </div>
            <div className="flex border-b py-5 px-4 ">
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
            <div className="px-4 mt-6">By MKT Cap </div>
            <div className="flex border-b py-5 px-4 ">
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
            <div className="px-4 mt-6">By TXNS </div>
            <div className="flex border-b py-5 px-4 ">
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
          </div>{" "}
          <div className="">
            <div className="px-4 mt-6">By Buys </div>
            <div className="flex border-b py-5 px-4 ">
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
            <div className="px-4 mt-6">By Sells </div>
            <div className="flex border-b  py-5 px-4 ">
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
          <div>
            {" "}
            <div className="px-4 mt-4 flex justify-between">
              <button className="btn-spacing  text-blue-500 px-4 py-2 rounded">
                Reset
              </button>
              <button className="bg-blue-500 rounded-3xl text-white px-6 py-2 mr-2 ">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
