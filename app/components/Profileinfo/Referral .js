import React, { useState, useEffect } from "react";

import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";

const Referral = () => {
  const [userReferals, setUserReferals] = useState([]);
  console.log("🚀 ~ Referral ~ userReferals:", userReferals);

  useEffect(() => {
    const fetchUserReferals = async () => {
      try {
        const response = await axiosInstanceAuth.get("/getUserReferals");
        setUserReferals(response?.data?.dataRef);
      } catch (error) {
        console.error("Error fetching user referals:", error);
      }
    };

    fetchUserReferals();
  }, []);
  return (
    <>
      <div className="pt-8 hidden lg:block  pb-3">
        <div className="rounded-lg">
          <div className="bg-[#1C1C1C] text-white h-auto overflow-auto rounded-lg">
            <table className="w-full">
              <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl ">
                <tr
                  style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
                  className="text-[#CECECE]"
                >
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-base font-medium"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-base font-medium"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-base font-medium whitespace-nowrap"
                  >
                    Name
                  </th>
                </tr>
              </thead>

              <tbody>
                {userReferals.map((referal, index) => (
                  <tr key={`referal-${index}`}>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                      {index + 1}
                    </td>

                    <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white">
                      {referal.email}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white">
                      {referal.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        {userReferals?.length > 0 ? (
          userReferals.map((referal, index) => (
            <div key={index} className="lg:hidden mt-4 ">
              <div className="w-full mx-auto bg-[#1C1C1C] shadow-md rounded-md">
                <div className="w-full">
                  <div className="">
                    <div className=" flex border-b border-[#494949] justify-between">
                      <div className="py-2 pl-4 font-semibold">No.</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        {index + 1}
                      </div>
                    </div>
                    <div className=" flex border-b border-[#494949] justify-between">
                      <div className="py-2 pl-4 font-semibold">Email</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        {referal.email}
                      </div>
                    </div>
                    <div className=" flex  justify-between">
                      <div className="py-2 pl-4 font-semibold">Name</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        {referal.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-3xl mt-4">No data</div>
        )}
      </div>
    </>
  );
};

export default Referral;
