// "use client";

// import React, { useEffect, useState } from "react";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FiPower } from "react-icons/fi";
// import Loginicon from "../../../public/assets/loginicon.png";
// import Image from "next/image";
// import "./Sidebar.css";
// import { FaBars } from "react-icons/fa6";
// import { useRouter } from "next/navigation";
// import Logo from "../../../public/assets/wave.png";
// import Homemenu from "../../../public/assets/sidebar/home.svg";
// import Holder from "../../../public/assets/sidebar/holder.svg";
// import Leaderboard from "../../../public/assets/sidebar/leader_board.svg";
// import Portfolio from "../../../public/assets/sidebar/portfolio.svg";
// import Referral from "../../../public/assets/sidebar/referral.svg";
// import Tokendashboard from "../../../public/assets/sidebar/token_dashboard.svg";
// import Volumestats from "../../../public/assets/sidebar/volume_stats.svg";
// import WatchList from "../../../public/assets/sidebar/watchlist.svg";
// import Discover from "../../../public/assets/sidebar/discover.svg";
// import Swap from "../../../public/assets/sidebar/swap.svg";
// import swaphistory from "../../../public/assets/sidebar/swaphistory.svg";
// import Apecurdocs from "../../../public/assets/sidebar/apecurdocs.svg";
// import Officialwebsite from "../../../public/assets/sidebar/officialwebsite.svg";
// import Sidebaruserlogo from "../../../public/assets/sidebar/sidebaruserlogo.png";
// import Arrow from "../../../public/assets/sidebar/arraowsidebar.png";
// import Twitter from "../../../public/assets/sidebar/twitter.png";
// import medium from "../../../public/assets/sidebar/medium.png";
// import Cookies from "js-cookie";

// import discord from "../../../public/assets/sidebar/discord.png";
// // import useEncryption from "@/app/components/useEncryption/index";
// import axios from "axios";
// // import axiosInstance from "@/app/apiInstances/axiosInstance";
// import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
// import { useWallet } from "../contexts/WalletContext";

// import { Cookie } from "next/font/google";
// function Sidebar() {
//   const router = useRouter();
//   const {
//     setWalletAddress,
//     setEmail,
//     setSolanaAddress,
//     isNavbar,
//     setIsNavbar,
//   } = useWallet();
//   const [allUser, setAllUser] = useState({});
//   const [active, setActive] = useState("");
//   const getdata =
//     typeof window !== "undefined" ? localStorage.getItem("details") : null;

//   if (getdata?.code) {
//     toast.success(getdata.message);
//   }

//   const Token =
//     typeof window !== "undefined" ? localStorage.getItem("Token") : null;
//   // const getUserdata = async () => {
//   //   await axiosInstanceAuth
//   //     .get("getUserProfile")
//   //     .then((res) => {
//   //       const myData = res?.data?.data;
//   //       setAllUser(myData || []);
//   //       setWalletAddress(myData?.wallet)
//   //       setEmail(myData?.email)
//   //       console.log("setWalletAddress:", myData?.wallet)
//   //       console.log("getUserProfile---->", myData);
//   //     })
//   //     .catch((err) => {
//   //       console.log("err --->", err);
//   //     });
//   // };

//   const pathname = usePathname();
//   // const { pathname } = location;
//   const [isHover, setIsHover] = useState(null);
//   const [isHover1, setIsHover1] = useState(null);
//   // const [isNavbar, setIsNavbar] = useState(false);
//   const [isNavbar1, setIsNavbar1] = useState(false);
//   const headerdata = [
//     {
//       id: 1,
//       pathname: "/",
//       icon: Homemenu,
//       pagename: "Home",
//     },
//     {
//       id: 2,
//       pathname: "/swap",
//       icon: Swap,
//       pagename: "Swap",
//     },
//     {
//       id: 3,
//       pathname: "/swaphistory",
//       icon: swaphistory,
//       pagename: "Swap History",
//     },
//     {
//       id: 4,
//       pathname: "/tokendashboard",
//       icon: Tokendashboard,
//       pagename: "Token Dashboard",
//     },
//     {
//       id: 5,
//       pathname: "/holder",
//       icon: Holder,
//       pagename: "Holder",
//     },
//     {
//       id: 6,
//       pathname: "/referral",
//       icon: Referral,
//       pagename: "Referral",
//     },
//     {
//       id: 7,
//       pathname: "/leaderboard",
//       icon: Leaderboard,
//       pagename: "Leader Board",
//     },
//     {
//       id: 8,
//       pathname: "/portfolio",
//       icon: Portfolio,
//       pagename: "Portfolio",
//     },
//     {
//       id: 9,
//       pathname: "/volumestats",
//       icon: Volumestats,
//       pagename: "Volume Stats",
//     },
//   ];

