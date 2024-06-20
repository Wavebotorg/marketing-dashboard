import React from "react";
import { FaSlidersH } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
const Filter = () => {
  return (
    <div>
      <button className="flex items-center justify-centerpx-2 border rounded-full  ">
        <FaSlidersH className=" mx-2 " />
        Filter
        <MdKeyboardArrowDown className="mx-2" />
      </button>
    </div>
  );
};

export default Filter;
