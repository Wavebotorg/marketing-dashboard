"use client";
import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Referral = () => {
  const [allCoinData, setAllCoinData] = useState([
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    {
      block: "23",
      date: "2:00:66",
      wallet: "$55",
      swapcost: "566",
      refreward: "true",
      transaction: "eth22",
      status: "true",
    },
    // Add more data as needed
  ]);
  return (
    <>
      <div className="container">
        <h1 className="text-[#1788FB]  text-2xl  md:text-3xl   text-center md:text-left font-medium max-w-screen-lg ">
          Referral Rewards
        </h1>
        <div className="flex flex-col md:flex-row gap-6 mt-5">
          <div className="rounded-lg p-4 bg-[#1C1C1C] flex items-center gap-2">
            <IoIosInformationCircleOutline size={20} className="mt-[2px]" />
            <p>Paginated Results</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-5">
          <div className="rounded-lg px-4 py-2 lg:py-4  bg-[#1C1C1C]">
            <p className=" text-nowrap ">Total Referrals</p>
            <p className="text-blue-400 text-2xl mt-1">--</p>
          </div>
          <div className="rounded-lg px-4 py-2 lg:py-4  bg-[#1C1C1C] ">
            <p className=" text-nowrap ">Transactions</p>
            <p className="text-blue-400 text-2xl mt-1">--</p>
          </div>
          <div className="rounded-lg px-4 py-2 lg:py-4 bg-[#1C1C1C] ">
            <p className=" text-nowrap ">Total Rewards</p>
            <p className="text-blue-400 text-2xl mt-1">--ETH</p>
          </div>
          <div className="rounded-lg px-4 py-2 lg:py-4  bg-[#1C1C1C] ">
            <p className=" text-nowrap ">Claimable Rewards</p>
            <p className="text-blue-400 text-2xl mt-1">--ETH</p>
          </div>
        </div>
        <div className=" mt-7 font-medium text-2xl mb-4 mb:mb-0">
          <p>Referral Reward History</p>
        </div>
        <div className="flex justify-end  ">
          <div>
            <label className=" text-sm md:text-lg">Rows per page </label>
            <select
              name="select Row"
              className="bg-blue-500 rounded-lg p-1 !outline-none "
              defaultValue="Show 5"
            >
              <option value="Show 1">Show 1</option>
              <option value="Show 2">Show 2</option>
              <option value="Show 3">Show 3</option>
              <option value="Show 4">Show 4</option>
              <option value="Show 5">Show 5</option>
            </select>
          </div>
        </div>
        <div className="mt-4 hidden lg:block">
          <div className="rounded-lg">
            <div className="bg-[#1C1C1C]  text-white  h-[350px] overflow-auto rounded-lg">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr className=" text-[#CECECE]  ">
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  "
                    >
                      Block
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Date{" "}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Wallet
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Swap Cost/Gain (ETH)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                      {" "}
                      Referral Reward (ETH)
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                      Transaction
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {allCoinData?.length > 0 &&
                    allCoinData?.map((d, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div> {d?.block}</div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d?.date}
                          </td>

                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                              <div>${d?.wallet} </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d?.swapcost}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex justify-center items-center ">
                              {d?.refreward}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d?.transaction}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d?.status}
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {allCoinData?.length > 0 &&
          allCoinData?.map((d, index) => (
            <div key={index} className="lg:hidden mt-4 ">
              <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
                <div className="w-full  ">
                  <div className="">
                    <>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> Block</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {d?.block}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">Date</div>
                        <div className=" py-2 pr-4 pl-4"> {d?.date}</div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">Wallet</div>
                        <div className=" py-2 pr-4 pl-4"> ${d?.wallet}</div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          {" "}
                          Swap Cost/Gain (ETH)
                        </div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4">
                          {d?.refreward}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          {" "}
                          Transaction
                        </div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {d?.transaction}
                        </div>
                      </div>
                      <div className=" flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> Status</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {d?.status}
                        </div>
                      </div>
                      <div></div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Referral;
