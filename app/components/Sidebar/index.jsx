"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../../../public/assets/wave.png";
import Homemenu from "../../../public/assets/sidebar/home.png";
import Holder from "../../../public/assets/sidebar/holder.png";
import Leaderboard from "../../../public/assets/sidebar/leader_board.png";
import Portfolio from "../../../public/assets/sidebar/portfolio.png";
import Referral from "../../../public/assets/sidebar/referral.png";
import Tokendashboard from "../../../public/assets/sidebar/token_dashboard.png";
import Volumestats from "../../../public/assets/sidebar/volume_stats.png";
import WatchList from "../../../public/assets/sidebar/watchList.png";
import Discover from "../../../public/assets/sidebar/discover.png";
import Apecurdocs from "../../../public/assets/sidebar/apecurdocs.png";
import Officialwebsite from "../../../public/assets/sidebar/officialwebsite.png";
import Sidebaruserlogo from "../../../public/assets/sidebar/sidebaruserlogo.png";
import Arrow from "../../../public/assets/sidebar/arraowsidebar.png";
import Twitter from "../../../public/assets/sidebar/twitter.png";
import { usePathname } from "next/navigation";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";

import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";

const Sidebar = () => {
  const router = useRouter();
  const handleMenuItemClick = (link) => {
    router.push(link); // Navigate to the specified link
    setOpen(false); // Close the sidebar after clicking a menu item
  };

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const getPath = usePathname();
  useEffect(() => {
    const storedActive = localStorage.getItem("Dashboard");
    setActive(storedActive || getPath);
  }, [getPath]);
  const menu = [
    {
      id: 1,
      link: "/",
      icon: Homemenu,
      name: "Home",
    },
    {
      id: 2,
      link: "/tokendashboard",
      icon: Tokendashboard,
      name: "Token Dashboard",
    },
    {
      id: 3,
      link: "/holder",
      icon: Holder,
      name: "Holder",
    },
    {
      id: 4,
      link: "/referral",
      icon: Referral,
      name: "Referral",
    },
    {
      id: 5,
      link: "/leaderboard",
      icon: Leaderboard,
      name: "Leader Board",
    },
    {
      id: 6,
      link: "/portfolio",
      icon: Portfolio,
      name: "Portfolio",
    },
    {
      id: 7,
      link: "/volumestats",
      icon: Volumestats,
      name: "Volume Stats",
    },
  ];

  const menubottom = [
    {
      id: 1,
      link: "/watchList",
      icon: WatchList,
      name: "Watch List",
    },
    {
      id: 2,
      link: "/discover",
      icon: Discover,
      name: "Discover",
    },
    {
      id: 3,
      link: "/apecurdocs",
      icon: Apecurdocs,
      name: "Apecurdocs",
    },
    {
      id: 4,
      link: "/officialwebsite",
      icon: Officialwebsite,
      name: "Officialwebsite",
    },
  ];

  const [allUser, setAllUser] = useState({});
const Token = localStorage.getItem("Token")
  const getUserdata = async () => {
    await axiosInstanceAuth
      .get("getUserProfile")
      .then((res) => {
        const myData = res?.data?.data;
        setAllUser(myData || []);

        console.log("getUserProfile---->", myData);
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };

  useEffect(() => {
    getUserdata();
  }, [Token]);
  return (
    <div
      className={`${
        getPath === "/login" ||
        getPath === "/signup" ||
        getPath === "/forgotpassword" ||
        getPath === "/passwordverify" ||
        getPath === "/resetpassword"
          ? "hidden"
          : "  "
      }`}
    >
      <Disclosure as="nav">
        <Disclosure.Button className="absolute  lg:hidden top-4 left-4 inline-flex items-center peer justify-center rounded-md p-2 pt-7  text-white   focus:outline-none focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu className="block h-6 w-6  " aria-hidden="true" />
        </Disclosure.Button>

        <div
          className={`p-6 sm:pl-0 md:p-2 xsm:p-2 w-1/2 md:w-1/3 sm:w-1/3 h-screen bg-[#1C1C1C] z-20 fixed top-0  ${
            open ? "left-0 w-[20%] " : "-left-96 "
          } lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200  `}
        >
          {/* Header */}
          <div className="2xl:p-8 md:p-7 sm:p-5 xsm:p-4  pb-10 flex justify-center ">
            <Image
              src={Logo}
              alt=""
              className="h-[50] w-[132] sm:w-[100] sm:h-[20] "
            />
          </div>
          {/* Menu */}
          <div className="my-4">
            {menu.map((item) => (
              <div
                key={item.id}
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#1788FB]  text-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                onClick={() => handleMenuItemClick(item.link)}
              >
                <Image src={item.icon} alt={item.name} width={24} height={24} />
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
          {/* Bottom Menu */}
          <div className="border-b border-stone-500 mt-7" />
          <div className="my-4">
            {menubottom.map((item) => (
              <div
                key={item.id}
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#1788FB] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                onClick={() => handleMenuItemClick(item.link)}
              >
                <Image src={item.icon} alt={item.name} width={24} height={24} />
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-white 2xl:mt-48 md:mt-24 xsm:mt-20 ">
            <div className="flex gap-2">
              <div>
                <Image
                  src={Sidebaruserlogo}
                  alt="Sidebaruserlogo"
                  width="20px"
                  height="10px"
                />
              </div>

              <div>
                <div className="flex">
                  <h1>{allUser.name}</h1>
                  <span>
                    <Image src={Arrow} alt="arrow" width="10px" height="10px" />
                  </span>
                </div>

                <p className="text-xs">Invited by {allUser.email}</p>
                <div className="flex mt-2">
                  <Image
                    src={Twitter}
                    alt="twitter"
                    width="10px"
                    height="10px"
                    className="mr-2"
                  />
                  <Image
                    src={Twitter}
                    alt="twitter"
                    width="10px"
                    height="10px"
                    className="mr-2"
                  />
                  <Image
                    src={Twitter}
                    alt="twitter"
                    width="10px"
                    height="10px"
                    className="mr-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

export default Sidebar;
