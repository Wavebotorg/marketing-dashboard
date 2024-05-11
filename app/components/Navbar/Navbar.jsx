"use client";
import { IoIosNotifications } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loginicon from "../../../public/assets/loginicon.png";
import { CiSearch } from "react-icons/ci";
import { FiPower, FiLogIn } from "react-icons/fi";
import { useSearch } from "../contexts/SearchContext";
const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState("");
  //search
  const { searchQuery, setSearchQuery } = useSearch();
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

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

  return (
    <>
      {/* <div className=" 2xl:pl-[14.5rem] xl:pl-[265px]   md:pl-[0.70rem] sm:pl-4 xsm:pl-[3.7rem] mx-auto "> */}
      <div className=" 2xl:pl-[14.5rem] xl:pl-[265px]   md:pl-[0.70rem] sm:pl-4 xsm:pl-[3.7rem] mx-auto ">
        <div
          className={`${
            getPath === "/login" ||
            getPath === "/profile" ||
            getPath === "/signup" ||
            getPath === "/forgotpassword" ||
            getPath === "/passwordverify" ||
            getPath === "/resetpassword" ||
            getPath === "/sucessreset" 
              ? "hidden"
              : "flex  justify-between   py-7  xl:pl-[86px] pl-2 "
          }`}
        >
          <div className="flex w-auto md:w-[350px]    sm:gap-2 gap-1  text-sm  rounded-lg  bg-[#1C1C1C]   text-white ">
            <div className="flex items-center pl-3  pointer-events-none">
              <CiSearch size={20} />
            </div>
            <input
              type=""
              value={searchQuery}
              onChange={handleSearchChange}
              id="default-search"
              className="bg-[#1C1C1C]  xsm:w-[10rem] p-2 outline-none rounded-lg w-auto md:w-[300px]"
              placeholder="Search "
            />
          </div>

          <div className=" flex items-center gap-1.5 mr-5 xl:mr-16 ">
            <button className="xl:pr-6">
              <IoIosNotifications size={25} />
            </button>

            {/* <w3m-button /> */}

            {/* <div>
              {token ? (
                <div>
                  <button
                    onClick={(e) => setConfirmationPopUp(true)}
                    className="bg-[#1788FB] text-white p-2 rounded-xl "
                  >
                    <div className="flex items-center gap-1">
                      <FiPower size={18} />
                      <span className="md:ml-1 tracking-wide md:text-base text-sm md:block hidden">
                        Logout
                      </span>
                    </div>
                  </button>
                  {ConfirmationPopUp ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[9999999999]   ">
                        <div className="relative min-w-[250px] max-w-[90%] mx-auto  my-10 shadow-black shadow-2xl">
                       
                          <div className="border-0 rounded-lg shadow-2xl relative flex flex-col w-full bg-[#FFFFFF] outline-none focus:outline-none">
                 
                            <div className="grid justify-end place-items-center place-ContentManagement-end">
                              <button
                                className="bg-transparent border-0 text-black opacity-9 text-2xl font-normal outline-none focus:outline-none mx-3 my-2"
                                onClick={(e) => ClosePopUp()}
                              >
                                ×
                              </button>
                            </div>
                          
                            <div className="relative grid place-items-center px-6 md:px-10 py-3 flex-auto">
                              <h3 className="text-black font-semibold text-base md:text-lg  leading-relaxed text-center">
                                Are You Sure ?
                              </h3>
                              <p className="text-black font-medium text-xs md:text-sm  leading-normal text-center mt-1">
                                You want to Log Out
                              </p>
                            </div>

                           
                            <div className="flex justify-center items-center m-5">
                              <button
                                className="bg-[#1788FB] text-white font-semibold uppercase text-sm px-6 py-3 rounded-lg shadow outline-none focus:outline-none ease-linear transition-all duration-150 mx-2"
                                type="button"
                                onClick={(e) => ConfirmLogOut()}
                              >
                                Yes
                              </button>
                              <button
                                className="bg-[#d31e1e] text-white font-semibold uppercase text-sm px-6 py-3 rounded-lg shadow hover:bg-[#cc1616] hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 mx-2"
                                type="button"
                                onClick={(e) => ClosePopUp()}
                              >
                                No
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </div>
              ) : (
                <Link href="/login " className="">
                  <button className="bg-[#1788FB] text-white p-2 rounded-xl ">
                    <div className="flex items-center">
                      <FiLogIn size={18} />
                      <span className="md:ml-2 md:text-md text-sm md:w-14 ">
                        Login
                      </span>
                    </div>
                  </button>
                </Link>
              )}
            </div> */}
          </div>
        </div>
      </div>
      <div
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
      ></div>
    </>
  );
};

export default Navbar;
