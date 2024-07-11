"use client";

import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPower } from "react-icons/fi";
import Loginicon from "../../../public/assets/loginicon.png";
import Image from "next/image";
import "./Sidebar.css";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";
import { useRouter } from "next/navigation";
import Logo from "../../../public/assets/wave.png";
import Homemenu from "../../../public/assets/sidebar/home.svg";
import Holder from "../../../public/assets/sidebar/holder.svg";
import Leaderboard from "../../../public/assets/sidebar/leader_board.svg";
import Portfolio from "../../../public/assets/sidebar/portfolio.svg";
import Referral from "../../../public/assets/sidebar/referral.svg";
import Tokendashboard from "../../../public/assets/sidebar/token_dashboard.svg";
import Volumestats from "../../../public/assets/sidebar/volume_stats.svg";
import WatchList from "../../../public/assets/sidebar/watchlist.svg";
import Discover from "../../../public/assets/sidebar/discover.svg";
import send from "../../../public/send.svg";
import Swap from "../../../public/assets/sidebar/swap.svg";
import swaphistory from "../../../public/assets/sidebar/swaphistory.svg";
import Apecurdocs from "../../../public/assets/sidebar/apecurdocs.svg";
import instagram from "../../../public/assets/sidebar/instagram.png";
import community from "../../../public/assets/sidebar/community.png";
import youtube from "../../../public/assets/sidebar/youtube.png";
import Arrow from "../../../public/assets/sidebar/arraowsidebar.png";
import tiktok from "../../../public/assets/sidebar/tiktok.png";
import x from "../../../public/assets/sidebar/tweet.png";
import bot from "../../../public/assets/sidebar/bot.png";
import Cookies from "js-cookie";
import useWindowSize from "../hook/window";
import { useMediaQuery } from "react-responsive";
import closearrow from "../../../public/assets/sidebar/closearrow.svg";
import openarrow from "../../../public/assets/sidebar/openarrow.svg";

import discord from "../../../public/assets/sidebar/discord.png";
// import useEncryption from "@/app/components/useEncryption/index";
import axios from "axios";
// import axiosInstance from "@/app/apiInstances/axiosInstance";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import { useWallet } from "../contexts/WalletContext";

