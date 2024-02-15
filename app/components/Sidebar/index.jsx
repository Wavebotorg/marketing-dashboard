

// "use client"
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const SidebarItem = ({ icon, name, path }) => {
//   const router = useRouter();
//   const [isNameVisible, setIsNameVisible] = useState(false);

//   const handleClick = () => {
//     setIsNameVisible(!isNameVisible);
//     router.push(path);
//   };

//   return (
//     <div className="flex items-center p-4 cursor-pointer" onClick={handleClick}>
//       <div className="mr-4">{icon}</div>
//       <div className={`hidden sm:inline ${isNameVisible ? 'sm:inline' : 'sm:hidden'}`}>{name}</div>
//     </div>
//   );
// };

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-800 text-white w-64 min-h-screen">
//       <SidebarItem icon="🏠" name="Home" path="/" />
//       <SidebarItem icon="📁" name="Projects" path="/projects" />
//       <SidebarItem icon="👤" name="Profile" path="/profile" />
//       {/* Add more SidebarItems as needed */}
//     </div>
//   );
// };

// export default Sidebar;


"use client";

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
const SidebarItem = ({ icon, name, path, active, onClick }) => {
  const [isNameVisible, setIsNameVisible] = useState(false);
  const router = useRouter();

  const handleClick = () => {
        setIsNameVisible(!isNameVisible);
        router.push(path);
      };
    
  return (
  <div className={`flex items-center p-4 cursor-pointer"  ${path === active ? "bg-[#1788FB] opacity-70 rounded-lg" : ""} `} onClick={handleClick}>
  <div className="mr-4">   <Image src={icon} alt={name} width="10px" height="10px" /></div>
  <div className={` hidden inline ${isNameVisible ? 'sm:inline' : 'sm:hidden'}`}>{name}</div>
</div>
  )
};

 const Sidebar = () => {
  const [active, setActive] = useState("");


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


  const handleItemClick = (path) => {
    setActive(path);
    localStorage.setItem("Dashboard", path);
  };  const getPath = usePathname();

  


  return (
    <>
      <div
        className={`${
          getPath === "/login" ||
          getPath === "/signup" ||
          getPath === "/forgotpassword" ||
          getPath === "/passwordverify" ||
          getPath === "/resetpassword"
            ? "hidden"
            : "p-5  bg-[#1C1C1C] "
        }`}
      >
      <div className={`bg-[#1C1C1C] `}>
        <div className="p-8 pb-10 flex justify-center">
          <Image src={Logo} alt="" height="50" width="132" />
        </div>
        <ul className="text-white">
          {menu.map(({ id, link, icon, name }) => (
            <SidebarItem
              key={id}
              path={link}
              icon={icon}
              name={name}
              active={active}
              onClick={() => handleItemClick(link)}
            />
          ))}
        </ul>

        <div className="border-t border-white mt-2 pb-2 -mx-10"></div>
        <ul className="text-white">
          {menubottom.map(({ id, link, icon, name }) => (
            <SidebarItem
              key={id}
              path={link}
              icon={icon}
              name={name}
              active={active}
              onClick={() => handleItemClick(link)}
            />
          ))}
        </ul>

        <div className="text-white mt-28">
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
                <h1>UniV3 Simulate</h1>
                <span>
                  <Image src={Arrow} alt="arrow" width="10px" height="10px" />
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
    </>
  );
};

export default Sidebar;
