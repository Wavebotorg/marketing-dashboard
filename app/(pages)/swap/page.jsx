/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

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
import CELO from "../../../public/assets/tokenimg/CELO.png";
import BURST from "../../../public/assets/tokenimg/BURST.png";
import tether from "../../../public/assets/tokenimg/tether.png";
import wrapped from "../../../public/assets/tokenimg/wrapped.png";
import chainlink from "../../../public/assets/tokenimg/chainlink.png";
import OXy from "../../../public/assets/tokenimg/OXy.png";
import USDT from "../../../public/assets/tokenimg/USDT.png";
import { useWallet } from "../../components/contexts/WalletContext";
import { useRouter } from "next/navigation";
import { IoSwapVerticalOutline } from "react-icons/io5";
import axiosInstance from "../../apiInstances/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import qs from "qs";
import Loader from "react-js-loader";
import axios from "axios";
import PageLoader from "next/dist/client/page-loader";
// import AllToken from "./alltoken.json";
const Swap = () => {
  const { walletAddress, email } = useWallet();
  const router = useRouter();
  const [tokendata, setTokendata] = useState(null);

  // const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum");
  const [fetchtokendata, setFetchtokendata] = useState(null);
  const [selectedChainId, setSelectedChainId] = useState("");
  const [clickedTokens, setClickedTokens] = useState("");
  const [showPopup1, setShowPopup1] = useState(false);
  console.log("🚀 ~ Swap ~ showPopup1:", showPopup1);
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
    input_to: "" || 0,
    name_from: "",
    image_from: "",
    input_from: "" || 0,
    price_from: "",
    address_from: "",
    decimals_from: "",
    chainid: "",
  });
  // console.log(
  //   "--------->>>>>>>>>>>>><<<<<<<<<<<<-----selectedTokenDatato",
  //   selectedTokenDatato
  // );
  const NetworkData = [
    { name: "Ethereum", chainid: "1", img: eth },
    { name: "Arbitrum", chainid: "42161", img: arbitrum },
    { name: "Optimism", chainid: "10", img: optimism },
    { name: "Polygon", chainid: "137", img: poly },
    { name: "Solana", chainid: "900", img: SOL },
    { name: "BNB Chain", chainid: "56", img: BNB },
    { name: "Avalanche", chainid: "43114", img: avalanche },
    { name: "Celo", chainid: "42220", img: CELO },
    { name: "Blast", chainid: "238", img: BURST },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const token_data_ETH = [
    {
      name: "BNB",
      symbol: "BNB",
      chianid: "1",
      address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
      decimal: "18",
      logoURI: BNB,
      networkname: "Ethereum",
    },
    {
      name: "Tether USD",
      symbol: "USDT",
      chianid: "1",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      decimal: "6",
      logoURI: tether,
      networkname: "Ethereum",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  /*  const token_data_SOL = [
    {
      name: "USDT",
      symbol: "USDT",
      chianid: "900",
      address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      decimal: "6",
      logoURI: USDT,
      networkname: "Solana",
    },
    {
      name: "Oxygen Protocol",
      symbol: "OXY",
      chianid: "900",
      address: "z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M",
      decimal: "6",
      logoURI: OXy,
      networkname: "Solana",
    },
    {
      name: "USD Coin",
      symbol: "USD",
      chianid: "900",
      address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      decimal: "6",
      logoURI: OXy,
      networkname: "Solana",
    },
  ]; */

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const token_data_ARB = [
    {
      name: "Wrapped BTC",
      symbol: "WBTC",
      chianid: 42161,
      address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      decimal: "8",
      logoURI: wrapped,
      networkname: "Arbitrum",
    },
    {
      name: "ChainLink Token",
      symbol: "LINK",
      chianid: 42161,
      address: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
      decimal: "18",
      logoURI: chainlink,
      networkname: "Arbitrum",
    },
    {
      name: "USDT",
      symbol: "USDT",
      chianid: 42161,
      address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      decimal: "6",
      logoURI: chainlink,
      networkname: "Arbitrum",
    },
    {
      name: "Arbitrum",
      symbol: "ARB",
      chianid: 42161,
      address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
      decimal: "18",
      logoURI: arbitrum,
      networkname: "Arbitrum",
    },
  ];

  useEffect(() => {
    // Find Ethereum network data
    const ethereumNetwork = NetworkData.find(
      (network) => network.name === "Ethereum"
    );
    if (ethereumNetwork) {
      // Set Ethereum image as default when the component mounts
      setSelectChain(ethereumNetwork.img);
    }
  }, []);
  const [selectedSymbol, setSelectedSymbol] = useState("");

  const selectToken = (token, networkData, e) => {
    // Logic for handling selected token
    if (selectedtofrom === 1) {
      setSelectedTokenDatato({
        ...selectedTokenDatato,

        name_to: token.symbol,
        image_to: token.logoURI,
        chainid: token.chainid,
        address_to: token.address,
        decimals_to: token.decimal,
      });
    } else if (selectedtofrom === 2) {
      setSelectedTokenDatato({
        ...selectedTokenDatato,
        name_from: token.symbol,
        image_from: token.logoURI,
        chainid: token.chainid,
        address_from: token.address,
        decimals_from: token.decimal,
      });
    }

    // Set the selected symbol
    setSelectedSymbol(token.symbol);

    // Enable and unblur the previously selected token for the corresponding field
    setClickedTokens((prevTokens) => {
      // Ensure prevTokens is always an array
      const tokensArray = Array.isArray(prevTokens) ? prevTokens : [];
      // Filter out the currently selected token from the previous tokens array
      const updatedTokens = tokensArray.filter(
        (prevToken) => prevToken !== token.name
      );
      // If selecting a new token for the "to" field, enable and unblur the previously selected token for the "from" field
      if (selectedtofrom === 1) {
        return [token.name, selectedTokenDatato.name_from];
      }
      // If selecting a new token for the "from" field, enable and unblur the previously selected token for the "to" field
      else if (selectedtofrom === 2) {
        return [selectedTokenDatato.name_to, token.name];
      }
      return prevTokens; // Return unchanged tokens for other cases
    });

    // Close popup after selecting token
    setShowPopup(false);
  };

  const handleSwapTokens = () => {
    //setSelectedToken((prevToken) => (prevToken === "one" ? "two" : "one"));
    setSelectedTokenDatato({
      ...selectedTokenDatato,
      name_to: selectedTokenDatato?.name_from,
      image_to: selectedTokenDatato?.image_from,
      price_to: selectedTokenDatato?.price_from,
      name_from: selectedTokenDatato?.name_to,
      image_from: selectedTokenDatato?.image_to,
      price_from: selectedTokenDatato?.price_to,
      input_to: selectedTokenDatato?.input_from,
      input_from: selectedTokenDatato?.input_to,
    });
  };

  const tokenpopup = (e) => {
    setShowPopup(true);
    setSelectedtofrom(e);
    setSearchTerm("");
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const dataArb= {
    token0: selectedTokenDatato?.address_to, // address_to is passed as sellToken
    token1: selectedTokenDatato?.address_from, // address_from is passed as buyToken
    amountIn: selectedTokenDatato?.input_to, // input_to is passed as sellAmount
    chainId: selectedChainId,
    email: email,
  };
  // console.log(" dataEvm:", dataEvm);
  const dataSolana = {
    input: selectedTokenDatato?.address_to,
    output: selectedTokenDatato?.address_from,
    amount: selectedTokenDatato?.input_to,
    email: email,
  };
  // console.log("🚀 ~ Swap ~ dataSolana:", dataSolana)

  const [loading, setLoading] = useState(false);

  const handleSwapSubmit = () => {
    setLoading(true); // Set loading to true when the swap process starts

    let endpoint;
    if (selectedNetwork === "Solana") {
      endpoint = "/solanaSwap";
    } else {
      endpoint = "/mainswap";
    }

    axiosInstance
      .post(endpoint, selectedNetwork === "Solana" ? dataSolana : dataEvm)
      .then((res) => {
        const myData = res?.data;
        console.log("Response from API:", myData);
        if (myData?.status) {
          toast.success(myData?.message);
        } else {
          toast.error(myData?.message);
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        toast.error("An error occurred while processing your request");
      })
      .finally(() => {
        setLoading(false); // Set loading to false when the swap process finishes
      });
  };

  /* const handleSwapSubmit = () => {
    let endpoint;
    if (selectedNetwork === "Solana") {
      endpoint = "/solanaSwap";
    } else {
      endpoint = "/mainswap";
    }
  // const handleSwapSubmit = () => {
  //   let endpoint;
  //   if (selectedNetwork === "Solana") {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  //     endpoint = "/solanaSwap";
  //   } else  (selectedNetwork === "Arbitrum") {
  //     endpoint = "/mainswap"; // Assuming you have an endpoint for Arbitrum
  //   } else {
  //     endpoint = "/mainswap";
  //   }

    axiosInstance
      .post(endpoint, selectedNetwork === "Solana" ? dataSolana : dataArb)
      .then((res) => {
        const myData = res?.data;
        console.log("Response from API:", myData);
        if (myData?.status) {
          toast.success(myData?.message);
        } else {
          toast.error(myData?.message);
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        toast.error("An error occurred while processing your request");
      });
  }; */

  // const handleSwapSubmit = async () => {
  //   try {

  //     const response =
  //       await axiosInstance.post("/mainswap", data)
  //       if (response?.status) {
  //         toast.success(response?.msg);

  //         router.push("/passwordverify");
  //         // setTimeout(() => {
  //         // }, 3000);
  //       } else {
  //         toast.error(response?.msg);
  //       }
  //     console.log("Response from API:", response);
  //   } catch (error) {
  //     // Handle errors
  //     console.error("Error occurred:", error);
  //   }
  // };
  const handleClosePopup1 = () => {
    setShowPopup1(false);
  };

  const getPrice = async () => {
    if (
      selectedTokenDatato?.input_to &&
      selectedTokenDatato?.address_from &&
      selectedTokenDatato?.address_to
    ) {
      const amount =
        Number(selectedTokenDatato?.input_to) *
        10 ** selectedTokenDatato?.decimals_to;
      console.log("--------amount", amount);
      const params = {
        sellToken: selectedTokenDatato?.address_to,
        buyToken: selectedTokenDatato?.address_from,
        sellAmount: amount,
        takerAddress: walletAddress,
      };

      const headers = {
        "0x-api-key": process.env.NEXT_PUBLIC_0X_API_KEY,
      };

      try {
        const response = await fetch(
          `https://arbitrum.api.0x.org/swap/v1/quote?${qs.stringify(params)}`,
          {
            headers,
          }
        );

        const swapPriceJSON = await response.json();
        console.log("🚀 ~ getPrice ~ response:", swapPriceJSON);
        setFetchtokendata(swapPriceJSON);
        const Tokenprice = swapPriceJSON.buyAmount;
        const Tokendecimals = 10 ** selectedTokenDatato?.decimals_from;
        const Finaltokenprice = Tokenprice / Tokendecimals;
        // console.log("buy amount:----------------------", Finaltokenprice);
        if (Finaltokenprice) {
          setSelectedTokenDatato({
            ...selectedTokenDatato,
            input_from: Finaltokenprice,
          });
          //   // newsinglegetPrice();
        }
      } catch (error) {
        console.error("Error fetching price:", error);
      } finally {
      }
    }
  };

  const getWalletBalance = async () => {
    setShowPopup1(true);
    await axiosInstance
      .post("/fetchbalance", { email: email })
      .then((res) => {
        const myData = res?.data;
        console.log("fetchbalance--->", myData);
        setShowBalance(myData);
      })
      .catch((err) => {
        console.log("error--->", err);
      });
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    await setSelectedTokenDatato({
      ...selectedTokenDatato,
      [name]: value,
    });
  };
  useEffect(() => {
    getPrice();
  }, [selectedTokenDatato?.input_to]);

  const handleOptionClick = (name) => {
    const selectedNetworkData = NetworkData.find(
      (network) => network.name === name
    );
    if (selectedNetworkData) {
      setSelectedNetwork(name);
      setSelectedChainId(selectedNetworkData.chainid);
      setShowDropdown(false);
    }
  };

  // const handleOptionClick= (name) => {
  //   setSelectedNetwork(name);
  //   setShowDropdown(false); // Close dropdown when an option is clicked
  // };
  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  // const redirecttolink=()=>{
  //   router.push("https://arbiscan.io/tx/")
  // }
  // onClick={redirecttolink()}
  const popupRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the popup
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Clicked outside the popup, so close it
        setShowPopup(false);
      }
    };

    // Adding event listener to detect clicks on the document body
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const [selectedNetwork, setSelectedNetwork] = useState(""); // State to track the selected network
  // const [selectChain, setSelectChain] = useState(""); // State to store the selected network's image URL
  const [tokens, setTokens] = useState([]); // State to store the fetched tokens
  console.log("🚀 ~ Swap ~ tokens:", tokens);

  // Function to handle option click
  // const handleOptionClick = (name) => {
  //   setSelectedNetwork(name); // Update the selected network
  // };

  // Fetch tokens when selected network changes
  /*  useEffect(() => {
    // Check if the selected network is Solana
    if (selectedNetwork === "Solana") {
      // Make API call to fetch tokens
      axios
        .get("https://token.jup.ag/strict")
        .then((response) => {
          // Assuming the response contains an array of tokens
          setTokens(response.data);
        })
        .catch((error) => {
          console.error("Error fetching tokens:", error);
        });
    }
  }, [selectedNetwork]); */

  useEffect(() => {
    // Check if the selected network is Solana
    if (selectedNetwork === "Solana") {
      // Make API call to fetch tokens
      axios
        .get("https://token.jup.ag/strict")
        .then((response) => {
          // Assuming the response contains an array of tokens
          setTokens(response.data);
        })
        .catch((error) => {
          console.error("Error fetching tokens:", error);
        });
    }
  }, [selectedNetwork]);

  return (
    <>
      <div className="2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto ">
        <div className="  xl:ml-28 xl:mr-[90px]  gap-6 lg:ml-3 lg:mr-6 md:ml-0 md:mr-6 ml-5  mr-5">
          <div className="text-lg font-semibold flex justify-end">
            <button
              className="bg-blue-500 rounded-lg  px-2 mt-3"
              onClick={getWalletBalance}
            >
              click to show Balance
            </button>
          </div>
          {showPopup1 && (
            <div className="fixed inset-0 z-50 top-40 flex items-start justify-end ">
              <div className="bg-[#1c1c1c] mr-4 xl:mr-16 shadow-blue-700 shadow-sm p-3 rounded-2xl w-[300px] ">
                <div className=" space-y-5 ">
                  <div className="flex flex-col justify-between items-center py-2  ">
                    <div className="text-xl flex justify-between w-full items-center ">
                      <span>Balance Details</span>
                      <div
                        onClick={handleClosePopup1}
                        className="cursor-pointer"
                      >
                        <IoMdClose size={24} />
                      </div>
                    </div>
                    {/*   {showBalance?.map((item, index) => (
                      <div className=" flex items-center " key={index}>
                        <div className="flex">
                          {" "}
                          <Image
                            src={item?.logo}
                            alt={item?.name}
                            className="h-15 w-15 my-3"
                          />
                          <div className="flex flex-col justify-center pl-3">
                            <div className="text-base font-bold ">
                              {item?.name}
                            </div>
                            <div className="text-base">
                              Balance:{" "}
                              <span className="font-bold">{item?.balance}</span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))} */}
                    {showBalance &&
                    Array.isArray(showBalance) &&
                    showBalance.length > 0 ? (
                      showBalance.map((item, index) => (
                        <div className="flex items-center" key={index}>
                          <div className="flex">
                            <Image
                              src={item?.logo}
                              alt={item?.name}
                              className="h-15 w-15 my-3"
                            />
                            <div className="flex flex-col justify-center pl-3">
                              <div className="text-base font-bold">
                                {item?.name}
                              </div>
                              <div className="text-base">
                                Balance:{" "}
                                <span className="font-bold">
                                  {item?.balance}
                                </span>
                              </div>
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
          )}

          <div className="mt-48 space-y-10 px-5  ">
            <div className="swap flex flex-col items-center justify-between   text-white ">
              <div className="flex flex-col justify-center items-center space-y-5">
                <div className="flex flex-col bg-slate-600 bg-opacity-10 p-3  rounded-lg shadow-lg  space-y-2">
                  <div className="flex justify-between items-center py-2">
                    <div className="flex justify-between gap-5 text-lg mx-1 w-full">
                      <button>Swap</button>

                      <div className="dropdown-container relative">
                        <button
                          className="dropdown-toggle focus:outline-none flex"
                          onClick={toggleDropdown}
                        >
                          {selectChain && (
                            <Image
                              src={selectChain}
                              className="h-6 w-6  " // Adjust size as needed
                            />
                          )}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-400"
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
                        {showDropdown && (
                          <div className="dropdown absolute bg-gray-800 rounded-lg py-2 mt-1 w-48 md:min-w-fit z-10 ml-[-162px]">
                            <ul>
                              <ul>
                                {/*   {NetworkData.map((item, index) => (
                                  <li
                                    key={index}
                                    onClick={() => {
                                      handleOptionClick(item.name);
                                      setSelectChain(item?.img);
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
                                      className="h-6 w-6 mr-2" // Adjust size as needed
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
                                ))} */}
                                {NetworkData.map((item, index) => (
                                  <li
                                    key={index}
                                    onClick={() => {
                                      handleOptionClick(item.name);
                                      setSelectChain(item?.img);
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
                                      className="h-6 w-6 mr-2" // Adjust size as needed
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
                        )}
                      </div>
                    </div>
                    {/* <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <IoMdSettings
                    size={25}
                    className={isHovered ? "rotate-90 cursor-pointer" : ""}
                  />
                </div> */}
                  </div>
                  <div className="flex flex-col bg-slate-400 bg-opacity-10 rounded-lg p-5">
                    <div className="text-gray-300">
                      <p>You pay</p>
                    </div>
                    <div className="flex justify-between py-2">
                      <div className="space-y-2">
                        <input
                          type="number"
                          className="border-none bg-transparent w-32 md:w-auto overflow-hidden outline-none text-2xl "
                          placeholder="0"
                          name="input_to"
                          value={selectedTokenDatato?.input_to}
                          onChange={(e) => handleInputChange(e)}
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
                            : "  Token"}
                        </div>
                        <div>
                          <MdKeyboardArrowDown size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex justify-center items-center bg-gray-600 bg-opacity-50 text-white  p-2 mx-auto rounded-md cursor-pointer"
                    onClick={() => handleSwapTokens()}
                  >
                    <IoSwapVerticalOutline size={20} className="" />
                  </div>
                  <div className="flex flex-col bg-slate-400 bg-opacity-10 rounded-lg p-5">
                    <div className="text-gray-300">
                      <p>You receive</p>
                    </div>
                    <div className="flex justify-between py-2">
                      <div className="space-y-2">
                        <input
                          type="text"
                          className="border-none bg-transparent w-32 md:w-auto overflow-hidden outline-none text-2xl "
                          placeholder="0"
                          name="from"
                          value={selectedTokenDatato?.input_from}
                          onChange={(e) => {
                            handleInputChange(e);
                            getPrice();
                          }}
                        />
                      </div>
                      {/*{swap 2}*/}
                      <div
                        className="bg-gray-600 bg-opacity-50 cursor-pointer flex justify-center items-center px-2 py-1 gap-2 rounded-full "
                        onClick={() => tokenpopup(2)}
                      >
                        <div>
                          {selectedTokenDatato?.image_from ? (
                            <img
                              src={selectedTokenDatato?.image_from}
                              height={30}
                              width={30}
                              alt="logo"
                              className="rounded-full"
                            />
                          ) : null}
                        </div>
                        <div>
                          {selectedTokenDatato?.name_from
                            ? selectedTokenDatato?.name_from.toUpperCase()
                            : "Select Token"}
                        </div>
                        <div>
                          <MdKeyboardArrowDown size={20} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <button
                      className=" px-3 py-2 w-full rounded-md text-xl bg-blue-500  "
                      // ${
                      //   selectedTokenDatato?.input_from
                      //     ? " bg-opacity-50"
                      //     : "bg-opacity-10"
                      // }`}
                      onClick={() => {
                        handleSwapSubmit();
                      }}
                      disabled={loading}
                    >
                      Swap
                    </button>
                  </div>
                </div>
                {loading && (
                  <Loader
                    type="spinner-default"
                    // color=""
                    size={50}
                    title="Transaction loading"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={popupRef}>
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
                {token_data_ETH && (
                  <div className="h-[60vh] overflow-y-auto">
                    {selectedNetwork === "Ethereum" ? (
                      token_data_ETH
                        .filter((token) =>
                          token.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        )
                        .map((token, index) => (
                          <div
                            key={index}
                            className={`flex gap-3 justify-start items-center mx-5 py-2 cursor-pointer ${
                              clickedTokens.includes(token.name)
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            onClick={() => {
                              if (!clickedTokens.includes(token.name)) {
                                selectToken(token);
                              }
                            }}
                          >
                            <Image
                              src={token.logoURI}
                              alt={token.name}
                              height={50}
                              width={50}
                              className="rounded-full"
                            />
                            <div className="flex gap-2">
                              <p
                                className={`font-semibold ${
                                  clickedTokens.includes(token.name)
                                    ? "text-gray-500"
                                    : ""
                                }`}
                              >
                                {token.name}
                              </p>
                              <p className="text-gray-200">
                                ({token.symbol.toUpperCase()})
                              </p>
                            </div>
                          </div>
                        ))
                    ) : selectedNetwork === "Solana" ? (
                      <>
                        {tokens
                          .filter((token) =>
                            token.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          )
                          .map((token, index) => (
                            <div
                              key={index}
                              className={`flex gap-3 justify-start items-center mx-5 py-2 cursor-pointer ${
                                clickedTokens.includes(token.name)
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                              onClick={() => {
                                if (!clickedTokens.includes(token.name)) {
                                  selectToken(token);
                                }
                              }}
                            >
                              <img
                                src={token.logoURI}
                                alt={token.name}
                                height={50}
                                width={50}
                                className="rounded-full"
                              />
                              <div className="flex gap-2">
                                <p
                                  className={`font-semibold ${
                                    clickedTokens.includes(token.name)
                                      ? "text-gray-500"
                                      : ""
                                  }`}
                                >
                                  {token.name}
                                </p>
                                <p className="text-gray-200">
                                  ({token.symbol.toUpperCase()})
                                </p>
                              </div>
                            </div>
                          ))}
                      </>
                    ) : selectedNetwork === "Arbitrum" ? (
                      token_data_ARB
                        .filter((token) =>
                          token.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        )
                        .map((token, index) => (
                          <div
                            key={index}
                            className={`flex gap-3 justify-start items-center mx-5 py-2 cursor-pointer ${
                              clickedTokens.includes(token.name)
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            onClick={() => {
                              if (!clickedTokens.includes(token.name)) {
                                selectToken(token);
                              }
                            }}
                          >
                            <Image
                              src={token?.logoURI}
                              alt={token.name}
                              height={50}
                              width={50}
                              className="rounded-full"
                            />
                            <div className="flex gap-2">
                              <p
                                className={`font-semibold ${
                                  clickedTokens.includes(token.name)
                                    ? "text-gray-500"
                                    : ""
                                }`}
                              >
                                {token.name}
                              </p>
                              <p className="text-gray-200">
                                ({token.symbol.toUpperCase()})
                              </p>
                            </div>
                          </div>
                        ))
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default Swap;
