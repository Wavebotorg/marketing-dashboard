/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";
import closearrow from "../../../public/assets/sidebar/closearrow.svg";
import openarrow from "../../../public/assets/sidebar/openarrow.svg";
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

import { useWallet } from "../../components/contexts/WalletContext";
import { useRouter } from "next/navigation";
import axiosInstance from "../../apiInstances/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import BalancePopUp from "../../components/balancePopup/BalancePopUp";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";

const Withdraw = () => {
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

  // Function to reset all fields
  const resetFields = () => {
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
  };

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
  // console.log(
  //   "------------------------------------------------set addredess",
  //   selectedTokenDatato
  // );

  //default network selected
  useEffect(() => {
    const ethereumNetwork = NetworkData.find(
      (network) => network.name === "Ethereum"
    );
    if (ethereumNetwork) {
      setSelectChain(ethereumNetwork.img);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //select token info.
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
    }

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

  //popup for select token after dropdown
  const tokenpopup = (e) => {
    setShowPopup(true);
    setSelectedtofrom(e);
    setSearchTerm("");
  };
  const [showDropdown, setShowDropdown] = useState(false);

  //For trnasfer Token for both network Solana And EVM
  const handleTransferSubmit = async () => {
    if (selectedNetwork === "Solana") {
      await handleSolanaTransfer(selectedNetwork);
    } else {
      await handleEvmTransfer(selectedNetwork);
    }
  };

  //For Solana Transfer
  const handleSolanaTransfer = async (networkName) => {
    // console.log("dadadad3333");
    setLoading(true);

    const data = {
      email: email,
      token: selectedTokenDatato?.address_to,
      toWallet: selectedTokenDatato?.address_from,
      amount: Number(selectedTokenDatato?.input_to),
    };
    // console.log("dadadad222222");

    try {
      const response = await axiosInstance.post("/transferSolanaToken", data);
      // console.log("dadadad11111");

      if (response?.data?.status) {
        toast.success(response?.data?.message);
        setTimeout(async () => {
          if (selectedNetwork == "Solana") {
            await getSolanaBalance();
          } else {
            await getWalletBalance(selectedNetwork);
          }
        }, 3000);
        resetFields();
      } else {
        toast.error(response?.data?.message);
      }
      // Reset all fields after successful transfer

      // console.log(
      //   "------------------------------------------------------LOG",
      //   response
      // );
    } catch (error) {
      console.error("There was a problem with the API call:", error);
      toast.error("An error occurred while processing your request");
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);

  //For EVM Transfer
  const handleEvmTransfer = async (networkName) => {
    setLoading(true);

    const data = {
      email: email,
      token: selectedTokenDatato?.address_to,
      toWallet: selectedTokenDatato?.address_from,
      chain: Number(selectedChainId),
      amount: Number(selectedTokenDatato?.input_to),
    };

    try {
      let response;
      if (networkName === "Solana") {
        response = await handleSolanaTransfer(networkName);
      } else {
        response = await axiosInstance.post("transferEvmToken", data);
      }

      if (response?.data?.status) {
        toast.success(response?.data?.message);
        setTimeout(async () => {
          if (selectedNetwork == "Solana") {
            await getSolanaBalance();
          } else {
            await getWalletBalance(selectedNetwork);
          }
        }, 3000);
        resetFields();
      } else {
        toast.error(response?.data?.message);
      }
      // Reset all fields after successful transfer
    } catch (error) {
      console.error("There was a problem with the API call:", error);
      toast.error("An error occurred while processing your request");
    } finally {
      setLoading(false);
    }
  };

  /*   const getSolanaBalance = async () => {
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
  }; */

  /* const getSolanaBalance = async () => {
    try {
      const balanceRes = await axiosInstanceAuth.post(
        "/getSolanaWalletTokenBal",
        {
          wallet: solanaAddress,
        }
      );
      const balanceData = balanceRes?.data?.response1?.tokens;
      const nativeBalance = balanceRes?.data?.response1?.nativeBalance;

      console.log("fetchSolanabalance-------------------------->", balanceData);

      const tokenImages = await fetchTokenImages([
        "https://token.jup.ag/strict",
        // Add more API endpoints here if needed
      ]);

      const mergedData = balanceData.map((token) => {
        const tokenImage = tokenImages.find(
          (image) => image.address === token.mint
        );
        return {
          ...token,
          logo: tokenImage ? tokenImage.logoURI : null,
        };
      });
        mergedData.unshift({
        mint: "SOL",
        amount: nativeBalance.solana,
        name: "Solana",
        symbol: "SOL",
        logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
      });
      setShowBalance(mergedData);
    } catch (err) {
      console.log("error--->", err);
    }
  }; */

  //For Solana Balance
  /* const getSolanaBalance = async () => {
    try {
      const balanceRes = await axiosInstanceAuth.post(
        "/getSolanaWalletTokenBal",
        {
          wallet: solanaAddress,
        }
      );
      const balanceData = balanceRes?.data?.response1?.tokens;
      const nativeBalance = balanceRes?.data?.response1?.nativeBalance;
      console.log("fetchSolanabalance-------------------------->", balanceData);

      const tokenImages = await fetchTokenImages([
        "https://token.jup.ag/strict",
      ]);
 
      const mergedData = balanceData.map((token) => {
        const tokenImage = tokenImages.find(
          (image) => image.address === token.mint
        );
        return {
          ...token,
          logo: tokenImage ? tokenImage.logoURI : null,
        };
      });

      mergedData.unshift({
        mint: "SOL",
        amount: nativeBalance.solana,
        name: "Solana",
        symbol: "SOL",
        logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
      });

      setShowBalance(mergedData);
    } catch (err) {
      console.log("error--->", err);
    }
  };

  //For Solana Image Merge To above Function
  const fetchTokenImages = async (endpoints) => {
    try {
      for (const endpoint of endpoints) {
        const imageRes = await axios.get(endpoint);
        const tokenImages = imageRes?.data;
        if (tokenImages && tokenImages.length > 0) {
          return tokenImages;
        }
      }

      return [];
    } catch (err) {
      console.log("Error fetching token images:", err);
      return [];
    }
  };
 */

  const getSolanaBalance = async () => {
    try {
      const balanceRes = await axiosInstanceAuth.post(
        "/getSolanaWalletTokenBal",
        {
          wallet: solanaAddress,
        }
      );
      const balanceData = balanceRes?.data?.response1?.tokens;
      const nativeBalance = balanceRes?.data?.response1?.nativeBalance;

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

      mergedData.unshift({
        mint: "SOL", // Assuming SOL is the native token symbol
        amount: nativeBalance.solana,
        name: "Solana",
        symbol: "SOL",
        logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",

        // Add more properties if needed
      });

      setShowBalance(mergedData);
    } catch (err) {
      console.log("error--->", err);
    }
  };

  //For EVM Balance
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

        const myData = res?.data?.data;
        // console.log(
        //   "fetchbalance--------------------------------------------------------------------------------->",
        //   myData
        // );
        setShowBalance(myData);
      } catch (err) {
        console.log("error--->", err);
        setShowBalance([]);
      }
    } else {
      console.error("Network not found");
    }
  };

  //For Close Dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  //For Take input Value
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  //For Take Merge Value
  const handleInputChanges = async (e) => {
    const { name, value } = e.target;

    await setSelectedTokenDatato({
      ...selectedTokenDatato,
      [name]: value,
    });
  };

  //For selection Of Network
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

  //Close popup when click outside of it
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

  useEffect(() => {
    if (selectedNetwork == "Solana") {
      getSolanaBalance();
    } else {
      getWalletBalance(selectedNetwork);
    }
  }, [selectedNetwork]);

  //Close DropDown when click outside of it
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
      <div
        style={{
          marginLeft: isNavbar && window.innerWidth >= 1440 ? "12%" : "0",
        }}
        className=" md:pl-4 sm:pl-4 xsm:pl-0 mx-auto transition-all duration-500 ease-in-out"
      >
        {/* 2xl:pl-64 xl:pl-64 */}
        <div className="   gap-6 lg:ml-3 lg:mr-6 md:ml-0 md:mr-6 ml-5  mr-5">
          {/*  xl:ml-32 xl:mr-[92px] */}
          <div className="text-lg font-semibold flex justify-between pt-2">
            <div
              className={`lg:scale-0 scale-[1] text-3xl `}
              onClick={() => setIsNavbar(!isNavbar)}
            >
              {isNavbar === false ? (
                <div className="cursor-pointer">
                  {/* <FaBars /> */}
                  {/* <FaBarsStaggered /> */}
                  {/* <TbArrowBarRight /> */}
                  <Image
                    src={openarrow}
                    alt="open sidebar arrow"
                    width={30}
                    // height={40}
                  />
                </div>
              ) : (
                <div className="  cursor-pointer">
                  {/* <MdKeyboardDoubleArrowLeft /> */}
                  {/* <TbArrowBarLeft /> */}
                  <Image
                    src={closearrow}
                    alt="open sidebar arrow"
                    width={30}
                    // height={40}
                  />
                </div>
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
          <div className="h-[93vh] w-full flex justify-center items-center px-5">
            <div className="swap flex flex-col items-center justify-between text-white ">
              <div className="flex flex-col justify-center items-center space-y-5">
                <div className="flex flex-col bg-slate-600 bg-opacity-10 p-3 rounded-lg shadow-lg space-y-2 md:w-full flex-container">
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
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <Image
                              src={selectChain}
                              alt="chain icon"
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

                        <div
                          className={`overflow-hidden scrollbar ${
                            showDropdown
                            ? "h-[430px] overflow-y-scroll  py-2"
                            : "h-0"
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
                    <div className="flex ">
                      <div className="space-y-2 w-full">
                        <input
                          type="text"
                          className="border-none bg-transparent w-full outline-none text-base placeholder:text-[15px]"
                          placeholder="Enter Wallet Address"
                          name="address_from"
                          value={selectedTokenDatato?.address_from}
                          onChange={(e) => handleInputChanges(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    {loading ? (
                      <button
                        className={`px-3 py-2 w-full rounded-md text-xl bg-blue-500 flex items-center justify-center`}
                        onClick={handleTransferSubmit}
                        disabled={loading}
                      >
                        <span className="loader "></span>
                      </button>
                    ) : (
                      <button
                        className={`px-3 py-2 w-full rounded-md text-xl bg-blue-500 flex items-center justify-center`}
                        onClick={handleTransferSubmit}
                        disabled={loading}
                      >
                        Transfer
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            <div className="bg-[#1c1c1c] shadow-blue-700 shadow-sm p-3 rounded-2xl  md:w-[45vh] xsm:w-[19rem] ">
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
                      className={`flex gap-3 justify-start items-center mx-5 py-2 cursor-pointer ${clickedTokens.includes(
                        item.name
                      )}`}
                      onClick={() => {
                        {
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

export default Withdraw;
