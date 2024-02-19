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

import axiosInstance from "../../apiInstances/axiosInstance";
import axios from "axios";

import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RiGridFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const WatchList = () => {
  const watchListData = [
    {
      id: 1,
      icon: Bit,
      Market: "Bitcoin BTC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange1: " 19353.30",
      WRange2: " 48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      chart: GreenChart,
    },
    {
      id: 2,
      icon: ETH,
      Market: "ETH",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange1: " 19353.30",
      WRange2: " 48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      chart: GreenChart,
    },
    {
      id: 3,
      icon: XRP,
      Market: "XRP",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange1: " 19353.30",
      WRange2: " 48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      chart: GreenChart,
    },
    {
      id: 4,
      icon: MATIC,
      Market: "MATIC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange1: " 19353.30",
      WRange2: " 48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      chart: RedChart,
    },
    {
      id: 5,
      icon: DOGE,
      Market: "DOGE",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange1: " 19353.30",
      WRange2: " 48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      chart: GreenChart,
    },
    {
      id: 6,
      icon: USDC,
      Market: "USDC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange1: " 19353.30",
      WRange2: " 48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      chart: GreenChart,
    },
    {
      id: 7,
      icon: ARB,
      Market: "ARB",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange1: " 19353.30",
      WRange2: " 48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      chart: GreenChart,
    },
    {
      id: 8,
      icon: LTC,
      Market: "LTC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange1: " 19353.30",
      WRange2: " 48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      chart: GreenChart,
    },
    {
      id: 9,
      icon: SOL,
      Market: "SOL",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange1: " 19353.30",
      WRange2: " 48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      chart: GreenChart,
    },
  ];

  const [allCoinData, setAllCoinData] = useState([]);
  console.log("🚀 ~ WatchList ~ allCoinData:", allCoinData);

  // Get All User Show
  const getUserdata = async () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        const myData = res;
        setAllCoinData(myData || []);

        console.log("AllCoinData---->", myData);
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };

  useEffect(() => {
    getUserdata();
  }, []);

  return (
    <>
      <div className="container hidden lg:block ">
        <div className="border-b border-stone-500 mt-7" />
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <div>
            <div className="text-2xl justify-start">My Watchlist</div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row justify-center md:justify-end mt-4 md:mt-0 gap-3">
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
        <div className="flex  gap-3 mt-6">
          <div>
            <button className="bg-blue-500 px-2 rounded-lg">All</button>
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
          <div className="mt-[7px]">
            <FaGreaterThan size={13} />
          </div>
        </div>

        <div className="container">
          <div className="rounded-lg">
            <div className="bg-[#1C1C1C]  text-white h-[550px] overflow-auto rounded-lg">
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
                  {watchListData?.length > 0 &&
                    watchListData?.map((d, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div className="flex items-center  gap-2">
                              <div>
                                <Image
                                  src={d.icon}
                                  alt="Picture of the author"
                                  className="rounded-full"
                                />
                              </div>
                              <div>{d.Market}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d.Sell}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d.Buy}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                              <div>{d.WRange1}</div>
                              <div>{d.WRange2}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d.ChangesD}
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
                            {d.Sentiments}
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
      </div>

      {watchListData?.length > 0 &&
        watchListData?.map((d, index) => (
          <div key={index} className="lg:hidden">
            <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md m-5">
              <div className="w-full  ">
                <div>
                  <>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Market</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        <span>
                          <Image
                            src={d.icon}
                            alt="Picture of the author"
                            className="rounded-full w-7 "
                          />
                        </span>
                        {d.Market}
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Sell</div>
                      <div className=" py-2 pr-4 pl-4">{d.Sell}</div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Buy</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4">
                        {d.Buy}
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">52W Range</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4">
                        {d.WRange1} - {d.WRange2}
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Change 1D</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        {d.ChangesD}{" "}
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
                          {d.Sentiments}
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
    </>
  );
};

export default WatchList;
