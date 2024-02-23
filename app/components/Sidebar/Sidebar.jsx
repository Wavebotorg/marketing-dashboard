"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa6";
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

import useEncryption from "@/app/components/useEncryption/index";
// import toast, { Toaster } from "react-hot-toast";
function Sidebar() {
  const router = useRouter();
  const { encryptData, decryptData } = useEncryption();

  const getdata = localStorage.getItem("details");
  const data = decryptData(getdata);
  console.log("🚀 ~ Navbar ~ data:", data);

  if (data?.code) {
    toast.success(data.message);
  }

  // useEffect(() => {
  //   const getdata = localStorage.getItem("details");
  //   const data = decryptData(getdata);
  //   // console.log("🚀 ~ Navbar ~ data:", data);

  //   if (data?.code && !localStorage.getItem("toastShown")) {
  //     toast.success(data.message);
  //     localStorage.setItem("toastShown", "true");
  //   }
  // }, []);

  const pathname = usePathname();
  // const { pathname } = location;
  const [isHover, setIsHover] = useState(null);
  const [isHover1, setIsHover1] = useState(null);
  const [isNavbar, setIsNavbar] = useState(false);
  const [isNavbar1, setIsNavbar1] = useState(false);
  const headerdata = [
    {
      id: 1,
      pathname: "/",
      icon: Homemenu,
      pagename: "Home",
    },
    {
      id: 2,
      pathname: "/tokendashboard",
      icon: Tokendashboard,
      pagename: "Token Dashboard",
    },
    {
      id: 3,
      pathname: "/holder",
      icon: Holder,
      pagename: "Holder",
    },
    {
      id: 4,
      pathname: "/referral",
      icon: Referral,
      pagename: "Referral",
    },
    {
      id: 5,
      pathname: "/leaderboard",
      icon: Leaderboard,
      pagename: "Leader Board",
    },
    {
      id: 6,
      pathname: "/portfolio",
      icon: Portfolio,
      pagename: "Portfolio",
    },
    {
      id: 7,
      pathname: "/volumestats",
      icon: Volumestats,
      pagename: "Volume Stats",
    },
  ];

  const headerbottom = [
    {
      id: 1,
      pathname: "/watchList",
      icon: WatchList,
      pagename: "Watch List",
    },
    {
      id: 2,
      pathname: "/discover",
      icon: Discover,
      pagename: "Discover",
    },
    {
      id: 3,
      pathname: "/apecurdocs",
      icon: Apecurdocs,
      pagename: "Apecurdocs",
    },
    {
      id: 4,
      pathname: "/officialwebsite",
      icon: Officialwebsite,
      pagename: "Officialwebsite",
    },
  ];
  const HoverStyle = (id) => {
    setIsHover(id);
  };
  const matchPath =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgotpassword" ||
    pathname === "/passwordverify" ||
    pathname === "/resetpassword";

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   !token && router.push("/login");
  // }, []);
  return (
    <div
      className={`!fixed !top-0 !left-0 bg-[#1C1C1C] ${
        matchPath ? "hidden" : "block"
      } `}
    >
      <div
        className={`sidebar z-30 ${
          isNavbar ? "w-72" : "w-[3rem] md:w-[3.5rem] lg:w-[4rem] xl:w-72"
        }`}
      >
        <div className="sidebar min-h-screen p-1 hover:shadow-lg">
          {/* <div className="sidebar min-h-screen lg:block hidden w-[3.35rem] overflow-hidden p-1 hover:w-52  hover:shadow-lg"> */}
          <div className="flex h-screen flex-col  overflow-y-auto">
            <div className="flex items-center justify-center">
              <div
                className={`xl:hidden text-3xl `}
                onClick={() => setIsNavbar(!isNavbar)}
              >
                {isNavbar === false ? (
                  <div className="mt-10 mx-auto cursor-pointer">
                    {" "}
                    <FaBars />{" "}
                  </div>
                ) : (
                  <div className=" mt-8 ml-3.5 cursor-pointer"> X </div>
                )}
              </div>
              <Image
                src={Logo}
                alt="wave-logo"
                className={`${
                  isNavbar === false ? "hidden xl:block" : "block"
                } mt-10 mx-auto`}
              />
            </div>
            <div>
              <ul className="flex flex-col justify-start mt-10 gap-1.5  tracking-wide !overflow-y-auto !overflow-x-hidden">
                {headerdata?.map((data) => (
                  <li key={data?.id} className="min-w-max">
                    <Link
                      href={data.pathname}
                      className={`${
                        (isHover && data.id === isHover) ||
                        data.pathname === pathname
                          ? "navHover"
                          : "border-l-2 border-transparent"
                      } flex md:px-2 lg:px-3  py-1.5 rounded-lg`}
                      onClick={() => setIsNavbar(false)}
                      onMouseEnter={() => HoverStyle(data?.id)}
                      onMouseLeave={() => setIsHover(null)}
                    >
                      <div
                        className={
                          (isHover && data.id === isHover) ||
                          data.pathname === pathname
                            ? "dropdown-left-border -ml-[7px]"
                            : "border-l-2 -ml-[7px] border-transparent"
                        }
                      ></div>
                      <span className="inline-flex justify-center items-center px-4 relative">
                        <Image src={data.icon} alt="" className="w-5 h-5" />
                      </span>
                      <span className="text-lg tracking-wide truncate">
                        {data.pagename}
                      </span>
                    </Link>
                  </li>
                ))}
                <div className="border-b border-stone-500 my-2 " />
                {headerbottom?.map((data) => (
                  <li key={data?.id} className="min-w-max">
                    <Link
                      href={data.pathname}
                      className={`${
                        (isHover1 && data.id === isHover1) ||
                        data.pathname === pathname
                          ? "navHover"
                          : "border-l-2 border-transparent"
                      } flex md:px-2 lg:px-3 py-1.5 rounded-lg`}
                      onClick={() => setIsNavbar1(false)}
                      onMouseEnter={() => HoverStyle(data?.id)}
                      onMouseLeave={() => setIsHover1(null)}
                    >
                      <div
                        className={
                          (isHover1 && data.id === isHover1) ||
                          data.pathname === pathname
                            ? "dropdown-left-border -ml-[7px]"
                            : "border-l-2 -ml-[7px] border-transparent"
                        }
                      ></div>
                      <span className="inline-flex justify-center px-4 items-center relative">
                        <Image src={data.icon} alt="" className="w-5 h-5" />
                      </span>
                      <span className="text-lg tracking-wide truncate">
                        {data.pagename}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-white mt-7 px-4">
              <div className="flex gap-2 ">
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
                    <h1>UniV3 Simulate</h1>
                    <span>
                      <Image
                        src={Arrow}
                        alt="arrow"
                        width="10px"
                        height="10px"
                      />
                    </span>
                  </div>

                  <p className="text-xs">Invited by @luoluonuoy323</p>
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
        </div>
      </div>

      {/* <nav class="lg:hidden fixed top-0 inset-x-0 bg-[#0A0D1A] py-2 flex justify-center items-center text-sm z-50 px-1">
        <ul className="flex justify-center items-center p-1 md:gap-10 gap-[7px]">
          {headerdata?.map((data) => (
            <li key={data?.id} className="min-w-max">
              <Link
                href={data.pathname}
                className="flex flex-col md:gap-5 gap-2 opacity-50 hover:opacity-100 text-white text-opacity-50 hover:text-white"
              >
                <span className="inline-flex justify-center items-center px-3">
                  <Image src={data.img} alt="" className-

                  ="w-4 h-4" />
                </span>
                <span className="md:text-lg text-xs tracking-wide truncate">
                  {data.pagename}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
}

export default Sidebar;
