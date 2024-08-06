"use client";
import { IoIosNotifications } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import closearrow from "../../../public/assets/sidebar/closearrow.svg";
import openarrow from "../../../public/assets/sidebar/openarrow.svg";
import { useRouter } from "next/navigation";
import Loginicon from "../../../public/assets/loginicon.png";
import { CiSearch } from "react-icons/ci";
import { FiPower, FiLogIn } from "react-icons/fi";
import { useSearch } from "../contexts/SearchContext";
import { useWallet } from "../contexts/WalletContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";
import Notification from "../notification/Notification.js";

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState("");
  //search
  const { searchQuery, setSearchQuery } = useSearch();
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const { isNavbar, setIsNavbar } = useWallet();
  // const getPath = usePathname();
  // useEffect(() => {
  //   const storedActive = localStorage.getItem("Dashboard");
  //   setActive(storedActive || getPath);
  // }, [getPath]);

  // const token = localStorage.getItem("Token");

  // const [ConfirmationPopUp, setConfirmationPopUp] = useState(false);

  // const ClosePopUp = () => {
  //   setConfirmationPopUp(false);
  // };

  // const ConfirmLogOut = () => {
  //   localStorage.clear();
  //   router.push("/login");
  //   setConfirmationPopUp(false);
  // };
  const getPath = usePathname() || "/default-path";

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedActive = localStorage.getItem("Dashboard");
    setActive(storedActive || getPath);

    // Check for localStorage on the client side
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("Token");
      setToken(storedToken);
    }
  }, [getPath]);

  const [ConfirmationPopUp, setConfirmationPopUp] = useState(false);

  const ClosePopUp = () => {
    setConfirmationPopUp(false);
  };

  const ConfirmLogOut = () => {
    localStorage.clear();
    router.push("/login");
    setConfirmationPopUp(false);
  };

  // const [isNavbar, setIsNavbar] = useState(false);
  const navbarRef = useRef(null);
  const signupRefRegex = /^\/signupRef\/(.*)/;

  /*  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      // setIsNavbar(false);
      setIsOpen(false);
    }
  };
 */
  const notificationRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  /*   const toggleSidebar = () => {
    setIsOpen(false);
  }; */

  /* const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }; */

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        style={{
          marginLeft: isNavbar && window.innerWidth >= 1440 ? "12%" : "0",
        }}
        className={`${
          getPath === "/login" ||
          // getPath === "/profile" ||
          getPath === "/swap" ||
          getPath === "/withdraw" ||
          getPath === "/signup" ||
          getPath === "/signupRef" ||
          getPath === "/signupVerify" ||
          getPath === "/swap" ||
          getPath === "/forgotpassword" ||
          getPath === "/passwordverify" ||
          getPath === "/resetpassword" ||
          signupRefRegex.test(getPath) ||
          getPath === "/sucessreset"
            ? "hidden"
            : "flex  justify-between"
        } flex justify-between p-0 py-7  transition-all duration-500 ease-in-out`}
      >
        {/*  xl:pl-60 */}
        <div
          className={`lg:hidden block text-3xl xsm:ml-5`}
          onClick={() => setIsNavbar(!isNavbar)}
        >
          {isNavbar === false ? (
            <div className="-mt-3 cursor-pointer">
              {/* <FaBars /> */}
              {/* <FaBarsStaggered /> */}
              {/* <TbArrowBarRight /> */}
              <Image
                src={openarrow}
                alt="open sidebar arrow"
                width={40}
                height={40}
              />
            </div>
          ) : (
            <div className="  cursor-pointer">
              {" "}
              {/* <MdKeyboardDoubleArrowLeft /> */}
              {/* <TbArrowBarLeft /> */}
              <Image
                src={closearrow}
                alt="open sidebar arrow"
                width={40}
                height={40}
              />
            </div>
          )}
        </div>
        {/* <div className=" 2xsm:pl-64[14.5rem]xl:pl-[265px]   md:pl-[0.70rem] sm:pl-4 xsm:pl-[3.7rem] mx-auto "> */}
        <div className="">
          <div className="flex w-auto md:w-[350px] lg:ml-24    sm:gap-2  gap-1  text-sm  rounded-lg  bg-[#1C1C1C]   text-white ">
            {/* xl:ml-96 */}
            <div className="flex items-center pl-3  pointer-events-none">
              <CiSearch size={20} />
            </div>
            <input
              type=""
              value={searchQuery}
              onChange={handleSearchChange}
              id="default-search"
              className="bg-[#1C1C1C]  xsm:w-[10rem] p-2 outline-none rounded-lg w-auto md:w-[300px]"
              placeholder="Search"
            />
          </div>
        </div>
        <div ref={navbarRef} className=" xsm:mr-[1rem]">
          {/* xl:mr-[6rem] */}
          <button onClick={toggleSidebar}>
            <IoIosNotifications size={25} />
          </button>
          <div ref={notificationRef}>
          <Notification
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggle={toggleSidebar}
          />
        </div>
        </div>
        {/*    <Notification isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggleSidebar} /> */}



        {/* <div
          className={`${
            getPath === "/login" ||
            // getPath === "/" ||
            getPath === "/signup" ||
            getPath === "/forgotpassword" ||
            getPath === "/passwordverify" ||
            getPath === "/resetpassword" ||
            getPath === "/sucessreset"
              ? "hidden"
              : "border-b border-opacity-15  border-[#ffffff]"
          }`}
        ></div> */}
      </div>
    </>
  );
};

export default Navbar;
