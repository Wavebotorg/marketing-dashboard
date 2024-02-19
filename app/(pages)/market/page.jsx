"use client";

import Image from "next/image";

import React, { useEffect, useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";

import Bitcoin from "../../assets/bitcoin.png";
import Link from "next/link";
import axios from "axios";

const Market = () => {
  const [allCoinData, setAllCoinData] = useState([]);
 
  // const marketData = {
  //   amount: "0.01899934",
  //   coin: "BTC",
  //   price: "=$42,693.89",
  //   pnl: "Todays PnL -$.550()",
  //   markets: [
  //     {
  //       name: "Bitcoin BTC",
  //       image: Bitcoin,
  //       alt: "bitcoin",
  //       amount: "3.00",
  //       percentChange: "-2.49%",
  //       price: "$100.4",

  //       pnl: "-$3.15",
  //       tradeLink: "Trade",
  //     },
  //     {
  //       name: "Bitcoin BTC",
  //       image: Bitcoin,
  //       alt: "bitcoin",
  //       amount: "3.00",
  //       percentChange: "-2.49%",
  //       price: "$100.4",

  //       pnl: "-$3.15",
  //       tradeLink: "Trade",
  //     },
  //     {
  //       name: "Bitcoin BTC",
  //       image: Bitcoin,
  //       alt: "bitcoin",
  //       amount: "3.00",
  //       percentChange: "-2.49%",
  //       price: "$100.4",

  //       pnl: "-$3.15",
  //       tradeLink: "Trade",
  //     },
  //     {
  //       name: "Bitcoin BTC",
  //       image: Bitcoin,
  //       alt: "bitcoin",
  //       amount: "3.00",
  //       percentChange: "-2.49%",
  //       price: "$100.4",

  //       pnl: "-$3.15",
  //       tradeLink: "Trade",
  //     },
  //     {
  //       name: "Bitcoin BTC",
  //       image: Bitcoin,
  //       alt: "bitcoin",
  //       amount: "3.00",
  //       percentChange: "-2.49%",
  //       price: "$100.4",

  //       pnl: "-$3.15",
  //       tradeLink: "Trade",
  //     },

  //     // Add more market objects as needed
  //   ],
  // };
  const getUserdata = async () => {
    axios 
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setAllCoinData(res?.data);
        console.log("AllCoinData---->", myData?.data);
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };


  useEffect(() => {
    getUserdata();
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
            {allCoinData.amount}
          </h1>{" "}
          <span>{allCoinData.coin}</span>
        </div>
        <div className="text-sm pb-4">{allCoinData.price}</div>
        {/* <div className="text-sm pb-5">{allCoinData.pnl}</div> */}
      </div>

      {/* Border */}
      <div className="border-t border-white mt-2 pb-2"></div>

      {/* Market Data Section */}
      <div className="">
        <h1 className="font-medium pt-5 text-3xl tracking-wide">Markets</h1>
        <table className=" mt-5 min-w-full grid   ">
          <thead>
            <tr className="grid grid-cols-5">
              <th className="flex justify-start">Coin</th>
              <th className="flex justify-end">Amount</th>
              <th className="flex justify-end">Coin Price</th>
              <th className="flex justify-end">Today’s PnL</th>
              <th className="flex justify-end">Trade</th>
            </tr>
          </thead>
          <tbody className="pt-5">
            {allCoinData?.length > 0 &&
            allCoinData.map((market, index) => (
                <tr key={index} className="grid grid-cols-5  ">
                  <td className=" flex justify-start items-center gap-3 p-2">
                    <div className="inline-flex items-center ">
                      <Image
                        src={market?.image}
                        alt={market?.name}
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="">{market?.name} <span>{market?.symbol}</span></div>
                  </td>
                   <td className="flex justify-center">
                     {/* {market.amount} <span>({market.percentChange})</span> */}
                  </td> 
                  <td className="flex justify-end text-center ">
                  ${market?.current_price}
                   <span>({market?.price_change_percentage_24h})</span>
                  </td>
                  {/* <td className="flex justify-end">${market.pnl}</td> */}
                  <td></td>
                  <td className="flex justify-end">
                    <Link href="/">Trade</Link>
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