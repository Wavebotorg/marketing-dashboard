"use client";
import React, { useEffect, useState } from "react";

const Apecurdocs = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container 2xl:pl-64 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-0 mx-auto ">
        <div>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-4xl text-primary-600 text-primary-500">
                Apecurdocs Page
              </h1>
              <p className="mb-4 text-4xl tracking-tight font-bold  md:text-4xl text-white">
                Comming Soon!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apecurdocs;
