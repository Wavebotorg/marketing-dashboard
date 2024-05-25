import React, { useState, useEffect, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosInstance from "../../apiInstances/axiosInstance";
import { useWallet } from "../contexts/WalletContext";

import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
const ChangePass = () => {
  const { setWalletAddress, setEmail } = useWallet();
  const router = useRouter();
  const [changePassData, setChangePassData] = useState({
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const [errors, setErrors] = useState({
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const validateInput = (name, value) => {
    switch (name) {
      case "currentpassword":
        setErrors((prevState) => ({
          ...prevState,
          currentpassword: value ? "" : "Current Password is required",
        }));
        break;
      case "newpassword":
        setErrors((prevState) => ({
          ...prevState,
          newpassword: value
            ? /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/.test(value)
              ? ""
              : "Password must contain at least one number, one special character, one uppercase letter, and be at least 8 characters long"
            : "New Password is required",
        }));
        break;
      case "confirmpassword":
        setErrors((prevState) => ({
          ...prevState,
          confirmpassword: value
            ? value === changePassData.newpassword
              ? ""
              : "Passwords do not match"
            : "Confirm Password is required",
        }));
        break;
      default:
        break;
    }
  };

  // const mydata = {
  //   email: changePassData?.email,
  // };
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setChangePassData({
      ...changePassData,
      [name]: value.trim(),
    });
    validateInput(name, value.trim());
  };
  const [otp, setOtp] = useState("");

  const mydata1 = {
    currentPassword: changePassData?.currentpassword,
    newPassword: changePassData?.newpassword,
    confirmNewPassword: changePassData?.confirmpassword,
  };
  const handleSubmit = async () => {
    validateInput("currentpassword", changePassData.currentpassword);
    validateInput("newpassword", changePassData.newpassword);
    validateInput("confirmpassword", changePassData.confirmpassword);
    if (
      !errors.currentpassword &&
      !errors.newpassword &&
      !errors.confirmpassword
    ) {
      await axiosInstanceAuth
        .post("/changePassword", mydata1)
        .then((res) => {
          const myData = res?.data;
          console.log("chnage Password Data111111 --->", res);

          if (myData?.status) {
            setVerified(true);
            toast.success(myData?.msg);

            setChangePassData({
              currentpassword: "",
              newpassword: "",
              confirmpassword: "",
            });
          } else {
            toast.error(myData?.msg);
          }
        })
        .catch((err) => {
          console.log("err---->", err);
        });
    }
  };

  const [verified, setVerified] = useState(false);

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
  const handleOtp = async (e) => {
    e.preventDefault();
    await axiosInstance
      .post("verify", mydata)
      .then((res) => {
        const myData = res?.data;
        console.log("OTP Done--->", myData?.data);

        if (myData?.status) {
          if (myData?.data === "changepassword") {
            setVerified(true);
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      {/* <div className=" justify-center items-center h-screen"> */}
      {!verified ? (
        //  <div className="w-full h-full flex flex-col items-center justify-center ">
        <div className=" bg-[#1C1C1C] shadow-2xl mt-8 rounded-lg p-12 pl-16 ">
          {/* <div className="px-0 sm:px-5 md:px-10 bg-black shadow-xl py-8 sm:py-8 md:py-8 lg:py-10 2xl:py-14 w-[70%] sm:w-[70%] md:w-[40%] lg:w-[40%] 2xl:w-[30%] rounded-3xl mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-12"> */}
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
                inputStyle="otp-style-input1 outline-none focus:ring-2 focus:ring-regal-blue bg-neutral-800 h-[35px] sm:h-[65px] md:h-[60px] lg:h-[70px] 2xl:h-[50px] mx-1 sm:mx-2 2xl:mx-3.5 "
                containerStyle={"otp-container"}
                renderInput={(props) => (
                  <input {...props} onKeyDown={handleKeyPress} />
                )}
              />
            </div>

            <div className="flex justify-center mt-10" onClick={handleOtp}>
              <button className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded">
                Verify
              </button>
              <ToastContainer />
            </div>

            {!showResendButton && (
              <div className="flex justify-center mt-10 ">
                <Link href="#" className="text-xs text-[#CACACA] ">
                  Resend OTP in <b>{remainingTime}</b> seconds
                </Link>
              </div>
            )}
            {showResendButton && (
              <div className="flex justify-center mt-10 ">
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
      ) : (
        <div>
          {" "}
          <div className=" bg-[#1C1C1C] shadow-2xl mt-8 rounded-lg p-8 pl-16 ">
            <p className="font-medium text-[20px] mb-5 xsm:text-base">
              Change Password
            </p>
            <div className="relative">
              <label
                htmlFor="currentPassword"
                className="text-[#CACACA] mb-2 block"
              >
                Current Password
              </label>
              <div className="flex ">
                <input
                  id="currentPassword"
                  className="rounded-l-md w-full sm:max-w-[450px] py-2 pl-2 pr-10 bg-neutral-800 outline-none"
                  type={showCurrentPassword ? "text" : "password"}
                  name="currentpassword"
                  value={changePassData?.currentpassword}
                  onChange={onChangeInput}
                  placeholder="Current Password"
                />
                <div
                  className="bg-neutral-800 rounded-r-md pt-3 text-[#CACACA] cursor-pointer"
                  onClick={toggleCurrentPasswordVisibility}
                >
                  {showCurrentPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              {errors.currentpassword && (
                <div className="text-red-500 text-sm mb-5 mt-1">
                  {errors.currentpassword}
                </div>
              )}
            </div>

            <div className="relative mt-5">
              <label
                htmlFor="newPassword"
                className="text-[#CACACA] mb-2 block"
              >
                New Password
              </label>
              <div className="flex ">
                <input
                  id="newPassword"
                  className="rounded-l-md w-full sm:max-w-[450px] py-2 pl-2 pr-10 bg-neutral-800 outline-none"
                  type={showNewPassword ? "text" : "password"}
                  name="newpassword"
                  value={changePassData?.newpassword}
                  onChange={onChangeInput}
                  placeholder="New Password"
                />
                <div
                  className="bg-neutral-800 rounded-r-md pt-3 text-[#CACACA] cursor-pointer"
                  onClick={toggleNewPasswordVisibility}
                >
                  {showNewPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              {errors.newpassword && (
                <div className="text-red-500 text-sm mb-5 mt-1">
                  {errors.newpassword}
                </div>
              )}
            </div>

            <div className="relative mt-5">
              <label
                htmlFor="confirmPassword"
                className="text-[#CACACA] mb-2 block"
              >
                Confirm Password
              </label>
              <div className="flex">
                <input
                  id="confirmPassword"
                  className="rounded-l-md w-full sm:max-w-[450px] py-2 pl-2 pr-10 bg-neutral-800 outline-none"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmpassword"
                  value={changePassData?.confirmpassword}
                  onChange={onChangeInput}
                  placeholder="Confirm Password"
                />
                <div
                  className="bg-neutral-800 rounded-r-md pt-3 text-[#CACACA] cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              {errors.confirmpassword && (
                <div className="text-red-500 text-sm mb-2 mt-1">
                  {errors.confirmpassword}
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 ">
            <div className="flex justify-end mb-3">
              <button
                className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium"
                onClick={handleSubmit}
              >
                Save
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      )}
      {/* </div> */}
    </>
  );
};

export default ChangePass;
