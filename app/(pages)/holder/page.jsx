"use client";
import React, { useState, useEffect } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Pagination from "../Pagination/Pagination";
import { useSearch } from "../../components/contexts/SearchContext";

import axios from 'axios';
const Holder = () => {
//   const [allCoinData, setAllCoinData] = useState([
//     {
//       snapblock: "33",
//       time: "2:00:66",
//       reward: "$87",
//       unlock: "566",
//       status: "true",
//     },
//     {
//       snapblock: "27",
//       time: "2:00:66",
//       reward: "$30",
//       unlock: "566",
//       status: "true",
//     },
//     {
//       snapblock: "20",
//       time: "2:00:66",
//       reward: "$60",
//       unlock: "566",
//       status: "true",
//     },

//     ,
//   ]);

//   //pagination
//   const { searchQuery } = useSearch();
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;


//   //search
//   const filteredData = allCoinData.filter(
//     (coin) =>
//       coin.snapblock.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       coin.reward.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const visibleData = filteredData.slice(startIndex, endIndex);
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchQuery]);


//   return (
//     <div className="2xl:pl-64 xl:pl-64 md:pl-6 lg:pl-[4.8rem]  sm:pl-4 xsm:pl-0 mx-auto ">
//       <div className="flex flex-col xl:justify-center xl:ml-32 xl:mr-[92px]  lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-10">
//         <p className="text-[#1788FB]   text-2xl  md:text-3xl text-center md:text-left font-medium max-w-screen-lg ">
//           Holder Rewards
//         </p>
//         <div className="flex flex-col md:flex-row gap-6 mt-5">
//           <div className="rounded-lg text-[#CECECE]  p-4 bg-[#1C1C1C] flex items-center gap-2">
//             <IoIosInformationCircleOutline size={20} className="mt-[2px]" />
//             <p className="">Paginated Results</p>
//           </div>
//         </div>
//         <div className="flex flex-col  md:flex-row gap-6 mt-5 md:w-full ">
//           <div className="rounded-lg px-4 py-2 md:py-4  bg-[#1C1C1C] ">
//             <p className="text-[#CECECE]  font-light">Total Rewards</p>
//             <p className="text-blue-400 text-2xl mt-1  w-[178px] ">0ETH</p>
//           </div>
//           <div className="rounded-lg px-4 py-2 md:py-4  bg-[#1C1C1C] ">
//             <p className="text-[#CECECE] ">Unclaimed Rewards</p>
//             <p className="text-blue-400 text-2xl mt-1 w-[178px] ">0ETH</p>
//           </div>
//           <div className="rounded-lg px-4 py-2 md:py-4  bg-[#1C1C1C] ">
//             <p className="text-[#CECECE] ">Claimable Rewards</p>
//             <p className="text-blue-400 text-2xl mt-1 w-[178px] ">0ETH</p>
//           </div>
//         </div>

//         <div className="mt-7 font-medium text-2xl mb-4 mb:mb-0">
//           <h1 className="  ">Holder Rewards</h1>
//         </div>

//         <div className="mt-4 hidden lg:block ">
//           <div className="rounded-lg">
//             <div className="bg-[#1C1C1C] table-container  text-white h-auto overflow-auto rounded-lg">
//               {/* for 2xl ,xl and lg size  */}
//               <table className="w-full  ">
//                 <thead className="sticky top-0 overflow-auto bg-[#1C1C1C] shadow-2xl ">
//                   <tr
//                     style={{ backgroundColor: "rgba(23, 136, 251, 0.26)" }}
//                     className=" text-[#CECECE]  "
//                   >
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium  "
//                     >
//                       Snapshot Block
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
//                     >
//                       Time{" "}
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
//                     >
//                       Rewards
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
//                     >
//                       Unlock
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
//                     >
//                       Status
//                     </th>
//                   </tr>
//                 </thead>
          
       
//                 <tbody>
//                   {visibleData?.length > 0 &&
//                     visibleData?.map((d, index) => (
//                       <>
//                         <tr key={index}>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
//                             <div> {d?.snapblock}</div>
//                           </td>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             {d?.time}
//                           </td>

