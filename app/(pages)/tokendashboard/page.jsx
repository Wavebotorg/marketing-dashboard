"use client";
import React, { useState, useEffect } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Pagination from "../Pagination/Pagination";
import { useSearch } from "../../components/contexts/SearchContext"; //search
const TokenDashboard = () => {
  const [allCoinData, setAllCoinData] = useState([
    {
      time: "23:00",
      amounteth: "-2833",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567879819",
    },
    {
      time: "23:00",
      amounteth: "-8333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "527879809",
    },
    {
      time: "23:00",
      amounteth: "-6333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "563879809",
    },
    {
      time: "23:00",
      amounteth: "-5333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567849809",
    },
    {
      time: "23:00",
      amounteth: "-5333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "567859809",
    },
    {
      time: "23:00",
      amounteth: "-7333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },

    {
      time: "23:00",
      amounteth: "-5333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "867879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    {
      time: "23:00",
      amounteth: "-333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "267879809",
    },
    {
      time: "23:00",
      amounteth: "-9333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "167879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "767879809",
    },
    {
      time: "23:00",
      amounteth: "-2333",
      minamonut: "$55",
      amountsol: "2300",
      status: "true",
      transaction: "562879809",
    },
    // Add more data as needed
  ]);

  //pagination
  const { searchQuery } = useSearch(); //search
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //search
  const filteredData = allCoinData.filter(
    (coin) =>
      coin.transaction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.amounteth.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="2xl:pl-64 xl:pl-64 md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto ">
      <div className="flex flex-col xl:justify-center   xl:ml-32 xl:mr-[93px] lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5  mt-10">
        <h1 className="text-[#1788FB]   font-medium max-w-screen-lg   text-2xl  md:text-3xl  text-center md:text-left ">
          Revenue Share Dashboard
        </h1>
        <div className="flex flex-col md:flex-row  md:justify-center md: items-center gap-6 mt-5 lg:justify-start">
          <div className="rounded-lg text-[#CECECE]  p-4 bg-[#1C1C1C] flex items-center gap-2 md:w-full w-52 lg:w-64">
            <IoIosInformationCircleOutline size={20} />
            <p>Rewards Forfeiture</p>
          </div>
          <div className="rounded-lg text-[#CECECE]  p-4 bg-[#1C1C1C] flex items-center gap-2 md:w-full w-52 lg:w-64">
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
              className="bg-[#1C1C1C] placeholder:text-[#626262] rounded-lg p-3 w-full"
            />
          </div>

          <div className="mt-3">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="AUTO-COMPOUND:"
              className="bg-[#1C1C1C] placeholder:text-[#626262] rounded-lg p-3 w-full"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between ">
          <div className="font-medium text-2xl ">
            <p>Claimed Rewards</p>
          </div>
          <div>
            <button className="rounded-lg bg-blue-500 p-1 px-3 text-nowrap">
              Claim Rewards
            </button>
          </div>
        </div>

        <div className="mt-6 hidden lg:block  ">
          <div className="rounded-lg">
            <div className="bg-[#1C1C1C] table-container  text-white h-auto  overflow-auto rounded-lg">
              <table className="w-full   ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr
                    style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                    className=" text-[#CECECE]  "
                  >
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
                    visibleData?.slice(0, 1).map((market, index) => (
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
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />

        {visibleData?.length > 0 &&
          visibleData?.map((market, index) => (
            <div key={index} className="lg:hidden mt-4 ">
              <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
                <div className="w-full  ">
                  <div className="">
                    <>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">Time</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {market?.time}
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
    </div>
  );
};

export default TokenDashboard;
