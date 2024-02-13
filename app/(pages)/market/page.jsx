
"use client"


import Image from "next/image";
import React from "react";
import { LiaEyeSolid } from "react-icons/lia";

import Bitcoin from "../../../public/assets/bitcoin.png";
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
        tradeLink: "Trade"
      },
      // Add more market objects as needed
    ]
  };


  // return (
  //   <div className="text-white p-10 rounded-lg">
  //     {/* Header Section */}
  //     <div className=" items-center ">
  //       <div className="flex pb-3" >
  //         <h1 className="font-bold text-2xl">Liquidity Intents</h1>
  //         <span>
  //           <LiaEyeSolid />
  //         </span>
  //       </div>
      
  //       <div className="flex  pb-4">
  //         <h1 className="text-[#1788FB] font-bold text-3xl">{marketData.amount}</h1>{" "}
  //         <span>{marketData.coin}</span>
  //       </div>

  //       <div className="text-sm  pb-4">{marketData.price}</div>
  //       <div className="text-sm  pb-5">{marketData.pnl}</div>
  //     </div>

  //     {/* Border */}
  //     <div className="border-t border-white mt-2 pb-2"></div>

  //     {/* Market Data Section */}
  //     <div className="">
  //       <h1 className="font-medium pt-5 text-3xl tracking-wide">Markets</h1>
  //       <div className="grid grid-cols-5 items-center py-5 ">
  //         <div>Coin</div>
  //         <div>Amount</div>
  //         <div>Coin Price</div>
  //         <div>Todat’s PnL</div>
  //         <div>Trade</div>

  //         {marketData.markets.map((market, index) => (
  //           <React.Fragment key={index}>
  //             <div className="inline-flex  items-center py-5 mr-24">
  //               <Image src={market.image} alt={market.alt} width="10px" height="10px" />
  //               <span className="">{market.name}</span>
  //             </div>
  //             <div className=" ">{market.amount} <span>({market.percentChange})</span></div>
  //             <div className="">${market.price} <span>({market.percentChange})</span></div>
  //             <div className="">${market.pnl}</div>
  //             <Link href="/">{market.tradeLink}</Link>
  //           </React.Fragment>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );


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
          <h1 className="text-[#1788FB] font-bold text-3xl">{marketData.amount}</h1>{" "}
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
        <table className=" mt-5 min-w-full flex ">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Amount</th>
              <th>Coin Price</th>
              <th>Todat’s PnL</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {marketData.markets.map((market, index) => (
              <tr key={index}>
                <td>
                  <div className="inline-flex items-center">
                    <Image src={market.image} alt={market.alt} width="10px" height="10px" />
                    <span className="">{market.name}</span>
                  </div>
                </td>
                <td>{market.amount} <span>({market.percentChange})</span></td>
                <td>${market.price} <span>({market.percentChange})</span></td>
                <td>${market.pnl}</td>
                <td><Link href="/">{market.tradeLink}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Market;
