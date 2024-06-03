"use client";
import React, { useState, useEffect } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Pagination from "../Pagination/Pagination";
import { useSearch } from "../../components/contexts/SearchContext";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
const Referral = () => {
  // const [allCoinData, setAllCoinData] = useState([
  //   {
  //     block: "45",
  //     date: "2:00:66",
  //     wallet: "$04",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth12",
  //     status: "true",
  //   },
  //   {
  //     block: "33",
  //     date: "2:00:66",
  //     wallet: "$75",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth52",
  //     status: "true",
  //   },
  //   {
  //     block: "78",
  //     date: "2:00:66",
  //     wallet: "$66",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth42",
  //     status: "true",
  //   },
  //   {
  //     block: "90",
  //     date: "2:00:66",
  //     wallet: "$55",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth22",
  //     status: "true",
  //   },
  //   {
  //     block: "34",
  //     date: "2:00:66",
  //     wallet: "$33",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth52",
  //     status: "true",
  //   },
  //   {
  //     block: "23",
  //     date: "2:00:66",
  //     wallet: "$22",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth02",
  //     status: "true",
  //   },
  //   {
  //     block: "02",
  //     date: "2:00:66",
  //     wallet: "$44",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "239",
  //     date: "2:00:66",
  //     wallet: "$505",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth62",
  //     status: "true",
  //   },
  //   {
  //     block: "34",
  //     date: "2:00:66",
  //     wallet: "$05",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth90",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   {
  //     block: "73",
  //     date: "2:00:66",
  //     wallet: "$95",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth45",
  //     status: "true",
  //   },
  //   {
  //     block: "88",
  //     date: "2:00:66",
  //     wallet: "$15",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth23",
  //     status: "true",
  //   },
  //   {
  //     block: "203",
  //     date: "2:00:66",
  //     wallet: "$52",
  //     swapcost: "566",
  //     refreward: "true",
  //     transaction: "eth56",
  //     status: "true",
  //   },
  //   // Add more data as needed
  // ]);

  //pagination
  const { searchQuery } = useSearch(); //search
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  //search
  // const filteredData = userReferals.filter(
  //   (coin) =>
  //     coin.wallet.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     coin.block.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     coin.transaction.toLowerCase().includes(searchQuery.toLowerCase())
  //   // Add more fields for search filtering if needed
  // );
  // const visibleData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [userReferals, setUserReferals] = useState([]);
  const [level2, setLevel2] = useState([]);
  const [level3, setLevel3] = useState([]);
  const [level4, setLevel4] = useState([]);
  const [level5, setLevel5] = useState([]);

  const [level2ref, setLevel2ref] = useState([]);
  const [level3ref, setLevel3ref] = useState([]);
  const [level4ref, setLevel4ref] = useState([]);
  const [level5ref, setLevel5ref] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    return `${formattedDate}`;

    // const formattedTime = date.toLocaleTimeString();
    // return `${formattedDate}, ${formattedTime}`;
  };
  useEffect(() => {
    const fetchUserReferals = async () => {
      try {
        const response = await axiosInstanceAuth.get("/getUserReferals");
        console.log("🚀 ~ fetchUserReferals ~ response:", response);
        setUserReferals(response?.data?.data?.level1);
        setLevel2(response?.data?.data?.level2);
        setLevel3(response?.data?.data?.level3);
        setLevel4(response?.data?.data?.level4);
        setLevel5(response?.data?.data?.level5);

        const referred2Names = response?.data?.data?.level2?.map(
          (d) => d?.referred?.name
        );
        setLevel2ref(referred2Names);
        const referred3Names = response?.data?.data?.level3?.map(
          (d) => d?.referred?.name
        );
        setLevel3ref(referred3Names);

        const referred4Names = response?.data?.data?.level4?.map(
          (d) => d?.referred?.name
        );
        setLevel4ref(referred4Names);
        const referred5Names = response?.data?.data?.level5?.map(
          (d) => d?.referred?.name
        );
        setLevel5ref(referred5Names);
      } catch (error) {
        console.error("Error fetching user referals:", error);
      }
    };

    fetchUserReferals();
  }, []);

  return (
    // <div className="2xsm:pl-6452xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-0 mx-auto ">
    <div className="2xl:pl-64 xl:pl-64 md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto ">
      {/* <div className="flex flex-col xl:justify-center xl:ml-16 xl:mr-12 lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-10"> */}
      <div className="flex flex-col xl:justify-center  xl:ml-32 xl:mr-[92px]  lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-10">
        <h1 className="text-[#1788FB]  text-2xl  md:text-3xl   text-center md:text-left font-medium max-w-screen-lg ">
          Referral
        </h1>
        <div className="flex flex-col md:flex-row gap-6 mt-5">
          <div className="rounded-lg text-[#CECECE]  p-4 bg-[#1C1C1C] flex items-center gap-2">
            <IoIosInformationCircleOutline size={20} className="mt-[2px]" />
            <p>Paginated Results</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mt-5">
          <div className="rounded-lg px-4 py-2 lg:py-4 text-[#CECECE]   bg-[#1C1C1C]">
            <p className=" text-nowrap text-[#EAEAEA] ">Total Referrals</p>
            <p className="text-blue-400 text-2xl mt-1 w-[178px] ">--</p>
          </div>
          <div className="rounded-lg px-4 py-2 lg:py-4 text-[#CECECE]   bg-[#1C1C1C] ">
            <p className=" text-nowrap text-[#EAEAEA] ">Transactions</p>
            <p className="text-blue-400 text-2xl mt-1 w-[178px] ">--</p>
          </div>
          <div className="rounded-lg px-4 py-2 lg:py-4 text-[#CECECE]  bg-[#1C1C1C] ">
            <p className=" text-nowrap text-[#EAEAEA] ">Total Rewards</p>
            <p className="text-blue-400 text-2xl mt-1 w-[178px] ">--ETH</p>
          </div>
          <div className="rounded-lg px-4 py-2 lg:py-4 text-[#CECECE]   bg-[#1C1C1C] ">
            <p className=" text-nowrap text-[#EAEAEA] ">Claimable Rewards</p>
            <p className="text-blue-400 text-2xl mt-1 w-[178px] ">--ETH</p>
          </div>
        </div>
        <div className=" mt-7 font-medium text-2xl mb-4 mb:mb-0">
          <p>Referral Reward History</p>
        </div>

        <div className="mt-4 hidden lg:block">
          <div className="rounded-lg">
            <h1 className="text-center text-5xl mb-3">Level 1</h1>
            <div className="bg-[#1C1C1C] table-container text-white  h-auto overflow-auto rounded-lg">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr
                    style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                    className=" text-[#CECECE]  "
                  >
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  "
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Joining Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {userReferals?.length > 0 &&
                    userReferals?.map((d, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div> {d?.name}</div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d?.email}
                          </td>

                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                              <div>{formatDate(d?.createdAt)} </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="xsm:hidden md:hidden lg:block"> */}
        {/* <Pagination
          totalItems={userReferals.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        /> */}

        <div className="mt-4 hidden lg:block">
          <div className="rounded-lg">
            <h1 className="text-center text-5xl mb-3">Level 2</h1>
            <div className="bg-[#1C1C1C] table-container text-white  h-auto overflow-auto rounded-lg">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr
                    style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                    className=" text-[#CECECE]  "
                  >
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  "
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Refferal BY
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Joining Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {level2?.length > 0 &&
                    level2?.map((d, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div> {d?.name}</div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d?.email}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {level2ref[index]}
                          </td>

                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                              <div>{formatDate(d?.createdAt)} </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-4 hidden lg:block">
          <div className="rounded-lg">
            <h1 className="text-center text-5xl mb-3">Level 3</h1>
            <div className="bg-[#1C1C1C] table-container text-white  h-auto overflow-auto rounded-lg">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr
                    style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                    className=" text-[#CECECE]  "
                  >
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  "
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Refferal BY
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Joining Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {level3?.length > 0 &&
                    level3?.map((d, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div> {d?.name}</div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d?.email}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {level3ref[index]}
                          </td>

                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                              <div>{formatDate(d?.createdAt)} </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-4 hidden lg:block">
          <div className="rounded-lg">
            <h1 className="text-center text-5xl mb-3">Level 4</h1>
            <div className="bg-[#1C1C1C] table-container text-white  h-auto overflow-auto rounded-lg">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr
                    style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                    className=" text-[#CECECE]  "
                  >
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  "
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Refferal BY
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Joining Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {level4?.length > 0 &&
                    level4?.map((d, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div> {d?.name}</div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d?.email}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {level4ref[index]}
                          </td>

                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                              <div>{formatDate(d?.createdAt)} </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-4 hidden lg:block">
          <div className="rounded-lg">
            <h1 className="text-center text-5xl mb-3">Level 5</h1>
            <div className="bg-[#1C1C1C] table-container text-white  h-auto overflow-auto rounded-lg">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr
                    style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                    className=" text-[#CECECE]  "
                  >
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  "
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Refferal BY
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Joining Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {level5?.length > 0 &&
                    level5?.map((d, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
                            <div> {d?.name}</div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {d?.email}
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {level5ref[index]}
                          </td>

                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                              <div>{formatDate(d?.createdAt)} </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Referral;
