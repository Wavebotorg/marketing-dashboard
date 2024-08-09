"use client";
import React, { useState, useEffect } from "react";
import eth from "../../../public/assets/tokenimg/eth.png";
import arbitrum from "../../../public/assets/tokenimg/arbitrum.png";
import optimism from "../../../public/assets/tokenimg/optimism.png";
import poly from "../../../public/assets/tokenimg/poly.png";
import SOL from "../../../public/assets/tokenimg/SOL.png";
import BNB from "../../../public/assets/tokenimg/BNB.png";
import avalanche from "../../../public/assets/tokenimg/avalanche.png";
import cronos from "../../../public/assets/tokenimg/cronos.jpg";
import fantom from "../../../public/assets/tokenimg/fantom.png";
import base from "../../../public/assets/tokenimg/base.webp";
import Linea from "../../../public/assets/tokenimg/linea.png";
import BURST from "../../../public/assets/tokenimg/BURST.png";

import axios from "axios";
import Image from "next/image";

const Holder = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedNetwork, setSelectedNetwork] = useState("Ether");
  const [selectedChainId, setSelectedChainId] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectChain, setSelectChain] = useState(eth);
  const [selectedTokenDatato, setSelectedTokenDatato] = useState({
    name_to: "",
    image_to: "",
    price_to: "",
    address_to: "",
    decimals_to: "",
    input_to: "",
    name_from: "",
    image_from: "",
    input_from: "",
    price_from: "",
    address_from: "",
    decimals_from: "",
    chainid: "",
    descode: "",
    chainname: "",
  });

  const headers = {
    accept: "application/json",
    "x-api-key": "NnWuSFA6uF8l1250rzZzq4FQ1TBITVpsafc4CDwy",
  };

  const fetchDEXToolsData = async (network) => {
    const baseUrl = `https://public-api.dextools.io/standard/v2/token/${network.toLowerCase()}`;
    const params = {
      sort: "creationTime",
      order: "asc",
      from: "2023-10-01T00:00:00.000Z",
      to: "2023-11-01T00:00:00.000Z",
      pageSize: 50,
    };

    try {
      const requests = [];
      for (let page = 1; page <= 10; page++) {
        requests.push(
          axios.get(baseUrl, {
            headers,
            params: { ...params, page },
          })
        );
      }

      const responses = await Promise.all(requests);
      const mergedData = responses.flatMap(
        (response) => response?.data?.data?.tokens
      );
      console.log("mergedData-------------------", mergedData);
      setData(mergedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDEXToolsData(selectedNetwork);
  }, [selectedNetwork]);

  const NetworkData = [
    { name: "Ether", chainid: "1", img: eth, descode: "0x1" },
    { name: "Arbitrum", chainid: "42161", img: arbitrum, descode: "0xa4b1" },
    { name: "Optimism", chainid: "10", img: optimism, descode: "0xa" },
    { name: "Polygon", chainid: "137", img: poly, descode: "0x89" },
    { name: "Solana", chainid: "19999", img: SOL, desCode: "" },
    { name: "Base", chainid: "8453", img: base, desCode: "0x2105" },
    { name: "BNB Chain", chainid: "56", img: BNB, descode: "0x38" },
    { name: "Avalanche", chainid: "43114", img: avalanche, descode: "0xa86a" },
    { name: "Cronos", chainid: "25", img: cronos, descode: "0x19" },
    { name: "Fantom", chainid: "250", img: fantom, descode: "0xfa" },
    {
      name: "Blast",
      chainid: "238",
      img: BURST,
      descode: "0xee",
    },
    {
      name: "Linea",
      chainid: "59144",
      img: Linea,
      descode: "0xe705",
    },
  ];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (name) => {
    const selectedNetworkData = NetworkData.find(
      (network) => network.name === name
    );

    setSelectedNetwork(selectedNetworkData?.name);
    if (selectedNetworkData) {
      setSelectedChainId(selectedNetworkData.chainid);
      setShowDropdown(false);
      setSelectChain(selectedNetworkData.img);
      setSelectedTokenDatato({
        name_to: "",
        image_to: "",
        price_to: "",
        address_to: "",
        decimals_to: "",
        input_to: "",
        name_from: "",
        image_from: "",
        input_from: "",
        price_from: "",
        address_from: "",
        decimals_from: "",
        chainid: "",
        descode: "",
        chainname: "",
      });
    }
  };

  function shortenName(name) {
    return name?.length > 40 ? name.slice(0, 20) + "..." : name;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    return `${formattedDate}`;
  };

  return (
    <div className="2xl:pl-64 xl:pl-64 md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto ">
      <div className="flex flex-col xl:justify-center xl:ml-32 xl:mr-[93px] lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-10">
        <div className="dropdown-container relative">
          <button
            className="dropdown-toggle focus:outline-none flex"
            onClick={toggleDropdown}
          >
            {selectChain && (
              <Image
                src={selectChain}
                className="h-6 w-6 rounded-full"
                alt="selected network"
              />
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-gray-400 ${
                showDropdown ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden ${
              showDropdown ? "h-[430px] overflow-y-scroll py-2" : "h-0"
            } dropdown transition-all ease-in-out duration-300 absolute bg-gray-800 rounded-lg mt-1 w-48 md:min-w-fit z-10 ml-[-162px]`}
          >
            <ul>
              {NetworkData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(item.name)}
                  className={`flex items-center py-2 px-4 cursor-pointer hover:bg-gray-700 ${
                    selectedNetwork === item.name ? "bg-blue-500" : ""
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="!h-[30px] !w-[30px] mr-2 rounded-full"
                  />
                  <span className="text-white">{item.name}</span>
                  {selectedNetwork === item.name && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Decimals</th>
                <th>Creation Time</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((token, index) => (
                <tr key={index}>
                  <td>{shortenName(token?.name)}</td>
                  <td>{token?.address}</td>
                  <td>{token?.decimals}</td>
                  <td>{formatDate(token?.creationTime)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Holder;















  //   const [allCoinData, setAllCoinData] = useState([
  //     {
  //       snapblock: "33",
  //       time: "2:00:66",
  //       reward: "$87",
  //       unlock: "566",
  //       status: "true",
  //     },
  //     {
  //       snapblock: "27",
  //       time: "2:00:66",
  //       reward: "$30",
  //       unlock: "566",
  //       status: "true",
  //     },
  //     {
  //       snapblock: "20",
  //       time: "2:00:66",
  //       reward: "$60",
  //       unlock: "566",
  //       status: "true",
  //     },

  //     ,
  //   ]);

  //   //pagination
  //   const { searchQuery } = useSearch();
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const itemsPerPage = 10;
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;

  //   //search
  //   const filteredData = allCoinData.filter(
  //     (coin) =>
  //       coin.snapblock.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       coin.reward.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   const visibleData = filteredData.slice(startIndex, endIndex);
  //   const handlePageChange = (page) => {
  //     setCurrentPage(page);
  //   };
  //   useEffect(() => {
  //     setCurrentPage(1);
  //   }, [searchQuery]);

  //   return (
  //     <div className="2xl:pl-64 xl:pl-64 md:pl-6 lg:pl-[4.8rem]  sm:pl-4 xsm:pl-0 mx-auto ">
  //       <div className="flex flex-col xl:justify-center xl:ml-32 xl:mr-[92px]  lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-10">
  //         <p className="text-[#1788FB]   text-2xl  md:text-3xl text-center md:text-left font-medium max-w-screen-lg ">
  //           Holder Rewards
  //         </p>
  //         <div className="flex flex-col md:flex-row gap-6 mt-5">
  //           <div className="rounded-lg text-[#CECECE]  p-4 bg-[#1C1C1C] flex items-center gap-2">
  //             <IoIosInformationCircleOutline size={20} className="mt-[2px]" />
  //             <p className="">Paginated Results</p>
  //           </div>
  //         </div>
  //         <div className="flex flex-col  md:flex-row gap-6 mt-5 md:w-full ">
  //           <div className="rounded-lg px-4 py-2 md:py-4  bg-[#1C1C1C] ">
  //             <p className="text-[#CECECE]  font-light">Total Rewards</p>
  //             <p className="text-blue-400 text-2xl mt-1  w-[178px] ">0ETH</p>
  //           </div>
  //           <div className="rounded-lg px-4 py-2 md:py-4  bg-[#1C1C1C] ">
  //             <p className="text-[#CECECE] ">Unclaimed Rewards</p>
  //             <p className="text-blue-400 text-2xl mt-1 w-[178px] ">0ETH</p>
  //           </div>
  //           <div className="rounded-lg px-4 py-2 md:py-4  bg-[#1C1C1C] ">
  //             <p className="text-[#CECECE] ">Claimable Rewards</p>
  //             <p className="text-blue-400 text-2xl mt-1 w-[178px] ">0ETH</p>
  //           </div>
  //         </div>

  //         <div className="mt-7 font-medium text-2xl mb-4 mb:mb-0">
  //           <h1 className="  ">Holder Rewards</h1>
  //         </div>

  //         <div className="mt-4 hidden lg:block ">
  //           <div className="rounded-lg">
  //             <div className="bg-[#1C1C1C] table-container  text-white h-auto overflow-auto rounded-lg">
  //               {/* for 2xl ,xl and lg size  */}
  //               <table className="w-full  ">
  //                 <thead className="sticky top-0 overflow-auto bg-[#1C1C1C] shadow-2xl ">
  //                   <tr
  //                     style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
  //                     className=" text-[#CECECE]  "
  //                   >
  //                     <th
  //                       scope="col"
  //                       className="px-6 py-3 text-center text-base font-medium  "
  //                     >
  //                       Snapshot Block
  //                     </th>
  //                     <th
  //                       scope="col"
  //                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
  //                     >
  //                       Time{" "}
  //                     </th>
  //                     <th
  //                       scope="col"
  //                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
  //                     >
  //                       Rewards
  //                     </th>
  //                     <th
  //                       scope="col"
  //                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
  //                     >
  //                       Unlock
  //                     </th>
  //                     <th
  //                       scope="col"
  //                       className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
  //                     >
  //                       Status
  //                     </th>
  //                   </tr>
  //                 </thead>

  //                 <tbody>
  //                   {visibleData?.length > 0 &&
  //                     visibleData?.map((d, index) => (
  //                       <>
  //                         <tr key={index}>
  //                           <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
  //                             <div> {d?.snapblock}</div>
  //                           </td>
  //                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
  //                             {d?.time}
  //                           </td>

  //                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
  //                             <div className="flex items-center justify-center gap-5">
  //                               <div>${d?.reward} </div>
  //                             </div>
  //                           </td>
  //                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
  //                             {d?.unlock}
  //                           </td>
  //                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
  //                             <div className="flex justify-center items-center ">
  //                               {d?.status}
  //                             </div>
  //                           </td>
  //                         </tr>
  //                       </>
  //                     ))}
  //                 </tbody>
  //                 {/* ))} */}
  //               </table>
  //             </div>
  //           </div>
  //         </div>

  //         <Pagination
  //           totalItems={filteredData.length}
  //           itemsPerPage={itemsPerPage}
  //           onPageChange={handlePageChange}
  //           currentPage={currentPage}
  //         />

  //       {/* for md and sm size */}
  //         {visibleData?.length > 0 &&
  //           visibleData?.map((d, index) => (
  //             <div key={index} className="lg:hidden mt-4 ">
  //               <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
  //                 <div className="w-full  ">
  //                   <div className="">
  //                     <>
  //                       <div className="border-b border-[#494949] flex justify-between">
  //                         <div className="py-2  pl-4 font-semibold">
  //                           {" "}
  //                           Snapshot Block
  //                         </div>
  //                         <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
  //                           {d?.snapblock}
  //                         </div>
  //                       </div>
  //                       <div className="border-b border-[#494949] flex justify-between">
  //                         <div className="py-2  pl-4 font-semibold">Time</div>
  //                         <div className=" py-2 pr-4 pl-4"> {d?.time}</div>
  //                       </div>
  //                       <div className="border-b border-[#494949] flex justify-between">
  //                         <div className="py-2  pl-4 font-semibold">Rewards</div>
  //                         <div className=" py-2 pr-4 pl-4"> ${d?.reward}</div>
  //                       </div>

  //                       <div className="border-b border-[#494949] flex justify-between">
  //                         <div className="py-2  pl-4 font-semibold"> Unlock</div>
  //                         <div className="flex justify-end items-center py-2 pr-4 pl-4">
  //                           {d?.unlock}
  //                         </div>
  //                       </div>
  //                       <div className=" flex justify-between">
  //                         <div className="py-2  pl-4 font-semibold">Status</div>
  //                         <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
  //                           {d?.status}
  //                         </div>
  //                       </div>
  //                       <div></div>
  //                     </>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //       </div>
  //     </div>
  //   );
  // };



// "use client";
// import React from "react";
// import { AdvancedChart, TickerTape } from "react-tradingview-embed";

// const Dashboard = () => {
//   return (
//     <div>
//       {/* <div className="inputDiv ml-20">
//         <TickerTape widgetProps={{}} />
//       </div> */}
//       <div className="ml-20">
//         <AdvancedChart
//         // widgetProps={{
//         //   interval: "1D",
//         //   theme: "white",
//         // }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
