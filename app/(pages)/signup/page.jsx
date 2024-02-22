"use client";
import React, { useState } from "react";

import Logo from "../../../public/assets/loginpopuplogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import axiosInstance from "../../apiInstances/axiosInstance";
// import useEncryption from "../../components/useEncryption/index"

import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  // const { decryptData } = useEncryption()
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [signupdata, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeInput = (e) => {
    const value = e.target.value.trim();
    const name = e.target.name;

    setSignupData({
      ...signupdata,
      [name]: value,
    });
  };

  const mydata = {
    name: signupdata?.name,
    email: signupdata?.email,
    password: signupdata?.password,
    confirmPassword: signupdata?.confirmPassword,
  };

  // Signup API code
  const handleSubmit = async () => {
    await axiosInstance
      .post("signup", mydata)
      .then((res) => {
        const myData = res?.data;
        console.log("=========mydata:", myData);

        localStorage.setItem("userEmail", myData?.data?.email || "");
        localStorage.setItem("type", "signup");
        if (myData?.status) {
          toast.success(myData?.data.msg);

          router.push("/passwordverify");
          // setTimeout(() => {
          // }, 3000);
        } else {
          toast.error(myData?.data.msg);
        }
      })
      .catch((err) => {
        console.log("err---->", err);
      });
  };

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bgImage">
      <div className="text-center">
        <Image
          src={Logo}
          alt="Logo"
          className="2xl:h-[39px] w-full lg:h-[32px] sm:h-[32px] xsm:h-[30px]"
        />
      </div>

      <div className="px-5 sm:px-7 md:px-7 2xl:px-14 bg-black shadow-xl py-8  sm:py-8 md:py-8 lg:py-10  2xl:py-14   rounded-3xl mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-12">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl  2xl:text-4xl tracking-wide text-white   mb-10 sm:mb-10 md:mb-10 lg:mb-12 2xl:mb-14  font-semibold text-center">
          sign up
        </h2>
        <div>
          <div className="text-[#CACACA] mb-2"> Enter Name </div>
          <input
            className="rounded-md w-full sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 bg-neutral-800 mb-5"
            type="text"
            name="name"
            value={signupdata?.name}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <div className="text-[#CACACA] mb-2"> Enter Email </div>
          <input
            className="rounded-md w-full sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 bg-neutral-800 mb-5"
            type="email"
            name="email"
            value={signupdata?.email}
            onChange={onChangeInput}
          />
        </div>
        <div className="relative">
          <div className="text-[#CACACA] mb-2"> Enter Password </div>
          <input
            className="rounded-md w-full  sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 pl-2 pr-10 bg-neutral-800 mb-5"
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            value={signupdata?.password}
            onChange={onChangeInput}
          />
          <button
            className="absolute right-2 top-14  transform -translate-y-1/2 text-[#CACACA] cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <IoEyeOutline className="" />
            ) : (
              <FaRegEyeSlash />
            )}
          </button>
        </div>
        <div className="relative">
          <div className="text-[#CACACA] mb-2"> confirm Password </div>
          <input
            className="rounded-md w-full  sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 pl-2 pr-10 bg-neutral-800"
            type={isPasswordVisible ? "text" : "password"}
            name="confirmPassword"
            value={signupdata?.confirmPassword}
            onChange={onChangeInput}
          />
          <button
            className="absolute right-2 top-14  transform -translate-y-1/2 text-[#CACACA] cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <IoEyeOutline className="" />
            ) : (
              <FaRegEyeSlash />
            )}
          </button>
          {/* <FaRegEyeSlash className="absolute right-2 top-14  transform -translate-y-1/2 text-[#CACACA] cursor-pointer" /> */}
        </div>

        <div className="flex justify-center mt-10" onClick={handleSubmit}>
          <button className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded">
            Sign up
          </button>
          <ToastContainer />
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/login" className="text-xs text-[#CACACA]">
            Already a User? <span className="font-bold text-sm">Sign in </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
