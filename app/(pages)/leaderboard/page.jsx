"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../assets/profile.PNG";

import { formatDistanceToNow } from "date-fns";

import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import axiosInstance from "../../apiInstances/axiosInstance";

const LeaderBoard = () => {
  const students = [
    {
      Rank: "1",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    {
      Rank: "2",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    {
      Rank: "3",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    {
      Rank: "4",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    {
      Rank: "3",
      Name: "FewHODL_Twitter",
      Invitedby: "invite_EJRN6",
      Points: "224,466,796",
    },
    // {
    //   Rank: "4",
    //   Name: "FewHODL_Twitter",
    //   Invitedby: "invite_EJRN6",
    //   Points: "224,466,796",
    // },
    // Add more student data as needed
  ];

  const [allRecentUser, setAllRecentUser] = useState([]);
  console.log("🚀 ~ LeaderBoard ~ allRecentUser:", allRecentUser);

  // Get All Admin Show
  const getAdmindata = async () => {
    await axiosInstanceAuth
      .get("recentUsers")
      .then((res) => {
        const myData = res?.data;
        setAllRecentUser(myData?.data || []);
        console.log("recentUsers---->", myData);
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };

  useEffect(() => {
    getAdmindata();
  }, []);

  return (
    <>
      <div className="xl:flex md:justify-between gap-5 md:container md:mx-auto my-10 xl:space-y-0 space-y-5 container">
        <div className="w-full">
          <p className="text-blue-400 text-3xl md:text-4xl font-medium w-auto  ">
            Leader Board
          </p>
          {/* <div className="md:container">
            <div className="mt-6 rounded-lg w-96 overflow-auto">
              <div className="bg-[#1C1C1C] text-white">
                <div className="flex lg:grid grid-cols-10 bg-[#1788FB] ">
                  <div className="px-4 py-2 col-span-1">Rank</div>
                  <div className="px-4 py-2 col-span-3">Name</div>
                  <div className="px-4 py-2 col-span-3">Invited by</div>
                  <div className="px-4 py-2 col-span-3">Points</div>
                </div>

                {students.map((student, index) => (
                  <div key={index} className="grid grid-cols-10">
                    <div className="px-4 py-2 col-span-1">{student.Rank}</div>
                    <div className="px-4 py-2 col-span-3">{student.Name}</div>
                    <div className="px-4 py-2 col-span-3">
                      {student.Invitedby}
                    </div>
                    <div className="px-4 py-2 col-span-3">{student.Points}</div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <div className="md:container">
            <div className="mt-6 rounded-lg overflow-auto">
              <div className="bg-[#1C1C1C]  text-white  overflow-auto rounded-lg">
                <table className="w-full  ">
                  <thead className="sticky top-0 bg-[#1788FB] shadow-2xl">
                    <tr className=" text-[#FFFFFF]  ">
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-base font-medium  "
                      >
                        Rank
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                      >
                        Invited by
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                      >
                        Points
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {students?.length > 0 &&
                      students?.map((student, index) => (
                        <>
                          <tr key={index}>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                              {student.Rank}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                              {student.Name}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                              {student.Invitedby}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                              {student.Points}
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <div className="container ">
            <div className="rounded-lg">
              <div className="bg-[#1C1C1C]  text-white  overflow-auto rounded-lg">
                <table className="w-full  ">
                  <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                    <tr className=" text-[#CECECE]  ">
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-base font-medium  "
                      >
                        Rank
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                      >
                        Invited by
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                      >
                        Points
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {students?.length > 0 &&
                      students?.map((student, index) => (
                        <>
                          <tr key={index}>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                              {student.Rank}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                              {student.Name}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                              {student.Invitedby}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                              {student.Points}
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
        </div>

        <div className="">
          <p className="text-blue-400 text-3xl md:text-4xl font-medium max-w-screen-lg w-96 ">
            Recent Joins
          </p>
          <div className="md:container">
            <div className="mt-6 rounded-lg overflow-hidden">
              <div className="bg-[#1C1C1C] text-white xl:block md:grid md:grid-cols-2 ">
                {/* Mapping over students data */}
                {allRecentUser?.length > 0 &&
                  allRecentUser.map((d, index) => (
                    <>
                      <div key={index} className="">
                        <div className="md:p-4 p-3">
                          <div className="flex gap-2">
                            <div>
                              <Image
                                src={img}
                                alt="Picture of the author"
                                className="rounded-full md:w-10 w-9"
                              />
                            </div>
                            <div className="lg:text-base text-sm">
                              <div className="flex gap-2">
                                <p>{d.name}</p>
                                <p className="text-[#6B6B6B]">
                                  {formatDistanceToNow(new Date(d.createdAt), {
                                    addSuffix: true,
                                  })}
                                </p>
                              </div>

                              <p className="text-nowrap">
                                Invited by {d.email}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
