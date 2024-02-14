"use client";
import React from "react";

import Overview from "../../../public/assets/discover/overview.png";
import Stocks from "../../../public/assets/discover/stock.png";
import Crypto from "../../../public/assets/discover/crypto.png";
import ETFs from "../../../public/assets/discover/etfs.png";
import CopyTrader from "../../../public/assets/discover/copytrader.png";
import SmartPortfolios from "../../../public/assets/discover/smartportfolios.png";
import Nft from "../../../public/assets/discover/nft.png";
import Leftarraow from "../../../public/assets/discover/leftarraow.png";
import Rightarraow from "../../../public/assets/discover/rightarraow.png";
import Aave from "../../../public/assets/discover/aave-token-explained.png";
import Arbitrum from "../../../public/assets/discover/arbitrum-arb-logo.png";
import Imx from "../../../public/assets/discover/imx-removebg-preview.png";
import Cro from "../../../public/assets/discover/crypto-com-mco-logo.png";
import Lunc from "../../../public/assets/discover/terra-luna-logo.png";
import Ftm from "../../../public/assets/discover/fantom-ftm-logo-3566C53917-seeklogo.png";
import Bitcoin from "../../../public/assets/bitcoin.png";
import Image from "next/image";
const Discover = () => {
  const imageNames = [
    { name: "Overview", img: Overview },
    { name: "Stocks", img: Stocks },
    { name: "Crypto", img: Crypto },
    { name: "ETFs", img: ETFs },
    { name: "CopyTrader", img: CopyTrader },
    { name: "Smart Portfolios", img: SmartPortfolios },
    { name: "NFT", img: Nft },
  ];

  const cards = [
    { img: Aave, name: "AAVE", point: "84.65", percentage: "-9.43%" },
    { img: Arbitrum, name: "ARB", point: "84.65", percentage: "-9.43%" },
    { img: Imx, name: "Imx", point: "84.65", percentage: "-9.43%" },
    { img: Cro, name: "Cro", point: "84.65", percentage: "-9.43%" },
    { img: Lunc, name: "Lunc", point: "84.65", percentage: "-9.43%" },
    { img: Ftm, name: "Ftm", point: "84.65", percentage: "-9.43%" },
  ];
  const portfolioData = [
    {
      coin: "Bitcoin",
      price: "$50,000",
      priceper: "-2.49%",
      marketcap: "829.67B",

      volume: "250000",
      volumper: "61.70%",
      signal: "Sell ",
      indicator: "5/8 Indicators",
    },
    {
      coin: "Bitcoin",
      price: "$50,000",
      priceper: "-2.49%",
      marketcap: "829.67B",

      volume: "250000",
      volumper: "61.70%",
      signal: "HOLD",
      indicator: "5/8 Indicators",
    },
    {
      coin: "Bitcoin",
      price: "$50,000",
      priceper: "-2.49%",
      marketcap: "829.67B",

      volume: "250000",
      volumper: "61.70%",
      signal: "Sell",
      indicator: "5/8 Indicators",
    },
  ];

  return (
    <>
      <div className="text-white container">
        <div className="flex justify-between m-auto w-[40%]  items-center">
          {imageNames.map((image, index) => (
            <div key={index} className="">
              <Image src={image.img} alt={image.name} />
              <div className="text-sm ">{image.name}</div>
            </div>
          ))}
        </div>
        <div className="py-14 ">
          <div className="flex pb-10 justify-between">
            <h1 className="text-3xl font-semibold">Explore Crypto</h1>
            <div className="flex justify-end gap-3">
              {" "}
              <button className="bg-[#1788FB] text-white p-2 rounded-xl flex justify-end">
                View All
              </button>
              <Image src={Leftarraow} className="" />
              <Image src={Rightarraow} className="" />
            </div>
          </div>

          <div className="flex justify-between items-center ">
            {cards.map((card, index) => (
              <div key={index} className="bg-[#1C1C1C] py-7 px-16 rounded-xl">
                <Image src={card.img} alt={card.name} />
                <div className="text-sm  text-center p-3  pt-10">
                  <h1 className="text-2xl font-semibold tracking-wide ">
                    {card.name}
                  </h1>
                  <p className="pt-5 text-2xl font-semibold">{card.point}</p>
                  <p className="pt-2 text-lg">{card.percentage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl font-semibold">Daily Movers</h1>
          <p className="tracking-wider font-medium">
            Explore the biggest crypto movers on the market.
          </p>
          <div className="bg-[#1C1C1C] text-white overflow-auto rounded-lg my-5 p-4">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-[#1C1C1C] px-4 py-2">
                  <th className="text-left pl-7">Coin</th>
                  <th className="">Price</th>
                  <th className="">Last 7 Days</th>
                  <th className="">Market Cap</th>
                  <th className="">Volume(24H)</th>
                  <th className="">Signal</th>
                </tr>
              </thead>
              <tbody>
                {/* Map over the portfolioData array to generate table rows */}
                {portfolioData.map((item, index) => (
                  <tr key={index} className="bg-[#1C1C1C]">
                    <td className="px-4 py-4 flex justify-start items-center space-x-2">
                      <div className="flex justify-start items-center">
                        <Image
                          src={Bitcoin}
                          alt="Picture of the author"
                          height={25}
                          width={25}
                          className="rounded-full"
                        />
                      </div>
                      <div className="text-center">{item.coin}</div>
                    </td>
                    <td className="">
                      <div>{item.price} </div>
                      <p className="text-red-700">{item.priceper}</p>
                    </td>
                    <td></td>
                    <td className="">{item.marketcap}</td>
                    <td>
                      {" "}
                      <div>{item.volume} </div>
                      <p className="text-red-700">{item.volumper}</p>{" "}
                    </td>

                    <td className="">
                      <div className="text-red-700"> {item.signal} </div>
                      <p className="">{item.indicator}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
