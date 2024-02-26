"use client";
import { useParams } from "react-router-dom";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { BiBookmark } from "react-icons/bi";

import Link from "next/link";
import axios from "axios";
import "./Market.css";
const Market = () => {
  const {id}  = useParams();
  const [allCoinData, setAllCoinData] = useState([]);
  const [savedCoins, setSavedCoins] = useState([]);
 console.log("save",savedCoins);
  const getUserdata = async () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setAllCoinData(res?.data);
     
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  };

  useEffect(() => {
    getUserdata();
  }, []);
  
  const saveCoin = async (id)=>{
    axios.post("watchlist", { id })
    .then((res)=>{
      setSavedCoins(res?.data)
      //  setSavedCoins((prevSavedCoins) => [...prevSavedCoins, savedCoin]);
  
    })
    .catch((err)=>{
      console.log("err--->",err)
    })
    }
  
  useEffect(() => {
    saveCoin();
  }, []);

  return (
    <>
 
    <div className="container hidden lg:block ">
        {/* <div className="border-b border-stone-500 mt-7" /> */}
        <div className="items-center">
        <div className="flex pb-3">
          <h1 className="font-bold text-2xl">Liquidity Intents</h1>
          <span>
            <LiaEyeSolid />
          </span>
        </div>
        <div className="flex pb-4">
          <h1 className="text-[#1788FB] font-bold text-3xl">
            {allCoinData.current_price}
          </h1>{" "}
          <span>{allCoinData.symbol}</span>
        </div>
        <div className="text-sm pb-4">{allCoinData.price}</div>
        <div className="text-sm pb-5">{allCoinData.pnl}</div>
      </div>

      {/* Border */}
      <div className="border-t border-white mt-2 pb-2"></div>

        <div className="container">
          <div className="rounded-lg">
          <h1 className="font-medium pt-5 text-3xl tracking-wide">Markets</h1>
            <div className="bg-[#1C1C1C]  text-white h-[550px] overflow-auto rounded-lg">
              <table className="w-full  ">
                <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
                  <tr className=" text-[#CECECE]  ">
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  "
                    >
                   Coin
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
              Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
              Coin Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                   Today’s PnL
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                    Trade
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
                    >
                    Save
                    </th>
                   
                  </tr>
                </thead>

                <tbody>
                  {allCoinData?.length > 0 &&
                   allCoinData?.map((market, index) => (
                      <>
                        <tr key={index}>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
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
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                          
                          </td>
                        
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            <div className="flex items-center justify-center gap-5">
                           <div>${market?.current_price} </div> 
                           <div>({market?.price_change_percentage_24h})
                            </div></div>
                          </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                     
                     </td>
                          <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
                            {/* {d.ChangesD} */}
                            <div className="flex justify-center items-center ">
                            <Link href="/">Trade</Link>
                            </div>
                          </td>
                          <td className="px-6 py-4  whitespace-nowrap text-md text-white flex justify-end ">
                        
                  {savedCoins.includes(savedCoins.id) ? (
                    // Render a filled bookmark if the coin is saved
                    <BiBookmark style={{ color: '#1788FB' }} />
                  ) : (
                    // Render a button to save the coin
                    <button onClick={() => saveCoin(savedCoins.id)}>
                      <BiBookmark />
                    </button>
                  )}
                  
              
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
    {allCoinData?.length > 0 &&
       allCoinData?.map((market, index) => (
          <div key={index} className="lg:hidden">
            <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
              <div className="w-full  ">
                <div className="">
                  <>
                    <div className="border-b border-[#494949] flex justify-between">
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
                      <div className="py-2  pl-4 font-semibold">Amount</div>
                      <div className=" py-2 pr-4 pl-4"></div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Coin Price</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4">
                         <div>  ${market?.current_price} </div>
                    <div>({market?.price_change_percentage_24h})</div>
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Today’s PnL</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4">
                 
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Trade</div>
                      <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                      <Link href="/">Trade</Link>
                        {/* <span className="flex items-center text-red-500 text-[11px]">
                          <FaCaretDown size={12} />
                          (-0.73%)
                        </span> */}
                      </div>
                    </div>
                    <div className="border-b border-[#494949] flex justify-between">
                      <div className="py-2  pl-4 font-semibold">Save</div>
                      <div>
                        <div className="flex justify-end  pr-4 pl-4">
                        <div className="flex justify-end">
                  {savedCoins.includes(savedCoins.id) ? (
                    // Render a filled bookmark if the coin is saved
                    <BiBookmark style={{ color: '#1788FB' }} />
                  ) : (
                    // Render a button to save the coin
                    <button onClick={() => saveCoin(savedCoins.id)}>
                      <BiBookmark />
                    </button>
                  )}
                  
                </div>
                        </div>
                        {/* <div className="flex justify-end  py-1.5 pr-4 pl-4">
                          <div className="w-44 bg-[#262626] rounded-full h-1.5 mt-1.5">
                            <div
                              className="bg-[#494949] h-1.5 rounded-full"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div> */}
                      </div>
                    </div>
                   
                  </>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Market;

//alt space l

// "use client";
// import { useParams } from "react-router-dom";
// import Image from "next/image";

// import React, { useEffect, useState } from "react";
// import { LiaEyeSolid } from "react-icons/lia";
// import { BiBookmark } from "react-icons/bi";

// import Link from "next/link";
// import axios from "axios";
// import "./Market.css";
// const Market = () => {
//   const {id}  = useParams();
//   const [allCoinData, setAllCoinData] = useState([]);
//   const [savedCoins, setSavedCoins] = useState([]);
//  console.log("save",savedCoins);
//   const getUserdata = async () => {
//     axios
//       .get(
//         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
//       )
//       .then((res) => {
//         setAllCoinData(res?.data);
     
//       })
//       .catch((err) => {
//         console.log("err --->", err);
//       });
//   };

//   useEffect(() => {
//     getUserdata();
//   }, []);
  
//   const saveCoin = async (id)=>{
//     axios.post("watchlist", { id })
//     .then((res)=>{
//       setSavedCoins(res?.data)
//       //  setSavedCoins((prevSavedCoins) => [...prevSavedCoins, savedCoin]);
  
//     })
//     .catch((err)=>{
//       console.log("err--->",err)
//     })
//     }
  
//   useEffect(() => {
//     saveCoin();
//   }, []);


//   return (
//     <>
//       <div className="container hidden lg:block ">
//         <div className="border-b border-stone-500 mt-7" />
//         <div className="flex flex-col md:flex-row items-center justify-between mt-6">
//           <div>
//             <div className="text-2xl justify-start">My Watchlist</div>
//           </div>
          
//         </div>
       

//         <div className="container">
//           <div className="rounded-lg">
//             <div className="bg-[#1C1C1C]  text-white h-[550px] overflow-auto rounded-lg">
//               <table className="w-full  ">
//                 <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl">
//                   <tr className=" text-[#CECECE]  ">
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium  "
//                     >
//                       Markets
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
//                     >
//                       Sell
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
//                     >
//                       Buy
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
//                     >
//                       52W Range
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
//                     >
//                       Changes 1D
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
//                     >
//                       Sentiment
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
//                     ></th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {allCoinData?.length > 0 &&
//                     allCoinData?.map((d, index) => (
//                       <>
//                         <tr key={index}>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
//                             <div className="flex items-center  gap-2">
//                               <div>
//                                 <Image
//                                   src={d.image}
//                                   alt="Picture of the author"
//                                   className="rounded-full"
//                                 />
//                               </div>
//                               <div>{d.name}</div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             {d.Sell}
//                           </td>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             {d.Buy}
//                           </td>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             <div className="flex items-center justify-center gap-5">
//                               <div>{d.WRange1}</div>
//                               <div>{d.WRange2}</div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             {d.ChangesD}
//                             <div className="flex justify-center items-center ">
//                               <div className="">
//                                 {/* <FaCaretDown
//                                   size={15}
//                                   className="text-[#FF0000]"
//                                 /> */}
//                               </div>
//                               <div className="text-[11px] text-[#FF0000]">
//                                 (-0.73%)
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4  whitespace-nowrap text-md text-white ">
//                             {d.Sentiments}
//                             <div className="w-full bg-[#262626] rounded-full h-1.5 mt-1.5">
//                               <div
//                                 className="bg-[#494949] h-1.5 rounded-full"
//                                 style={{ width: "90%" }}
//                               />
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 text-end justify-end flex whitespace-nowrap text-md text-white ">
//                             <Image
//                               src={d.chart}
//                               alt="Picture of the author"
//                               className="rounded-full"
//                             />
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

//       {allCoinData?.length > 0 &&
//         allCoinData?.map((d, index) => (
//           <div key={index} className="lg:hidden">
//             <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md m-5">
//               <div className="w-full  ">
//                 <div>
//                   <>
//                     <div className="border-b border-[#494949] flex justify-between">
//                       <div className="py-2  pl-4 font-semibold">Market</div>
//                       <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
//                         <span>
//                           <Image
//                             src={d.image}
//                             alt="Picture of the author"
//                             className="rounded-full w-7 "
//                           />
//                         </span>
//                         {d.name}
//                       </div>
//                     </div>
//                     <div className="border-b border-[#494949] flex justify-between">
//                       <div className="py-2  pl-4 font-semibold">Sell</div>
//                       <div className=" py-2 pr-4 pl-4">{d.Sell}</div>
//                     </div>
//                     <div className="border-b border-[#494949] flex justify-between">
//                       <div className="py-2  pl-4 font-semibold">Buy</div>
//                       <div className="flex justify-end items-center py-2 pr-4 pl-4">
//                         {d.Buy}
//                       </div>
//                     </div>
//                     <div className="border-b border-[#494949] flex justify-between">
//                       <div className="py-2  pl-4 font-semibold">52W Range</div>
//                       <div className="flex justify-end items-center py-2 pr-4 pl-4">
//                         {d.WRange1} - {d.WRange2}
//                       </div>
//                     </div>
//                     <div className="border-b border-[#494949] flex justify-between">
//                       <div className="py-2  pl-4 font-semibold">Change 1D</div>
//                       <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
//                         {d.ChangesD}{" "}
//                         <span className="flex items-center text-red-500 text-[11px]">
//                           {/* <FaCaretDown size={12} /> */}
//                           (-0.73%)
//                         </span>
//                       </div>
//                     </div>
//                     <div className="border-b border-[#494949] flex justify-between">
//                       <div className="py-2  pl-4 font-semibold">Sentiment</div>
//                       <div>
//                         <div className="flex justify-end  py- pr-4 pl-4">
//                           {d.Sentiments}
//                         </div>
//                         <div className="flex justify-end  py-1.5 pr-4 pl-4">
//                           <div className="w-44 bg-[#262626] rounded-full h-1.5 mt-1.5">
//                             <div
//                               className="bg-[#494949] h-1.5 rounded-full"
//                               style={{ width: "90%" }}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex justify-between">
//                       <div className="py-2  pl-4 font-semibold"></div>
//                       <div className="flex justify-end items-center py-2 pr-4 pl-4">
//                         <Image
//                           src={d.chart}
//                           alt="Picture of the author"
//                           className="rounded-full"
//                         />
//                       </div>
//                     </div>
//                   </>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//     </>
//   );
// };

// export default Market;
