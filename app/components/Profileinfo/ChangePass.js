import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosInstance from "../../apiInstances/axiosInstance";
import { useWallet } from "../contexts/WalletContext";
const ChangePass = () => {
  const { setWalletAddress ,setEmail} = useWallet();
    const router = useRouter();
    const [changePassData, setChangePassData] = useState({
      currentpassword:"",
        newpassword: "",
     confirmpassword: "",
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
  const [errors, setErrors] = useState(
    {  currentpassword:"",
  newpassword: "",
confirmpassword: "", }
);

  const validateInput = (name, value) => {
    const errors = {};
    if (!changePassData.currentpassword) {
      errors.currentpassword = "Current Password is required";
    }
    if (!changePassData.newpassword) {
      errors.newpassword = "New Password is required";
    }
    if (!changePassData.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required";
    }
    if (name === 'confirmpassword' || (changePassData.newpassword && changePassData.confirmpassword)) {
      if (changePassData.newpassword !== value) {
        errors.confirmpassword = "Passwords do not match";
      }
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
    };
    const mydata = {
      email:changePassData?.email,
    };
  const onChangeInput = (e) => {
    const value = e.target.value.trim();
    const name = e.target.name;

    setChangePassData({
      ...changePassData,
      [name]: value,
    });
    validateInput(name, value);
  };
  const handleSubmit = async () => {
    if (validateInput()) {
    await axiosInstance
      .post("forgetPassword",mydata)
      .then((res) => {
        const myData = res?.data;
        console.log("chnage Password Data --->", myData);
        // localStorage.setItem("type", "forget");
        // localStorage.setItem("userEmail", changePassData?.email);
        if (myData?.status) {
          setEmail(myData?.email)
          toast.success(myData?.msg);

          router.push("/passwordverify");
          // setTimeout(() => {
          // }, 3000);
        } else {
          toast.error(myData?.msg);
        }
      })
      .catch((err) => {
        console.log("err---->", err);
      });
  };
}
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();c 
    }
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
              name="currentpassword"
              value={changePassData?.currentpassword}
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
          {errors.currentpassword && (
            <div className="text-red-500 text-sm mb-2">{errors.currentpassword}</div>
          )}
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
              name="newpassword"
              value={changePassData?.newpassword}
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
          {errors.newpassword && (
            <div className="text-red-500 text-sm mb-2">{errors.newpassword}</div>
          )}
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
              name="confirmpassword"
              value={changePassData?.confirmpassword}
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
          {errors.confirmpassword && (
            <div className="text-red-500 text-sm mb-2">{errors.confirmpassword}</div>
          )}
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




// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const ChangePass = () => {
//   const [resetPassData, setResetPassData] = useState({
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const toggleCurrentPasswordVisibility = () => {
//     setShowCurrentPassword(!showCurrentPassword);
//   };

//   const toggleNewPasswordVisibility = () => {
//     setShowNewPassword(!showNewPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const onChangeInput = (e) => {
//     const { name, value } = e.target;
//     setResetPassData({
//       ...resetPassData,
//       [name]: value.trim(),
//     });
//   };

//   return (
//     <div>
//       {" "}
//       <div className=" bg-[#1C1C1C] shadow-2xl mt-8 rounded-b-lg p-8 pl-16 ">
//         <p className="font-medium text-[20px] mb-5 xsm:text-base">
//           Change Password
//         </p>
//         <div className="relative">
//           <label
//             htmlFor="currentPassword"
//             className="text-[#CACACA] mb-2 block"
//           >
//             Current Password
//           </label>
//           <div className="flex ">
//             <input
//               id="currentPassword"
//               className="rounded-l-md w-full sm:max-w-[450px] py-2 pl-2 pr-10 bg-neutral-800 outline-none"
//               type={showCurrentPassword ? "text" : "password"}
//               name="currentPassword"
//               value={resetPassData?.currentPassword}
//               onChange={onChangeInput}
//               placeholder="Current Password"
//             />
//             <div
//               className="bg-neutral-800 rounded-r-md pt-3 text-[#CACACA] cursor-pointer"
//               onClick={toggleCurrentPasswordVisibility}
//             >
//               {showCurrentPassword ? <FaEye /> : <FaEyeSlash />}
//             </div>
//           </div>
//         </div>

//         <div className="relative mt-5">
//           <label htmlFor="newPassword" className="text-[#CACACA] mb-2 block">
//             New Password
//           </label>
//           <div className="flex ">
//             <input
//               id="newPassword"
//               className="rounded-l-md w-full sm:max-w-[450px] py-2 pl-2 pr-10 bg-neutral-800 outline-none"
//               type={showNewPassword ? "text" : "password"}
//               name="newPassword"
//               value={resetPassData?.newPassword}
//               onChange={onChangeInput}
//               placeholder="New Password"
//             />
//             <div
//               className="bg-neutral-800 rounded-r-md pt-3 text-[#CACACA] cursor-pointer"
//               onClick={toggleNewPasswordVisibility}
//             >
//               {showNewPassword ? <FaEye /> : <FaEyeSlash />}
//             </div>
//           </div>
//         </div>

//         <div className="relative mt-5">
//           <label
//             htmlFor="confirmPassword"
//             className="text-[#CACACA] mb-2 block"
//           >
//             Confirm Password
//           </label>
//           <div className="flex">
//             <input
//               id="confirmPassword"
//               className="rounded-l-md w-full sm:max-w-[450px] py-2 pl-2 pr-10 bg-neutral-800 outline-none"
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               value={resetPassData?.confirmPassword}
//               onChange={onChangeInput}
//               placeholder="Confirm Password"
//             />
//             <div
//               className="bg-neutral-800 rounded-r-md pt-3 text-[#CACACA] cursor-pointer"
//               onClick={toggleConfirmPasswordVisibility}
//             >
//               {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 ">
//         <div className="flex justify-end mb-3">
//           <button
//             className="rounded-md bg-blue-500 text-sm p-1 px-4 md:text-[18px] font-medium"
//             // onClick={handleSubmit}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChangePass;