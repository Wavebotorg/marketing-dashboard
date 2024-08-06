"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img from "../../../public/assets/profile.png";
import { useSearch } from "../../components/contexts/SearchContext"; //search
import { formatDistanceToNow } from "date-fns";
import { Tooltip as ReactTooltip } from "react-tooltip";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import Pagination from "../Pagination/Pagination";
import { useWallet } from "../../components/contexts/WalletContext";
import axiosInstance from "../../apiInstances/axiosInstance";
import { IoChevronDownCircleOutline } from "react-icons/io5";

//for show email structure
const truncateEmail = (email) => {
  if (email.length < 20) {
    // Show full email if length is greater than 50
    return email;
  } else {
    // Show truncated email if length is 50 or less
    const truncatedEmail = `${email.slice(0, 10)}...${email.slice(-10)}`;
    return truncatedEmail;
  }
};

const LeaderBoard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLeaderboard, setSelectedLeaderboard] = useState("referral");
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [refrealList, setRefrealList] = useState([]);
  const fetchLeaderboardData = async () => {
    if (selectedLeaderboard === "referral") {
      await refrealLeader();
    } else {
      await defiLeader();
    }
  };
  const refrealLeader = async () => {
    await axiosInstance
      .get("/leaderBoardList")
      .then((res) => {
        const myData = res?.data?.leaderboard;
        console.log("🚀 ~ .then ~ myData:", myData);
        setRefrealList(myData || []);
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };
  function shortenName(name) {
    return name.length > 4 ? name.slice(0, 4) + "..." : name;
  }

  const [defiList, setDefiList] = useState([]);
  /*  const defiLeader = async () => {
    await axiosInstance
      .get("/transactionBoardList")
      .then((res) => {
        const myData = res?.data?.data;
        console.log("🚀 ~ .then ~ myData:", myData);


      /*   console.log("Daily Leaderboard:", myData?.daily);
        console.log("Weekly Leaderboard:", myData?.weekly);
        console.log("Monthly Leaderboard:", myData?.monthly);
        console.log("All Time Leaderboard:", myData?.allTime); 
        setDefiList(myData || []);
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  }; */

  const defiLeader = async (period) => {
    await axiosInstance
      .get("/transactionBoardList")
      .then((res) => {
        const myData = res?.data?.data;
        console.log("🚀 ~ .then ~ myData:", myData);

        switch (period) {
          case "daily":
            console.log("Daily Leaderboard:", myData?.daily);
            setDefiList(myData?.daily || []);
            break;
          case "weekly":
            console.log("Weekly Leaderboard:", myData?.weekly);
            setDefiList(myData?.weekly || []);
            break;
          case "monthly":
            console.log("Monthly Leaderboard:", myData?.monthly);
            setDefiList(myData?.monthly || []);
            break;
          case "all":
            console.log("Monthly Leaderboard:", myData?.allTime);
            setDefiList(myData?.allTime || []);
            break;
          default:
            console.log("Daily Leaderboard:", myData?.allTime);
            setDefiList(myData?.allTime || []);
        }
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };

  useEffect(() => {
    defiLeader(selectedPeriod);
  }, [selectedPeriod]);

  useEffect(() => {
    fetchLeaderboardData();
  }, [selectedLeaderboard]);
  const [allRecentUser, setAllRecentUser] = useState([]);

  // Get All recenet user show
  const getAdmindata = async () => {
    await axiosInstanceAuth
      .get("recentUsers")
      .then((res) => {
        const myData = res?.data;
        setAllRecentUser(myData?.data || []);
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };

  useEffect(() => {
    getAdmindata();
  }, []);

  //pagination
  const { searchQuery } = useSearch(); //search
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //search
  const currentLeaderboard =
    selectedLeaderboard === "referral" ? refrealList : defiList;
  /*   const filteredData = currentLeaderboard?.filter(
    (coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    // coin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // coin.points.toLowerCase().includes(searchQuery.toLowerCase())
  ); */
  const filteredData = Array.isArray(currentLeaderboard)
    ? currentLeaderboard.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];
  const visibleData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const { walletAddress, email, solanaAddress, isNavbar, setIsNavbar } =
    useWallet();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (period) => {
    setSelectedPeriod(period);
    setIsOpen(false); // Close the dropdown after selection
  };

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      style={{
        marginLeft: isNavbar && window.innerWidth >= 1440 ? "12%" : "0",
      }}
      className="  md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto transition-all duration-500 ease-in-out"
    >
      {/* 2xl:pl-64 xl:pl-64 */}
      <div className="xl:flex    gap-6 lg:ml-2 lg:mr-6 md:ml-0 md:mr-6 ml-5 xl:space-y-0 space-y-4 mr-5">
        {/* xl:ml-32 xl:mr-[90px] */}
        <div className="w-full ">
          <p className="text-[#1788FB]  text-2xl  md:text-3xl font-medium w-auto  ">
            Leader Board
          </p>
          {/*     <div className="flex gap-4 my-4">
            <button
              className={`px-4 py-2 rounded ${
                selectedLeaderboard === "referral"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => {
                setSelectedLeaderboard("referral");
                setShowDropdown(false);
                setSelectedPeriod("all");
              }}
            >
              Referral Leaderboard
            </button>
            <button
              className={`px-4 py-2 rounded ${
                selectedLeaderboard === "defi"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => {
                setSelectedLeaderboard("defi");
                setShowDropdown(true);
              }}
            >
              Defi Leaderboard
            </button>
            {selectedLeaderboard === "defi" && showDropdown && (
              <div className="">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="rounded-md w-full px-4 py-2 text-white bg-gray-600"
                >
                  <option className="bg-gray-800" value="all">
                    All
                  </option>
                  <option className="bg-gray-800" value="daily">
                    Daily
                  </option>
                  <option className="bg-gray-800" value="weekly">
                    Weekly
                  </option>
                  <option className="bg-gray-800" value="monthly">
                    Monthly
                  </option>
                </select>
                <div>
                  {/* Show the selected period *
                  {selectedPeriod === "all"}
                  {selectedPeriod === "daily"}
                  {selectedPeriod === "weekly"}
                  {selectedPeriod === "monthly"}
                </div>
              </div>
            )}
          </div> */}
          <div className="flex flex-col gap-4 my-4 sm:flex-row">
            {/* Buttons */}
            <div className="flex  gap-4 mb-2">
              <button
                className={`px-4 py-2 rounded ${
                  selectedLeaderboard === "referral"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => {
                  setSelectedLeaderboard("referral");
                  setShowDropdown(false);
                  setSelectedPeriod("all");
                }}
              >
                Referral Leaderboard
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  selectedLeaderboard === "defi"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => {
                  setSelectedLeaderboard("defi");
                  setShowDropdown(true);
                }}
              >
                Defi Leaderboard
              </button>
            </div>

            {/* {selectedLeaderboard === "defi" && showDropdown && (
        <div className="xsm:w-28 ">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="rounded-md w-full px-4 py-2 text-white bg-gray-600 cursor-pointer"
          >
            <option className="bg-gray-800" value="all">
              All
            </option>
            <option className="bg-gray-800" value="daily">
              Daily
            </option>
            <option className="bg-gray-800" value="weekly">
              Weekly
            </option>
            <option className="bg-gray-800" value="monthly">
              Monthly
            </option>
          </select>
          <div className="mt-2 text-white">
           
            {selectedPeriod === "all" }
            {selectedPeriod === "daily" }
            {selectedPeriod === "weekly" }
            {selectedPeriod === "monthly" }
          </div>
        </div>
      )}  */}

            {selectedLeaderboard === "defi" && showDropdown && (
              <div className="xsm:w-28">
                <div
                  ref={dropdownRef}
                  className="dropdown inline-block relative "
                >
                  <button
                    onClick={toggleDropdown}
                    className="text-white bg-gray-600 font-semibold py-2 px-4 rounded inline-flex items-center"
                  >
                    <span className="mr-2">
                      {selectedPeriod.charAt(0).toUpperCase() +
                        selectedPeriod.slice(1)}
                    </span>
                    <IoChevronDownCircleOutline
                      className={`h-4 w-4 ${
                        isOpen
                          ? "rotate-180 transition-all ease-in-out duration-300"
                          : "transition-all ease-in-out duration-300"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <ul className="dropdown-menu z-50 cursor-pointer absolute text-white pt-1 bg-gray-800 rounded-md mt-1">
                      <li>
                        <a
                          onClick={() => handleOptionClick("all")}
                          className="rounded-t  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => handleOptionClick("daily")}
                          className=" hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          Daily
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => handleOptionClick("weekly")}
                          className=" hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          Weekly
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => handleOptionClick("monthly")}
                          className=" hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          Monthly
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="">
            <div className=" rounded-lg overflow-auto">
              <div className="bg-[#1C1C1C] h-full overflow-y-auto text-white  overflow-auto rounded-xl ">
                {/* for with points and recent join user data show */}
                <table className="w-full">
                  <thead className="sticky top-0 leader-color shadow-2xl ">
                    <tr className="  text-[#CECECE]   bg-[#1C1C1C]  ">
                      {selectedLeaderboard === "referral" ? (
                        <>
                          <th
                            scope="col"
                            style={{
                              backgroundColor: "rgba(23, 136, 251, 0.26)",
                            }}
                            className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                          >
                            Name
                          </th>
                          {/* <th
                            scope="col"
                            style={{
                              backgroundColor: "rgba(23, 136, 251, 0.26)",
                            }}
                            className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                          >
                            Invited by
                          </th> */}
                          <th
                            scope="col"
                            style={{
                              backgroundColor: "rgba(23, 136, 251, 0.26)",
                            }}
                            className="px-4 py-3 text-center text-base font-medium   whitespace-nowrap"
                          >
                            Referall of leader board
                          </th>
                        </>
                      ) : (
                        <>
                          <th
                            scope="col"
                            style={{
                              backgroundColor: "rgba(23, 136, 251, 0.26)",
                            }}
                            className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                          >
                            Name
                          </th>
                          {/* <th
                            scope="col"
                            style={{
                              backgroundColor: "rgba(23, 136, 251, 0.26)",
                            }}
                            className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                          >
                            Email
                          </th> */}
                          <th
                            scope="col"
                            style={{
                              backgroundColor: "rgba(23, 136, 251, 0.26)",
                            }}
                            className="px-4 py-3 text-center text-base font-medium whitespace-nowrap"
                          >
                            Total Transactions
                          </th>
                          <th
                            scope="col"
                            style={{
                              backgroundColor: "rgba(23, 136, 251, 0.26)",
                            }}
                            className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                          >
                            {/* Total Transfer Token */}
                            Total Volume Transfer
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>

                  <tbody>
                    {visibleData?.length > 0 ? (
                      visibleData.map((leader, index) => (
                        <tr key={index}>
                          {selectedLeaderboard === "referral" ? (
                            <>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.name}
                              </td>
                              {/* <td className="px-6 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.email}
                              </td> */}
                              <td className="px-4 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.referrals}
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.name}
                              </td>
                              {/* <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.email}
                              </td> */}
                              <td className="px-4 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.totalTransaction}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {/* {Math.floor(leader?.totalTransferToken)}*/}
                                {leader?.totalTransferToken.toFixed(2)}
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
        </div>
        {/* for recent join user data show */}
        <div className="">
          <p className="text-[#1788FB]   text-2xl  md:text-3xl font-medium max-w-screen-lg ">
            Recent Joins
          </p>
          <div className="mt-6 rounded-lg overflow-hidden w-full  xl:mt-20">
            <div className="bg-[#1C1C1C] scrollbar  table-container overflow-y-auto text-white xl:block md:grid md:grid-cols-2 ">
              {allRecentUser?.length > 0 ? (
                allRecentUser.map((d, index) => (
                  <div key={index} className="">
                    <div className="md:p-4 p-3 ">
                      <div className="flex gap-2">
                        <div className="w-[2.5rem] sm:[1.5rem]">
                          <Image
                            src={img}
                            alt="Picture of the author"
                            className="rounded-full"
                          />
                        </div>
                        <div className="lg:text-base text-[#ffffffe0] text-sm">
                          <div key={index} className="flex gap-2">
                            {/* Tooltip for Name */}
                            <div
                              data-tooltip-id={`tooltip-name-${index}`}
                              className="flex gap-2"
                            >
                              <ReactTooltip
                                id={`tooltip-name-${index}`}
                                place="top-end"
                                effect="solid"
                                variant="info"
                              >
                                <span>{d.name}</span>
                              </ReactTooltip>

                              {shortenName(d.name)}
                            </div>
                            <p className="text-[#6B6B6B]">
                              {formatDistanceToNow(new Date(d.createdAt), {
                                addSuffix: true,
                              })}
                            </p>
                          </div>
                          <div>
                            <p
                              data-tooltip-id={`tooltip-email-${index}`}
                              className="text-nowrap"
                            >
                              Invited by {truncateEmail(d.email)}
                            </p>
                            <ReactTooltip
                              id={`tooltip-email-${index}`}
                              place="bottom-end"
                              effect="solid"
                              variant="info"
                            >
                              <span>{d.email}</span>
                            </ReactTooltip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="md:w-[360px]  xsm:w-auto  text-center mt-60 font-bold text-lg">
                  No data found. Please log in first.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeaderBoard;
