"use client";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useSearch } from "../../components/contexts/SearchContext";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RiGridFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import Pagination from "../Pagination/Pagination";
import Chart from "../chart/ChartComponent";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState("");
  const [allCoinData, setAllCoinData] = useState([]);
  const [watchlistData, setWatchlistData] = useState([]);

  const [open, setOpen] = React.useState(false); // Add user popup open
  const [selectedCoinId, setSelectedCoinId] = useState(""); // use Delete API
  const [showModal, setShowModal] = React.useState(false); // Delete Popup

  //pagination
  const { searchQuery } = useSearch(); //search
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //search
  const filteredData = watchlistData.filter(
    (coin) =>
      // coin.id.toLowerCase().includes(searchQuery.toLowerCase())
      coin.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const visibleData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Delete Modal Open
  const modelShows = (id) => {
    setShowModal(true);
    setSelectedCoinId(id);
  };

//get data from coingecko Api
  const getUserdata = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&page=1&per_page=260&order=market_cap_desc&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en"
      );
      setAllCoinData(res?.data);
    } catch (err) {
      console.log("err --->", err);
    }
  };

  //To Get Coins From Backend and merge with coingecko api for watchlist data
  const getWatchlistdata = async () => {
    try {
      const res = await axiosInstanceAuth.get("/allWatchlistData");
      const myData = res?.data?.data;
      // console.log("🚀 ~ getWatchlistdata ~ myData:", myData);

      setWatchlist(myData);
      // Filter allCoinData based on watchlist IDs

      const filteredData = allCoinData.filter((coin) =>
        myData.includes(coin.id)
      );

      setWatchlistData(filteredData);
      // console.log("watchlistfilter-----------", filteredData);
    } catch (err) {
      console.log("err --->", err);
    }
  };

  //To remove Coin From WatchList
  const removeCoinFromWatchlist = async () => {
    try {
      // Make an API call to remove the coin from the watchlist
      await axiosInstanceAuth.post("removeCoinWatchlist", {
        coinId: selectedCoinId,
      });

      // Update the local state to reflect the changes
      const updatedWatchlist = watchlist.filter(
        (coinId) => coinId !== selectedCoinId
      );

      setWatchlist(updatedWatchlist);
      // console.log(
      //   "🚀 ~ removeCoinFromWatchlist ~  updatedWatchlist:",
      //   updatedWatchlist
      // );

      const updatedWatchlistData = allCoinData.filter((coin) =>
        updatedWatchlist.includes(coin.id)
      );

      setWatchlistData(updatedWatchlistData);
      // console.log(
      //   "🚀 ~ removeCoinFromWatchlist ~ updatedWatchlistData:",
      //   updatedWatchlistData
      // );
      setShowModal(false);
    } catch (err) {
      console.log("Error removing coin from watchlist:", err);
    }
  };
  useEffect(() => {
    getUserdata();
  }, []);

  useEffect(() => {
    if (allCoinData.length > 0) {
      getWatchlistdata();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCoinData]); // Only trigger if allCoinData changes

  useEffect(() => {
    if (watchlist.length > 0) {
      getWatchlistdata();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //To show Value in Doller
  function formatToUSD(val) {
    const formattedValue = val.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    const trimmedValue = formattedValue.replace(".00", "");
    return trimmedValue;
  }

  return (
    <div className="2xl:pl-64 xl:pl-64 md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto ">
      <div className="flex flex-col xl:justify-center xl:ml-32 xl:mr-[92px]  lg:ml-2 lg:mr-5 ml-5 mr-5">
        <div className=" mt-7" />
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
              <button className="bg-blue-500 px-3 rounded-full">All</button>
            </div>
            <div>
              <button className=" hover:bg-blue-500 px-3 rounded-full">
                Crypto
              </button>
            </div>
            <div>
              <button className=" hover:bg-blue-500 px-3 rounded-full">
                Stocks
              </button>
            </div>
            <div>
              <button className=" hover:bg-blue-500 px-3 rounded-full">
                People
              </button>
            </div>
            <div>
              <button className=" hover:bg-blue-500 px-3 rounded-full">
                Smart Portfolios
              </button>
            </div>
            <div className=""></div>
          </div>
        </div>

        <div className="hidden lg:block mt-5 mb-5">
          <div className="rounded-lg">
            <div className="bg-[#1C1C1C]  text-white h-auto overflow-auto rounded-lg">
              {/* for 2xl ,xl and lg size  */}
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr
                    style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                    className=" text-[#CECECE]  "
                  >
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
                      Coin Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      1h
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      24h
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      7d
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      24th Volume
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                      Market Cap
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                      Last 7 days
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-base font-medium  whitespace-nowrap"
                    >
                      Remove
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {visibleData?.length > 0 &&
                    visibleData?.map((d, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div className="flex items-center  gap-2">
                              <div>
                                <Image
                                  src={d?.image}
                                  alt="Picture of the author"
                                  className="rounded-full"
                                  width={30}
                                  height={30}
                                />
                              </div>
                              <div>{d?.name}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <span
                              className={`${
                                d.current_price === 0
                                  ? "text-white"
                                  : d.total_supply < 0
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {" "}
                              {d?.current_price}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div
                              className={`flex justify-center items-center ${
                                d?.price_change_percentage_1h_in_currency === 0
                                  ? "text-white"
                                  : d?.price_change_percentage_1h_in_currency <
                                    0
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {d?.price_change_percentage_1h_in_currency ===
                              0 ? (
                                <FaMinus size={15} className="text-white" />
                              ) : d?.price_change_percentage_1h_in_currency <
                                0 ? (
                                <FaCaretDown
                                  size={15}
                                  className="text-red-500"
                                />
                              ) : (
                                <FaCaretUp
                                  size={15}
                                  className="text-green-500"
                                />
                              )}
                              {(
                                d?.price_change_percentage_1h_in_currency * 100
                              ).toFixed(1)}
                              %
                            </div>
                          </td>

                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                              <div
                                className={`flex justify-center items-center ${
                                  d?.price_change_percentage_24h_in_currency ===
                                  0
                                    ? "text-white"
                                    : d?.price_change_percentage_24h_in_currency <
                                      0
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {d?.price_change_percentage_24h_in_currency ===
                                0 ? (
                                  <FaMinus size={15} className="text-white" />
                                ) : d?.price_change_percentage_24h_in_currency <
                                  0 ? (
                                  <FaCaretDown
                                    size={15}
                                    className="text-red-500"
                                  />
                                ) : (
                                  <FaCaretUp
                                    size={15}
                                    className="text-green-500"
                                  />
                                )}
                                {(
                                  d?.price_change_percentage_24h_in_currency *
                                  100
                                ).toFixed(1)}
                                %
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                            <div
                              className={`flex justify-center items-center ${
                                d?.price_change_percentage_7d_in_currency === 0
                                  ? "text-white"
                                  : d?.price_change_percentage_7d_in_currency <
                                    0
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {d?.price_change_percentage_7d_in_currency ===
                              0 ? (
                                <FaMinus size={15} className="text-white" />
                              ) : d?.price_change_percentage_7d_in_currency <
                                0 ? (
                                <FaCaretDown
                                  size={15}
                                  className="text-red-500"
                                />
                              ) : (
                                <FaCaretUp
                                  size={15}
                                  className="text-green-500"
                                />
                              )}
                              {(
                                d?.price_change_percentage_7d_in_currency * 100
                              ).toFixed(1)}
                              %
                            </div>
                          </td>
                          <td className="px-6 py-4  whitespace-nowrap text-md text-white ">
                            {formatToUSD(d?.total_volume)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-white ">
                            {formatToUSD(d?.market_cap)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-white ">
                            <div className="flex justify-center items-center ">
                              <Chart
                                sparkline={d?.sparkline_in_7d.price}
                                priceChange={
                                  d?.price_change_percentage_7d_in_currency
                                }
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4   whitespace-nowrap text-md text-white ">
                            <button
                              onClick={() => modelShows(d.id)}
                              className="text-red-500 text-center "
                            >
                              Remove
                            </button>
                            {showModal ? (
                              <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                      <div className="relative p-6 flex-auto">
                                        <span className="justify-center items-center flex">
                                          <AiFillDelete className="w-16 h-16 fill-red-500" />
                                        </span>
                                        <p className="my-4 text-center leading-relaxed text-2xl text-red-500">
                                          Are You Sure ?
                                        </p>
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                          You want to Remove
                                        </p>
                                      </div>

                                      <div className="flex gap-11 items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                          onClick={() => setShowModal(false)}
                                          className="text-red-500 hover:text-white hover:bg-red-500  font-bold py-2 px-7  rounded"
                                        >
                                          No
                                        </button>

                                        <button
                                          onClick={removeCoinFromWatchlist}
                                          className="bg-emerald-500 active:bg-emerald-600 px-6 py-2  text-white font-bold  rounded"
                                        >
                                          Yes
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                              </>
                            ) : null}
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
          style={{ display: "block !important" }}
        />
      </div>

      {/* for md and sm size */}

      {visibleData?.length > 0 &&
        visibleData?.map((d, index) => (
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
                        {d?.name}
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Coin Price</div>
                      <div className="flex-col">
                        <div className="ml-6">${d?.current_price}</div>

                        <div className=" py-2 pr-4 pl-4">
                          <div
                            className={
                              d?.price_change_percentage_24h === 0
                                ? "text-white"
                                : d?.price_change_percentage_24h < 0
                                ? "text-red-500 "
                                : "text-green-500 "
                            }
                          >
                            ({d?.price_change_percentage_24h})
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">1h</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4">
                        <div
                          className={`flex justify-center items-center ${
                            d?.price_change_percentage_1h_in_currency === 0
                              ? "text-white"
                              : d?.price_change_percentage_1h_in_currency < 0
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {d?.price_change_percentage_1h_in_currency === 0 ? (
                            <FaMinus size={15} className="text-white" />
                          ) : d?.price_change_percentage_1h_in_currency < 0 ? (
                            <FaCaretDown size={15} className="text-red-500" />
                          ) : (
                            <FaCaretUp size={15} className="text-green-500" />
                          )}
                          {(
                            d?.price_change_percentage_1h_in_currency * 100
                          ).toFixed(1)}
                          %
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">24h</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4">
                        <div
                          className={`flex justify-center items-center ${
                            d?.price_change_percentage_24h_in_currency === 0
                              ? "text-white"
                              : d?.price_change_percentage_24h_in_currency < 0
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {d?.price_change_percentage_24h_in_currency === 0 ? (
                            <FaMinus size={15} className="text-white" />
                          ) : d?.price_change_percentage_24h_in_currency < 0 ? (
                            <FaCaretDown size={15} className="text-red-500" />
                          ) : (
                            <FaCaretUp size={15} className="text-green-500" />
                          )}
                          {(
                            d?.price_change_percentage_24h_in_currency * 100
                          ).toFixed(1)}
                          %
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">7d</div>
                      <div className=" justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        <div
                          className={`flex justify-center items-center ${
                            d?.price_change_percentage_7d_in_currency === 0
                              ? "text-white"
                              : d?.price_change_percentage_7d_in_currency < 0
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {d?.price_change_percentage_7d_in_currency === 0 ? (
                            <FaMinus size={15} className="text-white" />
                          ) : d?.price_change_percentage_7d_in_currency < 0 ? (
                            <FaCaretDown size={15} className="text-red-500" />
                          ) : (
                            <FaCaretUp size={15} className="text-green-500" />
                          )}
                          {(
                            d?.price_change_percentage_7d_in_currency * 100
                          ).toFixed(1)}
                          %
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">
                        24th Volume
                      </div>
                      <div className=" justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        <div className="flex justify-end items-center py-2 ">
                          {" "}
                          {formatToUSD(d?.total_volume)}
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Market Cap</div>
                      <div className=" justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        <div className="flex justify-end items-center py-2 ">
                          {" "}
                          {formatToUSD(d?.market_cap)}
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-[#494949] flex  justify-between">
                      <div className="py-2  pl-4 font-semibold">
                        Last 7 days
                      </div>
                      <div className="flex-1 justify-end items-center py-2 px-4 ">
                        {" "}
                        <div className="flex justify-end items-center  ">
                          <Chart
                            sparkline={d?.sparkline_in_7d.price}
                            priceChange={
                              d?.price_change_percentage_7d_in_currency
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Remove</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4">
                        <button
                          onClick={() => modelShows(d?.id)}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                        {showModal ? (
                          <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                  <div className="relative p-6 flex-auto">
                                    <span className="justify-center items-center flex">
                                      <AiFillDelete className="w-16 h-16 fill-red-500" />
                                    </span>
                                    <p className="my-4 text-center leading-relaxed text-2xl text-red-500">
                                      Are You Sure ?
                                    </p>
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                      You want to Remove
                                    </p>
                                  </div>

                                  <div className="flex gap-11 items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                      onClick={() => setShowModal(false)}
                                      className="text-red-500 hover:text-white hover:bg-red-500  font-bold py-2 px-7  rounded"
                                    >
                                      No
                                    </button>

                                    <button
                                      onClick={removeCoinFromWatchlist}
                                      className="bg-emerald-500 active:bg-emerald-600 px-6 py-2  text-white font-bold  rounded"
                                    >
                                      Yes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </>
                        ) : null}
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
