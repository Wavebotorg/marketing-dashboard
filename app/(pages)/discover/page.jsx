"use client";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "react-router-dom";
import { useRouter } from "next/navigation";
import NewPair from "../newpair/page";
import Trending from "../trending/page";
import Image from "next/image";
import Filter from "../../components/Filter/Filter.jsx";
import eth from "../../../public/assets/tokenimg/eth.png";
import arbitrum from "../../../public/assets/tokenimg/arbitrum.png";
import optimism from "../../../public/assets/tokenimg/optimism.png";
import poly from "../../../public/assets/tokenimg/poly.png";
import SOL from "../../../public/assets/tokenimg/SOL.png";
import BNB from "../../../public/assets/tokenimg/BNB.png";
import avalanche from "../../../public/assets/tokenimg/avalanche.png";
import cronos from "../../../public/assets/tokenimg/cronos.jpg";
import fantom from "../../../public/assets/tokenimg/fantom.png";
import { useWallet } from "../../components/contexts/WalletContext.js";

const Discover = ({ onColor = "bg-purple-500", offColor = "bg-gray-300" }) => {
  const router = useRouter();
  const [selectedpage, setSelectedPage] = useState("newpair");
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum");
  const [selectChain, setSelectChain] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const NetworkData = [
    {
      name: "Ethereum",
      chainid: "1",
      img: eth,
      descode: "0x1",
      walletAddressbuysell: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    },
    {
      name: "Arbitrum",
      chainid: "42161",
      img: arbitrum,
      descode: "0xa4b1",
      walletAddressbuysell: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    },
    {
      name: "Optimism",
      chainid: "10",
      img: optimism,
      descode: "0xa",
      walletAddressbuysell: "0x4200000000000000000000000000000000000042",
    },
    {
      name: "Polygon",
      chainid: "137",
      img: poly,
      descode: "0x89",
      walletAddressbuysell: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    },
    {
      name: "Solana",
      chainid: "19999",
      img: SOL,
      descode: "",
      walletAddressbuysell: "So11111111111111111111111111111111111111112",
    },
    {
      name: "BNB Chain",
      chainid: "56",
      img: BNB,
      descode: "0x38",
      walletAddressbuysell: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    },
    {
      name: "Avalanche",
      chainid: "43114",
      img: avalanche,
      descode: "0xa86a",
      walletAddressbuysell: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    },
    {
      name: "Cronos",
      chainid: "25",
      img: cronos,
      descode: "0x19",
      walletAddressbuysell: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
    },
    {
      name: "Base",
      chainid: "250",
      img: fantom,
      descode: "0x2105",
      walletAddressbuysell: "0x4200000000000000000000000000000000000006",
    },
    {
      name: "Fantom",
      chainid: "250",
      img: fantom,
      descode: "0xfa",
      walletAddressbuysell: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    },
  ];
  useEffect(() => {
    const ethereumNetwork = NetworkData.find(
      (network) => network.name === "Ethereum"
    );
    if (ethereumNetwork) {
      setSelectChain(ethereumNetwork.img);
    }
  }, []);
  // const handleNavigation = (page) => {
  //   setSelectedPage(page);
  //   router.push(`/${page}`);
  // };
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const handleOptionClick = (name) => {
    const selectedNetworkData = NetworkData.find(
      (network) => network.name === name
    );

    setSelectedNetwork(selectedNetworkData?.name);
    if (selectedNetworkData) {
      setShowDropdown(false);
    }
  };

  // const [tokenData, setTokenData] = useState({
  //   Ethereum: token_data_ETH,
  //   Solana: [],
  //   Arbitrum: token_data_ARB,
  //   Polygon: token_data_POLY,
  //   "BNB Chain": token_data_BNB,
  // });

  // useEffect(() => {
  //   setTokenData((prevTokenData) => ({
  //     ...prevTokenData,
  //     Solana: tokens,
  //   }));
  // }, [tokens]);
  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const { walletAddress, email, solanaAddress, isNavbar, setIsNavbar } =
    useWallet();

  return (
    <div
      style={{
        marginLeft: isNavbar && window.innerWidth >= 1440 ? "12%" : "0",
      }}
      className=" md:pl-5 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto h-full "
    >
      {/* 2xl:pl-64 xl:pl-64 */}
      <div className="text-white  lg:ml-1 lg:mr-5 md:ml-1 md:mr-6  ml-5 mr-5 ">
        <div className="flex gap-4 my-4">
          <button
            className={`px-4 py-2 rounded ${
              selectedpage === "newpair"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black "
            }`}
            // onClick={() => handleNavigation("newpair")}
            onClick={() => setSelectedPage("newpair")}
          >
            New Pair
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedpage === "trending"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            // onClick={() => handleNavigation("trending")}
            onClick={() => setSelectedPage("trending")}
          >
            Trending
          </button>
          <div ref={dropdownRef} className="dropdown-container relative  ">
            <button
              className="dropdown-toggle focus:outline-none flex"
              onClick={toggleDropdown}
            >
              {selectChain && (
                <Image
                  src={selectChain}
                  alt="logo"
                  className="h-6 w-6 rounded-full"
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

            {/* {showDropdown && ( */}
            <div
              className={`overflow-hidden ${
                showDropdown ? "h-[430px] py-2" : "h-0"
              } dropdown transition-all ease-in-out duration-300 absolute bg-gray-800 rounded-lg mt-1 w-48 md:min-w-fit z-10  `}
            >
              <ul>
                <ul>
                  {NetworkData.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        handleOptionClick(item.name);
                        setSelectChain(item?.img);
                      }}
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
              </ul>
            </div>
            {/* )} */}
          </div>
        </div>

        <div className="">
          <div className="mt-6 rounded-lg overflow-auto">
            <div className="bg-[#1C1C1C] h-full overflow-y-auto text-white  overflow-auto rounded-xl p-5 ">
              {/* for with points and recent join user data show */}

              {selectedpage === "newpair" ? (
                <>
                  New Token Pairs in the last 24-hours updated in real-time.
                  <div className="flex py-2">
                    <div className="pr-3">
                      {" "}
                      <Filter />
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-4 flex items-center rounded-full p-1 cursor-pointer ${
                          isOn ? onColor : offColor
                        }`}
                        onClick={toggleSwitch}
                      >
                        <div
                          className={`bg-white w-5 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                            isOn ? "translate-x-4" : "translate-x-0"
                          }`}
                        />
                      </div>
                      <span className="mx-3 ">Quick Buy</span>
                    </div>
                  </div>
                  <table className="w-full">
                    <thead className="sticky top-0 leader-color shadow-2xl ">
                      <tr
                        className="  text-[#CECECE]   bg-[#1C1C1C]  "
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                      >
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Pair Info
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Created
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Liquidity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Initial Liquidity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          FDV
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          TXNS
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Volume
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Buy/Sell Tax
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Audit Results
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md  text-white">
                            hghg
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md  text-white">
                            tyhu
                          </td>
                          <td className="px-4 py-4 text-center whitespace-nowrap text-md  text-white">
                            tgyjuyhju
                          </td>
                        </>
                      </tr>
                    </tbody>
                    {/* <tbody>
                    {visibleData?.length > 0 ? (
                      visibleData.map((leader, index) => (
                        <tr key={index}>
                          {selectedLeaderboard === "referral" ? (
                            <>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.name}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.email}
                              </td>
                              <td className="px-4 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.referrals}
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.name}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.email}
                              </td>
                              <td className="px-4 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.totalTransaction}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {Math.floor(leader?.totalTransferToken)}
                               
                              </td>
                            </>
                          )}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="px-6 py-4 pt-60 font-bold text-lg text-center text-md text-white"
                        >
                          No data found.
                        </td>
                      </tr>
                    )}
                  </tbody> */}
                  </table>
                </>
              ) : (
                <>
                  Top 100 trending token pairs by transactions within selected
                  timeframe.
                  <div className="flex py-2">
                    <div className="pr-3">
                      {" "}
                      <Filter />
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-4 flex items-center rounded-full p-1 cursor-pointer ${
                          isOn ? onColor : offColor
                        }`}
                        onClick={toggleSwitch}
                      >
                        <div
                          className={`bg-white w-5 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                            isOn ? "translate-x-4" : "translate-x-0"
                          }`}
                        />
                      </div>
                      <span className="mx-3 ">Quick Buy</span>
                    </div>
                  </div>
                  <table className="w-full">
                    <thead className="sticky top-0 leader-color shadow-2xl ">
                      <tr
                        className="  text-[#CECECE]   bg-[#1C1C1C]  "
                        style={{
                          backgroundColor: "rgba(23, 136, 251, 0.26)",
                        }}
                      >
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Pair Info
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Created
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Liquidity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Initial Liquidity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          FDV
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          TXNS
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text -center text-base font-medium   whitespace-nowrap"
                        >
                          Volume
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Buy/Sell Tax
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Audit Results
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    {/* <tbody>
                    {visibleData?.length > 0 ? (
                      visibleData.map((leader, index) => (
                        <tr key={index}>
                          {selectedLeaderboard === "referral" ? (
                            <>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.name}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.email}
                              </td>
                              <td className="px-4 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.referrals}
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.name}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.email}
                              </td>
                              <td className="px-4 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.totalTransaction}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {Math.floor(leader?.totalTransferToken)}
                               
                              </td>
                            </>
                          )}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="px-6 py-4 pt-60 font-bold text-lg text-center text-md text-white"
                        >
                          No data found.
                        </td>
                      </tr>
                    )}
                  </tbody> */}
                  </table>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
