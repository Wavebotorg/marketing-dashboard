"use client"
import React from "react"
import Logo from "../../../public/assets/loginpopuplogo.png"
import Image from "next/image"
import Link from "next/link"
import { FaRegEyeSlash } from "react-icons/fa"
import { useRouter } from "next/navigation"
const ForgotPassword = () => {
  const router = useRouter()
  const handleotp = () => {
    router.push("/passwordverify")
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
          Forget Password
        </h2>
        <div>
          <div className="text-[#CACACA] mb-2 2xl:text-left md:text-left sm:text-left xsm:text-center">
            {" "}
            Enter Email{" "}
          </div>
          <input
            className="rounded-md w-full sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[450px] 2xl:w-[450px] py-2 bg-neutral-800 mb-5"
            type="text"
            name="email"
          />
        </div>

        <div className="flex justify-center mt-10" onClick={() => handleotp()}>
          <button className="bg-[#1788FB] text-white font-bold py-2 px-4 xl:px-10 2xl:px-14 rounded">
            send OTP
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/resetpassword" className="text-xs">
            reset password ?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword