import React from "react";
import { CiSearch } from "react-icons/ci";
import bit from "../../assets/bitcoin.png";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RiGridFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const WatchList = () => {
  // Sample data array
  const watchListData = [
    {
      Market: "Bitcoin BTC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange: " 19353.30-48447.17",
      ChangesD: "-289.77",
      Sentiments: "50% Buying",
      Value: "",
    },

    {
      Market: "Bitcoin BTC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange: " 19353.30-48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      Value: "",
    },
    {
      Market: "Bitcoin BTC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange: " 19353.30-48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      Value: "",
    },
    {
      Market: "Bitcoin BTC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange: " 19353.30-48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      Value: "",
    },
    {
      Market: "Bitcoin BTC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange: " 19353.30-48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      Value: "",
    },
    {
      Market: "Bitcoin BTC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange: " 19353.30-48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      Value: "",
    },
    {
      Market: "Bitcoin BTC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange: " 19353.30-48447.17",
      ChangesD: "-289.77",
      Sentiments: "19% Buying",
      Value: "",
    },
    {
      Market: "Bitcoin BTC",
      Sell: "0.46253",
      Buy: "40189.72",
      WRange: " 19353.30-48447.17",
      ChangesD: "-289.77",
      Sentiments: "99% Buying",
      Value: "",
    },
  ];
  return (
    <div className="container">
      {/* <div className="relative flex-grow md:max-w-[700px]">
        <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
          <CiSearch size={20} />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full md: p-2 pl-10 text-sm text-gray-900 rounded-lg  dark:bg-[#1C1C1C]  dark:placeholder-gray-400 dark:text-white "
          placeholder="Search "
        />
      </div> */}
   
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
          <button className="bg-blue-500 px-2 rounded-lg">Orders</button>
        </div>
        <div>
          <button className=" ">Manual Trades</button>
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
          <div className="bg-[#1C1C1C] text-white h-96 overflow-auto rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1C1C1C]">
                  <th className="px-12 py-2">Market</th>
                  <th className="px-12 py-2">Sell</th>
                  <th className="px-12 py-2">Buy</th>
                  <th className="px-12 py-2">52W Range</th>
                  <th className="px-12 py-2">Changes 1D</th>
                  <th className="px-12 py-2">Sentiments</th>
                  <th className="px-12 py-2">Value</th>
                </tr>
              </thead>
              <tbody>
                {/* Map over the watchListData array to generate table rows */}
                {watchListData.map((item, index) => (
                  <tr key={index} className="bg-[#1C1C1C] ">
                    <td className="px-8 py-1">
                      <div className="flex mt-2 gap-3 ml-1">
                        <div className="">
                          <Image
                            src={bit}
                            alt="Picture of the author"
                            height={25}
                            width={25}
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-center">{item.Market}</div>
                      </div>
                    </td>
                    <td className="px-8 py-1">{item.Sell}</td>
                    <td className="px-8 py-1">{item.Buy}</td>
                    <td className="px-8 py-1">{item.WRange}</td>
                    <td className="px-8 py-1">
                      <div className="px-8 py-2 ">{item.ChangesD}</div>
                      <p className="text-sm text-[#FF0000] px-7">-(-0.73%)</p>
                    </td>
                    <td className="px-8 py-1">
                      {item.Sentiments}
                      <progress
                        value={parseFloat(item.Sentiments) || 0}
                        max={100}
                        className="progress w-full h-1 mt-1 rounded-lg bg-black"
                      />
                    </td>
                    <td className="px-8 py-1">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default WatchList;
