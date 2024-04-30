"use client";
import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdSettings } from "react-icons/io";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSwapVerticalOutline } from "react-icons/io5";
import eth from "../../../public/assets/token img/eth.png";
import arbitrum from "../../../public/assets/token img/arbitrum.png";
import optimism from "../../../public/assets/token img/optimism.png";
import poly from "../../../public/assets/token img/poly.png";
import SOL from "../../../public/assets/token img/SOL.png";
import BNB from "../../../public/assets/token img/BNB.png";
import avalanche from "../../../public/assets/token img/avalanche.png";
import CELO from "../../../public/assets/token img/CELO.png";
import BURST from "../../../public/assets/token img/BURST.png";
//import eth from "../../components/assets/ethlogo.png";
import axios from "axios";

// import AllToken from "./alltoken.json";
const Swap = () => {
    const [tokendata, setTokendata] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedtofrom, setSelectedtofrom] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const NetworkData = [
      { name: "Ethereum", chainid: "1", img: eth},
      { name: "Arbitrum", chainid: "2" , img: arbitrum},
      { name: "Optimism", chainid: "3" , img: optimism},
      { name: "Polygon", chainid: "4", img: poly},
      { name: "Solana", chainid: "5" , img: SOL},
      { name: "BNB Chain", chainid: "6", img: BNB },
      { name: "Avalanche", chainid: "7", img: avalanche},
      { name: "Celo", chainid: "8" , img: CELO},
      { name: "Blast", chainid: "9" , img: BURST},
    ];
    const token_data_ETH =
      [{tokenname:"BNB", symbol:"BNB", Chianid:"1",TokenAddress:"0xdAC17F958D2ee523a2206206994597C13D831ec7", decimal:"18", imageURl:"",networkname:"Ethereum"},
      {tokenname:"Tether USD", symbol:"USDT", Chianid:"1",TokenAddress:"0xdAC17F958D2ee523a2206206994597C13D831ec7", decimal:"6", imageURl:"" ,networkname:"Ethereum"}]

     
     const token_data_SOL =  [{tokenname:"USDT", symbol:"USDT", Chianid:"5",TokenAddress:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", decimal:"6", imageURl:"",networkname:"Solana"},
     {tokenname:"Oxygen Protocol", symbol:"OXY", Chianid:"5",TokenAddress:"z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M", decimal:"6", imageURl:"",networkname:"Solana"}]
     
    const token_data_ARB =
      [{tokenname:"Wrapped BTC", symbol:"WBTC", Chianid:"2",TokenAddress:"0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f", decimal:"8", imageURl:"",networkname:"Arbitrum"},
      {tokenname:"ChainLink Token", symbol:"LINK", Chianid:"2",TokenAddress:"0xf97f4df75117a78c1A5a0DBb814Af92458539FB4", decimal:"18", imageURl:"",networkname:"Arbitrum"}]
  
    const [selectedTokenDatato, setSelectedTokenDatato] = useState({
        name_to: "",
        image_to: "",
        price_to: "",
        input_to: "" || 0,
        name_from: "",
        image_from: "",
        input_from: "" || 0,
        price_from: "",
    });
    const [showDropdown, setShowDropdown] = useState(false);



    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
    const handleOptionClick = () => {
      setShowDropdown(false); // Close dropdown when an option is clicked
    };
  const Tokendata = tokendata
    //console.log(selectedTokenDatato);

    const selectToken = (e) => {
        if (selectedtofrom === 1) {
            setSelectedTokenDatato({
                ...selectedTokenDatato,
                name_to: e.symbol,
                image_to: e.image,
                price_to: e.current_price,
            });
            setShowPopup(false);
        }
        if (selectedtofrom === 2) {
            setSelectedTokenDatato({
                ...selectedTokenDatato,
                name_from: e.symbol,
                image_from: e.image,
                price_from: e.current_price,
            });
            setShowPopup(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
                );

                console.log("jsonData--->", response?.data);
                setTokendata(response?.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

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

    const inputValue = ({ value, name }) => {
        //console.log("🚀 ~ inputValue ~ value:", value);
        const Invalue = value;

        if (name === "to") {
            const fromValue =
                (selectedTokenDatato.price_to * Invalue) /
                selectedTokenDatato.price_from;
            setSelectedTokenDatato({
                ...selectedTokenDatato,
                input_to: Invalue,
                input_from: isNaN(fromValue) ? "" : fromValue,
            });
        } else if (name === "from") {
            const fromValue =
                (selectedTokenDatato.price_from * Invalue) /
                selectedTokenDatato.price_to;
            setSelectedTokenDatato({
                ...selectedTokenDatato,
                input_from: Invalue,
                input_to: isNaN(fromValue) ? "" : fromValue,
            });
        }
    };

    useEffect(() => {
        setSelectedTokenDatato({
            ...selectedTokenDatato,
            input_from:
                (selectedTokenDatato?.price_to * selectedTokenDatato?.input_to) /
                selectedTokenDatato?.price_from || 0,
        });
    }, [selectedTokenDatato?.price_from, selectedTokenDatato?.price_to]);

    return (
        <>
            <div className="lg:ml-80 mt-24 space-y-10 px-5 ">
                {/* <div className="text-2xl font-semibold">
                    <p>Swap</p>
                </div> */}

                <div className="swap flex flex-col items-center justify-between   text-white ">
                    <div className="flex flex-col justify-center items-center space-y-5">
                        <div className="flex flex-col bg-slate-600 bg-opacity-10 p-3  rounded-lg shadow-lg  space-y-2">
                            {/* <div className="flex justify-between items-center py-2">
                                <div className="flex gap-5 text-lg mx-1">
                                    <h1>Swap</h1>
                                    <h1>Buy</h1>
                                </div>
                                <div
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <IoMdSettings
                                        size={25}
                                        className={isHovered ? "rotate-90 cursor-pointer" : ""}
                                    />
                                </div>
                            </div> */}
                            <div className="flex flex-col bg-slate-400 bg-opacity-10 rounded-lg p-5">
                                <div className="text-gray-300">
                                    <p>You pay</p>
                                </div>
                                <div className="flex justify-between py-2">
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            className="border-none bg-transparent w-32 md:w-auto overflow-hidden outline-none text-2xl "
                                            placeholder="0"
                                            name="to"
                                            value={selectedTokenDatato?.input_to}
                                            onChange={(e) => {
                                                inputValue(e?.target);
                                            }}
                                        />
                                    </div>
                                    {/*{swap 1}*/}
                                    <div
                                        className="bg-gray-600 bg-opacity-50 cursor-pointer flex justify-center items-center px-2 py-1 gap-2 rounded-full "
                                        onClick={() => tokenpopup(1)}
                                    >
                                        <div>
                                            {selectedTokenDatato?.image_to ? (
                                                <Image
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
                                                : "Select Token"}
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
                                                inputValue(e?.target);
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
                                                <Image
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
                                    className={` px-3 py-2 w-full rounded-md text-xl bg-indigo-600 ${selectedTokenDatato?.input_from
                                            ? " bg-opacity-50"
                                            : "bg-opacity-10"
                                        }`}
                                >
                                    Swap
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#1c1c1c] shadow-blue-700 shadow-sm p-3 rounded-2xl w-[45vh] ">
                        <div className=" space-y-5">
                            <div className="flex justify-between items-center py-2 ">
                                <div className="text-xl">Select Token</div>
                                <div
                                    onClick={() => setShowPopup(false)}
                                     className="cursor-pointer">
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
                <div className="dropdown-container relative">
                  <button
                    className="dropdown-toggle focus:outline-none"
                    onClick={toggleDropdown}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
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
                    <div className="dropdown absolute bg-gray-800 rounded-lg py-2 mt-1 w-48 md:min-w-fit z-10">
                      <ul>
                        {NetworkData.map((item, index) => (
                          <div key={index}>
                            <li
                              onClick={() => handleOptionClick(item.name)}
                              classNameName="flex items-center py-2 px-4 cursor-pointer hover:bg-gray-700"
                            >
                              <Image
                                src={item.img}
                                alt={item.name}
                                classNameName="h-16 w-16 mr-2" // Adjust size as needed
                              />
                              <span classNameName="text-white">{item.name}</span>
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
                        </div>
                        {Tokendata ? <div className="h-[60vh] overflow-y-auto ">
                            {Tokendata?.filter((token) =>
                                token.name.toLowerCase().includes(searchTerm.toLowerCase())
                            ).map((token, index) => (
                                <div
                                    key={index}
                                    className="flex gap-3 justify-start items-center mx-5 py-2 cursor-pointer"
                                    onClick={() => selectToken(token)}
                                >
                                    <Image
                                        src={token.image}
                                        alt={token.name}
                                        height={50}
                                        width={50}
                                        className="rounded-full"
                                    />
                                    <div className="flex gap-2">
                                        <p className="font-semibold">{token.name} </p>
                                        <p className="text-gray-200">
                                            ({token.symbol.toUpperCase()})
                                        </p>
                                    </div> 
                                </div>
                            ))}
                        </div> : null}

                    </div>
                </div>
            )}
        </>
    );
};

export default Swap;


// "use client"
// import React, { useEffect } from 'react'
// import { ApolloClient } from 'apollo-client'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
// import { useQuery } from '@apollo/react-hooks'
// import gql from 'graphql-tag'

// export const client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
//   }),
//   fetchOptions: {
//     mode: 'no-cors',
//   },
//   cache: new InMemoryCache(),
// })

// const DAI_QUERY = gql`
//   query tokens($tokenAddress: Bytes!) {
//     tokens(where: { id: $tokenAddress }) {
//       derivedETH
//       totalLiquidity
//     }
//   }
// `

// const ETH_PRICE_QUERY = gql`
//   query bundles {
//     bundles(where: { id: "1" }) {
//       ethPrice
//     }
//   }
// `

// function Swap() {
//   const { loading: ethLoading, data: ethPriceData } = useQuery(ETH_PRICE_QUERY)
//   const { loading: daiLoading, data: daiData } = useQuery(DAI_QUERY, {
//     variables: {
//       tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
//     },
//   })

//   const daiPriceInEth = daiData && daiData.tokens[0].derivedETH
//   const daiTotalLiquidity = daiData && daiData.tokens[0].totalLiquidity
//   const ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice

//   return (
//     <div>
//       <div>
//         Dai price:{' '}
//         {ethLoading || daiLoading
//           ? 'Loading token data...'
//           : '$' +
//             // parse responses as floats and fix to 2 decimals
//             (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(2)}
//       </div>
//       <div>
//         Dai total liquidity:{' '}
//         {daiLoading
//           ? 'Loading token data...'
//           : // display the total amount of DAI spread across all pools
//             parseFloat(daiTotalLiquidity).toFixed(0)}
//       </div>
//     </div>
//   )
// }

// export default Swap