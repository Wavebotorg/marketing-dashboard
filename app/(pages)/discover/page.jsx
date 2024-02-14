
"use client"
import React from "react";

import Overview from "../../../public/assets/discover/overview.png"
import Stocks from "../../../public/assets/discover/stock.png"
import Crypto from "../../../public/assets/discover/crypto.png"
import ETFs from "../../../public/assets/discover/etfs.png"
import CopyTrader from "../../../public/assets/discover/copytrader.png"
import SmartPortfolios from "../../../public/assets/discover/smartportfolios.png"
import Nft from "../../../public/assets/discover/nft.png"
import Image from "next/image";
const Discover = () => {
  const imageNames = [
    { name: "Overview", img:Overview },
    { name: "Stocks", img: Stocks  },
    { name: "Crypto",  img:  Crypto },
    { name: "ETFs",  img: ETFs },
    { name: "CopyTrader",  img: CopyTrader  },
    { name: "Smart Portfolios",  img:  SmartPortfolios },
    { name: "NFT",  img: Nft  },
  ];

  return (
    <>
    <div className="text-white container">
    <div className="flex justify-between m-auto w-[40%]  items-center"> 
    {imageNames.map((image, index) => (
            <div key={index} className="">
              <Image src={image.img} alt={image.name}  />
              <div className="text-sm ">{image.name}</div>
            </div>
          ))}
      </div>
      <div> </div>
      <div></div>
    </div>
     
    </>
  );
};

export default Discover;

