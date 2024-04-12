"use client";
import React, { useEffect, useState } from "react";

const Apecurdocs = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="text-white container 2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto ">
        apecurdocs
      </div>
      <div className="text-white container 2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto ">
        <h1 className="text-5xl">{count}</h1>
        <div className="mt-3">
          <button
            onClick={() => setCount(count + 1)}
            className="text-white bg-blue-700  font-medium rounded-md text-lg px-5 py-2.5 text-center me-2 mb-2 "
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="text-white bg-blue-700  font-medium rounded-md text-lg px-5 py-2.5 text-center me-2 mb-2 "
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Apecurdocs;
