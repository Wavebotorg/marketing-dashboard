// "use client";

// import React, { useEffect, useState } from "react";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

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
// import Apecurdocs from "../../../public/assets/sidebar/apecurdocs.svg";
// import Officialwebsite from "../../../public/assets/sidebar/officialwebsite.svg";
// import Sidebaruserlogo from "../../../public/assets/sidebar/sidebaruserlogo.png";
// import Arrow from "../../../public/assets/sidebar/arraowsidebar.png";
// import Twitter from "../../../public/assets/sidebar/twitter.png";
// import medium from "../../../public/assets/sidebar/medium.png";

// import discord from "../../../public/assets/sidebar/discord.png";
// import useEncryption from "@/app/components/useEncryption/index";
// import axios from "axios";
// import axiosInstance from "@/app/apiInstances/axiosInstance";                                                                                                                        
// import axiosInstanceAuth from "@/app/apiInstances/axiosInstanceAuth";

// function Sidebar() {
//   const router = useRouter();

//   const [allUser, setAllUser] = useState({});

//   const getdata =
//     typeof window !== "undefined" ? localStorage.getItem("details") : null;

//   // ... (other code)

//   if (getdata?.code) {
//     toast.success(getdata.message);
//   }

//   // ... (other code)

//   const Token =
//     typeof window !== "undefined" ? localStorage.getItem("Token") : null;
//   const getUserdata = async () => {
//     await axiosInstanceAuth
//       .get("getUserProfile")
//       .then((res) => {
//         const myData = res?.data?.data;
//         setAllUser(myData || []);

//         console.log("getUserProfile---->", myData);
//       })
//       .catch((err) => {
//         console.log("err --->", err);
//       });
//   };

//   useEffect(() => {
//     getUserdata();
//   }, [Token]);

//   const pathname = usePathname();
//   // const { pathname } = location;
//   const [isHover, setIsHover] = useState(null);
//   const [isHover1, setIsHover1] = useState(null);
//   const [isNavbar, setIsNavbar] = useState(false);
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
//       pathname: "/tokendashboard",
//       icon: Tokendashboard,
//       pagename: "Token Dashboard",
//     },
//     {
//       id: 3,
//       pathname: "/holder",
//       icon: Holder,
//       pagename: "Holder",
//     },
//     {
//       id: 4,
//       pathname: "/referral",
//       icon: Referral,
//       pagename: "Referral",
//     },
//     {
//       id: 5,
//       pathname: "/leaderboard",
//       icon: Leaderboard,
//       pagename: "Leader Board",
//     },
//     {
//       id: 6,
//       pathname: "/portfolio",
//       icon: Portfolio,
//       pagename: "Portfolio",
//     },
//     {
//       id: 7,
//       pathname: "/volumestats",
//       icon: Volumestats,
//       pagename: "Volume Stats",
//     },
//   ];

//   const headerbottom = [
//     {
//       id: 8,
//       pathname: "/watchList",
//       icon: WatchList,
//       pagename: "Watch List",
//     },
//     {
//       id: 9,
//       pathname: "/discover",
//       icon: Discover,
//       pagename: "Discover",
//     },
//     {
//       id: 10,
//       pathname: "/apecurdocs",
//       icon: Apecurdocs,
//       pagename: "Apecurdocs",
//     },
//     {
//       id: 11,
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
//     pathname === "/signup" ||
//     pathname === "/forgotpassword" ||
//     pathname === "/passwordverify" ||
//     pathname === "/resetpassword" ||
//     pathname === "/sucessreset";

//   const [userProfile, setUserProfile] = useState([]);

//   useEffect(() => {
//     const getUserProfile = async () => {
//       try {
//         const response = await axiosInstanceAuth.get("/getUserProfile");
//         setUserProfile(response?.data?.data || []);
//         console.log("User Profile Data:", response?.data?.data);
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//       }
//     };

//     getUserProfile();
//   }, []);

