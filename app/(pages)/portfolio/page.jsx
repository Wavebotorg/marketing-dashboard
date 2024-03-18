"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import bit from "../../assets/bitcoin.png";
import Image from "next/image";
import Pagination from "../Pagination/Pagination";

const Portfolio = () => {
  // Sample data array
  const portfolioData = [
    {
      id: 1,
      coin: "Bitcoin BTC",
      price: "0.07727",
      units: "124858.18",
      avgOpen: "0.08089",
      pl: "-$452.21",
      plPercentage: "-4.48%",
      value: "$9647.79",
      sell: "0.07727",
      buy: "0.07984",
    },
    {
      id: 2,
      coin: "Bitcoin BTC",
      price: "0.07727",
      units: "124858.18",
      avgOpen: "0.08089",
      pl: "-$452.21",
      plPercentage: "-4.48%",
      value: "$9647.79",
      sell: "0.07727",
      buy: "0.07984",
    },
    {
      id: 3,
      coin: "Bitcoin BTC",
      price: "0.07727",
      units: "124858.18",
      avgOpen: "0.08089",
      pl: "-$452.21",
      plPercentage: "-4.48%",
      value: "$9647.79",
      sell: "0.07727",
      buy: "0.07984",
    },
    {
      id: 4,
      coin: "Bitcoin BTC",
      price: "0.07727",
      units: "124858.18",
      avgOpen: "0.08089",
      pl: "-$452.21",
      plPercentage: "-4.48%",
      value: "$9647.79",
      sell: "0.07727",
      buy: "0.07984",
    },
  ];

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = portfolioData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="2xl:pl-52 xl:pl-60 md:pl-4  xsm:pl-16 mx-auto  ">
      <div className="flex flex-col xl:justify-center xl:ml-16 xl:mr-12 lg:ml-2 md:mr-5  xsm:mr-4 ">
        <div className=" mt-7" />
        <div className="flex items-center justify-between mt-6">
          <div className="text-2xl justify-start">My Portfolio</div>
          <div className=" flex w-96 gap-2 text-sm xsm:mr-0 rounded-lg  bg-[#1C1C1C] text-white ">
            <div className=" flex items-center pl-3 pointer-events-none">
              <CiSearch size={20} />
            </div>
            <input
              type="search"
              id="default-search"
              className="bg-[#1C1C1C]  outline-none my-2"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex  md:gap-5 gap-2 mt-6 lg:px- md:text-base text-sm items-center">
          <div>
            <button className="bg-blue-500 px-2 rounded-full">Orders</button>
          </div>
          <div>
            <button className="  ">Manual Trades</button>
          </div>
        </div>
        {/* <div className="flex lg:px-6 flex-row  items-center justify-between mt-6">
          <div>
            <div className="text-2xl justify-start items-center">
              My Portfolio
            </div>
          </div>
        </div> */}

        {/* <div className="flex  md:gap-5 gap-2.5 mt-6 lg:px-6 md:text-base text-sm items-center">
          <div>
            <button className="bg-blue-500 px-3 py-0.5 rounded-full">
              Orders
            </button>
          </div>
          <div>
            <button className="">Manual Trades</button>
          </div>
          <div className="flex items-center  ml-auto  ">
            <div>
              <label className=" text-sm md:text-lg ">Rows per page </label>
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
        </div> */}
        <div className="mt-5 mb-5 lg:block hidden">
          <div className="rounded-lg">
            <div className="bg-[#1C1C1C] text-white overflow-auto rounded-lg ">
              {/*            <table className="w-full">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl ">
                  <tr className="text-[#CECECE]">
                    <th className="px-6 py-3 text-center text-base font-medium  sticky left-0 bg-[#1C1C1C]">
                      Coin
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Price
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Units
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Avg.Open
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      P/L
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      P/L(%)
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Value
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Sell
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Buy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over the portfolioData array to generate table rows  
                  {visibleData?.length > 0 &&
                    visibleData?.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-center whitespace-nowrap font-medium text-white sticky left-0 bg-[#1C1C1C]">
                          <div className="flex items-center  gap-2">
                            <div>
                              <Image
                                src={bit}
                                alt="Picture of the author"
                                className="rounded-full max-w-12"
                              />
                            </div>
                            <div>{item?.coin}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap  text-white">
                          <div className="py-0.5 ">{item?.price}</div>
                          <p className="text-sm text-[#FF0000]">
                            -3.12% (-0.00)
                          </p>
                        </td>
                        <td className="px-6 py-4  whitespace-nowrap  text-white">
                          <div className="py-0.5 text-center">
                            {item?.units}
                          </div>
                          <p className="text-sm mr-4 text-[#CECECE] text-end">
                            Long
                          </p>
                        </td>

                        <td className="px-6 py-4 text-center whitespace-nowrap  text-white">
                          {item?.avgOpen}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap  text-[#FF0000]">
                          {item?.pl}
                        </td>
                        <td className=" px-6 py-4 text-center whitespace-nowrap  text-[#FF0000]">
                          {item?.plPercentage}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap  text-white">
                          {item?.value}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap  text-white">
                          {item?.sell}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap  text-white">
                          {item?.buy}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table> */}
              <>
                <table className="w-full">
                  <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                    <tr className="text-[#CECECE]">
                      <th className="px-2 py-3 text-center text-base font-medium  sticky left-0 bg-[#1C1C1C]">
                        Coin
                      </th>
                      <th className="px-2 py-3 text-center text-base font-medium   whitespace-nowrap">
                        Price
                      </th>
                      <th className="px-2 py-3 text-center text-base font-medium   whitespace-nowrap">
                        Units
                      </th>
                      <th className="px-2 py-3 text-center text-base font-medium   whitespace-nowrap">
                        Avg.Open
                      </th>
                      <th className="px-2 py-3 text-center text-base font-medium   whitespace-nowrap">
                        P/L
                      </th>
                      <th className="px-2 py-3 text-center text-base font-medium   whitespace-nowrap">
                        P/L(%)
                      </th>
                      <th className="px-2 py-3 text-center text-base font-medium   whitespace-nowrap">
                        Value
                      </th>
                      <th className="px-2 py-3 text-center text-base font-medium   whitespace-nowrap">
                        Sell
                      </th>
                      <th className="px-2 py-3 text-center text-base font-medium   whitespace-nowrap">
                        Buy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleData?.length > 0 &&
                      visibleData?.map((item, index) => (
                        <tr key={index}>
                          <td className="px-3 py-4 text-center whitespace-nowrap font-medium text-white sticky left-0 bg-[#1C1C1C]">
                            <div className="flex items-center  gap-2">
                              <div>
                                <Image
                                  src={bit}
                                  alt="Picture of the author"
                                  className="rounded-full max-w-12"
                                />
                              </div>
                              <div>{item.coin}</div>
                            </div>
                          </td>

                          <td className="px-3 py-4  whitespace-nowrap  text-white">
                            <div className="py-0.5 text-center">
                              {item.price}
                            </div>
                            <p className="text-sm text-[#FF0000] ">
                              -3.12% (-0.00)
                            </p>
                          </td>

                          <td className=" px-3 py-4 text-center whitespace-nowrap  text-white">
                            <div className="py-0.5 text-center">
                              {item?.units}
                            </div>
                            <p className="text-sm lg:mr-10 md:mr-4 xsm:mr-2 text-[#CECECE] text-end">
                              Long
                            </p>
                          </td>
                          <td className="px-3 py-4 text-center whitespace-nowrap  text-white">
                            {item?.avgOpen}
                          </td>
                          <td className="px-3 py-4 text-center whitespace-nowrap  text-white">
                            {item?.pl}
                          </td>
                          <td className="px-3 py-4 text-center whitespace-nowrap  text-white">
                            {item?.plPercentage}
                          </td>
                          <td className="px-3 py-4 text-center whitespace-nowrap  text-white">
                            {item?.value}
                          </td>
                          <td className="px-3 py-4 text-center whitespace-nowrap  text-white">
                            {item?.sell}
                          </td>
                          <td className="px-3 py-4 text-center whitespace-nowrap  text-white">
                            {item?.buy}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </>
            </div>
          </div>
        </div>
        {/* <Pagination
          totalItems={portfolioData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          style={{ display: "block !important" }}
        /> */}
        <div className="xsm:hidden md:hidden lg:block">
          <Pagination
            totalItems={portfolioData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
        {portfolioData?.length > 0 &&
          portfolioData?.map((item, index) => (
            <div key={index} className="lg:hidden mt-4 ">
              <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
                <div className="w-full  ">
                  <div className="">
                    <>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> Coin</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          <span>
                            <Image
                              src={bit}
                              alt="Picture of the author"
                              className="rounded-full max-w-12"
                            />
                          </span>
                          {item?.coin}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> Price</div>
                        <div className=" py-2 pr-4 pl-4">
                          {" "}
                          <span className="pl-5">{item?.price}</span>
                          <p className="text-sm text-[#FF0000]">
                            -3.12% (-0.00)
                          </p>
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> Units</div>
                        <div className=" py-2 pr-4 pl-4">
                          {" "}
                          {item?.units}
                          <p className="text-sm mr-4 text-[#CECECE] text-end">
                            Long
                          </p>
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          {" "}
                          Avg.Open
                        </div>
                        <div className=" py-2 pr-4 pl-4"> {item?.avgOpen}</div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> P/L</div>
                        <div className=" py-2 pr-4 pl-4"> {item?.pl}</div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> P/L(%)</div>
                        <div className=" py-2 pr-4 pl-4">
                          {" "}
                          {item?.plPercentage}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> Value</div>
                        <div className=" py-2 pr-4 pl-4"> {item?.value}</div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> Sell</div>
                        <div className=" py-2 pr-4 pl-4"> {item?.sell}</div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> Buy</div>
                        <div className=" py-2 pr-4 pl-4"> {item?.buy}</div>
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

export default Portfolio;
