"use client";
import { IoIosNotifications } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loginicon from "../../../public/assets/loginicon.png";
import { CiSearch } from "react-icons/ci";
const Loginbutton = () => {
  const [active, setActive] = useState("");
  const getPath = usePathname();
  useEffect(() => {
    const storedActive = localStorage.getItem("Dashboard");
    setActive(storedActive || getPath);
  }, [getPath]);
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
            : "flex  justify-between  border-b border-stone-500 pb-7 pt-5 pl-10 "
        }`}
      >
        <div className="relative flex-grow md:max-w-[700px] md:mr-10 sm:mr-5 xsm:mr-5  ">
          <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
            <CiSearch size={20} />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full md: p-2 pl-10 text-sm text--900 rounded-lg  bg-[#1C1C1C]   text-white "
            placeholder="Search"
          />
        </div>
        {/* <button className="ml-24 mr-2 "><IoIosNotifications /></button> */}
        <Link href="/login " className="">
          <button className="bg-[#1788FB] text-white p-2 rounded-xl ">
            <div className="flex items-center">
              <Image
                src={Loginicon}
                alt="loginicon"
                className="w-[20px] h-[20px] md:block hidden"
              />
              <span className="md:ml-2 md:text-md text-sm">Login</span>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Loginbutton;
