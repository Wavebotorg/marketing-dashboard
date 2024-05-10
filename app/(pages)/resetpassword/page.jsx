
"use client";
import React, { useState } from "react";
import Logo from "../../../public/assets/loginpopuplogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../apiInstances/axiosInstance";

const ResetPassword = () => {
  const router = useRouter();
  const email = typeof window !== 'undefined' ? localStorage.getItem("userEmail") : null;

  const [resetPassData, setResetPassData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [isVerificationSuccess, setIsVerificationSuccess] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false); // Added state for newPassword visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Added state for confirmPassword visibility
  const [errors, setErrors] = useState({newPassword: "",  confirmPassword: "" });
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setResetPassData({
      ...resetPassData,
      [name]: value.trim(),
    });
    validateInput(name, value);
  };

  const mydata = {
    newPassword: resetPassData?.newPassword,
    confirmPassword: resetPassData?.confirmPassword,
    email: email,
  };
  const validateInput = (name, value) => {
    switch (name) {
     
      
      case "newPassword":
        setErrors((prevState) => ({
          ...prevState,
          newPassword: value
            ? /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/.test(value)
              ? ""
              : "Password must contain at least one number, one special character, one uppercase letter, and be at least 8 characters long"
            : "new Password is required",
        }));
        break;
      case "confirmPassword":
        setErrors((prevState) => ({
          ...prevState,
          confirmPassword: value
            ? value === resetPassData.newPassword
              ? ""
              : "Passwords do not match"
            : "Confirm Password is required",
        }));
        break;
      default:
        break;
    }
  };
  const handleSubmit = async () => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(mydata.newPassword && mydata?.confirmPassword)) {
      toast.error("Password must contain at least one number, one special character, one uppercase letter, and be at least 8 characters long.");
      return;
    }
  
    if (mydata.newPassword.length < 8 && mydata.confirmPassword.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }
    
    await axiosInstance
      .post("resetPassword", mydata)
      .then((res) => {
        const myData = res?.data;
        console.log("Reset Password Data --->", myData?.msg);
        if (myData?.status) {
          toast.success(myData?.msg);
          router.push("/");
          // setTimeout(() => {
          // }, 3000);
        } else {
          toast.error(myData?.msg);
        }
      })
      .catch((err) => {
        console.log("err---->", err);
      });
    setIsVerificationSuccess(true);
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

      <div className="px-5 sm:px-7 md:px-7 2xl:px-14 bg-black shadow-xl py-8  sm:py-8 md:py-8 lg:py-10  2xl:py-14   rounded-3xl mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-12">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl  2xl:text-4xl tracking-wide text-white   mb-10 sm:mb-10 md:mb-10 lg:mb-12 2xl:mb-14  font-semibold text-center">
          Reset Password
        </h2>

        <div className="relative">
          <div className="text-[#CACACA] mb-2"> Enter Password </div>
          <input
            className="rounded-md w-full  sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] py-2 pl-2 pr-10 bg-neutral-800"
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            value={resetPassData?.newPassword}
            onChange={onChangeInput}
          />
            {errors.newPassword && (
            <div className="text-red-500 mb-5 text-sm sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] mt-1">{errors.newPassword}</div>
          )}
          <div className="absolute right-2 top-12  transform -translate-y-1/2 text-[#CACACA] cursor-pointer">
            {showNewPassword ? (
              <FaEye onClick={toggleNewPasswordVisibility} />
            ) : (
              <FaEyeSlash onClick={toggleNewPasswordVisibility} />
            )}
          </div>
        </div>
        <div className="relative">
          <div className="text-[#CACACA] mt-5 mb-2"> Confirm Password </div>
          <input
            className="rounded-md w-full  sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] py-2 pl-2 pr-10 bg-neutral-800"
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={resetPassData?.confirmPassword}
            onChange={onChangeInput}
          />
       {errors.confirmPassword && (
            <div className="text-red-500 text-sm mt-1 ">
              {errors.confirmPassword}
            </div>
          )}
          <div className="absolute right-2 top-12  transform -translate-y-1/2 text-[#CACACA] cursor-pointer">
            {showConfirmPassword ? (
              <FaEye onClick={toggleConfirmPasswordVisibility} />
            ) : (
              <FaEyeSlash onClick={toggleConfirmPasswordVisibility} />
            )}
          </div>
        </div>

        <div className="flex justify-center mt-10" onClick={handleSubmit}>
          <button className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded hover:bg-[#1789fbbb]">
            Submit
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;