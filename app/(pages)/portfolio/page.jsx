import React from "react";
import { CiSearch } from "react-icons/ci";
import bit from "../../assets/bitcoin.png";
import Image from "next/image";

const Portfolio = () => {
  // Sample data array
  const portfolioData = [
    {
      coin: "Bitcoin",
      price: "$50,000",
      units: "124858.18",
      avgOpen: "$45,000",
      pl: "-$5,000",
      plPercentage: "-10%",
      value: "$250,000",
    },
    {
      coin: "Bitcoin",
      price: "$50,000",
      units: "124858.18",
      avgOpen: "$45,000",
      pl: "-$5,000",
      plPercentage: "-10%",
      value: "$250,000",
    },
    {
      coin: "Ethereum",
      price: "$3,000",
      units: "124858.18",
      avgOpen: "$2,500",
      pl: "-$5,000",
      plPercentage: "-20%",
      value: "$30,000",
    },
    {
      coin: "Ethereum",
      price: "$3,000",
      units: "124858.18",
      avgOpen: "$2,500",
      pl: "-$5,000",
      plPercentage: "-20%",
      value: "$30,000",
    },
    {
      coin: "Ethereum",
      price: "$3,000",
      units: "124858.18",
      avgOpen: "$2,500",
      pl: "-$5,000",
      plPercentage: "-20%",
      value: "$30,000",
    },
    {
      coin: "Ethereum",
      price: "$3,000",
      units: "124858.18",
      avgOpen: "$2,500",
      pl: "-$5,000",
      plPercentage: "-20%",
      value: "$30,000",
    },
    {
      coin: "Ethereum",
      price: "$3,000",
      units: "124858.18",
      avgOpen: "$2,500",
      pl: "-$5,000",
      plPercentage: "-20%",
      value: "$30,000",
    },
  ];

  return (
    <div className="container">
    
      <div className="border-b border-stone-500 mt-7" />
      <p className="mt-6 text-2xl">My Portfolio</p>
      <div className="flex  gap-3 mt-6">
        <div>
          <button className="bg-blue-500 px-2 rounded-lg">Orders</button>
        </div>
        <div>
          <button className="  ">Manual Trades</button>
        </div>
      </div>
      <div className="container">
        <div className="rounded-lg">
          <div className="bg-[#1C1C1C] text-white overflow-auto rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1C1C1C]">
                  <th className="px-8 py-2">Coin</th>
                  <th className="px-8 py-2">Price</th>
                  <th className="px-8 py-2">Units</th>
                  <th className="px-8 py-2">Avg.Open</th>
                  <th className="px-8 py-2">P/L</th>
                  <th className="px-8 py-2">P/L(%)</th>
                  <th className="px-8 py-2">Value</th>
                  <th className="px-8 py-2">Sell</th>
                  <th className="px-8 py-2">Buy</th>
                </tr>
              </thead>
              <tbody>
                {/* Map over the portfolioData array to generate table rows */}
                {portfolioData.map((item, index) => (
                  <tr key={index} className="bg-[#1C1C1C] ">
                    <td className=" px-6 py-1 flex justify-start items-center space-x-2">
                      <div className="flex justify-start items-center">
                        <Image
                          src={bit}
                          alt="Picture of the author"
                          height={25}
                          width={25}
                          className="rounded-full"
                        />
                      </div>
                      <div className="text-center">{item.coin}</div>
                    </td>
                    <td className="px-6 py-1">
                      <div className="px-4 py-1 ">{item.price}</div>
                      <p className="text-sm text-[#FF0000]">-3.12% (-0.00)</p>
                    </td>
                    <td className="px-6 py-1">
                      <div className="px-4 py-1 ">{item.units}</div>
                      <p className="text-sm text-gray-500 pl-1 flex justify-center">
                        Long
                      </p>
                    </td>

                    <td className="px-9 py-1 ">{item.avgOpen}</td>
                    <td className="px-6 text-[#FF0000]">{item.pl}</td>
                    <td className=" px-6 text-[#FF0000]">
                      {item.plPercentage}
                    </td>
                    <td className="px-6 py-1">{item.value}</td>
                    <td className="px-5 py-1">Sell Button</td>
                    <td className="px-5 py-1">Buy Button</td>
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

export default Portfolio;
