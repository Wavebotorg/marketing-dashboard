"use client";
import React, { useEffect, useState } from "react";

import HomeUser from "../public/assets/homeuser.png";
import Image from "next/image";
import Market from "./(pages)/Market/page";
import { GrFormNext } from "react-icons/gr";
import { PiCopySimple } from "react-icons/pi";



const Page = () => {
  const userData = [
    {
      userId: "95968227",
      vipLevel: "Regular User",
      userType: "Personal",
      following: 0,
      followers: 0,
    },

    // {userId: "95968223",
    // vipLevel: "Regular User",
    // userType: "Personal",
    // following: 0,
    // followers: 0}
  ];

  return (
    <div className="text-white container  ">
   
      
        <div className="lg:container lg:mx-auto mx-3  md:flex gap-5 ">
        <div className="flex items-center mb-5 md:mb-0">
          <Image src={HomeUser} width="20px" height="10px" alt="homeuser" />
          <span className="ml-5 mr-5 text-wrap md:text-nowrap">Anonymous-User-810b1</span>
        </div>
          <div className="lg:container lg:mx-auto md:mx-5 mx-3 ">
            <table className="responsive-table border1 ">
              <thead className="text-[#828282] md:text-[#828282]">
                <tr className="  ">
                  <th  scope="col">User Id</th>
                  <th scope="col ">VIP Level</th>
                  <th scope="col">User Type</th>
                  <th  scope="col">Following</th>
                  <th scope="col ">Followers</th>{" "}
                </tr>
              </thead>

              <tbody >
                {/* {!userData?.length > 0 ? (
              <tr>
                <td data-title="User Id">_</td>
                <td data-title="VIP Level">_</td>
                <td data-title="User Type">_</td>
                <td data-title="Following">_</td>
                <td data-title="Followers">_</td>
              </tr>
            ) : ( */}
                {userData?.map((items) => (
                  <>
                    <tr className="md:pl-2" >
                      <td data-title="User Id " className=" ">{items?.userId}
                      <button className="pl-2 text-xl " >  <PiCopySimple /></button> 
                    </td>
                      <td data-title="VIP Level" className=" " >{items?.vipLevel} 
                     
                        <button className="pl-2 text-2xl " ><GrFormNext /></button>  
                   </td>
                      <td data-title="User Type" className=" ">{items?.userType}</td>
                      <td data-title="Following" className=" ">{items?.following}</td>
                      <td data-title="Followers" className=" ">{items?.followers}
                      <button className="pl-2 text-2xl " ><GrFormNext /></button>  </td>
                    </tr>
                  
                  </>
                  
                ))}
              </tbody>
            </table>
          </div>
        
        </div>
  

      <div className="mt-10 bg-[#1C1C1C] rounded-2xl ">
        <Market />
      </div>
    </div>
  );
};

export default Page;
