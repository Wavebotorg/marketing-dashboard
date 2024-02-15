"use client";
import React from "react";
import HomeUser from "../public/assets/homeuser.png";
import Image from "next/image";
import Market from "./(pages)/Market/page";

const Page = () => {
  const userData = {
    userId: "95968227",
    vipLevel: "Regular User",
    userType: "Personal",
    following: 0,
    followers: 0,
  };

  return (
    <div className="text-white container">
      <div className="flex">
        <div className="flex items-center">
          <Image src={HomeUser} width="20px" height="10px" alt="homeuser" />
          <span className="ml-5 mr-20">Anonymous-User-810b1</span>
        </div>
        <div className="border-r border-[#828282] "></div>
        <table className=" w-full mt-4 text-[#828282] text-center">
          <thead>
            <tr>
              <th className=" ">User Id</th>
              <th className=" ">VIP Level</th>
              <th className=" ">User Type</th>
              <th className=" ">Following</th>
              <th className=" ">Followers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" py-2">95968227</td>
              <td className=" py-2">Regular User</td>
              <td className=" py-2">Personal</td>
              <td className=" py-2">0</td>
              <td className=" py-2">0</td>
            </tr>
          </tbody>
        </table>
        {/*  <table className="mt-4 text-[#828282] flex justify-between content-between ml-5 w-full ">
          <tbody className="">
            <tr className="flex justify-between ">
              <td className="4/12">User Id</td>
              <td className="2/12">VIP Level</td>
              <td className="3/12">User Type</td>
              <td className="2/12">Following</td>
              <td className="1/12">Followers</td>
            </tr>
            <tr>
              {Object.values(userData).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table> */}
      </div>
      <div className="mt-10 bg-[#1C1C1C] rounded-2xl">
        <Market />
      </div>
    </div>
  );
};

export default Page;

