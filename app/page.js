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
import { useWallet } from "./components/contexts/WalletContext";
const Page = () => {
  const userData = [
    {
      userId: "95968227",
      vipLevel: "Regular User",
      userType: "Personal",
      following: 0,
      followers: 0,
    },
  ];

  //for copy value
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (ID, index) => {
    navigator.clipboard.writeText(ID);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000); // Reset copied state after 2 seconds
  };

  const { walletAddress, email, solanaAddress, isNavbar, setIsNavbar } =
    useWallet();

  const formatTransactionID = (Id) => {
    if (!Id || Id.length <= 10) return Id;
    const firstSix = Id.slice(0, 5);
    const lastFour = Id.slice(-5);
    return `${firstSix}...${lastFour}`;
  };

  // let Email = localStorage.getItem("email");

  // let ID = localStorage.getItem("userId");

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () =>
      setIsLargeScreen(window.matchMedia("(min-width: 1024px)").matches);

    updateScreenSize(); // Initial check

    window.addEventListener("resize", updateScreenSize); // Listen to resize events

    return () => window.removeEventListener("resize", updateScreenSize); // Clean up
  }, []);

  return (
    <div
      style={{
        marginLeft: isNavbar && window.innerWidth >= 1440 ? "12%" : "0",
      }}
      className="  md:pl-5 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto transition-all duration-500 ease-in-out"
    >



      {/* 2xl:pl-64 xl:pl-64 */}
      <div className="text-white flex flex-col xl:justify-center      lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-5">
        {/* xl:ml-32 xl:mr-[90px] */}
        <div className="mx-3  md:flex md:gap-20 lg:gap-0 ">
          <div className="flex items-center mb-5 md:mb-0">
            <Image src={HomeUser} width="20px" height="10px" alt="homeuser" />
            <span className="ml-5 mr-16 text-wrap md:text-nowrap">
              {/* {Email} */}
              Anonymous-User-810b1
            </span>
          </div>

          <div className="lg:container  lg:mx-10 md:mx-6 mx-3  lg:border-l-2 lg:border-[#ffffff] lg:border-opacity-15 border-0 ">
            <table className="responsive-table home-head-title">
              <thead className="text-[#828282] md:text-[#828282]">
                <tr>
                  <th scope="col">User Id</th>
                  <th scope="col">VIP Level</th>
                  <th scope="col">User Type</th>
                  <th scope="col">Following</th>
                  <th scope="col">Followers</th>
                </tr>
              </thead>

              <tbody>
                {userData?.map((items, index) => (
                  <tr key={index} className="md:pl-2">
                    <td data-title="User Id" className="">
                      {isLargeScreen ? (
                        <>
                          {/* {ID} */}
                          {items?.userId}
                          <button
                            onClick={() => copyToClipboard(ID)}
                            className="text-xl text-[#828282] align-middle pb-1.5"
                          >
                            <MdOutlineContentCopy className="ml-1.5 items-center" />
                          </button>
                          {copied === index && (
                            <span className="text-sm bg-white text-green-500 absolute top-full left-0">
                              Copied!
                            </span>
                          )}
                        </>
                      ) : (
                        <>
                          {/* {formatTransactionID(ID)} */}
                          {items?.userId}
                          <button
                            onClick={() => copyToClipboard(ID)}
                            className="text-xl text-[#828282] align-middle pb-1.5"
                          >
                            <MdOutlineContentCopy className="ml-1.5 items-center" />
                          </button>
                          {copied === index && (
                            <span className="text-sm bg-white text-green-500 absolute top-full left-0">
                              Copied!
                            </span>
                          )}
                        </>
                      )}
                    </td>

                    <td data-title="VIP Level" className="flex items-center">
                      <span className="ml-4">
                        {items.vipLevel}
                        <button className="text-xl text-[#828282] align-middle pb-0.6">
                          <GrFormNext />
                        </button>
                      </span>
                    </td>
                    <td data-title="User Type" className="">
                      {items.userType}
                    </td>
                    <td data-title="Following" className="">
                      {items.following}
                    </td>
                    <td
                      data-title="Followers"
                      className="flex items-center pt-5"
                    >
                      {items.followers}
                      <button className="text-xl pt-[0.2rem] text-[#828282] align-middle pb-1.5">
                        <GrFormNext />
                      </button>
                    </td>
                  </tr>
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