//   return (
//     <div
//       className={` fixed top-0 left-0 bg-[#1C1C1C] h-full z-[9999] ${
//         matchPath ? "hidden" : "block"
//       } `}
//     >
//       <div
//         className={`sidebar   ${
//           isNavbar
//             ? "w-72"
//             : "w-[3rem] md:w-[3.5rem] lg:w-[4rem] xl:w-72 relative"
//         }`}
//       >
//         <div className="sidebar h-full  -ml-[4px] hover:shadow-lg ">
//           {/* <div className="sidebar min-h-screen lg:block hidden w-[3.35rem] overflow-hidden p-1 hover:w-52  hover:shadow-lg"> */}
//           <div className="flex h-screen flex-col  overflow-y-auto">
//             <div className="flex items-center justify-center">
//               <div
//                 className={`xl:hidden text-3xl `}
//                 onClick={() => setIsNavbar(!isNavbar)}
//               >
//                 {isNavbar === false ? (
//                   <div className="mt-10 mx-auto cursor-pointer">
//                     {" "}
//                     <FaBars />{" "}
//                   </div>
//                 ) : (
//                   <div className=" mt-8 ml-3.5 cursor-pointer"> X </div>
//                 )}
//               </div>
//               <Image
//                 src={Logo}
//                 alt="wave-logo"
//                 className={`${
//                   isNavbar === false ? "hidden xl:block" : "block"
//                 } mt-10 mx-auto`}
//               />
//             </div>
//             <div>
//               <ul className="flex flex-col justify-start lg:pb-10 mt-10 p-0 gap-1.5  tracking-wide !overflow-y-auto !overflow-x-hidden">
//                 {headerdata?.map((data) => (
//                   <li key={data?.id} className="min-w-max">
//                     <Link
//                       href={data.pathname}
//                       className={`${
//                         (isHover && data.id === isHover) ||
//                         data.pathname === pathname
//                           ? "navHover"
//                           : ""
//                       } flex md:px-2 lg:px-3  py-2 rounded-lg`}
//                       onClick={() => setIsNavbar(false)}
//                       onMouseEnter={() => HoverStyle(data?.id)}
//                       onMouseLeave={() => setIsHover(null)}
//                     >
//                       <div
//                         className={
//                           (isHover && data.id === isHover) ||
//                           data.pathname === pathname
//                             ? "dropdown-left-border  -ml-[0px]"
//                             : "-ml-[0px]"
//                         }
//                       ></div>
//                       <span className="inline-flex justify-center items-center px-4 relative ">
//                         <Image src={data.icon} alt="" className="w-7 h-6" />
//                       </span>
//                       <span className="text-lg tracking-wide truncate">
//                         {data.pagename}
//                       </span>
//                     </Link>
//                   </li>
//                 ))}
//                 <div className="border-b border-stone-500 my-2 " />
//                 {headerbottom?.map((data) => (
//                   <li key={data?.id} className="min-w-max">
//                     <Link
//                       href={data.pathname}
//                       className={`${
//                         (isHover && data.id === isHover) ||
//                         data.pathname === pathname
//                           ? "navHover"
//                           : ""
//                       } flex md:px-2 lg:px-3 py-2 rounded-lg`}
//                       onClick={() => setIsNavbar1(false)}
//                       onMouseEnter={() => HoverStyle(data?.id)}
//                       onMouseLeave={() => setIsHover(null)}
//                     >
//                       <div
//                         className={
//                           (isHover1 && data.id === isHover1) ||
//                           data.pathname === pathname
//                             ? "dropdown-left-border -ml-[0px] "
//                             : "-ml-[0px]"
//                         }
//                       ></div>
//                       <span className="inline-flex justify-center  px-4 items-center relative">
//                         <Image src={data.icon} alt="" className="w-7 h-6" />
//                       </span>
//                       <span className="text-lg tracking-wide truncate">
//                         {data.pagename}
//                       </span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="text-white xl:px-4 px-0 md:pb-3 pb-5 relative lg:mt-24̣ sm:mt-32 xsm:mt-20  lg:ml-2.5 md:ml-1.5">
//               <div className="hidden 2xl:flex xl:flex">
//                 <div className="flex gap-2">
//                   <div>
//                     <Image
//                       src={Sidebaruserlogo}
//                       alt="Sidebaruserlogo"
//                       width="20px"
//                       height="10px"
//                     />
//                   </div>

//                   <div>
//                     <div className="flex  items-center">
//                       <h1>{allUser.name}</h1>
//                       <span>
//                         <Image
//                           src={Arrow}
//                           alt="arrow"
//                           width="10px"
//                           height="10px"
//                           className="mb-3 ml-1.5"
//                         />
//                       </span>
//                     </div>
//                     <p className="text-xs">Invited by {allUser.email}</p>
//                     <div className="flex mt-2">
//                       <Image
//                         src={discord}
//                         alt="discord"
//                         width="10px"
//                         height="10px"
//                         className="mr-2 cursor-pointer"
//                       />
//                       <Image
//                         src={Twitter}
//                         alt="twitter"
//                         width="10px"
//                         height="10px"
//                         className="mr-2 cursor-pointer"
//                       />
//                       <Image
//                         src={medium}
//                         alt="medium"
//                         width="10px"
//                         height="10px"
//                         className="mr-2 cursor-pointer"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Only show the image on screens smaller than 2xl and xl */}
//               <div
//                 className="2xl:hidden xl:hidden flex gap-2"
//                 style={{ position: "absolute", bottom: "0" }}
//               >
//                 <Image
//                   src={Sidebaruserlogo}
//                   alt="Sidebaruserlogo"
//                   width="30px"
//                   height="30px"
//                   className=" ml-2 items-center"
//                 />
//                 <div className={` ${isNavbar ? "" : "hidden"} `}>
//                   <p className="">{allUser.name}</p>
//                   <p className="text-xs">{allUser.email}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;



