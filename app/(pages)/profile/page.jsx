"use client";
import React, { useEffect, useState } from "react";
import Appearance from "../../components/Profileinfo/Appearance";
import About from "../../components/Profileinfo/About";
import Notification from "../../components/Profileinfo/Notification";
import Security from "../../components/Profileinfo/Security";
import Setup from "../../components/Profileinfo/Setup";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { useWallet } from "../../components/contexts/WalletContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";
import closearrow from "../../../public/assets/sidebar/closearrow.svg";
import openarrow from "../../../public/assets/sidebar/openarrow.svg";
import Image from "next/image";
import { ImStatsBars } from "react-icons/im";
import { IoPieChartSharp } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { TbChartCandleFilled } from "react-icons/tb";

const Profile = () => {
  const { isNavbar, setIsNavbar } = useWallet();
  const [activeButton, setActiveButton] = useState(1);

  const [componentVisibility, setComponentVisibility] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const handleButtonClick = (component) => {
    setComponentVisibility((prevState) => ({
      ...prevState,
      [activeButton]: false,
      [component]: true,
    }));
    setActiveButton(component);
  };

  return (
    <>
      <div
        style={{
          marginLeft: isNavbar && window.innerWidth >= 1440 ? "12%" : "0",
        }}
        className="md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto transition-all duration-500 ease-in-out"
      >
        {/* 2xl:pl-64 xl:pl-64  */}
        <div className="flex flex-col xl:justify-center  lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 ">
          {/* xl:ml-32 xl:mr-[92px]  */}
          <div className="flex items-center gap-3 lg:gap-0  ">
            <div
              className={`lg:scale-0 scale-[1] text-3xl fixed bg-black w-full xsm:pt-[121px] lg:pt-0 `}
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
                <div className="cursor-pointer">
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
            <div className="text-[35px] font-medium bg-black w-full  lg:ml-0 fixed ml-14 pt-[119px]">
              My Profile
            </div>
          </div>

          <div className="flex justify-center  text-center md:gap-5 gap-2  mb-5 lg:px- md:text-base text-sm items-center p-4 sticky top-20 bg-black z-50">
            {[1, 2, 3, 4, 5].map((button) => (
              <div key={button} className="bg-black">
                <button
                  className={` flex items-center hover:bg-blue-500 p-1 px-2 rounded-xl md:text-[18px] text-[9.5px] font-normal ${
                    activeButton === button && "bg-blue-500"
                  }`}
                  onClick={() => handleButtonClick(button)}
                >
                  {button === 1 && (
                    <>
                      <PiSquaresFourFill className="mr-1" /> Overview
                    </>
                  )}
                  {button === 2 && (
                    <>
                      <ImStatsBars className="mr-1" /> Stats
                    </>
                  )}
                  {button === 3 && (
                    <>
                      <IoPieChartSharp className="mr-1" /> Portfolio
                    </>
                  )}
                  {button === 4 && (
                    <>
                      <TbChartCandleFilled className="mr-1" /> Chart
                    </>
                  )}

                  {/* {button === 5 && "Notification"} */}
                </button>
              </div>
            ))}
          </div>

          <div className="">
            {Object.keys(componentVisibility).map((key) => (
              <div key={key}>
                {componentVisibility[key] && renderComponent(key)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const renderComponent = (key) => {
  switch (parseInt(key)) {
    case 1:
      return <About />;
    case 2:
      return <Setup />;
    case 3:
      return <Appearance />;
    case 4:
      return <Security />;
    case 5:
      return <Notification />;
    default:
      return null;
  }
};

export default Profile;
