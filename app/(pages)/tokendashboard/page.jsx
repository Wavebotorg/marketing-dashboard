"use client";
import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Pagination from "../Pagination/Pagination";

const TokenDashboard = () => {
  const [allCoinData, setAllCoinData] = useState([
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879809",
    },
    // Add more data as needed
  ]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = allCoinData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex flex-col xl:justify-center xl:ml-16 xl:mr-12 lg:ml-2 lg:mr-5 ml-4 mr-2 mt-10">
        <h1 className="text-[#1788FB]   font-medium max-w-screen-lg   text-2xl  md:text-3xl  text-center md:text-left ">
          Revenue Share Dashboard
        </h1>
        <div className="flex flex-col md:flex-row  md:justify-center md: items-center gap-6 mt-5 lg:justify-start">
          <div className="rounded-lg p-4 bg-[#1C1C1C] flex items-center gap-2 md:w-full w-52 lg:w-64">
            <IoIosInformationCircleOutline size={20} />
            <p>Rewards Forfeiture</p>
          </div>
          <div className="rounded-lg p-4 bg-[#1C1C1C] flex items-center gap-2 md:w-full w-52 lg:w-64">
            <IoIosInformationCircleOutline size={20} />
            <p>Paginated Results</p>
          </div>
        </div>
        <div className="sm:mt-4 py-7">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className="font-medium text-2xl">
              <p>Token Holdings</p>
            </div>
            <div className="flex md:flex-row justify-center md:justify-end mt-4 md:mt-0 gap-3">
              <div>
                <button className="rounded-lg bg-blue-500 p-1 px-2">
                  Claim Wave
                </button>
              </div>
              <div>
                <button className="rounded-lg bg-blue-500 p-1 px-2">
                  Claim ETH
                </button>
              </div>
              <div>
                <button className="rounded-lg bg-blue-500 p-1 px-2">
                  Claim SOL
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Wallet:"
              className="bg-[#1C1C1C] rounded-lg p-3 w-full"
            />
          </div>

          <div className="mt-3">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="AUTO-COMPOUND:"
              className="bg-[#1C1C1C] rounded-lg p-3 w-full"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="font-medium text-2xl ">
            <p>Claimed Rewards</p>
          </div>
          <div>
            <button className="rounded-lg bg-blue-500 p-1 px-3 text-nowrap">
              Claim Rewards
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-8 ">
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
        <div className="mt-7 hidden lg:block ">
          <div className="rounded-lg">
            <div className="bg-[#1C1C1C]  text-white h-[650px]  overflow-auto rounded-lg">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr className=" text-[#CECECE]  ">
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  "
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Amount (ETH)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Min Amount (wave)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Amount (SOL)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                      Transaction
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {visibleData?.length > 0 &&
                    visibleData?.map((market, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div> {market?.time}</div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {market?.amounteth}
                          </td>

                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                              <div>${market?.minamonut} </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {market?.amountsol}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex justify-center items-center ">
                              {market?.status}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex justify-center items-center ">
                              {market?.transaction}
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Pagination
          totalItems={allCoinData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />

        {allCoinData?.length > 0 &&
          allCoinData?.map((market, index) => (
            <div key={index} className="lg:hidden mt-4 ">
              <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
                <div className="w-full  ">
                  <div className="">
                    <>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">Time</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {market.time}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          Amount (ETH)
                        </div>
                        <div className=" py-2 pr-4 pl-4">
                          {" "}
                          {market?.amounteth}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          Min Amount (wave)
                        </div>
                        <div className=" py-2 pr-4 pl-4">
                          {" "}
                          {market?.minamonut}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          {" "}
                          Amount (SOL)
                        </div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4">
                          {market?.amountsol}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">Status</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {market?.status}
                        </div>
                      </div>
                      <div className=" flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          Transaction
                        </div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4">
                          {market?.transaction}
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

export default TokenDashboard;
