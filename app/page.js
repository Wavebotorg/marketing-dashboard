import React from "react"
import HomeUser from "../public/assets/homeuser.png"
import Image from "next/image"

const Page = () => {
  return (
    <div className="container text-white">
      <div className="flex">
        <div className="flex justify-between items-center">
          <Image src={HomeUser} width="20px" height="10px" alt="homeuser" />
          <span>Anonymous-User-810b1</span>
        </div>
        <div className="border-r border-[#828282]"></div>
        <div className="grid grid-cols-5 gap-4 mt-4 text-[#828282]">
          <div>User Id</div>
          <div>VIP Level</div>
          <div>User Type</div>
          <div>Following</div>
          <div>Followers</div>

          <div>95968227</div>
          <div>Regular User</div>
          <div>Personal</div>
          <div>0</div>
          <div>0</div>
        </div>
      </div>
    </div>
  )
}

export default Page
