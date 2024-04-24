// "use client";
// import { useParams } from "react-router-dom";
// import Image from "next/image";
// import "./market.css";
// import React, { useEffect, useState } from "react";
// import { LiaEyeSolid } from "react-icons/lia";
// import { BiBookmark } from "react-icons/bi";
// import axiosInstanceAuth from "@/app/apiInstances/axiosInstanceAuth";
// import Link from "next/link";
// import axios from "axios";
// import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
// import { useSearch } from "../../components/contexts/SearchContext";
// import Pagination from "../Pagination/Pagination";
// import { useRouter } from "next/navigation";
// import Chart from "../chart/ChartComponent"
// import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa";
// const Market = () => {
//   const { id } = useParams();
//   const router = useRouter();
//   // console.log("🚀 ~ Market ~ searchQuery:", searchQuery)
//   const [allCoinData, setAllCoinData] = useState([]);
//   const [allCoinData1, setAllCoinData1] = useState([]);
//   const [savedCoins, setSavedCoins] = useState([]);
//   const [savedData, setSavedData] = useState([])
//   console.log("🚀 ~ Market--------------------------------- ~ savedData:", savedData)

//   const [token, setToken] = useState(null);
//   console.log(savedData, "<,----------------savedData");
//   console.log("getAllCoin------->>>", allCoinData);
//   console.log("savedcoins-----------------", savedCoins);
//   const getUserData= async () => {
//     axios
//       .get(
//         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&page=1&per_page=250&order=market_cap_desc&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en"
//         // "https://api.coinpaprika.com/v1/tickers"
      
//       )
//       .then((res) => {
//         setAllCoinData(res?.data);
//         console.log("🚀 ~ .then ~  setAllCoinData:", res?.data)
//       })

//       .catch((err) => {
//         console.log("err --->", err);
//       });
//   };

 



  
// // const getUserData = async () => {
// //   try {
// //       const coinpaprikaResponse = await axios.get("https://api.coinpaprika.com/v1/tickers");

// //       const coinpaprikaData = coinpaprikaResponse.data;

// //       // Create a map of symbols and ids to images from Coinpaprika
// //       const symbolImageMap = {};

// //       // Fetch details for each coin to access its image link from the detailed API
// //       await Promise.all(coinpaprikaData.map(async (coin) => {
// //           try {
// //               const coinDetailsResponse = await axios.get(`https://api.coinpaprika.com/v1/coins/${coin.id}`);
// //               const coinDetails = coinDetailsResponse.data;
// //               if (coinDetails.logo) {
// //                   symbolImageMap[coin.symbol.toLowerCase()] = coinDetails.logo;
// //                   symbolImageMap[coin.id.toLowerCase()] = coinDetails.logo;
// //               }
// //           } catch (error) {
// //               console.error(`Error fetching details for ${coin.name}:`, error);
// //           }
// //       }));

// //       // Merge Coinpaprika data with images based on case-insensitive symbol matching
// //       const mergedData = coinpaprikaData.map(coin => ({
// //           ...coin,
// //           image: symbolImageMap[coin.symbol.toLowerCase()] || symbolImageMap[coin.id.toLowerCase()] || null // Use image from Coinpaprika or null if not found
// //       }));
// //       setAllCoinData(mergedData);

// //       // Do something with merged data, like setting state or logging
// //       console.log("Merged data:", mergedData);
// //   } catch (error) {
// //       console.error("Error fetching data:", error);
// //   }
// // };



