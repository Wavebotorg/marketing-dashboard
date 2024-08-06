"use client";
import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import { useSearch } from "../../components/contexts/SearchContext";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import axiosInstance from "../../apiInstances/axiosInstance";

// import Loader from "react-js-loader";
import Loader from "react-js-loader";
import { useWallet } from "../../components/contexts/WalletContext";
import axios from "axios";
// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";

const ReferralTable = ({ level, data, refData, searchQuery }) => {
  // console.log("🚀 ~ ReferralTable ~ level:", level)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //For Format Date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    return `${formattedDate}`;
  };

  //For Search
  const filteredData = data?.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.wallet &&
        item.wallet.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.block &&
        item.block.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.transaction &&
        item.transaction.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const paginatedData = filteredData;

  // if (filteredData?.length === 0) {
  //   return null;
  // }

  return (
    <>
      <div className="mt-4 hidden lg:block">
        <div className="rounded-lg mb-10">
          <h1 className="text-center text-3xl mb-3">{`Level ${level}`}</h1>
          <div className="bg-[#1C1C1C] table-container text-white h-auto overflow-auto rounded-lg">
            {/* for 2xl ,xl and lg size  */}
            <table className="w-full">
              <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                <tr
                  style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                  className="text-[#CECECE]"
                >
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-base font-medium"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                  >
                    Email
                  </th>
                  {level > 1 && (
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                    >
                      Referral BY
                    </th>
                  )}
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                  >
                    Joining Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  {paginatedData?.length > 0 ? (
                    paginatedData.map((d, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white">
                          <div>{d?.name}</div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                          {d?.email}
                        </td>
                        {level > 1 && (
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                            {refData[startIndex + index]}
                          </td>
                        )}
                        <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                          <div className="flex items-center justify-center gap-5">
                            <div>{formatDate(d?.createdAt)}</div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white">
                        <div>--</div>
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                        --
                      </td>
                      {level > 1 && (
                        <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                          --
                        </td>
                      )}
                      <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                        <div className="flex items-center justify-center gap-5">
                          <div>--</div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {filteredData?.length > itemsPerPage && (
        <Pagination
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
      {/* for md and sm size */}
      <h1 className="text-center text-3xl mb-3 mt-5 lg:hidden block">{`Level ${level}`}</h1>
      {paginatedData?.length > 0 ? (
        paginatedData.map((d, index) => (
          <div key={index} className="lg:hidden mt-4 mb-4 ">
            <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
              <div className="w-full  ">
                <div className="">
                  <>
                    <div className=" border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Username</div>

                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        {d?.name}
                      </div>
                    </div>
                    <div className=" flex border-b border-[#494949] justify-between">
                      <div className="py-2  pl-4 font-semibold">Email</div>

                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        {d?.email}
                      </div>
                    </div>

                    {level > 1 && (
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          Referral BY
                        </div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {refData[startIndex + index]}
                        </div>
                      </div>
                    )}
                    <div className=" flex justify-between">
                      <div className="py-2  pl-4 font-semibold">
                        Joining Date
                      </div>

                      <div className=" py-2 pr-4 pl-4">
                        {formatDate(d?.createdAt)}
                      </div>
                    </div>

                    <div></div>
                  </>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="lg:hidden mt-4 mb-4 ">
          <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
            <div className="w-full  ">
              <div className="">
                <>
                  <div className=" border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold">Username</div>

                    <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                      --
                    </div>
                  </div>
                  <div className=" flex border-b border-[#494949] justify-between">
                    <div className="py-2  pl-4 font-semibold">Email</div>

                    <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                      --
                    </div>
                  </div>

                  {level > 1 && (
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">
                        Referral BY
                      </div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        --
                      </div>
                    </div>
                  )}
                  <div className=" flex justify-between">
                    <div className="py-2  pl-4 font-semibold">Joining Date</div>

                    <div className=" py-2 pr-4 pl-4">--</div>
                  </div>

                  <div></div>
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



const Referral = () => {
  const { searchQuery } = useSearch();
  const [userReferals, setUserReferals] = useState([]);
  const [level2, setLevel2] = useState([]);
  const [level3, setLevel3] = useState([]);
  const [level4, setLevel4] = useState([]);
  const [level5, setLevel5] = useState([]);

  const [level2ref, setLevel2ref] = useState([]);
  const [level3ref, setLevel3ref] = useState([]);
  const [level4ref, setLevel4ref] = useState([]);
  const [level5ref, setLevel5ref] = useState([]);

  const [countLevel1, setCountLevel1] = useState(0);
  const [countLevel2, setCountLevel2] = useState(0);
  const [countLevel3, setCountLevel3] = useState(0);
  const [countLevel4, setCountLevel4] = useState(0);
  const [countLevel5, setCountLevel5] = useState(0);

  const [loading, setLoading] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(1); // State to manage current level

  useEffect(() => {
    const fetchUserReferals = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.post("/getUserReferals", {
          email: localStorage.getItem("email"),
        });
        console.log("🚀 ~ fetchUserReferals ~ response:", response);

        const level1Data = response?.data?.data?.level1 || [];
        const level2Data = response?.data?.data?.level2 || [];
        const level3Data = response?.data?.data?.level3 || [];
        const level4Data = response?.data?.data?.level4 || [];
        const level5Data = response?.data?.data?.level5 || [];

        setUserReferals(level1Data);
        setLevel2(level2Data);
        setLevel3(level3Data);
        setLevel4(level4Data);
        setLevel5(level5Data);

        setLevel2ref(level2Data.map((d) => d?.referred));
        setLevel3ref(level3Data.map((d) => d?.referred));
        setLevel4ref(level4Data.map((d) => d?.referred));
        setLevel5ref(level5Data.map((d) => d?.referred));

        setCountLevel1(level1Data.length);
        setCountLevel2(level2Data.length);
        setCountLevel3(level3Data.length);
        setCountLevel4(level4Data.length);
        setCountLevel5(level5Data.length);
      } catch (error) {
        console.error("Error fetching user referals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserReferals();
  }, []);

  const { walletAddress, email, solanaAddress, isNavbar, setIsNavbar } =
    useWallet();

  const handleLevelClick = (level) => {
    setCurrentLevel(level); // Update current level state based on user click
  };


  const counts = {
    1: countLevel1,
    2: countLevel2,
    3: countLevel3,
    4: countLevel4,
    5: countLevel5,
  };

  return (
   
    <div
      style={{
        marginLeft: isNavbar && window.innerWidth >= 1440 ? "12%" : "0 ",
      }}
      className=" md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto  transition-all duration-500 ease-in-out "
    >
      <div className="flex flex-col xl:justify-center  lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-10">
        <div className="font-medium mb-4 text-3xl text-[#1788FB]">
          <p>Referral </p>
        </div>
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-5 lg:w-[56rem] mb-10">
          {[1, 2, 3, 4, 5].map((level) => {
          
              const userCount = counts[level] || 0;

           

            return (
              <div
                key={level}
                className={`rounded-lg px-4 py-2 md:py-4 bg-[#1C1C1C] cursor-pointer ${
                  currentLevel === level ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => handleLevelClick(level)}
              >
                <p className="text-[#CECECE]  font-light">{`Level ${level}`}</p>
                <p className="text-blue-400 text-2xl mt-1 w-[178px]">
                  {userCount} Users
                </p>
              </div>
            );
          })}
        </div>
   {/*       {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader type="spinner-cub" bgColor="#1788FB" size={40} />
        </div>
      )} */}

        {/* Render the ReferralTable component based on currentLevel */}
        {[1, 2, 3, 4, 5].map(
          (level) =>
            currentLevel === level && (
              <ReferralTable
                key={level}
                level={level}
                data={
                  level === 1
                    ? userReferals
                    : level === 2
                    ? level2
                    : level === 3
                    ? level3
                    : level === 4
                    ? level4
                    : level5
                }
                refData={
                  level === 2
                    ? level2ref
                    : level === 3
                    ? level3ref
                    : level === 4
                    ? level4ref
                    : level5ref
                }
                searchQuery={searchQuery}
              />
            )
        )}
      </div>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader type="spinner-cub" bgColor="#1788FB" size={40} />
        </div>
      )}
    </div>
  );
};

export default Referral;

