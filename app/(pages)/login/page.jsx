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
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();
  const { decryptData } = useEncryption();
  const [validCaptcha, setValidCaptcha] = useState(false);

  const [captchaError, setCaptchaError] = useState(false);
  // useEffect(() => {
  //   const checkAuth = localStorage.getItem("Token")
  //   if (checkAuth) {
  //     router.push("/")
  //   }
  // }, [])
  const [loginFields, setLoginFields] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const onChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setLoginFields({
      ...loginFields,
      [name]: value,
    });
    validateInput(name, value);
  };

  const mydata = {
    email: loginFields?.email,
    password: loginFields?.password,
  };
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
      case "password":
        setErrors((prevState) => ({
          ...prevState,
          password: value
            ? /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/.test(value)
              ? ""
              : "Password must contain at least one number, one special character, one uppercase letter, and be at least 8 characters long"
            : "Password is required",
        }));
        break;

      default:
        break;
    }
  };
  const handleSubmit = async () => {
    if (!validCaptcha) {
      setCaptchaError(true);
      return;
    }

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
          }, 700);
        } else {
          toast.error(myData?.msg);
        }
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  console.log("🚀 ~ Login ~ isPasswordVisible:", isPasswordVisible);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

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

      <div className="px-4 sm:px-5 md:px-5 2xl:px-10 bg-black shadow-xl py-8  sm:py-8 md:py-8 lg:py-10  2xl:py-14   rounded-3xl mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-12">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl  2xl:text-4xl  tracking-wide text-white   mb-10 sm:mb-10 md:mb-10 lg:mb-12 2xl:mb-14  font-semibold text-center">
          Login
        </h2>
        <div>
          <div className="text-[#CACACA] mb-2"> Enter Email </div>
          <input
            className="rounded-md w-full sm:w-[310px] placeholder:text-[12px] placeholder:font-normal md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 bg-neutral-800 "
            type="email"
            name="email"
            value={loginFields?.email}
            onChange={onChangeInput}
            placeholder="Your Enter Email"
            onKeyPress={handleKeyPress}
          />
          {errors.email && (
            <div className="text-red-500 text-sm mb-5 mt-1">{errors.email}</div>
          )}
        </div>
        <div className="relative">
          <div className="text-[#CACACA] my-2"> Enter Password </div>
          <input
            className="rounded-md w-full  sm:w-[310px] md:w-[360px] placeholder:text-[12px] placeholder:font-normal lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 pl-2 pr-10 bg-neutral-800"
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            value={loginFields?.password}
            onChange={onChangeInput}
            placeholder="Your Enter Password"
            onKeyPress={handleKeyPress}
          />
          {errors.password && (
            <div className="text-red-500 text-sm sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] mt-1">
              {errors.password}
            </div>
          )}

          <button
            className="absolute right-2 top-12 transform -translate-y-1/2 text-[#CACACA] cursor-pointer"
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
        {captchaError && (
          <div className="text-red-500">Please complete the captcha.</div>
        )}
        <ReCAPTCHA
          // sitekey="6LcxWE4pAAAAADTuZPl7FRbwvRiUQ8cndvvTZsNW"
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITEKEY}
          // onChange={(value) => setValidCaptcha(value)}
          onChange={(value) => {
            setValidCaptcha(value);
            setCaptchaError(false);
          }}
          className=" flex justify-center mt-5"
        />

        <div className="flex justify-center mt-10">
          <button
            className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded hover:bg-[#1789fbbb]"
            onClick={handleSubmit}
            disabled={!validCaptcha}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
                setCreateFolder(false);
              }
            }}
          >
            Login
          </button>
          <ToastContainer />
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/signup" className="text-xs text-[#CACACA] ">
            {` Don't have an account ?`}{" "}
            <span className="font-bold text-sm hover:text-[#1788FB]">
              Sign up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