//   //pagination 
//   const { searchQuery } = useSearch();//search
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   //search
//   const filteredData = allCoinData.filter((coin) =>
//     coin.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     coin.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const visibleData =filteredData.slice(startIndex, endIndex);
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   useEffect(() => {
//     setCurrentPage(1)
//   }, [searchQuery]); 



//   useEffect(() => {
//     getUserData()

//     saveCoin();
//     // Check if the user is logged in when the component mounts

//     const storedToken = localStorage.getItem("Token");
//     // if(!storedToken)
//     // {
//       // router.push("/login")
//     // }
//     setToken(storedToken);
//   }, []);



// //   function formatToUSD(val){
// //     const formattedValue = val.toLocaleString('en-US',{
// //         style:'currency',
// //         currency:'USD'
// //     })
// //     const trimmedValue = formattedValue.replace(".00","")
// //     return trimmedValue
// // }
//   const saveCoin = async (id) => {
//     try {
//       const isSaved = savedData.includes(id);


//       // Check if the coin is already saved
//       const res = await axiosInstanceAuth.get("/allWatchlistData");
//       console.log("rres----------->>>", res);
//       setSavedData(res?.data?.data);


//       if (isSaved) {
//         // If saved, remove it from the saved list
//         setSavedCoins((prevSavedCoins) =>
//           prevSavedCoins.filter((coinId) => coinId !== id)
//         );
//         setSavedData((prevSavedData) => {
//           if (Array.isArray(prevSavedData)) {
//             return prevSavedData.filter((coinId) => coinId !== id);
//           } else {
//             return [];
//           }
//         });
//       } else {
//         // If not saved, add it to the saved list
//         setSavedCoins((prevSavedCoins) => [...prevSavedCoins, id]);
//         setSavedData((prevSavedData) => {
//           if (Array.isArray(prevSavedData)) {
//             return [...prevSavedData, id];
//           } else {
//             return [id];
//           }
//         });

//         // Save the coin to the server (if needed)
//         await axiosInstanceAuth.post("watchlist", { coinId: id });
//       }
//     } catch (err) {
//       console.log("Error while updating saved coins:", err); 
//     }
//   };
//   return (
//     <>

//       <div className=" bg-[#1C1C1C] rounded-2xl">
//         {/* <div className="border-b border-stone-500 mt-7" /> */}
//         <div className=" sm:pl-10 pl-2 sm:py-9 py-4">
//           <div className="flex pb-3">
//             <h1 className="font-bold text-2xl">Liquidity Intents</h1>
//             <span className="text-[#828282] text-xl pl-4 pt-1   ">
//               <LiaEyeSolid />
//             </span>
//           </div>
//           {/* {allCoinData?.length > 0 &&
//                    allCoinData?.map((d, index) => (
//                       <>
//                         <div key={index}> */}
//           <div className="flex pb-4 ">
//             <h1 className="text-[#1788FB] font-bold md:text-3xl text-lg  md:pr-3 pr-0">
//               {/* {d.current_price} */} 0.01899934
//             </h1>{" "}
//             {/* <span>{d.symbol}</span> */}
//             <select
//               name="select Row"
//               className="bg-[#1C1C1C] text-white rounded-lg p-1 !outline-none  "
//               defaultValue=" BTC"
//             >
//               <option value="BTC">BTC</option>
//               <option value="BTC1">BTC2</option>
//               <option value="BTC3">BTC3</option>
//               <option value="BTC4">BTC4</option>
//               <option value="BTC5">BTC5</option>
//             </select>
//           </div>
//           <div className="text-sm pb-4">{/* =${d.price} */} =$42,693.8</div>
//           <div className="text-sm ">{/* {d.pnl} */} Todays PnL -$.550()</div>
          
//           {/* </div>
//                         </>
//                    ))} */}
//         </div>

//         {/* Border */}
//         <div className="lg:border-t lg:border-white  lg:pb-2 pb-0"></div>

//         <div className=" hidden lg:block ">
//           <div className="rounded-lg">
//             <h1 className="font-medium pt-5 text-3xl tracking-wide pl-10">
//               Markets
//             </h1>
//             <div className="flex justify-end  mb-7 ">
//               {/* <div>
//             <label className=" text-sm md:text-lg">Rows per page </label>
//             <select
//               name="select Row"
//               className="bg-blue-500 rounded-lg p-1 !outline-none "
//               defaultValue="Show 5"
//             >
//               <option value="Show 1">Show 1</option>
//               <option value="Show 2">Show 2</option>
//               <option value="Show 3">Show 3</option>
//               <option value="Show 4">Show 4</option>
//               <option value="Show 5">Show 5</option>
//             </select>
          
//           </div> */}
//             </div>
//             <div className="bg-[#1C1C1C]  text-white h-auto overflow-auto rounded-lg px-10 ">

//               <table className="w-full  ">
//                 <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
//                   <tr className=" text-[#CECECE]  2xl:text-lg xl:text-base">
//                     <th
//                       scope="col"
//                       className=" py-3  font-medium text-start "
//                     >
//                       Coin
//                     </th>
                   
//                     <th
//                       scope="col"
//                       className=" py-3 text-center  font-medium   whitespace-nowrap"
//                     >
//                       Coin Price
//                     </th>
//                     <th
//                       scope="col"
//                       className=" py-3 text-center  font-medium   whitespace-nowrap"
//                     >
//                       1h
//                     </th>
//                     <th
//                       scope="col"
//                       className=" py-3 text-center  font-medium   whitespace-nowrap" >
//                       24h
//                     </th>
//                     <th
//                       scope="col"
//                       className=" py-3 text-center  font-medium   whitespace-nowrap"
//                     >
//                       7d
//                     </th>
//                     <th
//                       scope="col"
//                       className=" py-3 text-center  font-medium   whitespace-nowrap"
//                     >
//              24th Volume
//                     </th>
//                     <th
//                       scope="col"
//                       className=" py-3 text-center  font-medium  whitespace-nowrap"
//                     >
//                       Market Cap	
//                     </th>
//                     <th
//                       scope="col"
//                       className=" py-3 text-center  font-medium  whitespace-nowrap"
//                     >
//                     Last 7 days
//                     </th>
//                     {token && (
//                       <th

//                         scope="col"
//                         className=" py-3 text-end font-medium  whitespace-nowrap"
//                       >
//                         Save
//                       </th>
//                     )}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {visibleData?.length > 0 &&
//                     visibleData?.map((market, index) => (
//                       <>
//                         <tr key={index} className="  2xl:text-md xl:text-base" >
//                           {/* className={`${
//                       savedCoins.includes(market.id) ? 'bg-blue-500' : ''
//                     }`}> */}
//                           <td className=" py-4 text-center whitespace-nowrap  font-medium text-white ">
//                             <div className="flex items-center  gap-2">
//                               <div>
//                                 <Image
//                                   src={market?.image}
//                                   alt={market?.name}
//                                   className="rounded-full"
//                                   width={30}
//                                   height={30}
//                                 />
//                               </div>
//                               <div> {market?.name}</div>
//                             </div>
//                           </td>
                       

//                           <td className="text-center whitespace-nowrap  text-white ">

//                             <div className="flex flex-col items-center justify-center">
//                               {/* <div>{formatToUSD(market?.current_price)}</div> */}
//                               <div>${market?.quotes.USD.price.toFixed(2)}</div>
                              
//                             </div>
//                           </td>
//                           <td className= {`text-center whitespace-nowrap  text-white `} >
//                           <div
//                                   className={`flex justify-center items-center ${
//                                     market?.quotes.USD.percent_change_1h    === 0
                                  
//                                       ? "text-white"
//                                       : market?.quotes.USD.percent_change_1h < 0
//                                       ? "text-red-500"
//                                       : "text-green-500"
//                                   }`}
//                                 >
//                                   {market?.quotes.USD.percent_change_1h  === 0 ? (
//                                     <FaMinus size={15} className="text-white" />
//                                   ) : market?.quotes.USD.percent_change_1h <
//                                     0 ? (
//                                     <FaCaretDown
//                                       size={15}
//                                       className="text-red-500"
//                                     />
//                                   ) : (
//                                     <FaCaretUp
//                                       size={15}
//                                       className="text-green-500"
//                                     />
//                                   )}
//                               {(market?.quotes.USD.percent_change_1h  * 100 ).toFixed(1)}%
//                                 </div>
//                             </td>
                        

//                           <td className="  text-center whitespace-nowrap  text-white ">
//                           <div
//                                   className={`flex justify-center items-center ${
//                                     market?.quotes.USD.percent_change_24h  === 0
                                 
                                   
//                                       ? "text-white"
//                                       : market?.quotes.USD.percent_change_24h < 0
//                                       ? "text-red-500"
//                                       : "text-green-500"
//                                   }`}
//                                 >
//                                   { market?.quotes.USD.percent_change_24h  === 0 ? (
//                                     <FaMinus size={15} className="text-white" />
//                                   ) :  market?.quotes.USD.percent_change_24h <
//                                     0 ? (
//                                     <FaCaretDown
//                                       size={15}
//                                       className="text-red-500"
//                                     />
//                                   ) : (
//                                     <FaCaretUp
//                                       size={15}
//                                       className="text-green-500"
//                                     />
//                                   )}
//                               {( market?.quotes.USD.percent_change_24h  * 100).toFixed(1)}%
//                                 </div>
//                                 </td>
//                           <td className="  text-center whitespace-nowrap  text-white ">
//                           <div
//                                   className={`flex justify-center items-center ${
//                                     market?.quotes.USD.percent_change_7d    === 0
                                   
                                 
//                                       ? "text-white"
//                                       :   market?.quotes.USD.percent_change_7d < 0
//                                       ? "text-red-500"
//                                       : "text-green-500"
//                                   }`}
//                                 >
//                                   {  market?.quotes.USD.percent_change_7d  === 0 ? (
//                                     <FaMinus size={15} className="text-white" />
//                                   ) :  market?.quotes.USD.percent_change_7d <
//                                     0 ? (
//                                     <FaCaretDown
//                                       size={15}
//                                       className="text-red-500"
//                                     />
//                                   ) : (
//                                     <FaCaretUp
//                                       size={15}
//                                       className="text-green-500"
//                                     />
//                                   )}
//                      {(  market?.quotes.USD.percent_change_7d  * 100).toFixed(1)}%
//                                 </div>
//                            </td>
//                           <td className=" text-center whitespace-nowrap  text-white ">
                            
//                             <div className="flex justify-center items-center ">
//                              {/* {formatToUSD(market?.total_volume)} */}
//                              ${market?.quotes.USD.volume_24h.toFixed(2)}
//                             </div>
//                           </td>
//                                     <td className="  text-center whitespace-nowrap  text-white ">${market?.quotes.USD.market_cap.toFixed(2)}</td>
//                           {/* <td className="  text-center whitespace-nowrap  text-white ">{formatToUSD(market?.market_cap)}</td> */}
//                           <td className=" text-center whitespace-nowrap  text-white ">
//                           <div className="flex justify-center items-center ">
//                           {/* <Chart
//               sparkline={market?.sparkline_in_7d.price}
//               priceChange={market?.price_change_percentage_7d_in_currency}
//             /> */}
//                             </div>
//                         </td>
//                           <td className="   py-7   flex justify-end whitespace-nowrap  text-white  ">
//                             {token ? (savedData && savedData.includes(market?.id) ? (
//                               // Render a filled bookmark if the coin is saved
//                               <button className="">
//                                 <IoBookmark
//                                   className="text-[#159055]"
//                                   size={17}
//                                 />
//                                 {/* style={{ backgroundColor: "#1788FB" }} */}
//                               </button>
//                             ) : (
//                               // Render a button to save the coin
//                               <button
//                                 className=""
//                                 onClick={() => saveCoin(market?.id)}
//                               >
//                                 <IoBookmarkOutline size={17} />
//                               </button>
//                             )
//                             ) : null}
//                           </td>
//                         </tr>
//                       </>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="xsm:hidden md:hidden lg:block"> */}
//         <Pagination
//           totalItems={filteredData.length}
//           itemsPerPage={itemsPerPage}
//           onPageChange={handlePageChange}
//           currentPage={currentPage}
//         />
      
//       {/* </div> */}
//       {visibleData?.length > 0 &&
//       visibleData?.map((market, index) => (
//           <div
//             key={index}
//             className="lg:hidden mt-4 space-y-2 flex justify-between"
//           >
//             <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
//               <div className="w-full  ">
//                 <>
//                   <div
//                     className={`border-b border-[#494949] flex justify-between`
//                     }
//                   >
//                     <div className="py-2  pl-4 font-semibold">Coin</div>
//                     <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
//                       <span>
//                         <Image
//                           src={market?.image}
//                           alt={market?.name}
//                           className="rounded-full "
//                           width={30}
//                           height={30}
//                         />
//                       </span>
//                       {market?.name}
//                     </div>
//                   </div>
               
//                   <div className="border-b border-[#494949] flex justify-between">
//                     <div className="py-2  pl-4 font-semibold">Coin Price</div>
//                     <div className="flex flex-col items-center justify-center py-2  px-4">
//                       <div className="">${market?.current_price}</div>
//                       {/* <div
//                         className={
//                           market?.price_change_percentage_24h === 0
//                             ? "text-white"
//                             : market?.price_change_percentage_24h < 0
//                               ? "text-red-500 "
//                               : "text-green-500 "
//                         }
//                       >
//                         ({market?.price_change_percentage_24h})
//                       </div> */}
//                     </div>
//                   </div>
//                   <div className="border-b border-[#494949] flex justify-between">
//                     <div className="py-2  pl-4 font-semibold">1h</div>
//                     <div className="flex justify-end items-center py-2 px-4 ">
                  
//                           <div
//                                   className={`flex justify-center items-center ${
//                                     market?.price_change_percentage_1h_in_currency === 0
//                                       ? "text-white"
//                                       : market?.price_change_percentage_1h_in_currency < 0
//                                       ? "text-red-500"
//                                       : "text-green-500"
//                                   }`}
//                                 >
//                                   {market?.price_change_percentage_1h_in_currency === 0 ? (
//                                     <FaMinus size={15} className="text-white" />
//                                   ) : market?.price_change_percentage_1h_in_currency<
//                                     0 ? (
//                                     <FaCaretDown
//                                       size={15}
//                                       className="text-red-500"
//                                     />
//                                   ) : (
//                                     <FaCaretUp
//                                       size={15}
//                                       className="text-green-500"
//                                     />
//                                   )}
//                               {(market?.price_change_percentage_1h_in_currency * 100 ).toFixed(1)}%
//                                 </div>           
//                     </div>
//                   </div>
//                   <div className="border-b border-[#494949] flex justify-between">
//                     <div className="py-2  pl-4 font-semibold">24h</div>
//                     <div className="flex justify-end items-center py-2 px-4 "> <div
//                                   className={`flex justify-center items-center ${
//                                     market?.price_change_percentage_24h_in_currency=== 0
//                                       ? "text-white"
//                                       : market?.price_change_percentage_24h_in_currency< 0
//                                       ? "text-red-500"
//                                       : "text-green-500"
//                                   }`}
//                                 >
//                                   {market?.price_change_percentage_24h_in_currency === 0 ? (
//                                     <FaMinus size={15} className="text-white" />
//                                   ) : market?.price_change_percentage_24h_in_currency<
//                                     0 ? (
//                                     <FaCaretDown
//                                       size={15}
//                                       className="text-red-500"
//                                     />
//                                   ) : (
//                                     <FaCaretUp
//                                       size={15}
//                                       className="text-green-500"
//                                     />
//                                   )}
//                               {(market?.price_change_percentage_24h_in_currency * 100).toFixed(1)}%
//                                 </div></div>
//                   </div>
//                   <div className="border-b border-[#494949] flex justify-between">
//                     <div className="py-2  pl-4 font-semibold">7d</div>
//                     <div className="flex justify-end items-center py-2 px-4 "> <div
//                                   className={`flex justify-center items-center ${
//                                     market?.price_change_percentage_7d_in_currency=== 0
//                                       ? "text-white"
//                                       : market?.price_change_percentage_7d_in_currency< 0
//                                       ? "text-red-500"
//                                       : "text-green-500"
//                                   }`}
//                                 >
//                                   {market?.price_change_percentage_7d_in_currency === 0 ? (
//                                     <FaMinus size={15} className="text-white" />
//                                   ) : market?.price_change_percentage_7d_in_currency<
//                                     0 ? (
//                                     <FaCaretDown
//                                       size={15}
//                                       className="text-red-500"
//                                     />
//                                   ) : (
//                                     <FaCaretUp
//                                       size={15}
//                                       className="text-green-500"
//                                     />
//                                   )}
//                      {(market?.price_change_percentage_7d_in_currency * 100).toFixed(1)}%
//                                 </div></div>
//                   </div>
//                   <div className="border-b border-[#494949] flex justify-between">
//                     <div className="py-2  pl-4 font-semibold"> 24th Volume</div>
//                  <div className="flex justify-end items-center py-2 px-4 ">   
//                  {/* {market?.quotes.USD.percent_change_24h}% */}
//                      {/* {formatToUSD(market?.total_volume)}  */} 
//                      </div>
//                   </div>
//                   <div className="border-b border-[#494949] flex justify-between">
//                     <div className="py-2  pl-4 font-semibold"> Market Cap	</div>
//                     <div className="flex justify-end items-center py-2 px-4 "> {market?.market_cap}</div>
//                     {/* {formatToUSD(market?.market_cap)} */}
//                   </div>
//                   <div className="border-b border-[#494949] flex justify-between">
//                     <div className="py-2  pl-4 font-semibold">  Last 7 days	</div>
//                     <div className="flex justify-end items-center py-2 px-4 "> <div className="flex justify-center items-center ">
//                           {/* <Chart sparkline={market?.sparkline_in_7d.price} priceChange={market?.price_change_percentage_7d_in_currency} /> */}
//                             </div></div>
//                   </div>
                 
//                   {token && (<div className="flex justify-between border-t border-[#494949]">
//                     <div className="py-2  pl-4 font-semibold">
//                       Save

//                     </div>



//                     <div className="flex justify-end py-2 px-4">
//                       <div className="flex items-center ml-16">
//                         {savedData && savedData.includes(market?.id) ? (
//                           // Render a filled bookmark if the coin is saved
//                           <button className="">
//                             <IoBookmark
//                               className="text-[#159055]"
//                               size={17}
//                             />
//                             {/* style={{ backgroundColor: "#1788FB" }} */}
//                           </button> 
//                         ) : (
//                           // Render a button to save the coin
//                           <button
//                             className=""
//                             onClick={() => saveCoin(market?.id)}
//                           >
//                             <IoBookmarkOutline size={17} />
//                           </button>
//                         )}
//                       </div>
//                     </div>

//                   </div>
//                   )}
//                 </>
//               </div>
//             </div>
//             <div></div>{" "}
//           </div>
//         ))}

//     </>
//   );
// };

// export default Market;
"use client";
import { useParams } from "react-router-dom";
import Image from "next/image";
import "./market.css";
import React, { useEffect, useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { BiBookmark } from "react-icons/bi";
import axiosInstanceAuth from "@/app/apiInstances/axiosInstanceAuth";
import Link from "next/link";
import axios from "axios";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useSearch } from "../../components/contexts/SearchContext";
import Pagination from "../Pagination/Pagination";
import { useRouter } from "next/navigation";
import Chart from "../chart/ChartComponent";

import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa";
const Market = () => {
  const { id } = useParams();
  const router = useRouter();
  // console.log("🚀 ~ Market ~ searchQuery:", searchQuery)
  const [allCoinData, setAllCoinData] = useState([]);
  const [savedCoins, setSavedCoins] = useState([]);
  const [savedData, setSavedData] = useState([]);

  console.log(
    "🚀 ~ Market--------------------------------- ~ savedData:",
    savedData
  );

  const [token, setToken] = useState(null);
  console.log(savedData, "<,----------------savedData");
  console.log("getAllCoin------->>>", allCoinData);
  console.log("savedcoins-----------------", savedCoins);
  const getUserdata = async () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&page=1&per_page=260&order=market_cap_desc&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en"
      )
      .then((res) => {
        setAllCoinData(res?.data);
        console.log("🚀 ~ .then ~  setAllCoinData:", res?.data);
      })

      .catch((err) => {
        console.log("err --->", err);
      });
  };

  // useEffect(() => {
  //   resetSearchQuery();
  // }, [resetSearchQuery]);

  //pagination
  const { searchQuery } = useSearch(); //search
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  //search
  const filteredData = allCoinData.filter(
    (coin) =>
      coin.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const visibleData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    getUserdata();

    saveCoin();
    // Check if the user is logged in when the component mounts

    const storedToken = localStorage.getItem("Token");
    // if(!storedToken)
    // {
    // router.push("/login")
    // }
    setToken(storedToken);
  }, []);

  function formatToUSD(val) {
    const formattedValue = val.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    const trimmedValue = formattedValue.replace(".00", "");
    return trimmedValue;
  }
  const saveCoin = async (id) => {
    try {
      const isSaved = savedData.includes(id);

      // Check if the coin is already saved
      const res = await axiosInstanceAuth.get("/allWatchlistData");
      console.log("rres----------->>>", res);
      setSavedData(res?.data?.data);

      if (isSaved) {
        // If saved, remove it from the saved list
        setSavedCoins((prevSavedCoins) =>
          prevSavedCoins.filter((coinId) => coinId !== id)
        );
        setSavedData((prevSavedData) => {
          if (Array.isArray(prevSavedData)) {
            return prevSavedData.filter((coinId) => coinId !== id);
          } else {
            return [];
          }
        });
      } else {
        // If not saved, add it to the saved list
        setSavedCoins((prevSavedCoins) => [...prevSavedCoins, id]);
        setSavedData((prevSavedData) => {
          if (Array.isArray(prevSavedData)) {
            return [...prevSavedData, id];
          } else {
            return [id];
          }
        });

        // Save the coin to the server (if needed)
        await axiosInstanceAuth.post("watchlist", { coinId: id });
      }
    } catch (err) {
      console.log("Error while updating saved coins:", err);
    }
  };

  const removeSavedCoin = async (coinId) => {
    try {
      // Make an API call to remove the coin from the watchlist
      await axiosInstanceAuth.post("removeCoinWatchlist", {
        coinId: coinId,
      });
      const updatedSavedData = savedData.filter((id) => id !== coinId);
      setSavedData(updatedSavedData);
      // Update the local state to reflect the changes
      const updatedWatchlist = watchlist.filter((id) => id !== coinId);
      setWatchlist(updatedWatchlist);
      const updatedWatchlistData = allCoinData.filter((coin) =>
        updatedWatchlist.includes(coin.id)
      );
      setWatchlistData(updatedWatchlistData);

      // Check if the coin is saved in savedData and toggle its status
      const isSaved = savedData && savedData.includes(coinId);
      if (isSaved) {
        // If saved, remove it from savedData
        setSavedData((prevSavedData) =>
          prevSavedData.filter((id) => id !== coinId)
        );
      } else {
        // If not saved, add it to savedData
        setSavedData((prevSavedData) => [...prevSavedData, coinId]);
      }

      setShowModal(false);
    } catch (err) {
      console.log("Error removing coin from watchlist:", err);
    }
  };

  // const removeSavedCoin = (coinId) => {
  //   // Filter out the coin ID from saved data
  //   const updatedSavedData = savedData.filter((id) => id !== coinId);
  //   setSavedData(updatedSavedData);
  // };
  // const removeCoinFromWatchlist = async () => {};

  return (
    <>
      <div className=" bg-[#1C1C1C] rounded-2xl">
        {/* <div className="border-b border-stone-500 mt-7" /> */}
        <div className=" sm:pl-10 pl-2 sm:py-9 py-4">
          <div className="flex pb-3">
            <h1 className="font-bold text-2xl">Liquidity Intents</h1>
            <span className="text-[#828282] text-xl pl-4 pt-1   ">
              <LiaEyeSolid />
            </span>
          </div>
          {/* {allCoinData?.length > 0 &&
                   allCoinData?.map((d, index) => (
                      <>
                        <div key={index}> */}
          <div className="flex pb-4 ">
            <h1 className="text-[#1788FB] font-bold md:text-3xl text-lg  md:pr-3 pr-0">
              {/* {d.current_price} */} 0.01899934
            </h1>{" "}
            {/* <span>{d.symbol}</span> */}
            <select
              name="select Row"
              className="bg-[#1C1C1C] text-white rounded-lg p-1 !outline-none  "
              defaultValue=" BTC"
            >
              <option value="BTC">BTC</option>
              <option value="BTC1">BTC2</option>
              <option value="BTC3">BTC3</option>
              <option value="BTC4">BTC4</option>
              <option value="BTC5">BTC5</option>
            </select>
          </div>
          <div className="text-sm pb-4">{/* =${d.price} */} =$42,693.8</div>
          <div className="text-sm ">{/* {d.pnl} */} Todays PnL -$.550()</div>

          {/* </div>
                        </>
                   ))} */}
        </div>

        {/* Border */}
        <div className="lg:border-t lg:border-white  lg:pb-2 pb-0"></div>

        <div className=" hidden lg:block ">
          <div className="rounded-lg">
            <h1 className="font-medium pt-5 text-3xl tracking-wide pl-10">
              Markets
            </h1>
            <div className="flex justify-end  mb-7 ">
       
            </div>
            <div className="bg-[#1C1C1C]  text-white h-auto overflow-auto rounded-lg px-10 ">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr className=" text-[#CECECE]  2xl:text-lg xl:text-base">
                    <th scope="col" className=" py-3  font-medium text-start ">
                      Coin
                    </th>

                    <th
                      scope="col"
                      className=" py-3 text-center  font-medium   whitespace-nowrap"
                    >
                      Coin Price
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-center  font-medium   whitespace-nowrap"
                    >
                      1h
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-center  font-medium   whitespace-nowrap"
                    >
                      24h
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-center  font-medium   whitespace-nowrap"
                    >
                      7d
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-center  font-medium   whitespace-nowrap"
                    >
                      24th Volume
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-center  font-medium  whitespace-nowrap"
                    >
                      Market Cap
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-center  font-medium  whitespace-nowrap"
                    >
                      Last 7 days
                    </th>
                    {token && (
                      <th
                        scope="col"
                        className=" py-3 text-end font-medium  whitespace-nowrap"
                      >
                        Save
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {visibleData?.length > 0 &&
                    visibleData?.map((market, index) => (
                      <>
                        <tr key={index} className="  2xl:text-md xl:text-base">
                          
                          <td className=" py-4 text-center whitespace-nowrap  font-medium text-white ">
                            <div className="flex items-center  gap-2">
                              <div>
                                <Image
                                  src={market?.image}
                                  alt={market?.name}
                                  className="rounded-full"
                                  width={30}
                                  height={30}
                                />
                              </div>
                              <div> {market?.name}</div>
                            </div>
                          </td>

                          <td className="text-center whitespace-nowrap  text-white ">
                            <div className="flex flex-col items-center justify-center">
                              <div>{formatToUSD(market?.current_price)}</div>
                         
                            </div>
                          </td>
                          <td
                            className={`text-center whitespace-nowrap  text-white `}
                          >
                            <div
                              className={`flex justify-center items-center ${
                                market?.price_change_percentage_1h_in_currency ===
                                0
                                  ? "text-white"
                                  : market?.price_change_percentage_1h_in_currency <
                                    0
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {market?.price_change_percentage_1h_in_currency ===
                              0 ? (
                                <FaMinus size={15} className="text-white" />
                              ) : market?.price_change_percentage_1h_in_currency <
                                0 ? (
                                <FaCaretDown
                                  size={15}
                                  className="text-red-500"
                                />
                              ) : (
                                <FaCaretUp
                                  size={15}
                                  className="text-green-500"
                                />
                              )}
                              {(
                                market?.price_change_percentage_1h_in_currency *
                                100
                              ).toFixed(1)}
                              %
                            </div>
                          </td>

                          <td className="  text-center whitespace-nowrap  text-white ">
                            <div
                              className={`flex justify-center items-center ${
                                market?.price_change_percentage_24h_in_currency ===
                                0
                                  ? "text-white"
                                  : market?.price_change_percentage_24h_in_currency <
                                    0
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {market?.price_change_percentage_24h_in_currency ===
                              0 ? (
                                <FaMinus size={15} className="text-white" />
                              ) : market?.price_change_percentage_24h_in_currency <
                                0 ? (
                                <FaCaretDown
                                  size={15}
                                  className="text-red-500"
                                />
                              ) : (
                                <FaCaretUp
                                  size={15}
                                  className="text-green-500"
                                />
                              )}
                              {(
                                market?.price_change_percentage_24h_in_currency *
                                100
                              ).toFixed(1)}
                              %
                            </div>
                          </td>
                          <td className="  text-center whitespace-nowrap  text-white ">
                            <div
                              className={`flex justify-center items-center ${
                                market?.price_change_percentage_7d_in_currency ===
                                0
                                  ? "text-white"
                                  : market?.price_change_percentage_7d_in_currency <
                                    0
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {market?.price_change_percentage_7d_in_currency ===
                              0 ? (
                                <FaMinus size={15} className="text-white" />
                              ) : market?.price_change_percentage_7d_in_currency <
                                0 ? (
                                <FaCaretDown
                                  size={15}
                                  className="text-red-500"
                                />
                              ) : (
                                <FaCaretUp
                                  size={15}
                                  className="text-green-500"
                                />
                              )}
                              {(
                                market?.price_change_percentage_7d_in_currency *
                                100
                              ).toFixed(1)}
                              %
                            </div>
                          </td>
                          <td className=" text-center whitespace-nowrap  text-white ">
                            <div className="flex justify-center items-center ">
                              {formatToUSD(market?.total_volume)}
                            </div>
                          </td>
                          <td className="  text-center whitespace-nowrap  text-white ">
                            {formatToUSD(market?.market_cap)}
                          </td>
                          <td className=" text-center whitespace-nowrap  text-white ">
                            <div className="flex justify-center items-center ">
                              <Chart
                                sparkline={market?.sparkline_in_7d.price}
                                priceChange={
                                  market?.price_change_percentage_7d_in_currency
                                }
                              />
                            </div>
                          </td>
                        
                          <td className="py-7 flex justify-end whitespace-nowrap text-white">
                            {token ? (
                              savedData && savedData.includes(market?.id) ? (
                                // Render a filled bookmark if the coin is saved
                                <button
                                  className=""
                                  onClick={() => removeSavedCoin(market?.id)}
                                >
                                  <IoBookmark
                                    className="text-[#159055]"
                                    size={17}
                                  />
                                </button>
                              ) : (
                                // Render a button to save the coin
                                <button
                                  className=""
                                  onClick={() => saveCoin(market?.id)}
                                >
                                  <IoBookmarkOutline size={17} />
                                </button>
                              )
                            ) : null}
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="xsm:hidden md:hidden lg:block"> */}
      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      {/* </div> */}
      {visibleData?.length > 0 &&
        visibleData?.map((market, index) => (
          <div
            key={index}
            className="lg:hidden mt-4 space-y-2 flex justify-between"
          >
            <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
              <div className="w-full  ">
                <>
                  <div
                    className={`border-b border-[#494949] flex justify-between`}
                  >
                    <div className="py-2  pl-4 font-semibold">Coin</div>
                    <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                      <span>
                        <Image
                          src={market?.image}
                          alt={market?.name}
                          className="rounded-full "
                          width={30}
                          height={30}
                        />
                      </span>
                      {market?.name}
                    </div>
                  </div>

                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold">Coin Price</div>
                    <div className="flex flex-col items-center justify-center py-2  px-4">
                      <div className="">${market?.current_price}</div>
                      <div
                        className={
                          market?.price_change_percentage_24h === 0
                            ? "text-white"
                            : market?.price_change_percentage_24h < 0
                            ? "text-red-500 "
                            : "text-green-500 "
                        }
                      >
                        ({market?.price_change_percentage_24h})
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold">1h</div>
                    <div className="flex justify-end items-center py-2 px-4 ">
                      <div
                        className={`flex justify-center items-center ${
                          market?.price_change_percentage_1h_in_currency === 0
                            ? "text-white"
                            : market?.price_change_percentage_1h_in_currency < 0
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {market?.price_change_percentage_1h_in_currency ===
                        0 ? (
                          <FaMinus size={15} className="text-white" />
                        ) : market?.price_change_percentage_1h_in_currency <
                          0 ? (
                          <FaCaretDown size={15} className="text-red-500" />
                        ) : (
                          <FaCaretUp size={15} className="text-green-500" />
                        )}
                        {(
                          market?.price_change_percentage_1h_in_currency * 100
                        ).toFixed(1)}
                        %
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold">24h</div>
                    <div className="flex justify-end items-center py-2 px-4 ">
                      {" "}
                      <div
                        className={`flex justify-center items-center ${
                          market?.price_change_percentage_24h_in_currency === 0
                            ? "text-white"
                            : market?.price_change_percentage_24h_in_currency <
                              0
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {market?.price_change_percentage_24h_in_currency ===
                        0 ? (
                          <FaMinus size={15} className="text-white" />
                        ) : market?.price_change_percentage_24h_in_currency <
                          0 ? (
                          <FaCaretDown size={15} className="text-red-500" />
                        ) : (
                          <FaCaretUp size={15} className="text-green-500" />
                        )}
                        {(
                          market?.price_change_percentage_24h_in_currency * 100
                        ).toFixed(1)}
                        %
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold">7d</div>
                    <div className="flex justify-end items-center py-2 px-4 ">
                      {" "}
                      <div
                        className={`flex justify-center items-center ${
                          market?.price_change_percentage_7d_in_currency === 0
                            ? "text-white"
                            : market?.price_change_percentage_7d_in_currency < 0
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {market?.price_change_percentage_7d_in_currency ===
                        0 ? (
                          <FaMinus size={15} className="text-white" />
                        ) : market?.price_change_percentage_7d_in_currency <
                          0 ? (
                          <FaCaretDown size={15} className="text-red-500" />
                        ) : (
                          <FaCaretUp size={15} className="text-green-500" />
                        )}
                        {(
                          market?.price_change_percentage_7d_in_currency * 100
                        ).toFixed(1)}
                        %
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold"> 24th Volume</div>
                    <div className="flex justify-end items-center py-2 px-4 ">
                      {" "}
                      {formatToUSD(market?.total_volume)}
                    </div>
                  </div>
                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold"> Market Cap </div>
                    <div className="flex justify-end items-center py-2 px-4 ">
                      {" "}
                      {formatToUSD(market?.market_cap)}
                    </div>
                  </div>
                  <div className="border-b border-[#494949] flex justify-between">
                    <div className="py-2  pl-4 font-semibold">
                      {" "}
                      Last 7 days{" "}
                    </div>
                    <div className="flex-1 justify-end items-center py-2 px-4 ">
                      {" "}
                      <div className="flex justify-center items-center  ">
                        <Chart
                          sparkline={market?.sparkline_in_7d.price}
                          priceChange={
                            market?.price_change_percentage_7d_in_currency
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {token && (
                    <div className="flex justify-between border-t border-[#494949]">
                      <div className="py-2  pl-4 font-semibold">Save</div>

                      <div className="flex justify-end py-2 px-4">
                        <div className="flex items-center ml-16">
                          {savedData && savedData.includes(market?.id) ? (
                            // Render a filled bookmark if the coin is saved
                            <button className="">
                              <IoBookmark
                                className="text-[#159055]"
                                size={17}
                              />
                              {/* style={{ backgroundColor: "#1788FB" }} */}
                            </button>
                          ) : (
                            // Render a button to save the coin
                            <button
                              className=""
                              onClick={() => saveCoin(market?.id)}
                            >
                              <IoBookmarkOutline size={17} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              </div>
            </div>
            <div></div>{" "}
          </div>
        ))}
    </>
  );
};

export default Market;
