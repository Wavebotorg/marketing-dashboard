"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Profile from "../../../public/assets/profile.png";
import { MdOutlineContentCopy } from "react-icons/md";
import ChangePass from "./ChangePass";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import axiosInstance from "../../apiInstances/axiosInstance";
import sol from "../../../public/assets/sol.png";
import { useRouter } from "next/navigation";

const About = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const popupRef = useRef(null);
  const router = useRouter();

  //Close Popup while click out side of it
  const changePassRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //Api for Get User Data
  const [userProfile, setUserProfile] = useState([]);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await axiosInstanceAuth.get("/getUserProfile");
        setUserProfile(response?.data?.data || []);
        setEmail(response?.data?.data?.email);
        // console.log("🚀 ~ getUserProfile ~ setEmail:",   response?.data?.data?.email)
        // console.log("User Profile Data:", response?.data?.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    getUserProfile();
  }, []);

  //submit for Change Password
  const handleSubmit = async () => {
    await axiosInstance
      .post("forgetPassword", { email: email })
      .then((res) => {
        const myData = res?.data;
        // console.log("chnage Password Data --->", myData);
        localStorage.setItem("type", "changepassword");
        localStorage.setItem("userEmail", email);
        if (myData?.status) {
          setShowPopup(true);
          setTimeout(() => {
            if (changePassRef.current) {
              changePassRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }, 1000);

          //  setShowPopup(true);
        }
      })
      .catch((err) => {
        console.log("err---->", err);
      });
  };

  const [imageSrc, setImageSrc] = useState(Profile);
  const fileInputRef = useRef(null);

  //set image
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

  //copy
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // console.log("Copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  //Format For Id
  const formatTransactionID = (txid) => {
    if (!txid || txid.length <= 10) return txid;
    const firstSix = txid.slice(0, 4);
    const lastFour = txid.slice(-3);
    return `${firstSix}...${lastFour}`;
  };

  const formatlink = (txid) => {
    if (!txid || txid.length <= 10) return txid;
    const firstSix = txid.slice(0, 17);
    const lastFour = txid.slice(-10);
    return `${firstSix}...${lastFour}`;
  };

  const [showSaveButton, setShowSaveButton] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // console.log("🚀 ~ isEditing:", isEditing);
  const [name, setName] = useState(userProfile.name);

  const handleEditClick = () => {
    setIsEditing(true);
    setShowSaveButton(true);
  };

  //show Save button
  const handleSaveClick = () => {
    setIsEditing(false);
    setShowSaveButton(false);
  };

  //get Value for input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const generateReferralLink = () => {
    return `${window.location.origin}/signupRef/${userProfile.referralId}`;
  };

  const referralLink = generateReferralLink();

  return (
    <>
      <div className="my-4 ">
        <div className="flex justify-end">
          <button
            onClick={handleEditClick}
            className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium"
          >
            Edit
          </button>
        </div>
      </div>
      {/* <div className="">
        <div className="md:pl-16 xsm:pl-6  pt-4 back mt-5 flex">
          <Image
            src={imageSrc}
            alt="Profilelogo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <button
            onClick={openFileInput}
            className="absolute  rounded-full top-[19rem] cursor-pointer"
          >
            <Image src={sol} alt="logo" />
          </button>
          <input
            ref={fileInputRef}
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
      </div> */}

      <div className=" bg-[#1C1C1C] shadow-2xl rounded-lg ">
        <div className="text-[#CECECE]  p-8 md:pl-16 xsm:pl-6  ">
          <div className="md:flex flex mb-4">
            <div className="mr-4 md:text-[20px] text-[18px] text-[#CACACA] font-medium">
              <p>Name :</p>
            </div>

            <div className="text-[11.8px] md:text-[13px]  text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[174px]">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  className=" p-0.5 bg-[#1C1C1C]  text-white border border-gray-500 outline-none"
                  value={userProfile.name}
                  onChange={handleChange}
                />
              ) : (
                <p>{userProfile.name}</p>
              )}
            </div>
          </div>

          <div className="md:flex flex mb-4">
            <div className="mr-4 md:text-[20px] text-[18px] text-[#CACACA] font-medium">
              <p>Email :</p>
            </div>
            <div className="text-[11.8px] md:text-[13px]  text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[179px]">
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  className=" p-0.5 bg-[#1C1C1C]  text-white border border-gray-500 outline-none"
                  value={userProfile.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{userProfile.email}</p>
              )}
            </div>
          </div>

          {userProfile && userProfile.referralId && (
            <div className="md:flex flex mb-4">
              <div className="mr-4 md:text-[20px] text-[18px] text-[#CACACA] font-medium">
                <p>Referral code :</p>
              </div>
              <div className="text-[11.8px] md:text-[13px]  text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[102px]">
                <p>{userProfile.referralId}</p>
              </div>
            </div>
          )}

          {userProfile && userProfile.referralId && (
            <div className="md:flex flex mb-4">
              <div className="mr-4 md:text-[20px] text-[18px] text-[#CACACA] font-medium">
                <p>Referral link :</p>
              </div>
              <div className="text-[11.8px] md:text-[13px] text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[112px] flex">
                <p>{formatlink(referralLink)}</p>
                <button
                  className="text-xl text-[#828282] align-middle pb-1.5"
                  onClick={() => copyToClipboard(referralLink)}
                >
                  <MdOutlineContentCopy
                    size={12}
                    className="ml-1.5 items-center"
                  />
                </button>
              </div>
            </div>
          )}

          {userProfile && userProfile.ReferredBy && (
            <div className="md:flex flex mb-4">
              <div className="mr-4 md:text-[20px] text-[18px] text-[#CACACA] font-medium">
                <p>Referred by :</p>
              </div>
              <div className="text-[11.8px] md:text-[13px]  text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[119px]">
                <p>{userProfile.ReferredBy}</p>
              </div>
            </div>
          )}

          <div className="md:flex flex mb-4 ">
            <div className="mr-4  md:text-[20px] text-[18px] text-[#CACACA] font-medium">
              <p>EVM Address :</p>
            </div>
            <div className="text-[11.8px] md:text-[13px]  text-[#FFFFFF] font-normal mt-[0.50rem] ml-0 md:ml-[100px] flex">
              <p>{formatTransactionID(userProfile.wallet)}</p>

              <button
                className="text-xl text-[#828282] align-middle pb-1.5"
                onClick={() => copyToClipboard(userProfile.wallet)}
              >
                <MdOutlineContentCopy
                  size={12}
                  className="ml-1.5 items-center"
                />
              </button>
            </div>
          </div>

          <div className="md:flex flex mb-4 ">
            <div className="mr-4 md:text-[20px] text-[18px]  text-[#CACACA] font-medium">
              <p>Solana Address :</p>
            </div>
            <div className="text-[11.8px] md:text-[13px]  text-[#FFFFFF] font-normal mt-[0.50rem]  ml-0 md:ml-[79px] flex">
              <p>{formatTransactionID(userProfile.solanawallet)}</p>

              <button
                className="text-xl text-[#828282] align-middle pb-1.5"
                onClick={() => copyToClipboard(userProfile.solanawallet)}
              >
                <MdOutlineContentCopy
                  size={12}
                  className="ml-1.5 items-center"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 ">
        {showSaveButton && (
          <div className="flex justify-end">
            <button
              className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex justify-end mb-3">
          <button
            className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium"
            onClick={() => {
              handleSubmit();
            }}
          >
            Change Password
          </button>
        </div>
      </div>
      {showPopup && (
        <div>
          <div ref={popupRef}>
            <div ref={changePassRef}>
              <ChangePass />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
