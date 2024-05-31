/* eslint-disable @next/next/no-img-element */
"use client";
import TokenList from "../../components/ShowTokenSwap/TokensList";
import React, { useEffect, useState, useRef } from "react";
import { IoMdClose, IoMdSettings } from "react-icons/io";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import eth from "../../../public/assets/tokenimg/eth.png";
import arbitrum from "../../../public/assets/tokenimg/arbitrum.png";
import optimism from "../../../public/assets/tokenimg/optimism.png";
import poly from "../../../public/assets/tokenimg/poly.png";
import SOL from "../../../public/assets/tokenimg/SOL.png";
import BNB from "../../../public/assets/tokenimg/BNB.png";
import avalanche from "../../../public/assets/tokenimg/avalanche.png";
import USD from "../../../public/assets/tokenimg/USD.png";
import SHU from "../../../public/assets/tokenimg/SHU.png";
import tether from "../../../public/assets/tokenimg/tether.png";
import cronos from "../../../public/assets/tokenimg/cronos.jpg";
import fantom from "../../../public/assets/tokenimg/fantom.png";
import base from "../../../public/assets/tokenimg/base.webp";
import wrapped from "../../../public/assets/tokenimg/wrapped.png";
import chainlink from "../../../public/assets/tokenimg/chainlink.png";
import { useWallet } from "../../components/contexts/WalletContext";
import { useRouter } from "next/navigation";
import { IoSwapVerticalOutline } from "react-icons/io5";
import axiosInstance from "../../apiInstances/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import qs from "qs";
import axios from "axios";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import BalancePopUp from "../../components/balancePopup/BalancePopUp";
import { FiRefreshCcw } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";

