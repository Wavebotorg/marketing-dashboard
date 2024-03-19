"use client";
import React, { useState } from "react";

import Overview from "../../../public/assets/discover/overview.svg";
import Stocks from "../../../public/assets/discover/stocks.svg";
import Crypto from "../../../public/assets/discover/crypto.svg";
import ETFs from "../../../public/assets/discover/etf.svg";
import CopyTrader from "../../../public/assets/discover/copytrader.svg";
import SmartPortfolios from "../../../public/assets/discover/smartportfolio.svg";
import Nft from "../../../public/assets/discover/nft.svg";

import Leftarraow from "../../../public/assets/discover/back.svg";
import Rightarraow from "../../../public/assets/discover/next.svg";
import Aave from "../../../public/assets/discover/aave-token-explained.png";
import Arbitrum from "../../../public/assets/discover/arbitrum-arb-logo.png";
import Imx from "../../../public/assets/discover/imx-removebg-preview.png";
import Cro from "../../../public/assets/discover/crypto-com-mco-logo.png";
import Lunc from "../../../public/assets/discover/terra-luna-logo.png";
import Ftm from "../../../public/assets/discover/fantom-ftm-logo-3566C53917-seeklogo.png";
import Bitcoin from "../../../public/assets/bitcoin.png";
import GreenChart from "../../../public/assets/watchlist/greenchart.svg";
import RedChart from "../../../public/assets/watchlist/redchart.svg";
import { useSearch } from "../../components/contexts/SearchContext";
import Image from "next/image";