import { Cookie } from "next/font/google";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
function Sidebar() {
  const router = useRouter();
  const {
    setWalletAddress,
    setEmail,
    setSolanaAddress,
    isNavbar,
    setIsNavbar,
    userProfile,
  } = useWallet();
  const [allUser, setAllUser] = useState({});
  const [active, setActive] = useState("");
  const getdata =
    typeof window !== "undefined" ? localStorage.getItem("details") : null;

  if (getdata?.code) {
    toast.success(getdata.message);
  }

  const Token =
    typeof window !== "undefined" ? localStorage.getItem("Token") : null;

  const pathname = usePathname();
  // const { pathname } = location;
  const [isHover, setIsHover] = useState(null);
  // const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1440);
  // const [isLargeScreen, setIsLargeScreen] = useState(
  //   window.matchMedia("(min-width: 1440px)").matches
  // );
  // const [isLargeScreen, setIsLargeScreen] = useState(false);

  // console.log("🚀 ~ Sidebar ~ isLargeScreen:", isLargeScreen);
  const headerdata = [
    {
      id: 1,
      pathname: "/",
      icon: Homemenu,
      pagename: "Home",
    },
    {
      id: 2,
      pathname: "/swap",
      icon: Swap,
      pagename: "Swap",
    },
    {
      id: 3,
      pathname: "/withdraw",
      icon: send,
      pagename: "Withdraw",
    },
    {
      id: 4,
      pathname: "/swaphistory",
      icon: swaphistory,
      pagename: "Swap History",
    },

    {
      id: 7,
      pathname: "/referral",
      icon: Referral,
      pagename: "Referral",
    },
    {
      id: 8,
      pathname: "/leaderboard",
      icon: Leaderboard,
      pagename: "Leader Board",
    },
    {
      id: 9,
      pathname: "/portfolio",
      icon: Portfolio,
      pagename: "Portfolio",
    },
  ];

  const headerbottom = [
    {
      id: 11,
      pathname: "/watchList",
      icon: WatchList,
      pagename: "Watch List",
    },
    {
      id: 12,
      pathname: "/discover",
      icon: Discover,
      pagename: "Discover",
    },
    {
      id: 13,
      pathname: "https://wavebot.gitbook.io/wave-manual",
      icon: Apecurdocs,
      pagename: "Wave Manual",
    },
    /*    {
      id: 14,
      pathname: "/holder",
      icon: Discover,
      pagename: "HOLDER",
    }, */
  ];
  const HoverStyle = (id) => {
    setIsHover(id);
  };
  const signupRefRegex = /^\/signupRef\/(.*)/;
  const matchPath =
    pathname === "/login" ||
    // pathname === "/" ||
    pathname === "/signup" ||
    pathname === "/forgotpassword" ||
    pathname === "/passwordverify" ||
    pathname === "/resetpassword" ||
    pathname === "/sucessreset" ||
    signupRefRegex.test(pathname);
  // pathname === "/signupRef/*";

  const [userProfile1, setUserProfile1] = useState([]);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await axiosInstanceAuth.get("/getUserProfile");
        0;
        const myData = res?.data?.data;
        console.log("🚀 ~ getUserProfile ~ getUserProfile:", res);
        setUserProfile1(myData);
        setWalletAddress(myData?.wallet);
        setSolanaAddress(myData?.solanawallet || "");
        setEmail(myData?.email);
        // console.log("User Profile Data:", myData?.solanawallet);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    getUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getPath = usePathname() || "/default-path";

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedActive = localStorage.getItem("Dashboard");
    setActive(storedActive || getPath);

    // Check for localStorage on the client side
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("Token");
      setToken(storedToken);
    }
  }, [getPath]);

  const [ConfirmationPopUp, setConfirmationPopUp] = useState(false);

  const ClosePopUp = () => {
    setConfirmationPopUp(false);
  };

  const ConfirmLogOut = () => {
    localStorage.clear();
    Cookies.remove("auth-token");
    router.push("/login");
    setConfirmationPopUp(false);
  };

  //close when click outside

  const navbarRef = useRef(null);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1440px)" });

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavbar(false);
    }
  };

  /*   useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); */
  /* 
  useEffect(() => {
    const handleResize = () => {
      const isLarge =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--is-large-screen"
        ) === "1";
      setIsLargeScreen(isLarge);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 */
  /*   useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); */

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  /*   const handleClickOutside = (event) => {
    // Check if screen size is LG, MD, or SM
    const isLargeScreen = ["lg", "md", "sm"].some((size) =>
      document.body.classList.contains(`screen-${size}`)
    );

    // Close sidebar only if screen size is XL or 2XL
    if (
      !isLargeScreen &&
      navbarRef.current &&
      !navbarRef.current.contains(event.target)
    ) {
      setIsNavbar(false);
    }
  };*/

  //for profile image show convert in text format
  const capitalizeFirstAndLast = (name) => {
    if (!name) return "";
    if (name.length === 1) return name.toUpperCase();
    return (
      name.charAt(0).toUpperCase() + name.charAt(name.length - 1).toUpperCase()
    );
  };

  //when click on item sidebar not close on xl and above size
  const handleClick = () => {
    if (windowWidth < 1400) {
      setIsNavbar(false);
    }
  };
  const { width: windowWidth } = useWindowSize();

  /*   const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initialize window width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); */

  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280); // Assuming 1280px is the xl breakpoint
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlesClick = () => {
    if (!isXL) {
      setIsNavbar(false);
    }
  };

  return (
    <>
      <div
        className={` fixed  top-0 left-0 bg-[#1C1C1C]  h-full z-[999999] text-white ${
          matchPath ? "hidden" : "block"
        } `}
      >
        {/* w-[3rem] md:w-[3.5rem] */}
        <div
          className={`sidebar   ${
            isNavbar
              ? "w-72"
              : " w-[0rem] md:w-[0rem] z-[999] lg:w-[4rem] xl:w-[4rem]  relative"
          } transition-all duration-500 ease-in-out  `}
        >
          {/* xl:w-72 */}
          <div className="sidebar h-full  -ml-[4px] hover:shadow-lg">
            {/* <div className="sidebar min-h-screen lg:block hidden w-[3.35rem] overflow-hidden p-1 hover:w-52  hover:shadow-lg"> */}
            <div
              ref={isLargeScreen ? null : navbarRef}
              className="flex h-screen flex-col   overflow-y-auto"
            >
              <div className="flex  items-center text-white justify-center">
                <div
                  className={` text-3xl `}
                  onClick={() => setIsNavbar(!isNavbar)}
                >
                  {isNavbar === false ? (
                    <div className="mt-2 mx-auto ml-2 cursor-pointer">
                      {/* <FaBars /> */}
                      {/* <FaBarsStaggered /> */}
                      {/* <TbArrowBarRight /> */}
                      <Image
                        src={openarrow}
                        alt="open sidebar arrow"
                        width={40}
                        height={0}
                      />
                    </div>
                  ) : (
                    <div className="mt-8 ml-4 cursor-pointer">
                      {" "}
                      {/* <MdKeyboardDoubleArrowLeft /> */}
                      {/* <TbArrowBarLeft /> */}
                      <Image
                        src={closearrow}
                        alt="close sidebar arrow"
                        width={40}
                        height={0}
                      />
                    </div>
                  )}
                </div>

                <Image
                  src={Logo}
                  alt="wave-logo"
                  className={`${
                    isNavbar === false ? "hidden " : "block "
                  } mt-6 ml-8 mx-auto  `}
                />
              </div>
              <div>
                <ul className="flex flex-col  pr- justify-start xl:pb-7 pb-3  mt-7 p-0 gap-1.5  tracking-wide !overflow-y-auto !overflow-x-hidden">
                  {headerdata?.map((data) => (
                    <li key={data?.id} className="min-w-max   ">
                      {/* xl:mx-5 xl:mr-4  */}
                      <Link
                        href={data?.pathname}
                        className={`${
                          (isHover && data?.id === isHover) ||
                          data?.pathname === pathname
                            ? "navHover "
                            : "text-white"
                        } flex md:px-1 lg:px-2 py-2 `}
                        // rounded-lg
                        // onClick={() => setIsNavbar(false)}
                        onClick={handleClick}
                        onMouseEnter={() => HoverStyle(data?.id)}
                        onMouseLeave={() => setIsHover(null)}
                      >
                        <div
                          className={
                            (isHover && data?.id === isHover) ||
                            data?.pathname === pathname
                              ? "dropdown-left-border  -ml-[0px]"
                              : "-ml-[0px]"
                          }
                        ></div>
                        <span className="inline-flex justify-center items-center px-4 relative ">
                          <Image
                            src={data?.icon}
                            alt="icon"
                            className="w-7 h-6"
                          />
                        </span>
                        <span className="text-lg tracking-wide truncate">
                          {data?.pagename}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <div className="border-b border-stone-500 my-2 " />
                  {headerbottom?.map((data) => (
                    <li key={data?.id} className="min-w-max  ">
                      {/* xl:mx-5 xl:mr-4 */}
                      <Link
                        href={data?.pathname}
                        target={
                          data?.pathname ===
                          "https://wavebot.gitbook.io/wave-manual"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          data?.pathname ===
                          "https://wavebot.gitbook.io/wave-manual"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`${
                          (isHover && data?.id === isHover) ||
                          data?.pathname === pathname
                            ? "navHover"
                            : ""
                        } flex md:px-1 lg:px-2 py-2 rounded-lg`}
                        // onClick={() => setIsNavbar(false)}
                        onClick={handleClick}
                        onMouseEnter={() => HoverStyle(data?.id)}
                        onMouseLeave={() => setIsHover(null)}
                      >
                        <div
                          className={
                            (isHover && data?.id === isHover) ||
                            data?.pathname === pathname
                              ? "dropdown-left-border -ml-[0px] "
                              : "-ml-[0px]"
                          }
                        ></div>
                        <span className="inline-flex justify-center  px-4 items-center relative">
                          <Image
                            src={data?.icon}
                            alt="icon"
                            className="w-7 h-6"
                          />
                        </span>
                        <span className="text-lg tracking-wide truncate">
                          {data?.pagename}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {token ? (
                  <div className=" grid place-items-center xl:mb-3 mb-10">
                    {/* {isNavbar ? ( */}
                    <div
                      className={`${
                        isNavbar ? "w- " : "w-0"
                      }  transition-all duration-500 ease-in-out tracking-wide  !overflow-x-hidden `}
                    >
                      <button
                        onClick={(e) => setConfirmationPopUp(true)}
                        className="bg-[#1788FB] navbar-content show w-64 xsm:p-[0.330rem] xsm:ml-1 mt-10  text-white p-2 rounded-xl xl:px-7  px-3  place-items-center"
                      >
                        <div className="flex items-center gap-1 ">
                          <FiPower size={18} className="block ml-2" />
                          {/* <span className="md:ml-1 tracking-wide font-bold  xl:text-sm text-[12px] xsm:text-[10.5px]  "> */}
                          <span className="ml-4 tracking-wide font-bold   xl:text-sm text-[12px] xsm:text-[10.5px]  block ">
                            Logout
                          </span>
                        </div>
                      </button>
                      </div>
                    {/* ) : (
                      <button
                        onClick={(e) => setConfirmationPopUp(true)}
                        // className="bg-[#1788FB]  xl:px-7 px-3 w-full text-white p-2 xl:rounded-r-lg  "
                        className="bg-[#1788FB] navbar-content hide  xsm:p-[0.330rem] xsm:ml-1 mt-10  text-white p-2 rounded-xl  lg: px-3 place-items-center"
                      >
                        <div className="flex items-center gap-1">
                          <FiPower size={18} className="hidden" />
                          {/* <span className="md:ml-1 tracking-wide font-bold  xl:text-sm text-[12px] xsm:text-[10.5px]  "> *
                          <span className="md:ml-1 tracking-wide font-bold   xl:text-sm text-[12px] xsm:text-[10.5px]  block ">
                            Logout
                          </span>
                        </div>
                      </button>
                    )} */}
                    {ConfirmationPopUp ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999]   ">
                          <div className="relative min-w-[250px] max-w-[90%] mx-auto  my-10 shadow-black shadow-2xl">
                            {/* ------ ContentManagement ------ */}
                            <div className="border-0 rounded-lg shadow-2xl relative flex flex-col w-full bg-[#FFFFFF] outline-none focus:outline-none">
                              {/* ------ Header ------ */}
                              <div className="grid justify-end place-items-center place-ContentManagement-end">
                                <button
                                  className="bg-transparent border-0 text-black opacity-9 text-2xl font-normal outline-none focus:outline-none mx-3 my-2"
                                  onClick={(e) => ClosePopUp()}
                                >
                                  ×
                                </button>
                              </div>
                              {/* ------ Body ------ */}
                              <div className="relative grid place-items-center px-6 md:px-10 py-3 flex-auto">
                                <h3 className="text-black font-semibold text-base md:text-lg  leading-relaxed text-center">
                                  Are You Sure ?
                                </h3>
                                <p className="text-black font-medium text-xs md:text-sm  leading-normal text-center mt-1">
                                  You want to Log Out
                                </p>
                              </div>

                              {/* ------ Fotter ------ */}
                              <div className="flex justify-center items-center m-5">
                                <button
                                  className="bg-[#1788FB] text-white font-semibold uppercase text-sm px-6 py-3 rounded-lg shadow outline-none focus:outline-none ease-linear transition-all duration-150 mx-2"
                                  type="button"
                                  onClick={(e) => ConfirmLogOut()}
                                >
                                  Yes
                                </button>
                                <button
                                  className="bg-[#d31e1e] text-white font-semibold uppercase text-sm px-6 py-3 rounded-lg shadow hover:bg-[#cc1616] hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 mx-2"
                                  type="button"
                                  onClick={(e) => ClosePopUp()}
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                  </div>
                ) : (
                  <div className=" grid place-items-center">
                    <Link href="/login" className="">
                      <button className="bg-[#1788FB] hidden xsm:p-2 xsm:ml-1 text-white p-2 rounded-xl xl:px-7 lg: px-3 place-items-center">
                        <div className="flex items-center">
                          <Image
                            src={Loginicon}
                            alt="loginicon"
                            className="w-[20px] h-[20px] xl:block hidden "
                          />
                          <span className="lg:ml-2 md:text-md text-sm xsm:text-[11.6px]  block ">
                            Login
                          </span>
                        </div>
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              <div className="text-white  px-0 md:pb-3 pb-5 relative mt-[2.7rem]  lg:ml-2.5 md:ml-1.5">
                <div className=" 2xl:flex xl:flex">
                  <div className="flex gap-2  tracking-wide  !overflow-x-hidden">
                    <Link href="/profile">
                      <span onClick={handlesClick}>
                        <div
                          className="text-lg xl:px-4 mt-2 rounded-full profile-bg
                       md:w-14 xsm:w-14 lg:ml-0 xsm:ml-3  h-14 text-center pt-3"
                        >
                          {capitalizeFirstAndLast(
                            userProfile1?.name || userProfile?.name
                          )}
                        </div>
                      </span>
                    </Link>
                  {/*   {isNavbar ? ( */}
                  <div
                      className={`${
                        isNavbar ? "w-52" : "w-0"
                      }  transition-all duration-500 ease-in-out tracking-wide  !overflow-x-hidden `}
                    >
                      {/* navbar-content show */}
                        <div className="flex mt-2 items-center">
                          <h1>{userProfile1?.name || userProfile?.name}</h1>
                          <Link href="/profile">
                            <span onClick={handlesClick}>
                              <Image
                                src={Arrow}
                                alt="arrow"
                                width="10px"
                                height="10px"
                                className="mb-3 ml-1.5"
                              />
                            </span>
                          </Link>
                        </div>
                        <p className="text-xs">
                          Invited by {userProfile1?.email || userProfile?.email}
                        </p>
                        <div className="flex mt-2">
                          <Link
                            href="https://t.me/onchain_wavebot"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={bot}
                              alt="Telegram bot"
                              className="mr-2 cursor-pointer"
                              style={{ width: "20px", height: "20px" }}
                            />
                          </Link>

                          <Link
                            href="https://t.me/WaveUsers"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={community}
                              alt="Telegram community"
                              style={{ width: "20px", height: "20px" }}
                              className="mr-2 cursor-pointer"
                            />
                          </Link>
                          <Link
                            href="https://x.com/WaveBotApp?t=ncOPeN0KVJY_JuBZSjI-jQ&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={x}
                              alt="twitter"
                              style={{ width: "20px", height: "20px" }}
                              className="mr-2 cursor-pointer"
                            />
                          </Link>
                        </div>
                      </div>
                   {/*  ) : (
                      <div className="navbar-content hide">
                        <div className="flex mt-2   items-center">
                          <h1>{userProfile1?.name || userProfile?.name}</h1>
                          <Link href="/profile">
                            <span>
                              <Image
                                src={Arrow}
                                alt="arrow"
                                width="10px"
                                height="10px"
                                className="mb-3 ml-1.5"
                              />
                            </span>
                          </Link>
                        </div>
                        <p className="text-xs">
                          Invited by {userProfile1?.email || userProfile?.email}
                        </p>
                        <div className="flex mt-2">
                          <Link
                            href="https://t.me/onchain_wavebot"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={bot}
                              alt="Telegram bot"
                              className="mr-2 cursor-pointer"
                              style={{ width: "20px", height: "20px" }}
                            />
                          </Link>

                          <Link
                            href="https://t.me/WaveUsers"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={community}
                              alt="Telegram community"
                              style={{ width: "20px", height: "20px" }}
                              className="mr-2 cursor-pointer"
                            />
                          </Link>
                          <Link
                            href="https://x.com/WaveBotApp?t=ncOPeN0KVJY_JuBZSjI-jQ&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={x}
                              alt="twitter"
                              style={{ width: "20px", height: "20px" }}
                              className="mr-2 cursor-pointer"
                            />
                          </Link>
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>

                {/* Only show the image on screens smaller than 2xl and xl */}

                {/*               <div
                  className="2xl:hidden xl:hidden flex gap-2 lg:ml-0 ml-3 mt-5 "
                  style={{ position: "absolute", bottom: "0" }}
                >
                  <Link href="/profile" onClick={() => setIsNavbar(false)}>
                    <div
                      className="text-lg rounded-full profile-bg
                       w-14 h-14 text-center pt-3 mt-5"
                    >
                      {capitalizeFirstAndLast(
                        userProfile1?.name || userProfile?.name
                      )}
                    </div>
                  </Link>

                    <div>
                    <div className="flex mt-2  items-center">
                      <h1>{userProfile1?.name || userProfile?.name}</h1>
                      <Link href="/profile">
                        <span>
                          <Image
                            src={Arrow}
                            alt="arrow"
                            width="10px"
                            height="10px"
                            className="mb-3 ml-1.5"
                          />
                        </span>
                      </Link>
                    </div>
                    <p className="text-xs">
                      Invited by {userProfile1?.email || userProfile?.email}
                    </p>
                    <div className="flex mt-2">
                      <Link
                        href="https://t.me/onchain_wavebot"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={bot}
                          alt="Telegram bot"
                          className="mr-2 cursor-pointer"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </Link>

                      <Link
                        href="https://t.me/WaveUsers"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={community}
                          alt="Telegram community"
                          style={{ width: "20px", height: "20px" }}
                          className="mr-2 cursor-pointer"
                        />
                      </Link>
                      <Link
                        href="https://x.com/WaveBotApp?t=ncOPeN0KVJY_JuBZSjI-jQ&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={x}
                          alt="twitter"
                          style={{ width: "20px", height: "20px" }}
                          className="mr-2 cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