const TransferToken = () => {
  const { walletAddress, email, solanaAddress, isNavbar, setIsNavbar } =
    useWallet();
  const router = useRouter();

  // const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum");
  const [fetchtokendata, setFetchtokendata] = useState(null);
  const [balancePopup, setBalancePopup] = useState(false);
  const [selectedChainId, setSelectedChainId] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [clickedTokens, setClickedTokens] = useState("");
  const [showPopup1, setShowPopup1] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedtofrom, setSelectedtofrom] = useState(0);
  const [showBalance, setShowBalance] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectChain, setSelectChain] = useState(false);
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
  const NetworkData = [
    { name: "Ethereum", chainid: "1", img: eth, descode: "0x1" },
    { name: "Arbitrum", chainid: "42161", img: arbitrum, descode: "0xa4b1" },
    { name: "Optimism", chainid: "10", img: optimism, descode: "0xa" },
    { name: "Polygon", chainid: "137", img: poly, descode: "0x89" },
    { name: "Solana", chainid: "19999", img: SOL, desCode: "" },
    { name: "Base", chainid: "8453", img: base, desCode: "0x2105" },
    { name: "BNB Chain", chainid: "56", img: BNB, descode: "0x38" },
    { name: "Avalanche", chainid: "43114", img: avalanche, descode: "0xa86a" },
    { name: "Cronos", chainid: "25", img: cronos, descode: "0x19" },
    { name: "Fantom", chainid: "250", img: fantom, descode: "0xfa" },
  ];
  console.log(
    "------------------------------------------------set addredess",
    selectedTokenDatato
  );

  useEffect(() => {
    const ethereumNetwork = NetworkData.find(
      (network) => network.name === "Ethereum"
    );
    if (ethereumNetwork) {
      setSelectChain(ethereumNetwork.img);
    }
  }, []);

  const selectToken = (token, networkData, e) => {
    if (selectedtofrom == 1) {
      setSelectedTokenDatato({
        ...selectedTokenDatato,

        name_to: token.symbol,
        image_to: token.logo,
        chainid: token.chainid,
        address_to:
          selectedNetwork == "Solana"
            ? token.associatedTokenAddress
            : token.token_address,
        decimals_to: token.decimal,
        descode: token.descode,
        chainname: token.chainname,
      });
    } /*  else if (selectedtofrom == 2) {
      setSelectedTokenDatato({
        ...selectedTokenDatato,
        name_from: token.symbol,
        image_from: token.logoURI,
        chainid: token.chainid,
        address_from: token.address,
        decimals_from: token.decimal,
        descode: token.descode,
        chainname: token.chainname,
      });
    } */

    // setSelectedSymbol(token.symbol);

    setClickedTokens((prevTokens) => {
      const tokensArray = Array.isArray(prevTokens) ? prevTokens : [];
      const updatedTokens = tokensArray.filter(
        (prevToken) => prevToken !== token.name
      );
      if (selectedtofrom === 1) {
        return [token.name, selectedTokenDatato.name_from];
      } else if (selectedtofrom === 2) {
        return [selectedTokenDatato.name_to, token.name];
      }
      return prevTokens;
    });

    setShowPopup(false);
  };

  const tokenpopup = (e) => {
    setShowPopup(true);
    setSelectedtofrom(e);
    setSearchTerm("");
  };
  const [showDropdown, setShowDropdown] = useState(false);

  const dataSolana = {
    input: selectedTokenDatato?.address_to,
    output: selectedTokenDatato?.address_from,
    amount: selectedTokenDatato?.input_to,
    email: email,
  };
  const dataEvm = {
    tokenIn: selectedTokenDatato?.address_to,
    tokenOut: selectedTokenDatato?.address_from,
    amount: Number(selectedTokenDatato?.input_to),
    chain: Number(selectedChainId),
    email: email,
    chainId: selectedTokenDatato?.chainname,
    desCode: selectedTokenDatato?.descode,
  };
  const [loading, setLoading] = useState(false);

  const handleSwapSubmit = async () => {
    setLoading(true);

    let endpoint;
    if (selectedNetwork === "Solana") {
      endpoint = "/solanaSwap";
    } else {
      endpoint = "/EVMswap";
    }

    axiosInstance
      .post(endpoint, selectedNetwork === "Solana" ? dataSolana : dataEvm)
      .then(async (res) => {
        const myData = res?.data;
        console.log("Response from API:", myData);
        if (myData?.status) {
          toast.success(myData?.message);
          setTimeout(async () => {
            if (selectedNetwork == "Solana") {
              await getSolanaBalance();
            } else {
              await getWalletBalance(selectedNetwork);
            }
          }, 3000);
        } else {
          toast.error(myData?.message);
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        toast.error("An error occurred while processing your request");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getSolanaBalance = async () => {
    try {
      const balanceRes = await axiosInstanceAuth.post(
        "/getSolanaWalletTokenBal",
        {
          wallet: solanaAddress,
        }
      );
      const balanceData = balanceRes?.data?.response1?.tokens;
      console.log("fetchSolanabalance-------------------------->", balanceData);

      const imageRes = await axios.get("https://token.jup.ag/strict");

      const tokenImages = imageRes?.data;
      const mergedData = balanceData.map((token) => {
        const tokenImage = tokenImages.find(
          (image) => image.address === token.mint
        );
        return {
          ...token,
          logo: tokenImage ? tokenImage.logoURI : null,
        };
      });

      setShowBalance(mergedData);
    } catch (err) {
      console.log("error--->", err);
    }
  };

  const getWalletBalance = async (networkName) => {
    const selectedNetwork = NetworkData.find(
      (network) => network.name == networkName
    );
    if (selectedNetwork !== "Solana") {
      const myDatawallet = {
        email: localStorage.getItem("email"),
        chainId: selectedNetwork?.descode,
      };
      try {
        const res = await axiosInstance.post("/fetchbalance", myDatawallet);
        console.log(
          "-------------------------------- fetch balance api called=-------------------------------------------"
        );

        const myData = res?.data?.data;
        console.log(
          "fetchbalance--------------------------------------------------------------------------------->",
          myData
        );
        setShowBalance(myData);
      } catch (err) {
        console.log("error--->", err);
        setShowBalance([]);
      }
    } else {
      console.error("Network not found");
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleInputChanges = async (e) => {
    const { name, value } = e.target;

    await setSelectedTokenDatato({
      ...selectedTokenDatato,
      [name]: value,
    });
  };

  const handleOptionClick = (name) => {
    const selectedNetworkData = NetworkData.find(
      (network) => network.name === name
    );

    setSelectedNetwork(selectedNetworkData?.name);
    if (selectedNetworkData) {
      setSelectedChainId(selectedNetworkData.chainid);
      setShowDropdown(false);
    }
  };

  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    if (selectedNetwork == "Solana") {
      getSolanaBalance();
    } else {
      getWalletBalance(selectedNetwork);
    }
  }, [selectedNetwork]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup1(false);
      }
    };

    if (showPopup1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup1]);

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

  return (
    <>
      <div className="2xl:pl-64 xl:pl-64 md:pl-4 sm:pl-4 xsm:pl-0 mx-auto">
        <div className="  xl:ml-32 xl:mr-[92px]  gap-6 lg:ml-3 lg:mr-6 md:ml-0 md:mr-6 ml-5  mr-5">
          <div className="text-lg font-semibold flex justify-between pt-2">
            <div
              className={`lg:scale-0 scale-[1] text-3xl `}
              onClick={() => setIsNavbar(!isNavbar)}
            >
              {isNavbar === false ? (
                <div className="cursor-pointer">
                  <FaBars />
                </div>
              ) : (
                <div className="  cursor-pointer"> X </div>
              )}
            </div>
            <button
              className="bg-[#1e2529] hover:bg-[#323b41] rounded-lg  px-5 py-1  text-[17px]"
              onClick={() => {
                setBalancePopup(true);
              }}
            >
              Show Balance
            </button>
          </div>
          <div className="h-[94vh] w-full flex justify-center items-center px-5">
            <div className="swap flex flex-col items-center justify-between   text-white ">
              <div className="flex flex-col justify-center items-center space-y-5">
                <div className="flex flex-col bg-slate-600 bg-opacity-10 p-3  rounded-lg shadow-lg  space-y-2">
                  <div className="flex justify-between items-center py-2">
                    <div className="flex justify-between gap-5 text-lg mx-1 w-full">
                      <button>Transfer Token</button>
                      <div
                        ref={dropdownRef}
                        className="dropdown-container relative"
                      >
                        <button
                          className="dropdown-toggle focus:outline-none flex"
                          onClick={toggleDropdown}
                        >
                          {selectChain && (
                            <Image
                              src={selectChain}
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
                          } dropdown transition-all ease-in-out duration-300 absolute bg-gray-800 rounded-lg mt-1 w-48 md:min-w-fit z-10 ml-[-162px]`}
                        >
                          <ul>
                            <ul>
                              {NetworkData.map((item, index) => (
                                <li
                                  key={index}
                                  onClick={() => {
                                    handleOptionClick(item.name);
                                    setSelectChain(item?.img);
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
                                  }}
                                  className={`flex items-center py-2 px-4 cursor-pointer hover:bg-gray-700 ${
                                    selectedNetwork === item.name
                                      ? "bg-blue-500"
                                      : ""
                                  }`}
                                >
                                  <Image
                                    src={item.img}
                                    alt={item.name}
                                    className="!h-[30px] !w-[30px] mr-2 rounded-full"
                                  />
                                  <span className="text-white">
                                    {item.name}
                                  </span>
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
                  </div>
                  <div className="flex flex-col bg-slate-400 bg-opacity-10 rounded-lg p-5">
                    <div className="text-gray-300">
                      <p>Select Token</p>
                    </div>
                    <div className="flex justify-between py-2">
                      <div className="space-y-2">
                        <input
                          type="number"
                          className="border-none bg-transparent w-32 md:w-auto overflow-hidden outline-none text-2xl"
                          placeholder="0"
                          name="input_to"
                          value={selectedTokenDatato?.input_to}
                          onChange={(e) => handleInputChanges(e)}
                        />
                      </div>
                      {/*{swap 1}*/}
                      <div
                        className="bg-gray-600 bg-opacity-50 cursor-pointer flex justify-center items-center px-2 py-1 gap-2 rounded-full "
                        onClick={() => tokenpopup(1)}
                      >
                        <div>
                          {selectedTokenDatato?.image_to ? (
                            <img
                              src={selectedTokenDatato?.image_to}
                              height={30}
                              width={30}
                              alt="logo"
                              className="rounded-full"
                            />
                          ) : null}
                        </div>
                        <div>
                          {selectedTokenDatato?.name_to
                            ? selectedTokenDatato?.name_to.toUpperCase()
                            : "Token"}
                        </div>
                        <div>
                          <MdKeyboardArrowDown size={20} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col bg-slate-400 bg-opacity-10 rounded-lg p-5">
                    <div className="text-gray-300 flex items-center gap-3">
                      <p>Wallet Address</p>
                    </div>
                    <div className="flex justify-between py-2">
                      <div className="space-y-2">
                        <input
                          type="text"
                          className="border-none bg-transparent w-32 md:w-auto overflow-hidden outline-none text-2xl placeholder:text-[17px]"
                          placeholder="Enter Wallet Address"
                          name="address_from"
                          value={selectedTokenDatato?.address_from}
                          onChange={(e) => handleInputChanges(e)}
                        />
                      </div>
                      {/*{swap 2}*/}
                    </div>
                  </div>

                  <div className="w-full">
                    <button
                      className={`px-3 py-2 w-full rounded-md text-xl bg-blue-500 flex items-center justify-center`}
                      onClick={() => {
                        handleSwapSubmit();
                      }}
                      disabled={loading}
                    >
                      {/* Swap */}
                      {loading ? <span className="loader "></span> : "Transfer"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {showPopup && ( */}
        <div
          className={`${
            showPopup ? "scale-[1]" : "scale-0"
          } fixed duration-75 ease-in-out transition-all inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
        >
          <div
            ref={popupRef}
            className={`${
              showPopup ? "scale-[1]" : "scale-0"
            } fixed duration-300 ease-in-out transition-all`}
          >
            <div className="bg-[#1c1c1c] shadow-blue-700 shadow-sm p-3 rounded-2xl w-[45vh] ">
              <div className=" space-y-5">
                <div className="flex justify-between items-center py-2 ">
                  <div className="text-xl">Select Token</div>
                  <div
                    onClick={() => setShowPopup(false)}
                    className="cursor-pointer"
                  >
                    <IoMdClose size={24} />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="md:w-[360px] mb-4 md:mb-0">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-zinc-500 text-white rounded-lg p-2 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[60vh] overflow-y-auto">
                {showBalance?.length > 0 ? (
                  showBalance?.map((item, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 justify-start items-center mx-5 py-2 cursor-pointer ${
                        clickedTokens.includes(item.name)
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => {
                        if (!clickedTokens.includes(item.name)) {
                          selectToken(item);
                        }
                      }}
                    >
                      <img
                        src={item.logo}
                        alt={item.name || "Token"}
                        height={30}
                        width={30}
                        className="h-15 w-15 my-3 rounded-full"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "fallback-image-url";
                        }}
                      />
                      <div className="flex flex-col justify-center">
                        <div className="text-base font-bold">{item.name}</div>
                        <div className="text-base font-bold">{item.symbol}</div>
                        <div className="text-base">
                          Balance:{" "}
                          <span className="font-bold">
                            {selectedNetwork === "Solana"
                              ? Number(item?.amount)?.toFixed(3)
                              : Number(item?.balance_formatted)?.toFixed(3)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="mt-16 text-xl">No data</div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* )} */}

        <div
          className={`${
            balancePopup ? "scale-1" : "scale-0"
          } transition-all ease-in-out !duration-75 absolute top-0 h-[94vh] lg:h-[100vh] w-full left-0 z-[9999] flex justify-center items-center bg-[#0000007a]`}
          onClick={(e) => setBalancePopup(false)}
        >
          <BalancePopUp
            setBalancePopup={setBalancePopup}
            balancePopup={balancePopup}
            showBalance={showBalance}
            selectedNetwork={selectedNetwork}
          />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default TransferToken;
