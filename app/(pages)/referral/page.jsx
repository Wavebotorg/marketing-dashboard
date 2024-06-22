"use client";
import React, { useEffect, useState } from "react";

import { useWallet } from "../../components/contexts/WalletContext";

const Referral = () => {
  const { walletAddress, email, solanaAddress, isNavbar, setIsNavbar } =
    useWallet();

  const [activeButton, setActiveButton] = useState(1);
  useState("Reward History");

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div
      style={{
        marginLeft: isNavbar && window.innerWidth >= 1440 ? "12%" : "0",
      }}
      className=" md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto"
    >
      <div className="flex flex-col xl:justify-center  lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-4">
        <div className="font-medium mb-4 text-3xl text-[#1788FB]">
          <p>Referral </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 lg:w-[55rem] w-full">
          <div className="rounded-lg px-4 py-2 md:py-4 bg-[#1C1C1C] flex-1">
            <p className="text-[#CECECE] font-light">UNCLAIMED REWARDS</p>
            <p className="text-blue-400 text-2xl mt-1 w-[178px]">0 ETH</p>
          </div>
          <div className="rounded-lg px-4 py-2 md:py-4 bg-[#1C1C1C] flex-1">
            <p className="text-[#CECECE]">UNCLAIMED ETH</p>
            <p className="text-blue-400 text-2xl mt-1 w-[178px]">0 ETH</p>
          </div>
          <div className="rounded-lg px-4 py-2 md:py-4 bg-[#1C1C1C] flex-1">
            <p className="text-[#CECECE]">UNCLAIMED SOL</p>
            <p className="text-blue-400 text-2xl mt-1 w-[178px]">0 SOL</p>
          </div>
          <div className="rounded-lg px-4 py-2 md:py-4 bg-[#1C1C1C] flex-1">
            <p className="text-[#CECECE] font-light">CURRENT APY</p>
            <p className="text-blue-400 text-2xl mt-1 w-[178px]">0%</p>
          </div>
          <div className="rounded-lg px-4 py-2 md:py-4 bg-[#1C1C1C] flex-1">
            <p className="text-[#CECECE]">TOTAL EARNED ETH</p>
            <p className="text-blue-400 text-2xl mt-1 w-[178px]">0 ETH</p>
          </div>
          <div className="rounded-lg px-4 py-2 md:py-4 bg-[#1C1C1C] flex-1">
            <p className="text-[#CECECE]">TOTAL EARNED SOL</p>
            <p className="text-blue-400 text-2xl mt-1 w-[178px]">0 SOL</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex gap-2 p-2 rounded-t-xl bg-[#1C1C1C] flex-col sm:flex-row items-center justify-center">
            <button
              className={`delay-75 p-3 px-10 py-2 rounded-xl hover:bg-[#294894] hover:text-white ${
                activeButton === 1 ? "bg-[#294894] text-white" : "text-white"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Reward History
            </button>
            <button
              className={`delay-75 p-3 px-10 py-2 rounded-xl hover:bg-[#294894] hover:text-white ${
                activeButton === 2 ? "bg-[#294894] text-white" : "text-white"
              }`}
              onClick={() => handleButtonClick(2)}
            >
              Claimed Rewards
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden">
              <thead className="sticky top-0 leader-color shadow-2xl">
                <tr className="text-[#CECECE] bg-[#1C1C1C]">
                  {activeButton === 1 ? (
                    <>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                        className="px-2 md:px-4 lg:px-6 py-2 md:py-3 text-center text-sm md:text-base font-medium whitespace-nowrap"
                      >
                        TIME
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                        className="px-2 md:px-4 lg:px-6 py-2 md:py-3 text-center text-sm md:text-base font-medium whitespace-nowrap"
                      >
                        REWARDS EVM
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                        className="px-2 md:px-4 lg:px-6 py-2 md:py-3 text-center text-sm md:text-base font-medium whitespace-nowrap"
                      >
                        REWARDS SOL
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                        className="px-2 md:px-4 lg:px-6 py-2 md:py-3 text-center text-sm md:text-base font-medium whitespace-nowrap"
                      >
                        REWARDS USD
                      </th>
                    </>
                  ) : (
                    <>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                        className="px-2 md:px-4 lg:px-6 py-2 md:py-3 text-center text-sm md:text-base font-medium whitespace-nowrap"
                      >
                        TIME
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                        className="px-2 md:px-4 lg:px-6 py-2 md:py-3 text-center text-sm md:text-base font-medium whitespace-nowrap"
                      >
                        AMOUNT BANANA
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                        className="px-2 md:px-4 lg:px-6 py-2 md:py-3 text-center text-sm md:text-base font-medium whitespace-nowrap"
                      >
                        AMOUNT ETH
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                        className="px-2 md:px-4 lg:px-6 py-2 md:py-3 text-center text-sm md:text-base font-medium whitespace-nowrap"
                      >
                        AMOUNT SOL
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                        className="px-2 md:px-4 lg:px-6 py-2 md:py-3 text-center text-sm md:text-base font-medium whitespace-nowrap"
                      >
                        STATUS
                      </th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
