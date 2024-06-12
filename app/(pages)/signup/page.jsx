"use client";
import React, { useState } from "react";
import Logo from "../../../public/assets/loginpopuplogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa";
import axiosInstance from "../../apiInstances/axiosInstance";
import { FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Cookies from "js-cookie";
const Signup = () => {
  const router = useRouter();

  const [signupdata, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    refferal: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //Get Value from Input
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupdata, [name]: value });
    validateInput(name, value);
  };

  //Show Error When Value not Fill According to Given Details
  const validateInput = (name, value) => {
    switch (name) {
      case "name":
        setErrors((prevState) => ({
          ...prevState,
          name: value ? "" : "Name is required",
        }));
        break;
      case "email":
        setErrors((prevState) => ({
          ...prevState,
          email: value
            ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
              ? ""
              : /^[^\s@]+@[^\s@]+\.$/.test(value)
              ? "Domain name is incomplete"
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
      case "confirmPassword":
        setErrors((prevState) => ({
          ...prevState,
          confirmPassword: value
            ? value === signupdata.password
              ? ""
              : "Passwords do not match"
            : "Confirm Password is required",
        }));
        break;
      default:
        break;
    }
  };

  //To see Password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //To see ConfirmPassword
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  //While Submit if any field is left the show error according to  Details
  const handleSubmit = async () => {
    setLoading(true);

    const { name, email, password, confirmPassword } = signupdata;

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
      if (!passwordRegex.test(password)) {
        toast.error(
          "Password must contain at least one number, one special character, one uppercase letter, and be at least 8 characters long."
        );
        return;
      }

      const response = await axiosInstance.post("signup", signupdata);
      console.log(response, "-----------response");
      const myData = response.data;
      localStorage.setItem("userEmail", myData?.data?.email || "");
      localStorage.setItem("type", "signup");
      console.log(myData, "----------- myData");
      if (response?.data?.status) {
        // localStorage.setItem("Token", myData?.token);
        // Cookies.set("auth-token", myData?.token);
        toast.success(response?.data?.msg);
        router.push("/passwordverify");
      } else {
        setLoading(false);
        toast.error(response?.data?.msg);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  //Prevent Number to enter only Alphabets can enter
  const handleKeyPress1 = (event) => {
    const char = String.fromCharCode(event.charCode); // Get the typed character
    const regex = /^[a-zA-Z0-9]+$/; // Allow only alphanumeric characters
    if (!regex.test(char)) {
      event.preventDefault(); // Prevent invalid input
    }
  };

  //Press Enter Key to submit
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full  h-full flex flex-col items-center justify-center bgImage overflow-y-auto">
      <div className="text-center">
        <Image
          src={Logo}
          alt="Logo"
          className="2xl:h-[39px] w-full lg:h-[32px] sm:h-[32px] xsm:h-[30px]"
        />
      </div>

      <div className="px-5 sm:px-7 md:px-7 2xl:px-14 bg-black shadow-xl py-3  flex-container md:w-[26rem] lg:w-[29rem] xl:w-[31.5rem] 2xl:w-[35rem]  md:py-8 lg:py-10  2xl:py-14   rounded-3xl mt-3 md:mt-10 lg:mt-10 xl:mt-12">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl  2xl:text-4xl tracking-wide text-white   mb-3 md:mb-10 lg:mb-12 2xl:mb-14  font-semibold text-center">
          Sign up
        </h2>

        <div className="relative">
          <div className="text-[#CACACA] mb-2"> Enter Name </div>
          <input
            className="rounded-md w-full placeholder:text-[12px] placeholder:font-normal sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 bg-neutral-800 "
            type="text"
            name="name"
            value={signupdata.name.toLowerCase()}
            onChange={onChangeInput}
            maxLength={15}
            minLength={5}
            placeholder=" Enter Name"
            onKeyPress={handleKeyPress1}
          />
          {errors.name && (
            <div className="text-red-500 text-sm mb-5 mt-1">{errors.name}</div>
          )}
        </div>
        <div className="relative">
          <div className="text-[#CACACA] my-2"> Enter Email </div>
          <input
            className="rounded-md w-full placeholder:text-[12px] placeholder:font-normal sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 bg-neutral-800 "
            type="email"
            name="email"
            value={signupdata.email}
            placeholder=" Enter Email"
            onChange={onChangeInput}
          />
          {errors.email && (
            <div className="text-red-500 text-sm mb-5 mt-1">{errors.email}</div>
          )}
        </div>
        <div className="relative">
          <div className="text-[#CACACA] my-2"> Enter Password </div>
          <input
            className="rounded-md w-full  sm:w-[310px] placeholder:text-[12px] placeholder:font-normal md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 pl-2 pr-10 bg-neutral-800 "
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder=" Enter Password"
            value={signupdata.password}
            onChange={onChangeInput}
          />
          <button
            className="absolute right-2 top-12  transform -translate-y-1/2 text-[#CACACA] cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaRegEyeSlash />}
          </button>
          {errors.password && (
            <div className="text-red-500 text-sm mb-5  sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] mt-1">
              {errors.password}
            </div>
          )}
        </div>
        <div className="relative">
          <div className="text-[#CACACA] my-2"> Confirm Password </div>
          <input
            className="rounded-md w-full  sm:w-[310px] md:w-[360px] placeholder:text-[12px] placeholder:font-normal lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 pl-2 pr-10 bg-neutral-800"
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder=" Enter Password"
            value={signupdata.confirmPassword}
            onChange={onChangeInput}
          />
          <button
            className="absolute right-2 top-12  transform -translate-y-1/2 text-[#CACACA] cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <FaEye /> : <FaRegEyeSlash />}
          </button>
          {errors.confirmPassword && (
            <div className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </div>
          )}
        </div>
        <div>
          <div className="text-[#CACACA] my-2"> Referral Code(Optional)</div>
          <input
            className="rounded-md w-full  sm:w-[310px] md:w-[360px] placeholder:text-[12px] placeholder:font-normal lg:w-[410px] xl:w-[450px] 2xl:w-[450px] p-2 pl-2 pr-10 bg-neutral-800"
            type="text"
            name="refferal"
            placeholder=" Enter Referral Code"
            value={signupdata.refferal}
            onChange={onChangeInput}
          />
        </div>

        <div className="flex justify-center mt-5">
          {loading ? (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded hover:bg-[#1789fbbb]"
            >
              <span className="loader "></span>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded hover:bg-[#1789fbbb]"
            >
              Sign Up
            </button>
          )}
          <ToastContainer />
        </div>
        <div className="flex justify-center mt-5">
          <Link href="/login" className="text-xs text-[#CACACA]">
            Already a User?{" "}
            <span className="font-bold text-sm hover:text-[#1788FB]">
              Sign in{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;