"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import chart from "../../../public/assets/chart.svg";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const Appearance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Portfolio");
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="bg-[#1C1C1C] shadow-2xl rounded-lg mt- lg:ml-[4.4rem] mr-5 xsm:ml-5 p-5">
        <div>
          <div
            ref={dropdownRef}
            className="dropdown inline-block relative mt-2"
          >
            <button
              onClick={toggleDropdown}
              className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              <span className="mr-1">{selectedOption}</span>
              <IoChevronDownCircleOutline
                className={`h-4 w-4 ${
                  isOpen
                    ? "rotate-180 transition-all ease-in-out duration-300"
                    : "transition-all ease-in-out duration-300"
                }`}
              />
            </button>

            {isOpen && (
              <ul className="dropdown-menu absolute text-gray-700 pt-1">
                <li>
                  <a
                    onClick={() => handleOptionClick("History")}
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleOptionClick("Portfolio")}
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={chart} alt="chart" className="h-72 w-72" height={50} />
        </div>
        <div className="mt-5 text-center">
          {/* <p className="font-bold text-3xl">No Stats to Display</p> */}
          <p className="font-bold text-4xl">Portfolio is empty</p>

          {/*         <p className="text-lg mt-2">
            This user has no stats, probably because it&apos;s a new account
            without any trading history.
          </p> */}
          <p className="text-xl mt-2">User has no open trades at the moment.</p>
        </div>
      </div>
    </div>
  );
};

export default Appearance;

/* import React from "react";

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
 */