import { Tooltip as ReactTooltip } from "react-tooltip";
import Pagination from "../Pagination/Pagination";

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
  const discoverData = [
    {
      coin: "Bitcoin",
      price: "41987.82",
      priceper: "(-2.49%)",
      chart: RedChart,
      marketcap: "829.67B",
      volume: "250000",
      volumper: "(61.70%)",
      signal: "Sell ",
      indicator: "5/8 Indicators",
    },
    {
      coin: "bnb",
      price: "$50,000",
      priceper: "(-2.49%)",
      chart: GreenChart,
      marketcap: "829.67B",
      volume: "250000",
      volumper: "(61.70%)",
      signal: "HOLD",
      indicator: "5/8 Indicators",
    },
    {
      coin: "USDC",
      price: "$50,000",
      priceper: "(-2.49%)",
      chart: GreenChart,
      marketcap: "829.67B",
      volume: "250000",
      volumper: "(61.70%)",
      signal: "Sell",
      indicator: "5/8 Indicators",
    },
  ];

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const { searchQuery } = useSearch();//search
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredData = discoverData.filter((coin) =>

  coin.coin.toLowerCase().includes(searchQuery.toLowerCase()) 
);
  const visibleData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="2xl:pl-52 xl:pl-60 md:pl- sm:pl-4 xsm:pl-12 mx-auto lg:m-5 h-full">
      <div className="text-white xl:ml-11 xl:mr-5 lg:ml-1 lg:mr-4 md:ml-1 md:mr-6  ml-5 mr-5 ">
        <div className="">
          {/* laptop & tablate screen  */}
          <div className="md:flex hidden justify-center items-center gap-9 mt-7 ">
            {imageNames.map((image, index) => (
              <div key={index} className="space-y-0.5">
                <Image className="mx-auto" src={image.img} alt={image.name} />
                <div className="text-base  md:block hidden text-nowrap">
                  {image.name}
                </div>
              </div>
            ))}
          </div>

          {/* mobile screen  */}
          <div className="flex justify-center items-center gap-8 md:hidden mt-7 ">
            {imageNames.map((image, index) => (
              <div className="" key={index} data-tooltip-id={`tooltip-${index}`}>
                <ReactTooltip
                  id={`tooltip-${index}`}
                  place="top"
                  effect=""
                  variant="info"
                >
                  <div className="text-sm">{image.name}</div>
                </ReactTooltip>
                <Image className=" mx-auto" src={image.img} alt={image.name} />
              </div>
            ))}
          </div>
        </div>

       

       
        <div className="flex justify-between items-center lg:p- md:p- mt-8 mb-2">
          <div className="md:text-3xl text-xl font-semibold text-nowrap">
            Explore Crypto
          </div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <button
                type="button"
                class="text-white bg-[#1788FB] font-medium rounded-full text-sm md:px-5 px-2 py-1.5 md:py-2.5 text-center "
              >
                View All
              </button>
            </div>
            <div className="flex gap-1">
              <Image src={Leftarraow} className="md:w-10 w-8" />
              <Image src={Rightarraow} className="md:w-10 w-8" />
            </div>
          </div>
        </div>
        <div class="lg:mx- md:p-  grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-10 gap-5 mt-5">
          {cards.map((card, index) => (
            <div
              key={index}
              class="bg-[#1C1C1C] rounded-xl p-5 flex flex-col items-center"
            >
              <Image src={card.img} alt={card.name} className="mx-auto  " />
              <div className="text-center md:space-y-4 space-y-1 md:mt-10 mt-4">
                <h1 className="md:text-3xl text-xl font-semibold text-white">
                  {card.name}
                </h1>
                <h1 className="md:text-2xl text-base font-semibold text-white">
                  {card.point}
                </h1>
                <h1 className="md:text-lg text-sm font-semibold text-[#BFBFBF]">
                  {card.percentage}
                </h1>
              </div>
            </div>
          ))}
        </div>
     

        <div class="flex justify-between items-center p-4 lg:px-8 md:px-6 mt-4 mb-2">
          <div class="md:text-3xl text-xl font-semibold">
            Daily Movers
            <p class="text-[#7B7B7B] text-sm md:text-lg">
              Explore the biggest crypto movers on the market.
            </p>
          </div>
         
        </div>

        <div className="lg:mx-  md:p- mb-5 mt-2">
          <div className="rounded-lg">
            <div className="bg-[#1C1C1C] text-white overflow-auto rounded-lg">
              <table className="w-full">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr className="text-[#CECECE]">
                    <th className="px-6 py-3 text-center text-base font-medium  sticky left-0 bg-[#1C1C1C]">
                      Coin
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Price
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Last 7 Days
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Market Cap
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Volume(24H)
                    </th>
                    <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                      Signal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over the portfolioData array to generate table rows */}
                  {visibleData?.length > 0 &&
                    visibleData?.map((item, index) => (
                      <tr key={index}>
                        <td className="px-3 py-4 text-center whitespace-nowrap font-medium text-white sticky left-0 bg-[#1C1C1C]">
                          <div className="flex items-center  gap-2">
                            <div>
                              <Image
                                src={Bitcoin}
                                alt="Picture of the author"
                                className="rounded-full max-w-12"
                              />
                            </div>
                            <div>{item.coin}</div>
                          </div>
                        </td>
                        {/* <td className="px-3 py-4 text-center whitespace-nowrap  text-white">
                        <div className="py-0.5 ">{item.price}</div>
                        <p className="text-sm text-[#FF0000]">-3.12% (-0.00)</p>
                      </td> */}
                        <td className="px-3 py-4  whitespace-nowrap  text-white">
                          <div className="py-0.5 text-center">{item.price}</div>
                          <p className="text-sm  text-[#FF0000] text-center">
                            {item.priceper}
                          </p>
                        </td>

                        <td className=" px-3 py-4 text-center whitespace-nowrap  text-white">
                          <Image
                            src={item.chart}
                            alt="Picture of the author"
                            className="rounded-full mx-auto"
                          />
                        </td>
                        <td className="px-3 py-4 text-center whitespace-nowrap  text-white">
                          {item.marketcap}
                        </td>
                        <td className=" px-3 py-4 text-center whitespace-nowrap  text-white">
                          <div className="py-0.5 text-center">
                            {item.volume}
                          </div>
                          <p className="text-sm  text-[#1AA80D] text-center">
                            {item.volumper}
                          </p>
                        </td>
                        <td className="px-3 py-4 text-center whitespace-nowrap  text-white">
                          <div className="py-0.5 text-center">
                            {item.signal}
                          </div>
                          <p className="text-sm  text-white text-center">
                            {item.indicator}
                          </p>
                        </td>
                      </tr>
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
        />
      </div>
    </div>
  );
};

export default Discover;