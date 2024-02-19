"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loginicon from "../../../public/assets/loginicon.png";

import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import { FiPower } from "react-icons/fi";

const Loginbutton = () => {
  const token = localStorage.getItem("Token");

  const [active, setActive] = useState("");

  const getPath = usePathname();
  useEffect(() => {
    const storedActive = localStorage.getItem("Dashboard");
    setActive(storedActive || getPath);
  }, [getPath]);

  return (
    <>
      {/* flex justify-between mx-16  */}
      <div
        className={`${
          getPath === "/login" ||
          getPath === "/signup" ||
          getPath === "/forgotpassword" ||
          getPath === "/passwordverify" ||
          getPath === "/resetpassword"
            ? "hidden"
            : "flex justify-between mx-16 gap-10"
        }`}
      >
        <div className="relative">
          <input
            className="text-[#696969] bg-[#1C1C1C] pl-10 rounded-md lg:w-96 w-72 py-2 px-3  focus:outline-none"
            id="username"
            type="text"
            placeholder="Search"
          />

          <div className="absolute left-0 inset-y-0 flex items-center">
            <IoIosSearch className="h-6 w-6 ml-3 text-[#8F8F8F] hover:text-gray-500" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <IoIosNotifications size={32} />
          </div>
          <div>
            {token ? (
              <button class="bg-[#1788FB]  tracking-wider text-white font-semibold py-2 px-2 rounded-lg inline-flex items-center gap-2">
                <FiPower size={22} />
                <span className="lg:block hidden">Logout</span>
              </button>
            ) : (
              <button class="bg-[#1788FB] tracking-wider text-white font-semibold py-1.5 px-2 rounded-lg inline-flex items-center gap-2">
                <Image src={Loginicon} alt="loginicon" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* <div
        className={`${
          getPath === "/login" ||
          getPath === "/signup" ||
          getPath === "/forgotpassword" ||
          getPath === "/passwordverify" ||
          getPath === "/resetpassword"
            ? "hidden"
            : "flex  justify-end pt-5 "
        }`}
      >
        <Link href="/login">
          <button className="bg-[#1788FB] text-white p-2 rounded-xl">
            <div className="flex items-center">
              <Image src={Loginicon} alt="loginicon" width="8px" height="8px" />
              <span className="ml-2">Login</span>
            </div>
          </button>
        </Link>
      </div> */}
    </>
  );
};

export default Loginbutton;
