"use client"
import React, { useState } from "react"
import Logo from "../../../public/assets/loginpopuplogo.png"
import Image from "next/image"
import Link from "next/link"
import { FaRegEyeSlash } from "react-icons/fa"
import Otpsucess from "../../../public/assets/otpsucess.png"
import OtpInput from "react-otp-input"
import { useRouter } from "next/navigation"
import axiosInstance from "@/app/apiInstances/axiosInstance"
const PasswordVerify = () => {
  const email = localStorage.getItem("userEmail")

  const [otp, setOtp] = useState("")

  const router = useRouter()

  // const [isVerificationSuccess, setIsVerificationSuccess] = useState(false)
  const handleOtpChange = (value) => {
    const sanitizedValue = value.replace(/\D/g, "")
    setOtp(sanitizedValue)
  }
  const mydata = {
    email: email,
    otp: otp,
  }
  console.log("mydata--->", mydata)
  const handleSubmit = async () => {
    await axiosInstance
      .post("verify", mydata)
      .then((res) => {
        const myData = res
        console.log("res--->", res)

        if (myData?.status) {
          router.push("/login")
          localStorage.removeItem("userEmail")
          toast.success(myData?.data.msg)
        } else {
          toast.error(myData?.data.msg)
        }
      })
      .catch((err) => {
        console.log("error--->", err)
      })

    // setIsVerificationSuccess(true)
  }

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

        <div className="px-0 sm:px-5 md:px-10 bg-black shadow-xl py-8  sm:py-8 md:py-8 lg:py-10  2xl:py-14  w-[70%] sm:w-[70%]  md:w-[40%] lg:w-[40%]  2xl:w-[30%] rounded-3xl mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-12">
          {/* {isVerificationSuccess ? (
            <div className="success-popup">
              <Image
                src={Otpsucess}
                alt="Otpsucess"
                className="2xl:h-[39px] w-full lg:h-[32px] sm:h-[32px] xsm:h-[30px]"
              />
              <h2 className="text-white">
                Your Password is Reset
                <br /> successfully, Please login again
              </h2>
              <div className="flex justify-center mt-10">
                <button className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded">
                  Login
                </button>
              </div>
            </div>
          ) : ( */}
          <div>
            <h2 className="text-lg  sm:text-lg md:text-xl lg:text-2xl  2xl:text-3xl tracking-wide text-white   mb-3 sm:mb-3 md:mb-4 lg:mb-5 2xl:mb-5  font-semibold text-center">
              OTP Verification
            </h2>
            <div>
              <div className="  text-center  text-[#CACACA] tracking-wider  text-sm  sm:text-sm md:text-base lg:text-lg 2xl:text-xl   mb-4 sm:mb-4 md:mb-5 lg:mb-5 2xl:mb-10 ">
                Enter the OTP you received at Email
              </div>

              <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={4}
                inputStyle="otp-style-input outline-none focus:ring-2 focus:ring-regal-blue bg-neutral-800 
          
               h-[35px] sm:h-[65px] md:h-[60px] lg:h-[70px] 2xl:h-[80px]
            mx-1 sm:mx-2 2xl:mx-3.5 "
                containerStyle={"otp-container"}
                renderInput={(props) => <input {...props} />}
              />
            </div>

            <div className="flex justify-center mt-10" onClick={handleSubmit}>
              <button className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded">
                Verify
              </button>
            </div>
            <div className="flex justify-center mt-10 ">
              <Link
                href="#"
                className="text-xs text-[#CACACA]   "
                // onClick={resendOtp}
              >
                Resend OTP
              </Link>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  )
}

export default PasswordVerify