//   const headerbottom = [
//     {
//       id: 10,
//       pathname: "/watchList",
//       icon: WatchList,
//       pagename: "Watch List",
//     },
//     {
//       id: 11,
//       pathname: "/discover",
//       icon: Discover,
//       pagename: "Discover",
//     },
//     {
//       id: 12,
//       pathname: "/apecurdocs",
//       icon: Apecurdocs,
//       pagename: "Apecurdocs",
//     },
//     {
//       id: 13,
//       pathname: "/officialwebsite",
//       icon: Officialwebsite,
//       pagename: "Officialwebsite",
//     },
//   ];
//   const HoverStyle = (id) => {
//     setIsHover(id);
//   };
//   const matchPath =
//     pathname === "/login" ||
//     // pathname === "/" ||
//     pathname === "/signup" ||
//     pathname === "/forgotpassword" ||
//     pathname === "/passwordverify" ||
//     pathname === "/resetpassword" ||
//     pathname === "/sucessreset";

//   const [userProfile, setUserProfile] = useState([]);

//   //   useEffect(() => {

//   //   const token = localStorage.getItem('Token');
//   //   if (token) {
//   //     router.push('/'); // Change '/home' to your actual home page route
//   //   } else {
//   //     router.push('/login'); // Change '/login' to your actual login page route
//   //   }
//   // }, []);
//   useEffect(() => {
//     const getUserProfile = async () => {
//       try {
//         const res = await axiosInstanceAuth.get("/getUserProfile");
//         const myData = res?.data?.data;
//         setUserProfile(myData);
//         setWalletAddress(myData?.wallet);
//         setSolanaAddress(myData?.solanawallet || "");
//         setEmail(myData?.email);
//         // console.log("User Profile Data:", myData?.solanawallet);
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//       }
//     };

//     getUserProfile();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   const getPath = usePathname() || "/default-path";

//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const storedActive = localStorage.getItem("Dashboard");
//     setActive(storedActive || getPath);

//     // Check for localStorage on the client side
//     if (typeof window !== "undefined") {
//       const storedToken = localStorage.getItem("Token");
//       setToken(storedToken);
//     }
//   }, [getPath]);

//   const [ConfirmationPopUp, setConfirmationPopUp] = useState(false);

//   const ClosePopUp = () => {
//     setConfirmationPopUp(false);
//   };

