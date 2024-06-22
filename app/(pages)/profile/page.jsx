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
        className="md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto "
      >
        {/* 2xl:pl-64 xl:pl-64  */}
        <div className="flex flex-col xl:justify-center  lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-5">
          {/* xl:ml-32 xl:mr-[92px]  */}
          <div className="flex items-center gap-3 lg:gap-0">
            <div
              className={`lg:scale-0 scale-[1] text-3xl `}
              onClick={() => setIsNavbar(!isNavbar)}
            >
              {isNavbar === false ? (
                <div className="cursor-pointer">
                  {/* <FaBars /> */}
                  {/* <FaBarsStaggered /> */}
                  <TbArrowBarRight />
                </div>
              ) : (
                <div className="cursor-pointer">
                  {/* <MdKeyboardDoubleArrowLeft /> */}
                  <TbArrowBarLeft />
                </div>
              )}
            </div>
            <div className="text-[35px] font-medium ml-2 lg:ml-0 ">
              My Profile
            </div>
          </div>

          <div className="flex md:gap-5 gap-2 mt-6 lg:px- md:text-base text-sm items-center">
            {[1, 2, 3, 4, 5].map((button) => (
              <div key={button}>
                <button
                  className={`hover:bg-blue-500 p-1 px-2 rounded-full md:text-[18px] text-[9px] font-normal ${
                    activeButton === button && "bg-blue-500"
                  }`}
                  onClick={() => handleButtonClick(button)}
                >
                  {button === 1 && "About"}
                  {button === 2 && "Setup"}
                  {button === 3 && "Appearance"}
                  {button === 4 && "Security & Login"}
                  {button === 5 && "Notification"}
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
