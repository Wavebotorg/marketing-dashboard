"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../public/assets/profile.png";
import { useSearch } from "../../components/contexts/SearchContext"; //search
import { formatDistanceToNow } from "date-fns";
import { Tooltip as ReactTooltip } from "react-tooltip";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import Pagination from "../Pagination/Pagination";

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
 

  const [selectedLeaderboard, setSelectedLeaderboard] = useState("referral");
const [refrealList,setRefrealList] = useState([])
const fetchLeaderboardData = async () => {
  if (selectedLeaderboard === "referral") {
    await refrealLeader();
  } else {
    await defiLeader();
  }
};
 const refrealLeader= async () => {
    await axiosInstanceAuth
      .get("/leaderBoardList")
      .then((res) => {
        const myData = res?.data?.leaderboard;
        console.log("🚀 ~ .then ~ myData:", myData)
        setRefrealList(myData|| []);
        
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };


  const [defiList,setDefiList] = useState([])
 const defiLeader= async () => {
    await axiosInstanceAuth
      .get("/transactionBoardList")
      .then((res) => {
        const myData = res?.data?.userTransactionCount                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ;
        console.log("🚀 ~ .then ~ myData:", myData)
        setDefiList(myData|| []);
        
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };


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
  const currentLeaderboard = selectedLeaderboard === "referral" ? refrealList : defiList;
  const filteredData = currentLeaderboard?.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.points.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const visibleData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className=" 2xl:pl-64 xl:pl-64 md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto">
      <div className="xl:flex my-10 xl:ml-32 xl:mr-[90px]  gap-6 lg:ml-3 lg:mr-6 md:ml-0 md:mr-6 ml-5 xl:space-y-0 space-y-4 mr-5">
        <div className="w-full">
          <p className="text-[#1788FB]  text-2xl  md:text-3xl font-medium w-auto  ">
            Leader Board
          </p>
          <div className="flex gap-4 my-4">
            <button
              className={`px-4 py-2 rounded ${selectedLeaderboard === "referral" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
              onClick={() => setSelectedLeaderboard("referral")}
            >
              Referral Leaderboard
            </button>
            <button
              className={`px-4 py-2 rounded ${selectedLeaderboard === "defi" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
              onClick={() => setSelectedLeaderboard("defi")}
            >
              Defi Leaderboard
            </button>
          </div>
          <div className="">
            <div className="mt-6 rounded-lg overflow-auto">
              <div className="bg-[#1C1C1C] h-full overflow-y-auto text-white  overflow-auto rounded-xl ">
                  {/* for with points and recent join user data show */}
                <table className="w-full">
                  <thead className="sticky top-0 leader-color shadow-2xl ">
                    <tr
                      className="  text-[#CECECE]   bg-[#1C1C1C]  "
              
                    >
                        {selectedLeaderboard === "referral" ? (
                          <>
                       
                      <th
                        scope="col"
                        style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                        className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                        className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                      >
                        Invited by
                      </th>
                      <th
                        scope="col"
                        style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                        className="px-4 py-3 text-center text-base font-medium   whitespace-nowrap"
                      >
                       Referall of leader board
                      </th>
                      </>
                        ): (
                          <>
                            <th
                              scope="col"
                              style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                              className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                              className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                              className="px-4 py-3 text-center text-base font-medium whitespace-nowrap"
                            >
                              Total Transactions
                            </th>
                            <th
                              scope="col"
                              style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                              className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                            >
                              Total Transfer Token
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
                                {leader?.totalTransferToken}
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
          <div className="mt-6 rounded-lg overflow-hidden w-full table-container xl:mt-20">
            <div className="bg-[#1C1C1C] h-[40rem] overflow-y-auto text-white xl:block md:grid md:grid-cols-2 ">
              {allRecentUser?.length > 0 ? (
                allRecentUser.map((d, index) => (
                  <div key={index} className="">
                    <div className="md:p-4 p-3">
                      <div className="flex gap-2">
                        <div className="w-[2.5rem] sm:[1.5rem]">
                          <Image
                            src={img}
                            alt="Picture of the author"
                            className="rounded-full"
                          />
                        </div>
                        <div className="lg:text-base text-[#ffffffe0]  text-sm">
                          <div className="flex gap-2">
                            <p>{d?.name}</p>
                            <p className="text-[#6B6B6B]">
                              {formatDistanceToNow(new Date(d?.createdAt), {
                                addSuffix: true,
                              })}
                            </p>
                          </div>
                          <div
                            data-tooltip-id={`tooltip-${index}`}
                            className=""
                          >
                            <p className="text-nowrap ">
                              Invited by {truncateEmail(d?.email)}
                            </p>
                          </div>
                          <ReactTooltip
                            id={`tooltip-${index}`}
                            place="bottom-end"
                            effect="solid"
                            variant="info"
                          >
                            {/* Display full email in the tooltip */}
                            <span>{d?.email}</span>
                          </ReactTooltip>
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
