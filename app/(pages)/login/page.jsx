"use client";
import React, { useEffect, useState } from "react";

import Logo from "../../../public/assets/loginpopuplogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa";
import axiosInstance from "../../apiInstances/axiosInstance";
import useEncryption from "../../components/useEncryption/index";
import { useRouter } from "next/navigation";
import { IoEyeOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const router = useRouter();
  const { decryptData } = useEncryption();

  // useEffect(() => {
  //   const checkAuth = localStorage.getItem("Token")
  //   if (checkAuth) {
  //     router.push("/")
  //   }
  // }, [])
  const [loginFields, setLoginFields] = useState({ email: "", password: "" });
  const onChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setLoginFields({
      ...loginFields,
      [name]: value,
    });
  };

  const mydata = {
    email: loginFields?.email,
    password: loginFields?.password,
  };
  const handleSubmit = async () => {
    await axiosInstance
      .post("login", mydata)
      .then((res) => {
        const myData = res?.data;
        console.log("=========mydata:", myData);
        // console.log("token--", myData?.token);
        if (myData?.status) {
          localStorage.setItem("Token", myData?.token);
          toast.success(myData?.msg);
          setTimeout(() => {
            router.push("/");
          }, 3000);
        } else {
          toast.error(myData?.msg);
        }
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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

      <div className="px-4 sm:px-5 md:px-5 2xl:px-10 bg-black shadow-xl py-8  sm:py-8 md:py-8 lg:py-10  2xl:py-14   rounded-3xl mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-12">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl  2xl:text-4xl tracking-wide text-white   mb-10 sm:mb-10 md:mb-10 lg:mb-12 2xl:mb-14  font-semibold text-center">
          Login
        </h2>
        <div>
          <div className="text-[#CACACA] mb-2"> Enter Email </div>
          <input
            className="rounded-md w-full sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 bg-neutral-800 mb-5"
            type="email"
            name="email"
            value={loginFields?.email}
            onChange={onChangeInput}
          />
        </div>
        <div className="relative">
          <div className="text-[#CACACA] mb-2"> Enter Password </div>
          <input
            className="rounded-md w-full  sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 pl-2 pr-10 bg-neutral-800"
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            value={loginFields?.password}
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
        <div className="flex justify-end text-xs  mt-2">
          <Link href="/forgotpassword"> Forget Password ?</Link>
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded"
            onClick={handleSubmit}
          >
            Login
          </button>
          <ToastContainer />
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/signup" className="text-xs text-[#CACACA]">
            {` Don't have an account ?`}{" "}
            <span className="font-bold text-sm">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