"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
import Apecurdocs from "../../../public/assets/sidebar/apecurdocs.svg";
import Officialwebsite from "../../../public/assets/sidebar/officialwebsite.svg";
import Sidebaruserlogo from "../../../public/assets/sidebar/sidebaruserlogo.png";
import Arrow from "../../../public/assets/sidebar/arraowsidebar.png";
import Twitter from "../../../public/assets/sidebar/twitter.png";
import medium from "../../../public/assets/sidebar/medium.png";

import discord from "../../../public/assets/sidebar/discord.png";
import useEncryption from "@/app/components/useEncryption/index";
import axios from "axios";
import axiosInstance from "@/app/apiInstances/axiosInstance";                                                                                                                        
import axiosInstanceAuth from "@/app/apiInstances/axiosInstanceAuth";

function Sidebar() {
  const router = useRouter();

  const [allUser, setAllUser] = useState({});

  const getdata =
    typeof window !== "undefined" ? localStorage.getItem("details") : null;

  // ... (other code)

  if (getdata?.code) {
    toast.success(getdata.message);
  }

  // ... (other code)

  const Token =
    typeof window !== "undefined" ? localStorage.getItem("Token") : null;
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
      id: 8,
      pathname: "/watchList",
      icon: WatchList,
      pagename: "Watch List",
    },
    {
      id: 9,
      pathname: "/discover",
      icon: Discover,
      pagename: "Discover",
    },
    {
      id: 10,
      pathname: "/apecurdocs",
      icon: Apecurdocs,
      pagename: "Apecurdocs",
    },
    {
      id: 11,
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
    pathname === "/resetpassword" ||
    pathname === "/sucessreset";

  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await axiosInstanceAuth.get("/getUserProfile");
        setUserProfile(response?.data?.data || []);
        console.log("User Profile Data:", response?.data?.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    getUserProfile();
  }, []);

  return (
    <div
      className={` fixed top-0 left-0 bg-[#1C1C1C] h-full z-[9999] ${
        matchPath ? "hidden" : "block"
      } `}
    >
      <div
        className={`sidebar   ${
          isNavbar
            ? "w-72"
            : "w-[3rem] md:w-[3.5rem] lg:w-[4rem] xl:w-72 relative"
        }`}
      >
        <div className="sidebar h-full  -ml-[4px] hover:shadow-lg ">
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
              <ul className="flex flex-col justify-start lg:pb-10 mt-10 p-0 gap-1.5  tracking-wide !overflow-y-auto !overflow-x-hidden">
                {headerdata?.map((data) => (
                  <li key={data?.id} className="min-w-max">
                    <Link
                      href={data.pathname}
                      className={`${
                        (isHover && data.id === isHover) ||
                        data.pathname === pathname
                          ? "navHover"
                          : ""
                      } flex md:px-2 lg:px-3  py-2 rounded-lg`}
                      onClick={() => setIsNavbar(false)}
                      onMouseEnter={() => HoverStyle(data?.id)}
                      onMouseLeave={() => setIsHover(null)}
                    >
                      <div
                        className={
                          (isHover && data.id === isHover) ||
                          data.pathname === pathname
                            ? "dropdown-left-border  -ml-[0px]"
                            : "-ml-[0px]"
                        }
                      ></div>
                      <span className="inline-flex justify-center items-center px-4 relative ">
                        <Image src={data.icon} alt="" className="w-7 h-6" />
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
                        (isHover && data.id === isHover) ||
                        data.pathname === pathname
                          ? "navHover"
                          : ""
                      } flex md:px-2 lg:px-3 py-2 rounded-lg`}
                      onClick={() => setIsNavbar1(false)}
                      onMouseEnter={() => HoverStyle(data?.id)}
                      onMouseLeave={() => setIsHover(null)}
                    >
                      <div
                        className={
                          (isHover1 && data.id === isHover1) ||
                          data.pathname === pathname
                            ? "dropdown-left-border -ml-[0px] "
                            : "-ml-[0px]"
                        }
                      ></div>
                      <span className="inline-flex justify-center  px-4 items-center relative">
                        <Image src={data.icon} alt="" className="w-7 h-6" />
                      </span>
                      <span className="text-lg tracking-wide truncate">
                        {data.pagename}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-white xl:px-4 px-0 md:pb-3 pb-5 relative lg:mt-24̣ sm:mt-32 xsm:mt-20  lg:ml-2.5 md:ml-1.5">
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
                      <h1>{allUser.name}</h1>
                      <span>
                        <Image
                          src={Arrow}
                          alt="arrow"
                          width="10px"
                          height="10px"
                          className="mb-3 ml-1.5"
                        />
                      </span>
                    </div>
                    <p className="text-xs">Invited by {allUser.email}</p>
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
                <div className={` ${isNavbar ? "" : "hidden"} `}>
                  <p className="">{allUser.name}</p>
                  <p className="text-xs">{allUser.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;