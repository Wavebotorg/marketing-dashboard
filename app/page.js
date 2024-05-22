"use client";
import React, { useState, useEffect } from "react";

import HomeUser from "../public/assets/homeuser.png";
import Image from "next/image";
import { GrFormNext } from "react-icons/gr";
import { PiCopySimple } from "react-icons/pi";
import { MdOutlineContentCopy } from "react-icons/md";
import Market from "./(pages)/market/page";
import Login from "../app/(pages)/login/page";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
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

  const [copied, setCopied] = useState(false);
  console.log("🚀 ~ copied:", copied);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userData?.userId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };
  // useEffect(() => {

  //   const token = localStorage.getItem('Token');
  //   if (token) {
  //     router.push('/'); // Change '/home' to your actual home page route
  //   } else {
  //     router.push('/login'); // Change '/login' to your actual login page route
  //   }
  // }, []);

  return (
    <div className="2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto ">
      <div className="text-white flex flex-col xl:justify-center     xl:ml-28 xl:mr-[90px] lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-5">
        {/* <div className="text-white flex flex-col xl:justify-center xl:ml-16 xl:mr-12 lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-10"> */}

        <div className="mx-3  md:flex gap-5 ">
          <div className="flex items-center mb-5 md:mb-0">
            <Image src={HomeUser} width="20px" height="10px" alt="homeuser" />
            <span className="ml-5 mr-16 text-wrap md:text-nowrap">
              Anonymous-User-810b1
            </span>
          </div>

          <div className="lg:container lg:mx- md:mx-6 mx-3  lg:border-l-2 lg:border-[#ffffff] lg:border-opacity-15 border-0 ">
            <table className="responsive-table home-head-title ">
              <thead className="text-[#828282] md:text-[#828282]">
                <tr className="   ">
                  <th scope="col">User Id</th>
                  <th scope="col ">VIP Level</th>
                  <th scope="col">User Type</th>
                  <th scope="col">Following</th>
                  <th scope="col ">Followers</th>
                </tr>
              </thead>

              <tbody>
                {/* {!userData?.length > 0 ? (
              <tr>
                <td data-title="User Id">_</td>
                <td data-title="VIP Level">_</td>
                <td data-title="User Type">_</td>s
                <td data-title="Following">_</td>
                <td data-title="Followers">_</td>
              </tr>
            ) : ( */}
                {userData?.map((items) => (
                  <>
                    <tr className="md:pl-2 ">
                      <td data-title="User Id" className="">
                        {items?.userId}
                        <button
                          onClick={copyToClipboard}
                          className="text-xl text-[#828282] align-middle pb-1.5 "
                        >
                          <MdOutlineContentCopy className="ml-1.5 items-center" />
                        </button>
                        {copied && (
                          <span className="text-sm text-green-500 absolute top-full left-0">
                            Copied!
                          </span>
                        )}
                      </td>
                      <td data-title="VIP Level" className="flex items-center ">
                        <span className="">
                          {items?.vipLevel}

                          <button className=" text-xl  text-[#828282] align-middle  pb-0.6 ">
                            <GrFormNext />
                          </button>
                        </span>
                      </td>
                      {/* <td
                        data-title="VIP Level"
                        className="flex items-center  xsm:mx-1"
                      >
                        <span className="md:ml-[2rem]">
                          {items?.vipLevel}

                          <button className=" text-xl  text-[#828282] align-middle pb-0.6 ">
                            <GrFormNext />
                          </button>
                        </span>
                      </td> */}
                      <td data-title="User Type" className=" ">
                        {items?.userType}
                      </td>
                      <td data-title="Following" className=" ">
                        {items?.following}
                      </td>
                      <td
                        data-title="Followers"
                        className=" flex items-center pt-5"
                      >
                        {items?.followers}
                        <button className=" text-xl pt-[0.2rem] text-[#828282] align-middle pb-1.5 ">
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
        <div className="mt-5  rounded-2xl ">
          <Market />
        </div>
      </div>
    </div>
  );
};

export default Page;
