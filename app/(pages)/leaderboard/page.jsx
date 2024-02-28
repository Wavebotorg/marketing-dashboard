"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../assets/profile.PNG";

import { formatDistanceToNow } from "date-fns";
import { Tooltip as ReactTooltip } from "react-tooltip";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import axiosInstance from "../../apiInstances/axiosInstance";

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

          <div className="md:container ">
            <div className="mt-6 rounded-lg overflow-auto">
              <div className="bg-[#1C1C1C]  text-white  overflow-auto rounded-lg ">
                <table className="w-full">
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
        </div>

        <div className="">
          <p className="text-blue-400 text-3xl md:text-4xl font-medium max-w-screen-lg w-96 ">
            Recent Joins
          </p>
          <div className="md:container">
            <div className="mt-6 rounded-lg overflow-hidden w-full">
              <div className="bg-[#1C1C1C] text-white xl:block md:grid md:grid-cols-2 ">
                {/* Mapping over students data */}
                {allRecentUser?.length > 0 &&
                  allRecentUser.map((d, index) => (
                    <>
                      <div key={index} className="">
                        <div className="md:p-4 p-3">
                          <div className="flex gap-2">
                            <div className="">
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

                              {/* <p
                                className="text-nowrap "
                                title={
                                  hoveredEmail === d.email
                                    ? d.email
                                    : truncateEmail(d.email)
                                }
                              >
                                Invited by {truncateEmail(d.email)}
                              </p> */}

                              {/* <h1 data-tooltip-id="my-tooltip-1">
                                Invited by {truncateEmail(d.email)}
                              </h1>
                              <ReactTooltip
                                id="my-tooltip-1"
                                place="top"
                                content={d.email}
                              /> */}

                              <div
                                data-tooltip-id={`tooltip-${index}`}
                                className=""
                              >
                                <p className="text-nowrap ">
                                  Invited by {truncateEmail(d.email)}
                                </p>
                              </div>
                              <ReactTooltip
                                id={`tooltip-${index}`}
                                place="bottom-end"
                                effect="solid"
                                variant="info"
                              >
                                {/* Display full email in the tooltip */}
                                <span>{d.email}</span>
                              </ReactTooltip>
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
