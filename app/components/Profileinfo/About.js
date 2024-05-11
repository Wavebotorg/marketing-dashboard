"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Profile from "../../../public/assets/profile.PNG";
import add from "../../../public/assets/add.png";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstanceAuth from "@/app/apiInstances/axiosInstanceAuth";

const About = () => {
  const [resetPassData, setResetPassData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setResetPassData({
      ...resetPassData,
      [name]: value.trim(),
    });
  };

  const handleSubmit = async () => {
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

  const [userProfile, setUserProfile] = useState([]);

  // useEffect(() => {
  //   const token = localStorage.getItem("Token");
  //   if (token) {
  //     router.push("/"); // Change '/home' to your actual home page route
  //   } else {
  //     router.push("/login"); // Change '/login' to your actual login page route
  //   }
  // }, []);

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

  const [imageSrc, setImageSrc] = useState(Profile); // Assuming Profile is the initial image source
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

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text);
        // You can optionally show a success message or perform any other action here
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
        // You can handle errors here
      });
  };

  const formatTransactionID = (txid) => {
    if (!txid || txid.length <= 10) return txid; // Check if txid is defined and has a length greater than 10
    const firstSix = txid.slice(0, 6); // Get the first 6 characters
    const lastFour = txid.slice(-4); // Get the last 4 characters
    return `${firstSix}...${lastFour}`; // Concatenate with "..." in between
  };

  return (
    <>
      <div className="mt-4 ">
        <div className="flex justify-end">
          <button className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium">
            Edit
          </button>
        </div>
      </div>
      <div className="">
        <div className="pl-16 pt-4 back mt-5 flex">
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
        <div className="text-[#CECECE]  p-8 pl-16  ">
          <div className="md:flex flex-1 mb-4">
            <div className="mr-4 text-[20px] text-[#CACACA] font-medium">
              <p>Name :</p>
            </div>
            <div className="text-[12px] text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-44">
              <p>{userProfile.name}</p>
            </div>
          </div>

          <div className="md:flex flex-1 mb-4">
            <div className="mr-4 text-[20px] text-[#CACACA] font-medium">
              <p>Email :</p>
            </div>
            <div className="text-[12px] text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[180px]">
              <p>{userProfile.email}</p>
            </div>
          </div>

          <div className="md:flex flex-1 mb-4">
            <div className="mr-4 text-[20px] text-[#CACACA] font-medium">
              <p>Referral code :</p>
            </div>
            <div className="text-[12px] text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[102px]">
              <p>{userProfile.referralId}</p>
            </div>
          </div>
          {userProfile && userProfile.ReferredBy && (
            <div className="md:flex flex-1 mb-4">
              <div className="mr-4 text-[20px] text-[#CACACA] font-medium">
                <p>Referred by :</p>
              </div>
              <div className="text-[12px] text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[119px]">
                <p>{userProfile.ReferredBy}</p>
              </div>
            </div>
          )}

          <div className="md:flex flex-1 mb-4">
            <div className="mr-4 md:text-[19px] text-[20px] text-[#CACACA] font-medium">
              <p>EVM Address :</p>
            </div>
            <div className="text-[12px] text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[111px] flex">
              {/* <p className="truncate">{userProfile.wallet}</p> */}
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

          <div className="md:flex flex-1 mb-4">
            <div className="mr-4 text-[20px] md:text-[19px] text-[#CACACA] font-medium">
              <p>Solana Address :</p>
            </div>
            <div className="text-[12px] text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[90px] flex">
              <p className="truncate">{userProfile.solanawallet}</p>

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

      {/*  <div className="mt-4 ">
        <div className="flex justify-end">
          <button className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium">
            Save
          </button>
        </div>
      </div> */}
      <div className=" bg-[#1C1C1C] shadow-2xl mt-8 rounded-b-lg p-8 pl-16 ">
        <p className="font-medium text-[20px] mb-5 xsm:text-base">
          Change Password
        </p>
        <div className="relative">
          <label
            htmlFor="currentPassword"
            className="text-[#CACACA] mb-2 block"
          >
            Current Password
          </label>
          <div className="flex ">
            <input
              id="currentPassword"
              className="rounded-l-md w-full sm:max-w-[450px] py-2 pl-2 pr-10 bg-neutral-800 outline-none"
              type={showCurrentPassword ? "text" : "password"}
              name="currentPassword"
              value={resetPassData?.currentPassword}
              onChange={onChangeInput}
              placeholder="Current Password"
            />
            <div
              className="bg-neutral-800 rounded-r-md pt-3 text-[#CACACA] cursor-pointer"
              onClick={toggleCurrentPasswordVisibility}
            >
              {showCurrentPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        <div className="relative mt-5">
          <label htmlFor="newPassword" className="text-[#CACACA] mb-2 block">
            New Password
          </label>
          <div className="flex ">
            <input
              id="newPassword"
              className="rounded-l-md w-full sm:max-w-[450px] py-2 pl-2 pr-10 bg-neutral-800 outline-none"
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              value={resetPassData?.newPassword}
              onChange={onChangeInput}
              placeholder="New Password"
            />
            <div
              className="bg-neutral-800 rounded-r-md pt-3 text-[#CACACA] cursor-pointer"
              onClick={toggleNewPasswordVisibility}
            >
              {showNewPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        <div className="relative mt-5">
          <label
            htmlFor="confirmPassword"
            className="text-[#CACACA] mb-2 block"
          >
            Confirm Password
          </label>
          <div className="flex">
            <input
              id="confirmPassword"
              className="rounded-l-md w-full sm:max-w-[450px] py-2 pl-2 pr-10 bg-neutral-800 outline-none"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={resetPassData?.confirmPassword}
              onChange={onChangeInput}
              placeholder="Confirm Password"
            />
            <div
              className="bg-neutral-800 rounded-r-md pt-3 text-[#CACACA] cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <div className="flex justify-end mb-3">
          <button
            className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium"
            onClick={handleSubmit}
          >
            Change Password
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