//   const ConfirmLogOut = () => {
//     localStorage.clear();
//     Cookies.remove("auth-token");
//     router.push("/login");
//     setConfirmationPopUp(false);
//   };
//   const navbarRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//       setIsNavbar(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className={` fixed  top-0 left-0 bg-[#1C1C1C] h-full z-[999999] text-white ${
//           matchPath ? "hidden" : "block"
//         } `}
//       >
//         {/* w-[3rem] md:w-[3.5rem] */}
//         <div
//           className={`sidebar   ${
//             isNavbar
//               ? "w-72"
//               : " w-[0rem] md:w-[0rem] z-[999] lg:w-[4rem] xl:w-72 relative"
//           } transition-all duration-500 ease-in-out  `}
//         >
//           <div className="sidebar h-full  -ml-[4px] hover:shadow-lg">
//             {/* <div className="sidebar min-h-screen lg:block hidden w-[3.35rem] overflow-hidden p-1 hover:w-52  hover:shadow-lg"> */}
//             <div className="flex h-screen flex-col   overflow-y-auto">
//               <div className="flex  items-center text-white justify-center">
//                 <div
//                   className={`xl:hidden text-3xl `}
//                   onClick={() => setIsNavbar(!isNavbar)}
//                 >
//                   {isNavbar === false ? (
//                     <div className="mt-10 mx-auto ml-2 cursor-pointer">
//                       <FaBars />
//                     </div>
//                   ) : (
//                     <div className=" mt-8 ml-6 cursor-pointer"> X </div>
//                   )}
//                 </div>
//                 <Image
//                   src={Logo}
//                   alt="wave-logo"
//                   className={`${
//                     isNavbar === false ? "hidden xl:block" : "block"
//                   } mt-10 mx-auto`}
//                 />
//               </div>
//               <div>
//                 <ul className="flex flex-col  pr- justify-start pb-7 mt-7 p-0 gap-1.5  tracking-wide !overflow-y-auto !overflow-x-hidden">
//                   {headerdata?.map((data) => (
//                     <li key={data?.id} className="min-w-max xl:mx-5 xl:mr-4   ">
//                       <Link
//                         href={data?.pathname}
//                         className={`${
//                           (isHover && data?.id === isHover) ||
//                           data?.pathname === pathname
//                             ? "navHover "
//                             : "text-white"
//                         } flex md:px-1 lg:px-2   py-2 rounded-lg`}
//                         onClick={() => setIsNavbar(false)}
//                         onMouseEnter={() => HoverStyle(data?.id)}
//                         onMouseLeave={() => setIsHover(null)}
//                       >
//                         <div
//                           className={
//                             (isHover && data?.id === isHover) ||
//                             data?.pathname === pathname
//                               ? "dropdown-left-border  -ml-[0px]"
//                               : "-ml-[0px]"
//                           }
//                         ></div>
//                         <span className="inline-flex justify-center items-center px-4 relative ">
//                           <Image
//                             src={data?.icon}
//                             alt="icon"
//                             className="w-7 h-6"
//                           />
//                         </span>
//                         <span className="text-lg tracking-wide truncate">
//                           {data?.pagename}
//                         </span>
//                       </Link>
//                     </li>
//                   ))}
//                   <div className="border-b border-stone-500 my-2 " />
//                   {headerbottom?.map((data) => (
//                     <li key={data?.id} className="min-w-max xl:mx-5 xl:mr-4 ">
//                       <Link
//                         href={data?.pathname}
//                         className={`${
//                           (isHover && data?.id === isHover) ||
//                           data?.pathname === pathname
//                             ? "navHover"
//                             : ""
//                         } flex md:px-1 lg:px-2 py-2 rounded-lg`}
//                         onClick={() => setIsNavbar1(false)}
//                         onMouseEnter={() => HoverStyle(data?.id)}
//                         onMouseLeave={() => setIsHover(null)}
//                       >
//                         <div
//                           className={
//                             (isHover1 && data?.id === isHover1) ||
//                             data?.pathname === pathname
//                               ? "dropdown-left-border -ml-[0px] "
//                               : "-ml-[0px]"
//                           }
//                         ></div>
//                         <span className="inline-flex justify-center  px-4 items-center relative">
//                           <Image
//                             src={data?.icon}
//                             alt="icon"
//                             className="w-7 h-6"
//                           />
//                         </span>
//                         <span className="text-lg tracking-wide truncate">
//                           {data?.pagename}
//                         </span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 {token ? (
//                   <div className=" grid place-items-center ">
//                     <button
//                       onClick={(e) => setConfirmationPopUp(true)}
//                       // className="bg-[#1788FB]  xl:px-7 px-3 w-full text-white p-2 xl:rounded-r-lg  "
//                       className="bg-[#1788FB] xsm:p-[0.330rem] xsm:ml-1  text-white p-2 rounded-xl xl:px-7 lg: px-3 place-items-center"
//                     >
//                       <div className="flex items-center gap-1">
//                         <FiPower size={18} className="xl:block hidden" />
//                         {/* <span className="md:ml-1 tracking-wide font-bold  xl:text-sm text-[12px] xsm:text-[10.5px]  "> */}
//                         <span className="md:ml-1 tracking-wide font-bold   xl:text-sm text-[12px] xsm:text-[10.5px]  block ">
//                           Logout
//                         </span>
//                       </div>
//                     </button>
//                     {ConfirmationPopUp ? (
//                       <>
//                         <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999]   ">
//                           <div className="relative min-w-[250px] max-w-[90%] mx-auto  my-10 shadow-black shadow-2xl">
//                             {/* ------ ContentManagement ------ */}
//                             <div className="border-0 rounded-lg shadow-2xl relative flex flex-col w-full bg-[#FFFFFF] outline-none focus:outline-none">
//                               {/* ------ Header ------ */}
//                               <div className="grid justify-end place-items-center place-ContentManagement-end">
//                                 <button
//                                   className="bg-transparent border-0 text-black opacity-9 text-2xl font-normal outline-none focus:outline-none mx-3 my-2"
//                                   onClick={(e) => ClosePopUp()}
//                                 >
//                                   ×
//                                 </button>
//                               </div>
//                               {/* ------ Body ------ */}
//                               <div className="relative grid place-items-center px-6 md:px-10 py-3 flex-auto">
//                                 <h3 className="text-black font-semibold text-base md:text-lg  leading-relaxed text-center">
//                                   Are You Sure ?
//                                 </h3>
//                                 <p className="text-black font-medium text-xs md:text-sm  leading-normal text-center mt-1">
//                                   You want to Log Out
//                                 </p>
//                               </div>

