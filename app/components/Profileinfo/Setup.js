import Image from "next/image";
import React from "react";
import graph from "../../../public/assets/graph.svg";

const Setup = () => {
  return (
    <>
      <div className="bg-[#1C1C1C] shadow-2xl rounded-lg  p-5 mt-24 lg:ml-[4.4rem] mr-5 xsm:ml-5 ">
        <div className="flex justify-center items-center">
          <Image src={graph} alt="chart" className="h-72 w-72" height={50} />
        </div>
        <div className="mt-5 text-center">
          <p className="font-bold text-4xl">No Stats to Display</p>

          <p className="text-xl mt-2">
            This user has no stats, probably because it&apos;s a new account
            without any trading history.
          </p>
        </div>
      </div>
    </>
  );
};

export default Setup;
