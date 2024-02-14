"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loginicon from "../../../public/assets/loginicon.png";
const Loginbutton = () => {
  const [active, setActive] = useState("");
  const getPath = usePathname();
  useEffect(() => {
    const storedActive = localStorage.getItem("Dashboard");
    setActive(storedActive || getPath);
  }, [getPath]);
  return (
    <div
      className={`${
        getPath === "/login" ||
        getPath === "/signup" ||
        getPath === "/forgotpassword" ||
        getPath === "/passwordverify" ||
        getPath === "/resetpassword"
          ? "hidden"
          : "flex  justify-end pt-5  pb-6 border-b "
      }`}
    >
      <Link href="/login">
        <button className="bg-[#1788FB] text-white p-2 rounded-xl">
          <div className="flex items-center">
            <Image src={Loginicon} alt="loginicon" width="20px" height="20px" />
            <span className="ml-2">Login</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Loginbutton;
