"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Home from "../../../public/assets/navbar/home.svg";
import Token from "../../../public/assets/navbar/token.svg";
import Holder from "../../../public/assets/navbar/holder.svg";
import Reffral from "../../../public/assets/navbar/reffral.svg";
import Leader from "../../../public/assets/navbar/leader.svg";
import Portfolio from "../../../public/assets/navbar/portfolio.svg";
import Volume from "../../../public/assets/navbar/volume.svg";
import Watch from "../../../public/assets/navbar/watch.svg";
import Discover from "../../../public/assets/navbar/discover.svg";
import Aperture from "../../../public/assets/navbar/aperture.svg";
import Official from "../../../public/assets/navbar/official.svg";

import WaveLogo from "../../../public/assets/navbar/wave.png";

import Image from "next/image";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const pathname = usePathname();
  // const { pathname } = location;
  const [isHover, setIsHover] = useState(null);
  const [isNavbar, setIsNavbar] = useState(false);
  const headerdata = [
    {
      id: 1,
      pathname: "/",
      pagename: "Home",
      img: Home,
    },
    {
      id: 2,
      pathname: "/tokendashboard",
      pagename: "Token Dashboard",
      img: Token,
    },
    {
      id: 3,
      pathname: "/holder",
      pagename: "Holder",
      img: Holder,
    },
    {
      id: 4,
      pathname: "/referral",
      pagename: "Referral",
      img: Reffral,
    },
    {
      id: 5,
      pathname: "/leaderboard",
      pagename: "Leader Board",
      img: Leader,
    },
    {
      id: 6,
      pathname: "/portfolio",
      pagename: "Portfolio",
      img: Portfolio,
    },
    {
      id: 7,
      pathname: "/volumestats",
      pagename: "Volume Stats",
      img: Volume,
    },
    {
      id: 8,
      pathname: "/watchList",
      pagename: "Watch List",
      img: Watch,
    },
    {
      id: 9,
      pathname: "/discover",
      pagename: "Discover",
      img: Discover,
    },
    {
      id: 10,
      pathname: "/apecurdocs",
      pagename: "Aperture Docs",
      img: Aperture,
    },
    {
      id: 11,
      pathname: "/officialwebsite",
      pagename: "Official Website",
      img: Official,
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

  return (
    <div
      className={`!fixed !top-0 !left-0 bg-[#0A0D1A] ${
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
          <div className="flex h-screen flex-col">
            <div className="flex items-center justify-center">
              <div
                className={`xl:hidden text-3xl `}
                onClick={() => setIsNavbar(!isNavbar)}
              >
                {isNavbar === false ? (
                  <div className="mt-10 mx-auto">
                    {" "}
                    <FaBars />{" "}
                  </div>
                ) : (
                  <div className=" mt-8 ml-3.5 "> X </div>
                )}
              </div>
              <Image
                src={WaveLogo}
                alt="Wave-Logo"
                className={`${
                  isNavbar === false ? "hidden xl:block" : "block"
                } mt-10 mx-auto`}
              />
            </div>
            <div>
              <ul className="flex flex-col justify-start mt-20 gap-1.5  tracking-wide !text-slate-400 !overflow-y-auto !overflow-x-hidden">
                {headerdata?.map((data) => (
                  <li key={data?.id} className="min-w-max">
                    <Link
                      href={data.pathname}
                      className={`${
                        (isHover && data.id === isHover) ||
                        data.pathname === pathname
                          ? "navHover"
                          : "border-l-2 border-transparent"
                      } flex md:px-2 lg:px-4  py-3 rounded-lg`}
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
                      <span className="inline-flex justify-center items-center px-3 relative">
                        <Image src={data.img} alt="" className="w-5 h-5" />
                      </span>
                      <span className="text-lg tracking-wide truncate">
                        {data.pagename}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
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
                  <Image src={data.img} alt="" className="w-4 h-4" />
                </span>
                <span className="md:text-lg text-xs tracking-wide truncate">
                  {data.pagename}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}
    </div>
  );
}

export default Navbar;