//                               {/* ------ Fotter ------ */}
//                               <div className="flex justify-center items-center m-5">
//                                 <button
//                                   className="bg-[#1788FB] text-white font-semibold uppercase text-sm px-6 py-3 rounded-lg shadow outline-none focus:outline-none ease-linear transition-all duration-150 mx-2"
//                                   type="button"
//                                   onClick={(e) => ConfirmLogOut()}
//                                 >
//                                   Yes
//                                 </button>
//                                 <button
//                                   className="bg-[#d31e1e] text-white font-semibold uppercase text-sm px-6 py-3 rounded-lg shadow hover:bg-[#cc1616] hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 mx-2"
//                                   type="button"
//                                   onClick={(e) => ClosePopUp()}
//                                 >
//                                   No
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
//                       </>
//                     ) : null}
//                   </div>
//                 ) : (
//                   <div className=" grid place-items-center">
//                     <Link href="/login " className="">
//                       {/* <button className="bg-[#1788FB] text-white p-2 rounded-xl ">
//                     <div className="flex items-center  px-5 ">
//                       <Image
//                         src={Loginicon}
//                         alt="loginicon"
//                         className="w-[20px] h-[20px] xl:block hidden "
//                       />
//                       <span className="lg:ml-2 md:text-md text-sm   block ">
//                         Login
//                       </span>
//                     </div>
//                   </button>  */}
//                       <button className="bg-[#1788FB] xsm:p-2 xsm:ml-1 text-white p-2 rounded-xl xl:px-7 lg: px-3 place-items-center">
//                         <div className="flex items-center">
//                           <Image
//                             src={Loginicon}
//                             alt="loginicon"
//                             className="w-[20px] h-[20px] xl:block hidden "
//                           />
//                           <span className="lg:ml-2 md:text-md text-sm xsm:text-[11.6px]  block ">
//                             Login
//                           </span>
//                         </div>
//                       </button>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div className="text-white xl:px-8 px-0 md:pb-3 pb-5 relative mt-[2.7rem]  lg:ml-2.5 md:ml-1.5">
//                 <div className="hidden 2xl:flex xl:flex">
//                   <div className="flex gap-2">
//                     <div>
//                       <Image
//                         src={Sidebaruserlogo}
//                         alt="Sidebaruserlogo"
//                         width="20px"
//                         height="10px"
//                       />
//                     </div>

//                     <div>
//                       <div className="flex  items-center">
//                         <h1>{userProfile?.name}</h1>
//                         <Link href="/profile">
//                           <span>
//                             <Image
//                               src={Arrow}
//                               alt="arrow"
//                               width="10px"
//                               height="10px"
//                               className="mb-3 ml-1.5"
//                             />
//                           </span>
//                         </Link>
//                       </div>
//                       <p className="text-xs">Invited by {userProfile?.email}</p>
//                       <div className="flex mt-2">
//                         <Image
//                           src={discord}
//                           alt="discord"
//                           width="10px"
//                           height="10px"
//                           className="mr-2 cursor-pointer"
//                         />
//                         <Image
//                           src={Twitter}
//                           alt="twitter"
//                           width="10px"
//                           height="10px"
//                           className="mr-2 cursor-pointer"
//                         />
//                         <Image
//                           src={medium}
//                           alt="medium"
//                           width="10px"
//                           height="10px"
//                           className="mr-2 cursor-pointer"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Only show the image on screens smaller than 2xl and xl */}
//                 <div
//                   className="2xl:hidden xl:hidden flex gap-2"
//                   style={{ position: "absolute", bottom: "0" }}
//                 >
//                   <Image
//                     src={Sidebaruserlogo}
//                     alt="Sidebaruserlogo"
//                     width="30px"
//                     height="30px"
//                     className=" ml-2 items-center"
//                   />
//                   {/* < className="ml-6"> */}
//                   {/* <div className={` ${isNavbar ? "" : "hidden "} `}>
//                   <p className="">{userProfile.name}</p> 
//                   <p className="text-xs">{userProfile.email}</p>
//                 </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sidebar;
"use client";

