"use client";
import React, { useState, useEffect, useRef } from "react";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import { useSearch } from "../../components/contexts/SearchContext";
import Pagination from "../Pagination/Pagination";
import { MdOutlineContentCopy } from "react-icons/md";
import eth from "../../../public/assets/tokenimg/eth.png";
import arbitrum from "../../../public/assets/tokenimg/arbitrum.png";
import optimism from "../../../public/assets/tokenimg/optimism.png";
import poly from "../../../public/assets/tokenimg/poly.png";
import SOL from "../../../public/assets/tokenimg/SOL.png";
import BNB from "../../../public/assets/tokenimg/BNB.png";
import avalanche from "../../../public/assets/tokenimg/avalanche.png";
import CELO from "../../../public/assets/tokenimg/CELO.png";
import BURST from "../../../public/assets/tokenimg/BURST.png";
import Image from "next/image";
import { MdDone } from "react-icons/md";
import { toast } from "react-toastify";

const SwapHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  //pagination
  const { searchQuery } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  //search
  const filteredData = transactions.filter(
    (coin) =>
      coin.txid.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (coin.amount &&
        coin.amount
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase()))
  );

  const visibleData = filteredData.slice(startIndex, endIndex);

  // console.log("🚀 ~ SwapHistory ~ visibleData:", visibleData);

  const NetworkData = [
    { name: "Ethereum", chainid: "1", img: eth, desCode: "0x1" },
    { name: "Arbitrum", chainid: "42161", img: arbitrum, desCode: "0xa4b1" },
    { name: "Optimism", chainid: "10", img: optimism, desCode: "0xa" },
    { name: "Polygon", chainid: "137", img: poly, desCode: "0x89" },
    { name: "Solana", chainid: "19999", img: SOL, desCode: "" },
    { name: "BNB Chain", chainid: "56", img: BNB, desCode: "0x38" },
    { name: "Avalanche", chainid: "43114", img: avalanche, desCode: "0xa86a" },
    { name: "Celo", chainid: "42220", img: CELO, desCode: "" },
    { name: "Blast", chainid: "238", img: BURST, desCode: "" },
  ];
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const [copiedFromId, setCopiedFromId] = useState(null);
  const [copiedToId, setCopiedToId] = useState(null);
  const [copiedTransactionId, setCopiedTransactionId] = useState(null);

  const copyToClipboard = (text, type, _id) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // console.log("Copied to clipboard:", text);

        if (type === "from") {
          setCopiedFromId(_id);
          setTimeout(() => setCopiedFromId(null), 500);
        } else if (type === "to") {
          setCopiedToId(_id);
          setTimeout(() => setCopiedToId(null), 500);
        } else if (type === "Transaction Hash") {
          setCopiedTransactionId(_id);
          setTimeout(() => setCopiedTransactionId(null), 500);
        }
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  //for format id
  const formatTransactionID = (txid) => {
    if (txid.length <= 10) return txid; // If the transaction ID is too short, return as is
    const firstSix = txid.slice(0, 6); // Get the first 6 characters
    const lastFour = txid.slice(-4); // Get the last 4 characters
    return `${firstSix}...${lastFour}`; // Concatenate with "..." in between
  };
  //for format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    return `${formattedDate}`;

    // const formattedTime = date.toLocaleTimeString();
    // return `${formattedDate}, ${formattedTime}`;
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    // Call handleNetworkSelect with "Ethereum" as the default network name
    handleNetworkSelect("Ethereum");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  // Function to handle network selection
  const handleNetworkSelect = async (networkName) => {
    // console.log("Selected network:", networkName);
    const userId = localStorage.getItem("userId");
    if (!userId) {
      return toast.error("please uthenticate yourself!!");
    }

    // Find the network object from NetworkData array based on its name
    const selectedNetwork = NetworkData.find(
      (network) => network.name === networkName
    );

    // If the network is found, set its desCode as the selectedNetwork state
    if (selectedNetwork) {
      // console.log(
      //   "🚀 ~ handleNetworkSelect ~ selectedNetwork:",
      //   selectedNetwork
      // );
      setSelectedNetwork(selectedNetwork);

      try {
        // Fetch transactions for the selected network
        const response = await axiosInstanceAuth.post("/transactions", {
          id: userId,
          chainId: Number(selectedNetwork.chainid),
        });

        const data = response?.data?.transactions || [];
        setTransactions(data);
        // console.log("EVM transactions:", data);
      } catch (error) {
        console.error("Error fetching EVM transactions:", error);
      }
    } else {
      console.error("Network not found");
    }

    setShowDropdown(false);
  };
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
    <div className="2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto ">
      <div className=" my-10 xl:ml-28 xl:mr-[90px]  gap-6 lg:ml-3 lg:mr-6 md:ml-0 md:mr-6 ml-5 xl:space-y-0 space-y-4 mr-5">
        <div className="mt-10 flex">
          <div className="flex">
            <button
              onClick={handleDropdownToggle}
              // onClick={() => getTransactions("/evmTransactions")}
              // onClick={getEvmTransactions}
              className="bg-blue-500 rounded-lg px-2 py-1 mr-4 flex items-center gap-2 relative"
            >
              Transactions
            </button>

            <div className="" ref={dropdownRef}>
              {showDropdown && (
                <div className="dropdown animate-popup absolute bg-gray-800 rounded-lg py-2 mt-9 w-36 md:min-w-fit z-10 ml-[-80px]">
                  <ul>
                    {NetworkData.map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-center py-2 px-4 cursor-pointer hover:bg-gray-700 ${
                          selectedNetwork && selectedNetwork.name === item.name
                            ? "bg-gray-700" // Add background color for selected item
                            : ""
                        }`}
                        onClick={() => {
                          handleNetworkSelect(item.name);
                          // Call getEvmTransactions after selecting the network
                        }}
                      >
                        <Image
                          src={item.img}
                          alt={item.name}
                          className="h-6 w-6 mr-2" // Adjust size as needed
                        />
                        <span className="text-white">{item.name}</span>
                        {selectedNetwork &&
                          selectedNetwork.name === item.name && (
                            <MdDone className="ml-2 text-green-500" /> // Render tick mark if the item is selected
                          )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* <button
            // onClick={() => getTransactions("/solanaTransactions")}
            onClick={getSolanaTransactions}
            className="bg-blue-500 rounded-lg px-2 py-1"
          >
            Solana
          </button> */}
        </div>

        <div className="pt-8 hidden lg:block  pb-3">
          <div className="rounded-lg">
            <div className="bg-[#1C1C1C] text-white h-auto overflow-auto rounded-lg">
              <table className="w-full">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl ">
                  <tr className="text-[#CECECE]">
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                    >
                      To
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                    >
                      Transaction Hash
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                    >
                      Transaction Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {visibleData?.map((transaction, index) => (
                    <tr key={`transaction-${index}`}>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                        {startIndex + index + 1}
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                        {formatTransactionID(transaction?.from)}
                        <button
                          className="text-xl text-[#828282] align-middle pb-1.5"
                          onClick={() =>
                            copyToClipboard(
                              transaction?.from,
                              "from",
                              transaction?._id
                            )
                          }
                        >
                          <MdOutlineContentCopy
                            size={12}
                            className="ml-1.5 items-center"
                          />
                        </button>
                        {transaction?._id === copiedFromId && (
                          <span className="absolute  bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                            Copied!
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                        {formatTransactionID(transaction?.to)}
                        <button
                          className="text-xl text-[#828282] align-middle pb-1.5"
                          onClick={() =>
                            copyToClipboard(
                              transaction?.to,
                              "to",
                              transaction?._id
                            )
                          }
                        >
                          <MdOutlineContentCopy
                            size={12}
                            className="ml-1.5 items-center"
                          />
                        </button>
                        {transaction?._id === copiedToId && (
                          <span className="absolute  bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                            Copied!
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white">
                        {transaction?.amount?.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                        {formatTransactionID(transaction?.txid)}
                        <button
                          className="text-xl text-[#828282] align-middle pb-1.5"
                          onClick={() =>
                            copyToClipboard(
                              transaction?.txid,
                              "Transaction Hash",
                              transaction?._id
                            )
                          }
                        >
                          <MdOutlineContentCopy
                            size={12}
                            className="ml-1.5 items-center"
                          />
                        </button>
                        {transaction?._id === copiedTransactionId && (
                          <span className="absolute  bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                            Copied!
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                        {formatDate(transaction?.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
        {visibleData?.length > 0 ? (
          visibleData.map((d, index) => (
            <div key={index} className="lg:hidden mt-4 ">
              <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
                <div className="w-full  ">
                  <div className="">
                    <>
                      <div className=" border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">From</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {formatTransactionID(d?.from)}
                          <button
                            className="text-xl text-[#828282] align-middle pb-1.5"
                            onClick={() =>
                              copyToClipboard(d?.from, "from", d?._id)
                            }
                          >
                            <MdOutlineContentCopy
                              size={12}
                              className="ml-1.5 items-center"
                            />
                          </button>
                          {d?._id === copiedFromId && (
                            <span className="absolute  bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                              Copied!
                            </span>
                          )}
                        </div>
                      </div>
                      <div className=" flex border-b border-[#494949] justify-between">
                        <div className="py-2  pl-4 font-semibold">To</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {formatTransactionID(d?.to)}
                          <button
                            className="text-xl text-[#828282] align-middle pb-1.5"
                            onClick={() => copyToClipboard(d?.to, "to", d?._id)}
                          >
                            <MdOutlineContentCopy
                              size={12}
                              className="ml-1.5 items-center"
                            />
                          </button>
                          {d?._id === copiedToId && (
                            <span className="absolute  bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                              Copied!
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> Amount</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {d?.amount?.toFixed(2)}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          {" "}
                          Transaction Hash
                        </div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {" "}
                          {formatTransactionID(d?.txid)}
                          <button
                            className="text-xl text-[#828282] align-middle pb-1.5"
                            onClick={() =>
                              copyToClipboard(
                                d?.txid,
                                "Transaction Hash",
                                d?._id
                              )
                            }
                          >
                            <MdOutlineContentCopy
                              size={12}
                              className="ml-1.5 items-center"
                            />
                          </button>
                          {d?._id === copiedTransactionId && (
                            <span className="absolute xsm:pl-1 bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                              Copied!
                            </span>
                          )}
                        </div>
                      </div>
                      <div className=" flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          Transaction Date
                        </div>
                        <div className=" py-2 pr-4 pl-4">
                          {formatDate(d?.createdAt)}
                        </div>
                      </div>

                      {/* <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          UpdatedAt
                        </div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4">
                          {formatDate(d?.updatedAt)}
                        </div>
                      </div> */}

                      <div></div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-3xl mt-4">No data</div>
        )}
      </div>
    </div>
  );
};

export default SwapHistory;
