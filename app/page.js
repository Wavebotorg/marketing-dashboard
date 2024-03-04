"use client";
import React, { useEffect, useState } from "react";

import HomeUser from "../public/assets/homeuser.png";
import Image from "next/image";
import Market from "./(pages)/Market/page";
import { GrFormNext } from "react-icons/gr";
import { PiCopySimple } from "react-icons/pi";

const Page = () => {
  const userData = [
    {
      userId: "95968227",
      vipLevel: "Regular User",
      userType: "Personal",
      following: 0,
      followers: 0,
    },

    // {userId: "95968223",
    // vipLevel: "Regular User",
    // userType: "Personal",
    // following: 0,
    // followers: 0}
  ];

  return (
    <div className="text-white flex flex-col xl:justify-center xl:ml-16 xl:mr-12 lg:ml-2 lg:mr-5 ml-4 mr-2 mt-10">
      <div className="mx-3  md:flex gap-5 ">
        <div className="flex items-center mb-5 md:mb-0">
          <Image src={HomeUser} width="20px" height="10px" alt="homeuser" />
          <span className="ml-5 mr-5 text-wrap md:text-nowrap">
            Anonymous-User-810b1
          </span>
        </div>

        <div className="lg:container lg:mx-auto md:mx-5 mx-3  lg:border-l-2 lg:border-[#828282]  border-0 ">
          <table className="responsive-table border1 ">
            <thead className="text-[#828282] md:text-[#828282]">
              <tr className="   ">
                <th scope="col">User Id</th>
                <th scope="col ">VIP Level</th>
                <th scope="col" >User Type</th>
                <th scope="col">Following</th>
                <th scope="col ">Followers</th>
              </tr>
            </thead>

            <tbody>
              {/* {!userData?.length > 0 ? (
              <tr>
                <td data-title="User Id">_</td>
                <td data-title="VIP Level">_</td>
                <td data-title="User Type">_</td>
                <td data-title="Following">_</td>
                <td data-title="Followers">_</td>
              </tr>
            ) : ( */}
              {userData?.map((items) => (
                <>
                  <tr className="md:pl-2">
                    <td data-title="User Id" className="">
                      {items?.userId}
                      <button className="text-xl text-[#828282] align-middle pb-1.5 ">
                        <PiCopySimple className="" />
                      </button>
                    </td>
                    <td
                      data-title="VIP Level"
                      className="flex items-center  xsm:mx-1"
                    >
                      <span className="md:ml-[2rem] ">
                        {items?.vipLevel}

                        <button className=" text-xl  text-[#828282] align-middle pb-0.6 ">
                          <GrFormNext />
                        </button>
                      </span>
                    </td>
                    <td data-title="User Type" className=" ">
                      {items?.userType}

                    </td>
                    <td data-title="Following" className=" ">
                      {items?.following}
                    </td>
                    <td data-title="Followers" className=" flex items-center">
                      {items?.followers}
                      <button className=" text-xl  text-[#828282] align-middle pb-1.5 ">
                        <GrFormNext />
                      </button>{" "}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10  rounded-2xl ">
        <Market />
      </div>
    </div>
  );
};

export default Page;
