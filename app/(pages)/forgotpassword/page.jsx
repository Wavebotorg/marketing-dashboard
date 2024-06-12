"use client";
import React, { useState } from "react";
import Logo from "../../../public/assets/loginpopuplogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../apiInstances/axiosInstance";
import Link from "next/link";

const ForgotPassword = () => {
  const router = useRouter();

  const [forgetData, setForgetData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({ email: "" });

  //Get Value from Input
  const onChangeInput = (e) => {
    const value = e.target.value.trim();
    const name = e.target.name;

    setForgetData({
      ...forgetData,
      [name]: value,
    });
    validateInput(name, value);
  };

  //Pass data to backend for Forget password
  const mydata = {
    email: forgetData?.email,
  };

  //Show Error When Value not Fill According to Given Details
  const validateInput = (name, value) => {
    switch (name) {
      case "email":
        setErrors((prevState) => ({
          ...prevState,
          email: value
            ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
              ? ""
              : "Invalid email address"
            : "Email is required",
        }));
        break;
      default:
        break;
    }
  };

  // Forget Password API code
  const handleSubmit = async () => {
    await axiosInstance
      .post("forgetPassword", mydata)
      .then((res) => {
        const myData = res?.data;
        // console.log("Forget Password Data --->", myData);
        localStorage.setItem("type", "forget");
        localStorage.setItem("userEmail", forgetData?.email);
        if (myData?.status) {
          toast.success(myData?.msg);

          router.push("/passwordverify");
          // setTimeout(() => {
          // }, 3000);
        } else {
          toast.error(myData?.msg);
        }
      })
      .catch((err) => {
        console.log("err---->", err);
      });
  };

  //Press Enter Key to submit
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bgImage">
      <div className="text-center">
        <Image
          src={Logo}
          alt="Logo"
          className="2xl:h-[39px] w-full lg:h-[32px] sm:h-[32px] xsm:h-[30px]"
        />
      </div>

      <div className="px-5 sm:px-7 md:px-7 2xl:px-14 bg-black shadow-xl py-8  sm:py-8 md:py-8 lg:py-10  2xl:py-14  flex-container md:w-[26rem] lg:w-[29rem] 2xl:w-[35rem]  xl:w-[31.5rem] rounded-3xl mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-12">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl  2xl:text-4xl tracking-wide text-white   mb-10 sm:mb-10 md:mb-10 lg:mb-12 2xl:mb-14  font-semibold text-center">
          Forget Password
        </h2>
        <div>
          <div className="text-[#CACACA] mb-2 2xl:text-left md:text-left sm:text-left xsm:text-center ">
            Enter Email
          </div>
          <input
            className="rounded-md w-full sm:w-[310px] placeholder:text-[12px] placeholder:font-normal md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 bg-neutral-800 "
            type="email"
            name="email"
            value={forgetData?.email}
            onChange={onChangeInput}
            placeholder="Your Enter Email"
            onKeyPress={handleKeyPress}
          />
          {errors.email && (
            <div className="text-red-500 text-sm mb-5 mt-1">{errors.email}</div>
          )}
        </div>

        <div className="flex justify-center mt-10 " onClick={handleSubmit}>
          <button className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded hover:bg-[#1789fbbb]">
            send OTP
          </button>
        </div>
        <ToastContainer />
        <div className="flex  mt-5 justify-center ">
          <Link href="/login" className="text-xs">
            Back to login
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default ForgotPassword;
