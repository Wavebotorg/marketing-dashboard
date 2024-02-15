"use client";

import Image from "next/image";
import React from "react";
import { LiaEyeSolid } from "react-icons/lia";

import Bitcoin from "../../assets/bitcoin.png";
import Link from "next/link";

const Market = () => {
  // JSON data
  const marketData = {
    amount: "0.01899934",
    coin: "BTC",
    price: "=$42,693.89",
    pnl: "Todays PnL -$.550()",
    markets: [
      {
        name: "Bitcoin BTC",
        image: Bitcoin,
        alt: "bitcoin",
        amount: "3.00",
        percentChange: "-2.49%",
        price: "$100.4",

        pnl: "-$3.15",
        tradeLink: "Trade",
      },
      {
        name: "Bitcoin BTC",
        image: Bitcoin,
        alt: "bitcoin",
        amount: "3.00",
        percentChange: "-2.49%",
        price: "$100.4",

        pnl: "-$3.15",
        tradeLink: "Trade",
      },
      {
        name: "Bitcoin BTC",
        image: Bitcoin,
        alt: "bitcoin",
        amount: "3.00",
        percentChange: "-2.49%",
        price: "$100.4",

        pnl: "-$3.15",
        tradeLink: "Trade",
      },
      {
        name: "Bitcoin BTC",
        image: Bitcoin,
        alt: "bitcoin",
        amount: "3.00",
        percentChange: "-2.49%",
        price: "$100.4",

        pnl: "-$3.15",
        tradeLink: "Trade",
      },
      {
        name: "Bitcoin BTC",
        image: Bitcoin,
        alt: "bitcoin",
        amount: "3.00",
        percentChange: "-2.49%",
        price: "$100.4",

        pnl: "-$3.15",
        tradeLink: "Trade",
      },

      // Add more market objects as needed
    ],
  };

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
            {marketData.amount}
          </h1>{" "}
          <span>{marketData.coin}</span>
        </div>
        <div className="text-sm pb-4">{marketData.price}</div>
        <div className="text-sm pb-5">{marketData.pnl}</div>
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
              <th className="flex justify-end">Todat’s PnL</th>
              <th className="flex justify-end">Trade</th>
            </tr>
          </thead>
          <tbody className="pt-5">
            {marketData?.markets.length > 0 &&
              marketData.markets.map((market, index) => (
                <tr key={index} className="grid grid-cols-5">
                  <td className=" flex justify-start items-center gap-3">
                    <div className="inline-flex items-center ">
                      <Image
                        src={market.image}
                        alt={market.alt}
                        width="10px"
                        height="10px"
                      />
                    </div>
                    <div className="">{market.name}</div>
                  </td>
                  <td className="flex justify-end">
                    {market.amount} <span>({market.percentChange})</span>
                  </td>
                  <td className="flex justify-end">
                    ${market.price} <span>({market.percentChange})</span>
                  </td>
                  <td className="flex justify-end">${market.pnl}</td>
                  <td className="flex justify-end">
                    <Link href="/">{market.tradeLink}</Link>
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
