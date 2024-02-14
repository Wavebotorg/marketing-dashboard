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
    <div>
      <div className="relative flex-grow md:max-w-[700px]">
        <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
          <CiSearch size={20} />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full md: p-2 pl-10 text-sm text-gray-900 rounded-lg  dark:bg-[#1C1C1C]  dark:placeholder-gray-400 dark:text-white "
          placeholder="Search "
        />
      </div>
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

      {/* <div className="container ">
        <div className="rounded-lg ">
          <div className="bg-[#1C1C1C] text-white h-96 overflow-auto rounded-lg">
            <div className="grid grid-cols-9 bg-[#1C1C1C] sticky top-0">
              <div className="px-4 py-2">Coin</div>
              <div className="px-4 py-2">Price</div>
              <div className="px-4 py-2">Units</div>
              <div className="px-4 py-2">Avg.Open </div>
              <div className="px-4 py-2">P/L</div>
              <div className="px-4 py-2">P/L(%)</div>
              <div className="px-4 py-2">Value</div>
              <div className="px-4 py-2">Sell</div>
              <div className="px-4 py-2">Buy</div>
            </div>
            {/* Map over the portfolioData array to generate table rows *
            {portfolioData.map((item, index) => (
              <div key={index} className="grid grid-cols-9">
                <div className="flex justify-start px-4 py-2 items-center space-x-2">
                  <div className="flex justify-start items-center">
                    <Image
                      src={bit}
                      alt="Picture of the author"
                      height={25}
                      width={25}
                      className="rounded-full"
                    />
                  </div>
                  <div className=" text-center">{item.coin}</div>
                </div>
                <div>
                  <div className="px-4 py-2">{item.price}</div>
                  <p className="text-sm text-red-700">-3.12% (-0.00)</p>
                </div>
                <div>
                  <div className="px-4 py-2">{item.units}</div>
                  <p className="text-sm text-gray-500 pl-14 pb-1">Long</p>
                </div>
                <div className="px-4 py-2">{item.avgOpen}</div>
                <div className="px-4 py-2 text-red-700">{item.pl}</div>
                <div className="px-4 py-2 text-red-700">
                  {item.plPercentage}
                </div>
                <div className="px-4 py-2">{item.value}</div>
                <div className="px-4 py-2">Sell Button</div>
                <div className="px-4 py-2">Buy Button</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Portfolio;
