import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePass = () => {
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

  return (
    <div>
      {" "}
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
            // onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
