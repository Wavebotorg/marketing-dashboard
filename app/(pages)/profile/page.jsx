"use client";

import React, { useEffect, useState } from "react";
import Appearance from "../../components/Profileinfo/Appearance";
import About from "../../components/Profileinfo/About";
import Notification from "../../components/Profileinfo/Notification";
import Security from "../../components/Profileinfo/Security";
import Setup from "../../components/Profileinfo/Setup";

const Profile = () => {
  const [isComponent1Visible, setComponent1Visible] = useState(true);
  const [isComponent2Visible, setComponent2Visible] = useState(false);
  const [isComponent3Visible, setComponent3Visible] = useState(false);
  const [isComponent4Visible, setComponent4Visible] = useState(false);
  const [isComponent5Visible, setComponent5Visible] = useState(false);

  const handleButtonClick = (component) => {
    if (component === 1) {
      setComponent1Visible(true);
      setComponent2Visible(false);
      setComponent3Visible(false);
      setComponent4Visible(false);
      setComponent5Visible(false);

      setActiveButton(1);
    } else if (component === 2) {
      setComponent2Visible(true);
      setComponent1Visible(false);
      setComponent3Visible(false);
      setComponent4Visible(false);
      setComponent5Visible(false);

      setActiveButton(2);
    } else if (component === 3) {
      setComponent3Visible(true);
      setComponent2Visible(false);
      setComponent1Visible(false);
      setComponent4Visible(false);
      setComponent5Visible(false);

      setActiveButton(3);
    } else if (component === 4) {
      setComponent4Visible(true);
      setComponent2Visible(false);
      setComponent1Visible(false);
      setComponent3Visible(false);
      setComponent5Visible(false);

      setActiveButton(4);
    } else if (component === 5) {
      setComponent5Visible(true);
      setComponent2Visible(false);
      setComponent1Visible(false);
      setComponent4Visible(false);
      setComponent3Visible(false);

      setActiveButton(5);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (activeButton === 1) {
      setComponent1Visible(true);
      setComponent2Visible(false);
      setComponent3Visible(false);
      setComponent4Visible(false);
      setComponent5Visible(false);

      setActiveButton(1);
    } else if (activeButton === 2) {
      setComponent2Visible(true);
      setComponent1Visible(false);
      setComponent3Visible(false);
      setComponent4Visible(false);
      setComponent5Visible(false);

      setActiveButton(2);
    } else if (activeButton === 3) {
      setComponent3Visible(true);
      setComponent2Visible(false);
      setComponent1Visible(false);
      setComponent4Visible(false);
      setComponent5Visible(false);

      setActiveButton(3);
    } else if (activeButton === 4) {
      setComponent4Visible(true);
      setComponent2Visible(false);
      setComponent1Visible(false);
      setComponent3Visible(false);
      setComponent5Visible(false);
      setActiveButton(4);
    } else if (activeButton === 5) {
      setComponent5Visible(true);
      setComponent2Visible(false);
      setComponent1Visible(false);
      setComponent4Visible(false);
      setComponent3Visible(false);

      setActiveButton(5);
    }
  });

  const [activeButton, setActiveButton] = useState(1);

  return (
    <>
      <div className="2xl:pl-64 xl:pl-64 md:pl-4 sm:pl-4 xsm:pl-0 mx-auto ">
        <div className="flex flex-col xl:justify-center xl:ml-32 xl:mr-[92px]  lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-10">
          <div className="text-[35px] font-medium">My Profile</div>

          <div className="flex md:gap-5 gap-2 mt-6 lg:px- md:text-base text-sm items-center">
            <div>
              <button
                className={`hover:bg-blue-500 p-1 px-2 rounded-full md:text-[18px] text-[9px] font-normal ${
                  activeButton === 1 && "bg-blue-500"
                }`}
                onClick={() => handleButtonClick(1)}
              >
                About
              </button>
            </div>
            <div>
              <button
                className={`hover:bg-blue-500 p-1 px-2 rounded-full md:text-[18px] text-[9px] font-normal ${
                  activeButton === 2 && "bg-blue-500"
                }`}
                onClick={() => handleButtonClick(2)}
              >
                Setup
              </button>
            </div>
            <div>
              <button
                className={`hover:bg-blue-500 p-1 px-2 rounded-full md:text-[18px] text-[9px] font-normal ${
                  activeButton === 3 && "bg-blue-500"
                }`}
                onClick={() => handleButtonClick(3)}
              >
                Appearance
              </button>
            </div>
            <div>
              <button
                className={`hover:bg-blue-500 p-1 px-2 rounded-full md:text-[18px] text-[9px] font-normal ${
                  activeButton === 4 && "bg-blue-500"
                }`}
                onClick={() => handleButtonClick(4)}
              >
                Security & Login
              </button>
            </div>
            <div>
              <button
                className={`hover:bg-blue-500 p-1 px-2 rounded-full md:text-[18px] text-[9px] font-normal ${
                  activeButton === 5 && "bg-blue-500"
                }`}
                onClick={() => handleButtonClick(5)}
              >
                Notification
              </button>
            </div>
          </div>
          <div className="">
            <div>{isComponent1Visible && <About />}</div>
            <div>{isComponent2Visible && <Setup />}</div>
            <div>{isComponent3Visible && <Appearance />}</div>
            <div>{isComponent4Visible && <Security />}</div>
            <div>{isComponent5Visible && <Notification />}</div>
            <div className="flex justify-end mb-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
