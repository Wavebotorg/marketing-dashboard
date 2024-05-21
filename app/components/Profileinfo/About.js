"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Profile from "../../../public/assets/profile.png";
// import add from "../../../public/assets/add.png";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ChangePass from "./ChangePass";
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import Link from "next/link";

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  const popupRef = useRef(null);

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
  /* const handleSubmit = async () => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(mydata.newPassword && mydata?.confirmPassword)) {
      toast.error(
        "Password must contain at least one number, one special character, one uppercase letter, and be at least 8 characters long."
      );
      return;
    }

    if (mydata.newPassword.length < 8 && mydata.confirmPassword.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }
    await axiosInstance
      .post("resetPassword", mydata)
      .then((res) => {
        const myData = res?.data;
        console.log("Reset Password Data --->", myData?.msg);
        if (myData?.status) {
          toast.success(myData?.msg);

          router.push("/");
          // setTimeout(() => {
          // }, 3000);
        } else {
          toast.error(myData?.msg);
        }
      })
      .catch((err) => {
        console.log("err---->", err);
      });
    setIsVerificationSuccess(true);
  };
 */
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await axiosInstanceAuth.get("/getUserProfile");
        setUserProfile(response?.data?.data || []);
        console.log("User Profile Data:", response?.data?.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    getUserProfile();
  }, []);

  /*   const [image, setImage] = useState(null); 

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setImage(imageUrl); // Set the selected image
  }; */

  const [imageSrc, setImageSrc] = useState(Profile);
  const fileInputRef = useRef(null);

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

  /*   const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  }; */
  const [copiedEvm, setCopiedEvm] = useState(false);
  const [copiedSolana, setCopiedSolana] = useState(false);

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the popup after 2 seconds
  };

  const formatTransactionID = (txid) => {
    if (!txid || txid.length <= 10) return txid;
    // const firstSix = txid.slice(0, 2);
    // const lastFour = txid.slice(-3);
    const firstSix = txid.slice(0, 4);
    const lastFour = txid.slice(-3);
    return `${firstSix}...${lastFour}`;
  };

  const [showSaveButton, setShowSaveButton] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // console.log("🚀 ~ isEditing:", isEditing);
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);

  const handleEditClick = () => {
    setIsEditing(true);
    setShowSaveButton(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setShowSaveButton(false);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setName(e.target.value);
  };

  /*  const handlenameChange = (e) => {
    setName(e.target.value);
  }; */

  return (
    <>
      <div className="mt-4 ">
        <div className="flex justify-end">
          <button
            onClick={handleEditClick}
            className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="">
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
            className="absolute text-black bg-white rounded-full top-[19rem] cursor-pointer"
          >
            <IoIosAddCircleOutline size={30} />
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
      </div>
      {/*   <div className="">
        <div className="pl-16 pt-4 back mt-5">
          {image ? ( // If an image is selected, display it
            <div style={{ position: "relative" }}>
              <Image
                src={image}
                alt="Selected Image"
                width={100}
                height={100}
                className="rounded-full"
              />
              {/* <Image
                src={arrow}
                alt="Add Icon"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 20,
                  height: 20,
                  cursor: "pointer",
                }}
              /> *
            </div>
          ) : (
            // If no image is selected, display an empty area with the option to add an image
            <label htmlFor="imageUpload">
              <div
                className="rounded-full border border-dashed border-gray-400 w-24 h-24 flex items-center justify-center cursor-pointer"
                style={{ position: "relative" }}
              >
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <Image
                  src={add}
                  alt="Add Icon"
                  style={{
                    width: 40,
                    height: 40,
                    position: "absolute",
                  }}
                />
              </div>
            </label>
          )}
        </div>
      </div> */}
      <div className=" bg-[#1C1C1C] shadow-2xl rounded-b-lg ">
        <div className="text-[#CECECE]  p-8 md:pl-16 xsm:pl-6  ">
          <div className="md:flex flex mb-4">
            <div className="mr-4 md:text-[20px] text-[18px] text-[#CACACA] font-medium">
              <p>Name :</p>
            </div>
            {/* <div>
              <input type="text"  className={`${isEditing ? 'block':'hidden'}`}/>
            </div> */}
            <div className="text-[11.8px] md:text-[13px]  text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[174px]">
              {isEditing ? (
                <input
                  type="text"
                  // name="name"
                  className="text-black"
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
              {/* <p>{userProfile.email}</p> */}
              {isEditing ? (
                <input
                  type="email"
                  // name="email"
                  className="text-black"
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
              {/* <p className="truncate">{userProfile.wallet}</p> */}
              <p>{formatTransactionID(userProfile.wallet)}</p>

              {/*     <button
                className="text-xl text-[#828282] align-middle pb-1.5"
                onClick={() => copyToClipboard(userProfile.wallet)}
              >
                <MdOutlineContentCopy
                  size={12}
                  className="ml-1.5 items-center"
                />
              </button> */}
              <div className="relative">
                <button
                  className="text-xl text-[#828282] align-middle pb-1.5"
                  onClick={() =>
                    copyToClipboard(userProfile.wallet, setCopiedEvm)
                  }
                >
                  <MdOutlineContentCopy
                    size={12}
                    className="ml-1.5 items-center"
                  />
                </button>
                {copiedEvm && (
                  <div className="absolute bottom-[-30px] left-0 bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:flex flex mb-4 ">
            <div className="mr-4 md:text-[20px] text-[18px]  text-[#CACACA] font-medium">
              <p>Solana Address :</p>
            </div>
            <div className="text-[11.8px] md:text-[13px]  text-[#FFFFFF] font-normal mt-[0.50rem]  ml-0 md:ml-[79px] flex">
              {/* <p className="truncate">{userProfile.solanawallet}</p> */}
              <p>{formatTransactionID(userProfile.solanawallet)}</p>
              <div className="relative">
                <button
                  className="text-xl text-[#828282] align-middle pb-1.5"
                  onClick={() =>
                    copyToClipboard(userProfile.solanawallet, setCopiedSolana)
                  }
                >
                  <MdOutlineContentCopy
                    size={12}
                    className="ml-1.5 items-center"
                  />
                </button>
                {copiedSolana && (
                  <div className="absolute bottom-[-30px] left-0 bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 ">
        {showSaveButton && (
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSaveClick}
              className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium"
            >
              Save
            </button>
          </div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex justify-end mb-3">
          {/* <Link href="/passwordverify"> */}
          <button
            className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium"
            onClick={() => setShowPopup(true)}
          >
            Change Password
          </button>
          {/* </Link> */}
        </div>
      </div>
      {showPopup && (
        <div>
          {/* <div ref={popupRef}> */}
          <ChangePass />
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default About;
