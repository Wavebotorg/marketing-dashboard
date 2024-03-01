import React from "react";
import { CiSearch } from "react-icons/ci";
import bit from "../../assets/bitcoin.png";
import Image from "next/image";

const Portfolio = () => {
  // Sample data array
  const portfolioData = [
    {
      id: 1,
      coin: "Bitcoin BTC",
      price: "0.07727",
      units: "124858.18",
      avgOpen: "0.08089",
      pl: "-$452.21",
      plPercentage: "-4.48%",
      value: "$9647.79",
      sell: "0.07727",
      buy: "0.07984",
    },
    {
      id: 2,
      coin: "Bitcoin BTC",
      price: "0.07727",
      units: "124858.18",
      avgOpen: "0.08089",
      pl: "-$452.21",
      plPercentage: "-4.48%",
      value: "$9647.79",
      sell: "0.07727",
      buy: "0.07984",
    },
    {
      id: 3,
      coin: "Bitcoin BTC",
      price: "0.07727",
      units: "124858.18",
      avgOpen: "0.08089",
      pl: "-$452.21",
      plPercentage: "-4.48%",
      value: "$9647.79",
      sell: "0.07727",
      buy: "0.07984",
    },
    {
      id: 4,
      coin: "Bitcoin BTC",
      price: "0.07727",
      units: "124858.18",
      avgOpen: "0.08089",
      pl: "-$452.21",
      plPercentage: "-4.48%",
      value: "$9647.79",
      sell: "0.07727",
      buy: "0.07984",
    },
  ];

  return (
    <div className="flex flex-col xl:justify-center xl:ml-5 xl:mr-0 lg:mr-4 md:mr-5 md:mx-0 mx-4">
      {/* <div className="border-b border-stone-500 mt-7" />  */}

      {/* <div className="flex  gap-3 mt-6">
        <div>
          <button className="bg-blue-500 px-2 rounded-lg">Orders</button>
        </div>
        <div>
          <button className="  ">Manual Trades</button>
        </div>
      </div> */}
      <div className="flex lg:px-6 flex-row  items-center justify-between mt-6">
        <div>
          <div className="text-2xl justify-start items-center">
            My Portfolio
          </div>
        </div>
      </div>

      <div className="flex  md:gap-5 gap-2.5 mt-6 lg:px-6 md:text-base text-sm items-center">
        <div>
          <button className="bg-blue-500 px-3 py-0.5 rounded-full">
            Orders
          </button>
        </div>
        <div>
          <button className="">Manual Trades</button>
        </div>
      </div>
      <div className="mt-5 lg:m-6">
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
                    Units
                  </th>
                  <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                    Avg.Open
                  </th>
                  <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                    P/L
                  </th>
                  <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                    P/L(%)
                  </th>
                  <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                    Value
                  </th>
                  <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                    Sell
                  </th>
                  <th className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap">
                    Buy
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Map over the portfolioData array to generate table rows */}
                {portfolioData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-center whitespace-nowrap font-medium text-white sticky left-0 bg-[#1C1C1C]">
                      <div className="flex items-center  gap-2">
                        <div>
                          <Image
                            src={bit}
                            alt="Picture of the author"
                            className="rounded-full max-w-12"
                          />
                        </div>
                        <div>{item.coin}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap  text-white">
                      <div className="py-0.5 ">{item.price}</div>
                      <p className="text-sm text-[#FF0000]">-3.12% (-0.00)</p>
                    </td>
                    <td className="px-6 py-4  whitespace-nowrap  text-white">
                      <div className="py-0.5 text-center">{item.units}</div>
                      <p className="text-sm mr-4 text-[#CECECE] text-end">
                        Long
                      </p>
                    </td>

                    <td className="px-6 py-4 text-center whitespace-nowrap  text-white">
                      {item.avgOpen}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap  text-[#FF0000]">
                      {item.pl}
                    </td>
                    <td className=" px-6 py-4 text-center whitespace-nowrap  text-[#FF0000]">
                      {item.plPercentage}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap  text-white">
                      {item.value}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap  text-white">
                      {item.sell}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap  text-white">
                      {item.buy}
                    </td>
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
