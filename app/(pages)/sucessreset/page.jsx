"use client";
import React, { useState } from "react";
import Logo from "../../../public/assets/loginpopuplogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import Otpsucess from "../../../public/assets/otpsucess.png";
import axiosInstance from "../../apiInstances/axiosInstance";

const SucessReset = () => {
  const router = useRouter();

  return (
    <>
      <div className="2xsm:pl-6452xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-0 mx-auto ">
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bgImage">
          <div className="text-center">
            <Image
              src={Logo}
              alt="Logo"
              className="2xl:h-[39px] w-full lg:h-[32px] sm:h-[32px] xsm:h-[30px]"
            />
          </div>

          <div className="px-5 sm:px-7 md:px-7 2xl:px-14 bg-black shadow-xl py-8  sm:py-8 md:py-8 lg:py-10  2xl:py-14   rounded-3xl mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-12">
            <div className="success-popup text-center">
              <div className="">
                <Image
                  src={Otpsucess}
                  alt="Otpsucess"
                  className="h-auto w-auto  mx-auto"
                />
              </div>
              <h2 className="text-white text-center text-xl pt-10">
                Your Password is Reset
                <br /> successfully, Please login again
              </h2>
              <div className="flex justify-center mt-10">
                <Link
                  href="/login"
                  className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded "
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SucessReset;
