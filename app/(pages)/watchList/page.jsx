"use client";
import React, { useEffect, useState } from "react";

import Bit from "../../../public/assets/watchlist/bitcoin.svg";
import ETH from "../../../public/assets/watchlist/eth.svg";
import XRP from "../../../public/assets/watchlist/xrp.svg";
import MATIC from "../../../public/assets/watchlist/matic.svg";
import DOGE from "../../../public/assets/watchlist/doge.svg";
import USDC from "../../../public/assets/watchlist/usdc.svg";
import ARB from "../../../public/assets/watchlist/arb.svg";
import LTC from "../../../public/assets/watchlist/ltc.svg";
import SOL from "../../../public/assets/watchlist/sol.svg";
import GreenChart from "../../../public/assets/watchlist/greenchart.svg";
import RedChart from "../../../public/assets/watchlist/redchart.svg";
import { GoSearch } from "react-icons/go";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import axiosInstance from "../../apiInstances/axiosInstance";
import axios from "axios";

import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RiGridFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import axiosInstanceAuth from "@/app/apiInstances/axiosInstanceAuth";
import Pagination from "../Pagination/Pagination";

import { usePagination } from "../Pagination/usePagination";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState("");
  const [allCoinData, setAllCoinData] = useState([]);
  const [watchlistData, setWatchlistData] = useState([]);

  const [search, setSearch] = useState("");
  const [filterdAllUsers, setFilterdAllUsers] = useState([]); // Use Filter
  const { sliceData, currentPage, numbers, totalPages, goToPage } =
    usePagination(filterdAllUsers, 5);

  // Search
  const HendalSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const results = watchlistData.filter((item) => {
      const searchTerm = search.toLowerCase();
      const itemNameMatch = item?.name?.toLowerCase().includes(searchTerm);
      return itemNameMatch;
    });
    setFilterdAllUsers(results);
    goToPage(1);
  }, [search]);

  const getUserdata = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&page=1&sparkline=false&locale=en"
      );
      setAllCoinData(res?.data);
    } catch (err) {
      console.log("err --->", err);
    }
  };

  const getWatchlistdata = async () => {
    try {
      const res = await axiosInstanceAuth.get("/allWatchlistData");
      const myData = res?.data?.data;
      setWatchlist(myData);

      // Filter allCoinData based on watchlist IDs
      const filteredData = allCoinData.filter((coin) =>
        myData.includes(coin.id)
      );

      setWatchlistData(filteredData);
      console.log("watchlistfilter-----------", filteredData);
    } catch (err) {
      console.log("err --->", err);
    }
  };

  useEffect(() => {
    getUserdata();
  }, []);

  useEffect(() => {
    if (allCoinData.length > 0) {
      getWatchlistdata();
    }
  }, [allCoinData]); // Only trigger if allCoinData changes

  useEffect(() => {
    if (watchlist.length > 0) {
      getWatchlistdata();
    }
  }, []);
  return (
    <div className="2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto">
      <div className="flex flex-col xl:justify-center xl:ml-16 xl:mr-12 lg:ml-2 lg:mr-5 ">
        <div className=" mt-7" />
        <div class="relative">
          <input
            class="shadow-md pl-10  rounded-lg lg:w-96 text-[#9F9F9F] text-[16px] py-2 px-3  focus:outline-none"
            id="username"
            type="text"
            placeholder="Search"
            value={search}
            onChange={HendalSearch}
          />

          <div class="absolute left-0 inset-y-0 flex py-2 ">
            <GoSearch size={20} className="ml-3 text-[#22345C]" />
          </div>
        </div>
        <div className="p-2">
          <div className="flex  items-center justify-between mt-6">
            <div>
              <div className="text-2xl justify-start">My Watchlist</div>
            </div>
            <div className="flex  justify-center md:justify-end  md:mt-0 gap-3">
              <div>
                <FaPlus size={24} />
              </div>
              <div>
                <HiOutlineAdjustmentsHorizontal
                  size={24}
                  className="text-blue-500"
                />
              </div>
              <div>
                <RiGridFill size={24} />
              </div>
              <div>
                <BsThreeDotsVertical size={24} />
              </div>
            </div>
          </div>
          <div className="flex  md:gap-5 gap-2 mt-6 lg:px- md:text-base text-sm items-center">
            <div>
              <button className="bg-blue-500 px-2 rounded-full">All</button>
            </div>
            <div>
              <button className="  ">Crypto</button>
            </div>
            <div>
              <button className="  ">Stocks</button>
            </div>
            <div>
              <button className="  ">People</button>
            </div>
            <div>
              <button className="  ">Smart Portfolios</button>
            </div>
            <div className="">{/* <GrFormNext size={22} /> */}</div>
          </div>
        </div>

        <div className="hidden lg:block mt-5 mb-5">
          <div className="rounded-lg">
            <div className="bg-[#1C1C1C]  text-white h-auto overflow-auto rounded-lg">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr className=" text-[#CECECE]  ">
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  "
                    >
                      Markets
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Sell
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Buy
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      52W Range
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                      Changes 1D
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                      Sentiment
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    ></th>
                  </tr>
                </thead>

                <tbody>
                  {sliceData?.length > 0 &&
                    sliceData?.map((d, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div className="flex items-center  gap-2">
                              <div>
                                <Image
                                  src={d.image}
                                  alt="Picture of the author"
                                  className="rounded-full"
                                  width={30}
                                  height={30}
                                />
                              </div>
                              <div>{d.name}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d.circulating_supply}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d.current_price}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                              <div>{d.max_supply}</div>
                              <div>{d.price_change_24h}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d.total_supply}
                            <div className="flex justify-center items-center ">
                              <div className="">
                                <FaCaretDown
                                  size={15}
                                  className="text-[#FF0000]"
                                />
                              </div>
                              <div className="text-[11px] text-[#FF0000]">
                                (-0.73%)
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4  whitespace-nowrap text-md text-white ">
                            {d.market_cap_rank} % Buying
                            <div className="w-full bg-[#262626] rounded-full h-1.5 mt-1.5">
                              <div
                                className="bg-[#494949] h-1.5 rounded-full"
                                style={{ width: "90%" }}
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 text-end justify-end flex whitespace-nowrap text-md text-white ">
                            <Image
                              src={d.chart}
                              alt="Picture of the author"
                              className="rounded-full"
                            />
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="xsm:hidden md:hidden lg:block">
          {/* <Pagination
            totalItems={allCoinData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
            style={{ display: "block !important" }}
          /> */}
          {watchlistData?.length > 5 ? (
            <div className="flex gap-2 pb-5 bottom-0">
              <button
                className="px-1 py-1 leading-tight  bg-[#FFFFFF] rounded-lg text-black text-xl"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
              >
                <GrFormPrevious size={25} />
              </button>

              {numbers.map((item, index) => (
                <button
                  disabled={item === "..."}
                  className={`py-[3px] px-3  rounded-lg ${
                    currentPage === item &&
                    "bg-[#22345C] text-white font-bold font-sans"
                  }`}
                  onClick={() => goToPage(item)}
                  key={index}
                >
                  {item}
                </button>
              ))}

              <button
                className=" px-1 py-1  leading-tight  bg-[#FFFFFF] rounded-lg text-black text-xl"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
              >
                <GrFormNext size={25} />
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {watchlistData?.length > 0 &&
        watchlistData?.map((d, index) => (
          <div key={index} className="lg:hidden xsm:ml- md:ml-0 m-5">
            <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md m-5">
              <div className="w-full  ">
                <div>
                  <>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Market</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        <span>
                          <Image
                            src={d.image}
                            alt="Picture of the author"
                            className="rounded-full w-7 "
                            width={30}
                            height={30}
                          />
                        </span>
                        {d.name}
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Sell</div>
                      <div className=" py-2 pr-4 pl-4">
                        {d.circulating_supply}
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Buy</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4">
                        {d.current_price}
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">52W Range</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4">
                        {d.max_supply} - {d.price_change_24h}
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Change 1D</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        {d.total_supply}{" "}
                        <span className="flex items-center text-red-500 text-[11px]">
                          <FaCaretDown size={12} />
                          (-0.73%)
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Sentiment</div>
                      <div>
                        <div className="flex justify-end  py- pr-4 pl-4">
                          {d.market_cap_rank} % Buying
                        </div>
                        <div className="flex justify-end  py-1.5 pr-4 pl-4">
                          <div className="w-44 bg-[#262626] rounded-full h-1.5 mt-1.5">
                            <div
                              className="bg-[#494949] h-1.5 rounded-full"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="py-2  pl-4 font-semibold"></div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4">
                        <Image
                          src={d.chart}
                          alt="Picture of the author"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WatchList;