//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             <div className="flex items-center justify-center gap-5">
//                               <div>${d?.reward} </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             {d?.unlock}
//                           </td>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             <div className="flex justify-center items-center ">
//                               {d?.status}
//                             </div>
//                           </td>
//                         </tr>
//                       </>
//                     ))}
//                 </tbody>
//                 {/* ))} */}
//               </table>
//             </div>
//           </div>
//         </div>
        
//         <Pagination
//           totalItems={filteredData.length}
//           itemsPerPage={itemsPerPage}
//           onPageChange={handlePageChange}
//           currentPage={currentPage}
//         />
     
//       {/* for md and sm size */}
//         {visibleData?.length > 0 &&
//           visibleData?.map((d, index) => (
//             <div key={index} className="lg:hidden mt-4 ">
//               <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
//                 <div className="w-full  ">
//                   <div className="">
//                     <>
//                       <div className="border-b border-[#494949] flex justify-between">
//                         <div className="py-2  pl-4 font-semibold">
//                           {" "}
//                           Snapshot Block
//                         </div>
//                         <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
//                           {d?.snapblock}
//                         </div>
//                       </div>
//                       <div className="border-b border-[#494949] flex justify-between">
//                         <div className="py-2  pl-4 font-semibold">Time</div>
//                         <div className=" py-2 pr-4 pl-4"> {d?.time}</div>
//                       </div>
//                       <div className="border-b border-[#494949] flex justify-between">
//                         <div className="py-2  pl-4 font-semibold">Rewards</div>
//                         <div className=" py-2 pr-4 pl-4"> ${d?.reward}</div>
//                       </div>

//                       <div className="border-b border-[#494949] flex justify-between">
//                         <div className="py-2  pl-4 font-semibold"> Unlock</div>
//                         <div className="flex justify-end items-center py-2 pr-4 pl-4">
//                           {d?.unlock}
//                         </div>
//                       </div>
//                       <div className=" flex justify-between">
//                         <div className="py-2  pl-4 font-semibold">Status</div>
//                         <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
//                           {d?.status}
//                         </div>
//                       </div>
//                       <div></div>
//                     </>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };





    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const headers = {
      accept: "application/json",
      "x-api-key": "NnWuSFA6uF8l1250rzZzq4FQ1TBITVpsafc4CDwy",
  };

  const fetchDEXToolsData = async () => {
      const baseUrl = "https://public-api.dextools.io/standard/v2/token/ether";
      const params = {
          sort: "socialsInfoUpdated",
          order: "asc",
          from: "2023-10-01T00:00:00.000Z",
          to: "2023-11-01T00:00:00.000Z",
          pageSize: 50
      };

      try {
          // Create an array of promises for each page request
          const requests = [];
          for (let page = 1; page <= 10; page++) {
              requests.push(
                  axios.get(baseUrl, {
                      headers,
                      params: { ...params, page }
                  })
              );
          }

          // Resolve all promises
          const responses = await Promise.all(requests);

          // Merge all data into a single array
          const mergedData = responses.flatMap(response => response?.data?.data?.tokens);
        console.log("mergedData-------------------",mergedData)
          setData(mergedData);
      } catch (error) {
          console.error('Error fetching data:', error);
          setError(error);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      fetchDEXToolsData();
  }, []);


    
    return (
      <div className="2xl:pl-64 xl:pl-64 md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto ">
      <div className="flex flex-col xl:justify-center   xl:ml-32 xl:mr-[93px] lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5  mt-10">
      <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((token, index) => (
                        <tr key={index}>
                            <td>{token?.name}</td>
                            <td>{token?.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
        </div>
        </div>
    );
};



export default Holder;
