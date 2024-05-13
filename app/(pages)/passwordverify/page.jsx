

"use client";
import React, { useState, useEffect } from "react";
import Logo from "../../../public/assets/loginpopuplogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa";
import OtpInput from "react-otp-input";
import { useRouter } from "next/navigation";
import axiosInstance from "../../apiInstances/axiosInstance";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PasswordVerify = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [showResendButton, setShowResendButton] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10);
  const timer1 = setTimeout(() => {
    setRemainingTime(remainingTime - 1);
  }, 1000);


  const timer = setTimeout(() => {
    setShowResendButton(true);
  }, 10000);
  const email =
    typeof window !== "undefined" ? localStorage.getItem("userEmail") : null;
  const types =
    typeof window !== "undefined" ? localStorage.getItem("type") : null;

  useEffect(() => {
    if (!email || !types) {
      // Redirect to the appropriate page if user email or type is not available
      router.push("/login");
    }
  }, []);

  const handleOtpChange = (value) => {
    const sanitizedValue = value.replace(/\D/g, "");
    setOtp(sanitizedValue);
  };

  const mydata = {
    email: email,
    otp: otp,
    types,
  };
  // const redirect=()=>{
  //   router.push("/login");
  // }
  const handleSubmit = async () => {
    await axiosInstance
      .post("verify", mydata)
      .then((res) => {
        const myData = res?.data;
        console.log("OTP Done--->", myData?.data);

        if (myData?.status) {
          if (myData?.data === "signup") {
            router.push("/");
          }

          if (myData?.data === "forget") {
            router.push("/resetpassword");
          }

          localStorage.removeItem("type");
          toast.success(myData?.msg);
        } else {
          toast.error(myData?.msg);
        }
      })
      .catch((err) => {
        console.log("error--->", err);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const [resendStatus, setResendStatus] = useState(false);

  const resendOtp = async () => {
    try {
      const res = await axiosInstance.post("/resendotp", {
        email: email,
        types,
      });
      const responseData = res?.data;
      console.log("responseData--------", responseData);
      if (responseData.status) {
        toast.success(responseData?.msg);
        setResendStatus(true);
      } else {
        toast.error(responseData?.msg);
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bgImage">
        <div className="text-center">
          <Image
            src={Logo}
            alt="Logo"
            className="2xl:h-[39px] w-full lg:h-[32px] sm:h-[32px] xsm:h-[30px]"
          />
        </div>

        <div className="px-0 sm:px-5 md:px-10 bg-black shadow-xl py-8 sm:py-8 md:py-8 lg:py-10 2xl:py-14 w-[70%] sm:w-[70%] md:w-[40%] lg:w-[40%] 2xl:w-[30%] rounded-3xl mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-12">
          <div>
            <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl tracking-wide text-white mb-3 sm:mb-3 md:mb-4 lg:mb-5 2xl:mb-5 font-semibold text-center">
              OTP Verification
            </h2>
            <div>
              <div className="text-center text-[#CACACA] tracking-wider text-sm sm:text-sm md:text-base lg:text-lg 2xl:text-xl mb-4 sm:mb-4 md:mb-5 lg:mb-5 2xl:mb-10 ">
                Enter the OTP you received at Email
              </div>

              <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={4}
                inputStyle="otp-style-input outline-none focus:ring-2 focus:ring-regal-blue bg-neutral-800 h-[35px] sm:h-[65px] md:h-[60px] lg:h-[70px] 2xl:h-[80px] mx-1 sm:mx-2 2xl:mx-3.5 "
                containerStyle={"otp-container"}
                renderInput={(props) => <input {...props} onKeyDown={handleKeyPress} />}
              />
            </div>

            <div className="flex justify-center mt-10" onClick={handleSubmit}>
              <button className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded">
                Verify
              </button>
              <ToastContainer />
            </div>

            {!showResendButton && (<div className="flex justify-center mt-10 ">
              <Link
                href="#"
                className="text-xs text-[#CACACA] "

              >
                Resend OTP in <b>{remainingTime}</b> seconds
              </Link>

            </div>
            )}
            {showResendButton && (<div className="flex justify-center mt-10 ">
              <Link
                href="#"
                className="text-xs text-[#CACACA] "
                onClick={resendOtp}
              >
              Resend Otp
              </Link>

            </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
};

export default PasswordVerify;
