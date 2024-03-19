"use client";
import { useParams } from "react-router-dom";
import Image from "next/image";
import "./market.css";
import React, { useEffect, useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { BiBookmark } from "react-icons/bi";
import axiosInstanceAuth from "@/app/apiInstances/axiosInstanceAuth";
import Link from "next/link";
import axios from "axios";

import Pagination from "../Pagination/Pagination";

import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
const Market = () => {
  const { id } = useParams();
  const [allCoinData, setAllCoinData] = useState([]);
  const [savedCoins, setSavedCoins] = useState([]);
  const [savedData, setSavedData] = useState([]);
  console.log(savedData, "<,----------------savedData");
  console.log("getAllCoin------->>>", allCoinData);
  console.log("savedcoins-----------------", savedCoins);
  const getUserdata = async () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setAllCoinData(res?.data);
      })
      .catch((err) => {
        console.log("err market page --->", err);
      });
  };

  useEffect(() => {
    getUserdata();
  }, []);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = allCoinData?.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // useEffect(() => {
  //   const savedCoinsFromStorage = JSON.parse(localStorage.getItem('savedCoins')) || [];
  //   setSavedCoins(savedCoinsFromStorage);
  // }, []);

  useEffect(() => {
    // const savedCoinsFromStorage = JSON.parse(localStorage.getItem('savedCoins')) || [];
    // setSavedCoins(savedCoinsFromStorage);
    saveCoin();
  }, []);

  // const saveCoin = async (id) => {
  //   try {
  //     // Check if the user is logged in (you need to replace this condition with your authentication logic)
  //     const userIsLoggedIn = true; // Replace with your logic to check if the user is logged in

  //     if (userIsLoggedIn) {
  //       // Save the coin to the server for the logged-in user

  //       await axiosInstanceAuth.post("watchlist", { coinId: id });

  //       // Fetch the updated saved coins data from the server
  //       const updatedSavedCoins = await axiosInstanceAuth.get("watchlist");

  //       // Update the state with the updated saved coins from the server
  //       setSavedCoins(updatedSavedCoins.data);
  //       console.log("Updated Saved Coins:", updatedSavedCoins.data);
  //     }

  //     // Save the coin locally for both logged-in and logged-out users
  //     // setSavedCoins((prevSavedCoins) => [...prevSavedCoins, id]);
  //     // localStorage.setItem('savedCoins', JSON.stringify([...savedCoins, id]));

  //   } catch (err) {
  //     console.log("err--->", err);
  //   }
  // };
  //  const removeCoinWatchlist = async (id) => {
  //     try {
  //       // Make an API request to remove the coin from the watchlist
  //       await axiosInstanceAuth.delete(`watchlist/${id}`);

  //       // Fetch the updated saved coins data from the server
  //       const updatedSavedCoins = await axiosInstanceAuth.get("allWatchlistData");

  //       // Update the state with the updated saved coins from the server
  //       setSavedData(updatedSavedCoins.data.data);
  //       console.log("Updated Saved Coins:", updatedSavedCoins.data.data);
  //     } catch (err) {
  //       console.log("Error while updating saved coins:", err);
  //     }
  //   };
  const saveCoin = async (id) => {
    try {
      const isSaved = savedData.includes(id);

      // Check if the coin is already saved
      const res = await axiosInstanceAuth.get("/allWatchlistData");
      console.log("rres----------->>>", res);
      setSavedData(res?.data?.data);

      if (isSaved) {
        // If saved, remove it from the saved list
        setSavedCoins((prevSavedCoins) =>
          prevSavedCoins.filter((coinId) => coinId !== id)
        );
        setSavedData((prevSavedData) =>
          prevSavedData.filter((coinId) => coinId !== id)
        );
      } else {
        // If not saved, add it to the saved list
        setSavedCoins((prevSavedCoins) => [...prevSavedCoins, id]);
        setSavedData((prevSavedData) => [...prevSavedData, id]);
        // Save the coin to the server (if needed)
        await axiosInstanceAuth.post("watchlist", { coinId: id });
      }
    } catch (err) {
      console.log("Error while updating saved coins:", err);
    }
  };
  return (
    <>
      <div className=" bg-[#1C1C1C] rounded-2xl mb-5">
        {/* <div className="border-b border-stone-500 mt-7" /> */}
        <div className=" sm:pl-10 pl-2 sm:py-9 py-4">
          <div className="flex pb-3">
            <h1 className="font-bold text-2xl">Liquidity Intents</h1>
            <span className="text-[#828282] text-xl pl-4 pt-1   ">
              <LiaEyeSolid />
            </span>
          </div>
          {/* {allCoinData?.length > 0 &&
                   allCoinData?.map((d, index) => (
                      <>
                        <div key={index}> */}
          <div className="flex pb-4 ">
            <h1 className="text-[#1788FB] font-bold md:text-3xl text-lg  md:pr-3 pr-0">
              {/* {d.current_price} */} 0.01899934
            </h1>{" "}
            {/* <span>{d.symbol}</span> */}
            <select
              name="select Row"
              className="bg-[#1C1C1C] text-white rounded-lg p-1 !outline-none  "
              defaultValue=" BTC"
            >
              <option value="BTC">BTC</option>
              <option value="BTC1">BTC2</option>
              <option value="BTC3">BTC3</option>
              <option value="BTC4">BTC4</option>
              <option value="BTC5">BTC5</option>
            </select>
          </div>
          <div className="text-sm pb-4">{/* =${d.price} */} =$42,693.8</div>
          <div className="text-sm ">{/* {d.pnl} */} Todays PnL -$.550()</div>
          {/* </div>
                        </>
                   ))} */}
        </div>

        {/* Border */}
        <div className="lg:border-t lg:border-white  lg:pb-2 pb-0"></div>

        <div className=" hidden lg:block ">
          <div className="rounded-lg">
            <h1 className="font-medium pt-5 text-3xl tracking-wide pl-10">
              Markets
            </h1>
            <div className="flex justify-end  mb-7 ">
              {/* <div>
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
          
          </div> */}
            </div>
            <div className="bg-[#1C1C1C]  text-white h-auto overflow-auto rounded-lg px-10 ">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr className=" text-[#CECECE]  ">
                    <th
                      scope="col"
                      className=" py-3  text-base font-medium text-start "
                    >
                      Coin
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Coin Price
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Today’s PnL
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                      Trade
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-end text-base font-medium  whitespace-nowrap"
                    >
                      Save
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allCoinData?.length > 0 &&
                    allCoinData?.map((market, index) => (
                      <>
                        <tr key={index}>
                          {/* className={`${
                      savedCoins.includes(market.id) ? 'bg-blue-500' : ''
                    }`}> */}
                          <td className=" py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div className="flex items-center  gap-2">
                              <div>
                                <Image
                                  src={market?.image}
                                  alt={market?.name}
                                  className="rounded-full"
                                  width={30}
                                  height={30}
                                />
                              </div>
                              <div> {market?.name}</div>
                            </div>
                          </td>
                          <td className="  text-center whitespace-nowrap text-md text-white "></td>

                          <td className="text-center whitespace-nowrap text-md text-white ">
                            <div className="flex flex-col items-center justify-center ">
                              <div>${market?.current_price} </div>
                              <div className="text-[#FF0000]">
                                ({market?.price_change_percentage_24h})
                              </div>
                            </div>
                          </td>
                          <td className="  text-center whitespace-nowrap text-md text-white "></td>
                          <td className=" text-center whitespace-nowrap text-md text-white ">
                            {/* {d.ChangesD} */}
                            <div className="flex justify-center items-center ">
                              <Link href="/">Trade</Link>
                            </div>
                          </td>
                          <td className="   py-7   flex justify-end whitespace-nowrap text-md text-white  ">
                            {savedData && savedData.includes(market?.id) ? (
                              // Render a filled bookmark if the coin is saved
                              <button className="">
                                <IoBookmark
                                  className="text-[#1788FB]"
                                  size={20}
                                />
                                {/* style={{ backgroundColor: "#1788FB" }} */}
                              </button>
                            ) : (
                              // Render a button to save the coin
                              <button
                                className=""
                                onClick={() => saveCoin(market?.id)}
                              >
                                <IoBookmarkOutline size={20} />
                              </button>
                            )}
                            {/* <button
  className={`save-button ${savedCoins.includes(market.id) ? 'selected' : ''}`}
  onClick={() => saveCoin(market?.id)}
>
  <BiBookmark />
</button> */}
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
      <Pagination
        totalItems={allCoinData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      {allCoinData?.length > 0 &&
        allCoinData?.map((market, index) => (
          <div
            key={index}
            className="lg:hidden mt-4 space-y-2 flex justify-between"
          >
            <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
              <div className="w-full  ">
                <>
                  <div
                    className={`border-b border-[#494949] flex justify-between
                    //  {
                    //   savedCoins.includes(market?.id) ? "bg-blue-500" : ""
                    // }
                    `}
                  >
                    <div className="py-2  pl-4 font-semibold">Coin</div>
                    <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                      <span>
                        <Image
                          src={market?.image}
                          alt={market?.name}
                          className="rounded-full "
                          width={30}
                          height={30}
                        />
                      </span>
                      {market?.name}
                    </div>
                  </div>
                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold">Amount</div>
                    <div className=" py-2 px-4 "></div>
                  </div>
                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold">Coin Price</div>
                    <div className="flex justify-end items-center   px-4">
                      <div> ${market?.current_price} </div>
                      <div className="text-[#FF0000]">
                        ({market?.price_change_percentage_24h})
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold">Today’s PnL</div>
                    <div className="flex justify-end items-center py-2 px-4 "></div>
                  </div>
                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold">Trade</div>
                    <div className="flex justify-end items-center py-2 px-4  gap-1.5">
                      <Link href="/">Trade</Link>
                      {/* <span className="flex items-center text-red-500 text-[11px]">
                          <FaCaretDown size={12} />
                          (-0.73%)
                        </span> */}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="py-2  pl-4 font-semibold">Save</div>

                    <div className="flex justify-end py-2 px-4">
                      <div className="flex justify-end ml-16">
                        {savedData && savedData.includes(market?.id) ? (
                          // Render a filled bookmark if the coin is saved
                          <BiBookmark style={{ backgroundColor: "#1788FB" }} />
                        ) : (
                          // Render a button to save the coin
                          <button onClick={() => saveCoin(market?.id)}>
                            <BiBookmark />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
            <div></div>{" "}
          </div>
        ))}
    </>
  );
};

export default Market;
