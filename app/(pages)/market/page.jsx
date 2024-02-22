"use client";
import { useParams } from "react-router-dom";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { BiBookmark } from "react-icons/bi";

import Link from "next/link";
import axios from "axios";

const Market = () => {
  const {id}  = useParams();
  const [allCoinData, setAllCoinData] = useState([]);
  const [savedCoins, setSavedCoins] = useState([]);
 console.log("save",savedCoins);
  const getUserdata = async () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setAllCoinData(res?.data);
     
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };

  useEffect(() => {
    getUserdata();
  }, []);
  
  const saveCoin = async (id)=>{
    axios.post("watchlist", { id })
    .then((res)=>{
      setSavedCoins(res?.data)
      //  setSavedCoins((prevSavedCoins) => [...prevSavedCoins, savedCoin]);
  
    })
    .catch((err)=>{
      console.log("err--->",err)
    })
    }
  
  useEffect(() => {
    saveCoin();
  }, []);

  return (
    <div className="text-white p-10 rounded-lg">
      {/* Header Section */}
      <div className="items-center">
        <div className="flex pb-3">
          <h1 className="font-bold text-2xl">Liquidity Intents</h1>
          <span>
            <LiaEyeSolid />
          </span>
        </div>
        <div className="flex pb-4">
          <h1 className="text-[#1788FB] font-bold text-3xl">
            {allCoinData.current_price}
          </h1>{" "}
          <span>{allCoinData.symbol}</span>
        </div>
        <div className="text-sm pb-4">{allCoinData.price}</div>
        {/* <div className="text-sm pb-5">{allCoinData.pnl}</div> */}
      </div>

      {/* Border */}
      <div className="border-t border-white mt-2 pb-2"></div>

      {/* Market Data Section */}
      <div className="">
        <h1 className="font-medium pt-5 text-3xl tracking-wide">Markets</h1>
        <table className=" mt-5 min-w-full grid  ">
          <thead>
            <tr className="grid grid-cols-6">
              <th className="flex justify-start">Coin</th>
              <th className="flex justify-end">Amount</th>
              <th className="flex justify-end">Coin Price</th>
              <th className="flex justify-end">Today’s PnL</th>
              <th className="flex justify-end">Trade</th>
              <th className="flex justify-end">Save</th>
            </tr>
          </thead>
          <tbody className="pt-5">
            {allCoinData?.length > 0 &&
              allCoinData.map((market, index) => (
                <tr key={index} className="grid grid-cols-6 ">
                  <td className=" flex justify-start items-center gap-3 p-2">
                    <div className="inline-flex items-center ">
                      <Image
                        src={market?.image}
                        alt={market?.name}
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="">
                      {market?.name} <span>{market?.symbol}</span>
                    </div>
                  </td>
                  <td className="flex justify-center">
                    {/* {market.amount} <span>({market.percentChange})</span> */}
                  </td>
                  <td className="pl-36  ">
                 
                      {" "}
                      <div className="justify-end text-center"> ${market?.current_price}</div>
                      <div className="justify-end text-center text-[#FF0000]">({market?.price_change_percentage_24h})</div>
                   
                  </td>
                  {/* <td className="flex justify-end">${market.pnl}</td> */}
                  <td></td>
                <td className="flex justify-end">
                    <Link href="/">Trade</Link>
                  </td  >
                  <td className="flex justify-end">
                  {savedCoins.includes(savedCoins.id) ? (
                    // Render a filled bookmark if the coin is saved
                    <BiBookmark style={{ color: '#1788FB' }} />
                  ) : (
                    // Render a button to save the coin
                    <button onClick={() => saveCoin(savedCoins.id)}>
                      <BiBookmark />
                    </button>
                  )}
                  
                </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Market;

//alt space l
