"use client";
import React, { useEffect, useState } from "react";

import HomeUser from "../public/assets/homeuser.png";
import Image from "next/image";
import Market from "./(pages)/Market/page";

const Page = () => {
  const userData = {
    userId: "95968227",
    vipLevel: "Regular User",
    userType: "Personal",
    following: 0,
    followers: 0,
  };

  return (
    <div className="text-white container">
      <div className="flex flex-col  " >
        <div className="flex items-center">
          <Image src={HomeUser} width="20px" height="10px" alt="homeuser" />
          <span className="ml-5 mr-20 flex">Anonymous-User-810b1</span>
        </div>
        <div className="border-r border-[#828282] "></div>
        <table className=" w-full mt-4 text-[#828282] text-center  overflow-auto   ">
          <thead>
            <tr>
<th className=" ">User Id</th>
<th className=" ">VIP Level</th>
<th className=" ">User Type</th>
<th className=" ">Following</th>
<th className=" ">Followers</th>
            </tr>
          </thead>
          <tbody>
            <tr className="py-2 md:flex-wrap">
<td>95968227</td>
<td >Regular User</td>
<td >Personal</td>
<td >0</td>
<td >0</td>
            </tr>
          </tbody>
        </table>
         {/* <table className="w-full mt-4 text-[#828282] text-center">
          <tbody className="">
            <tr className="flex justify-between ">
<td >User Id</td>
<td >VIP Level</td>
<td >User Type</td>
<td >Following</td>
<td >Followers</td>
            </tr>
            <tr className="py-2">
{Object.values(userData).map((value, index) => (
 <td key={index}>{value}</td>
))}
            </tr>
          </tbody>
        </table> */}
      </div>
      <div className="mt-10 bg-[#1C1C1C] rounded-2xl">
        <Market />
      </div>
    </div>
  );
};

export default Page;

// const Page = () => {
//   const userData = [
    
//     {userId: "95968227",
//   vipLevel: "Regular User",
//   userType: "Personal",
//   following: 0,
//   followers: 0},
 
//   {userId: "95968223",
//   vipLevel: "Regular User",
//   userType: "Personal",
//   following: 0,
//   followers: 0}]
    
//   };
//   return (
//     <div className="lg:container lg:mx-auto mx-3  md:flex gap-5">
//       <div className="lg:container lg:mx-auto md:mx-5 mx-3 ">
//         <table className="responsive-table border1">
//           <thead>
//             <tr>
//               <th className=" scope-col">User Id</th>
//               <th className="scope-col ">VIP Level</th>
//               <th className=" scope-col">User Type</th>
//               <th className=" scope-col">Following</th>
//               <th className="scope-col ">Followers</th>
//               {" "}
//             </tr>
//           </thead>

//           <tbody>
//             {/* {!userData?.length > 0 ? (
//               <tr>
//                 <td data-title="User Id">_</td>
//                 <td data-title="VIP Level">_</td>
//                 <td data-title="User Type">_</td>
//                 <td data-title="Following">_</td>
//                 <td data-title="Followers">_</td>
//               </tr>
//             ) : ( */}
//            {/* userData?.map((items) => ( */}
//                 <>
//                   <tr>
//                     <td data-title="User Id">{items?.userId}</td>
//                     <td data-title="VIP Level">{items?.vipLevel} months</td>
//                     <td data-title="User Type">{items?.userType}</td>
//                     <td data-title="Following">
//                     {items?.following}
//                     </td>
//                     <td data-title="Followers">{items?.followers}</td>
//                   </tr>
//                 </>
//               {/* )) */}
//             {/* )} */}
//           </tbody>
//         </table>
//       </div>
//       {/* <div className="lg:container lg:mx-auto md:mx-5 mx-3 ">
//         <div className="mb-3">
//           <MainTitle title={"Claim"} />
//         </div>
//         <table className="responsive-table border1">
//           <thead>
//             <tr>
//               <th scope="col">Claim amount </th>
//               <th scope="col">Claim amount date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {!historyDatas?.withdrawDetails?.length > 0 ? (
//               <tr>
//                 <td data-title="Claim amount">_</td>
//                 <td data-title="Claim amount date">_</td>
//               </tr>
//             ) : (
//               historyDatas?.withdrawDetails?.map((items) => (
//                 <>
//                   <tr>
//                     <td data-title="Claim amount">{items?.amount}</td>

//                     <td data-title="Claim amount date">
//                       {new Date(items?.createdAt)?.toLocaleDateString()}
//                     </td>
//                   </tr>
//                 </>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div> */}
//     </div>
//   );
// };

// export default Page;
