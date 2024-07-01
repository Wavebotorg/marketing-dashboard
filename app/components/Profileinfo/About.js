import React from "react";

const About = () => {
  return (
    <div>
      <div class="xl:px-48 mt-10">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="lg:col-span-2 h-fit bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl  font-bold mb-4 text-black">Performance</h2>
            <div class="bg-gray-100 h-64 flex items-center justify-center rounded-lg">
              <span class="text-gray-500">No Data to Display</span>
            </div>
            <div class="md:flex flex-1 justify-around mt-10">
              <div>
                <div class="flex gap-52">
                  <span class="text-gray-500">Return YTD</span>
                  <span class="text-lg text-black">-</span>
                </div>
                <div class="flex gap-52">
                  <span class="text-gray-500">Return 2Y</span>
                  <span class="text-lg text-black">-</span>
                </div>
              </div>
              <span class="border-r h-16 md:block xsm:hidden"></span>
              <div>
                <div class="flex gap-52">
                  <span class="text-gray-500">Risk Score</span>
                  <span class="text-lg text-black">-</span>
                </div>
                <div class="flex gap-52">
                  <span class="text-gray-500">Profitable Weeks</span>
                  <span class="text-lg text-black">-</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg-white p-6 rounded-lg shadow-md ">
              <h2 class="text-2xl font-bold mb-4 text-black">About</h2>
              <p class="text-gray-500 mb-4">
                Give investors more details about your history, investment
                approach, and your style with your extended bio
              </p>
              <div class="flex justify-center border-b">
                <button class="flex justify-center border border-green-500 p-2 text-green-500 rounded-full mb-4">
                  Write Bio
                </button>
              </div>
              <div class="flex items-center mb-4 justify-evenly mt-5">
                <div class="ml-4 text-center">
                  <div class="text-black font-bold text-xl">N/A</div>
                  <div class="text-black">Followers</div>
                </div>
                <span class="border-r h-16"></span>
                <div class="ml-4 text-center">
                  <div class="text-black font-bold text-xl">0</div>
                  <div class="text-black">Followers</div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-3 lg:sticky top-10 bg-white rounded-lg mt-8 p-6 shadow-md ">
              <h2 class="text-2xl text-black font-bold mb-4">
                Similar Traders
              </h2>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      src="path/to/your/image.png"
                      alt="Trader"
                      class="w-10 h-10 rounded-full"
                    />
                    <div class="ml-4">
                      <div class="text-lg font-bold text-black">
                        Jeppe Kirk Bonde
                      </div>
                      <div class="text-gray-500">@JeppeKirkBonde</div>
                    </div>
                  </div>
                  <button class="bg-green-500 text-white p-2 rounded-lg">
                    14.00%
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      src="path/to/your/image.png"
                      alt="Trader"
                      class="w-10 h-10 rounded-full"
                    />
                    <div class="ml-4">
                      <div class="text-lg font-bold text-black">
                        Jeppe Kirk Bonde
                      </div>
                      <div class="text-gray-500">@JeppeKirkBonde</div>
                    </div>
                  </div>
                  <button class="bg-green-500 text-white p-2 rounded-lg">
                    14.00%
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-4 text-black">Action</h2>
            <div class="bg-gray-100 h-64 flex items-center justify-center rounded-lg">
              <span class="text-gray-500">No Data to Display</span>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-6">
              <div class="flex flex-col">
                <span class="text-gray-500">Return YTD</span>
                <span class="text-lg text-black">-</span>
              </div>
              <div class="flex flex-col">
                <span class="text-gray-500">Risk Score</span>
                <span class="text-lg text-black">-</span>
              </div>
              <div class="flex flex-col">
                <span class="text-gray-500">Return 2Y</span>
                <span class="text-lg text-black">-</span>
              </div>
              <div class="flex flex-col">
                <span class="text-gray-500">Profitable Weeks</span>
                <span class="text-lg text-black">-</span>
              </div>
            </div>
            <div class="mt-6">
              <div class="flex items-center">
                <img
                  src="path/to/your/image.png"
                  alt="User"
                  class="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  class="ml-4 w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div class="mt-2 flex space-x-2">
                <button class="bg-gray-200 p-2 rounded-lg">Upload</button>
                <button class="bg-gray-200 p-2 rounded-lg">Poll</button>
              </div>
            </div>
          </div>
          <div class="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-4 text-black">Action</h2>
            <div class="bg-gray-100 h-64 flex items-center justify-center rounded-lg">
              <span class="text-gray-500">No Data to Display</span>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-6">
              <div class="flex flex-col">
                <span class="text-gray-500">Return YTD</span>
                <span class="text-lg text-black">-</span>
              </div>
              <div class="flex flex-col">
                <span class="text-gray-500">Risk Score</span>
                <span class="text-lg text-black">-</span>
              </div>
              <div class="flex flex-col">
                <span class="text-gray-500">Return 2Y</span>
                <span class="text-lg text-black">-</span>
              </div>
              <div class="flex flex-col">
                <span class="text-gray-500">Profitable Weeks</span>
                <span class="text-lg text-black">-</span>
              </div>
            </div>
            <div class="mt-6">
              <div class="flex items-center">
                <img
                  src="path/to/your/image.png"
                  alt="User"
                  class="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  class="ml-4 w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div class="mt-2 flex space-x-2">
                <button class="bg-gray-200 p-2 rounded-lg">Upload</button>
                <button class="bg-gray-200 p-2 rounded-lg">Poll</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*     <div className="xl:px-48  mt-10  ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2 h-fit bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Performance</h2>
            <div className="bg-gray-100 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">No Data to Display</span>
            </div>
            <div className="flex justify-around mt-10">
              <div>
                <div className="flex gap-52 ">
                  <span className="text-gray-500 ">Return YTD</span>
                  <span className="text-lg text-black">-</span>
                </div>
                <div className="flex gap-52 ">
                  <span className="text-gray-500">Return 2Y</span>
                  <span className="text-lg text-black ">-</span>
                </div>
              </div>
              <span className="border-r h-16" />
              <div>
                <div className="flex gap-52 ">
                  <span className="text-gray-500">Risk Score </span>
                  <span className="text-lg text-black">-</span>
                </div>
                <div className="flex gap-52 ">
                  <span className="text-gray-500">Profitable Weeks</span>
                  <span className="text-lg text-black">-</span>
                </div>
              </div>
            </div>
         
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg  shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-black">About</h2>
              <p className="text-gray-500 mb-4">
                Give investors more details about your history, investment
                approach, and your style with your extended bio
              </p>
              <div className="flex justify-center border-b">
                <button className="flex justify-center border border-green-500 p-2 text-green-500 rounded-full mb-4">
                  Write Bio
                </button>
              </div>
              <div className="flex items-center mb-4 justify-evenly mt-5">
                <div className="ml-4 text-center">
                  <div className="text-black font-bold text-xl ">N/A</div>
                  <div className=" text-black ">Followers</div>
                </div>
                <span className="border-r h-16" />
                <div className="ml-4 text-center">
                  <div className="text-black font-bold text-xl ">0</div>
                  <div className=" text-black ">Followers</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg mt-8 e p-6">
              <h2 className="text-2xl text-black font-bold mb-4">
                Similar Traders
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="path/to/your/image.png"
                      alt="Trader"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-lg font-bold text-black">
                        Jeppe Kirk Bonde
                      </div>
                      <div className="text-gray-500">@JeppeKirkBonde</div>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white p-2 rounded-lg">
                    14.00%
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="path/to/your/image.png"
                      alt="Trader"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-lg font-bold text-black">
                        Thomas Parry Jones
                      </div>
                      <div className="text-gray-500">@thomaspj</div>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white p-2 rounded-lg">
                    91.45%
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="path/to/your/image.png"
                      alt="Trader"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-lg font-bold text-black">
                        Pietari Laurila
                      </div>
                      <div className="text-gray-500">@triangulacapital</div>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white p-2 rounded-lg">
                    64.46%
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="path/to/your/image.png"
                      alt="Trader"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-lg font-bold text-black">
                        Rhys Adams
                      </div>
                      <div className="text-gray-500">@adams302</div>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white p-2 rounded-lg">
                    56.10%
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="path/to/your/image.png"
                      alt="Trader"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-lg font-bold text-black">
                        Keshav Lohiya
                      </div>
                      <div className="text-gray-500">@KeshavLohiya</div>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white p-2 rounded-lg">
                    141.66%
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Performance</h2>
            <div className="bg-gray-100 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">No Data to Display</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-gray-500">Return YTD</span>
                <span className="text-lg text-black">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Risk Score</span>
                <span className="text-lg text-black">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Return 2Y</span>
                <span className="text-lg text-black">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Profitable Weeks</span>
                <span className="text-lg text-black">-</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <img
                  src="path/to/your/image.png"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  className="ml-4 w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mt-2 flex space-x-2">
                <button className="bg-gray-200 p-2 rounded-lg">Upload</button>
                <button className="bg-gray-200 p-2 rounded-lg">Poll</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;

/* "use client";

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
  /*   const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // console.log("Copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  }; *

  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(text);
        setTimeout(() => setCopiedText(""), 200); // Hide after 2 seconds
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
    const firstSix = txid.slice(0, 10);
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

  // const generateReferralLink = () => {
  //   return `${window.location.origin}/signupRef/${userProfile.referralId}`;
  // };

  const referralLink = `https://marketing-dashboard-d22655001f93.herokuapp.com/signupRef/${userProfile.referralId}`;

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
      </div> */
{
  /* <div className="">
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
      </div> */
}

{
  /*    <div className=" bg-[#1C1C1C] shadow-2xl rounded-lg ">
        <div className="text-[#CECECE]  p-8 md:pl-16 xsm:pl-6  ">
          <div className="md:flex flex mb-4">
            <div className="mr-4 md:text-[20px] text-[18px] text-[#CACACA] font-medium">
              <p>Name :</p>
            </div>

            <div className="text-[13px]  text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[174px]">
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
            <div className="text-[13px]  text-[#FFFFFF] font-normal mt-1 ml-0 md:ml-[179px]">
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
              <div className="text-[13px]  text-[#FFFFFF] font-normal mt-1 ml-0 md:ml-[102px]">
                <p>{userProfile.referralId}</p>
              </div>
            </div>
          )}

          {userProfile && userProfile.referralId && (
            <div className="md:flex flex mb-4">
              <div className="mr-4 md:text-[20px] text-[18px] text-[#CACACA] font-medium">
                <p>Referral link :</p>
              </div>

              <div className="block lg:hidden">
                <div className="text-[13px] text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[112px] flex">
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
                  {copiedText === referralLink && (
                    <span className=" xsm:pl-1 bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              <div className="lg:block hidden">
                <div className="text-[13px] text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[112px] flex">
                  <p>{referralLink}</p>
                  <button
                    className="text-xl text-[#828282] align-middle pb-1.5"
                    onClick={() => copyToClipboard(referralLink)}
                  >
                    <MdOutlineContentCopy
                      size={12}
                      className="ml-1.5 items-center"
                    />
                  </button>
                  {copiedText === referralLink && (
                    <span className=" xsm:pl-1 bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {userProfile && userProfile.ReferredBy && (
            <div className="md:flex flex mb-4">
              <div className="mr-4 md:text-[20px] text-[18px] text-[#CACACA] font-medium">
                <p>Referred by :</p>
              </div>
              <div className="text-[13px]  text-[#FFFFFF] font-normal mt-2 ml-0 md:ml-[119px]">
                <p>{userProfile.ReferredBy}</p>
              </div>
            </div>
          )}

          <div className="md:flex flex mb-4 ">
            <div className="mr-4  md:text-[20px] text-[18px] text-[#CACACA] font-medium">
              <p>EVM Address :</p>
            </div>

            <div className="block lg:hidden">
              <div className="text-[13px]  text-[#FFFFFF] font-normal mt-[0.50rem] ml-0 md:ml-[100px] flex">
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
                {copiedText === userProfile.wallet && (
                  <span className=" xsm:pl-1 bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            <div className="lg:block hidden">
              <div className="text-[13px]  text-[#FFFFFF] font-normal mt-[0.50rem] ml-0 md:ml-[100px] flex">
                <p>{userProfile.wallet}</p>
                <button
                  className="text-xl text-[#828282] align-middle pb-1.5"
                  onClick={() => copyToClipboard(userProfile.wallet)}
                >
                  <MdOutlineContentCopy
                    size={12}
                    className="ml-1.5 items-center"
                  />
                </button>
                {copiedText === userProfile.wallet && (
                  <span className=" xsm:pl-1 bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="md:flex flex mb-4 ">
            <div className="mr-4 md:text-[20px] text-[18px]  text-[#CACACA] font-medium">
              <p>Solana Address :</p>
            </div>

            <div className="block lg:hidden">
              <div className="text-[13px]  text-[#FFFFFF] font-normal mt-[0.50rem]  ml-0 md:ml-[79px] flex">
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
                {copiedText === userProfile.solanawallet && (
                  <span className=" xsm:pl-1 bg-gray-900  text-white px-3 py-1 rounded-md text-sm">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            <div className="lg:block hidden">
              <div className="text-[13px]  text-[#FFFFFF] font-normal mt-[0.50rem]  ml-0 md:ml-[79px] flex">
                <p>{userProfile.solanawallet}</p>

                <button
                  className="text-xl text-[#828282] align-middle pb-1.5"
                  onClick={() => copyToClipboard(userProfile.solanawallet)}
                >
                  <MdOutlineContentCopy
                    size={12}
                    className="ml-1.5 items-center"
                  />
                </button>
                {copiedText === userProfile.solanawallet && (
                  <span className=" xsm:pl-1 bg-gray-900  text-white px-3 py-1 rounded-md text-sm">
                    Copied!
                  </span>
                )}
              </div>
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
 */
}
