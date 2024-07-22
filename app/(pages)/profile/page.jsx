"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
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
import Profiles from "../../../public/assets/profile.png";
import sol from "../../../public/assets/sol.png";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import { useIsMediumOrSmallScreen } from "../../components/hook/mediaquery"

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

  // const [imageSrc, setImageSrc] = useState(Profiles);
  const { imageSrc, setImageSrc } = useWallet();
  const fileInputRef = useRef(null);

  const handleButtonClick = (component) => {
    setComponentVisibility((prevState) => ({
      ...prevState,
      [activeButton]: false,
      [component]: true,
    }));
    setActiveButton(component);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const [userProfile, setUserProfile] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await axiosInstanceAuth.get("/getUserProfile");
        setUserProfile(response?.data?.data?.name || []);
        setEmail(response?.data?.data?.email);
        console.log(
          "🚀🚜🚛🚒🚜🛴 ~ getUserProfile ~ setEmail:",
          response?.data?.data?.email
        );
        console.log(
          "🦼🛹🛹🚔🚜🚛User Profile Data:",
          response?.data?.data?.name
        );
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    getUserProfile();
  }, []);

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topOffset = window.pageYOffset;
      setShowImage(topOffset > 102);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMediumOrSmallScreen = useIsMediumOrSmallScreen();
  
  /* function isMediumOrSmallScreen() {
    // Assuming Tailwind CSS breakpoints
    const md = window.matchMedia('(max-width: 768px)').matches;
    const sm = window.matchMedia('(max-width: 640px)').matches;
    
    return md || sm;
  }
   */

  return (
    <>
      <div
        style={{
          marginLeft: isNavbar && window.innerWidth >= 1440 ? "12%" : "0",
        }}
        className="md:pl- lg:pl-[rem] sm:pl- xsm:pl- mx-auto transition-all duration-500 ease-in-out "
      >
        {/* 2xl:pl-64 xl:pl-64  */}
        <div className="flex flex-col xl:justify-center  lg:ml-2 lg:mr- md:ml-0 xsm:ml- mr- ">
          {/* xl:ml-32 xl:mr-[92px]  */}
          <div className="flex items-center gap-3 lg:gap-0   ">
            {/*        <div
              className={`lg:scale-0 scale-[1] text-3xl fixed bg-black w-full xsm:pt-[121px] lg:pt-0 `}
              onClick={() => setIsNavbar(!isNavbar)}
            >
              {isNavbar === false ? (
                <div className="-mt-3 cursor-pointer">
                  <Image
                    src={openarrow}
                    alt="open sidebar arrow"
                    width={40}
                    height={40}
                  />
                </div>
              ) : (
                <div className="cursor-pointer">
                  <Image
                    src={closearrow}
                    alt="open sidebar arrow"
                    width={40}
                    height={40}
                  />
                </div>
              )}
            </div> */}
            {/*  <div className="text-[35px] font-medium bg-black w-full   fixed  pt-[70px] z-10">
              My Profile
            </div> */}
            <div className="bg-black  w-full     pt-[px] pb-6  z-10">
              <div className="lg:pl-16 xsm:pl-  pt-4  ml-7 mt-1 flex">
                <Image
                  src={imageSrc}
                  alt="Profilelogo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <p className="text-2xl font-bold text-center my-auto ml-5 ">
                  {userProfile}
                </p>
                <button
                  onClick={openFileInput}
                  className="absolute cursor-pointer"
                >
                  <Image src={sol} alt="logo" />
                </button>
                {/*  <button
                  onClick={openFileInput}
                  className="absolute w-[100px] h-[100px] pl-9 cursor-pointer "
                  style={{
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, .75))"
                  }}
                 
                >
                  <Image src={sol} alt="logo" />
                </button> */}
                <input
                  ref={fileInputRef}
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>

          {/*   <div className="flex justify-center  text-center md:gap-5 gap-2  mb-5  lg:px- md:text-base text-sm items-center p-4 sticky top-[14.6rem] border-t border-[#ededed]   bg-black z-[9]">
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

                  {/* {button === 5 && "Notification"} *
                </button>
              </div>
            ))}
          </div> */}

          <div className="flex justify-between items-center p-4 sticky top-[5.75rem] border-t border-[#ededed] bg-black z-[9]">
            {/*   <div
              style={{
                display: "flex",
                display: "none",
              }}
              className={`text-white hides ml-20 ${
                showImage
                  ? "opacity-100 duration-300 transition-all  ease-linear "
                  : "opacity-0 "
              }`}
            > */}
            <div
              className={`text-white ml-20 ${
                showImage
                  ? "opacity-100 duration-300 transition-all ease-linear "
                  : "opacity-0 "
              } ${isMediumOrSmallScreen ? "hidden" : ""}`}
              style={{
                display: isMediumOrSmallScreen ? "none" : "flex",
              }}
            >
              {" "}
              <Image
                src={imageSrc}
                alt="Profilelogo"
                width={35}
                height={35}
                className="rounded-full "
              />
              <div className="text-2xl font-bold text-center my-auto ml-5 ">
                {userProfile}
              </div>
            </div>
            <div className="margin flex justify-center gap-2 md:gap-5 flex-grow">
              {[1, 2, 3, 4, 5].map((button) => (
                <div key={button} className="bg-black">
                  <button
                    className={`flex items-center hover:bg-blue-500 p-1 px-2 rounded-xl md:text-[18px] text-[9.5px] font-normal ${
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




// 7000

// for 6 months



