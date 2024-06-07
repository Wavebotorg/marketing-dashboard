"use client";
import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import { useSearch } from "../../components/contexts/SearchContext";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
// import Loader from "react-js-loader";
import Loader from "react-js-loader";

const ReferralTable = ({ level, data, refData, searchQuery }) => {
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

  const paginatedData = filteredData?.slice(startIndex, endIndex);

  if (filteredData?.length === 0) {
    return null;
  }

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
                {paginatedData?.length > 0 &&
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
                  ))}
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
        <div className="text-center text-3xl mt-4">No data</div>
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

  const [loading, setLoading] = useState(true);

  //Api for Fetch Data
  useEffect(() => {
    const fetchUserReferals = async () => {
      setLoading(true);
      try {
        const response = await axiosInstanceAuth.get("/getUserReferals");
        console.log("🚀 ~ fetchUserReferals ~ response:", response);
        setUserReferals(response?.data?.data?.level1 || []);
        setLevel2(response?.data?.data?.level2 || []);
        setLevel3(response?.data?.data?.level3 || []);
        setLevel4(response?.data?.data?.level4 || []);
        setLevel5(response?.data?.data?.level5 || []);

        setLevel2ref(response?.data?.data?.level2?.map((d) => d?.referred));
        setLevel3ref(response?.data?.data?.level3?.map((d) => d?.referred));
        setLevel4ref(response?.data?.data?.level4?.map((d) => d?.referred));
        setLevel5ref(response?.data?.data?.level5?.map((d) => d?.referred));
      } catch (error) {
        console.error("Error fetching user referals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserReferals();
  }, []);

  return (
    <div className="2xl:pl-64 xl:pl-64 md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto">
      <div className="flex flex-col xl:justify-center xl:ml-32 xl:mr-[92px] lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-10">
        <div className="font-medium mb-4 text-3xl text-[#1788FB]">
          <p>Referral </p>
        </div>
        {/* pass this Ref. table to above ReferralTable to set Data in Table  */}
        <div className="">
          <ReferralTable
            level={1}
            data={userReferals}
            searchQuery={searchQuery}
          />
          <ReferralTable
            level={2}
            data={level2}
            refData={level2ref}
            searchQuery={searchQuery}
          />
          <ReferralTable
            level={3}
            data={level3}
            refData={level3ref}
            searchQuery={searchQuery}
          />
          <ReferralTable
            level={4}
            data={level4}
            refData={level4ref}
            searchQuery={searchQuery}
          />
          <ReferralTable
            level={5}
            data={level5}
            refData={level5ref}
            searchQuery={searchQuery}
          />
        </div>
        <div>
          <div className="fixed xl:pl-40 top-0 left-0 w-full h-full flex items-center justify-center">
            {loading && (
              <Loader type="spinner-cub" bgColor="#1788FB" size={40} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
