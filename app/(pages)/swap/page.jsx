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
import CELO from "../../../public/assets/tokenimg/CELO.png";
import BURST from "../../../public/assets/tokenimg/BURST.png";
import USD from "../../../public/assets/tokenimg/USD.png";
import SHU from "../../../public/assets/tokenimg/SHU.png";
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
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import BalancePopUp from "../../components/balancePopup/BalancePopUp";

const Swap = () => {
  const { walletAddress, email, solanaAddress } = useWallet();
  const router = useRouter();
  const [tokendata, setTokendata] = useState(null);

  // const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum");
  const [fetchtokendata, setFetchtokendata] = useState(null);
  const [balancePopup, setBalancePopup] = useState(false);
  const [selectedChainId, setSelectedChainId] = useState("");
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
    { name: "BNB Chain", chainid: "56", img: BNB, descode: "0x38" },
    { name: "Avalanche", chainid: "43114", img: avalanche, descode: "0xa86a" },
    { name: "Celo", chainid: "42220", img: CELO, descode: "" },
    { name: "Blast", chainid: "238", img: BURST, descode: "" },
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
  const token_data_ARB = [
    {
      name: "Wrapped BTC",
      symbol: "WBTC",
      chianid: 42161,
      address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      decimal: "8",
      logoURI: wrapped,
      chainname: "arbitrum",
      descode: `0xa4b1`,
    },
    {
      name: "ChainLink Token",
      symbol: "LINK",
      chianid: 42161,
      address: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
      decimal: "18",
      logoURI: chainlink,
      chainname: "arbitrum",
      descode: `0xa4b1`,
    },
    {
      name: "USDT",
      symbol: "USDT",
      chianid: 42161,
      address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      decimal: "6",
      logoURI: chainlink,
      chainname: "arbitrum",
      descode: `0xa4b1`,
    },
    {
      name: "Arbitrum",
      symbol: "ARB",
      chianid: 42161,
      address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
      decimal: "18",
      logoURI: arbitrum,
      chainname: "arbitrum",
      descode: `0xa4b1`,
    },
  ];
  const token_data_POLY = [
    {
      name: "Tether USD",
      symbol: "USDT",
      chianid: 137,
      address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      decimal: "6",
      logoURI: tether,
      chainname: "polygon",
      descode: `0x89`,
    },
    {
      name: "BNB",
      symbol: "BNB",
      chianid: 137,
      address: "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
      decimal: "18",
      logoURI: BNB,
      chainname: "polygon",
      descode: `0x89`,
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      chianid: 137,
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      decimal: "6",
      logoURI: USD,
      chainname: "polygon",
      descode: `0x89`,
    },
    {
      name: "SHIBA INU",
      symbol: "SHIB",
      chianid: 137,
      address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
      decimal: "18",
      logoURI: SHU,
      chainname: "polygon",
      descode: `0x89`,
    },
  ];

  const token_data_BNB = [
    {
      name: "Wrapped BNB",
      symbol: "WBNB",
      chianid: 56,
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      decimal: "18",
      logoURI: wrapped,
      chainname: "bsc",
      descode: `0x38`,
    },
    {
      name: "TRX",
      symbol: "TRX",
      chianid: 56,
      address: "0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3",
      decimal: "18",
      logoURI: wrapped,
      chainname: "bsc",
      descode: `0x38`,
    },
    {
      name: "USDC",
      symbol: "anyUSDC",
      chianid: 56,
      address: "0x8965349fb649A33a30cbFDa057D8eC2C48AbE2A2",
      decimal: "18",
      logoURI: USD,
      chainname: "bsc",
      descode: `0x38`,
    },
    {
      name: "USDC",
      symbol: "USDC",
      chianid: 56,
      address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      decimal: "18",
      logoURI: USD,
      chainname: "bsc",
      descode: `0x38`,
    },
    {
      name: "Tether USD",
      symbol: "USDT.e",
      chianid: 56,
      address: "0x2B90E061a517dB2BbD7E39Ef7F733Fd234B494CA",
      decimal: "6",
      logoURI: tether,
      chainname: "bsc",
      descode: `0x38`,
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
        descode: token.descode,
        chainname: token.chainname,
      });
    } else if (selectedtofrom === 2) {
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

  const dataSolana = {
    input: selectedTokenDatato?.address_to,
    output: selectedTokenDatato?.address_from,
    amount: selectedTokenDatato?.input_to,
    email: email,
  };
  const dataEvm = {
    tokenIn: selectedTokenDatato?.address_to, // address_to is passed as sellToken
    tokenOut: selectedTokenDatato?.address_from, // address_from is passed as buyToken
    amount: Number(selectedTokenDatato?.input_to), // input_to is passed as sellAmount
    chain: Number(selectedChainId),
    email: email,
    chainId: selectedTokenDatato?.chainname,
    desCode: selectedTokenDatato?.descode,
  };
  const [loading, setLoading] = useState(false);

  const handleSwapSubmit = async () => {
    setLoading(true); // Set loading to true when the swap process starts

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
        setLoading(false); // Set loading to false when the swap process finishes
      });
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
      // Merging balance data with images
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
    // console.log("selectedNetwork?.descode", selectedNetwork?.descode);
    // If the network is found, set its desCode as the selectedNetwork state
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

  function accountBalance() {}
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };
  async function solanaTokenSwapPrice() {
    const tokenRes = await axios({
      method: "post",
      url: "http://localhost:3332/getSolanaTokenPrice",
      data: {
        token: selectedTokenDatato.address_to,
        token2: selectedTokenDatato.address_from,
      },
    });
    const tokensPrice = tokenRes?.data?.finalRes;
    const buyAmt = selectedTokenDatato?.input_to * tokensPrice?.sol;
    const finalAmt = buyAmt / tokensPrice?.to;
    console.log("🚀 ~ solanaTokenSwapPrice ~ finalAmt:", finalAmt);
    return finalAmt;
  }

  async function evmTokenSwapPrice() {
    const desCode = NetworkData.filter(
      (ele, index) => ele?.name == selectedNetwork
    );
    const tokenRes = await axios({
      method: "post",
      url: "http://localhost:3332/getEvmTokenPrice",
      data: {
        token: selectedTokenDatato.address_to,
        token2: selectedTokenDatato.address_from,
        chain: desCode?.descode,
      },
    });
    const tokensPrice = tokenRes?.data?.finalRes;
    const buyAmt = selectedTokenDatato?.input_to * tokensPrice?.token1;
    const finalAmt = buyAmt / tokensPrice?.token2;
    return finalAmt;
  }

  // useEffect(() => {
  //   getPrice();
  // }, [selectedTokenDatato?.address_from]);

  // async function getToQty() {
  //   if (selectedNetwork == "Solana") {
  //     if (selectedTokenDatato.address_from && selectedTokenDatato.address_to) {
  //       solanaTokenSwapPrice()
  //         .then((res) => {
  //           console.log("🚀 ~ .then ~ res:", res);
  //           setSelectedTokenDatato({
  //             ...selectedTokenDatato,
  //             input_from: res,
  //           });
  //         })
  //         .catch((error) => {
  //           console.log("🚀 ~ solanaTokenSwapPrice ~ error:", error);
  //         });
  //     }
  //   } else {
  //     evmTokenSwapPrice()
  //       .then((res) => {
  //         setSelectedTokenDatato({
  //           ...selectedTokenDatato,
  //           input_from: res,
  //         });
  //       })
  //       .catch((err) => {
  //         console.log("🚀 ~ evmTokenSwapPrice ~ err:", err);
  //       });
  //   }
  // }

  const handleInputChanges = async (e) => {
    const { name, value } = e.target;
    await setSelectedTokenDatato({
      ...selectedTokenDatato,
      [name]: value,
    });
  };
  const inputToHandle = async (e) => {
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
      axios
        .get("https://token.jup.ag/strict")
        .then((response) => {
          setTokens(response.data);
        })
        .catch((error) => {
          console.error("Error fetching tokens:", error);
        });
    } else {
      getWalletBalance(selectedNetwork);
    }
  }, [selectedNetwork]);

  const [tokenData, setTokenData] = useState({
    Ethereum: token_data_ETH,
    Solana: [],
    Arbitrum: token_data_ARB,
    Polygon: token_data_POLY,
    "BNB Chain": token_data_BNB,
  });

  useEffect(() => {
    setTokenData((prevTokenData) => ({
      ...prevTokenData,
      Solana: tokens,
    }));
  }, [tokens]);
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
      <div className="2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto relative">
        <div className="  xl:ml-28 xl:mr-[90px]  gap-6 lg:ml-3 lg:mr-6 md:ml-0 md:mr-6 ml-5  mr-5">
          <div className="text-lg font-semibold flex justify-end">
            <button
              className="bg-[#1e2529] rounded-lg  px-5 py-1 mt-3"
              onClick={() => {
                setBalancePopup(true);
              }}
            >
              Balance : 25.00$
            </button>
          </div>
          <div className="mt-48 space-y-10 px-5  ">
            <div className="swap flex flex-col items-center justify-between   text-white ">
              <div className="flex flex-col justify-center items-center space-y-5">
                <div className="flex flex-col bg-slate-600 bg-opacity-10 p-3  rounded-lg shadow-lg  space-y-2">
                  <div className="flex justify-between items-center py-2">
                    <div className="flex justify-between gap-5 text-lg mx-1 w-full">
                      <button>Swap</button>

                      <div
                        ref={dropdownRef}
                        className="dropdown-container relative"
                      >
                        <button
                          className="dropdown-toggle focus:outline-none flex"
                          // className="dropdown-toggle focus:outline-none flex relative z-10"
                          onClick={toggleDropdown}
                        >
                          {selectChain && (
                            <Image
                              src={selectChain}
                              className="h-6 w-6  " // Adjust size as needed
                              // className="h-6 w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            />
                          )}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // className="h-6 w-6 text-gray-400"
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

                        {showDropdown && (
                          <div className="dropdown animate-popup absolute bg-gray-800 rounded-lg py-2 mt-1 w-48 md:min-w-fit z-10 ml-[-162px]">
                            <ul>
                              <ul>
                                {NetworkData.map((item, index) => (
                                  <li
                                    key={index}
                                    onClick={() => {
                                      handleOptionClick(item.name);
                                      setSelectChain(item?.img);
                                      setSelectedTokenDatato({});
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
                                      {/* {item.descode} */}
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
                  </div>
                  <div className="flex flex-col bg-slate-400 bg-opacity-10 rounded-lg p-5">
                    <div className="text-gray-300">
                      <p>You pay</p>
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
                        {/* <input
                          type="text"
                          className="border-none bg-transparent w-32 md:w-auto overflow-hidden outline-none text-2xl "
                          placeholder="0"
                          name="from"
                          value={selectedTokenDatato?.input_from}
                          onChange={(e) => {
                            handleInputChanges(e);
                            getPrice();
                          }}
                        /> */}
                        {/* <h1>
                          {selectedTokenDatato?.input_from
                            ? selectedTokenDatato?.input_from
                            : 0}
                        </h1> */}
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
                      className={`px-3 py-2 w-full rounded-md text-xl bg-blue-500 flex items-center justify-center`}
                      // className=" px-3 py-2 w-full  rounded-md text-xl bg-blue-500  "
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
                      {/* Swap */}
                      {loading ? <span className="loader "></span> : "Swap"}
                    </button>
                  </div>
                </div>
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
                <div className="h-[60vh] overflow-y-auto">
                  <TokenList
                    tokens={tokenData[selectedNetwork]}
                    clickedTokens={clickedTokens}
                    selectToken={selectToken}
                    searchTerm={searchTerm}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={`${
            balancePopup ? "scale-1" : "scale-0"
          } transition-all ease-in-out !duration-75 absolute top-0 h-svh w-full left-0 z-[9999] flex justify-center items-center bg-[#0000007a]`}
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

export default Swap;