import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPower } from "react-icons/fi";
import Loginicon from "../../../public/assets/loginicon.png";
import Image from "next/image";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa6";
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
import Officialwebsite from "../../../public/assets/sidebar/officialwebsite.svg";
import Sidebaruserlogo from "../../../public/assets/sidebar/sidebaruserlogo.png";
import Arrow from "../../../public/assets/sidebar/arraowsidebar.png";
import Twitter from "../../../public/assets/sidebar/twitter.png";
import medium from "../../../public/assets/sidebar/medium.png";
import Cookies from "js-cookie";

import discord from "../../../public/assets/sidebar/discord.png";
// import useEncryption from "@/app/components/useEncryption/index";
import axios from "axios";
// import axiosInstance from "@/app/apiInstances/axiosInstance";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import { useWallet } from "../contexts/WalletContext";

import { Cookie } from "next/font/google";
function Sidebar() {
  const router = useRouter();
  const {
    setWalletAddress,
    setEmail,
    setSolanaAddress,
    isNavbar,
    setIsNavbar,
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
  // const getUserdata = async () => {
  //   await axiosInstanceAuth
  //     .get("getUserProfile")
  //     .then((res) => {
  //       const myData = res?.data?.data;
  //       setAllUser(myData || []);
  //       setWalletAddress(myData?.wallet)
  //       setEmail(myData?.email)
  //       console.log("setWalletAddress:", myData?.wallet)
  //       console.log("getUserProfile---->", myData);
  //     })
  //     .catch((err) => {
  //       console.log("err --->", err);
  //     });
  // };

  const pathname = usePathname();
  // const { pathname } = location;
  const [isHover, setIsHover] = useState(null);
  const [isHover1, setIsHover1] = useState(null);
  // const [isNavbar, setIsNavbar] = useState(false);
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
      pathname: "/swap",
      icon: Swap,
      pagename: "Swap",
    },
    {
      id: 3,
      pathname: "/transfertoken",
      icon: send,
      pagename: "Transfer Token",
    },
    {
      id: 4,
      pathname: "/swaphistory",
      icon: swaphistory,
      pagename: "Swap History",
    },
    {
      id: 5,
      pathname: "/tokendashboard",
      icon: Tokendashboard,
      pagename: "Token Dashboard",
    },
    {
      id: 6,
      pathname: "/holder",
      icon: Holder,
      pagename: "Holder",
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
    {
      id: 10,
      pathname: "/volumestats",
      icon: Volumestats,
      pagename: "Volume Stats",
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
      pathname: "/apecurdocs",
      icon: Apecurdocs,
      pagename: "Apecurdocs",
    },
    {
      id: 14,
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
    // pathname === "/" ||
    pathname === "/signup" ||
    pathname === "/forgotpassword" ||
    pathname === "/passwordverify" ||
    pathname === "/resetpassword" ||
    pathname === "/sucessreset";

  const [userProfile, setUserProfile] = useState([]);

  //   useEffect(() => {

  //   const token = localStorage.getItem('Token');
  //   if (token) {
  //     router.push('/'); // Change '/home' to your actual home page route
  //   } else {
  //     router.push('/login'); // Change '/login' to your actual login page route
  //   }
  // }, []);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await axiosInstanceAuth.get("/getUserProfile");
        const myData = res?.data?.data;
        setUserProfile(myData);
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

  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavbar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={` fixed  top-0 left-0 bg-[#1C1C1C] h-full z-[999999] text-white ${
          matchPath ? "hidden" : "block"
        } `}
      >
        {/* w-[3rem] md:w-[3.5rem] */}
        <div
          className={`sidebar   ${
            isNavbar
              ? "w-72"
              : " w-[0rem] md:w-[0rem] z-[999] lg:w-[4rem] xl:w-72 relative"
          } transition-all duration-500 ease-in-out  `}
        >
          <div className="sidebar h-full  -ml-[4px] hover:shadow-lg">
            {/* <div className="sidebar min-h-screen lg:block hidden w-[3.35rem] overflow-hidden p-1 hover:w-52  hover:shadow-lg"> */}
            <div
              ref={navbarRef}
              className="flex h-screen flex-col   overflow-y-auto"
            >
              <div className="flex  items-center text-white justify-center">
                <div
                  className={`xl:hidden text-3xl `}
                  onClick={() => setIsNavbar(!isNavbar)}
                >
                  {isNavbar === false ? (
                    <div className="mt-10 mx-auto ml-2 cursor-pointer">
                      <FaBars />
                    </div>
                  ) : (
                    <div className=" mt-8 ml-6 cursor-pointer"> X </div>
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
                <ul className="flex flex-col  pr- justify-start pb-7 mt-7 p-0 gap-1.5  tracking-wide !overflow-y-auto !overflow-x-hidden">
                  {headerdata?.map((data) => (
                    <li key={data?.id} className="min-w-max xl:mx-5 xl:mr-4   ">
                      <Link
                        href={data?.pathname}
                        className={`${
                          (isHover && data?.id === isHover) ||
                          data?.pathname === pathname
                            ? "navHover "
                            : "text-white"
                        } flex md:px-1 lg:px-2   py-2 rounded-lg`}
                        onClick={() => setIsNavbar(false)}
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
                    <li key={data?.id} className="min-w-max xl:mx-5 xl:mr-4 ">
                      <Link
                        href={data?.pathname}
                        className={`${
                          (isHover && data?.id === isHover) ||
                          data?.pathname === pathname
                            ? "navHover"
                            : ""
                        } flex md:px-1 lg:px-2 py-2 rounded-lg`}
                        onClick={() => setIsNavbar1(false)}
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
                  <div className=" grid place-items-center ">
                    <button
                      onClick={(e) => setConfirmationPopUp(true)}
                      // className="bg-[#1788FB]  xl:px-7 px-3 w-full text-white p-2 xl:rounded-r-lg  "
                      className="bg-[#1788FB] xsm:p-[0.330rem] xsm:ml-1  text-white p-2 rounded-xl xl:px-7 lg: px-3 place-items-center"
                    >
                      <div className="flex items-center gap-1">
                        <FiPower size={18} className="xl:block hidden" />
                        {/* <span className="md:ml-1 tracking-wide font-bold  xl:text-sm text-[12px] xsm:text-[10.5px]  "> */}
                        <span className="md:ml-1 tracking-wide font-bold   xl:text-sm text-[12px] xsm:text-[10.5px]  block ">
                          Logout
                        </span>
                      </div>
                    </button>
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
                    <Link href="/login " className="">
                      {/* <button className="bg-[#1788FB] text-white p-2 rounded-xl ">
                    <div className="flex items-center  px-5 ">
                      <Image
                        src={Loginicon}
                        alt="loginicon"
                        className="w-[20px] h-[20px] xl:block hidden "
                      />
                      <span className="lg:ml-2 md:text-md text-sm   block ">
                        Login
                      </span>
                    </div>
                  </button>  */}
                      <button className="bg-[#1788FB] xsm:p-2 xsm:ml-1 text-white p-2 rounded-xl xl:px-7 lg: px-3 place-items-center">
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
              <div className="text-white xl:px-8 px-0 md:pb-3 pb-5 relative mt-[2.7rem]  lg:ml-2.5 md:ml-1.5">
                <div className="hidden 2xl:flex xl:flex">
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
                      <div className="flex  items-center">
                        <h1>{userProfile?.name}</h1>
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
                      <p className="text-xs">Invited by {userProfile?.email}</p>
                      <div className="flex mt-2">
                        <Image
                          src={discord}
                          alt="discord"
                          width="10px"
                          height="10px"
                          className="mr-2 cursor-pointer"
                        />
                        <Image
                          src={Twitter}
                          alt="twitter"
                          width="10px"
                          height="10px"
                          className="mr-2 cursor-pointer"
                        />
                        <Image
                          src={medium}
                          alt="medium"
                          width="10px"
                          height="10px"
                          className="mr-2 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Only show the image on screens smaller than 2xl and xl */}
                <Link href="/profile">
                  <div
                    className="2xl:hidden xl:hidden flex gap-2"
                    style={{ position: "absolute", bottom: "0" }}
                  >
                    <Image
                      src={Sidebaruserlogo}
                      alt="Sidebaruserlogo"
                      width="30px"
                      height="30px"
                      className=" ml-2 items-center"
                    />
                    {/* < className="ml-6"> */}
                   {/*  <div className={` ${isNavbar ? "" : "hidden "} `}>
                      <p className="">{userProfile.name}</p>
                      <p className="text-xs">{userProfile.email}</p>
                    </div> */}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
